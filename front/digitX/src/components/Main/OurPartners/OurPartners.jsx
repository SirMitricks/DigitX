import React from 'react';
import classes from './OurPartners.module.scss';
import {Picturies} from '../../../assets/Fhoto.js';

function OurPartners() {
    return (
        <main className={classes.main}>
            <section>
                <div className={classes.containerText}>
                    <p> <span>Our</span> Partners and Clients</p>
                    <p>We are grateful for the opportunity to work with esteemed partners and clients. Our strong relationships are a testament to our dedication and expertise in the digital realm.</p>
                </div>
                <div className={classes.card}>
                    <div className={classes.containercard}>
                        <div className={classes.card}>
                            <img src={Picturies.s7card1} alt=""/>
                            <p>ABC Tech Solutionst</p>
                            <p>A leading technology firm that trusted DigitX to develop their responsive website, showcasing their cutting-edge products and services.</p>
                        </div>
                    </div>
                    <div className={classes.containercard}>
                        <div className={classes.card}>
                            <img src={Picturies.s7card2} alt=""/>
                            <p>GreenEarth Eco Store</p>
                            <p>DigitX collaborated with GreenEarth Eco Store to create an engaging e-commerce platform that promotes sustainable living and eco-friendly products.</p>
                        </div>
                    </div>
                    <div className={classes.containercard}>
                        <div className={classes.card}>
                            <img src={Picturies.s7card3} alt=""/>
                            <p>HealthTech Innovations</p>
                            <p>DigitX developed a user-centric mobile app for HealthTech Innovations, helping them revolutionize the way people track and manage their health.</p>

                        </div>
                    </div>
                    <div className={classes.containercard}>
                        <div className={classes.card}>
                            <img src={Picturies.s7card4} alt=""/>
                            <p>GlobalTech Solutions</p>
                            <p>GlobalTech Solutions partnered with DigitX for a website redesign, resulting in a modern interface that elevates their online presence.</p>
                        </div>
                    </div>
                    <div className={classes.containercard}>
                        <div className={classes.card}>
                            <img src={Picturies.s7card5} alt=""/>
                            <p>TechGuru Inc.</p>
                            <p>DigitX's digital marketing strategies boosted TechGuru Inc.'s online visibility and customer engagement, driving significant business growth.</p>
                        </div>
                    </div>
                    <div className={classes.containercard}>
                        <div className={classes.card}>
                            <img src={Picturies.s7card6} alt=""/>
                            <p>ArtScape Gallery</p>
                            <p>DigitX brought ArtScape Gallery's artistic vision to life with a visually stunning website, showcasing the work of talented artists.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default OurPartners;