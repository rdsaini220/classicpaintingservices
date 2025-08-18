import React from "react";
import Image from "next/image";

// images
import ser_img_1 from "@/assets/img/inner-service/service/service-1.jpg";
import ser_img_2 from "@/assets/img/inner-service/service/service-2.jpg";
import ser_img_3 from "@/assets/img/inner-service/service/service-3.jpg";
import ser_img_4 from "@/assets/img/inner-service/service/service-4.jpg";
import { RightArrow, ShapeTwo } from "../svg";
import Link from "next/link";

const service_data = [
  {
    id: 1,
    img: ser_img_1,
    subtitle: "Service",
    title: "Interior & Exterior Painting",
    text: "We provide high-quality painting services for both residential and commercial properties, using premium materials for a flawless finish.",
    lists: [
      "Residential & Commercial Painting",
      "Hand Brushed Weatherboards",
      "Staining & Varnishing",
      "Spray Painting",
    ],
  },
  {
    id: 2,
    img: ser_img_2,
    subtitle: "Service",
    title: "Decorating Services",
    text: "Elevate your interiors with expert decorating services, including custom finishes, hand-painted furniture, and detailed wall designs.",
    lists: [
      "Decorative Wall Painting",
      "Hand-Painted Furniture",
      "Stripping & Preparation",
      "Acrylic & Oil-Based Finishes",
    ],
  },
  {
    id: 3,
    img: ser_img_3,
    subtitle: "Service",
    title: "Home & Commercial Renovation",
    text: "Transform your space with high-quality renovation solutions, from wall refinishing to full interior makeovers.",
    lists: [
      "Surface Preparation & Restoration",
      "Heritage Painting & Refinishing",
      "Fence & Decking Painting",
      "Shopfront & Business Upgrades",
    ],
  },
  {
    id: 4,
    img: ser_img_4,
    subtitle: "Service",
    title: "Wallpaper Installation",
    text: "Enhance your walls with premium wallpaper solutions, from modern patterns to classic textures.",
    lists: [
      "Professional Wallpaper Hanging",
      "Stripping & Removal",
      "Custom Design & Accent Walls",
      "Durable & Stylish Finishes",
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
