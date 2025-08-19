import React from 'react';
import Image from 'next/image';
import logo from '@/assets/img/logo/logo-white.png';
import { RightArrow, SvgBgSm } from '@/components/svg';
import Link from 'next/link';

export default function FooterFour() {
  return (
    <footer>
      <div className="tp-footer-3-area dark-bg pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-1">
                <div className="tp-footer-3-widget mb-40">
                  <h4 className="tp-footer-3-title">Website map</h4>
                  <div className="tp-footer-3-menu">
                    <ul>
                      <li><Link href="/">Home</Link></li>
                      <li><Link href="/about">About</Link></li>
                      <li><Link href="/portfolio">Portfolio</Link></li>
                      <li><Link href="/blog">Blog</Link></li>
                      <li><Link href="/contact">Contact</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget text-md-center footer-col-3-2">
                <div className="tp-footer-3-logo-box">
                  <div className="tp-copyright-logo p-relative">
                    <Link href="/">
                      <Image src={logo} alt="logo" />
                    </Link>
                  </div>
                  <p className="mb-50 font-normal text-16">
                    Providing top-quality painting, decorating, and renovation services with a commitment to excellence and customer satisfaction.
                  </p>
                  <p className="tp-footer-3-copyright text-12">
                    {new Date().getFullYear()} CPD © All rights reserved
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-3">
                <div className="tp-footer-3-widget mb-30">
                  <h4 className="tp-footer-3-title">Contact</h4>
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
                    <span>P:<a href="tel:+61469799302">+61 469 799 302</a></span>
                    <span>E:<a href="mailto:info@classicpaintingdecorating.com.au">
                    info@classicpaintingdecorating.com.au</a></span>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  {/* <h4 className="tp-footer-3-title">Follow</h4> */}
                  <div className="tp-footer-3-social">
                    <a
                      href="https://www.facebook.com/people/Classic-Painting-And-Decorating-services/100082995053600/?mibextid=wwXIfrhttps%3A%2F%2Fwww.instagram.com%2Fclassic_painting_services%3Figsh%3Dc2I4cjB6NWQ2cG90&rdid=7WfyYxBIb7M64HLl&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ZXCjhTQDW%2F%3Fmibextid%3DwwXIfrhttps%253A%252F%252Fwww.instagram.com%252Fclassic_painting_services%253Figsh%253Dc2I4cjB6NWQ2cG90%26utm_source%3Dqr" 
                      target="_blank"
                    ><i className="fa-brands fa-facebook-f"></i></a>
                    <a
                      href="https://www.instagram.com/classic_painting_services/"
                      target="_blank"
                    ><i className="fa-brands fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
