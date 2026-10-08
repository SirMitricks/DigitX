import {Picturies} from '../../../assets/Fhoto.js';
import classes from './OurWorks.module.scss'

function OurWorks() {
    return (
        <main className={classes.main}>
            <section>
                <div className={classes.containerText}>
                    <p><span>Our</span>Works</p>
                    <p>Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself.</p>
                </div>
                <div className={classes.containerCard}>
                    <div className={classes.Card}>
                        <div className={classes.ContainerCards}>
                            <img src={Picturies.S4card1} alt=""/>
                            <button>View Projects Details <img src={Picturies.ArrowLeft} alt=""/></button>
                            <div className={classes.textcard}>
                                <p className={classes.titletext}>Innovative E-commerce Platform</p>
                                <div className={classes.text}>
                                    <p>Category: Web Development.</p>
                                    <p>January 2022</p>
                                </div>
                                <p className={classes.textend}>Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.Card}>
                        <div className={classes.ContainerCards}>
                            <img src={Picturies.S4card2} alt=""/>
                            <button>View Projects Details <img src={Picturies.ArrowLeft} alt=""/></button>
                            <div className={classes.textcard}>
                                <p className={classes.titletext}> Mobile App for Enhanced Fitness</p>
                                <div className={classes.text}>
                                    <p>Category: Mobile App Development.</p>
                                    <p>March 2022</p>
                                </div>
                                <p className={classes.textend}>Our fitness app helps users stay fit and motivated with personalized workout plans and progress tracking. Its user-friendly design and comprehensive features make staying healthy an enjoyable experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.Card}>
                        <div className={classes.ContainerCards}>
                            <img src={Picturies.S4card3} alt=""/>
                            <button>View Projects Details <img src={Picturies.ArrowLeft} alt=""/></button>
                            <div className={classes.textcard}>
                                <p className={classes.titletext}>Modern Corporate Website</p>
                                <div className={classes.text}>
                                    <p>Category: Web Design.</p>
                                    <p>April 2022</p>
                                </div>
                                <p className={classes.textend}>Check out our sleek and modern corporate website that showcases the client's brand and services. Its responsive design ensures a consistent experience across devices. </p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.Card}>
                        <div className={classes.ContainerCards}>
                            <img src={Picturies.S4card4} alt=""/>
                            <button>View Projects Details <img src={Picturies.ArrowLeft} alt=""/></button>
                            <div className={classes.textcard}>
                                <p className={classes.titletext}>Digital Marketing Success Story</p>
                                <div className={classes.text}>
                                    <p>Category: Digital Marketing.</p>
                                    <p>May 2022</p>
                                </div>
                                <p className={classes.textend}>Discover how our data-driven digital marketing strategies boosted a client's online presence, resulting in a significant increase in website traffic and leads.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className={classes.button}>View All Projects <img src={Picturies.ArrowLeft} alt=""/></button>
            </section>
        </main>
    )
}
export default OurWorks;