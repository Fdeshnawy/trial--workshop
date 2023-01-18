import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import gallery from "../../assets/image-gallery-solid.png";
import "./Media.css";
// ....

// className "owl-theme" is optional
function Media() {
  return (
    <div className="media-section ">
      <div>
        <div className="d-flex justify-content-between">
          <div>
            <small className="stories--small">MULTIOFFICE MEDIA</small>
            <h2 className="stories--txt">Our latest Media</h2>
          </div>
          <div className="align-self-center">
            <button className="social-btn  m-0">View All</button>
          </div>
        </div>
      </div>
      <OwlCarousel className="owl-theme" loop margin={10}>
        <div class="item item-owl-sec">
          <div className="media-ele">
            <img width="37" height="28" alt="" src={gallery} />
            <h4 className="txtmed">Teams or individuals , all thrive here</h4>
          </div>
        </div>
        <div class="item item-owl-sec">
          <div className="media-ele">
            <img width="37" height="28" alt="" src={gallery} />
            <h4 className="txtmed">Teams or individuals , all thrive here</h4>
          </div>
        </div>
        <div class="item item-owl-sec">
          <div className="media-ele">
            <img width="37" height="28" alt="" src={gallery} />
            <h4 className="txtmed">Teams or individuals , all thrive here</h4>
          </div>
        </div>
        <div class="item item-owl-sec">
          <div className="media-ele">
            <img width="37" height="28" alt="" src={gallery} />
            <h4 className="txtmed">Teams or individuals , all thrive here</h4>
          </div>
        </div>
        <div class="item item-owl-sec">
          <div className="media-ele">
            <img width="37" height="28" alt="" src={gallery} />
            <h4 className="txtmed">Teams or individuals , all thrive here</h4>
          </div>
        </div>
        <div class="item item-owl-sec">
          <div className="media-ele">
            <img width="37" height="28" alt="" src={gallery} />
            <h4 className="txtmed">Teams or individuals , all thrive here</h4>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Media;
