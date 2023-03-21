import AWS from 'aws-sdk';
import dotenv from 'dotenv';

dotenv.config();

const accessKeyId = process.env.ACCESS_KEY_ID;
const secretAccessKey = process.env.SECRET_KEY_ID;

let awsConfig = {
        "region": "ap-southeast-3",
        "endpoint": "http://dynamodb.ap-southeast-3.amazonaws.com",
        "accessKeyId": accessKeyId, "secretAccessKey": secretAccessKey
    };
AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();

const addItems = (collection_name, new_insert) =>{
        var params = {
            TableName: collection_name,
            Item: new_insert,
        };
        docClient.put(params, (err, data)=> {
            if (err) {
                console.log("users::postNewCollection::error - " + JSON.stringify(err, null, 2));                      
            } else {
                console.log("users::postNewCollection::success");                      
            }
        }); 
};

const updateItems = (collection_name, key, update_expression, expression_attr)=>{
    var params = {
        TableName: collection_name,
        Key: key,
        UpdateExpression: update_expression,
        ExpressionAttributeValues: expression_attr,
        ReturnValues: "UPDATED_NEW" 
    };
    docClient.update(params, function (err, data) {
        if (err) {
            console.log("users::update::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("users::update::success ");
        }
    });
};

const getOneItems = async (collection_name, key)=>{
    var params = {
        TableName: collection_name,// give it your table name 
        Key: key
    }; 
    const payload = await docClient.get(params).promise();
    return payload
};

const getAllItems = async (collection_name, key)=>{
    var params = {
        TableName: collection_name,// give it your table name 
        Key: key
    }; 
    const payload = await docClient.scan(params).promise();
    return payload
};

const ddb = { 
    addItems,
    updateItems,
    getOneItems,
    getAllItems
}


const collection_name = "collection-books"
// TEST ADD ITEMS
// const new_insert = {
//         code: "SHR-1",
//         title: "A Study in Scarlet",
//         author: "Arthur Conan Doyle",
//         stock: 1
// }
// ddb.addItems(collection_name, new_insert)


// TEST UPDATE ITEMS
// const stock_now = 2
// const key = {"code":"KC-1"}
// const update_expression = 'set stock = :stock_value';
// const expression_attr = {":stock_value": stock_now || 0};
// ddb.updateItems(collection_name, key, update_expression, expression_attr)

// TEST GET ITEMS
// const test_get_items=async ()=>{
//     const key_get = {"code": "KC-1"}
//     const payload = await ddb.getOneItems(collection_name, key_get) ;
//     console.log({payload})
// }; 
// test_get_items()

// TEST GET ALL ITEMS
// const test_get_all_items=async ()=>{
//     // const key_get = {"code": "KC-1"}
//     const payload = await ddb.getAllItems(collection_name) ;
//     console.log({payload})
// }; 
// test_get_all_items();












