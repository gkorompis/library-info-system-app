import {Card, Button} from 'react-bootstrap';

const WebCard = ({children}) =>{
    // const {code, title, author, stock} = bookDetails;
    const style_card = { width: '100%', height: '17rem', margin: '0.2cm' , borderRadius: "2%", backgroundColor:"#2C3333"}
    const style_card_div = {backgroundColor: "#2C3333"};
    const style_card_body = {backgroundColor:"#2C3333", borderRadius: "5%" }
    const style_children = {backgroundColor: "#2C3333", color: "#CBE4DE"}
    const style_button = {backgroundColor: "#2E4F4F", color: "#CBE4DE"}
    return (
        
        <Card style={style_card}> 
            <Card.Body style={style_card_body}>
                <div className="d-flex flex-row justify-content-center" style={style_card_div}>
                    <div>
                        {children}
                    </div>
                </div>
            </Card.Body> 
        </Card>
    ) 
};

export default WebCard;