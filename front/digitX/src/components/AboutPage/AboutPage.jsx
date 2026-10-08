import classes from "../ProjectPage/ProjectPage.module.scss";
import DigitalVision from "../ProjectPage/DigitalVision/DigitalVision.jsx";
import ElevatingBrands from "./TeamMembers/ElevatingBrands.jsx";
import OurAchievements from "./OurAchievements/OurAchievements.jsx";
import OurAwards from "./OurAwards/OurAwards.jsx";
import DigitalPresence from "../Main/DigitalPresence/DigitalPresence.jsx";

function AboutPage() {
    return (
        <main className={classes.mainContainer}>
            <DigitalVision/>
            <ElevatingBrands/>
            <OurAchievements/>
            <OurAwards/>
            <DigitalPresence/>
        </main>
    )
}
export default AboutPage;