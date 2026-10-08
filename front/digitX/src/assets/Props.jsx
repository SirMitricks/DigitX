import React from 'react';
import {Picturies} from './Fhoto.js';
import classes from './Props.module.scss'

export default function SliderTestimonials(props) {
    return (
        <>
        <div className={classes.Props_container}>
            <div className={classes.card}>
                <img className={classes.Photo}  src={Picturies.Twitter} alt=""/>
                <p>Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.</p>
            </div>
            <img className={classes.Arrow}  src={Picturies.ArrowBotton} alt=""/>
            <div className={classes.person}>
                <img className={classes.avatar}  src={props.image} alt=""/>
                <div className={classes.personsText}>
                    <p>{props.Name}</p>
                    <p>{props.Opis}</p>
                </div>
            </div>
        </div>
</>
)
}
