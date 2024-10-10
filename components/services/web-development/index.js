import React from "react";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./index.module.css";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import GetInTouch from "@/components/shared/getInTouch";
import ServiceCard from "@/components/shared/serviceCard";
import FAQ from "@/components/shared/faq";
import Testimonial from "@/components/shared/testimonial";
import { WebdevelopFAQ } from "@/data/faq/FAQ";
import ServiceLayout from "../service-layout/ServiceLayout";
// import Process from "@/components/shared/process-slider";
// // import Loader from "@/helpers/Loader";
import { NextSeo } from "next-seo";

const WebDevelopment = () => {
  return (
    <>
      <NextSeo
        title="Best Web Design & Development Services | Vcana Global"
        description="Boost your online presence with Vcana Global's premier web design & development
services. From concept to reality, we craft your vision with creativity & precision."
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "responsive web design services, hire a web design agency, custom web development services, professional web development",
          },
        ]}
        canonical="https://www.vcanaglobal.com/services/website-design-development"
      />
      <ServiceLayout bannerData={bannerData}>
        <h1 className="d-none">Web Design & Development Services</h1>
        <div className={Styles.main_services}>
          {/* hero is the services section start */}
          <Container>
            <Row className={`py-4 py-xl-0 cmx ${Styles.main_padding}`}>
              <Col
                md={12}
                sm={12}
                lg={12}
                xl={5}
                className={` ${Styles.imgBox}`}
              >
                <Image
                  className={Styles.de}
                  src={
                    "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/istimg.webp"
                  }
                  width={400}
                  height={387}
                  alt="nb"
                />
              </Col>
              <Col md={12} sm={12} lg={12} xl={7} className={Styles.herotext}>
                <h2
                  className={`${Styles.mainHedding1}  text-lg-start text-sm-center px-md-4 px-sm-4 px-lg-0`}
                >
                  We Develop Designs
                  <span> that Speak Volume </span>
                </h2>
                <p className={`sm:text-center text-md-start `}>
                  Welcome to the realm of Vcana Global, where pixels dance, code
                  springs to life, and websites become your ultimate online
                  spells.
                </p>
                <p className={`sm:text-center text-md-start `}>
                  At Vcana Global, we craft digital experiences that resonate
                  with your vision. Our team of skilled artisans combines
                  artistry and technical prowess to create websites and
                  applications that are both visually stunning and functionally
                  impeccable.
                </p>
                <p className={`sm:text-center text-md-start `}>
                  Our web design and development services are more than just a
                  transaction; they are an exploration of your brand's identity,
                  a journey into the heart of your audience's desires. From
                  mesmerizing graphics that speak volumes to seamless user
                  experiences that leave lasting impressions, we are your
                  creative partner on this thrilling adventure.
                </p>
                <p className={`sm:text-center text-md-start `}>
                  Buckle up for a wild ride through the whimsical wonders of our
                  design and development services!
                </p>
              </Col>
            </Row>
          </Container>

          {/* hero is the services section end */}

          {/* here is the CHOOSE US  section start  */}
          <div className={Styles.whychoseusbg}>
            <Container>
              <div className={Styles.whychoseus}>
                <Row className={` mb-1 cmx ${Styles.main_padding}`}>
                  <Col md={12} className={Styles.benefits}>
                    <div className="short_heading">Approach and Method</div>
                    <hr />
                    <h2 className={`mt-3  mb-3`}>
                      Where Creativity
                      <span> Meets Functionality</span>
                    </h2>
                  </Col>
                </Row>
                <Row className={` ${Styles.chosesec}  ${Styles.main_padding}`}>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/Choose.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="text-start"
                    />
                    <h3 className=" text-lg-start">Our Approach</h3>
                    <p className="text-lg-start ">
                      Every pixel matters, and that's why we meticulously design
                      each element to resonate with your brand identity. From
                      sleek and modern to elegant and classic, our designs are
                      tailored to your preferences. But it's not just about
                      aesthetics - our websites are built with a user-centric
                      approach, ensuring seamless navigation and engaging
                      interactions.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/Choose1.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                    />
                    <h3 className=" text-lg-start">Technological Brilliance</h3>
                    <p className="text-lg-start">
                      We pride ourselves on staying ahead of the curve. Our tech
                      stack includes HTML5, CSS3, JavaScript, and more, ensuring
                      your website is not only visually stunning but also robust
                      under the hood. Whether it's responsive design for
                      flawless mobile browsing or incorporating the latest in
                      web development trends, we're equipped to handle it all.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/Choose2.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className=" text-lg-start">Crafting Functionality</h3>
                    <p className="text-lg-start">
                      Functionality is at the core of every successful website.
                      Our team understands the importance of a user-friendly
                      experience. E-commerce integration, payment gateways,
                      interactive forms – we make sure your website isn't just a
                      virtual brochure but a powerful tool that drives results.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/Choose3.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className=" text-lg-start">
                      Collaboration at its Finest
                    </h3>
                    <p className="text-lg-start">
                      We believe in the power of collaboration. Your insights
                      and ideas, combined with our industry expertise, lead to
                      websites that stand out. Through transparent communication
                      and regular updates, we ensure you're involved in every
                      step of the journey.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/Choose4.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className=" text-lg-start">Beyond Launch</h3>
                    <p className="text-lg-start">
                      Launching your website is just the beginning. We offer
                      post-launch support to iron out any wrinkles and ensure
                      everything runs smoothly. Furthermore, we analyze user
                      behavior and performance data to make data-driven
                      optimizations, keeping your website at peak performance.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <div className={Styles.choosebg}>
                      <h4 className=" text-start text-white">
                        Ready to enhance your online presence?
                      </h4>
                      <p className="text-start">
                        Get started today by reaching out for a free
                        consultation.
                      </p>
                      <Link
                        href="https://calendly.com/anshul-10/discussion-website-designing-development?month=2023-08"
                        target="_blank"
                      >
                        <Button
                          className={`${Styles.btnhover} ${Styles.eAnimat}`}
                        >
                          Scheduled A Meeting
                        </Button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          {/* here is the CHOOSE US section end  */}

          {/* here is the services section start */}

          <div className={Styles.servicebg}>
            <Container>
              <div className={Styles.cddd}>
                <Row className={` ${Styles.mobileres} ${Styles.main_padding} `}>
                  <Col md={12} className={`${Styles.mainHeading}`}>
                    <div className="short_heading">Services</div>
                    <hr />
                    <h2 className={`my-3 mb-2`}>
                      What We <span> Offer </span>
                    </h2>
                    <p className={`mb-4 ${Styles.textsp} `}>
                      At Vcana Global, we specialize in creating unique and
                      captivating digital experiences that help your brand{" "}
                      <br />
                      stand out in the online world. Our comprehensive range of
                      services includes:
                    </p>
                  </Col>
                  <Row className={` ${Styles.servicebox}`}>
                    <ServiceCard data={ServiceData} classes={`webheight`} />
                  </Row>
                </Row>
              </div>
            </Container>
          </div>

          {/* here is the services section end */}
          {/*technology  section start */}
          <div className={`${Styles.technologybg} `}>
            <Container>
              <Row className={` ${Styles.headChoose}  ${Styles.main_padding}`}>
                <Col>
                  <div className="short_heading">Technologies</div>
                  <hr className={Styles.tech} />
                  <h2 className={` pt-3 px-md-4 px-sm-4 px-lg-0`}>
                    <span> Latest Technologies </span>for Website Design &
                    Development
                  </h2>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row
                className={`${Styles.rowChoose231} ${Styles.main_padding} cmx`}
              >
                {whyChooseData?.map((data) => {
                  return (
                    <Col
                      xs={6}
                      sm={6}
                      md={4}
                      lg={4}
                      xl={2}
                      key={data.name}
                      className={` ${Styles.tecnologyusesbox} mt-4`}
                    >
                      <div className={`${Styles.cardInner2} p-3  h-100`}>
                        <Image
                          src={data?.img}
                          // //loader={Loader}
                          alt="ImageTechlogo"
                          width={60}
                          height={60}
                          className={`${Styles.tools_img} me-0`}
                        />
                        <h3
                          className={`${Styles.headingCARD2} text-start pt-2 pb-0`}
                        >
                          {data?.name}
                        </h3>
                      </div>
                    </Col>
                  );
                })}
                <Col md={12}>
                  <div className="mt-5 short_heading">Hosting</div>
                  <hr className={Styles.tech} />
                </Col>
                ;
                {HostingData?.map((data) => {
                  return (
                    <Col
                      xs={6}
                      sm={6}
                      md={4}
                      lg={4}
                      xl={2}
                      key={data.name}
                      className={` ${Styles.tecnologyusesbox} mt-4`}
                    >
                      <div className={`${Styles.cardInner2} p-3  h-100`}>
                        <Image
                          src={data?.img}
                          // //loader={Loader}
                          alt="ImageTechlogo"
                          width={60}
                          height={60}
                          className={`${Styles.tools_img} me-0`}
                        />
                        <h3
                          className={`${Styles.headingCARD2} text-start pt-2 pb-0`}
                        >
                          {data?.name}
                        </h3>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </div>
          {/*technology  section end */}

          {/* here is the section start technology */}
          <div className={`${Styles.ratebox} pt-0 `}>
            <Container>
              <Row
                className={` ${Styles.pricecardrowbox} ${Styles.main_padding} `}
              >
                <Col
                  md={12}
                  className={`${Styles.mainHeading} ${Styles.spacekummainhading}`}
                >
                  <div className="short_heading">OUR PLANS</div>
                  <hr />
                  <h2 className={`my-3`}>
                    Choose the <span>Right Plan:</span>
                  </h2>
                </Col>
                <Col lg={6} xs={12} sm={12} xl={4}>
                  <div className={`${Styles.price} `}>
                    <h3>Starter Package</h3>
                    <p>
                      {" "}
                      Get a sleek and functional website to establish your
                      online presence. Starting at:
                    </p>
                    <h4 className="pt-4">$999</h4>
                  </div>
                </Col>
                <Col lg={6} xs={12} sm={12} xl={4}>
                  <div className={`${Styles.price} `}>
                    <h3>Business Pro</h3>
                    <p>
                      Perfect for growth-focused businesses. Custom features and
                      design to engage customers. Starting at:
                    </p>
                    <h4>$1999</h4>
                  </div>
                </Col>
                <Col lg={6} xs={12} sm={12} xl={4} className="mx-auto">
                  <div className={`${Styles.price} `}>
                    <h3>E-commerce Solution</h3>
                    <p>
                      Launch or expand your online store with our robust
                      e-commerce platform. Starting at:
                    </p>
                    <h4>$4499</h4>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          {/* here is the section start technology */}

          {/* here is the section start benfits */}

          {/* hosting plan  section */}

          <div className={Styles.hosting_plan}>
            <Container>
              <Row>
                <Col md={6}>
                  <div className={Styles.hostingservices}>
                    <h5>
                      Our hosting plan start from<span> $350 per year</span>{" "}
                      including SSL certificate
                    </h5>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>

          <div className={`${Styles.benefitbg} `}>
            <Container>
              <Row
                className={` ${Styles.pricecardrowbox} ${Styles.main_padding} `}
              >
                <Col md={12} className={`${Styles.mainHeading}`}>
                  <div className="short_heading">BENEFITS</div>
                  <hr />
                  <h2 className={`my-3 px-md-4 px-sm-4 px-lg-0`}>
                    Why We Are <span> Unique: Discover the Benefits</span>
                  </h2>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <h3>Holistic Creativity</h3>
                  <p>
                    We don't just design websites; we craft immersive digital
                    experiences that tell your brand's story.
                  </p>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <h3>Tech Innovation</h3>
                  <p>
                    Embracing cutting-edge technologies, we infuse innovation
                    into every aspect of our design and development process.
                  </p>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <h3>End-to-End Services</h3>

                  <p>
                    From conception to execution, we offer a complete spectrum
                    of services under one roof, ensuring a seamless journey.
                  </p>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <h3>Strategic Insights</h3>
                  <p>
                    We blend creativity with strategic thinking, ensuring that
                    every design element serves a purpose in achieving your
                    goals.
                  </p>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <h3>Global Perspective</h3>
                  <p>
                    Our diverse team brings a global perspective to our work,
                    resulting in designs that resonate with audiences worldwide.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          {/* here is the section start benefit */}

          {/*Testimonials  start */}
          <div className={`mt-4 ${Styles.main_padding}`}>
            <Testimonial slide={1} />
          </div>
          {/*Testimonials  end */}

          {/*let’s get in Touch   start */}
          <GetInTouch data={GetInTouchData} />
          {/*let’s get in Touch   end */}
          {/* <FAQ data={ServiceFaq}/> */}
          <div className={`${Styles.main_padding} `}>
            <FAQ
              page="Web Design and Development <span> FAQs</span>"
              data={WebdevelopFAQ}
            />
          </div>
          {/*Frequently Asked Questions  end*/}
        </div>
      </ServiceLayout>
    </>
  );
};

const bannerData = {
  heading: "Web Design and Development",
  img: "https://vcana-website-assets.s3.amazonaws.com/images/banners/webdevelopment.webp",
};

const GetInTouchData = {
  heading:
    "Ready to unlock your <span> brand's full potential and achieve </span>  digital success?",
  desc: " ",
  sub_headR: "Send Us A Message",
  sub_headL: "Speak to Us",
  sub_head1: "",
  sub_head2: "At Vcana Global, you are assured to get ",
  sub_desc:
    "Elevate your online presence with Vcana Global. Let's embark on a journey to create a website that not only meets your goals but exceeds them. Contact us today to get started on a digital experience like no other. Your vision, our expertise – together, we'll redefine the online world.",
  LI: [
    "Fulfillment of Promises",
    "Unmatched excellence and quality",
    "A dedicated team to support your business endeavors",
  ],
};

const ServiceData = [
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/GIFS_o/logo_creation.gif",
    heading: "Logo Creation",
    content:
      "We will create a distinct, impressive and memorable logo that well represents your business's values and vision.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/GIFS_o/landing_page.gif",
    heading: "UI/UX Design",
    content:
      "We believe in designing interfaces that resonate with your audience. Our UI/UX experts create intuitive, user-centric designs that enhance engagement and satisfaction. ",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/GIFS_o/scratch.gif",
    heading: "Website Revamp",
    content:
      "A Comprehensive Website Revamp for a Modern, Engaging, and Responsive User Experience.",
  },

  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/GIFS_o/mobile_first.gif",
    heading: "Responsive Web Design",
    content:
      "Blending aesthetics with functionality, we create responsive websites that adapt flawlessly to any device, ensuring an optimal user experience.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/GIFS_o/crm.gif",
    heading: "CMS Integration",
    content:
      "Manage your website effortlessly with our seamless content management system integrations. Update, modify, and expand your content with ease. ",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/GIFS_o/payment.gif",
    heading: "Payment Gateway Integration",
    content:
      "Seamless payment gateway integration empowers websites with secure, convenient, and trustworthy payment processing, enhancing customer satisfaction and business growth.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/GIFS_o/websitehosting.gif",
    heading: "Website Hosting ",
    content:
      "To maximize impact, a website requires speed, stability, scalability, and security. Our web design agency collaborates with reputable hosting providers, offering diverse configurations to meet clients' hosting requirements.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/GIFS_o/websitemaintenance.gif",
    heading: "Website Maintenance",
    content:
      "Our website maintenance services ensure your website stays healthy and updated. With 24/7 scanning, backups, uptime monitoring, CMS and plugin updates, and speed optimization, your site remains robust.",
  },

  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/GIFS_o/content.gif",
    heading: "Digital Marketing Integration",
    content:
      "Maximize your online reach with our integrated digital marketing solutions, including SEO, social media, and content strategy. ",
  },
];

const whyChooseData = [
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/tools_0/html5.png",
    name: "HTml5",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/tools_0/css3.png",
    name: "CSS3",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/tools_0/bootstrap.png",
    name: "Bootstrap5",
  },
  {
    height: "230px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/weblow.svg",
    name: "webflow",
  },
  {
    height: "230px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/wix.svg",
    name: "wix",
  },
  {
    height: "325px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/tools_0/reactjs.png",
    name: "React.js",
  },
  {
    height: "325px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/tools_0/nextjs.png",
    name: "Next.js",
  },
  {
    height: "325px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/tools_0/angular.png",
    name: "Angular",
  },
  {
    height: "230px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/tools_0/javascript.png",
    name: "Javascript",
  },
  {
    height: "230px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/ci-logo.png",
    name: "codeigniter",
  },
  {
    height: "230px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/jquery.png",
    name: "Jquery",
  },
  {
    height: "230px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/squarespace.png",
    name: "Squarespace",
  },
  {
    height: "230px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/tools_0/elementor.png",
    name: "ELementor",
  },
  {
    height: "230px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/tools_0/wordpress.png",
    name: "Wordpress",
  },
  {
    height: "230px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/tools_0/wpbakery.png",
    name: "WPBAKERY",
  },
  {
    height: "230px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/tools_0/php.png",
    name: "PHP",
  },
  {
    height: "230px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/tools_0/laravel.png",
    name: "Laravel",
  },
];

const HostingData = [
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/hosting.png",
    name: "Azure",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/hosting2.png",
    name: "AWS",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/hosting3.png",
    name: "Google cloud",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/webDevelopment/cpanel.webp",
    name: "cPanel",
  },
];

export default WebDevelopment;
