import {Picturies} from "../../../assets/Fhoto.js";
import classes from "../Author/Author.module.scss";
import React from "react";


function Author() {
    return (
        <main className={classes.main}>
            <div className={classes.card}>
                <div className={classes.contc}>
                    <img src={Picturies.Photo88} alt=""/>
                    <div className={classes.text}>
                        <div className={classes.lefrc}>
                            <img src={Picturies.Photo89} alt=""/>
                            <p>Daniel Lee</p>
                        </div>
                        <div className={classes.rightc}>
                            <p><img src={Picturies.Photo10} alt=""/>6 min read</p>
                            <p><img src={Picturies.Photo11} alt=""/>March 2019</p>
                        </div>
                    </div>
                    <div className={classes.mid}>
                        <p>The Art of User-Centric Design</p>
                        <p>User-centric design is the key to creating intuitive and engaging digital experiences....</p>
                    </div>
                    <button>Read More</button>
                </div><div className={classes.contc}>
                    <img src={Picturies.Photo88} alt=""/>
                    <div className={classes.text}>
                        <div className={classes.lefrc}>
                            <img src={Picturies.Photo89} alt=""/>
                            <p>Daniel Lee</p>
                        </div>
                        <div className={classes.rightc}>
                            <p><img src={Picturies.Photo10} alt=""/>6 min read</p>
                            <p><img src={Picturies.Photo11} alt=""/>March 2019</p>
                        </div>
                    </div>
                    <div className={classes.mid}>
                        <p>The Art of User-Centric Design</p>
                        <p>User-centric design is the key to creating intuitive and engaging digital experiences....</p>
                    </div>
                    <button>Read More</button>
                </div><div className={classes.contc}>
                    <img src={Picturies.Photo88} alt=""/>
                    <div className={classes.text}>
                        <div className={classes.lefrc}>
                            <img src={Picturies.Photo89} alt=""/>
                            <p>Daniel Lee</p>
                        </div>
                        <div className={classes.rightc}>
                            <p><img src={Picturies.Photo10} alt=""/>6 min read</p>
                            <p><img src={Picturies.Photo11} alt=""/>March 2019</p>
                        </div>
                    </div>
                    <div className={classes.mid}>
                        <p>The Art of User-Centric Design</p>
                        <p>User-centric design is the key to creating intuitive and engaging digital experiences....</p>
                    </div>
                    <button>Read More</button>
                </div><div className={classes.contc}>
                    <img src={Picturies.Photo88} alt=""/>
                    <div className={classes.text}>
                        <div className={classes.lefrc}>
                            <img src={Picturies.Photo89} alt=""/>
                            <p>Daniel Lee</p>
                        </div>
                        <div className={classes.rightc}>
                            <p><img src={Picturies.Photo10} alt=""/>6 min read</p>
                            <p><img src={Picturies.Photo11} alt=""/>March 2019</p>
                        </div>
                    </div>
                    <div className={classes.mid}>
                        <p>The Art of User-Centric Design</p>
                        <p>User-centric design is the key to creating intuitive and engaging digital experiences....</p>
                    </div>
                    <button>Read More</button>
                </div>
            </div>
        </main>
    )
}
export default Author;