import {Picturies} from '../../../assets/Fhoto.js';
import classes from './Reasons.module.scss'

function ReasonChoose() {
    return (
        <>
            <main className={classes.ContainerMain}>
                <section>
                    <div className={classes.containerText}>
                        <p>Reasons to Choose DigitX for <span>Your Digital Journey</span> </p>
                        <p>Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.</p>
                    </div>
                    <div className={classes.containerCard}>
                        <div className={classes.Card}>
                            <div className={classes.card}>
                                <img src={Picturies.S2card1} alt=""/>
                                <p>Expertise That Drives Results</p>
                                <p>Our team of seasoned professionals brings years of experience and expertise to the table.</p>
                                <button> Learn More <img src={Picturies.ArrowLeft} alt=""/> </button>
                            </div>
                            <div className={classes.line}/>
                            <div className={classes.card}>
                                <img src={Picturies.S2card2} alt=""/>
                                <p>Tailored Business Solutions </p>
                                <p>We understand that every business is unique. That's why our solutions are customized.</p>
                                <button>Learn More<img src={Picturies.ArrowLeft} alt=""/> </button>
                            </div>
                            <div className={classes.line}/>
                            <div className={classes.card}>
                                <img src={Picturies.S2card3} alt=""/>
                                <p>Cutting-Edge Web Design</p>
                                <p>Leave a lasting impression on your audience with our top-notch web design services.</p>
                                <button>Learn More<img src={Picturies.ArrowLeft} alt=""/> </button>
                            </div>
                        </div>
                        <hr style={{width:'100%',border:'1px solid rgba(31, 31, 31, 1)', }} />
                        <div className={classes.Card}>
                            <div className={classes.card}>
                                <img src={Picturies.S2card4} alt=""/>
                                <p>Mobile-First Approach</p>
                                <p>In today's mobile-centric world, we prioritize mobile-first design to ensure your website.</p>
                                <button>Learn More<img src={Picturies.ArrowLeft} alt=""/> </button>
                            </div>
                            <div className={classes.line}/>
                            <div className={classes.card}>
                                <img src={Picturies.S2card5} alt=""/>
                                <p>Marketing Strategies</p>
                                <p>Our data-driven marketing strategies allow us to target the right audience with precision</p>
                                <button>Learn More<img src={Picturies.ArrowLeft} alt=""/> </button>
                            </div>
                            <div className={classes.line}/>
                            <div className={classes.card}>
                                <img src={Picturies.S2card6} alt=""/>
                                <p>Search Engine Optimization</p>
                                <p>(SEO) Mastery Boost your online visibility with our expert SEO techniques.</p>
                                <button>Learn More<img src={Picturies.ArrowLeft} alt=""/> </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ReasonChoose