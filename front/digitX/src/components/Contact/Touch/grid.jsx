import classes from "./grid.module.scss";
import {Picturies} from "../../../assets/Fhoto.js";
import {Link} from "react-router-dom";
import React from "react";


function Grid() {
    return (
        <div className={classes.containerCite}>
            <section>
                <div className={classes.textcite}>
                    <p>Office Locations</p>
                    <p>Visit our offices to have a face-to-face discussion with our team. We have locations in</p>
                </div>
                <div className={classes.card}>
                    <div className={classes.containercard}>
                        <div className={classes.card}>
                            <img src={Picturies.S3card1} alt="" style={{width:'172px', height:'172px'}} />
                            <p>Web Development</p>
                            <p>Unlock Your Online Potential In today's digital age, a powerful web presence is essential for any business. At DigitX, our web development services empower you to stand out in the crowded online landscape. We create responsive and dynamic websites tailored to your unique needs, ensuring seamless user experiences across all devices. From e-commerce platforms to interactive web applications, our expert developers bring your vision to life, making your online journey a resounding success.</p>
                            <Link to='/Services'> <button>Learn More <img src={Picturies.ArrowLeft} alt="" style={{width:'28px', height:'28px'}}/></button></Link>
                        </div>
                    </div>
                    <div className={classes.containercard}>
                        <div className={classes.card}>
                            <img src={Picturies.S3card2} alt="" style={{width:'172px', height:'172px'}}/>
                            <p>Mobile App Development</p>
                            <p>Embrace Mobility with Confidence Mobile devices have revolutionized the way we interact with the world. Our mobile app development services enable you to harness this mobility to your advantage. We design and build intuitive and high-performance mobile applications that captivate your audience and boost engagement. Whether it's iOS, Android, or cross-platform development, we ensure that your app delivers a seamless experience, leaving a lasting impression on your users.</p>
                            <Link to='/Services'><button>Learn More <img src={Picturies.ArrowLeft} alt="" style={{width:'28px', height:'28px'}}/></button></Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default Grid;
