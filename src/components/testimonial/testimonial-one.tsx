"use client";
import React from "react";
import { NextIcon, PrevIcon } from "../svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

const testimonial_data = [
  {
    id: 1,
    desc: `“Amazing Painting & Decorating did a fantastic job on our home! Their team was skilled, efficient, and paid attention to every detail. The final result exceeded our expectations, and we highly recommend their services!”`,
    name: "Sarah Thompson",
    designation: "Melbourne",
  },
  {
    id: 2,
    desc: `“We hired Amazing Painting & Decorating for our office, and they were excellent! Their expertise, professionalism, and quality work made a huge difference. The space looks fresh and modern. Highly recommended!”`,
    name: "David Williams",
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
