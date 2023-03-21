import React, {useState} from 'react';
import {Card, Button, Modal} from 'react-bootstrap';
import ModalBorrowBook from './WebCard/ModalBorrowBook';

const WebCard = ({bookDetails}) =>{
    const {code, title, author, stock, available} = bookDetails;
    const bookAvailable = available ? available : available == 0 ? available : stock;
    const style_card = { width: '17rem', height: '17rem', margin: '0.2cm' , borderRadius: "2%", backgroundColor:"#2C3333"}
    const style_card_div = { height: "90%", backgroundColor: "#2C3333"};
    const style_card_body = {backgroundColor:"#2C3333", borderRadius: "5%" }
    const style_children = {backgroundColor: "#2C3333", color: "#CBE4DE"}
    const style_button = {backgroundColor: "#2E4F4F", color: "#CBE4DE"}
    const style_modal = {backgroundColor: "rgba(203, 228, 222, 0.05)" }

    //modals
    const [modalShow, setModalShow] = React.useState(false);
    const borrowButtonHandler = () =>{
        setModalShow(true);
    };
    
    return (
        <>
            <Card style={style_card}> 
                <Card.Body style={style_card_body}>
                <div className="d-flex flex-column justify-content-between" style={style_card_div}>
                    <div style={style_children}>
                        <Card.Title style={style_children}>{title}</Card.Title>
                    </div>
                    <div style={style_children}>
                        <Card.Text style={style_children}>Code: {code}<br/>Author: {author}<br/>Available: {bookAvailable}</Card.Text>
                        <Button variant="" style={style_button} onClick={borrowButtonHandler}>Borrow</Button>
                    </div> 
                </div> 
                </Card.Body>  
            </Card>
            <ModalBorrowBook show={modalShow} onHide={()=>{setModalShow(false)}} style={style_modal} bookDetails={bookDetails}/>
        </>
        
    ) 
};

export default WebCard;