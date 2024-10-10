import React from "react";
// import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./index.module.css";
import Button from "react-bootstrap/Button";
import { CrossFAQ } from "@/data/faq/FAQ";
import Image from "next/image";
import GetInTouch from "@/components/shared/getInTouch";
import ServiceCard from "@/components/shared/serviceCard";
import FAQ from "@/components/shared/faq";
import Testimonial from "@/components/shared/testimonial";
import ServiceLayout from "../service-layout/ServiceLayout";
import Process from "@/components/shared/process-slider";
// import Loader from "@/helpers/Loader";
import Link from "next/link";
import { NextSeo } from "next-seo";

const CrossPlateformApp = () => {
  // const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <NextSeo
        title="Best Cross-Platform App Development Company | Vcana Global"
        description="Vcana Global: Your top choice for cross-platform app development services.
Expertise, reliability, and innovation combined for exceptional results."
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "best cross platform app development, cross platform app development company, cross platform app development services ",
          },
        ]}
        canonical="https://www.vcanaglobal.com/services/cross-plateform-app-development"
      />
      <ServiceLayout bannerData={bannerData}>
        <h1 className="d-none">cross platform mobile app development</h1>

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
                    "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/istimg.webp"
                  }
                  width={400}
                  height={687}
                  //loader={Loader}
                  alt="nb"
                />
              </Col>
              <Col md={12} sm={12} lg={12} xl={7} className={Styles.herotext}>
                <h2
                  className={`${Styles.mainHedding1} ${Styles.main} text-lg-start text-sm-center text-md-center px-md-4 px-sm-4 px-lg-0`}
                >
                  Cross Platform
                  <span> Mobile App Development Services</span>
                </h2>
                <p className={` sm:text-center text-md-start `}>
                  In a world where mobile applications play a crucial role in
                  businesses and daily life, ensuring your app reaches the
                  widest audience is paramount. Cross-platform app development
                  is the solution to this challenge. At Vcana Global, we
                  specialize in providing top-notch cross-platform app
                  development services so that your app works seamlessly across
                  various devices and operating systems.
                </p>
                <p className={` sm:text-center text-md-start `}>
                  {" "}
                  We understand that your time and budget are valuable, which is
                  why we offer a solution that allows you to have one codebase
                  that functions on multiple platforms. This streamlines your
                  development process and ensures that your users have a
                  consistent experience, no matter which device or operating
                  system they prefer.
                </p>
                <p className={` sm:text-center text-md-start `}>
                  Don't miss the opportunity to harness the full potential of
                  hybrid app development. Reach out to Vcana Global, and
                  together, we'll make your app vision a cross-platform reality.
                </p>
              </Col>
            </Row>
            <Row
              className={`py-4 py-xl-0  ${Styles.main_padding}`}
              data-aos="custom"
            >
              <Col>
                <div
                  className={`py-4 py-xl-0 cmx ${Styles.ecosystembg}`}
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <h3>
                    Start your journey towards cross-platform success today.
                  </h3>
                  <Link href="#contact">
                    <Button className={`${Styles.btnecostem} btnhover `}>
                      Get Started
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>

          {/* hero is the services section end */}
          {/* here is the services section start */}

          <div className={Styles.pinkbg}>
            <Container>
              <div className={Styles.cddd}>
                <Row className={` ${Styles.mobileres} `}>
                  <Col
                    md={12}
                    className={`${Styles.mainHeading} ${Styles.main_padding} `}
                  >
                    <div className="short_heading">Our Solutions</div>
                    <hr />
                    <h2 className={`mt-3 mb-2 px-md-4 px-sm-4 px-lg-0`}>
                      Our Cross Platform Development
                      <span> Services Include</span>{" "}
                    </h2>
                  </Col>
                  <Row
                    className={`mt-4 ${Styles.main_padding} ${Styles.servicebox}`}
                  >
                    <ServiceCard data={ServiceData} classes={`crossheight`} />
                  </Row>
                </Row>
              </div>
            </Container>
          </div>

          {/* here is the services section end */}

          {/* here is the tools section start  */}
          <div className={`${Styles.technologybg} `}>
            <Container>
              <Row className={` ${Styles.headChoose}  ${Styles.main_padding}`}>
                <Col>
                  <div className="short_heading">TECHNOLOGY USED</div>
                  <hr className={Styles.tech} />
                  <h2 className={` pt-3 px-md-4 px-sm-4 px-lg-0`}>
                    Tools And Technologies
                    <span>
                      {" "}
                      Employed In Cross
                      <br />
                      Platform App{" "}
                    </span>
                    Development
                  </h2>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row
                className={`${Styles.rowChoose231} ${Styles.main_padding} cmx`}
              >
                <div className={`${Styles.boxbg1} `}>
                  <h3 className={`${Styles.boxheading} short_heading`}>
                    FRAMEWORKS
                  </h3>
                  <hr />
                  <div className={`${Styles.boxbg} `}>
                    {TechData?.map((data) => {
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
                            <h4
                              className={`${Styles.headingCARD2} text-start pt-2 pb-0`}
                            >
                              {data?.name}
                            </h4>
                          </div>
                        </Col>
                      );
                    })}
                  </div>

                  <h3 className={`${Styles.boxheading} short_heading`}>
                    BACKEND & DATABASE
                  </h3>
                  <hr />
                  <div className={`${Styles.boxbg} `}>
                    {BackendData?.map((data) => {
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
                            <h4
                              className={`${Styles.headingCARD2} text-start pt-2 pb-0`}
                            >
                              {data?.name}
                            </h4>
                          </div>
                        </Col>
                      );
                    })}
                  </div>

                  <h3 className={`${Styles.boxheading} short_heading`}>IDE</h3>
                  <hr />
                  <div className={`${Styles.boxbg} `}>
                    {IdeData?.map((data) => {
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
                            <h4
                              className={`${Styles.headingCARD2} text-start pt-2 pb-0`}
                            >
                              {data?.name}
                            </h4>
                          </div>
                        </Col>
                      );
                    })}
                  </div>

                  <h3 className={`${Styles.boxheading} short_heading`}>
                    ONLY FRONTEND TECHNOLOGY
                  </h3>
                  <hr />
                  <div className={`${Styles.boxbg} `}>
                    {FrontData?.map((data) => {
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
                            <h4
                              className={`${Styles.headingCARD2} text-start pt-2 pb-0`}
                            >
                              {data?.name}
                            </h4>
                          </div>
                        </Col>
                      );
                    })}
                  </div>
                </div>
              </Row>
            </Container>
          </div>
          {/* here is the tools section start  */}

          {/* here is the CHOOSE US  section start  */}
          <div className={` ${Styles.whychoseusbg}`}>
            <Container>
              <div className={Styles.whychoseus}>
                <Row className={` mb-1 cmx ${Styles.main_padding}`}>
                  <Col md={12} className={Styles.benefits}>
                    <div className="short_heading">WHY CHOOSE US</div>
                    <hr />
                    <h2 className={`mt-3  px-md-4 px-sm-4 px-lg-0`}>
                      Why Choose Vcana Global as
                      <span> Your Cross Platform App Development </span>{" "}
                      Partner?
                    </h2>
                  </Col>
                </Row>
                <Row className={` ${Styles.chosesec}  ${Styles.main_padding}`}>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/partnar.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                    />
                    <h3 className="text-start">Comprehensive Solutions</h3>
                    <p className="text-start">
                      We handle everything in-house, from design to programming
                      and final tweaks, giving you full control over every
                      aspect of your project.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/partnar2.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="text-start">Continuous Improvement</h3>
                    <p className="text-start">
                      Our team employs a continuous integration process,
                      ensuring that each revision is supported by automated
                      builds and tests.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/partnar3.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="text-start">Proven Workflows</h3>
                    <p className="text-start">
                      Transform your ideas into a successful hybrid mobile app
                      with the expertise of our proven methodologies and
                      creative team.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/partnar4.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="text-start">
                      Competitive Pricing & Timely Delivery
                    </h3>
                    <p className="text-start">
                      At Vcana Global, we provide top-notch quality work at a
                      fraction of the price, offering flexible and competitive
                      services.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/partnar45.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="text-start">Optimal Architecture</h3>
                    <p className="text-start">
                      We relentlessly strive for the perfect architecture in
                      your cross-platform app, enhancing efficiency and
                      operation.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/partnar6.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="text-start"
                    />
                    <h3 className="text-start">
                      Around-the-Clock Technical Support
                    </h3>
                    <p className="text-start">
                      Our 24x7 technical support team is always ready to resolve
                      any issues, providing assistance to both you and your
                      users, day or night.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          {/* here is the CHOOSE US section end  */}
          {/* here is the process section start  */}
          <div>
            <Process
              data={processData}
              height={"410px"}
              heading={"Our Proven Process"}
              page={
                <h2 className="px-4">
                  Our Revolutionary App <span> Development Steps</span>
                </h2>
              }
              // desc={
              //   "At Vcana Global, we're dedicated to embracing the latest technological trends. Whether it's harnessing the power of Artificial Intelligence, unlocking the potential of the Internet of Things (IoT), utilizing blockchain, or maximizing the benefits of Cloud Computing, we're your innovation partner."
              // }
              classes1={"container_back"}
              classes2={"box_height"}
            />
          </div>
          {/* here is the process section end  */}
          {/*Testimonials  start */}
          <div className={`mt-4 ${Styles.main_padding}`}>
            <Testimonial slide={1} />
          </div>
          {/*Testimonials  end */}

          {/*let’s get in Touch   start */}
          <div id="contact" className="pt-3">
            <GetInTouch data={GetInTouchData} />
          </div>

          {/*let’s get in Touch   end */}
          {/* <FAQ data={ServiceFaq}/> */}
          <div className={`mt-4 ${Styles.main_padding}`}>
            <FAQ
              data={CrossFAQ}
              page={"Cross Platform Services <span>FAQs</span>"}
            />
          </div>
          {/*Frequently Asked Questions  end*/}
        </div>
      </ServiceLayout>
    </>
  );
};
const bannerData = {
  heading: "Cross platform <br/>App Development",
  img: "https://vcana-website-assets.s3.amazonaws.com/images/banners/cross.webp",
};

const GetInTouchData = {
  heading:
    "Ready to Turn Your <span> Dream App Into a Reality, But Unsure About </span> the Best Platforms to Use?",
  desc: " ",
  sub_headR: "Send Us A Message",
  sub_headL: "Speak to Us",
  sub_head1: "",
  sub_head2: "Let’s level up your Brand, together",
  sub_desc:
    "Reach out to Vcana Global, and together, we'll make your app vision a cross-platform reality.We are dedicated to helping you achieve your online goals while ensuring a delightful user experience for your audience.",
  LI: [
    "Fulfillment of Promises",
    "Unmatched excellence and quality",
    "A dedicated team to support your business endeavors",
  ],
};
const ServiceData = [
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/services.gif",
    heading: "Cross Platform App Development",
    content:
      "If you have a native application, we have the expertise to assist you in transitioning it to a hybrid platform, enhancing its versatility for a more straightforward digital experience.      ",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/services2.gif",
    heading: "Cross Platform App Migration",
    content:
      "As a prominent hybrid app development firm, we also offer expert guidance on selecting the most appropriate technology stacks and security protocols as per your business objectives.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/services3.gif",
    heading: "Cross Platform UI/UX Design",
    content:
      "We excel at perfecting the visual and interactive aspects of your hybrid application by employing creative, customizable designs that guarantee the desired user experience on both platforms. ",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/services4.gif",
    heading: "Cross Platform App Upgrade",
    content:
      "As a top Cross Platform App development, we upgrade your existing apps with the latest iOS and Android OS to provide you with fruitful business gains.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/services5.gif",
    heading: "Automated Testing",
    content:
      "Our premium testing services for your hybrid application are meticulously crafted to ensure the maximum optimization and a seamless user experience.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/services6.gif",
    heading: "Cross Platform App Maintenance Support",
    content:
      "We excel in hybrid app maintenance. Our maintenance support covers everything from framework classification to bug tracking, and technical fixes.",
  },
];

const processData = [
  {
    color: "#254194",
    heading: "Idea Validation",
    content:
      "We conduct a thorough analysis of your mobile app concept, taking into account user behavior and your target audience.",
  },

  {
    color: "#F2B721",
    heading: "Wireframe Design",
    content:
      "We transform your app idea into visual wireframes, outlining the precise user journey aligned with your business requirements.",
  },
  {
    color: "#F4622A",
    heading: "Prototype Development",
    content:
      "Following wireframe feedback, we craft a prototype of your mobile app using advanced tools and software.",
  },
  {
    color: "#254194",
    heading: "Development with a Single Codebase ",
    content:
      "Once we've obtained the green light for our planning and design phases, the next step is to merge all components into a single codebase and bring your concept to fruition.",
  },

  {
    color: "#F2B721",
    heading: "Quality Assurance & Testing",
    content:
      "Our team rigorously tests the mobile app, evaluating its responsiveness, stability, and scalability to ensure a smooth user experience.",
  },
  {
    color: "#F4622A",
    heading: "Launch and Maintenance",
    content:
      "Once your mobile app is live on app stores, we continue to provide support, ensuring optimal performance and maintenance.",
  },
];

const TechData = [
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/technology.png",
    name: "FLUTTER",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/technology2.png",
    name: "REACT NATIVE",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/technology3.png",
    name: "IONIC",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/technology4.png",
    name: "Xamarin",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/technology5.png",
    name: "SENCHA TOUCH",
  },
];
const BackendData = [
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/backend.png",
    name: "MYSQL",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/backend2.png",
    name: "SQL SERVER",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/backend3.png",
    name: "MONGODB",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/backend4.png",
    name: "FIREBASE REALTIME DATABASE",
  },
];
const IdeData = [
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/idee.png",
    name: "XCODE",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/idere.png",
    name: "SQLITE",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/ider.png",
    name: "REALM",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/idere2.png",
    name: "CORE DATA",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/idee4.png",
    name: "VISUAL STUDIO",
  },
];

const FrontData = [
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/front2.png",
    name: "HTML5",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/front.png",
    name: "CSS",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/crossapp/front3.png",
    name: "JAVASCRIPT",
  },
];
export default CrossPlateformApp;
