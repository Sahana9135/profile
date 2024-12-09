import React from 'react';
import './Hero.css';
import Profile from './img2.jpg';
import Reactjs from './React.png';
import Html from './html.png';
import Css from './css.png';
import Js from './js.png';

function Hero() {
    return (
        <>
            <section className='hero-container'>
                <div className="hero-content">
                    <h2>Building Digital Experience That Inspires</h2>
                    <p>
                        Passionate Web Developer | Transforming  ideas into Seamless visual | Creating
                        Innovative and Responsive design.
                    </p>
                </div>

                <div className="hero-img">
                    <div>
                        <div className="tech-icon">
                            <img src={Reactjs} alt="React" />
                        </div>

                        <img src={Profile} alt="Profile" width="550px" height="350px" />
                    </div>
                    <div className='tech'>
                        <div className="tech-icon">
                            <img src={Html} alt="HTML" />
                        </div>

                        <div className="tech-icon">
                            <img src={Css} alt="CSS" />
                        </div>

                        <div className="tech-icon">
                            <img src={Js} alt="JS" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;