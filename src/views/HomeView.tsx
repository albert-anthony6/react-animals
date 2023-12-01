import './HomeView.scss';
import videoSrc from '../assets/videos/hero_bg.mp4';
import IconScrollIndicator from '../assets/icons/icon_scroll_indicator.svg?react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

function HomeView() {
  return (
    <section className="home-view">
        <div className="hero-banner">
            <div className="hero-text">
                <h4>Explore a Wonderful World of</h4>
                <h1>Wildlife</h1>
            </div>
            <div className="bg-video">
                <video loop autoPlay muted>
                    <source src={ videoSrc } type="video/mp4" />
                    Your browser does not support the video tag. It is recommended to upgrade your browser.
                </video>
            </div>
        </div>
        <div className="scroll-indicator">
            <IconScrollIndicator />
            <FontAwesomeIcon icon={faArrowDownLong} />
        </div>
    </section>
  )
}

export default HomeView;
