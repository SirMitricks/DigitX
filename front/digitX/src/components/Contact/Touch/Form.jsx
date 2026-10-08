import classes from "./Form.module.scss";
import {Picturies} from "../../../assets/Fhoto.js";
import {Link} from "react-router-dom";
import React from "react";


function Form() {
    return (
        <div className={classes.containerCite}>
            <section>
                <div className={classes.textcite}>
                    <p>Office Locations</p>
                    <p>Visit our offices to have a face-to-face discussion with our team. We have locations in</p>
                </div>
                <div className={classes.form}>
                    <div className={classes.continput}>
                        <div className={classes.in}>
                            <p>Name</p>
                            <input type="text" placeholder='   Enter your Name'/>
                        </div>
                        <div className={classes.in}>
                            <p>Email</p>
                            <input type="text" placeholder='   Enter your Email'/>
                        </div>
                        <div className={classes.in}>
                            <p>Phone Number</p>
                            <input type="text" placeholder='   Enter your Phone Number'/>
                        </div>

                    </div>
                    <div className={classes.continput}>
                        <div className={classes.insel}>
                            <p>Select Service</p>
                            <p>Select your Service<img src={Picturies.ArrowBotton} alt=""/></p>
                        </div>
                        <div className={classes.in}>
                            <p>Company / Organization Name</p>
                            <input type="text" placeholder='   Enter Name'/>
                        </div>
                        <div className={classes.insel}>
                            <p>Subject</p>
                            <p>Select your Subject<img src={Picturies.ArrowBotton} alt=""/></p>
                        </div>
                    </div>
                    <div className={classes.mec}>
                        <p>Message</p>
                        <input type="text" placeholder='   Enter your Message'/>
                    </div>
                    <button>Send your Inquiry <img src={Picturies.ArrowLeft} alt=""/></button>
                </div>
                <div className={classes.photo}>
                    <img src={Picturies.bgs4} alt=""/>
                </div>
            </section>
        </div>
    )
}
export default Form;