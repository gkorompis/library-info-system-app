import React from 'react'; 
import WebFormSearch from './ReturnBook/WebFormSubmit';
import WebCardWrapper from './ReturnBook/WebCardWrapper'


const ReturnBook = () =>{
    const style_borrow_book = {
        marginTop: "20px",
        width: "100%",
        // backgroundColor: "grey",
        height: "12cm",
        border: "",
        borderRadius: "10px"
    };
    const style_children = {
        marginTop: "10px",
        width: "10cm",
        backgroundColor: " "
    };
    const style_div = {
        backgroundColor: "",
        width: "100%",
        borderBottom: "2.7px solid #2E4F4F",
    }
    return (
        <div className="d-flex flex-column align-items-start" style={style_borrow_book}>
            <div style={style_div}>
                    <h1>Returning</h1>
            </div>
            <div style={style_children}>
                <WebCardWrapper children={<WebFormSearch/>}/>
            </div>
            
        </div>
        
    )
};

export default ReturnBook