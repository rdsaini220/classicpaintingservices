import React from "react";
import { scroller } from "react-scroll";
import { ScrollDown } from "../svg";

export default function AboutUsHero() {
  const scrollTo = () => {
    scroller.scrollTo("about-info", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div
      className="ab-inner-hero-area ab-inner-hero-bg p-relative"
      style={{ backgroundImage: "url(/assets/img/inner-about/hero/hero-1.jpg)" }}
    >
      <div className="breadcurmb-site d-none">
        <h6>About Us</h6>
      </div>
      <div className="ab-inner-hero-scroll smooth">
        <a className="pointer" onClick={scrollTo}>
          <span>
            Scroll to explore
            <ScrollDown />
          </span>
        </a>
      </div>
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-8">
            <div
              className="ab-inner-hero-title-box"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <span className="ab-inner-hero-subtitle">
                Classic <br /> Painting & Decorating Services
              </span>
              <h1 className="ab-inner-hero-title tp-char-animation">
                  Homes & Workspaces
              </h1>
              <p>
                Professional painting and decorating solutions that bring beauty,
                durability, and elegance to every project.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-end">
          <div className="col-xl-5 col-lg-8">
            <div
              className="ab-inner-hero-content"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <p>
                At Classic Painting & Decorating Services, we specialise in
                residential, commercial, and decorative finishes. With years of
                experience, we deliver high-quality craftsmanship and attention
                to detail that exceeds expectations.
              </p>
              <a className="tp-btn-white-sm border-style" href="#">
                Our Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
