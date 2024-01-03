import './HomeView.scss';
import { useRef, useState, useEffect } from 'react';
import HeroVideo from '../assets/videos/hero_bg.mp4';
import IconScrollIndicator from '../assets/icons/icon_scroll_indicator.svg?react';
import IconConservation from '../assets/icons/icon_conservation.svg?react';
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
    const isLandscapeMode = window.matchMedia('(max-width:999px) and (orientation:landscape)').matches;
    const scrollRef = useRef<HTMLElement>(null);
    const [hasSectionShown, setHasSectionShown] = useState({
        "hero": false,
        "experience": false,
        "adventures": false,
        "conservation": false,
        "initiatives": false,
        "saving-wildlife": false,
    });
    const slides = [
        {
            name: 'African Veldt',
            img: 'african_veldt.jpg',
            link: ''
        },
        {
            name: 'Animals of the Night',
            img: 'animals_of_the_night.jpg',
            link: ''
        },
        {
            name: 'Aquarium',
            img: 'aquarium.webp',
            link: ''
        },
        {
            name: 'Cat Country',
            img: 'cat_country.jpg',
            link: ''
        },
        {
            name: 'China',
            img: 'china.jpg',
            link: ''
        },
        {
            name: 'Dragon\'s Lair',
            img: 'dragons_lair.jpg',
            link: ''
        },
        {
            name: 'Herpetarium',
            img: 'herpetarium.webp',
            link: ''
        },
        {
            name: 'Northwest Passage',
            img: 'northwest_passage.webp',
            link: ''
        },
        {
            name: 'Once Upon a Farm',
            img: 'once_upon_a_farm.jpg',
            link: ''
        },
        {
            name: 'Pelican Pool',
            img: 'pelican_pool.webp',
            link: ''
        },
        {
            name: 'Penguin Rock',
            img: 'penguin_rock.webp',
            link: ''
        },
        {
            name: 'Primate Canyon',
            img: 'primate_canyon.webp',
            link: ''
        },
        {
            name: 'Teton Trek',
            img: 'teton_trek.webp',
            link: ''
        },
        {
            name: 'Tropical Bird House',
            img: 'tropical_bird_house.webp',
            link: ''
        },
        {
            name: 'Zambezi River Hippo Camp',
            img: 'zambezi_river_hippo_camp.webp',
            link: ''
        },
    ]
    const responsive = {
        "lg-desktop": {
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
        "sm-tablet": {
          breakpoint: { max: 840, min: 600 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 2
        }
    };

    useEffect(() => {
        function handleAnimations() {
            const sections = scrollRef.current?.querySelectorAll("section");
            sections?.forEach((sec: HTMLElement) => {
                const top = window.scrollY + 500;
                const offset = sec.offsetTop;
                const height = sec.offsetHeight;
        
                if (top >= offset && top < offset + height) {
                    const sectionName = sec.className.substring(0, sec.className.indexOf("-section"));
                    setHasSectionShown((prevState) => ({...prevState, [sectionName]: true}));
                }
            });
        }
        
        // Invoke on page load
        handleAnimations();

        window.onscroll = () => {
            handleAnimations();
        }
    }, [])
    return (
        <main ref={scrollRef} className="home-view">
            <section 
                className={hasSectionShown["hero"] || isLandscapeMode ? 'hero-section show-animation' : 'hero-section hide'}
            >
                <div className="hero-banner">
                    <div className="hero-text">
                        <h4>Explore a Wonderful World of</h4>
                        <h1>Wildlife</h1>
                    </div>
                    <div className="hero-video">
                        <video loop autoPlay muted playsInline>
                            <source src={ HeroVideo } type="video/mp4" />
                            Your browser does not support the video tag. It is recommended to upgrade your browser.
                        </video>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <IconScrollIndicator />
                    <FontAwesomeIcon icon={faArrowDownLong} />
                </div>
            </section>
            <section className={hasSectionShown["experience"] ? "experience-section show-animation" : "experience-section"}>
                <div className={hasSectionShown["experience"] ? "experience-section--text fade-in" : "experience-section--text hide"}>
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
                            <img src={`/assets/images/carousel-images/${slide.img}`} />
                            <h4 className="slide--name">{ slide.name }</h4>
                            <a href={slide.link} className="learn-more__animated"> Learn More <FontAwesomeIcon icon={faArrowRightLong} /></a>
                        </div>
                    ))}
                </Carousel>
            </section>
            <section className="adventures-section">
                <div className="adventure-video">
                    <video loop autoPlay muted playsInline>
                        <source src={ HeroVideo } type="video/mp4" />
                        Your browser does not support the video tag. It is recommended to upgrade your browser.
                    </video>
                </div>
                <h4>Something for Everyone</h4>
                <h2>Find Your Adventure</h2>
                <p className="headline">There's adventure around every corner of the Memphis Zoo for both young and old!</p>
                <div className="adventures-section__flexed">
                    <div className="adventures-section--description">
                        <p>Watch a butterfly emerge from it's cocoon, experience the magic of a hopping kangaroo, or take part in one of our special events. At Memphis Zoo there's something for everyone to enjoy!</p>
                        <a href="#" className="learn-more__animated"> Plan Your Visit <FontAwesomeIcon icon={faArrowRightLong} /></a>
                    </div>
                    <div className={hasSectionShown["adventures"] ? "adventures-section--links fade-in" : "adventures-section--links hide"}>
                            <div className="link">
                                <img src="/assets/images/admission.webp" alt="Admission." />
                                <h4>Admission</h4>
                            </div>
                            <div className="link">
                                <img src="/assets/images/seasonal-experiences.webp" alt="Admission." />
                                <h4>Seasonal Experiences</h4>
                            </div>
                            <div className="link">
                                <img src="/assets/images/special-events.jpg" alt="Admission." />
                                <h4>Special Events</h4>
                            </div>
                            <div className="link">
                                <img src="/assets/images/dining.jpg" alt="Admission." />
                                <h4>Dining</h4>
                            </div>
                    </div>
                </div>
            </section>
            <section className={hasSectionShown["conservation"] ? "conservation-section fade-in" : "conservation-section hide"}>
                <div className="conservation-section--text">
                    <h4>Memphis Zoo Conservation</h4>
                    <h2>Secure the Future of a World of Wildlife</h2>
                    <p className="headline">We aim to improve the security and stability of animal populations - both in the wild and in captivity.</p>
                </div>
                {hasSectionShown["conservation"] && <IconConservation />}
            </section>
            <section className="initiatives-section">
                <div className="bg-lion" />
                <div className={hasSectionShown["initiatives"] ? "initiatives-section--photos fade-in" : "initiatives-section--photos hide"}>
                    <img src="/assets/images/kissing_bears.webp" alt="Two Kissing Bears." />
                    <img src="/assets/images/memzoo_snake_holding.webp" alt="Snake being hand held." />
                    <img src="/assets/images/memzoo_penguin.jpg" alt="Penguins Flapping." />
                </div>
                <div className="initiatives-section--text">
                    <h4>Conservation</h4>
                    <h2>Memphis Zoo Initiatives</h2>
                    <p>Our conservation projects apply the tools and knowledge gained from scientific research to solve real-life problems threatening the world's wildlife.</p>
                    <a href="https://www.memphiszoo.org/conservation" className="learn-more__animated">Discover Our Conservation Efforts <FontAwesomeIcon icon={faArrowRightLong} /></a>
                </div>
            </section>
            <section className={hasSectionShown["saving-wildlife"] ? "saving-wildlife-section fade-in" : "saving-wildlife-section hide"}>
                <h2>Creating Adventures. Saving Wildlife.</h2>
                <a href="https://www.memphiszoo.org/plan-your-visit" className="learn-more__animated"> Plan Your Visit <FontAwesomeIcon icon={faArrowRightLong} /></a>
            </section>
        </main>
    )
}

export default HomeView;
