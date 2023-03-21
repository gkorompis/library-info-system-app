import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, Container} from 'react-bootstrap';
import WebCard from './BorrowBook/WebCard';
import bookCollection from '../../actions/bookCollection';
// import collectionBook from '../../data/collectionBook';
import ModalBorrowBook from './BorrowBook/WebCard/ModalBorrowBook';



const BorrowBook = () =>{
    // css
    const style_borrow_book = {
        marginTop: "20px",
        width: "100%",
        backgroundColor: "rgba(105,105,105,0)", 
        opacity: ""
    };
    const style_row = {
        marginTop: "10px",
        width: "100%",
        backgroundColor: "rgba(105,105,105,0)", 
    };
    const style_col = {
        marginTop: "",
        width: "100%",
        backgroundColor: "", 
    };
    const style_div = {
        backgroundColor: "",
        width: "100%",
        borderBottom: "2.7px solid #2E4F4F",
    }

    // useSelector, useDispatch, useEffect
    const dispatch = useDispatch();
    const collectionBooks = useSelector(state => state.collectionBooks);
    const {loading, collectionBook, error} = collectionBooks; 

    useEffect(()=>{
        dispatch(bookCollection())
    }, dispatch)

    
    return (
        <div className="d-flex flex-column align-items-center" style={style_borrow_book}> 
                <div style={style_div}>
                    <h1>Books</h1>
                </div> 
                {
                    loading ? <h1>loading...</h1> :
                        error ? <h1>error: {error}</h1> :
                            <Row style={style_row}>
                                {collectionBook.map(x =><Col key={x.code} sm={6} md={4} lg={3} style={style_col}><WebCard bookDetails={x}/></Col> )}
                            </Row> 
                }
                {/* <Row style={style_row}>
                    {collectionBook.map(x =><Col key={x.code} sm={6} md={4} lg={3} style={style_col}><WebCard bookDetails={x}/></Col> )}
                </Row>  */} 
        </div> 
    )
};



export default BorrowBook