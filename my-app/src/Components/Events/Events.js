import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import eventimgone from '../../assets/Component 54 – 12.png';
import calen from '../../assets/calendar (2).png';
import './Events.css';
function Events() {

  return (
    <div className="m-5">
     <Container fluid>
     <Row>
        <Col sm={5}>
          <div className="">
            <small className="events--small">MULTIOFFICE EVENTS</small>
            <h2 className="stories--txt">Read up on latest</h2>
            <button className="social-btn  m-0">View All</button>

          </div>
        </Col>
        <Col sm={6}>
        <CardGroup>
     
      <Card>
      <div className="zoom-img">
    <Card.Img className="eve-img-re" variant="top" src={eventimgone} />

    </div>        <Card.Body>
         
          <small className="events-cal"> <img alt="" src={calen} /><span>September 13, 2019 - August 2, 2021</span></small>
          <Card.Text className="events-txt">
          David Droga Still Has Faith in Online Advertising
          </Card.Text>
        </Card.Body>
        
      </Card>
      
      <Card>
    <div className="zoom-img">
    <Card.Img className="eve-img-re" variant="top" src={eventimgone} />

    </div>
          <Card.Body>
         
          <small className="events-cal"> <img alt="" src={calen} /><span>September 13, 2019 - August 2, 2021</span></small>
          <Card.Text className="events-txt">
          David Droga Still Has Faith in Online Advertising
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
        </Col>
      </Row>
     </Container>
    </div>
  );
}

export default Events;
