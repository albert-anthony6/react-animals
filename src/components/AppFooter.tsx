import './AppFooter.scss';
import IconZooLogo from '../assets/icons/icon_zoo_logo.svg?react';
import IconFox from '../assets/icons/icon_fox.svg?react';
import IconPeople from '../assets/icons/icon_people.svg?react';
import IconElephant from '../assets/icons/icon_elephant.svg?react';
import Collapsible from 'react-collapsible';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="app-footer--photos">
        <img src="/assets/images/footer1.jpg" alt="Red-Eyed Tree Frog." />
        <img src="/assets/images/footer2.jpg" alt="Siberian Tiger." />
        <img src="/assets/images/footer3.jpg" alt="Elephant." />
        <img src="/assets/images/footer4.jpg" alt="Brown Bear." />
        <img src="/assets/images/footer5.jpg" alt="Hummingbird." />
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
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faMobile} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact">
          <h5>
            <a href="#">4123 Maple Avenue, Memphis, TN, 38123</a>
          </h5>
          <h5>
            <a href="#">901-123-1234</a>
          </h5>
          <h5>
            <a href="#">zooinfo@adventures.org</a>
          </h5>
        </div>
      </div>
      <form>
        <span className="form-heading">Subscribe here to become a Zoo Insider</span>
        <div className="search-container">
          <input type="text" placeholder="EMAIL" />
          <FontAwesomeIcon icon={faArrowRightLong} />
        </div>
        <span className="form-heading">Subscribe here to join our texting club</span>
        <div className="search-container">
          <input type="text" placeholder="PHONE NUMBER" />
        </div>
        <div className="checkboxes">
          <div className="form-checkbox">
            <input type="checkbox" id="promo-texts" />
            <label htmlFor="promo-texts">I would like to receive promotional text messages</label>
          </div>
          <div className="form-checkbox">
            <input type="checkbox" id="membership-texts" />
            <label htmlFor="membership-texts">
              I would like to receive account or membership reminder text messages
            </label>
          </div>
          <div className="form-checkbox">
            <input type="checkbox" id="donation-texts" />
            <label htmlFor="donation-texts">
              I would like to receive Zoo donation opportunity text messages
            </label>
          </div>
          <div className="form-checkbox">
            <input type="checkbox" id="career-texts" />
            <label htmlFor="career-texts">
              I would like to receive volunteer and career opportunity text messages
            </label>
          </div>
        </div>
        <button type="button" className="learn-more__animated">
          Submit <FontAwesomeIcon icon={faArrowRightLong} />
        </button>
        <Collapsible
          trigger="Disclaimer and Compliance"
          triggerOpenedClassName="disclaimer"
          contentInnerClassName="disclaimer--content"
          className="disclaimer"
        >
          <p>
            Join the Zoo Texting Club to stay informed on events, new attractions, and exciting
            things coming at the zoo. When something urgent happens, you’ll be one of the first to
            know. Our mission is Creating Adventures and Saving Wildlife, and we can’t wait to share
            what’s in store. Message and data rates may apply. Up to 10 msgs/month. Text HELP to
            76068 for help. Text STOP to 76068 to cancel. For terms: (
            <a href="https://albertvaldes.netlify.app/">https://albertvaldes.netlify.app/</a>
            ). For privacy policy: (
            <a href="https://albertvaldes.netlify.app/">https://albertvaldes.netlify.app/</a>
            ). Disclaimer: Users can receive up to ten text messages per month and carriers are not
            liable for delayed or undelivered messages.
          </p>
        </Collapsible>
      </form>
      <div className="sponsors">
        <a href="https://albertvaldes.netlify.app/">
          <IconFox />
        </a>
        <a href="https://albertvaldes.netlify.app/">
          <IconPeople />
        </a>
        <a href="https://albertvaldes.netlify.app/">
          <IconElephant />
        </a>
        <a href="https://github.com/albert-anthony6">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <h6>
        React Adventures Zoo © 2024 • All Rights Reserved • <a href="#">Sitemap</a> •
        <a href="https://albertvaldes.netlify.app/" target="_blank">
          {' '}
          Developed by Albert
        </a>
      </h6>
    </footer>
  );
}

export default AppFooter;
