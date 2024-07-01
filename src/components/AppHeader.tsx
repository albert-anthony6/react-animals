import './AppHeader.scss';
import { Link } from 'react-router-dom';
import IconZooLogo from '../assets/icons/icon_zoo_logo.svg?react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

type Props = {
  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function AppHeader({ activeModal, setActiveModal }: Props) {
  return (
    <header className="app-header">
      <Link to="/" className="logo">
        <IconZooLogo onClick={() => setActiveModal(false)} />
      </Link>
      <nav>
        <ul className="ul-child">
          <li>
            <Link to="#">Membership</Link>
          </li>
          <li>
            <Link to="#">Tickets</Link>
            <ul className="ul-child">
              <li>Admission</li>
              <li className="submenu">
                Special Events
                <ul className="ul-child--nested">
                  <li>Zoo Lights</li>
                  <li>Breakfast With Santa</li>
                </ul>
              </li>
              <li>Host an Event</li>
              <li>Birthday Parties</li>
              <li>Close Encounters</li>
            </ul>
          </li>
          <li>
            <Link to="#">Conservation</Link>
            <ul className="ul-child">
              <li>Our Research Team</li>
              <li>Conservation Action Network</li>
              <li className="submenu">
                Arboretum
                <ul className="ul-child--nested">
                  <li>Shade Garden</li>
                </ul>
              </li>
              <li>Go Green</li>
              <li>Zoo Aazk</li>
              <li>Master Garden Corner</li>
              <li>Conservation Six</li>
            </ul>
          </li>
          <li>
            <Link to="#">Wildlife</Link>
            <ul className="ul-child">
              <li>Explore Exhibits</li>
              <li>Adopt an Animal</li>
              <li>Zoo News</li>
              <li>Live Animal Care</li>
            </ul>
          </li>
          <li>
            <Link to="#">Education</Link>
            <ul className="ul-child">
              <li>Field Trips</li>
              <li>Twilight Tours</li>
              <li>Virtual Zoo Programs</li>
              <li>Zoo Labs</li>
              <li>Owl Programs</li>
              <li>Zoo Snooze</li>
              <li>Zoo Strolls</li>
              <li>Zoo Camps</li>
              <li>Zoo Scounts Programs</li>
            </ul>
          </li>
          <li>
            <Link to="#">Donate</Link>
            <ul className="ul-child">
              <li>Eco Express Train</li>
              <li>Give Now</li>
              <li>Volunteer</li>
            </ul>
          </li>
          <li onClick={() => setActiveModal(!activeModal)}>
            <div className={activeModal ? 'modal-button active-modal' : 'modal-button'}>
              Plan Your Adventure
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
