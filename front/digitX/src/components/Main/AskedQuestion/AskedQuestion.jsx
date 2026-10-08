import React from 'react';
import {Picturies} from '../../../assets/Fhoto.js';
import classes from './AskedQuestion.module.scss'
import FAQ from "./FAQ.jsx";


function AskedQuestion() {
    return (
        <>
            <main className={classes.main}>
                <div className={classes.TextTitle}>
                    <div className={classes.Title}>
                        <p>Frequently Asked Questions</p>
                        <p>Got questions? We've got answers. Check out our frequently asked questions section to find valuable insights into our processes, pricing, and more. Transparency is at the core of our client interactions.</p>
                    </div>
                    <div className={classes.input}>
                        <img src={Picturies.Search} alt=""/>
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className={classes.detailscontaine}>
                    <FAQ/>
                </div>
            </main>
        </>
    )
}
export default AskedQuestion;