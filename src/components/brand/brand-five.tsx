import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// images (these can be replaced with Dulux, Taubmans, Wattyl, Haymes, etc. logos you use)
import b_1 from "@/assets/img/inner-about/brand/brand-1.png";
import b_2 from "@/assets/img/inner-about/brand/brand-2.png";
import b_3 from "@/assets/img/inner-about/brand/brand-3.png";
import b_4 from "@/assets/img/inner-about/brand/brand-4.png";
import b_5 from "@/assets/img/inner-about/brand/brand-5.png";
import b_6 from "@/assets/img/inner-about/brand/brand-2.png";

// brand images
const brand_images = [b_1, b_2, b_3, b_4, b_5, b_6];

export default function BrandFive() {
  return (
    <div
      className="ab-brand-area pt-120 pb-120 black-bg-2"
      style={{
        backgroundImage:
          "url(/assets/img/inner-about/brand/brand-bg-shape.png)",
      }}
    >
      <div className="container">
        {/* Section Title */}
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-title-box mb-100 text-center">
              <h4 className="ab-brand-title">Trusted By Leading Brands</h4>
            </div>
          </div>
        </div>

        {/* Brand Logos Scroller */}
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-wrapper mb-80">
              <div className="swiper-container ab-brand-slide-active">
                <Marquee speed={60} loop={0} className="ab-brand-slide-wrap" gradient={false}>
                  {brand_images.map((b, i) => (
                    <div key={i} className="ab-brand-item mx-10">
                      <Image src={b} alt="brand-logo" />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>

        {/* Brand / Client Content */}
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="ab-brand-content tp_title_anim text-center">
              <p>
                At <b>Classic Painting & Decorating Services</b>, we use only 
                trusted paint brands and quality materials to ensure long-lasting, 
                flawless finishes. Our commitment to excellence has helped us build 
                strong relationships with homeowners, builders, and businesses across Melbourne.
              </p>
              <span className="fw-bold">Quality You Can Rely On</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
