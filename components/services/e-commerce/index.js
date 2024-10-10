import React from "react";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./index.module.css";
import Button from "react-bootstrap/Button";
import { EcommerceFAQ } from "@/data/faq/FAQ";
import Image from "next/image";
import GetInTouch from "@/components/shared/getInTouch";
import ServiceCard from "@/components/shared/serviceCard";
import FAQ from "@/components/shared/faq";
import Testimonial from "@/components/shared/testimonial";
import ServiceLayout from "../service-layout/ServiceLayout";
import Process from "@/components/shared/process-slider";
// import Loader from "@/helpers/Loader";
import { NextSeo } from "next-seo";

const Ecommerce = () => {
  return (
    <>
      <NextSeo
        title="ecommerce website development company | Vcana Global"
        description="Discover Vcana Global, your leading ecommerce website development company. Transform your online presence with our cutting-edge solutions and expert guidance."
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              " ecommerce website development, ecommerce development agency, ecommerce website development services ",
          },
        ]}
        canonical="https://www.vcanaglobal.com/services/ecommerce-website-development"
      />
      <ServiceLayout bannerData={bannerData}>
        <h1 className="d-none">E-commerce Website Development Services</h1>

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
                    "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/1st-image.webp"
                  }
                  width={400}
                  height={687}
                  //loader={Loader}
                  alt="nb"
                />
              </Col>
              <Col md={12} sm={12} lg={12} xl={7} className={Styles.herotext}>
                <h2
                  className={`${Styles.mainHedding1}  text-lg-start text-sm-center px-md-4 px-sm-4 px-lg-0`}
                >
                  Elevate Your
                  <span> E-commerce Business with Vcana Global’s Expert </span>
                  Website Development Services
                </h2>
                <p className={` sm:text-center text-md-start `}>
                  In today's digital age, a commanding online presence isn't
                  merely a choice; it's an absolute necessity for the success of
                  any e-commerce enterprise. In the bustling realm of online
                  retail, the key to stand out lies in owning a meticulously
                  designed and effortlessly navigable website. This is precisely
                  where the expertise of seasoned professionals in the field of
                  e-commerce website development becomes invaluable.
                </p>
                <p className={` sm:text-center text-md-start `}>
                  {" "}
                  Welcome to Vcana Global, where we specialize in creating
                  custom e-commerce websites that empower your business and
                  engage your customers. Our dedicated team of developers is
                  committed to delivering original, tailored solutions that set
                  your online store apart from the competition.
                </p>
                <p className={`sm:text-center text-md-start `}>
                  We take pride in our unique approach to e-commerce website
                  development, ensuring that your website is distinctive and
                  fully optimized for success.
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
                    <div className="short_heading">Services</div>

                    <hr />
                    <h2 className={`mt-3 mb-2 px-md-4 px-sm-4 px-lg-0`}>
                      Explore Our Revenue Driving
                      <span> Web-Based Business Services</span>
                    </h2>
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

          {/* here is the CHOOSE US  section start  */}
          <Container>
            <div>
              <div className={Styles.whychoseus}>
                <Row className={` mb-1 cmx ${Styles.main_padding}`}>
                  <Col md={12} className={Styles.benefits}>
                    <div className="short_heading">WHY CHOOSE US</div>
                    <hr />
                    <h2 className={` mt-3  px-md-4 px-sm-4 px-lg-0`}>
                      Why Choose Vcana Global -<span> the Edge We Offer</span>
                    </h2>
                  </Col>
                </Row>
                <Row className={` ${Styles.chosesec}  ${Styles.main_padding}`}>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/dedicatedTeam.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="text-start"
                    />
                    <h3 className="text-start">Dedicated Team</h3>
                    <p className="text-start">
                      Our expert team is passionate about e-commerce and is
                      committed to your success.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/tailoredSolutions.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                    />
                    <h3 className="text-start">Tailored Solutions</h3>
                    <p className="text-start">
                      We understand that one size doesn't fit all. Our solutions
                      are customized to your brand and your audience.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/resultsDriven.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="text-start">Results-Driven</h3>
                    <p className="text-start">
                      We focus on delivering results. Your success is our
                      success, and we work tirelessly to achieve it.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/competitivePricing.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="text-start">Competitive Pricing</h3>
                    <p className="text-start">
                      Our competitive pricing model ensures you receive
                      exceptional value for your investment without compromising
                      on quality or functionality.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/transparency1.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="text-start">Transparency</h3>
                    <p className="text-start">
                      We believe in clear communication and transparency
                      throughout the development process.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <div className={Styles.choosebg}>
                      <h4 className="text-start text-white">
                        Ready to revolutionize your online business?
                      </h4>
                      <p className="text-start">Take the first step</p>
                      <div className={Styles.eAnimat}>
                        <Link href="#contact">
                          <Button className={Styles.btnhover}>
                            Contact Us
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
          {/* here is the CHOOSE US section end  */}
          {/* here is the process section start  */}
          <div>
            <Process
              data={processData}
              height={"410px"}
              heading={"Our Proven Process"}
              page={
                <h2 className="px-4">
                  Our E-commerce Website
                  <span> Development Process</span>
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

          {/* here is the tools section start  */}
          <div className={`${Styles.technologybg} `}>
            <Container>
              <Row className={` ${Styles.headChoose} `}>
                <Col
                  md={12}
                  className={`${Styles.mainHeading} ${Styles.main_padding} `}
                >
                  <div className="short_heading">Tools & Technologies</div>

                  <hr />
                  <h2 className={`mt-3 mb-2 px-md-4 px-sm-4 px-lg-0`}>
                    Tools And Technologies
                    <span> We Use in E-commerce Website </span> Development
                  </h2>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row
                className={`${Styles.rowChoose231} ${Styles.main_padding} cmx`}
              >
                <div className={`${Styles.boxbg1} `}>
                  <h3
                    className={`${Styles.boxheading} short_heading fw-bold fs-5`}
                  >
                    E-COMMERCE PLATFORMS
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
                            <h4 className={`${Styles.headingCARD2} pt-2 pb-0`}>
                              {data?.name}
                            </h4>
                          </div>
                        </Col>
                      );
                    })}
                  </div>

                  <h3
                    className={`${Styles.boxheading} short_heading fw-bold fs-5`}
                  >
                    PAYMENT GATEWAYS
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

                  <h3
                    className={`${Styles.boxheading} short_heading fw-bold fs-5`}
                  >
                    APPLICATION PROGRAMMING INTERFACES (API)
                  </h3>
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

                  <h3
                    className={`${Styles.boxheading} short_heading fw-bold fs-5`}
                  >
                    SECURITY
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
                  <h3
                    className={`${Styles.boxheading} short_heading fw-bold fs-5`}
                  >
                    HOSTING AND CLOUD SERVICES
                  </h3>
                  <hr />
                  <div className={`${Styles.boxbg} `}>
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

                  <h3
                    className={`${Styles.boxheading} short_heading fw-bold fs-5`}
                  >
                    ANALYTICS AND TRACKING
                  </h3>
                  <hr />
                  <div className={`${Styles.boxbg} `}>
                    {AnalyticsData?.map((data) => {
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
              data={EcommerceFAQ}
              page={"E-commerce Services <span>FAQs</span>"}
            />
          </div>
          {/*Frequently Asked Questions  end*/}
        </div>
      </ServiceLayout>
    </>
  );
};
const bannerData = {
  heading: "E-commerce Website Development",
  img: "https://vcana-website-assets.s3.amazonaws.com/images/banners/ecommerce.webp",
};

const GetInTouchData = {
  heading: "Ready to Elevate Your <span> E-commerce  Venture? <span>",
  desc: " ",
  sub_headR: "Send Us A Message",
  sub_headL: "Speak to Us",
  sub_head1: "",
  sub_head2: "At Vcana Global, you are assured to get ",
  sub_desc:
    "Contact Vcana Global today to discuss your project, and let's start building your online success story together.",
  LI: [
    "Fulfillment of Promises",
    "Unmatched excellence and quality",
    "A dedicated team to support your business endeavors",
  ],
};
const ServiceData = [
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/cMSIntegration.gif",
    heading: "CMS Integration",
    content:
      "Take the reins of your digital storefront with confidence. We integrate user-friendly CMS platforms like WordPress, Shopify, Magento, or WooCommerce to simplify the management of product listings, content, and updates.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/analyticsandReporting.gif",
    heading: "Analytics and Reporting",
    content:
      "In the digital wilderness, data is your compass. We equip you with advanced tracking tools and analytics, guiding your journey. Monitor website performance, user behavior, and sales data, enabling data-driven decisions for continuous improvement. ",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/securityFeatures.gif",
    heading: "Security Features",
    content:
      "Customers' trust is not just earned; it's fortified. We erect digital fortresses around your online kingdom, implementing top-tier measures like SSL certificates, encryption, and strict compliance with industry standards like PCI DSS.",
  },

  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/productCatalogDevelopment.gif",
    heading: "Product Catalog Development",
    content:
      "Our expert artisans curate product listings that captivate. Each item is meticulously organized, adorned with compelling descriptions, high-quality images, accurate pricing, and efficient inventory management.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/customerSupportFeatures.gif",
    heading: "Customer Support Features",
    content:
      "Enhance customer support with features like live chat, contact forms, and FAQs. We're here to assist, boosting customer satisfaction and ensuring a smooth shopping voyage. ",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/shippingandLogisticsIntegration.gif",
    heading: "Shipping and Logistics Integration",
    content:
      "Efficiently manage shipping and logistics. We integrate shipping solutions to calculate shipping costs, manage orders, and provide customers with accurate delivery estimates. ",
  },
];

const processData = [
  {
    color: "#254194",
    heading: "Discovery",
    content:
      "At the heart of every successful e-commerce venture lies a thorough understanding. We start by understanding your business, target audience, and goals to create a tailored plan.",
  },

  {
    color: "#F2B721",
    heading: "Design",
    content:
      "Armed with insights gathered during the discovery phase, our creative design team steps in. Our design team creates wireframes and mockups to visualize the website's layout and user interface.",
  },
  {
    color: "#F4622A",
    heading: "Development",
    content:
      "With the blueprint in hand, our skilled developers take center stage. Our developers bring the design to life, incorporating functionality and features.",
  },
  {
    color: "#254194",
    heading: "Testing",
    content:
      "Before your website goes live, it undergoes rigorous testing. Our quality assurance experts meticulously evaluate every aspect, from functionality to security and performance.",
  },

  {
    color: "#F2B721",
    heading: "Launch",
    content:
      "It's the moment you've been waiting for! Once you're satisfied, we launch your e-commerce website for the world to see.",
  },
  {
    color: "#F4622A",
    heading: "Launch and Beyond",
    content:
      "But our commitment to your success doesn't end with the launch. We're your digital partners, ready to accompany you on your ongoing voyage to success.",
  },
];

const TechData = [
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/icon.png",
    name: "WOOCOMMERCE",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/icon2.png",
    name: "BIGCOMMERCE",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/icon3.png",
    name: "MAGENTO",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/icon4.png",
    name: "SHOPIFY",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/icon5.png",
    name: "OPEN DART",
  },
];
const BackendData = [
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/payment.png",
    name: "PAYPAL",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/payment2.png",
    name: "STRIPE",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/payment3.png",
    name: "SQUARE",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/payment4.png",
    name: "AUTHORIZE",
  },
];
const IdeData = [
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/api.png",
    name: "PAYMENT APIS",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/api2.png",
    name: "SOCIAL MEDIA ",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/api3.png",
    name: "SSL CERTIFICATES",
  },
];

const FrontData = [
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/catefi.png",
    name: "SSL CERTIFICATES",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/catefi2.png",
    name: "FIREWALLS",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/catefi3.png",
    name: "PCI COMPLIANCE",
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
];

const AnalyticsData = [
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/track.png",
    name: "GOOGLE ANALYTICS",
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommerce/track2.png",
    name: "HEATMAPS AND A/B TESTING TOOLS",
  },
];
export default Ecommerce;
