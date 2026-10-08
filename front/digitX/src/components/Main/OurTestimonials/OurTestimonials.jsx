import React from 'react';
import classes from './OurTestimonial.module.scss'
import TestimonialSlider from "./OurTestimonialsSlider.jsx";



function OurTestimonials() {
    return (
        <>
            <main className={classes.main}>
                <div className={classes.TextTitle}>
                    <div className={classes.Title}>
                        <p>Our Testimonials</p>
                        <p>Don't just take our word for it; hear what our satisfied clients have to say about their experience with DigitX. We take pride in building lasting relationships and delivering exceptional results.</p>
                    </div>
                </div>
                <div className={classes.detailscontaine}>
                    <TestimonialSlider/>
                </div>
            </main>
        </>
    )
}
export default OurTestimonials;