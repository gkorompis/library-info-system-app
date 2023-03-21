import React, {useState} from 'react';
import Header from '../components/public/Header';
import {Card, Button} from 'react-bootstrap';


const Activity =()=>{
    const [state, setState] = useState({
        show: true,
    })

    const buttonShowHandler = () =>{
        state.show ? setState({show: false}) : setState({show: true});
    }

    return (
        
        <div>
            <Header/>
            <Button variant="primary" size="lg" onClick={buttonShowHandler}>show</Button>
            <div className="activity-page d-flex">
                {state.show ? <CardHolder/> : null}
             </div>
        </div>
        
    )
    
};

const CardHolder = () =>{
    return(
        <Card>
            <h1>Members</h1>
            <h2>Books</h2>
            <h1>Lala</h1>
        </Card>
    )
};


export default Activity;