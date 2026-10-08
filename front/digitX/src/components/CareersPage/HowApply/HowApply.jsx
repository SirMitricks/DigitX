import {Picturies} from "../../../assets/Fhoto.js";
import classes from "../HowApply/HowApply.module.scss";
import React from "react";


function Apply() {
    return (
        <main className={classes.main}>
            <section className={classes.section}>
                <div className={classes.containerText}>
                    <p><span>How to</span>Apply</p>
                    <p>We are excited that you are interested in joining our team at DigitX! To apply for any of our job
                        listings, please follow the simple steps below</p>
                </div>
                <div className={classes.contcard}>
                    <div className={classes.card}>
                        <img src={Picturies.Step} alt=""/>
                        <div className={classes.conttext}>
                            <p>Explore Job Listings</p>
                            <p>Visit our website's "Careers" page to explore the current job listings. Review the
                                various roles available and select the position that aligns with your skills,
                                experience, and career aspirations.</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <img src={Picturies.Step} alt=""/>
                        <div className={classes.conttext}>
                            <p>Explore Job Listings</p>
                            <p>Visit our website's "Careers" page to explore the current job listings. Review the
                                various roles available and select the position that aligns with your skills,
                                experience, and career aspirations.</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <img src={Picturies.Step} alt=""/>
                        <div className={classes.conttext}>
                            <p>Explore Job Listings</p>
                            <p>Visit our website's "Careers" page to explore the current job listings. Review the
                                various roles available and select the position that aligns with your skills,
                                experience, and career aspirations.</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <img src={Picturies.Step} alt=""/>
                        <div className={classes.conttext}>
                            <p>Explore Job Listings</p>
                            <p>Visit our website's "Careers" page to explore the current job listings. Review the
                                various roles available and select the position that aligns with your skills,
                                experience, and career aspirations.</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <img src={Picturies.Step} alt=""/>
                        <div className={classes.conttext}>
                            <p>Explore Job Listings</p>
                            <p>Visit our website's "Careers" page to explore the current job listings. Review the
                                various roles available and select the position that aligns with your skills,
                                experience, and career aspirations.</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <img src={Picturies.Step} alt=""/>
                        <div className={classes.conttext}>
                            <p>Explore Job Listings</p>
                            <p>Visit our website's "Careers" page to explore the current job listings. Review the
                                various roles available and select the position that aligns with your skills,
                                experience, and career aspirations.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Apply;