import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const Services = () => {
  return (
    <div className={`${styles.servicemain} pt-4 pb-5`}>
      <Container className={`mx-auto ${styles.tabmargin}`}>
        <Row className={`mx-auto ${styles.tabwidth}`}>
          <Col md={12}>
            <p className="short_heading fw-bold fs-5">SERVICES</p>
            <hr></hr>
            <h2 className={`${styles.services} mb-3  mt-3`}>
              Explore Our <span> Range of Services</span>
            </h2>
            <p>
              Explore a world of meticulously crafted, game-changing solutions
              in web, mobile, and digital marketing that drive remarkable gains
              for your business.
            </p>
          </Col>

          <Col md={6} lg={6} xl={4}>
            <div className={` ${styles.servicesgrid1} ${styles.servicesgrid}`}>
              <div>
                <Image
                  src={
                    "https://vcana-website-assets.s3.amazonaws.com/images/home/development.png"
                  }
                  width={140}
                  height={140}
                  alt="nb"
                  //loader={Loader}
                  className={styles.hoverimg}
                />
                <h3>Web Design & Development</h3>

                <ul className={styles?.service_li1}>
                  <li> WordPress </li>

                  <li> | Webflow</li>
                  <li> | Wix</li>
                </ul>
                <ul className={styles?.service_li1}>
                  <li> Squarespace</li>
                </ul>
              </div>
              <Image
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/home/development1.png"
                }
                width={140}
                height={140}
                alt="nb"
                //loader={Loader}
                className={styles.hoverimg1}
              />

              <h5>Web Design & Development</h5>
              <ul className={styles?.service_li2}>
                <li> WordPress </li>

                <li> | Webflow</li>
                <li> | Wix</li>
              </ul>
              <ul className={styles?.service_li2}>
                <li> Squarespace</li>
              </ul>
              <p className="mt-2">
                Not everything revolves around mobile phone. People still use
                computers don’t they. That’s why we love having the opportunity
                to contribute to that as web development experts.
              </p>
              {/* <li>→ React.js, Angular.js & Vue.js</li>
                  <li>→ Node.js, Python & Ruby on Rails</li> */}

              <Link href="/services/website-design-development">
                <div className={styles.btnlink}>
                  <button>Read More</button>
                </div>
              </Link>
            </div>
          </Col>

          <Col md={6} lg={6} xl={4}>
            <div
              className={` ${styles.servicesgrid1} ${styles.servicesgrid} ${styles.coler2}`}
            >
              {" "}
              <div>
                <Image
                  src={
                    "https://vcana-website-assets.s3.amazonaws.com/images/home/ecommerce30.png"
                  }
                  width={100}
                  height={100}
                  alt="nb"
                  //loader={Loader}
                  className={styles.hoverimg}
                />
                <h3>E-Commerce Development</h3>
                <ul className={styles.service_li1}>
                  {" "}
                  <li>Magento</li>
                  <li>| Shopify</li>
                  <li>| Woocommerce</li>
                </ul>
              </div>
              <Image
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/home/ecommerce.png"
                }
                width={140}
                height={140}
                alt="nb"
                //loader={Loader}
                className={styles.hoverimg1}
              />
              <h5>E-Commerce Development</h5>
              <ul className={styles.service_li2}>
                {" "}
                <li>Magento</li>
                <li>| Shopify</li>
                <li>| Woocommerce</li>
              </ul>
              <p>
                If you are looking to thrive in the digital age, then a properly
                developed e-commerce website is a vital asset for any company.
                Our highly qualified team determines e-commerce website
                development with exclusive, rich, and reliable technologies.
              </p>
              <Link href="/services/ecommerce-website-development">
                <div className={styles.btnlink}>
                  <button>Read More</button>
                </div>
              </Link>
            </div>
          </Col>

          <Col md={6} lg={6} xl={4}>
            <div
              className={` ${styles.servicesgrid1} ${styles.servicesgrid} ${styles.coler6} ${styles.coler21}`}
            >
              <div>
                <Image
                  src={
                    "https://vcana-website-assets.s3.amazonaws.com/images/home/mobile .png"
                  }
                  width={140}
                  height={140}
                  alt="nb"
                  //loader={Loader}
                  className={styles.hoverimg}
                />

                <h3>Mobile App Development</h3>
                <ul className={styles.service_li1}>
                  <li> iOS </li>
                  <li> | Android </li>
                  <li>| Cross-platform </li>
                </ul>
              </div>
              <Image
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/home/mobile1.png"
                }
                width={140}
                height={140}
                alt="nb"
                //loader={Loader}
                className={styles.hoverimg1}
              />
              <h5>Mobile App Development</h5>
              <ul className={styles.service_li2}>
                <li> iOS </li>
                <li> | Android </li>
                <li> | Cross-platform </li>
              </ul>
              <p>
                If you can think it, we can build it. Just think of an
                outstanding idea and we will do the rest.
              </p>
              <Link href="/services/mobile-application-development">
                <div className={styles.btnlink}>
                  <button>Read More</button>
                </div>
              </Link>
            </div>
          </Col>

          <Col md={6} lg={6} xl={4}>
            <div
              className={` ${styles.servicesgrid1} ${styles.servicesgrid} ${styles.coler2}`}
            >
              {" "}
              <div>
                <Image
                  src={
                    "https://vcana-website-assets.s3.amazonaws.com/images/home/digital.png"
                  }
                  width={140}
                  height={140}
                  alt="nb"
                  //loader={Loader}
                  className={styles.hoverimg}
                />
                <h3>Digital Marketing</h3>
                <ul className={styles.service_li1}>
                  {" "}
                  <li>SEO & SMM</li>
                  <li>| PPC</li>
                  <li>| Email Marketing</li>
                </ul>
              </div>
              <Image
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/home/digital1.png"
                }
                width={140}
                height={140}
                alt="nb"
                //loader={Loader}
                className={styles.hoverimg1}
              />
              <h5>Digital Marketing</h5>
              <ul className={styles.service_li2}>
                {" "}
                <li>SEO & SMM</li>
                <li>| PPC</li>
                <li>| Email Marketing</li>
              </ul>
              <p>
                Digital Channels are the straight route to your customers.
                That’s why Digital Marketing is a necessity to achieve your
                company’s success.
              </p>
              <Link href="/services/digital-marketing">
                <div className={styles.btnlink}>
                  <button>Read More</button>
                </div>
              </Link>
            </div>
          </Col>
          <Col md={6} lg={6} xl={4}>
            <div
              className={` ${styles.servicesgrid1} ${styles.servicesgrid}  ${styles.coler21}`}
            >
              {" "}
              <div>
                <Image
                  src={
                    "https://vcana-website-assets.s3.amazonaws.com/images/home/outsourcing.png"
                  }
                  width={140}
                  height={140}
                  alt="nb"
                  //loader={Loader}
                  className={styles.hoverimg}
                />
                <h3> Application Development</h3>
                <ul className={styles.service_li1}>
                  <li> React.js </li>
                  <li> | Angular.js</li>
                  <li> | Vue.js</li>
                </ul>
                <ul className={styles.service_li1}>
                  <li> Node.js </li>
                  <li> | Python</li>
                  <li> | Ruby on Rails</li>
                </ul>
              </div>
              <Image
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/home/outsourcing1.png"
                }
                width={140}
                height={140}
                alt="nb"
                //loader={Loader}
                className={styles.hoverimg1}
              />
              <h5> Application Development</h5>
              <ul className={styles.service_li2}>
                <li> React.js </li>

                <li> | Angular.js</li>
                <li> | Vue.js</li>
              </ul>
              <ul className={styles.service_li2}>
                <li> Node.js </li>
                <li> | Python</li>
                <li> | Ruby on Rails</li>
              </ul>
              <p>
                We custom-build the system of your dreams. The system that
                solves all your company’s specific problems and satisfies all
                your business needs.
              </p>
              <Link href="/services/application-development">
                <div className={styles.btnlink}>
                  <button>Read More</button>
                </div>
              </Link>
            </div>
          </Col>
          <Col md={6} lg={6} xl={4}>
            <div className={` ${styles.servicesgrid1} ${styles.servicesgrid}`}>
              {" "}
              <div>
                <Image
                  src={
                    "https://vcana-website-assets.s3.amazonaws.com/images/home/blockchain.png"
                  }
                  width={140}
                  height={140}
                  alt="nb"
                  //loader={Loader}
                  className={styles.hoverimg}
                />
                <h3>Blockchain Development</h3>
                <ul className={styles.service_li1}>
                  {" "}
                  <li>NFT Marketplace</li>
                  <li>| Private Blockchain</li>
                  <li> Smart Contracts</li>
                </ul>
              </div>
              <Image
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/home/blockchain1.png"
                }
                width={140}
                height={140}
                alt="nb"
                //loader={Loader}
                className={styles.hoverimg1}
              />
              <h5>Blockchain Development</h5>
              <ul className={styles.service_li2}>
                {" "}
                <li>NFT Marketplace</li>
                <li>| Private Blockchain</li>
                <li> Smart Contracts</li>{" "}
              </ul>
              <p>
                Did you embrace the digital superhero aka Blockchain to
                safeguard your online world? If not, then let do it with Vcana
                Global experts. Our blockchain development process ensures
                trust, cuts fraud, and streamlines processes across industries.
                Embrace it for a safer, smarter future!
              </p>
              <Link href={"/services/blockchain-development"}>
                <div className={styles.btnlink}>
                  <button>Read More</button>
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
