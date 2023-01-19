import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Footer.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Footer(props) {
  return (
    <footer className="py-5">
      <Container>
        <Row>
          <Col>
            <img alt="" src={props.src} />
            <p className="">
              Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
            </p>
            <div className="d-flex">
              <FaFacebookF/>
              <FaTwitter/>
              <FaLinkedinIn/>
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
                <div className="d-flex ">
                  <FaMapMarkerAlt />
                  <p className="contacts mx-2">Cairo - Downtown Street 23</p>
                </div>
                <div className="d-flex ">
                  <FaPhoneAlt />
                  <p className="contacts mx-2">+41 61 228 90 40</p>
                </div>
                <div className="d-flex ">
                  <FaEnvelope />
                  <p className="contacts mx-2">info@grid.com.eg</p>
                </div>
                <h6>Useful Links</h6>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
                
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;
