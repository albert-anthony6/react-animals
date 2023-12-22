import './AppFooter.scss';
import IconZooLogo from '../assets/icons/icon_zoo_logo.svg?react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

function AppFooter() {
  return (
    <footer className="app-footer">
        <div className="app-footer--photos">
            <img src="./src/assets/images/treefrog.png" alt="Green Tree Frong." />
            <img src="./src/assets/images/tiger.jpg" alt="Siberian Tiger." />
            <img src="./src/assets/images/elephant.jpg" alt="Elephant." />
            <img src="./src/assets/images/bear.webp" alt="Brown Bear." />
            <img src="./src/assets/images/hummingbird.jpg" alt="Hummingbird." />
        </div>
        <div className="top-links">
          <ul className="pages">
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Volunteer</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
          <div className="media">
            <IconZooLogo className="logo" />
            <div className="socials">
              <ul>
                <li>
                  <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                </li>
                <li>
                  <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                </li>
                <li>
                  <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                </li>
                <li>
                  <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                </li>
                <li>
                  <a href="#"><FontAwesomeIcon icon={faMobile} /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact">
            <h5><a href="#">2000 Prentiss Place Memphis, TN, 38112</a></h5>
            <h5><a href="#">901-333-6500</a></h5>
            <h5><a href="#">zooinfo@memphiszoo.org</a></h5>
          </div>
        </div>
    </footer>
  )
}

export default AppFooter;
