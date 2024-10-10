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
import { AndroidFAQ } from "@/data/faq/FAQ";
import ServiceLayout from "../service-layout/ServiceLayout";
import Process from "@/components/shared/process-slider";
// import Loader from "@/helpers/Loader";
import { NextSeo } from "next-seo";

const AndroidDevelopment = () => {
  // const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <NextSeo
        title="Best Android App Development Company | Vcana Global"
        description="Vcana Global, the top Android app development company, delivers innovative
solutions for your mobile app needs. Trust us for excellence."
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "android app development company, custom android app development services, hire android app developers ",
          },
        ]}
        canonical="https://www.vcanaglobal.com/services/android-app-development"
      />
      <ServiceLayout bannerData={bannerData}>
        <h1 className="d-none">Android App Development</h1>

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
                    "https://vcana-website-assets.s3.amazonaws.com/images/services/android/app development.webp"
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
                  Your Ideal Android App Awaits -
                  <span> Expert Android App Development </span> Company
                </h2>
                <p className={`sm:text-center text-md-start `}>
                  Welcome to Vcana Global, where innovation meets expertise in
                  Android app development. In the rapidly evolving digital
                  landscape, Android apps have emerged as indispensable tools,
                  bridging the gap between businesses and individuals. Our
                  dedicated team of seasoned developers and creative designers
                  is committed to delivering Android applications that are
                  nothing short of exceptional.
                </p>
                <p className={`sm:text-center text-md-start `}>
                  In this digital era, your Android app is more than just
                  software; it's a gateway to connect, engage, and thrive. We
                  take pride in transforming your vision into a user-friendly
                  reality seamlessly integrated with the Android ecosystem.
                </p>
                <p className={`sm:text-center text-md-start `}>
                  Recognizing that one size doesn't fit all, at Vcana Global, we
                  approach each project as a unique opportunity to craft
                  tailored solutions that align with your distinct requirements.
                  Our focus extends beyond mere functionality, emphasizing
                  aesthetically pleasing and intuitive user experiences.
                </p>
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
                      Explore Our Range of
                      <span> Business-Transforming </span>
                      Android Solutions
                    </h2>
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

          {/*technology  section start */}
          <div className={`${Styles.technologybg} `}>
            <Container>
              <Row className={` ${Styles.headChoose}  `}>
                <Col md={12} className={`${Styles.mainHeading}  `}>
                  <div className="short_heading">TECHNOLOGIES WE USE</div>

                  <hr />
                  <h2 className={`mt-3 px-md-4 px-sm-4 px-lg-0`}>
                    Technologies Used for
                    <span> Android App Development</span>
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
                    APP DEVELOPMENT LANGUAGES
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

                  <h3 className={`${Styles.boxheading} short_heading`}>
                    CUSTOM ANDROID DEVELOPMENT LIBRARIES
                  </h3>
                  <hr />
                  <div className={`${Styles.boxbg} `}>
                    {AndroidData?.map((data) => {
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
                    APP DEVELOPMENT ENVIRONMENTS
                  </h3>
                  <hr />
                  <div className={`${Styles.boxbg} `}>
                    {EnviornmentData?.map((data) => {
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
                    ANDROID DEVELOPMENT TOOLS
                  </h3>
                  <hr />
                  <div className={`${Styles.boxbg} `}>
                    {ToolsData?.map((data) => {
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
          {/* here is the CHOOSE US  section start  */}
          <div className={Styles.whychoseusbg}>
            <Container>
              <div className={Styles.whychoseus}>
                <Row className={` mb-1 cmx ${Styles.main_padding}`}>
                  <Col md={12} className={Styles.benefits}>
                    <div className="short_heading">OUR APPROACH</div>
                    <hr />
                    <h2 className={`mt-3  px-md-4 px-sm-4 px-lg-0`}>
                      Why Choose Vcana Global As
                      <span>
                        {" "}
                        Your Android Mobile <br /> App{" "}
                      </span>
                      Development Agency?
                    </h2>
                  </Col>
                </Row>
                <Row className={` ${Styles.chosesec}  ${Styles.main_padding}`}>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/android/approch.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="text-start"
                    />
                    <h3 className="text-start">Our USP: Our Team</h3>
                    <p className="text-start">
                      Our team comprises of digitally-savvy and dedicated
                      professionals who are committed to ensuring your business
                      achieves unparalleled success.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/android/approch2.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                    />
                    <h3 className="text-start">Flawless Project Delivery</h3>
                    <p className="text-start">
                      Having successfully delivered over 500 digital solutions,
                      we possess the knowledge and expertise required to excel
                      in the realm of Android app development.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/android/approch3.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="text-start">Unmatched Expertise</h3>
                    <p className="text-start">
                      With over 4+ years of experience in the Android
                      development sector, we stand as an prominent emerging
                      leader in this field.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/android/approch4.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="text-start">Unleashing Creativity</h3>
                    <p className="text-start">
                      Experience the brilliance of creativity from our UX/UI
                      experts based in Delaware, USA, coupled with the robust
                      technical prowess of our developers located in India.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/android/approch5.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="text-start">Security and Reliability</h3>
                    <p className="text-start">
                      We prioritize the security and reliability of your app.
                      Our development process includes rigorous testing and
                      adherence to the highest security standards.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <div className={Styles.choosebg}>
                      <h4 className="text-start">
                        Your Journey to App Stardom Begins Here
                      </h4>
                      <p className="text-start">
                        Our team is super excited to build the Android app of
                        your business dreams.
                      </p>
                      <Link
                        href="https://calendly.com/anshul-10/discussion-website-designing-development?month=2023-08"
                        target="_blank"
                      >
                        <Button
                          className={` ${Styles.eAnimat} ${Styles.btnhover}`}
                        >
                          Schedule a Meeting{" "}
                        </Button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          {/* here is the CHOOSE US section end  */}

          <div>
            <Process
              data={processData}
              height={"480px"}
              heading={"Our Unmatched Process"}
              page={
                <h2 className="px-4">
                  Our Secret <span> Recipe for Android Development </span> – Our
                  Unmatched Process
                </h2>
              }
              // desc={
              //   "At Vcana Global, we're dedicated to embracing the latest technological trends. Whether it's harnessing the power of Artificial Intelligence, unlocking the potential of the Internet of Things (IoT), utilizing blockchain, or maximizing the benefits of Cloud Computing, we're your innovation partner."
              // }
              classes1={"container_back"}
              classes2={"mobile_height"}
            />
          </div>
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
              data={AndroidFAQ}
              page={"Android App Development <span>FAQs</span>"}
            />
          </div>
          {/*Frequently Asked Questions  end*/}
        </div>
      </ServiceLayout>
    </>
  );
};

const bannerData = {
  heading: "Android App Development",
  img: "https://vcana-website-assets.s3.amazonaws.com/images/banners/andriod.webp",
};
const GetInTouchData = {
  heading:
    "Wish to Build Your <span> Android App But Need Help Figuring </span>  Out Where to Start? ",
  desc: " ",
  sub_headR: "Send Us A Message",
  sub_headL: "Speak to Us",
  sub_head1: "",
  sub_head2: "At Vcana Global, you are assured to get",
  sub_desc:
    "Our Android app development company is your solution. We specialize in crafting bespoke Android apps that drive customer satisfaction and revenue growth.",
  LI: [
    "Fulfillment of Promises",
    "Unmatched excellence and quality",
    "A dedicated team to support your business endeavors",
  ],
};

const ServiceData = [
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/service.gif",
    heading: "Android UX/UI App Development",
    link: "#",
    content:
      "Our comapny specializes in crafting high-level Android applications that can seamlessly grow and adapt to accommodate thousands of users.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/service2.gif",
    heading: "Enterprise Android Applications",
    link: "#",
    content:
      "Our primary focus revolves around the creation of enterprise-grade Android apps, designed for effortless scalability to cater to the needs of a vast user base.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/service3.gif",
    heading: "Android Application Strategy",
    link: "#",
    content:
      "Leveraging over 4+ years of experience, we have successfully delivered a myriad of applications. We are well-equipped to provide strategic guidance and support to ensure your triumph in the competitive landscape.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/service4.gif",
    heading: "Android Application Design",
    link: "#",
    content:
      "Our Android app development experts excel in crafting user-friendly designs that not only enhance user engagement but also bring a sense of delight to the user experience.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/service5.gif",
    heading: "Innovation and Quality Assurance",
    link: "#",
    content:
      "When it comes to Android app testing, we pride ourselves on offering some of the most advanced testing and quality assurance services available, setting us apart from other mobile app development companies.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/service6.gif",
    heading: "Ongoing Support and Maintenance",
    link: "#",
    content:
      "Publishing your Android app is just the initial step in your journey. We are committed to the long-term success of your application. Our team provides ongoing maintenance, monitoring, and optimization to ensure top-notch performance",
  },
];
const processData = [
  {
    id: 1,
    color: "#254194",
    heading: "Concept Validation",
    content:
      "Our journey commences with Phase Zero, a critical step in which we validate your app concepts, assessing their viability within the current market landscape.",
  },

  {
    id: 2,
    color: "#F2B721",
    heading: "Structural Blueprint",
    content:
      "In the subsequent phase, we meticulously shape the mobile app's structure, crafting wireframes that serve as visual guides through the user's journey. ",
  },
  {
    id: 3,
    color: "#F4622A",
    heading: "Prototyping Excellence ",
    content:
      "Once the wireframes receive approval, we progress to create a visually appealing prototype for your app, infusing it with aesthetics to deliver stunning results.",
  },
  {
    id: 4,
    color: "#254194",
    heading: "Android App Development",
    content:
      "Our development phase kicks off, leveraging the best practices outlined by Google's app development protocols to create your Android app.",
  },
  {
    id: 5,
    color: "#F2B721",
    heading: "Stringent Testing and Quality Assurance",
    content:
      "We subject the Android app to rigorous testing, meticulously identifying and rectifying any bugs or issues that could potentially disrupt the seamless user experience.",
  },
  {
    id: 6,
    color: "#F4622A",
    heading: "Go-Live and Ongoing Maintenance ",
    content:
      "Finally, we will launch your Android app on the Google Play store platform followed by our commitment to provide maintenance services to ensure its continuous excellence.",
  },
];

// const SmartData = [
//   {
//     height: "220px",
//     img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/smart.png",
//     name: "Android SDK",
//   },
//   {
//     height: "220px",
//     img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/smart2.png",
//     name: "Android Annotations",
//   },
//   {
//     height: "220px",
//     img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/smart3.png",
//     name: "OpenGL",
//   },
//   {
//     height: "220px",
//     img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/smart4.png",
//     name: "Sherlock Action Bar",
//   },
//   {
//     height: "220px",
//     img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/smart5.png",
//     name: "Titanium",
//   },
// ];

const LanguageData = [
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/app.png",
    name: "C/C++",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/app2.png",
    name: " JAVA",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/app3.png",
    name: "KOTLIN",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/app4.png",
    name: " C#",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/app5.png",
    name: "PYTHON",
  },
];

const AndroidData = [
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/custom.png",
    name: "DAGGER 2",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/custom2.png",
    name: "RETROFIT",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/custom3.png",
    name: "PICASSO",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/custom4.png",
    name: "GLIDE",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/custom5.png",
    name: "ZXING",
  },
];

const EnviornmentData = [
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/envi.png",
    name: "ANDROID STUDIO",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/envi2.png",
    name: "GAMEMAKER STUDIO 2",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/envi3.png",
    name: "AVD MANAGER",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/envi4.png",
    name: "ECLIPSE",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/envi5.png",
    name: "FABRIC",
  },
];
const ToolsData = [
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/tools.png",
    name: "Android SDK",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/tools2.png",
    name: "Android NDK",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/tools3.png",
    name: "ARCore",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/tools4.png",
    name: "Android Auto",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/tools5.png",
    name: "Google Fit SDK",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/tools6.png",
    name: "SQLite",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/tools7.png",
    name: "Realm DB",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/tools8.png",
    name: "ORMLite",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/tools9.png",
    name: "Berkeley DB",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/android/tools10.png",
    name: "Couchbase Lite",
  },
];
export default AndroidDevelopment;
