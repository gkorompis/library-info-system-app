import {Button, Form} from 'react-bootstrap';
import axios from 'axios';

const WebFormSearch = ({bookDetails}) =>{
    const {code, title, author, stock} = bookDetails;
    const handleSubmit = async (event) => {
        event.preventDefault();
        const target = event.target[0].value
        const request = {
            code: {
                member: target,
                book: code,
            }
        }
        const {data}= await axios.post(`http://localhost:5000/libary-info-system-app/collections/books/borrow/${code}?member_code=${target}`);
        const {error_message} = data
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
        width: "8cm"
    }
    const style_submit = {backgroundColor: "#2E4F4F", color: "#CBE4DE"}
    return (
        <Form onSubmit={handleSubmit} style={style_form}>
        <Form.Group className="mb-3" controlId="formBasicEmail" style={style_children}>
            <Form.Label style={style_children}>Member Code</Form.Label>
            <Form.Control type="text" placeholder="Enter member code to proceed"  />
        </Form.Group>
        <Button variant="" type="submit" style={style_submit}>
            Submit
        </Button>
        </Form>
    
  );
}

export default WebFormSearch;