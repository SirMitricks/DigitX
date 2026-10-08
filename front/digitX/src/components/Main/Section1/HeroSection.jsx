import React from 'react';
import {Picturies} from '../../../assets/Fhoto.js';
import classes from './HeroSection.module.scss'


function HeroSection() {
    return (
            <>
                <main className={classes.ContainerMain}>
                    <div className={classes.Container}>
                        <div className={classes.containerText}>
                            <p>Digital Solutions <span>That Drive Success</span></p>
                            <p>At DigitX, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping businesses like yours thrive in the fast-paced digital landscape. From captivating web design to data-driven marketing strategies, we are committed to delivering results that exceed expectations.</p>
                        </div>
                         <div className={classes.containerButton}>
                            <p>Unlock Your Digital Potential Today</p>
                            <div className={classes.Button}>
                                <button>Get Started</button>
                                <button>Free Consultation</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.containerImg}>
                        <img src={Picturies.PhotoHeroSection} alt=""/>
                    </div>
                </main>
            </>
        )

}
export default HeroSection