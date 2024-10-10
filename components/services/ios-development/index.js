import React from "react";
// import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./index.module.css";
import Button from "react-bootstrap/Button";
import { iosFAQ } from "@/data/faq/FAQ";
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

const IosDevelopment = () => {
  // const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <NextSeo
        title="The Leading iOS App Development Company | Vcana Global"
        description="Unlock your business potential with Vcana Global, the leading iOS app
development company. Transform ideas into innovative digital solutions today."
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "ios app development company, custom ios app development services, hire app developer, mobile app development services",
          },
        ]}
        canonical="https://www.vcanaglobal.com/services/ios-app-development"
      />

      <ServiceLayout bannerData={bannerData}>
        <h1 className="d-none">iphone app development services</h1>
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
                    "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/1stimg.webp"
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
                  Creating iOS Excellence:
                  <span> Explore Vcana Global's </span>
                  Innovative Solutions
                </h2>
                <p className={` sm:text-center text-md-start `}>
                  Welcome to Vcana Global, your gateway to cutting-edge iOS app
                  development services that drive innovation and create
                  exceptional user experiences. As a leading iOS app development
                  company, we are dedicated to crafting mobile solutions that
                  transcend expectations and empower businesses to thrive in the
                  ever-evolving digital landscape.
                </p>
                <p className={` sm:text-center text-md-start `}>
                  {" "}
                  Our team of highly skilled and experienced iOS developers is
                  committed to delivering tailored, high-performance
                  applications that cater to your unique business needs. Whether
                  you're a startup looking to make your mark or an established
                  enterprise seeking to enhance customer engagement, our
                  expertise spans across diverse industries.
                </p>
                <p className={` sm:text-center text-md-start `}>
                  What sets us apart is our unwavering commitment to quality. We
                  leverage the latest technologies and best practices to ensure
                  that your iOS app not only functions flawlessly but also
                  captivates your audience with its user-friendly design. Join
                  us on this exciting journey, and let's transform your vision
                  into a reality.
                </p>
              </Col>
            </Row>
            <Row
              className={`py-4 py-xl-0 ${Styles.main_padding}`}
              data-aos="custom"
            >
              <div
                className={`py-4 py-xl-0 cmx ${Styles.ecosystembg}`}
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <h6>
                  Your success in the iOS ecosystem starts here, with Vcana
                  Global.
                </h6>
                <Link
                  href="https://calendly.com/anshul-10/discussion-website-designing-development?month=2023-08"
                  target="_blank"
                >
                  <Button
                    className={`${Styles.btnecostem} ${Styles.btnr} btnhover `}
                  >
                    Book a Meeting
                  </Button>
                </Link>
              </div>
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
                    <h2 className={` mt-3 mb-2 px-md-4 px-sm-4 px-lg-0`}>
                      Handheld Solutions That
                      <span> Capture the User's</span> Imagination
                    </h2>
                    <p className="mt-2">
                      Feel free to reach out to our experts with any inquiries
                      about iOS or iPhone app development. Our <br />
                      dedicated iOS app development team is always ready to
                      provide assistance.
                    </p>
                  </Col>
                  <Row
                    className={`mt-4 ${Styles.main_padding} ${Styles.servicebox}`}
                  >
                    <ServiceCard data={ServiceData} classes={`iosheight`} />
                  </Row>
                </Row>
              </div>
            </Container>
          </div>

          {/* here is the services section end */}

          {/* here is the tools section start  */}

          {/*technology  section start */}
          <div className={`${Styles.technologybg} `}>
            <Container>
              <Row className={` ${Styles.headChoose}  ${Styles.main_padding}`}>
                <Col>
                  <div className="short_heading">TOOLS & TECHNOLOGIES</div>
                  <hr className={Styles.tech} />
                  <h2 className={` pt-3 px-md-4 px-sm-4 px-lg-0`}>
                    Tools And Technologies Employed In
                    <span> iOS App Development </span>
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

                  <h3 className={`${Styles.boxheading} short_heading `}>
                    DATABASE
                  </h3>
                  <hr />
                  <div className={`${Styles.boxbg} `}>
                    {DataBase?.map((data) => {
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
                    LANGUAGE
                  </h3>
                  <hr />
                  <div className={`${Styles.boxbg} `}>
                    {LanguageData?.map((data) => {
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
          {/*technology  section end */}

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
                      Why Choose
                      <span> Vcana Global as Your iOS App </span>Development
                      Agency?
                    </h2>
                  </Col>
                </Row>
                <Row className={` ${Styles.chosesec}  ${Styles.main_padding}`}>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/choose.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="text-start"
                    />
                    <h3 className="text-start">Competitive Pricing</h3>
                    <p className="text-start">
                      We offer competitive pricing and transparent quotations,
                      so you know exactly what to expect.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/choose2.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                    />
                    <h3 className="text-start">
                      Confidentiality & Authenticity
                    </h3>
                    <p className="text-start">
                      Client privacy is a fundamental ethical concern for us. In
                      custom iOS app development, we adhere to a no-reuse
                      policy, ensuring each project receives unique code.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/choose3.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="text-start">
                      Understandable Code Structure
                    </h3>
                    <p className="text-start">
                      While the app development coding is our responsibility, we
                      ensure it remains clean and comprehensible for future
                      developers.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/choose4.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="text-start">Innovation at Heart</h3>
                    <p className="text-start">
                      We're not just developers; we're creators. We bring
                      innovation to every project, making your app truly unique.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/choose5.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="text-start">End-to-End Solutions</h3>
                    <p className="text-start">
                      From development to optimization and support, we offer
                      comprehensive services to meet all your needs.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/choose6.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="text-start">Commitment to Excellence</h3>
                    <p className="text-start">
                      We're committed to delivering excellence in every aspect
                      of our service, ensuring your satisfaction.
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
                  Our Revolutionary <span> iOS App Development</span> Steps
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
          <GetInTouch data={GetInTouchData} />
          {/*let’s get in Touch   end */}
          {/* <FAQ data={ServiceFaq}/> */}
          <div className={`mt-4 ${Styles.main_padding}`}>
            <FAQ
              data={iosFAQ}
              page={"iOS App Development <span >FAQs</span>"}
            />
          </div>
          {/*Frequently Asked Questions  end*/}
        </div>
      </ServiceLayout>
    </>
  );
};
const bannerData = {
  heading: "<small>I</small>OS App Development",
  img: "https://vcana-website-assets.s3.amazonaws.com/images/banners/ios.webp",
};

const GetInTouchData = {
  heading: "Ready to Bring Your <span> iOS App Idea to Life?<span>",
  desc: " ",
  sub_headR: "Send Us A Message",
  sub_headL: "Speak to Us",
  sub_head1: "",
  sub_head2: "At Vcana Global, you are assured to get ",
  sub_desc:
    "Contact us today to discuss your project, and we'll be happy to provide you with a free consultation and quote. At Vcana Global, our focus is on delivering solutions that make your business shine.",
  LI: [
    "Fulfillment of Promises",
    "Unmatched excellence and quality",
    "A dedicated team to support your business endeavors",
  ],
};
const ServiceData = [
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/services.gif",
    heading: "Full-Stack iOS App",
    content:
      "Collaborate with our experts from the start for secure, scalable, feature-rich, and high-performing iPhone apps that seamlessly run on iOS devices, wearables, Macs, and TV.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/services2.gif",
    heading: "Enterprise-Oriented Solutions (EOS)",
    content:
      "Got a business idea for an iPhone app? Contact Us. With years of experience, we specialize in creating enterprise-focused iPhone mobile solutions.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/services3.gif",
    heading: "Migration And Upgrades",
    content:
      "Our iPhone app developers possess the skills to smoothly transition your current mobile app to the iOS platform and upgrade your existing iOS app to align with the latest market trends.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/services4.gif",
    heading: "API Development And Integration",
    content:
      "Our iOS app development specialists are committed to delivering exceptional solutions, whether it involves integrating third-party APIs or creating customized iPhone APIs to meet your complex app development needs.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/services5.gif",
    heading: "Support & Maintenace",
    content:
      "We offer exceptional support and maintenance for iOS app development, along with iPhone application creation services, ensuring high-quality assistance for our clients.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/services6.gif",
    heading: "Quality Assurance And Testing Services",
    content:
      "At Vcana Global, our team of experts is devoted to conducting thorough bug testing for all your iOS apps. We guarantee bug-free, high-performance apps for your clients.",
  },
];

const TechData = [
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/framework.png",
    name: "AVFOUNDATION",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/framework2.png",
    name: "SWIFTUI",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/framework3.png",
    name: "UIKIT",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/framework4.png",
    name: "XCTEST",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/framework5.png",
    name: "XCUITEST",
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
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/idee2.png",
    name: "APPCODE",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/idee3.png",
    name: "CODE RUNNER",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/idee4.png",
    name: "VS CODE",
  },
];

const DataBase = [
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/databas.png",
    name: "SQLITE",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/databas2.png",
    name: "REALM",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/databas3.png",
    name: "CORE DATA",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/databas4.png",
    name: "LAMBDA",
  },
];
const LanguageData = [
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/lenguag.png",
    name: "SWIFT",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/lenguag2.png",
    name: "OBJECTIVE-C",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/lenguag3.png",
    name: "REACT NATIVE",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/lenguag4.png",
    name: "C#",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ios/lenguag5.png",
    name: "JAVA",
  },
];

const processData = [
  {
    color: "#254194",
    heading: "Requirement Analysis",
    content:
      "Our business analysts will decipher your audience's needs and understand your business objectives.",
  },

  {
    color: "#F2B721",
    heading: "Wireframes & Prototypes",
    content:
      "Based on the exact specifications, we'll create wireframes and prototypes to outline the user journey.",
  },
  {
    color: "#F4622A",
    heading: "App Architecture",
    content:
      "Upon approval, our team will proceed with application architecture and database design finalization.",
  },
  {
    color: "#254194",
    heading: "App Development",
    content:
      "Adhering to Apple's security and functionality best practices, we'll craft your iOS app.",
  },

  {
    color: "#F2B721",
    heading: "Testing & Quality Assurance",
    content:
      "We conduct rigorous QA and testing to eliminate bugs and enhance user experience.",
  },
  {
    color: "#F4622A",
    heading: "Deployment & Assistance",
    content:
      "We'll deploy your iOS app, making it live for users, and offer post-launch support tailored to your requirements.",
  },
];
export default IosDevelopment;
