import React from "react";
import { Facebook, Instagram, Linkdin, Twitter } from "../svg";

const social_data = [
  // {
  //   id: 1,
  //   icon: <Linkdin />,
  //   link: "https://www.facebook.com/",
  // },
  // {
  //   id: 2,
  //   icon: <Twitter />,
  //   link: "https://twitter.com/",
  // },
  {
    id: 3,
    icon: <Instagram />,
    link: "https://www.instagram.com/classic_painting_services/?igsh=c2I4cjB6NWQ2cG90",
  },
  {
    id: 4,
    icon: <Facebook />,
    link: "https://www.facebook.com/people/Classic-Painting-And-Decorating-services/100082995053600/?mibextid=wwXIfrhttps%3A%2F%2Fwww.instagram.com%2Fclassic_painting_services%3Figsh%3Dc2I4cjB6NWQ2cG90&rdid=7WfyYxBIb7M64HLl&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ZXCjhTQDW%2F%3Fmibextid%3DwwXIfrhttps%253A%252F%252Fwww.instagram.com%252Fclassic_painting_services%253Figsh%253Dc2I4cjB6NWQ2cG90%26utm_source%3Dqr",
  },
];

export default function Social() {
  return (
    <>
      {social_data.map((item) => (
        <a href={item.link} key={item.id} target="_blank">
          <span>{item.icon}</span>
        </a>
      ))}
    </>
  );
}
