import React from 'react';
import classes from './Categories.module.scss';
import WebDesignSection from "./MapSection.jsx";

function Categories() {
    return (
            <main className={classes.main}>
                <section>
                    <div className={classes.containerText}>
                        <p> <span>Categories of</span> Services</p>
                        <p>At DigitX, we are committed to providing exceptional digital solutions tailored to suit your unique business needs. Our comprehensive service offerings cover a wide spectrum of digital disciplines, including web design, app development, web development, and marketing.</p>
                    </div>
                        <WebDesignSection/>
                </section>
            </main>
    )
}
export default Categories;
