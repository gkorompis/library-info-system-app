import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
import WebTable from './MemberCollection/WebTable';
import memberCollection from '../../actions/memberCollection';

// import collectionMember from '../../data/collectionMember';


const MemberCollection = () =>{
    // css
    const style_parent = {
        marginTop: "20px"
    };
    // useDispatch, useSelector, useEffect
    const dispatch = useDispatch();
    const collectionMembers = useSelector(state => state.collectionMembers);
    const {loading, collectionMember, error} = collectionMembers; 

    useEffect(()=>{
        dispatch(memberCollection())
    }, dispatch)
    return (
        <div style={style_parent}>
            <h1>Members</h1>
            {
                loading ? <h1>loading</h1> :
                    error ? <h1>error: {error}</h1> :
                        !collectionMember? <h1>collection empty</h1> :
                        +collectionMember.length? <WebTable data={collectionMember}/> :
                            <h1>no member yet</h1>
            }
            
        </div>
        
    )
};

export default MemberCollection;