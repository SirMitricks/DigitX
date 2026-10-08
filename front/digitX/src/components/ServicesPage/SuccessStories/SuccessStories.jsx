import {Picturies} from "../../../assets/Fhoto.js";
import classes from "../SuccessStories/SuccessStories.module.scss";

function SuccessStories() {
    return (
        <main className={classes.container}>
            <section>
                <div className={classes.title}>
                    <p>Success <span>Stories</span></p>
                    <p>At DigitX, our success is defined by the achievements of our valued clients. We take immense
                        pride in the transformative impact our digital solutions have had on their businesses. Here are
                        some inspiring success stories that highlight the outcomes of our collaborative efforts</p>
                </div>
                <div className={classes.content}>
                    <div className={classes.card}>
                        <div className={classes.top}>
                            <div className={classes.topt}>
                                <img src={Picturies.FhotoPage21} alt=""/>
                                <p>ABC Tech Solutions</p>
                            </div>
                            <div className={classes.bottomj}>
                                <div className={classes.left}>
                                    <img src={Picturies.FhotoPage23} alt=""/>
                                    <p>AE-commerce</p>
                                </div>
                                <div className={classes.leftt}>
                                    <img src={Picturies.FhotoPage24} alt=""/>
                                    <p>Web Design & Development</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.bottom}>
                            <p>Challenge</p>
                            <p>ABC Enterprises approached us with a desire to revamp their outdated website and create a
                                more user-friendly and visually appealing platform. They sought to improve user
                                engagement and increase online sales.</p>
                            <hr style={{width: '100%', border: '1px solid rgba(31, 31, 31, 1)',}}/>
                            <p>Solution</p>
                            <p>Our team conducted a thorough analysis of their target audience and business objectives.
                                We designed a modern and intuitive website with seamless navigation and a
                                mobile-responsive layout. Additionally, we integrated an efficient checkout process and
                                optimized the site for search engines.</p>
                            <p>Read Full Story</p>
                        </div>
                    </div>
                    <div className={classes.card}>
                        <div className={classes.top}>
                            <div className={classes.topt}>
                                <img src={Picturies.FhotoPage21} alt=""/>
                                <p>ABC Tech Solutions</p>
                            </div>
                            <div className={classes.bottomj}>
                                <div className={classes.left}>
                                    <img src={Picturies.FhotoPage23} alt=""/>
                                    <p>AE-commerce</p>
                                </div>
                                <div className={classes.leftt}>
                                    <img src={Picturies.FhotoPage24} alt=""/>
                                    <p>Web Design & Development</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes.bottom}>
                            <p>Challenge</p>
                            <p>ABC Enterprises approached us with a desire to revamp their outdated website and create a
                                more user-friendly and visually appealing platform. They sought to improve user
                                engagement and increase online sales.</p>
                            <hr style={{width: '100%', border: '1px solid rgba(31, 31, 31, 1)',}}/>
                            <p>Solution</p>
                            <p>Our team conducted a thorough analysis of their target audience and business objectives.
                                We designed a modern and intuitive website with seamless navigation and a
                                mobile-responsive layout. Additionally, we integrated an efficient checkout process and
                                optimized the site for search engines.</p>
                            <p>Read Full Story</p>
                        </div>
                    </div>
                </div>
                <button>View All Stories <img src={Picturies.ArrowLeft} alt=""/></button>
            </section>
        </main>
    )
}
export default SuccessStories;