import {useState} from "react";
import classes from "../Main/App.module.scss";
import OurComprehensive from "./OurComprehensive/OurComprehensive.jsx";
import OurServicesPage from "./OurServices/OurServices.jsx";
import Categories from "./Categories/Categories.jsx";
import SuccessStories from "./SuccessStories/SuccessStories.jsx";
import DigitalPresence from "../Main/DigitalPresence/DigitalPresence.jsx";

function ServicesPage() {
    const [count, setCount] = useState(0)

    return (
        <main className={classes.mainContainer}>
            <OurComprehensive/>
            <OurServicesPage/>
            <Categories/>
            <SuccessStories/>
            <DigitalPresence/>
        </main>
    )
}
export default ServicesPage