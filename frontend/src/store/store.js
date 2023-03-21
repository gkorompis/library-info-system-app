import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import collectionBookReducer from '../reducers/collectionBookReducer';
import collectionMemberReducer from '../reducers/collectionMemberReducer';


const store = configureStore({
    reducer: {
        collectionBooks: collectionBookReducer,
        collectionMembers: collectionMemberReducer
    },
    middleware: [thunk]
});

export default store;