import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import WebTable from './BookCollection/WebTable';
import bookCollection from '../../actions/bookCollection';

// import collectionBook from '../../data/collectionBook';


const BookCollection = () =>{
    // css
    const style_parent = {
        marginTop: "20px"
    };
    // useSelector, useDispatch, useEffect
    const dispatch = useDispatch();
    const collectionBooks = useSelector(state => state.collectionBooks);
    const {loading, collectionBook, error} = collectionBooks;

    useEffect(()=>{
        dispatch(bookCollection());
    }, dispatch)
    return (
        <div style={style_parent}>
            <h1>Books</h1>
            {
                    loading ? <h1>loading...</h1> :
                        error ? <h1>error: {error}</h1> :
                            collectionBook ? <WebTable data={collectionBook}/>  : <h1>empty collection</h1>
                }
            
        </div>
        
    )
};

export default BookCollection;