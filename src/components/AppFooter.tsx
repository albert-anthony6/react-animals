import './AppFooter.scss'
import IconZooLogo from '../assets/icons/icon_zoo_logo.svg?react'
import Collapsible from 'react-collapsible'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="app-footer--photos">
        <img src="/assets/images/treefrog.png" alt="Green Tree Frong." />
        <img src="/assets/images/tiger.jpg" alt="Siberian Tiger." />
        <img src="/assets/images/elephant.jpg" alt="Elephant." />
        <img src="/assets/images/bear.webp" alt="Brown Bear." />
        <img src="/assets/images/hummingbird.jpg" alt="Hummingbird." />
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
            <a href="#">2000 Prentiss Place Memphis, TN, 38112</a>
          </h5>
          <h5>
            <a href="#">901-333-6500</a>
          </h5>
          <h5>
            <a href="#">zooinfo@memphiszoo.org</a>
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
              I would like to receive Memphis Zoo donation opportunity text messages
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
            Join the Memphis Zoo Texting Club to stay informed on events, new attractions, and
            exciting things coming at the zoo. When something urgent happens, you’ll be one of the
            first to know. Our mission is Creating Adventures and Saving Wildlife, and we can’t wait
            to share what’s in store. Message and data rates may apply. Up to 10 msgs/month. Text
            HELP to 76068 for help. Text STOP to 76068 to cancel. For terms: (
            <a href="https://www.memphiszoo.org/help-rules">
              https://www.memphiszoo.org/help-rules
            </a>
            ). For privacy policy: (
            <a href="https://www.memphiszoo.org/privacy-policy">
              https://www.memphiszoo.org/privacy-policy
            </a>
            ). Disclaimer: Users can receive up to ten text messages per month and carriers are not
            liable for delayed or undelivered messages.
          </p>
        </Collapsible>
      </form>
      <div className="sponsors">
        <a href="https://www.aza.org/">
          <img src="/assets/images/aza.png" alt="Association of Zoos & Aquariums." />
        </a>
        <a href="https://www.waza.org/">
          <img src="/assets/images/waza.webp" alt="World Association of Zoos and Aquariums." />
        </a>
        <a href="https://overtonpark.org/">
          <img src="/assets/images/overton.png" alt="Overton Park Conservancy." />
        </a>
        <a href="https://polarbearsinternational.org/">
          <img src="/assets/images/pbi.png" alt="Polar Bears International." />
        </a>
      </div>
      <h6>
        Memphis Zoo © 2024 • All Rights Reserved • <a href="#">Sitemap</a> •
        <a href="https://albertvaldes.netlify.app/" target="_blank">
          {' '}
          Developed by Albert
        </a>
      </h6>
    </footer>
  )
}

export default AppFooter
