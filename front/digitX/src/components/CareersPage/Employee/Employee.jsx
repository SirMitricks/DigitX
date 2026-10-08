import {Picturies} from "../../../assets/Fhoto.js";
import classes from "../Employee/Employee.module.scss";
import React from "react";


function Employee() {
    return (
        <main className={classes.main}>
            <section className={classes.section}>
                <div className={classes.containerText}>
                    <p><span>Employee </span>Referral Program</p>
                    <p>At DigitX, we believe that our employees are our most valuable asset. We recognize the importance of building a strong and talented team, and we encourage our employees to play an active role in shaping our workforce. Introducing our Employee Referral Program – an opportunity for you to help us find exceptional talent and be rewarded for your contributions.</p>
                </div>
                <div className={classes.contcard}>
                    <img src={Picturies.Photosection1} alt=""/>
                    <div className={classes.ccard}>
                        <div className={classes.card}>
                            <img src={Picturies.Photostep2} alt=""/>
                            <div className={classes.conttext}>
                                <p>Explore Job Listings</p>
                                <p>Visit our website's "Careers" page to explore the current job listings. Review the
                                    various roles available and select the position that aligns with your skills,
                                    experience, and career aspirations.</p>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <img src={Picturies.Photostep2} alt=""/>
                            <div className={classes.conttext}>
                                <p>Explore Job Listings</p>
                                <p>Visit our website's "Careers" page to explore the current job listings. Review the
                                    various roles available and select the position that aligns with your skills,
                                    experience, and career aspirations.</p>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <img src={Picturies.Photostep2} alt=""/>
                            <div className={classes.conttext}>
                                <p>Explore Job Listings</p>
                                <p>Visit our website's "Careers" page to explore the current job listings. Review the
                                    various roles available and select the position that aligns with your skills,
                                    experience, and career aspirations.</p>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <img src={Picturies.Photostep2} alt=""/>
                            <div className={classes.conttext}>
                                <p>Explore Job Listings</p>
                                <p>Visit our website's "Careers" page to explore the current job listings. Review the
                                    various roles available and select the position that aligns with your skills,
                                    experience, and career aspirations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Employee;