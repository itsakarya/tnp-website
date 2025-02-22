import React from 'react'
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faF } from '@fortawesome/free-solid-svg-icons';
function Home() {
    return (
        <div id='home'>
            <div className='home-cover'></div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/college1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    {/* <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..." />
                </div> */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className='home-content-container'>
                <div className='home-content'>
                    <h4>विद्यया . अमृतम . श्नुते</h4>
                    <h1>Training and Placement Cell</h1>
                    <h2>IIIT BHOPAL</h2>
                </div>
            </div>

            {/* -- Down button -- */}
            <div class="down-button-container">
                <div class="bg"></div>
                <div class="button"><a href="#about"><FontAwesomeIcon icon={faChevronDown} /></a></div>
            </div>

            {/* --Social Media Buttons-- */}
            <div class='social-links'>
                <div class='social-btn flex-center' id="github">
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div class='social-btn flex-center' id="twitter">
                    <i class="fa-brands fa-facebook-f"></i>
                </div>

                <div class='social-btn flex-center' id="linkedin">
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>

                <div class='social-btn flex-center' id="github">
                    <i class="fa-brands fa-skype"></i>
                </div>
            </div>
        </div>
    )
}

export default Home