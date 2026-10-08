import { useState } from 'react'
import classes from './App.module.scss';
import HeroSection from "./Section1/HeroSection.jsx";
import ReasonChoose from "./ReasonstoChoose/ReasonstoChoose.jsx";
import OurServices from "./OurServices/OurServices.jsx";
import OurWorks from "./OurWorks/OurWorks.jsx";
import AskedQuestion from "./AskedQuestion/AskedQuestion.jsx";
import OurTestimonials from "./OurTestimonials/OurTestimonials.jsx";
import OurPartners from "./OurPartners/OurPartners.jsx";
import DigitalPresence from "./DigitalPresence/DigitalPresence.jsx";

function MainPage() {
  const [count, setCount] = useState(0)

  return (
    <>
        <main className={classes.mainContainer}>
            <HeroSection/>
            <ReasonChoose/>
            <OurServices/>
            <OurWorks/>
            <OurTestimonials/>
            <AskedQuestion/>
            <OurPartners/>
            <DigitalPresence/>
        </main>
    </>
  )
}

export default MainPage
