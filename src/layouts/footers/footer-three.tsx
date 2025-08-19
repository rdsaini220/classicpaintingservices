
import React from 'react';
import Image from 'next/image';
import LineTextThree from '@/components/line-text/line-text-3';
import logo from '@/assets/img/logo/logo-white.png';
import { RightArrow } from '@/components/svg';
import Link from 'next/link';

export default function FooterThree() {
  return (
    <footer>

      <div className="tp-footer-4-area black-bg pt-70 pb-120" style={{ backgroundImage: "url(/assets/img/home-04/hero/overly.png)" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <LineTextThree />
            </div>
          </div>
        </div>
        <div className="container container-1480">
          <div className="tp-footer-4-top">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="tp-footer-4-top-left">
                  <p>Have a project in mind? <br /> Let’s work together!</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="tp-footer-4-top-right text-start text-md-end">
                  <Link className="tp-btn-white-lg" href="/contact">{"Let's"} Talk!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-footer-2-area black-bg pb-20" style={{ backgroundImage: "url(/assets/img/home-04/hero/overly.png)" }}>
        <div className="container container-1480">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-1">
                <div className="tp-footer-2-widget-logo">
                  <Link href="/">
                    <Image src={logo} alt="" />
                  </Link>
                </div>
                <div className="tp-footer-2-widget-text">
                  <p>Drop us a line sed id semper <br /> risus in hend rerit.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-2">
                <div className="tp-footer-2-widget-menu">
                  <h4 className="tp-footer-2-widget-title">Sitemap</h4>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Landing</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-3">
                <h4 className="tp-footer-2-widget-title">Office</h4>
                <div className="tp-footer-2-contact-item">
                  <span><a                    
                       href="https://www.google.com/maps/place/Classic+Painting+%26+Decorating+Services/@-37.5893334,144.8191974,29222m/data=!3m1!1e3!4m10!1m2!2m1!1sClassic+Painting+%26+Decorating+Services,+6+Aston+St,+Craigieburn+VIC+3064,+Australia!3m6!1s0x6ad651eb54a2041b:0x84723bab314bb0ea!8m2!3d-37.5894193!4d144.9015985!15sClNDbGFzc2ljIFBhaW50aW5nICYgRGVjb3JhdGluZyBTZXJ2aWNlcywgNiBBc3RvbiBTdCwgQ3JhaWdpZWJ1cm4gVklDIDMwNjQsIEF1c3RyYWxpYVpSIlBjbGFzc2ljIHBhaW50aW5nICYgZGVjb3JhdGluZyBzZXJ2aWNlcyA2IGFzdG9uIHN0IGNyYWlnaWVidXJuIHZpYyAzMDY0IGF1c3RyYWxpYZIBB3BhaW50ZXKqAagBCg0vZy8xMXlqNG53OXMzCgkvbS8wMnduM2QKCS9tLzBjaGdoeQoJL20vMGNoZ3IyEAEyHhABIhoHpFT6a-Ods-SugMktnN7RObFwfxsw_sQ6SDJUEAIiUGNsYXNzaWMgcGFpbnRpbmcgJiBkZWNvcmF0aW5nIHNlcnZpY2VzIDYgYXN0b24gc3QgY3JhaWdpZWJ1cm4gdmljIDMwNjQgYXVzdHJhbGlh4AEA!16s%2Fg%2F11yj4nw9s3?entry=ttu&g_ep=EgoyMDI1MDgxMy4wIKXMDSoASAFQAw%3D%3D"
 target="_blank">740 NEW SOUTH HEAD RD, TRIPLE BAY SWFW 3108, NEW YORK</a></span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span><a href="tel:+725214456">P: + 725 214 456</a></span>
                </div>
                <div className="tp-footer-2-contact-item">
                  <span><a href="mailto:contact@liko.com">E: contact@liko.com</a></span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-6 mb-50">
              <div className="tp-footer-2-widget footer-col-2-4">
                <div className="tp-footer-2-widget-newslatter">
                  <h4 className="tp-footer-2-widget-title">Subscribe to our newsletter</h4>
                  <form action="#">
                    <div className="tp-footer-2-input p-relative">
                      <input type="text" placeholder="Enter your email..." />
                      <button>
                        <RightArrow />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-copyright-2-area tp-copyright-2-bdr-top black-bg" style={{ backgroundImage: "url(/assets/img/home-04/hero/overly.png)" }}>
        <div className="container container-1480">
          <div className="row align-items-center">
            <div className="col-xl-4 col-lg-5">
              <div className="tp-copyright-2-left text-center text-lg-start">
                <p>All rights reserved — {new Date().getFullYear()} © Themepure</p>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7">
              <div className="tp-copyright-2-social text-center text-lg-end">
                <a className="mb-10" href="#">Linkedin</a>
                <a className="mb-10" href="#">Twitter</a>
                <a className="mb-10" href="#">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
