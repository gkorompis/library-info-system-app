import React, {useState} from 'react';
import Header from '../components/public/Header';
import InsidePageBar from '../components/Database/InsidePageBar';

import MemberCollection from '../components/Database/MemberCollection';
import BookCollection from '../components/Database/BookCollection';

const Activity =()=>{
    const style_activity_page= {
        margin: '10px',
        marginTop: '1cm',
        marginInline: "1cm",
    }
    const [state, setState] = useState({id: 'buttonBorrow'});
    const renderSwitch=(param)=>{
        switch(param){
            case 'buttonBookCollection':
                return (<BookCollection/>);
            case 'buttonMemberCollection':
                return (<MemberCollection/>);
            default:
                return (<BookCollection/>);
        }
    }; 
    const handler = {
        buttonHandler: (e)=>{
            setState({id: e.target.id });
        }
    } 
    return (
        <div>
            <Header/>
            <div className="activity-page" style={style_activity_page}>
                <InsidePageBar handler={handler} />
                {renderSwitch(state.id)}
            </div>
        </div>
        
    )

};

export default Activity;