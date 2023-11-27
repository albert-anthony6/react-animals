import './AppHeader.scss';
import ZooLogo from '../assets/icons/zoo_logo.svg?react';

function AppHeader() {
  return (
    <nav className='app-header'>
      <ZooLogo />
      <ul>
        <li>Membership</li>
        <li>Tickets</li>
        <li>Conservation</li>
        <li>Wildlife</li>
        <li>Education</li>
        <li>Donate</li>
        <li>
          <div className="dropdown">
            Plan Your Adventure
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default AppHeader;
