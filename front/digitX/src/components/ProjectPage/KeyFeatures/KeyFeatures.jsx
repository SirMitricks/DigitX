import {Picturies} from "../../../assets/Fhoto.js";
import classes from "../KeyFeatures/KeyFeatures.module.scss";
import React from "react";


function KeyFeatures(){
    return(
        <main className={classes.main}>
            <section>
                <div className={classes.containerText}>
                    <p> Key Features <span>of Our Projects</span> </p>
                    <p>At DigitX, we are committed to providing exceptional digital solutions tailored to suit your unique business needs. Our comprehensive service offerings cover a wide spectrum of digital disciplines, including web design, app development, web development, and marketing.</p>
                </div>
                <div className={classes.contCard}>
                    <div className={classes.card1}>
                        <div className={classes.card}>
                            <img src={Picturies.FhotoPage3} alt=""/>
                            <p>Strategic Planning</p>
                            <p>Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives and target audience.</p>
                        </div>
                        <div className={classes.card}>
                            <img src={Picturies.FhotoPage3} alt=""/>
                            <p>Strategic Planning</p>
                            <p>Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives and target audience.</p>
                        </div>
                        <div className={classes.card}>
                            <img src={Picturies.FhotoPage3} alt=""/>
                            <p>Strategic Planning</p>
                            <p>Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives and target audience.</p>
                        </div>
                    </div>
                    <hr style={{width:'100%',border:'1px solid rgba(31, 31, 31, 1)', }} />
                    <div className={classes.card2}>
                        <div className={classes.card3}>
                            <img src={Picturies.FhotoPage3} alt=""/>
                            <p>Strategic Planning</p>
                            <p>Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives and target audience.</p>
                        </div>
                        <div className={classes.card3}>
                            <img src={Picturies.FhotoPage3} alt=""/>
                            <p>Strategic Planning</p>
                            <p>Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives and target audience.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default KeyFeatures;