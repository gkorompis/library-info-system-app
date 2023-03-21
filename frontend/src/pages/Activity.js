import React, {useState} from 'react';
import Header from '../components/public/Header';
import InsidePageBar from '../components/Activity/InsidePageBar';

import BorrowBook from '../components/Activity/BorrowBook';
import ReturnBook from '../components/Activity/ReturnBook';

const Activity =()=>{
    const style_activity_page= {
        marginTop: '1cm',
        marginInline: "1cm",
    }
    const [state, setState] = useState({id: 'buttonBorrow'});
    const renderSwitch=(param)=>{
        switch(param){
            case 'buttonBorrow':
                return (<BorrowBook/>);
            case 'buttonReturn':
                return (<ReturnBook/>);
            default:
                return (<BorrowBook/>);
        }
    }; 
    const handler = {
        buttonHandler: (e)=>{
            setState({id: e.target.id });
        }
    } 
    const style_div = {
        width: "100%",
        backgroundColor: "",
        marginTop: "18px"
    }
    return (
        <div>
            <Header/>
            <div className="activity-page" style={style_activity_page}>
                <div><InsidePageBar handler={handler} /></div>
                <div className="d-flex flex-row justify-content-center" style={style_div}>
                    {renderSwitch(state.id)} 
                </div>
                
            </div>
        </div>
        
    )

};

export default Activity;