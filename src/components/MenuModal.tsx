import './MenuModal.scss';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong, faClock, faCalendar, faLocationDot, faSquareParking, faCircleQuestion, faUtensils } from "@fortawesome/free-solid-svg-icons";
import Collapsible from 'react-collapsible';

function MenuModal() {
    const isMobile = useMediaQuery({ query: `(max-width: 1080px)` });
    
    return (
        <div className="menu-modal">
            <Collapsible trigger="Plan Your Adventure" triggerOpenedClassName="overall-collapsible" triggerClassName="overall-collapsible" triggerDisabled={false} open={true}>
                <div className="modal-content">
                    <section className="special-events">
                        <h4 className="green-text">Special Adventures</h4>
                        {
                            isMobile ? (
                                <Collapsible trigger="Zoo Lights" triggerOpenedClassName="events-collapsible__opened" triggerClassName="events-collapsible" contentInnerClassName="events-content" triggerDisabled={false} open={false}>
                                    <img src="src/assets/images/zoo_lights.jpg" alt="Zoo Lights." />
                                    <h4>Zoo Lights</h4>
                                    <div className="event-description">
                                        <h5>Select Nights November 24-January 6 | 5:30-9:30pm</h5>
                                        <p>
                                            WHAT A BRIGHT TIME, IT'S THE RIGHT TIME... Get ready to immerse yourself in the enchanting world of the holiday season as Truist Zoo Lights returns to Memphis Zoo. With mesmerizing light displays, beloved classics, and exciting new additions, this is the place to be for a merry and bright holiday experience. The iconic Light Tunnel will once again brighten up the night with vibrant colors, while Magic Mr. Nick will dazzle guests with exciting performances. Add even MORE magic with the Gingerbread Forest, the beautiful Chinese lanterns, Alice's Tea Party, AND MUCH MORE. If you're in the mood for some ice skating, lace up your skates and take a spin on the rink. It's the perfect opportunity to showcase your skills. And who can resist the delectable goodness of s'mores? Make your own gooey treats and relish the sweet taste of the season. It pairs perfectly with a warm cup of hot chocolate. It's not truly the holiday season without a visit to Santa Claus. Have your chance to meet him and share your holiday wishes. Who knows, you might end up on the nice list! Whether it's a romantic date night, a family outing, or a fun evening with friends, Zoo Lights offers the perfect setting.
                                            <a href="https://www.memphiszoo.org/zoo-lights" className="learn-more"> Learn More <FontAwesomeIcon icon={faArrowRightLong} /></a>
                                        </p>
                                    </div>
                                </Collapsible>
                            ) : (
                                <div>
                                    <img src="src/assets/images/zoo_lights.jpg" alt="Zoo Lights." />
                                    <h4>Zoo Lights</h4>
                                    <h5>Select Nights November 24-January 6 | 5:30-9:30pm</h5>
                                    <p>
                                        WHAT A BRIGHT TIME, IT'S THE RIGHT TIME... Get ready to immerse yourself in the enchanting world of the holiday season as Truist Zoo Lights returns to Memphis Zoo. With mesmerizing light displays, beloved classics, and exciting new additions, this is the place to be for a merry and bright holiday experience. The iconic Light Tunnel will once again brighten up the night with vibrant colors, while Magic Mr. Nick will dazzle guests with exciting performances. Add even MORE magic with the Gingerbread Forest, the beautiful Chinese lanterns, Alice's Tea Party, AND MUCH MORE. If you're in the mood for some ice skating, lace up your skates and take a spin on the rink. It's the perfect opportunity to showcase your skills. And who can resist the delectable goodness of s'mores? Make your own gooey treats and relish the sweet taste of the season. It pairs perfectly with a warm cup of hot chocolate. It's not truly the holiday season without a visit to Santa Claus. Have your chance to meet him and share your holiday wishes. Who knows, you might end up on the nice list! Whether it's a romantic date night, a family outing, or a fun evening with friends, Zoo Lights offers the perfect setting.
                                        <a href="https://www.memphiszoo.org/zoo-lights" className="learn-more"> Learn More <FontAwesomeIcon icon={faArrowRightLong} /></a>
                                    </p>
                                </div>
                            )
                        }
                        <h3>Book Your Adventure</h3>
                        <ul className="flexed-ul">
                            <li>
                                <a href="https://www.memphiszoo.org/host-an-event">
                                    <FontAwesomeIcon icon={faClock} />
                                    Host an Event
                                </a>
                            </li>
                            <li>
                                <a href="https://www.memphiszoo.org/field-trips">
                                    <FontAwesomeIcon icon={faCalendar} />
                                    Field Trips
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className="today">
                        <div className="location-info">
                            <div className="date green-text">Nov 28, 2023</div>
                            <div className="location-info__hours">
                                <div className="today-hours">
                                    <FontAwesomeIcon icon={faClock} />
                                    9:00 AM - 5:00 PM
                                </div>
                                <p>(last admission is at 4pm)</p>
                            </div>
                        </div>
                        <div className="adventures">
                            <h4 className="green-text">A Day at the Zoo</h4>
                            <div className="links">
                                <div className="group-1">
                                    <h3>Adventure Guides</h3>
                                    <ul>
                                        <li>
                                            <a href="https://www.memphiszoo.org/discover#zoo-map">
                                                What Can I See in 2 Hours?
                                                <FontAwesomeIcon icon={faArrowRightLong} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://tickets.memphiszoo.org/WebStore/shop/viewitems.aspx?CG=95&C=97">
                                                Purchase Tickets
                                                <FontAwesomeIcon icon={faArrowRightLong} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.memphiszoo.org/dining">
                                                Where to Eat
                                                <FontAwesomeIcon icon={faArrowRightLong} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="group-2">
                                    <h3>Know Before You Go</h3>
                                    <ul className="flexed-ul">
                                        <li>
                                            <a href="https://www.memphiszoo.org/zoo-map">
                                                <FontAwesomeIcon icon={faLocationDot} />
                                                Zoo Map
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.memphiszoo.org/parking">
                                                <FontAwesomeIcon icon={faSquareParking} />
                                                Parking
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.memphiszoo.org/help-rules">
                                                <FontAwesomeIcon icon={faCircleQuestion} />
                                                Rules & FAQ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.memphiszoo.org/daily-schedule">
                                                <FontAwesomeIcon icon={faCalendar} />
                                                Today at the Zoo
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.memphiszoo.org/dining">
                                                <FontAwesomeIcon icon={faUtensils} />
                                                Dining
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="admission">
                                <h3>Admission</h3>
                                <p>For the best experience and the quickest entry, we encourage guests to buy tickets online. Tickets are also available for purchase at the ticket office upon arrival. Guests under 17 need to be accompanied by an adult aged 18 or above.</p>
                                <table>
                                    <thead>
                                        <tr>
                                            <th />
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Adult (Ages 22-59)</td>
                                            <td>$23</td>
                                        </tr>
                                        <tr>
                                            <td>Youth (Ages 12-31)</td>
                                            <td>$23</td>
                                        </tr>
                                        <tr>
                                            <td>Senior (60+)</td>
                                            <td>$22</td>
                                        </tr>
                                        <tr>
                                            <td>Child (Ages 2-11))</td>
                                            <td>$18</td>
                                        </tr>
                                        <tr>
                                            <td>Under 2 (0-23 Months)</td>
                                            <td>Free</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <a href="https://www.memphiszoo.org/zoo-lights" className="learn-more"> Learn More <FontAwesomeIcon icon={faArrowRightLong} /></a>
                            </div>
                        </div>
                    </section>
                </div>
            </Collapsible>
        </div>
    )
}

export default MenuModal;
