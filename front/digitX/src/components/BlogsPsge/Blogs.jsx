import classes from "./Blogs.module.scss";
import DigitalVision from "../ProjectPage/DigitalVision/DigitalVision.jsx";
import DigitalJourney from "./DigitalJourney/DigitalJourney.jsx";
import Trends from "./Trends/Trends.jsx";
import Author from "./Author/Author.jsx";
import DigitalPresence from "../Main/DigitalPresence/DigitalPresence.jsx";


function Blogs() {

    return (
        <main className={classes.mainContainer}>
            <DigitalJourney/>
            <Trends/>
            <Author/>
            <DigitalPresence/>
        </main>
    )
}
export default Blogs