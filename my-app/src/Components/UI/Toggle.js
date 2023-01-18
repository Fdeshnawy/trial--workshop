import { FaCog } from "react-icons/fa";
import './Toggle.css';
import Mode from './Mode';
function Toggle() {

    
  return (
    <div className="speed-dial">
        
      <a className="toggle bg-share" href>
        <FaCog/>
      </a>
      <ul className="dials">
        <li>
          <a className="bg-twitter" href>
            <Mode/>
          </a>
        </li>
        <li>
            <a href className='bg-facebook '>
            <span className="fa fa-facebook"></span>

            </a>
         
        </li>
        <li>
          <a className="bg-google-plus" href>
            <span className="fa fa-google-plus"></span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Toggle;
