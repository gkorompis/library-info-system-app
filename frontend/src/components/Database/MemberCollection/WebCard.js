import {Card, Button} from 'react-bootstrap';

const WebCard = ({bookDetails}) =>{
    const {code, title, author, stock} = bookDetails;
    return (
        <Card style={{ width: '18rem' }}> 
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>Code: {code}</Card.Text>
                <Card.Text>Author: {author}</Card.Text>
                <Card.Text>Stock: {stock}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    ) 
};

export default WebCard;