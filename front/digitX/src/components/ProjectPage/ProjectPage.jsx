
import classes from "../ProjectPage/ProjectPage.module.scss";
import DigitalVision from "./DigitalVision/DigitalVision.jsx";
import KeyFeatures from "./KeyFeatures/KeyFeatures.jsx";
import ProjectsShowcase from "./ProjectsShowcase/ProjectsShowcase.jsx";
import Upcoming from "./Upcoming/Upcoming.jsx";
import DigitalPresence from "../Main/DigitalPresence/DigitalPresence.jsx";

function ProjectPage() {
    return (
<main className={classes.mainContainer}>
    <DigitalVision/>
    <KeyFeatures/>
    <ProjectsShowcase/>
    <Upcoming/>
    <DigitalPresence/>
</main>
    )
}
export default ProjectPage;