// import collectionBook from '../data/collectionBook';
import axios from 'axios';

const bookCollection = ()=> async(dispatch) =>{
    try {
        dispatch({type: "COLLECTION_BOOK_REQUEST"});
        const {data} = await axios.get('http://localhost:5000/libary-info-system-app/collections/books');
        const collectionBook = data["Items"] || []; 
        dispatch({type: "COLLECTION_BOOK_SUCCESS", payload: collectionBook});
    }
    catch(error) {
        dispatch({type: "COLLECTION_BOOK_ERROR", payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
                })

    }
};

export default bookCollection;