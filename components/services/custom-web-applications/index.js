import React from "react";
// import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./index.module.css";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import GetInTouch from "@/components/shared/getInTouch";
import ServiceCard from "@/components/shared/serviceCard";
import FAQ from "@/components/shared/faq";
import Testimonial from "@/components/shared/testimonial";
import { DigitalMarketingFAQ } from "@/data/faq/FAQ";
import ServiceLayout from "../service-layout/ServiceLayout";
import Process from "@/components/shared/process-slider";
// import Loader from "@/helpers/Loader";

const CustomWebApplications = () => {
  // const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <ServiceLayout bannerData={bannerData}>
        <div className={Styles.main_services}>
          {/* hero is the services section start */}
          <Container>
            <Row className={`py-4 py-xl-0 cmx ${Styles.main_padding}`}>
              <Col
                md={12}
                sm={12}
                lg={12}
                xl={4}
                className={` ${Styles.imgBox}`}
              >
                <Image
                  className={Styles.de}
                  src={
                    "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/1st-img.webp"
                  }
                  width={400}
                  height={687}
                  //loader={Loader}
                  alt="nb"
                />
              </Col>
              <Col md={12} sm={12} lg={12} xl={8} className={Styles.herotext}>
                <h1
                  className={`${Styles.mainHedding1}  text-lg-start text-sm-center`}
                >
                  Revolutionize Your
                  <span> Business with Cutting-edge Web App </span> Development
                </h1>
                <p className={`sm:text-center text-md-start `}>
                  Vcana Global is a dynamic web application development company
                  that excels in tackling the most demanding web application
                  development projects. Our expertise lies in crafting
                  tailor-made web applications that perfectly align with your
                  business requirements.
                </p>
                <p className={`sm:text-center text-md-start `}>
                  Our approach is simple yet effective. We start by gaining a
                  deep understanding of your unique needs and objectives. Then,
                  we customize the application to align perfectly with your
                  requirements. Finally, we ensure a seamless deployment,
                  providing ongoing support to guarantee your success.
                </p>
                <p className={`sm:text-center text-md-start `}>
                  Imagine a future where your business operates efficiently,
                  your data is secure, and you have a competitive edge in your
                  industry. Don't let outdated software hold you back; embrace
                  the future with custom web applications tailored specifically
                  for your business.
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
                    <h3 className=" fw-bold fs-5 ">SERVICES</h3>

                    <hr />
                    <h1
                      className={`${Styles.mainHedding} ${Styles.mainHeddingtw} mt-3 mb-2`}
                    >
                      Our services span a diverse
                      <span> spectrum, encompassing </span>
                    </h1>
                  </Col>
                  <Row
                    className={`mt-4 ${Styles.main_padding} ${Styles.servicebox}`}
                  >
                    <ServiceCard data={ServiceData} />
                  </Row>
                </Row>
              </div>
            </Container>
          </div>

          {/* here is the services section end */}

          {/* here is the Technology Uses section end */}
          <div className={`${Styles.technologybg} `}>
            <Container>
              <Row className={`py-4 py-xl-0 cmx ${Styles.main_padding}`}>
                <Col>
                  <div className={`py-4 py-xl-0 cmx ${Styles.ecosystembg}`}>
                    <h6>
                      Discover how our custom web applications can transform
                      your business
                    </h6>
                    <Button className={`${Styles.btnecostem}`}>
                      Learn More
                    </Button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col
                  md={12}
                  className={`${Styles.mainHeading} ${Styles.main_padding} `}
                >
                  <h3 className=" fw-bold  ">Technology Uses</h3>

                  <hr />
                  <h1
                    className={`${Styles.mainHedding} ${Styles.mainHeddingtw} mt-3`}
                  >
                    Our Suite of
                    <span> Technological Tools </span>
                  </h1>
                </Col>
              </Row>
              <Row className={` ${Styles.main_padding}  `}>
                <Col md={4} xs={6} sm={6} lg={3} xl={2}>
                  <div className={` ${Styles.techbox} `}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/tech.png"
                      }
                      width={60}
                      height={60}
                      //loader={Loader}
                      alt="nb"
                    />
                    <h5>Angular JS </h5>
                  </div>
                </Col>
                <Col md={4} xs={6} sm={6} lg={3} xl={2}>
                  <div className={` ${Styles.techbox} `}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/tech.png"
                      }
                      width={60}
                      height={60}
                      //loader={Loader}
                      alt="nb"
                    />
                    <h5>Angular JS </h5>
                  </div>
                </Col>
                <Col md={4} xs={6} sm={6} lg={3} xl={2}>
                  <div className={` ${Styles.techbox} `}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/tech.png"
                      }
                      width={60}
                      height={60}
                      //loader={Loader}
                      alt="nb"
                    />
                    <h5>Angular JS </h5>
                  </div>
                </Col>
                <Col md={4} xs={6} sm={6} lg={3} xl={2}>
                  <div className={` ${Styles.techbox} `}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/tech.png"
                      }
                      width={60}
                      height={60}
                      //loader={Loader}
                      alt="nb"
                    />
                    <h5>Angular JS </h5>
                  </div>
                </Col>
                <Col md={4} xs={6} sm={6} lg={3} xl={2}>
                  <div className={` ${Styles.techbox} `}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/tech.png"
                      }
                      width={60}
                      height={60}
                      //loader={Loader}
                      alt="nb"
                    />
                    <h5>Angular JS </h5>
                  </div>
                </Col>
                <Col md={4} xs={6} sm={6} lg={3} xl={2}>
                  <div className={` ${Styles.techbox} `}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/tech.png"
                      }
                      width={60}
                      height={60}
                      //loader={Loader}
                      alt="nb"
                    />
                    <h5>Angular JS </h5>
                  </div>
                </Col>
                <Col md={4} xs={6} sm={6} lg={3} xl={2}>
                  <div className={` ${Styles.techbox} `}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/tech.png"
                      }
                      width={60}
                      height={60}
                      //loader={Loader}
                      alt="nb"
                    />
                    <h5>Angular JS </h5>
                  </div>
                </Col>
                <Col md={4} xs={6} sm={6} lg={3} xl={2}>
                  <div className={` ${Styles.techbox} `}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/tech.png"
                      }
                      width={60}
                      height={60}
                      //loader={Loader}
                      alt="nb"
                    />
                    <h5>Angular JS </h5>
                  </div>
                </Col>
                <Col md={4} xs={6} sm={6} lg={3} xl={2}>
                  <div className={` ${Styles.techbox} `}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/tech.png"
                      }
                      width={60}
                      height={60}
                      //loader={Loader}
                      alt="nb"
                    />
                    <h5>Angular JS </h5>
                  </div>
                </Col>
                <Col md={4} xs={6} sm={6} lg={3} xl={2}>
                  <div className={` ${Styles.techbox} `}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/tech.png"
                      }
                      width={60}
                      height={60}
                      //loader={Loader}
                      alt="nb"
                    />
                    <h5>Angular JS </h5>
                  </div>
                </Col>
                <Col md={4} xs={6} sm={6} lg={3} xl={2}>
                  <div className={` ${Styles.techbox} `}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/tech.png"
                      }
                      width={60}
                      height={60}
                      //loader={Loader}
                      alt="nb"
                    />
                    <h5>Angular JS </h5>
                  </div>
                </Col>
                <Col md={4} xs={6} sm={6} lg={3} xl={2}>
                  <div className={` ${Styles.techbox} `}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/tech.png"
                      }
                      width={60}
                      height={60}
                      //loader={Loader}
                      alt="nb"
                    />
                    <h5>Angular JS </h5>
                  </div>
                </Col>
                <Col md={4} xs={6} sm={6} lg={3} xl={2}>
                  <div className={` ${Styles.techbox} `}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/tech.png"
                      }
                      width={60}
                      height={60}
                      //loader={Loader}
                      alt="nb"
                    />
                    <h5>Angular JS </h5>
                  </div>
                </Col>
                <Col md={4} xs={6} sm={6} lg={3} xl={2}>
                  <div className={` ${Styles.techbox} `}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/tech.png"
                      }
                      width={60}
                      height={60}
                      //loader={Loader}
                      alt="nb"
                    />
                    <h5>Angular JS </h5>
                  </div>
                </Col>
                <Col md={4} xs={6} sm={6} lg={3} xl={2}>
                  <div className={` ${Styles.techbox} `}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/tech.png"
                      }
                      width={60}
                      height={60}
                      //loader={Loader}
                      alt="nb"
                    />
                    <h5>Angular JS </h5>
                  </div>
                </Col>
                <Col md={4} xs={6} sm={6} lg={3} xl={2}>
                  <div className={` ${Styles.techbox} `}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/tech.png"
                      }
                      width={60}
                      height={60}
                      //loader={Loader}
                      alt="nb"
                    />
                    <h5>Angular JS </h5>
                  </div>
                </Col>
                <Col md={4} xs={6} sm={6} lg={3} xl={2}>
                  <div className={` ${Styles.techbox} `}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/tech.png"
                      }
                      width={60}
                      height={60}
                      //loader={Loader}
                      alt="nb"
                    />
                    <h5>Angular JS </h5>
                  </div>
                </Col>
                <Col md={4} xs={6} sm={6} lg={3} xl={2}>
                  <div className={` ${Styles.techbox} `}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/tech.png"
                      }
                      width={60}
                      height={60}
                      //loader={Loader}
                      alt="nb"
                    />
                    <h5>Angular JS </h5>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          {/* here is the Technology Uses section end */}

          {/* here is the CHOOSE US  section start  */}
          <div className={Styles.whychoseusbg}>
            <Container>
              <div className={Styles.whychoseus}>
                <Row className={` mb-1 cmx ${Styles.main_padding}`}>
                  <Col md={12} className={Styles.benefits}>
                    <h3>Why choose Us</h3>
                    <hr />
                    <h1 className={`${Styles.mainHedding} mt-3  `}>
                      Why Choose Vcana Global for
                      <span> Custom Web App Development </span>- The Advantages
                      We Deliver
                    </h1>
                  </Col>
                </Row>
                <Row className={` ${Styles.chosesec}  ${Styles.main_padding}`}>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/choose.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="text-start"
                    />
                    <h3 className="text-start">Flexible Engagement Models</h3>
                    <p className="text-start">
                      Our array of engagement models is designed to adapt to the
                      unique requirements of your project, whether it's a
                      one-time development effort or an ongoing collaboration.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/choose2.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                    />
                    <h3 className="text-start">Full-Stack Expertise</h3>
                    <p className="text-start">
                      Our proficiency spans both front-end and back-end
                      development, empowering us to deliver holistic,
                      well-rounded web applications.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/choose3.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="text-start">Global Accessibility</h3>
                    <p className="text-start">
                      Our services are accessible to clients worldwide,
                      affording you a global perspective and diverse expertise
                      to cater to your needs.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/choose4.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="text-start">Continuous Innovation</h3>
                    <p className="text-start">
                      We keep abreast of industry advancements and leverage
                      emerging technologies such as automation, microservices,
                      and containers to furnish you with state-of-the-art
                      solutions.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/choose5.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="text-start">Risk Mitigation</h3>
                    <p className="text-start">
                      Our strategic approach minimizes downtime and offers a
                      swift recovery plan by distributing workloads and data
                      across robust cloud platforms.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/choose6.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="text-start">Robust Security</h3>
                    <p className="text-start">
                      Our commitment to safeguarding your web application and
                      user data is reflected in the implementation of robust
                      security measures, fortifying your digital assets against
                      potential threats and vulnerabilities.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          {/* here is the CHOOSE US section end  */}

          <div>
            <Process
              data={processData}
              height={"410px"}
              heading={"Vision-Driven Steps"}
              page={
                <h1>
                  Our Custom Web App <span> Development Process </span>
                </h1>
              }
              // desc={
              //   "At Vcana Global, we're dedicated to embracing the latest technological trends. Whether it's harnessing the power of Artificial Intelligence, unlocking the potential of the Internet of Things (IoT), utilizing blockchain, or maximizing the benefits of Cloud Computing, we're your innovation partner."
              // }
              classes1={"container_back"}
              classes2={"box_height"}
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
              data={DigitalMarketingFAQ}
              page={"Business Services <span>FAQs</span>"}
            />
          </div>
          {/*Frequently Asked Questions  end*/}
        </div>
      </ServiceLayout>
    </>
  );
};

const bannerData = {
  heading: "APPLICATION DEVELOPMENT",
  img: "https://vcana-website-assets.s3.amazonaws.com/images/banners/custom.webp",
};
const GetInTouchData = {
  heading: "Couldn't Find the Exact App <span> You're Searching For? </span>",
  desc: " ",
  sub_headR: "Send Us A Message",
  sub_headL: "Speak to Us",
  sub_head1: "",
  sub_head2: "At Vcana Global, you are assured to get ",
  sub_desc:
    "Don’t hesitate to drop us a line. We're confident we can assist you in any case!",
  LI: [
    "Fulfillment of Promises",
    "Unmatched excellence and quality",
    "A dedicated team to support your business endeavors",
  ],
};

const ServiceData = [
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/service.gif",
    heading: "Web Portal Development",
    link: "#",
    content:
      "We specialize in crafting a wide array of web and online portals, which encompass content management systems (CMS), eCommerce platforms, microsites, B2C and B2B portals. Our portals boast user-friendly interfaces that adhere to stringent usability standards.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/service2.gif",
    heading: "eCommerce Development",
    link: "#",
    content:
      "Our eCommerce professionals harness the capabilities of platforms such as Shopify, Magento, and custom frameworks to fashion, develop, and optimize eCommerce stores that are tailor-made to suit the unique preferences of your clientele.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/service3.gif",
    heading: "CMS Development",
    link: "#",
    content:
      "We design feature-rich, intuitive custom CMS solutions that enhance website management efficiency. These solutions empower administrators to seamlessly customize content and design as needed.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/service4.gif",
    heading: "Enterprise Web Development",
    link: "#",
    content:
      "Our seasoned developers adhere to industry best practices to bring your vision to fruition, delivering responsive enterprise web applications that captivate your customers and foster business expansion.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/service5.gif",
    heading: "SaaS Application Development",
    link: "#",
    content:
      "Our proficient SaaS developers leverage cutting-edge technologies to engineer sophisticated and scalable solutions. These solutions empower teams, streamline operations, and enhance the overall customer experience.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/customweb/service6.gif",
    heading: "AI-Enhanced Web Apps",
    link: "#",
    content:
      "We merge AI and web app development for groundbreaking solutions. Our skilled team of developers and AI specialists ensures that your project propels your business forward with innovation.",
  },
];
const processData = [
  {
    id: 1,
    color: "#254194",
    heading: "Web App Strategy",
    content:
      "When project kickoff, we gather business insights, requirements, and conduct market research to shape your web app's strategic direction.",
  },

  {
    id: 2,
    color: "#F2B721",
    heading: "Creative Wireframe",
    content:
      "We design wireframes for your web app's structure, emphasizing user flow. We validate these wireframes by engaging stakeholders to confirm alignment with project objectives.",
  },
  {
    id: 3,
    color: "#F4622A",
    heading: "UI/UX Design ",
    content:
      "Our team creates an attractive UI, focusing on color, typography, and graphics. We develop an intuitive UX with interactive prototypes for visualization.",
  },
  {
    id: 4,
    color: "#254194",
    heading: "Web App Development",
    content:
      "We bring designs to life with Front-end development using HTML, CSS, and JavaScript . Back-end crafts server logic, databases, and APIs. Thereafter we do integration to connects external services and APIs, for payments and social features.",
  },
  {
    id: 5,
    color: "#F2B721",
    heading: "QA & Testing",
    content:
      "We conduct unit, integration, UAT, and performance testing to ensure functionality, integration, user satisfaction, and robust performance in various conditions.",
  },
  {
    id: 6,
    color: "#F4622A",
    heading: "Beta Launching/MVP Launching",
    content:
      "Beta testing collects feedback for iterative improvements. MVP,is released to a broader audience focused on core features for insights and feedback.",
  },
  {
    id: 7,
    color: "#254194",
    heading: "Final Launch: ",
    content:
      "This stage involves polishing, optimizing, issue resolution, and security assurance. Then the web app is launched on production servers or cloud platforms to make it accessible to users.",
  },
  {
    id: 8,
    color: "#F2B721",
    heading: "Support",
    content:
      "We offer user training, ongoing maintenance, and responsive customer support, ensuring a seamless web app experience and effective utilization.",
  },
];
export default CustomWebApplications;
