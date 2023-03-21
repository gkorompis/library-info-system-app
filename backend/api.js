import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

// custom node.js
import ddb from './dynamodb.js';

const app = express();

//middlewares
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

//routes
// api get book collections
app.get("/libary-info-system-app/collections/books", async (req, res)=>{
    const table_name = "collection-books";
    const payload = await ddb.getAllItems(table_name);
    console.log("Success", payload);
    res.status(200).json(payload);
});
// api get member collections
app.get("/libary-info-system-app/collections/members", async (req, res)=>{
    const table_name = "collection-members";
    const payload = await ddb.getAllItems(table_name);
    console.log("Success", payload);
    res.status(200).json(payload);
}); 

// api update stock
app.post("/libary-info-system-app/collections/books/borrow/:book_code", async (req, res)=>{

    // necessary variables
    const {book_code} = req.params;
    const {member_code} = req.query || "";
    if (book_code && member_code) {
        try{
            const collection_book = "collection-books";
            const collection_member = "collection-members";
            const key_book = {"code":book_code}
            const key_member = {"code": member_code}

            //get existing items from databse
            const payload_member = await ddb.getOneItems(collection_member, key_member);
            const payload_book = await ddb.getOneItems(collection_book, key_book);

            const member_details = payload_member.Item;
            const book_details = payload_book.Item;

            const member_borrowing = member_details["borrowing"] ? ( member_details["borrowing"].includes(book_code)? member_details["borrowing"] : [...member_details["borrowing"], book_code]) : [book_code];
            const max_borrowing = 2;

            const {available, stock, borrower} = book_details;
            const bookAvailable = available ? available : (available === 0 ? available : stock);
        
            // member borrow <= 2 books AND book is available
            if (member_borrowing.length <= 2 && bookAvailable ) {
                    
                    book_details["borrower"] = borrower ? book_details["borrower"] : []
                    const book_borrower = book_details["borrower"].includes(member_code)? false : [...book_details["borrower"], member_code];

                    // in case book already borrowed by the member
                    if(!book_borrower){
                        const statusResponse = 200;
                        const messageResponse = {
                            book_code,
                            member_code,
                            error_message: `book code ${book_code} already borrowed by member ${member_code}`
                        }
                        res.status(statusResponse).json(messageResponse);
                    } else {
                        const update_expression_book = 'set borrower = :list_borrower, available = :count_available';
                        const update_expression_member = 'set borrowing = :list_borrowing, quota = :count_quota';
                        const expression_attr_book = {":list_borrower": book_borrower || [], ":count_available": (+book_details.stock - +book_borrower.length)};
                        const expression_attr_member = {":list_borrowing": member_borrowing || [], ":count_quota": (max_borrowing - +member_borrowing.length)};

                        ddb.updateItems(collection_book, key_book, update_expression_book, expression_attr_book);
                        ddb.updateItems(collection_member, key_member, update_expression_member, expression_attr_member);
                        console.log("Success", book_code, member_code);
                        const statusResponse = 200;
                        const messageResponse = {
                            book_code,
                            member_code,
                            available: (+book_details.stock - +book_borrower.length),
                            quota: (max_borrowing - +member_borrowing.length),
                            error_message: "Borrowing Success"

                        }
                        res.status(statusResponse).json(messageResponse);
                    }  
            } else {
                // in case book book is not available
                if (bookAvailable == 0){
                    const statusResponse = 200;
                    const messageResponse = {
                        error_message: `book code ${book_code} is currently not available. `
                    }
                    res.status(statusResponse).json(messageResponse);

                } else {
                    // in case limit to borrow is exceeding
                    const statusResponse = 200;
                    const messageResponse = {
                        
                        error_message: `member ${member_code} exceeding limit borrowing quota.`
                    }
                    res.status(statusResponse).json(messageResponse);
                }
            }

        } catch(err) {
            const statusResponse = 200;
            const response = {
                error_message: `Invalid input.`
            }
            res.status(statusResponse).json(response);
        }
            
    } else {
        const statusResponse = 200;
        const response = {
            error_message: `incorrect input`
        }
        res.status(statusResponse).json(response);
    }
        // res.status(200).json({book_code, member_code, payload_book, payload_member, book_borrower, member_borrowing});
});


app.post("/libary-info-system-app/collections/books/return/:book_code", async (req, res)=>{
    // necessary variables
    const {book_code} = req.params;
    const {member_code} = req.query || "";
    if(book_code && member_code) {
    const collection_book = "collection-books";
    const collection_member = "collection-members";
    const key_book = {"code":book_code}
    const key_member = {"code": member_code}
        
        try{
            //get existing items from databse
            const payload_member = await ddb.getOneItems(collection_member, key_member);
            const payload_book = await ddb.getOneItems(collection_book, key_book);

            const member_details = payload_member.Item;
            const book_details = payload_book.Item;

            const {borrowing, quota} = member_details;
            const {available,borrower, stock} = book_details;

            // expect book is borrowed by member before return
            if(borrowing && borrower) {
                    if(borrowing.includes(book_code) && borrower.includes(member_code)){
                        const index_book = borrowing.indexOf(book_code);
                        borrowing.splice(index_book, 1);
                        const newQuota = quota + 1;

                        const index_member = borrower.indexOf(member_code);
                        borrower.splice(index_member, 1);
                        const newAvailable = +stock - +borrower.length;

                        // update items
                        const update_expression_book = 'set borrower = :list_borrower, available = :count_available';
                        const update_expression_member = 'set borrowing = :list_borrowing, quota = :count_quota';
                        const expression_attr_book = {":list_borrower": borrower || [], ":count_available": newAvailable};
                        const expression_attr_member = {":list_borrowing": borrowing || [], ":count_quota": newQuota};

                        ddb.updateItems(collection_book, key_book, update_expression_book, expression_attr_book);
                        ddb.updateItems(collection_member, key_member, update_expression_member, expression_attr_member);


                        const response = {
                            book_code, member_code, newQuota, newAvailable, error_message: `Thanks for returning Book ${book_code}!`
                        }
                        res.status(200).json(response);
                    } else {
                        // in case book is not borrowed
                        const response = {
                            error_message: 'book is not borrowed or member does not borrow the book.'
                        }
                        res.status(200).json(response);
                } 
            } else {
                const response = {
                        error_message: 'Member has not borrowed anything yet.'
                    }
                res.status(200).json(response);
            }     
        } catch(err) {
            const response = {
                    error_message: 'Invalid Input'
                }
            res.status(200).json(response); 
        }
        
    } else {
        const response = {
                error_message: 'Incorrect code'
            }
        res.status(200).json(response); 
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`server running on port: ${PORT}`));