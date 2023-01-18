import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import fb from '../../assets/Facebook Icon.png';
import twit from '../../assets/Twiiter Icon.png';
import link from '../../assets/linkedin.png';
import './Footer.css';

function Footer(props) {

  

  
  return (
    
    <footer className="py-5">
      <Container  >
        <Row>
          <Col>
          

            <img alt="" src={props.src} />
            <p className="">
                Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
            </p>
            <div className="d-flex">
            <img className="mx-2" alt="" width='13' height='15' src={fb} />
            <img className="mx-2" alt="" width='13' height='15' src={twit} />
            <img className="mx-2" alt="" width='13' height='15' src={link} />
              
                
            </div>

            <small>© 2022 GRID . All rights reserved.</small>


          </Col>
          <Col>

            <h6>GRID Links</h6>
            <div className="d-flex">
            <ul className="ul-links">
                <li>News & Highlights</li>
                <li>Articles & Blogs</li>
                <li>Media Library</li>
                <li>Contact Us</li>
                <li>Benefits</li>
                <li>Faqs</li>
                <li>Events</li>
                <li>About Us</li>
                <li>Eco-System</li>
            </ul>
            <div className="mx-5">
                <h6>Contact Us</h6>
                <h6>Useful Links</h6>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                
                <div>
               

                </div>
            </div>
            </div>
          </Col>
        </Row>
        
      </Container>
    </footer>
  );
}
export default Footer;
