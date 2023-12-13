import './HomeView.scss';
import videoSrc from '../assets/videos/hero_bg.mp4';
import IconScrollIndicator from '../assets/icons/icon_scroll_indicator.svg?react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function HomeView() {
    const slides = [
        {
            img: 'african_veldt.jpg',
            link: ''
        },
        {
            img: 'animals_of_the_night.jpg',
            link: ''
        },
        {
            img: 'aquarium.webp',
            link: ''
        },
        {
            img: 'cat_country.jpg',
            link: ''
        },
        {
            img: 'china.jpg',
            link: ''
        },
        {
            img: 'dragons_lair.jpg',
            link: ''
        },
        {
            img: 'herpetarium.webp',
            link: ''
        },
        {
            img: 'northwest_passage.webp',
            link: ''
        },
        {
            img: 'once_upon_a_farm.jpg',
            link: ''
        },
        {
            img: 'pelican_pool.webp',
            link: ''
        },
        {
            img: 'penguin_rock.webp',
            link: ''
        },
        {
            img: 'primate_canyon.webp',
            link: ''
        },
        {
            img: 'teton_trek.webp',
            link: ''
        },
        {
            img: 'tropical_bird_house.webp',
            link: ''
        },
        {
            img: 'zambezi_river_hippo_camp.webp',
            link: ''
        },
    ]
    const responsive = {
        'lg-desktop': {
          breakpoint: { max: 8000, min: 1440 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 1440, min: 1080 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1080, min: 840 },
          items: 4
        },
        'sm-tablet': {
          breakpoint: { max: 840, min: 600 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 2
        }
      };

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
        <Carousel responsive={responsive} infinite={true} draggable={false}>
            {slides.map((slide) => (
                <div className="slide">
                    <img key={slide.img} src={`./src/assets/images/carousel-images/${slide.img}`} />
                </div>
            ))}
        </Carousel>
    </section>
  )
}

export default HomeView;
