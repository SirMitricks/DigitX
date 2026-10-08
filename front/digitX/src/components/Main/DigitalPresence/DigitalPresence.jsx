import React from 'react';
import classes from './DigitalPresence.module.scss';
import {Picturies} from '../../../assets/Fhoto.js';

function DigitalPresence() {
    return (
        <div className={classes.Container}>
            <main className={classes.main}>
                <div className={classes.containerText}>
                    <div className={classes.TitleText}>
                        <p>Ready to Transform Your Digital Presence?</p>
                        <p>Take the first step towards digital success with DigitX by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business. Whether you need a stunning website, a powerful mobile app, or a data-driven marketing campaign, we've got you covered. Let's embark on this transformative journey together.</p>
                    </div>
                    <div className={classes.button}>
                        <p>Unlock Your Digital Potential Today</p>
                        <div className={classes.buttonContainer}>
                            <button>Get Started</button>
                            <button>Free Consultation</button>
                        </div>
                    </div>
                </div>
                <img src={Picturies.PhotoLogo} alt=""/>
            </main>
        </div>

    )
}
export default DigitalPresence;