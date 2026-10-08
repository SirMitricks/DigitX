import classes from "../Main/App.module.scss";
import Unlock from "./Unlock/Unlock.jsx";
import Job from "./JobListings/JobListings.jsx";
import Apply from "./HowApply/HowApply.jsx";
import Benefits from "./Benefits/Benefits.jsx";
import Employee from "./Employee/Employee.jsx";
import DigitalVision from "../ProjectPage/DigitalVision/DigitalVision.jsx";
import DigitalPresence from "../Main/DigitalPresence/DigitalPresence.jsx";


function ServicesPage() {

    return (
        <main className={classes.mainContainer}>
            <Unlock/>
            <Job/>
            <Apply/>
            <Benefits/>
            <Employee/>
            <DigitalPresence/>
        </main>
    )
}
export default ServicesPage