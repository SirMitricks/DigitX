import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import MainPage from './components/Main/MainPage.jsx'
import Header from "./Header/Header.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./Footer/Footer.jsx";
import ServicesPage from "./components/ServicesPage/ServicesPage.jsx";
import DigitalVision from "./components/ProjectPage/DigitalVision/DigitalVision.jsx";
import ProjectPage from "./components/ProjectPage/ProjectPage.jsx";
import AboutPage from "./components/AboutPage/AboutPage.jsx";
import CareersPage from "./components/CareersPage/CareersPage.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Blogs from "./components/BlogsPsge/Blogs.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route index element={<MainPage />} />
              <Route path="/Home"  element={<MainPage />} />
              <Route path='/Services' element={<ServicesPage />} />
              <Route path='/Progect' element={<ProjectPage/>} />
              <Route path='/About' element={<AboutPage/>} />
              <Route path='/Carees' element={<CareersPage/>} />
              <Route path='/Contact' element={<Contact/>} />
              <Route path='/Blogs' element={<Blogs/>} />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
