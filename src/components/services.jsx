import React from "react";
import { IoIosGlobe, IoIosDesktop, IoIosPaper } from "react-icons/io"; // Import the icons
import './services.css';
function Services() {
    return (
        <section className="section service" id="services">
            <div className="container">
                <h2 className="h2 section-title underline">Our Specialization</h2>
                <ul className="service-list">
                    <li>
                        <div className="service-card">
                            <div className="card-icon">
                                <img src={myIcon} alt="My Icon" />
                            </div>
                            <h3 className="h3 title">Strategy & Research</h3>
                            <p className="text">
                                Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.
                            </p>
                            <button className="card-btn" aria-label="Show More">
                                <img src={myIcon} alt="My Icon" />
                            </button>
                        </div>
                    </li>
                    <li>
                        <div className="service-card">
                            <div className="card-icon">
                                <img src={myIcon} alt="My Icon" />
                            </div>
                            <h3 className="h3 title">Web Development</h3>
                            <p className="text">
                                Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.
                            </p>
                            <button className="card-btn" aria-label="Show More">
                                <img src={myIcon} alt="My Icon" />
                            </button>
                        </div>
                    </li>
                    <li>
                        <div className="service-card">
                            <div className="card-icon">
                                <img src={myIcon} alt="My Icon" />
                            </div>
                            <h3 className="h3 title">Web Solution</h3>
                            <p className="text">
                                Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.
                            </p>
                            <button className="card-btn" aria-label="Show More">
                                <img src={myIcon} alt="My Icon" />
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Services;