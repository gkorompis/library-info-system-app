import {Button, Form} from 'react-bootstrap';
import axios from 'axios';

const WebFormSearch = () =>{
    const handleSubmit = async (event) => {
        event.preventDefault();
        const book_code = event.target[0].value
        const member_code = event.target[1].value
        console.log({book_code, member_code})
        const {data}= await axios.post(`http://localhost:5000/libary-info-system-app/collections/books/return/${book_code}?member_code=${member_code}`);
        const {error_message} = data;
        alert(error_message);
        console.log({data});
        event.target.reset();
  }
    const style_form = {
        width: "100%",
        backgroundColor: "#2C3333"
    }
    const style_children = {
        backgroundColor: "#2C3333",
        color: "#CBE4DE",
        width: "8cm",
        marginTop: ""
    }
    const style_submit = {backgroundColor: "#2E4F4F", color: "#CBE4DE"}
    return (
        <Form onSubmit={handleSubmit} style={style_form}>
        <Form.Group className="mb-3" controlId="" style={style_children}>
            <Form.Label style={style_children}>Book Code</Form.Label>
            <Form.Control type="text" placeholder="Enter book code to return"  />
        
            <Form.Label style={style_children}>Member Code</Form.Label>
            <Form.Control type="text" placeholder="Enter member code to return"  />
        </Form.Group>
        <Button variant="" type="submit" style={style_submit}>
            Submit
        </Button>
        </Form>
    
  );
}

export default WebFormSearch;