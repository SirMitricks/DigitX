import {Picturies} from "../../../assets/Fhoto.js";
import classes from "../Benefits/Benefits.module.scss";
import React from "react";


function Benefits() {
    return (
        <main className={classes.main}>
            <section className={classes.section}>
                <div className={classes.containerText}>
                    <p><span>Benefits &</span>Perks</p>
                    <p>At DigitX, we believe in prioritizing the well-being and growth of our team members. We offer a comprehensive range of benefits and perks to ensure our employees feel valued, motivated, and supported in both their personal and professional lives. As a member of the DigitX family, you can enjoy the following benefits</p>
                </div>
                <div className={classes.contcard}>
                    <div className={classes.ccard}>
                        <div className={classes.right}>
                            <img src={Picturies.Photoicon} alt=""/>
                            <p>Competitive Compensation</p>
                        </div>
                       <ul>
                           <li>We offer competitive salary packages to reward your skills, experience, and dedication to the company.</li>
                       </ul>
                    </div>
                    <div className={classes.ccard}>
                        <div className={classes.right}>
                            <img src={Picturies.Photoicon} alt=""/>
                            <p>Competitive Compensation</p>
                        </div>
                       <ul>
                           <li>We offer competitive salary packages to reward your skills, experience, and dedication to the company.</li>
                       </ul>
                    </div>
                    <div className={classes.ccard}>
                        <div className={classes.right}>
                            <img src={Picturies.Photoicon} alt=""/>
                            <p>Competitive Compensation</p>
                        </div>
                       <ul>
                           <li>We offer competitive salary packages to reward your skills, experience, and dedication to the company.</li>
                       </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Benefits;