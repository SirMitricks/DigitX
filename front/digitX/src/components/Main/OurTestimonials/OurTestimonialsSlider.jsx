import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.css";
import {Picturies} from "../../../assets/Fhoto.js";
import SliderTestimonials from "../../../assets/Props.jsx";

function TestimonialSlider  ()  {
    return(
        <Swiper loop={true} slidesPerView={4} spaceBetween={10} className="mySwiper">
            <SwiperSlide> <SliderTestimonials image={Picturies.Avatars1} Name='Mark Roberts' Opis='Founder of GreenEarth Eco Store'/>  </SwiperSlide>
            <SwiperSlide> <SliderTestimonials image={Picturies.Avatars2} Name='Lisa Williams' Opis='Head of Product at HealthTech Innovations'/>  </SwiperSlide>
            <SwiperSlide> <SliderTestimonials image={Picturies.Avatars1} Name='Mark Roberts' Opis='Founder of GreenEarth Eco Store'/>  </SwiperSlide>
            <SwiperSlide> <SliderTestimonials image={Picturies.Avatars2} Name='Lisa Williams' Opis='Head of Product at HealthTech Innovations'/>  </SwiperSlide>
            <SwiperSlide> <SliderTestimonials image={Picturies.Avatars2} Name='Lisa Williams' Opis='Head of Product at HealthTech Innovations'/>  </SwiperSlide>
        </Swiper>
    );
}

export default TestimonialSlider;
