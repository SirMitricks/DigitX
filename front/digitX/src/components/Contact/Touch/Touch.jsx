import classes from "../Touch/Touch.module.scss";
import {Picturies} from "../../../assets/Fhoto.js";
import {Link} from "react-router-dom";
import React from "react";
import Grid from "./grid.jsx";
import Footer from "../../../Footer/Footer.jsx";
import Form from "./Form.jsx";
import DigitalVision from "../../ProjectPage/DigitalVision/DigitalVision.jsx";
import DigitalPresence from "../../Main/DigitalPresence/DigitalPresence.jsx";


function Touch() {
    return (
        <main className={classes.containermain}>
            <section>
                <img src={Picturies.Subbg} alt=""/>
                <div className={classes.contactcont}>
                    <p>Contact Us Via Email</p>
                    <div className={classes.container}>
                        <div className={classes.post}>
                            <p>For General Inquiries</p>
                            <div className={classes.cp}>
                                <div className={classes.pozta}>
                                    <img src={Picturies.Vector1} alt=""/>
                                    <p>info@digitx.com</p>
                                </div>
                                <img src={Picturies.ArrowLeft} alt=""/>
                            </div>
                        </div>
                        <div className={classes.post}>
                            <p>For General Inquiries</p>
                            <div className={classes.cp}>
                                <div className={classes.pozta}>
                                    <img src={Picturies.Vector1} alt=""/>
                                    <p>info@digitx.com</p>
                                </div>
                                <img src={Picturies.ArrowLeft} alt=""/>
                            </div>
                        </div>
                        <div className={classes.post}>
                            <p>For General Inquiries</p>
                            <div className={classes.cp}>
                                <div className={classes.pozta}>
                                    <img src={Picturies.Vector1} alt=""/>
                                    <p>info@digitx.com</p>
                                </div>
                                <img src={Picturies.ArrowLeft} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.contactcont}>
                    <p>Contact Us By Phone</p>
                    <div className={classes.container}>
                        <div className={classes.post}>
                            <p>General Enquiries</p>
                            <div className={classes.cp}>
                                <div className={classes.pozta}>
                                    <img src={Picturies.Vector1} alt=""/>
                                    <p>+1-XXX-XXX-XXXX</p>
                                </div>
                                <img src={Picturies.ArrowLeft} alt=""/>
                            </div>
                        </div>
                        <div className={classes.post}>
                            <p>General Enquiries</p>
                            <div className={classes.cp}>
                                <div className={classes.pozta}>
                                    <img src={Picturies.Vector1} alt=""/>
                                    <p>+1-XXX-XXX-XXXX</p>
                                </div>
                                <img src={Picturies.ArrowLeft} alt=""/>
                            </div>
                        </div>
                        <div className={classes.post}>
                            <p>General Enquiries</p>
                            <div className={classes.cp}>
                                <div className={classes.pozta}>
                                    <img src={Picturies.Vector1} alt=""/>
                                    <p>+1-XXX-XXX-XXXX</p>
                                </div>
                                <img src={Picturies.ArrowLeft} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <Grid/>
                <Form/>
                <DigitalPresence/>
            </section>
        </main>
    )
}
export default Touch;
