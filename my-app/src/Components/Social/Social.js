import social from "../../assets/shutterstock.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Social.css';

function Social() {
  return (
    <div className="d-flex">
      <Container fluid>
        <Row>
          <Col sm={6} className="p-0 bannerr-right">
            <img alt="" width="" className="social--img" src={social} />

          </Col>
          <Col sm={6} className='mt-5 textsection-social'>
            <small className="social--small">ABOUT GRID</small>
            <h2 className="social--head">Enhanced social distancing measures</h2>
            <p className="social--text">
              Whether you’re an established enterprise or a growing startup,
              discover flexible spaces and solutions to move your business
              forward. <br /> <br/> FinTech has recently become a promising and
              emerging industry across the globe that uses technology and
              innovation to broaden the frontiers of financial activities.
            </p>
            <button className="social-btn w-25 m-0">Read More</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Social;
