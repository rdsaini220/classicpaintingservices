import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ProjectShape, RightArrow } from "../svg";

// images
import port_1 from "@/assets/img/home-03/portfolio/port-1.jpg";
import port_2 from "@/assets/img/home-03/portfolio/port-2.jpg";
import port_3 from "@/assets/img/home-03/portfolio/port-3.jpg";
import port_4 from "@/assets/img/home-03/portfolio/port-4.jpg";
import port_5 from "@/assets/img/home-03/portfolio/port-5.jpg";
import port_6 from "@/assets/img/home-03/portfolio/port-6.jpg";
import port_7 from "@/assets/img/home-03/portfolio/port-7.jpg";
import port_8 from "@/assets/img/home-03/portfolio/port-8.jpg";

// portfolio data (updated with realistic painting/decorating projects)
const project_data = [
  {
    id: 1,
    img_1: port_1,
    img_2: port_2,
    meta: "• Residential",
    title: "Modern Home Interior Painting",
  },
  {
    id: 2,
    img_1: port_3,
    img_2: port_4,
    meta: "• Commercial",
    title: "Office Renovation & Decorating",
  },
  {
    id: 3,
    img_1: port_5,
    img_2: port_6,
    meta: "• Exterior",
    title: "Exterior House Painting",
  },
  {
    id: 4,
    img_1: port_7,
    img_2: port_8,
    meta: "• Renovation",
    title: "Full Property Restoration",
  },
];

// prop type
type IProps = {
  style_2?: boolean;
};

export default function ProjectFour({ style_2 = false }: IProps) {
  return (
    <div
      className={`tp-project-3-area ${
        style_2 ? "pt-60 pw-project-style" : "pt-130 black-bg"
      }`}
    >
      <div className="container container-1720">
        {!style_2 && (
          <div className="row justify-content-center">
            <div className="col-xl-7">
              <div className="tp-project-3-title-box p-relative mb-150 text-center">
                <h4 className="tp-section-title-200 tp_reveal_anim">
                  Latest <span>Projects</span>
                </h4>
                <p className="mt-3">
                  Explore our recent painting, decorating, and renovation
                  projects across Melbourne. Each project highlights our
                  commitment to craftsmanship, attention to detail, and long-lasting finishes.
                </p>
                <div className="tp-project-3-btn-box mt-4">
                  <Link
                    className="tp-btn-zikzak p-relative"
                    href="/portfolio-wrapper"
                  >
                    <span className="zikzak-content">
                      See <br /> All Projects
                      <RightArrow clr="#19191A" />
                    </span>
                    <ProjectShape />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects */}
        <div className="row">
          <div className="col-xl-12">
            {project_data.map((item) => (
              <div key={item.id} className="tp-project-3-wrap">
                <div className="row align-items-center">
                  {/* Left Image */}
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="tp-project-3-thumb pro-img-1">
                      <Image
                        src={item.img_1}
                        alt={item.title}
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="col-xl-4 col-lg-4 col-md-12 order-1 order-lg-0">
                    <div className="tp-project-3-content text-center">
                      <span className="tp-project-3-meta">{item.meta}</span>
                      <h4 className="tp-project-3-title-sm">
                        <Link href="/portfolio-details-1">{item.title}</Link>
                      </h4>
                      <Link
                        className="tp-btn-project-sm"
                        href="/portfolio-details-1"
                      >
                        See Project
                      </Link>
                    </div>
                    <div className="tp-project-3-border color-1 text-center">
                      <span></span>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="col-xl-4 col-lg-4 col-md-6 order-0 order-lg-0">
                    <div className="tp-project-3-thumb pro-img-2">
                      <Image
                        src={item.img_2}
                        alt={item.title}
                        style={{ height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
