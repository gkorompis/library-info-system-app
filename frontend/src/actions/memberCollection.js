// import collectionMember from '../data/collectionMember'
import axios from 'axios';


const memberCollection = ()=> async(dispatch) =>{
    try {
        dispatch({type: "COLLECTION_MEMBER_REQUEST"});
        const {data} = await axios.get('http://localhost:5000/libary-info-system-app/collections/members');
        const collectionMember = data["Items"] || [];
        dispatch({type: "COLLECTION_MEMBER_SUCCESS", payload: collectionMember});
    }
    catch(error) {
        dispatch({type: "COLLECTION_MEMBER_ERROR", payload: error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message
                })

    }
};

export default memberCollection;