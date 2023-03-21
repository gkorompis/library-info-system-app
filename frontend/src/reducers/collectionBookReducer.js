const collectionBookReducer=(state={collectionBook: []}, action)=>{
    switch(action.type){
        case "COLLECTION_BOOK_REQUEST":
            return {loading: true}
        case "COLLECTION_BOOK_SUCCESS":
            return {loading: false, collectionBook: action.payload}
        case "COLLECTION_BOOK_ERROR":
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export default collectionBookReducer;