import classes from "../Contact/Contact.module.scss";
import {Picturies} from "../../assets/Fhoto.js";
import Touch from "./Touch/Touch.jsx";


function Contact() {

    return (
        <main className={classes.mainContainer}>
            <img className={classes.img} src={Picturies.Bg} alt=""/>
                <Touch />
        </main>
    )
}
export default Contact;