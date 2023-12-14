import './HomeView.scss';
import videoSrc from '../assets/videos/hero_bg.mp4';
import IconScrollIndicator from '../assets/icons/icon_scroll_indicator.svg?react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong, faArrowRightLong, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import Carousel, { ButtonGroupProps, StateCallBack }  from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }: ButtonGroupProps) => {
    const { totalItems, slidesToShow } = carouselState as StateCallBack;

    return (
      <div className="custom-button-group">
        <button onClick={() => [goToSlide?.(totalItems - slidesToShow), previous?.()]}>
            <FontAwesomeIcon icon={faArrowLeftLong} />
        </button>
        <button onClick={() => [goToSlide?.(0), next?.()]}>
            <FontAwesomeIcon icon={faArrowRightLong} />
        </button>
      </div>
    );
};
  

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
    <main className="home-view">
        <section className="hero-section">
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
        <section className="experience-section">
            <div className="experience-section--text">
                <h4 className="green-text">Experience The Wild</h4>
                <h2>Your Passport To Wildlife From Across The Globe</h2>
                <p className="headline">Memphis Zoo is home to 3,500+ animals. Find your favorites and discover new species to love!</p>
            </div>
            <Carousel
                responsive={responsive}
                className="carousel"
                infinite={false}
                draggable={false}
                arrows={false}
                customButtonGroup={<CustomButtonGroup />}
            >
                {slides.map((slide, idx) => (
                    <div className="slide" key={`${idx}-${slide.img}`}>
                        <img src={`./src/assets/images/carousel-images/${slide.img}`} />
                    </div>
                ))}
            </Carousel>
        </section>
    </main>
  )
}

export default HomeView;
