import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";
import ser_img_5 from "@/assets/img/inner-service/service/service-5.jpg";

import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";
const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "Service",
    title: "Interior & Exterior Painting",
    text: "Enhance the beauty and durability of your property with our professional interior and exterior painting services. We use premium paints and techniques to deliver a flawless, long-lasting finish for both homes and businesses.",
    lists: [
      "Residential & Commercial Painting",
      "Hand-Brushed Weatherboards",
      "Timber Staining & Varnishing",
      "Professional Spray Painting",
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Service",
    title: "Decorating Services",
    text: "Bring your interiors to life with our expert decorating services. From elegant wall finishes to custom-painted furniture, we create stylish spaces tailored to your taste and lifestyle.",
    lists: [
      "Feature & Decorative Wall Painting",
      "Custom Hand-Painted Furniture",
      "Surface Stripping & Preparation",
      "Acrylic & Oil-Based Finishes",
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Service",
    title: "Home & Commercial Renovations",
    text: "Transform your property with our renovation solutions. Whether refreshing interiors or upgrading commercial spaces, we focus on detail, quality, and lasting results.",
    lists: [
      "Surface Preparation & Restoration",
      "Heritage Painting & Refinishing",
      "Fence & Deck Painting",
      "Shopfront & Business Makeovers",
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "Service",
    title: "Wallpaper Installation",
    text: "Add character and style to your walls with our professional wallpaper installation services. We offer modern designs, classic patterns, and custom solutions for a polished finish.",
    lists: [
      "Expert Wallpaper Hanging",
      "Stripping & Safe Removal",
      "Custom Accent Wall Designs",
      "Durable & Stylish Finishes",
    ],
  },
  {
    id: 5,
    img: ser_img_5, // add a new image variable for commercial painting
    subtitle: "Service",
    title: "Commercial Painting",
    text: "Professional commercial painting services tailored for offices, retail spaces, and industrial properties. We deliver high-quality finishes that enhance your business environment and brand image.",
    lists: [
      "Office & Retail Painting",
      "Industrial & Warehouse Coatings",
      "Exterior & Interior Commercial Painting",
      "Durable, Long-Lasting Finishes",
    ],
  },
];



export default function ServiceSix() {
  return (
    <div className="sv-service-area project-panel-area-2">
      <div className="container-fluid p-0">
        {service_data.map((item) => (
          <div key={item.id} className="sv-service-item project-panel-2">
            <div className="row g-0">
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-thumb">
                  <Image
                    src={item.img}
                    alt="service-img"
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="sv-service-content-wrap d-flex align-items-center">
                  <div className="sv-service-content">
                    <div className="sv-service-title-box">
                      <span className="sv-service-subtitle">
                        <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                        {item.subtitle}
                      </span>
                      <h4 className="sv-service-title">{item.title}</h4>
                    </div>
                    <div className="sv-service-space-wrap">
                      <div className="sv-service-text">
                        <p>{item.text}</p>
                      </div>
                      <div className="sv-service-list">
                        <ul>
                          {item.lists.map((list, i) => (
                            <li key={i}>{list}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
