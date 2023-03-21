import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import WebFormSubmit from './ModalBorrowBook/WebFormSubmit'

const ModalBorrowBook=(props)=> {
  const style_modal = { 
      backgroundColor: "",
  }
  const style_children = {
    backgroundColor: "rgba(44, 51, 51, 1)",
    color: "rgb(231, 225, 225)"
  }
  const style_button = {backgroundColor: "#2E4F4F", color: "#CBE4DE"}
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={style_modal}
    >
      <Modal.Header style={style_children}>
        <Modal.Title id="contained-modal-title-vcenter" style={style_children}>
          Enter member code to proceed
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={style_children}>
       
        <WebFormSubmit bookDetails = {props.bookDetails}/>
      </Modal.Body>
      <Modal.Footer style={style_children}>
        <Button onClick={props.onHide} style={style_button}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalBorrowBook;

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// render(<App />);