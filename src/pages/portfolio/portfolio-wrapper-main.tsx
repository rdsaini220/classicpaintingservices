"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import ProjectFour from "@/components/project/project-four";
import BigText from "@/components/big-text";
import FooterTwo from "@/layouts/footers/footer-two";
// animation
import { charAnimation, titleAnimation } from "@/utils/title-animation";
import { projectThreeAnimation } from "@/utils/project-anim";

const PortfolioWrapperMain = () => {
  useScrollSmooth();

  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      titleAnimation();
      projectThreeAnimation();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      {/* header area start */}
      <HeaderEleven />
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* portfolio hero */}
            <div className="tm-hero-area tm-hero-ptb">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tm-hero-content text-center">
                      <span className="tm-hero-subtitle">Our Portfolio</span>
                      <h4 className="tm-hero-title tp-char-animation">
                        Showcasing Our Latest Projects
                      </h4>
                    </div>
                    <div className="tm-hero-text text-center">
                      <p className="tp_title_anim">
                        At Classic Painting & Decorating Services, we take pride
                        in every project we deliver. From residential homes to
                        commercial properties, our work reflects expert
                        craftsmanship, attention to detail, and a commitment to
                        excellence. Explore some of our recent projects below
                        and see how we transform spaces into fresh, elegant, and
                        long-lasting finishes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* portfolio hero */}

            {/* portfolio area */}
            <ProjectFour style_2={true} />
            {/* portfolio area */}

            {/* big text */}
            <BigText />
            {/* big text */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default PortfolioWrapperMain;
