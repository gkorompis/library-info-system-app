import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'; 

const InsidePageBar= ({handler})=> {
 
  const {buttonHandler} = handler;
  const style_button = {backgroundColor: "#2E4F4F", color: "#CBE4DE"}
  return (
    <ButtonGroup aria-label="Basic example"> 
        <Button id="buttonBookCollection" variant="" onClick={buttonHandler} style={style_button}>Book Collection</Button>  
        <Button id="buttonMemberCollection" variant="" onClick={buttonHandler} style={style_button}>Member Collection</Button> 
      
    </ButtonGroup>
  );
}

export default InsidePageBar;