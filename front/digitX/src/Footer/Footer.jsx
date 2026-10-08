import React from 'react';
import classes from '../Footer/Footer.module.scss';
import {Picturies} from '../assets/Fhoto.js';

function Footer() {
    return (
        <footer>
            <main>
                <div className={classes.Top}>
                    <img src={Picturies.Logo} alt=""/>
                    <div className={classes.Social}>
                        <p>Follow Us On Social Media</p>
                        <img src={Picturies.InMesseg} alt=""/>
                        <img src={Picturies.instagram} alt=""/>
                        <img src={Picturies.twitterFooter} alt=""/>
                    </div>
                </div>
                <div className={classes.Middle}>
                    <div className={classes.card}>
                        <p>Home</p>
                        <div className={classes.subcard}>
                            <p>Benefits</p>
                            <p>Our Testimonials</p>
                            <p>Partners</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <p>Services</p>
                        <div className={classes.subcard}>
                            <p>Web Design</p>
                            <p>Website Development</p>
                            <p>App Development</p>
                            <p>Digital Marketing</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <p>Projects</p>
                        <div className={classes.subcard}>
                            <p>ABC Tech Solutions</p>
                            <p>GreenEarth Eco Store</p>
                            <p>HealthTech Innovations</p>
                            <p>GlobalTech Solutions</p>
                            <p>TechGuru Inc.</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <p>About Us</p>
                        <div className={classes.subcard}>
                            <p>Our Team</p>
                            <p>Achievements</p>
                            <p>Awards</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <p>Careers</p>
                        <div className={classes.subcard}>
                            <p>Job Openings</p>
                            <p>Benefits & Perks</p>
                            <p>Employee Refral</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <p>Blogs</p>
                        <div className={classes.subcard}>
                            <p>Our Blogs</p>
                        </div>
                    </div>
                </div>
                <div className={classes.Bot}>
                    <p>@2023 Digitax. All Rights Reserved.</p>
                    <p>Version 1.0</p>
                    <div className={classes.private}>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </main>
        </footer>
    )
}
export default Footer;