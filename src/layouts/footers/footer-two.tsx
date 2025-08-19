import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/img/logo/logo-white.png";
import logo_2 from "@/assets/img/logo/logo.png";
import { RightArrow } from "@/components/svg";

// prop type
type IProps = {
  whiteFooter?: boolean;
  topCls?: string;
};

export default function FooterTwo({ whiteFooter = false, topCls = 'footer-top' }: IProps) {
  return (
    <footer className={`${topCls}`}>
      <div
        className={`tp-footer-2-area pt-100 pb-20 ${whiteFooter ? "tp-footer-white" : "black-bg"
          }`}
      >
        <div className="container container-1480">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-1">
                {!whiteFooter && (
                  <div className="tp-footer-2-widget-logo">
                    <Link href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                )}
                {whiteFooter && (
                  <div className="tp-footer-2-widget-logo tp-footer-dark">
                    <Link className="logo-1" href="/">
                      <Image src={logo_2} alt="logo" />
                    </Link>
                    <Link className="logo-2" href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                )}
               <div className="tp-footer-2-widget-text">
  <p>
    Delivering high-quality painting, decorating, and renovation services with a strong focus on excellence and customer satisfaction.
  </p>
</div>

              </div>
            </div>
            <div className="col-xl-4 col-lg-3 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-2">
                <div className="tp-footer-2-widget-menu">
                  <h4 className="tp-footer-2-widget-title">Sitemap</h4>
                  <div className="tp-footer-3-menu">
                      <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/portfolio-wrapper">Portfolio</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-3">
                <h4 className="tp-footer-2-widget-title">Office</h4>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <a
                          href="https://www.google.com/maps/place/Classic+Painting+%26+Decorating+Services/@-37.5893334,144.8191974,29222m/data=!3m1!1e3!4m10!1m2!2m1!1sClassic+Painting+%26+Decorating+Services,+6+Aston+St,+Craigieburn+VIC+3064,+Australia!3m6!1s0x6ad651eb54a2041b:0x84723bab314bb0ea!8m2!3d-37.5894193!4d144.9015985!15sClNDbGFzc2ljIFBhaW50aW5nICYgRGVjb3JhdGluZyBTZXJ2aWNlcywgNiBBc3RvbiBTdCwgQ3JhaWdpZWJ1cm4gVklDIDMwNjQsIEF1c3RyYWxpYVpSIlBjbGFzc2ljIHBhaW50aW5nICYgZGVjb3JhdGluZyBzZXJ2aWNlcyA2IGFzdG9uIHN0IGNyYWlnaWVidXJuIHZpYyAzMDY0IGF1c3RyYWxpYZIBB3BhaW50ZXKqAagBCg0vZy8xMXlqNG53OXMzCgkvbS8wMnduM2QKCS9tLzBjaGdoeQoJL20vMGNoZ3IyEAEyHhABIhoHpFT6a-Ods-SugMktnN7RObFwfxsw_sQ6SDJUEAIiUGNsYXNzaWMgcGFpbnRpbmcgJiBkZWNvcmF0aW5nIHNlcnZpY2VzIDYgYXN0b24gc3QgY3JhaWdpZWJ1cm4gdmljIDMwNjQgYXVzdHJhbGlh4AEA!16s%2Fg%2F11yj4nw9s3?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
                          target="_blank"
                    >
                      Melbourne, VIC, Australia, Victoria
                    </a>
                  </span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <a href="tel:+61469799302">+61 469 799 302</a>
                  </span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span>
                    <a href="mailto:info@classicpaintingdecorating.com.au">
                      info@classicpaintingdecorating.com.au</a>
                  </span>
                </div>
              </div>
            </div>
            {/* <div className="col-xl-4 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-4">
                <div className="tp-footer-2-widget-newslatter">
                  <h4 className="tp-footer-2-widget-title">
                    Subscribe to our newsletter
                  </h4>
                  <form action="#">
                    <div className="tp-footer-2-input p-relative">
                      <input type="text" placeholder="Enter your email..." />
                      <button>
                        <RightArrow clr={whiteFooter ? "currentcolor" : '#F3F3F4'} />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div
        className={`tp-copyright-2-area tp-copyright-2-bdr-top ${whiteFooter ? "tp-copyright-white" : "black-bg"
          }`}
      >
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="tp-copyright-2-left text-center text-lg-start">
                <p>
                  All rights reserved — {new Date().getFullYear()} © Classic Painting Decorating
                </p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="tp-copyright-2-social text-center text-lg-end">
                <a className="mb-10" href="https://www.facebook.com/people/Classic-Painting-And-Decorating-services/100082995053600/?mibextid=wwXIfrhttps%3A%2F%2Fwww.instagram.com%2Fclassic_painting_services%3Figsh%3Dc2I4cjB6NWQ2cG90&rdid=7WfyYxBIb7M64HLl&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ZXCjhTQDW%2F%3Fmibextid%3DwwXIfrhttps%253A%252F%252Fwww.instagram.com%252Fclassic_painting_services%253Figsh%253Dc2I4cjB6NWQ2cG90%26utm_source%3Dqr" target="_blank">Facebook</a>
                <a className="mb-10" href="https://www.instagram.com/classic_painting_services/" target="_blank">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer area end --> */}
    </footer>
  );
}
