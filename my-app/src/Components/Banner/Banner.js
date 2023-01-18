import banner from "../../assets/homebanner.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Banner.css';
function Banner() {
  return (
    <div className="d-flex">
      <Container fluid>
        <Row>
          <Col sm={5}>
            <h1  className="banner--head">Shifting</h1>
            <p className="banner--par">
              Whether you’re an established enterprise or a growing startup,
              discover flexible spaces and solutions to move your business
              forward.
            </p>
            <button className="button--banner">Discover More</button>
          </Col>
          <Col  sm={7} className="p-0 bannerr-right">
            <div className="box"></div>
            <div className="overlay"></div>
            <img alt="" width='' className="banner--img" src={banner}/>

          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Banner;
