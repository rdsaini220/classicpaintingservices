import React from "react";
import Image from "next/image";
import { Hand } from "../svg";

// images
import shape from "@/assets/img/inner-about/about/shape-1.png";
import ab_1 from "@/assets/img/inner-about/about/about-1.jpeg";
import ab_2 from "@/assets/img/inner-about/about/about-2.jpeg";
 
export default function AboutUsArea() {
  return (
    <div className="ab-about-area ab-about-mt pb-90 z-index-5">
      <div className="container container-1480">
        {/* Images */}
        <div className="ab-about-thumb-wrap mb-180">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-left-thumb">
                <Image
                  data-speed=".7"
                  src={ab_1}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-right-thumb p-relative">
                <Image
                  data-speed="1.1"
                  className="inner-img z-index-5"
                  src={ab_2}
                  alt="about-img"
                  style={{ height: "auto" }}
                />
                {/* <Image
                  data-speed="0.9"
                  src={ab_3}
                  alt="about-img"
                  style={{ height: "auto" }}
                /> */}
              </div>
            </div>
          </div>
        </div>

        {/* About Info */}
        <div id="about-info" className="row">
          <div className="col-xxl-9">
            <div className="ab-about-content p-relative">
              <span>
                <Hand />
                Hi!
              </span>
              <p className="tp-dropcap tp_fade_bottom">
                At <b>Classic Painting & Decorating Services</b>, we take pride
                in delivering high-quality painting, decorating, and renovation
                solutions across Melbourne. With years of experience, our team
                transforms homes, offices, and commercial spaces with precision,
                creativity, and attention to detail.
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="row">
          <div className="col-xl-9">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-4 mb-40">
                <div className="ab-about-category-title-box p-relative">
                  <h4 className="ab-about-category-title">
                    Our <br />
                    <span>Services</span>
                  </h4>
                  <Image
                    className="ab-about-shape-1 d-none d-md-block"
                    src={shape}
                    alt="shape"
                  />
                </div>
              </div>

              {/* Services List */}
              <div className="col-xl-7 col-lg-7 col-md-8">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-1 tp_fade_bottom">
                      <ul>
                        <li>Interior & Exterior Painting</li>
                        <li>Residential & Commercial Projects</li>
                        <li>Staining & Varnishing</li>
                        <li>Decorative Finishes</li>
                        <li>Wallpaper Installation</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-2 tp_fade_bottom">
                      <ul>
                        <li>Surface Preparation & Restoration</li>
                        <li>Heritage & Specialty Painting</li>
                        <li>Fence & Deck Painting</li>
                        <li>Shopfront & Business Renovations</li>
                        <li>Custom Accent Walls & Designs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Services List */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
