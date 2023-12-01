import './MobileNavbar.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";

function MobileNavbar() {
  return (
    <div className="mobile-navbar">
        <div className="navbar-btn">
            I'm Here
            <FontAwesomeIcon icon={faLocationDot} />
        </div>
        <div className="navbar-btn">
            Search
            <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="navbar-btn">
            Menu
            <FontAwesomeIcon icon={faBars} />
        </div>
    </div>
  )
}

export default MobileNavbar;
