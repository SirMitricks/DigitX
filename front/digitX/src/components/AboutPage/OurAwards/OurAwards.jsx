import React from 'react';
import classes from './OurAwards.module.scss';
import {Picturies} from '../../../assets/Fhoto.js';

function OurAwards() {
    return (
        <main className={classes.main}>
            <section>
                <div className={classes.containerText}>
                    <p> <span>Our</span> Services</p>
                    <p>Our comprehensive range of services includes web design, mobile app development, SEO, social media marketing, and more. Whether you're a startup or an established enterprise, our experts will craft solutions that drive results.</p>
                </div>
                <div className={classes.card}>
                    <div className={classes.containercard}>
                        <div className={classes.card}>
                            <img src={Picturies.S3card1} alt=""/>
                            <div className={classes.but}>
                                <img src={Picturies.Calrndar} alt=""/>
                                <p>October 2017</p>
                            </div>
                            <p>Web Development</p>
                            <p>Unlock Your Online Potential In today's digital age, a powerful web presence is essential for any business. At DigitX, our web development services empower you to stand out in the crowded online landscape. We create responsive and dynamic websites tailored to your unique needs, ensuring seamless user experiences across all devices. From e-commerce platforms to interactive web applications, our expert developers bring your vision to life, making your online journey a resounding success.</p>
                            <div className={classes.contcard}>
                                <p>Why</p>
                                <p>Innovative web design and development solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.containercard}>
                        <div className={classes.card}>
                            <img src={Picturies.S3card2} alt=""/>
                            <div className={classes.but}>
                                <img src={Picturies.Calrndar} alt=""/>
                                <p>October 2017</p>
                            </div>
                            <p>Mobile App Development</p>
                            <p>Embrace Mobility with Confidence Mobile devices have revolutionized the way we interact with the world. Our mobile app development services enable you to harness this mobility to your advantage. We design and build intuitive and high-performance mobile applications that captivate your audience and boost engagement. Whether it's iOS, Android, or cross-platform development, we ensure that your app delivers a seamless experience, leaving a lasting impression on your users.</p>
                            <div className={classes.contcard}>
                                <p>Why</p>
                                <p>Innovative web design and development solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.containercard}>
                        <div className={classes.card}>
                            <img src={Picturies.S3card3} alt=""/>
                            <div className={classes.but}>
                                <img src={Picturies.Calrndar} alt=""/>
                                <p>October 2017</p>
                            </div>
                            <p>Web Design</p>
                            <p>Elevate Your Brand Aesthetics Your website's design is a reflection of your brand's identity and values. DigitX's web design services focus on creating visually striking and user-friendly interfaces that leave a lasting impact. Our creative team blends aesthetics with functionality, delivering a captivating user experience that keeps visitors coming back for more. Let us transform your online presence into an immersive journey that showcases your brand's true essence.</p>
                            <div className={classes.contcard}>
                                <p>Why</p>
                                <p>Innovative web design and development solutions.</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.containercard}>
                        <div className={classes.card}>
                            <img src={Picturies.S3card4} alt=""/>
                            <div className={classes.but}>
                                <img src={Picturies.Calrndar} alt=""/>
                                <p>October 2017</p>
                            </div>
                            <p>Digital Marketing</p>
                            <p>Drive Your Business Forward In the vast digital landscape, standing out from the competition is crucial. Our digital marketing services help you rise above the noise and connect with your target audience effectively. From search engine optimization (SEO) to social media marketing and pay-per-click (PPC) campaigns, our data-driven strategies ensure that your message reaches the right people at the right time.</p>
                            <div className={classes.contcard}>
                                <p>Why</p>
                                <p>Innovative web design and development solutions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default OurAwards;