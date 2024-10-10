import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./index.module.css";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Testimonial from "@/components/shared/testimonial";
import GetInTouch from "@/components/shared/getInTouch";
import ServiceLayout from "../service-layout/ServiceLayout";
import Link from "next/link";
import { MobileAppFAQ } from "@/data/faq/FAQ";
import FAQ from "@/components/shared/faq";
import Process from "@/components/shared/process-slider";
// import Loader from "@/helpers/Loader";

import { NextSeo } from "next-seo";

const MobileApp = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <NextSeo
        title="Custom mobile app development services | Vcana Global"
        description="Vcana Global offers expert custom mobile app development services tailored to your needs. Transform your ideas into powerful digital solutions today!"
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "mobile app development services, mobile app development agency, hire mobile app developers",
          },
        ]}
        canonical="https://www.vcanaglobal.com/services/mobile-application-development"
      />
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
      <ServiceLayout bannerData={bannerData}>
        <h1 className="d-none">Custom mobile app development services</h1>

        <div className={Styles.main_services}>
          {/* hero section start */}
          <Container>
            <Row className={`py-4 py-xl-0 cmx ${Styles.main_padding} `}>
              <Col
                md={12}
                sm={12}
                lg={12}
                xl={5}
                className={`mx-auto ${Styles.imgBox}`}
              >
                <Image
                  className={Styles.de}
                  src={
                    "https://vcana-website-assets.s3.amazonaws.com/images/services/mobileapp/istimg.webp"
                  }
                  width={424}
                  height={420}
                  alt="nb"
                />
              </Col>
              <Col
                md={12}
                sm={12}
                lg={12}
                xl={7}
                className={` mx-auto ${Styles.herotext} `}
              >
                <h2
                  className={`${Styles.mainHedding1} ${Styles.main} text-lg-start text-sm-center text-md-center px-md-4 px-sm-4 px-lg-0`}
                >
                  Discover<span> Excellence in Mobile App Development </span>
                  with Vcana Global
                </h2>
                <p className={` sm:text-center text-md-start `}>
                  Are you ready to elevate your digital presence and conquer the
                  mobile landscape? Look no further. Vcana Global is the premier
                  app development partner for businesses seeking to create
                  innovative, high-performing, and scalable apps for their
                  digital transformation journey. Our impeccable mobile app
                  development services not only fuel business growth but also
                  secure advantages such as enhanced brand awareness, increased
                  customer engagement, and a competitive edge. We employ an
                  agile and methodical approach, guiding every stage from design
                  and development to delivery, deployment, and ongoing
                  maintenance, ensuring the delivery of top-quality, flawless
                  apps.
                </p>
                <p className={` sm:text-center text-md-start `}>
                  Our comprehensive app solutions encompass iOS, Android, and
                  cross-platform development, as well as expert services in
                  UI/UX design, prototyping, rigorous testing, and dedicated
                  maintenance. Choose Vcana Global and experience the pinnacle
                  of mobile app development. Trust us to turn your vision into
                  reality.
                </p>
              </Col>
            </Row>
          </Container>
          {/* hero section end*/}
          {/* srvices section start */}
          <div className={Styles.pinkbg}>
            <Container>
              <div className={Styles.mainleftmargin}>
                <Row>
                  <Col
                    md={12}
                    className={` ${Styles.mainHeading} ${Styles.main_padding} `}
                  >
                    <div className="short_heading">SERVICES</div>

                    <hr />
                    <h2 className={`mt-3 mb-4 px-md-4 px-sm-4 px-lg-0`}>
                      Our Mobile App Development <span> Services Include</span>
                      <span className={`${Styles.colorchange}`}> </span>{" "}
                      <span> </span>
                    </h2>
                  </Col>
                  <Container className={`${Styles.bannerinfo} `}>
                    <Row
                      className={`${Styles.servicesrowbox} ${Styles.main_padding} mb-5  cmx`}
                    >
                      {ServiceData?.map((data, i) => {
                        return (
                          <Col key={i} sm={12} md={12} xl={6} xxl={6}>
                            <div
                              className={`${Styles.single_service} ${Styles["classes"]} `}
                            >
                              <div className={Styles.content}>
                                <span className={`${Styles.iconBox}`}>
                                  <Image
                                    src={data?.img}
                                    //loader={Loader}
                                    alt="image"
                                    width={60}
                                    height={60}
                                  />
                                </span>
                                <h3 className={Styles.title}>
                                  {data?.heading}
                                </h3>
                                <p className={Styles.description}>
                                  {data?.content}
                                </p>
                              </div>

                              <Link
                                href={`/${data?.link}`}
                                className={Styles.serviceCardBtn}
                              >
                                {""}
                                {data?.link && (
                                  <button>
                                    {" "}
                                    <Image
                                      src={
                                        "https://vcana-website-assets.s3.amazonaws.com/images/services/arrowright.png"
                                      }
                                      //loader={Loader}
                                      alt="ImageArrow"
                                      width={25}
                                      height={25}
                                    />
                                  </button>
                                )}
                              </Link>
                              <h4 className={Styles.numbering}>
                                0{Number(i) + 1}
                              </h4>
                              {/* </Link> */}
                            </div>
                          </Col>
                        );
                      })}
                    </Row>
                  </Container>
                </Row>
              </div>
            </Container>
          </div>
          {/* srvices section end */}

          {/* partner section start */}
          <div className={`${Styles.main_padding} mt-5 mb-5`}>
            <div
              className={`${Styles.PARTNER} ${Styles.main_padding}`}
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <Container>
                <Row className={`${Styles.cmx} `}>
                  <Col md={8} className="d-flex align-items-center">
                    {/* <h5>WE PARTNER WITH BRANDS TO</h5> */}

                    <h5>Let's Create Something Great Together.</h5>
                  </Col>
                  <Col md={4} className={Styles.btnr}>
                    <Link
                      href="https://calendly.com/anshul-10/discussion-website-designing-development?month=2023-08"
                      target="_blank"
                    >
                      {""}
                      <button>Partner with Us</button>{" "}
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          {/* here is the WHY CHOOSE US start */}
          <Container>
            <div
              className={`${Styles.your_website} ${Styles.main_padding} cmx`}
            >
              <div className="short_heading">WHY CHOOSE VCANA GLOBAL</div>
              <hr />
              <h2 className={` mt-3 mb-4`}>
                Advantages That <span>Set Us Apart</span>
              </h2>
            </div>
            <Row className={` ${Styles.chosesec}  ${Styles.main_padding}`}>
              <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                <Image
                  src={
                    "https://vcana-website-assets.s3.amazonaws.com/images/services/mobileapp/provenexcellence.gif"
                  }
                  width={70}
                  height={70}
                  alt="nb"
                  className="text-start"
                />
                <h3 className="text-start">Proven Excellence</h3>
                <p className="text-start">
                  Our experienced team has a remarkable track record of
                  delivering successful mobile apps across various industries.
                </p>
              </Col>
              <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                <Image
                  src={
                    "https://vcana-website-assets.s3.amazonaws.com/images/services/mobileapp/leadingtechnology.gif"
                  }
                  width={70}
                  height={70}
                  alt="nb"
                />
                <h3 className="text-start">Leading Technology</h3>
                <p className="text-start">
                  We're always ahead of the curve, adopting the latest
                  technologies and best practices in mobile app development.
                </p>
              </Col>
              <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                <Image
                  src={
                    "https://vcana-website-assets.s3.amazonaws.com/images/services/mobileapp/transparentcommunication.gif"
                  }
                  width={70}
                  height={70}
                  alt="nb"
                  className="me-3"
                />
                <h3 className="text-start">Transparent Communication</h3>
                <p className="text-start">
                  We believe in open and clear communication throughout the
                  project, keeping you informed at every step.
                </p>
              </Col>
              <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                <Image
                  src={
                    "https://vcana-website-assets.s3.amazonaws.com/images/services/mobileapp/timelydelivery.gif"
                  }
                  width={70}
                  height={70}
                  alt="nb"
                  className="me-3"
                />
                <h3 className="text-start">Timely Delivery</h3>
                <p className="text-start">
                  We understand the significance of deadlines and commit to
                  delivering your app on time and within budget.
                </p>
              </Col>
              <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                <Image
                  src={
                    "https://vcana-website-assets.s3.amazonaws.com/images/services/mobileapp/clientcentricapproach.gif"
                  }
                  width={70}
                  height={70}
                  alt="nb"
                  className="me-3"
                />
                <h3 className="text-start">Client-Centric Approach</h3>
                <p className="text-start">
                  Your satisfaction is our top priority. We work closely with
                  you to ensure your app aligns perfectly with your business
                  objectives.
                </p>
              </Col>
              <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                <Image
                  src={
                    "https://vcana-website-assets.s3.amazonaws.com/images/services/mobileapp/reliablequalityassurance.gif"
                  }
                  width={70}
                  height={70}
                  alt="nb"
                  className="me-3"
                />
                <h3 className="text-start">Reliable Quality Assurance</h3>
                <p className="text-start">
                  Vcana Global guarantees flawless apps through rigorous
                  testing, ensuring a seamless user experience, and long-term
                  reliability, both pre- and post-launch.
                </p>
              </Col>
            </Row>
          </Container>
          {/* here is the WHY CHOOSE US end */}

          {/* here is the technology we use section start */}

          <Process
            data={processData}
            height={"480px"}
            heading={"Innovative Workflow"}
            page={
              <h3 className="h3Headings px-4">
                Our Mobile App
                <span> Development Process</span>
              </h3>
            }
            // desc={
            //   "At Vcana Global, we're dedicated to embracing the latest technological trends. Whether it's harnessing the power of Artificial Intelligence, unlocking the potential of the Internet of Things (IoT), utilizing blockchain, or maximizing the benefits of Cloud Computing, we're your innovation partner."
            // }
            classes={"container_back"}
            classes2={"mobile_height"}
          />
          {/*Testimonials  start */}
          <div className={`${Styles.main_padding}`}>
            <Testimonial slide={1} />
          </div>
          {/*Testimonials  end */}
          {/*let’s get in Touch   start */}
          <GetInTouch data={GetInTouchData} />
          {/*let’s get in Touch   end */}
          {/*FAQ  start */}
          <div className={`${Styles.main_padding}`}>
            <FAQ
              page="Mobile App Development <span> FAQs </span>"
              data={MobileAppFAQ}
            />
          </div>
          {/*FAQ  end */}
        </div>
      </ServiceLayout>
    </>
  );
};

const bannerData = {
  heading: "Mobile App Development",
  img: "https://vcana-website-assets.s3.amazonaws.com/images/banners/mobilef.webp",
};
const GetInTouchData = {
  heading: "Ready to Bring Your <span> App Vision to Life? </span> ",
  desc: "",
  sub_headL: "Speak to Us",
  sub_headR: "Send Us A Message",
  sub_head1: "",
  sub_head2: "At Vcana Global, you are assured to get ",
  sub_desc:
    "Contact Vcana Global today and embark on a journey to create an app that not only sets you apart but also propels your business to new heights in the digital era.",
  LI: [
    "Fulfillment of Promises",
    "Unmatched excellence and quality",
    "A dedicated team to support your business endeavors",
  ],
};

const ServiceData = [
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/mobileapp/iosapp.gif",
    heading: "iOS App Development",
    link: "services/ios-app-development",
    content:
      "Our proficient iOS developers harness the full potential of Apple's ecosystem, delivering apps that stand out on iPhones, iPads, and Apple Watches. With an unwavering commitment to precision and user-centric design, we ensure that your iOS app captivates and engages your target audience.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/mobileapp/ios.gif",
    heading: "Android App Development",
    link: "services/android-app-development",
    content:
      "We excel in building powerful Android apps that cater to a wide range of devices, from smartphones to tablets. Our team stays up-to-date with the latest Android trends and ensures your app is optimized for performance, security, and user engagement.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/mobileapp/cross-platform.gif",
    heading: "Cross-Platform App Development",
    link: "services/cross-plateform-app-development",

    content:
      "Want to reach both iOS and Android users efficiently? Our cross-platform development experts use industry-leading tools to build apps with a single codebase, saving you time and resources without compromising on quality.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/mobileapp/appmaintance.gif",
    heading: "App Maintenance & Support",
    link: "",

    content:
      "Our commitment to your project doesn't end with the app's launch. We offer ongoing maintenance and support services, guaranteeing your app stays secure, up-to-date, and ready to adapt to changing market dynamics.",
  },
];

const processData = [
  {
    color: "#254194",
    heading: "Idea & Strategy  ",
    content:
      "Our journey begins by understanding your vision and objectives. We collaborate to define your app's purpose and target audience while considering market trends.",
  },

  {
    color: "#F2B721",
    heading: "Design & User Experience",
    content:
      "Our designers craft an engaging, user-friendly interface aligned with your brand and engage users effectively.",
  },
  {
    color: "#F4622A",
    heading: "Development & Coding",
    content:
      "Our Skilled developers bring the design to life with efficient, secure coding. It ensures that your app is robust, secure, and scalable.",
  },
  {
    color: "#254194",
    heading: "Testing & Quality Assurance",
    content:
      "To guarantee a flawless user experience, our quality assurance team does rigorous testing to fix any bugs or issues before launch.",
  },

  {
    color: "#F2B721",
    heading: "Deployment & Launch",
    content:
      "Once your app is polished and perfected, we guide you through app store deployment for a smooth launch.",
  },
  {
    color: "#F4622A",
    heading: "Post-Launch Support & Maintenance",
    content:
      "Our commitment doesn't end at launch. We offer ongoing maintenance and support, addressing updates, improvements, and any emerging issues to keep your app running at its best.",
  },
];

export default MobileApp;
