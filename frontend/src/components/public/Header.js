import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    const navbar_bg_color = "#2C3333"
    const text_font_color ="#CBE4DE" ||"#FFD369";
    const style_navbar = {
      backgroundColor:navbar_bg_color, 
      color: text_font_color,
      // borderBottomStyle: "solid",
      // borderBottomWidth: "1px",
    }
    return (
        <header>
    <Navbar style={style_navbar}>
      <Container style={{backgroundColor:navbar_bg_color, color: text_font_color, width: ""}}>
        <div className="d-flex justify-content-between" style={{backgroundColor: navbar_bg_color, width: "100%"}}>
            <div style={{backgroundColor: navbar_bg_color}}>
<LinkContainer to="/" style={{backgroundColor:navbar_bg_color, color: text_font_color}}>
              <Navbar.Brand>LIBRARY APP</Navbar.Brand> 
            </LinkContainer > 
            </div>
            <div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{backgroundColor:navbar_bg_color, color: text_font_color}}>
              <Nav className="ms-auto" style={{backgroundColor:navbar_bg_color, color: text_font_color}}>
                <LinkContainer to="/activity" style={{backgroundColor:navbar_bg_color, color: text_font_color}}>
                  <Nav.Link>Activity</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/database" style={{backgroundColor:navbar_bg_color, color: text_font_color}}>
                  <Nav.Link>Database</Nav.Link>
                </LinkContainer>
              </Nav>
              </Navbar.Collapse>

            </div>
            
        </div>
        
      </Container>
    </Navbar>
        </header>
    )
};

export default Header;