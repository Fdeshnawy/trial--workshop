import * as React from "react";
import Divider from "@mui/material/Divider";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Stories.css";
import storyOne from "../../assets/Component 54 – 12.png";
import storyTwo from "../../assets/Component 54 – 13.png";
import storyThree from "../../assets/Component 54 – 14.png";
import pen from "../../assets/Date.png";
import cal from "../../assets/calendar (2).png";
function Stories() {
  return (
    <div className="stories--section ">
      <div className="d-flex justify-content-between">
        <div>
          <small className="stories--small">SUCCESS STORIES</small>
          <h2 className="stories--txt">Read up on latest Articles</h2>
        </div>
        <div className="align-self-center">
          <button className="social-btn  m-0">View All</button>
        </div>
      </div>

      <Divider className=""></Divider>
      <CardGroup>
        <Card >
        <div className="zoom-img">
        <Card.Img className="stories--img" variant="top" src={storyOne} />

        </div>

          <Card.Footer>
            <Card.Title className="card--titlee d-flex align-items-center">
              Payment, Wealth management, ..
            </Card.Title>
            <Card.Text className="card--main">
              David Droga Still Has Faith in Online Advertising
            </Card.Text>
            <div className="d-flex justify-content-between">
              <div>
                <img alt="" width="24" height="23" src={pen} />{" "}
                <span className="foot-card">AHMED SOLIMAN</span>{" "}
              </div>
              <div>
                <img alt="" src={cal} />{" "}
                <span className="foot-cal"> 18 - 3 - 2022</span>
              </div>
            </div>
          </Card.Footer>
        </Card>
        <Card  md={12}>
        <div className="zoom-img">
          <Card.Img className="stories--img" variant="top" src={storyTwo} />
          </div>
          <Card.Footer>
            <Card.Title className="card--titlee d-flex align-items-center">
              Payment, Wealth management, ..
            </Card.Title>
            <Card.Text className="card--main">
              David Droga Still Has Faith in Online Advertising
            </Card.Text>
            <div className="d-flex justify-content-between">
              <div>
                <img alt="" width="24" height="23" src={pen} />{" "}
                <span className="foot-card">AHMED SOLIMAN</span>{" "}
              </div>
              <div>
                <img alt="" src={cal} />{" "}
                <span className="foot-cal"> 18 - 3 - 2022</span>
              </div>
            </div>
          </Card.Footer>
        </Card>
        <Card  md={12}>
        <div className="zoom-img">
          <Card.Img className="stories--img" variant="top" src={storyThree} />
          </div>
          <Card.Footer>
            <Card.Title className="card--titlee d-flex align-items-center">
              Payment, Wealth management, ..
            </Card.Title>
            <Card.Text className="card--main">
              David Droga Still Has Faith in Online Advertising
            </Card.Text>
            <div className="d-flex justify-content-between">
              <div>
                <img alt="" width="24" height="23" src={pen} />{" "}
                <span className="foot-card">AHMED SOLIMAN</span>{" "}
              </div>
              <div>
                <img alt="" src={cal} />{" "}
                <span className="foot-cal"> 18 - 3 - 2022</span>
              </div>
            </div>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Stories;
