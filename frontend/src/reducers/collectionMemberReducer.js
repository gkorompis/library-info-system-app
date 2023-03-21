const collectionMemberReducer=(state={collectionMember: []}, action)=>{
    
    switch(action.type){
        case "COLLECTION_MEMBER_REQUEST":
            return {loading: true}
        case "COLLECTION_MEMBER_SUCCESS":
            return {loading: false, collectionMember: action.payload}
        case "COLLECTION_MEMBER_ERROR":
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export default collectionMemberReducer;