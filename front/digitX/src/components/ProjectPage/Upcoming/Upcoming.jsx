import {Picturies} from "../../../assets/Fhoto.js";
import classes from "../Upcoming/Upcoming.module.scss";
import React from "react";


function Upcoming(){
    return(
        <main className={classes.main}>
            <section>
                <div className={classes.containerText}>
                    <p> Upcoming <span>Projects</span></p>
                    <p>At DigitX, we are continually working on exciting new projects to push the boundaries of digital
                        innovation and deliver exceptional solutions to our valued clients. While we are thrilled to
                        share our upcoming projects with you, we understand the importance of confidentiality and
                        safeguarding sensitive information. Therefore, we will provide a brief overview of the upcoming
                        projects while keeping specific details concealed.</p>
                </div>
                <div className={classes.container}>
                    <div className={classes.card}>
                        <div className={classes.top}>
                            <img src={Picturies.FhotoPage3} alt=""/>
                            <p>Healthcare Platform Enhancement</p>
                        </div>
                        <div className={classes.mid}>
                            <div className={classes.cord}>
                                <p>Category</p>
                                <p>Web Development</p>
                            </div>
                            <div className={classes.cord}>
                                <p>Expected Completion</p>
                                <p>Q4 2023</p>
                            </div>
                        </div>
                        <div className={classes.bot}>
                            <p>Project Description</p>
                            <p>Our team is collaborating with a leading healthcare provider to enhance their existing
                                platform. The project aims to streamline user experiences, optimize database
                                performance, and implement advanced security measures to safeguard patient data. This
                                ambitious undertaking will elevate the platform's capabilities and revolutionize
                                healthcare accessibility for users.</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.top}>
                            <img src={Picturies.FhotoPage3} alt=""/>
                            <p>Healthcare Platform Enhancement</p>
                        </div>
                        <div className={classes.mid}>
                            <div className={classes.cord}>
                                <p>Category</p>
                                <p>Web Development</p>
                            </div>
                            <div className={classes.cord}>
                                <p>Expected Completion</p>
                                <p>Q4 2023</p>
                            </div>
                        </div>
                        <div className={classes.bot}>
                            <p>Project Description</p>
                            <p>Our team is collaborating with a leading healthcare provider to enhance their existing
                                platform. The project aims to streamline user experiences, optimize database
                                performance, and implement advanced security measures to safeguard patient data. This
                                ambitious undertaking will elevate the platform's capabilities and revolutionize
                                healthcare accessibility for users.</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.top}>
                            <img src={Picturies.FhotoPage3} alt=""/>
                            <p>Healthcare Platform Enhancement</p>
                        </div>
                        <div className={classes.mid}>
                            <div className={classes.cord}>
                                <p>Category</p>
                                <p>Web Development</p>
                            </div>
                            <div className={classes.cord}>
                                <p>Expected Completion</p>
                                <p>Q4 2023</p>
                            </div>
                        </div>
                        <div className={classes.bot}>
                            <p>Project Description</p>
                            <p>Our team is collaborating with a leading healthcare provider to enhance their existing
                                platform. The project aims to streamline user experiences, optimize database
                                performance, and implement advanced security measures to safeguard patient data. This
                                ambitious undertaking will elevate the platform's capabilities and revolutionize
                                healthcare accessibility for users.</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.top}>
                            <img src={Picturies.FhotoPage3} alt=""/>
                            <p>Healthcare Platform Enhancement</p>
                        </div>
                        <div className={classes.mid}>
                            <div className={classes.cord}>
                                <p>Category</p>
                                <p>Web Development</p>
                            </div>
                            <div className={classes.cord}>
                                <p>Expected Completion</p>
                                <p>Q4 2023</p>
                            </div>
                        </div>
                        <div className={classes.bot}>
                            <p>Project Description</p>
                            <p>Our team is collaborating with a leading healthcare provider to enhance their existing
                                platform. The project aims to streamline user experiences, optimize database
                                performance, and implement advanced security measures to safeguard patient data. This
                                ambitious undertaking will elevate the platform's capabilities and revolutionize
                                healthcare accessibility for users.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Upcoming;