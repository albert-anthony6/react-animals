import './MobileNavbar.scss'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRightLong,
  faLocationDot,
  faSearch,
  faBars,
  faX
} from '@fortawesome/free-solid-svg-icons'

type Props = {
  activeModal: boolean
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>
}

function MobileNavbar({ activeModal, setActiveModal }: Props) {
  const [activeSearch, setActiveSearch] = useState(false)

  useEffect(() => {
    if (activeModal === false) return
    setActiveSearch(false)
  }, [activeModal])

  useEffect(() => {
    if (activeSearch === false) return
    setActiveModal(false)
  }, [activeSearch, setActiveModal])

  return (
    <div className="mobile-navbar">
      {activeSearch && (
        <div className="search-bar">
          <div className="search-container">
            <input type="text" placeholder="SEARCH..." />
            <FontAwesomeIcon icon={faArrowRightLong} />
          </div>
        </div>
      )}
      <div className="navbar-btn">
        I'm Here
        <FontAwesomeIcon icon={faLocationDot} />
      </div>
      <div onClick={() => setActiveSearch(!activeSearch)} className="navbar-btn">
        Search
        {activeSearch ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faSearch} />}
      </div>
      <div onClick={() => setActiveModal(!activeModal)} className="navbar-btn">
        Menu
        {activeModal ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
      </div>
    </div>
  )
}

export default MobileNavbar
