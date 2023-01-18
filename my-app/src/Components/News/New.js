import calen from "../../assets/calendar.png";
import "./News.css";
function News() {
  return (
    <div className="container m-5" >
      <div className="d-flex justify-content-between">
        <div>
        
          <small className="stories--small">MULTIOFFICE NEWS</small>
          <h2 className="stories--txt">Read up on latest </h2>
        </div>
      </div>

      <div>
        <div className="d-flex justify-content-evenly ">
          <div className="news-bg">
            <div className="news-ele">
              <div>
                
                <img className="newsimg" width="37" height="28" alt="" src={calen} /> <span className="txt-news">18 - 3 - 2022</span>
              </div>
              <h4 className="news-txt">Teams or individuals , all thrive here</h4>
            </div>
          </div>
          <div className="news-bg-two">
            <div className="news-ele">
              <div>
                
                <img className="newsimg" width="37" height="28" alt="" src={calen} /> <span className="txt-news">18 - 3 - 2022</span>
              </div>
              <h4 className="news-txt">Teams or individuals , all thrive here</h4>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
        <button className="social-btn  m-0">Check All News</button>

        </div>
      </div>
    </div>
  );
}

export default News;
