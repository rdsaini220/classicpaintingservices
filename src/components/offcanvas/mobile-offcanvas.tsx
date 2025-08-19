'use client';
import React from "react";
import Image from "next/image";
import { Behance, CloseTwo, Dribble, Facebook, InstagramTwo, Youtube } from "../svg";

// images
import logo from "@/assets/img/logo/logo.png";
import gallery_1 from "@/assets/img/menu/offcanvas/offcanvas-1.jpg";
import gallery_2 from "@/assets/img/menu/offcanvas/offcanvas-2.jpg";
import gallery_3 from "@/assets/img/menu/offcanvas/offcanvas-3.jpg";
import gallery_4 from "@/assets/img/menu/offcanvas/offcanvas-4.jpg";
import MobileMenus from "./mobile-menus";
import { useTheme } from "next-themes";

const gallery_images = [gallery_1, gallery_2, gallery_3, gallery_4];

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvas({ openOffcanvas, setOpenOffcanvas }: IProps) {
  const { setTheme, theme } = useTheme();
  const [settingOpen, setSettingOpen] = React.useState(false);

  console.log('theme', theme);

  function handleOpenSetting() {
    setSettingOpen(!settingOpen);
  };
  return (
    <>
      <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <a href="#">
                <Image src={logo} alt="logo" />
              </a>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
              >
                <CloseTwo />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            <div className="tp-offcanvas-content">
              <h3 className="tp-offcanvas-title">Hello There!</h3>
              <p>Transforming Homes & Businesses with Quality Painting</p>
            </div>
            <div className="tp-main-menu-mobile d-xl-none">
              <MobileMenus />
            </div>
            <div className="tp-offcanvas-gallery">
              <div className="row gx-2">
               
              </div>
            </div>
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Information</h3>

              <ul>
                <li>
                  <a href="tel:+61469799302">+61 469 799 302</a>
                </li>
                <li>
                  <a href="mailto:info@classicpaintingdecorating.com.au">
                  info@classicpaintingdecorating.com.au</a>
                </li>
                <li>
                  <a                           href="https://www.google.com/maps/place/Classic+Painting+%26+Decorating+Services/@-37.5893334,144.8191974,29222m/data=!3m1!1e3!4m10!1m2!2m1!1sClassic+Painting+%26+Decorating+Services,+6+Aston+St,+Craigieburn+VIC+3064,+Australia!3m6!1s0x6ad651eb54a2041b:0x84723bab314bb0ea!8m2!3d-37.5894193!4d144.9015985!15sClNDbGFzc2ljIFBhaW50aW5nICYgRGVjb3JhdGluZyBTZXJ2aWNlcywgNiBBc3RvbiBTdCwgQ3JhaWdpZWJ1cm4gVklDIDMwNjQsIEF1c3RyYWxpYVpSIlBjbGFzc2ljIHBhaW50aW5nICYgZGVjb3JhdGluZyBzZXJ2aWNlcyA2IGFzdG9uIHN0IGNyYWlnaWVidXJuIHZpYyAzMDY0IGF1c3RyYWxpYZIBB3BhaW50ZXKqAagBCg0vZy8xMXlqNG53OXMzCgkvbS8wMnduM2QKCS9tLzBjaGdoeQoJL20vMGNoZ3IyEAEyHhABIhoHpFT6a-Ods-SugMktnN7RObFwfxsw_sQ6SDJUEAIiUGNsYXNzaWMgcGFpbnRpbmcgJiBkZWNvcmF0aW5nIHNlcnZpY2VzIDYgYXN0b24gc3QgY3JhaWdpZWJ1cm4gdmljIDMwNjQgYXVzdHJhbGlh4AEA!16s%2Fg%2F11yj4nw9s3?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"

                      target="_blank"
                    >
                      Melbourne, VIC, Australia, Victoria</a>
                </li>
              </ul>
            </div>
            <div className="tp-offcanvas-social tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Follow Us</h3>
              <ul>
                <li>
                  <a target="_blank" href="https://www.facebook.com/people/Classic-Painting-And-Decorating-services/100082995053600/?mibextid=wwXIfrhttps%3A%2F%2Fwww.instagram.com%2Fclassic_painting_services%3Figsh%3Dc2I4cjB6NWQ2cG90&rdid=7WfyYxBIb7M64HLl&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ZXCjhTQDW%2F%3Fmibextid%3DwwXIfrhttps%253A%252F%252Fwww.instagram.com%252Fclassic_painting_services%253Figsh%253Dc2I4cjB6NWQ2cG90%26utm_source%3Dqr"><Facebook /></a>
                </li>
                <li>
                  <a target="_blank" href="https://www.instagram.com/classic_painting_services/?igsh=c2I4cjB6NWQ2cG90"><InstagramTwo /></a>
                </li>
                {/* <li>
                    <a href="#"> <Behance /></a>
                  </li>
                  <li>
                    <a href="#"><Youtube /></a>
                  </li> */}
              </ul>
            </div>
            <div className="tp-offcanvas-contact tp-offcanvas-mode">
              <h3 className="tp-offcanvas-title sm">Mode</h3>
              <ul>
                <li>
                  <div className="tp-mode tp-theme-dir mb-20">
                    <label className="tp-mode-inner tp-theme-dir-main" htmlFor="tp-dir-toggler">
                      <span
                        onClick={() => setTheme("dark")}
                        className={`tp-theme-dir-rtl ${theme === "dark" ? "active" : ""}`}
                      >
                        Dark
                      </span>
                      <input type="checkbox" id="tp-dir-toggler" checked={theme === "dark"} readOnly />
                      <i className="tp-theme-dir-slide"></i>
                      <span
                        onClick={() => setTheme("light")}
                        className={`tp-theme-dir-ltr ${theme === "light" ? "active" : ""
                          }`}
                      >
                        Light
                      </span>
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
      ></div>
    </>
  );
}
