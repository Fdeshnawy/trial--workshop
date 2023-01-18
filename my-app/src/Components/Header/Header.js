import { Link } from "@mui/material";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {FaSearch} from 'react-icons/fa';
import "./Header.css";
import ImageAvatars from "./ImageAvatars";


function Header(props) {
  return (
    <Navbar bg="" expand="lg" variant="">
      <Container fluid className="px-5">
        <Navbar.Brand href="#home">
          <img
            src={props.src}
            className="d-inline-block align-top logo"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll ">
          <Nav
            className="mx-auto my-2 my-lg-0 "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="About"  id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" >OurStory</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Collab
              </NavDropdown.Item>
             
              <NavDropdown.Item href="#action5">
                Innovate
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Learn
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Grow
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">FinTech Egypt</Nav.Link>
           
            <NavDropdown title="Get Involved" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Startups</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               Investors
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Mentors
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Financial institutions
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Interested in FinTech
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Students
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Publish News</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               Publish Article
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Request to be a member
              </NavDropdown.Item>
             
            </NavDropdown>
            <Nav.Link href="#action2">Contact Us</Nav.Link>
            <NavDropdown title="More" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Success Stories</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
               Media Gallery
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Grid Benefits
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Member Benefits
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                GRID Programs
              </NavDropdown.Item>
         
            </NavDropdown>
          </Nav>
          <FaSearch className="icons"/>
          <Nav>
            
            <NavDropdown title="EN" id="navbarScrollingDropdown">
              <NavDropdown.Item ><Link to='/'>AR</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <ImageAvatars />
          <Nav className="me-5">
            <NavDropdown title="Nada" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Edit Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Change Password</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Sign Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
