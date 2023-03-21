import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'; 

const InsidePageBar= ({handler})=> {
 
  const {buttonHandler} = handler;
  const style_button = {backgroundColor: "#2E4F4F", color: "#CBE4DE"}

  return (
    <ButtonGroup aria-label="Basic example"> 
        <Button id="buttonBorrow" variant="" onClick={buttonHandler} style={style_button}>Borrow Book</Button>  
        <Button id="buttonReturn" variant="" onClick={buttonHandler} style={style_button}>Return Book</Button> 
    </ButtonGroup>
  );
}

export default InsidePageBar;