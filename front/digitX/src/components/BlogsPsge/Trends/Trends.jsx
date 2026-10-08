import {Picturies} from "../../../assets/Fhoto.js";
import classes from "../Trends/Trends.module.scss";
import React from "react";


function Trends() {
    return (
        <main className={classes.main}>
            <section className={classes.section}>
                <img src={Picturies.subc4} alt=""/>
                <div className={classes.title}>
                    <div className={classes.containerText}>
                        <p>Web Design Trends Shaping 2023</p>
                        <p>Stay ahead of the design curve with insights into the latest web design trends. From immersive user experiences to bold color choices, explore the design elements that will dominate the digital landscape in 2023 and beyond Read More...</p>
                    </div>
                    <div className={classes.bot}>
                       <div className={classes.textcont}>
                           <p>Read Time</p>
                           <p>6 minutes</p>
                       </div>
                        <div className={classes.textcont}>
                           <p>Author</p>
                           <p>Laura Turner</p>
                       </div>
                        <div className={classes.textcont}>
                           <p>Published Date</p>
                           <p>15 / 01 / 2023</p>
                       </div>
                        <div className={classes.textcont}>
                           <p>Category</p>
                           <p>Design</p>
                       </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Trends;