import Link from "next/link";
import React from "react";
import ThumbFooter from "../../../public/assets/imgs/thumb/footer.jpg";
import FooterLogoWhite from "../../../public/assets/imgs/logo/footer-logo-white.png";
import Image from "next/image";

const DigitalAgencyFooter = () => {
  return (
    <>
      <footer className="footer__area">
        <div className="footer__top">
          <div className="container footer-line"></div>
          <Image
            priority
            width={1160}
            style={{ height: "auto" }}
            src={ThumbFooter}
            alt="Footer Image"
            data-speed="0.75"
          />
        </div>

        <div className="footer__btm">
          <div className="container">
            <div className="row footer__row">
              <div className="col-xxl-12">
                <div className="footer__inner">
                  <div className="footer__widget">
                    <Image
                      priority
                      style={{ width: "80px", height: "35px" }}
                      className="footer__logo"
                      src={FooterLogoWhite}
                      alt="Footer Logo"
                    />
                    <p>
                      When do they work well, and when do they on us and
                      finally, when do we actually need how can we avoid them.
                    </p>
                    <ul className="footer__social">
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-brands fa-facebook-f"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i class="fa-brands fa-x-twitter"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-brands fa-instagram"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-brands fa-linkedin"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-2">
                    <h2 className="footer__widget-title">Information</h2>
                    <ul className="footer__link">
                      <li>
                        <Link href="/about">About Company</Link>
                      </li>
                      <li>
                        <Link href="/portfolio">Case Study</Link>
                      </li>
                      <li>
                        <Link href="/career">Career</Link>
                      </li>
                      <li>
                        <Link href="/blog">blog</Link>
                      </li>
                      <li>
                        <Link href="/contact">contact</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="footer__widget-3">
                    <h2 className="footer__widget-title">Contact Us</h2>
                    <ul className="footer__contact">
                      <li>126 Royal College St,
                      <br></br>London NW1 0TA
                      </li>
                      <li>
                        <a href="tel:02045169416" className="phone">
                          (+44) 020 4516 9416{" "}
                        </a>
                      </li>
                      <li>
                        <a href="mailto:connect@karadinfotech.co.uk">
                          connect@karadinfotech.co.uk
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-4">
                    <h2 className="project-title">
                      Have a project in your mind?
                    </h2>
                    <div className="btn_wrapper">
                      <Link
                        href="/contact"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> contact us{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <h3 className="contact-time">09 : 00 AM - 05 : 00 PM</h3>
                    <h4 className="contact-day">Monday - Friday</h4>
                  </div>

                  <div className="footer__copyright">
                    <p>
                      © 2022 - 2025 | Alrights reserved by{" "}
                      <a href="https://karadinfotech.com/" target="_blank">
                        Karad Infotech
                      </a>
                    </p>
                  </div>

                  <div className="footer__subscribe">
                    <form action="#">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                      <button type="submit" className="subs-btn">
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default DigitalAgencyFooter;
