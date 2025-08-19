"use client";
import React from "react";
import { NextIcon, PrevIcon } from "../svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

const testimonial_data = [
  
  {
    id: 3,
    desc: `“Fantastic work! From the very first consultation to the final touches, everything was handled with great professionalism. Our living room now feels brighter and more welcoming. Thank you for a wonderful job!”`,
    name: "Emily Johnson",
    designation: "Melbourne",
  },
  {
    id: 4,
    desc: `“We couldn’t be more impressed! The painters were punctual, friendly, and extremely thorough. They took care of every detail and left our house looking fresh and beautiful. We will definitely hire them again.”`,
    name: "Michael Brown",
    designation: "Melbourne",
  },
  {
    id: 5,
    desc: `“Excellent service and top-quality finish! The team was knowledgeable and gave us helpful suggestions on colours. Our home now looks stunning and we’ve received so many compliments. Highly recommended!”`,
    name: "Olivia Smith",
    designation: "Melbourne",
  },
  {
    id: 6,
    desc: `“Amazing Painting & Decorating exceeded our expectations. They worked with great care, finished on time, and the end result is simply perfect. The whole process was stress-free and professional.”`,
    name: "James Anderson",
    designation: "Melbourne",
  },
];


const slider_setting: SwiperOptions = {
  slidesPerView: 1,
  loop: true,
  autoplay: true,
  speed: 1000,
  breakpoints: {
    "1400": {
      slidesPerView: 1,
    },
    "1200": {
      slidesPerView: 1,
    },
    "992": {
      slidesPerView: 1,
    },
    "768": {
      slidesPerView: 1,
    },
    "576": {
      slidesPerView: 1,
    },
    "0": {
      slidesPerView: 1,
    },
  },
  navigation: {
    prevEl: ".tp-testimonial-prev",
    nextEl: ".tp-testimonial-next",
  },
};
const TestimonialOne = () => {
  return (
    <div className="tp-testimonial-area pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="tp-testimonial-slider-wrapper p-relative">
              <div className="tp-testimonial-arrow-box d-none d-lg-block">
                <button className="tp-testimonial-prev">
                  <span>
                    <PrevIcon />
                  </span>
                </button>
                <button className="tp-testimonial-next">
                  <span>
                    <NextIcon />
                  </span>
                </button>
              </div>
              <Swiper
                {...slider_setting}
                modules={[Navigation]}
                className="swiper-container tp-testimonial-slider-active fix"
              >
                {testimonial_data.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="tp-testimonial-item text-center">
                      <p>{item.desc}</p>
                      <span>
                        <em>{item.name}</em> - {item.designation}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOne;
