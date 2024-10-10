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
import { DigitalMarketingFAQ } from "@/data/faq/FAQ";
import ServiceLayout from "../service-layout/ServiceLayout";
import Process from "@/components/shared/process-slider";
// import Loader from "@/helpers/Loader";
import { NextSeo } from "next-seo";

const DigitalMarketing = () => {
  // const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <NextSeo
        title="Boost Your Business with a Digital Marketing Company | Vcana Global"
        description="Boost your business with Vcana Global, a leading digital marketing company.
Transform online presence, enhance sales, and thrive with SEO, ads, and content."
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              " digital marketing company, digital marketing agency, seo digital marketing ",
          },
        ]}
        canonical="https://www.vcanaglobal.com/services/digital-marketing"
      />
      <ServiceLayout bannerData={bannerData}>
        <h1 className="d-none">digital marketing services</h1>

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
                    "https://vcana-website-assets.s3.amazonaws.com/images/services/digital/1st-image.webp"
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
                  Drive Your
                  <span> Business Growth with Performance-</span>Based Digital
                  Marketing
                </h2>
                <p className={` sm:text-center text-md-start `}>
                  In a world driven by the digital realm, establishing a strong
                  online presence is paramount for business success. At Vcana
                  Global, we are your trusted partner in navigating this dynamic
                  digital landscape. Our comprehensive suite of digital
                  marketing services is designed to elevate your brand, engage
                  your audience, and drive measurable results.{" "}
                </p>
                <p className={` sm:text-center text-md-start `}>
                  {" "}
                  Why Digital Marketing Matters? In today's digital age, your
                  online presence is often the first impression customers have
                  of your business. Effective digital marketing isn't just an
                  option; it's a necessity. It allows you to reach your target
                  audience where they spend most of their time—online.
                </p>
                <p className={` sm:text-center text-md-start `}>
                  By partnering with Vcana Global, you're investing in your
                  business's future. We're committed to driving growth,
                  increasing brand visibility, and helping you achieve your
                  digital marketing goals.
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
                    <div className="short_heading">SERVICES</div>

                    <hr />
                    <h2 className={`mt-3 mb-2`}>
                      Our Digital Marketing
                      <span> Services Include</span>
                    </h2>
                  </Col>
                  <Row
                    className={`mt-4 ${Styles.main_padding} ${Styles.servicebox}`}
                  >
                    <ServiceCard
                      data={ServiceData}
                      classes={"digital_marketing"}
                      isBtn={true}
                    />
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
                    <p className="short_heading">WHY CHOOSE US</p>
                    <hr />
                    <h2 className={` mt-3  px-md-4 px-sm-4 px-lg-0`}>
                      Why Choose Vcana Global for Your
                      <span> Digital Marketing Needs?</span>
                    </h2>
                  </Col>
                </Row>
                <Row className={` ${Styles.chosesec}  ${Styles.main_padding}`}>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/digital/chose1.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="text-start"
                    />
                    <h3 className="text-start">Proven Expertise</h3>
                    <p className="text-start">
                      With years of experience and a team of industry experts,
                      we have a proven track record of delivering results for
                      businesses of all sizes.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/digital/chose2.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                    />
                    <h3 className="text-start">Tailored Strategies</h3>
                    <p className="text-start">
                      We understand that every business is unique. Therefore,
                      our strategies are customized to align with your goals,
                      ensuring maximum impact.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/digital/chose3.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="text-start">Data-Driven Approach</h3>
                    <p className="text-start">
                      Our data-driven insights allow us to optimize campaigns
                      continuously, ensuring you get the best ROI for your
                      marketing budget.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/digital/chose4.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="text-start">Multi-Channel Mastery</h3>
                    <p className="text-start">
                      From SEO and content marketing to PPC advertising and
                      social media management, we excel in all facets of digital
                      marketing.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/services/digital/chose5.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="text-start">Transparent Reporting</h3>
                    <p className="text-start">
                      We believe in transparency. You'll have access to
                      real-time performance metrics and reports to track your
                      campaign's success.
                    </p>
                  </Col>
                  <Col md={6} lg={6} xl={4} className={Styles.chooseaim}>
                    <div className={Styles.choosebg}>
                      <h4 className="text-start">
                        Don't wait; your digital success starts here
                      </h4>
                      <p className="text-start">
                        Get started today by reaching out for a free
                        consultation.
                      </p>
                      <Link href="#contact">
                        <Button
                          className={`${Styles.btnhover} ${Styles.eAnimat} `}
                        >
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Container>
          {/* here is the CHOOSE US section end  */}

          <div>
            <Process
              data={processData}
              height={"410px"}
              heading={"Our Proven Process"}
              page={
                <h2 className="px-4">
                  Our Revolutionary <span> Marketing Steps</span>
                </h2>
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
              page={"Digital Marketing  <span>FAQs</span>"}
            />
          </div>
          {/*Frequently Asked Questions  end*/}
        </div>
      </ServiceLayout>
    </>
  );
};

const bannerData = {
  heading: "Digital Marketing Services",
  img: "https://vcana-website-assets.s3.amazonaws.com/images/banners/digitalf.webp",
};
const GetInTouchData = {
  heading:
    "Ready to Unlock Your <span> Brand's Full Potential And Achieve </span>  Digital Success?",
  desc: " ",
  sub_headR: "Send Us A Message",
  sub_headL: "Speak to Us",
  sub_head1: "",
  sub_head2: "At Vcana Global, you are assured to get",
  sub_desc:
    "Contact Vcana Global today, and let's embark on a digital marketing journey. Whether you're a startup looking for a strong online debut or an established brand seeking to expand your digital footprint, we have the expertise to make it happen.",
  LI: [
    "Fulfillment of Promises",
    "Unmatched excellence and quality",
    "A dedicated team to support your business endeavors",
  ],
};

const ServiceData = [
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/digital/SearchEngineOptimization.gif",
    heading: "Search Engine Optimization (SEO)",
    link: "services/search-engine-optimization",
    content:
      "In the digital world, visibility is everything. Improve your website's visibility for top search engine rankings, attract organic traffic and outrank competitors with our SEO expertise.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/digital/PPCManagement.gif",
    heading: "Pay-Per-Click (PPC) Marketing",
    link: "services/pay-per-click",
    content:
      "When you need immediate visibility, PPC Advertising is the answer. Our experts create and manage targeted ad campaigns that ensure your brand’s immediate visibility. We maximize your ad spend to achieve the best ROI.",
  },
  {
    img: "/analytics.gif",
    heading: "Analytics and Reporting",
    link: "",

    content:
      "Our data-driven approach ensures your campaigns are continually optimized for maximum impact. You'll have access to clear, actionable reports.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/digital/ContentWritingAppDevelopment.gif",
    heading: "Content Writing",
    link: "services/content-writing",
    content:
      "Our data-driven approach ensures your campaigns are continually optimized for maximum impact. You'll have access to clear, actionable reports. ",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/digital/SocialMediaMarketing.gif",
    heading: "Social Media Marketing",
    link: "services/social-media-marketing",

    content:
      "Social media platforms are the heart of modern communication. Harness the power of social media platforms to build your brand, engage with customers, and drive conversions with our power packed SMM tactics.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/digital/EmailMarketing.gif",
    heading: "Email Marketing",
    link: "services/email-marketing",

    content:
      "Nurture leads and build lasting relationships through email marketing that resonate with your audience. Our strategies send tailored messages, inform about promotions, and drive conversions. ",
  },
];
const processData = [
  {
    id: 1,
    color: "#254194",
    heading: "Client Onboarding ",
    content:
      "Our journey begins with a deep understanding of client's business, objectives, and target audience.",
  },

  {
    id: 2,
    color: "#F2B721",
    heading: "Market Research ",
    content:
      "Our seasoned team conducts extensive market research to uncover lucrative opportunities and emerging trends.",
  },
  {
    id: 3,
    color: "#F4622A",
    heading: "Strategy Development",
    content:
      "We meticulously craft a customized digital marketing strategy that complements with your goals and KPIs.",
  },
  {
    id: 4,
    color: "#254194",
    heading: "Website Optimization ",
    content:
      "For clients with existing websites, we optimize their website meticulously, focusing on SEO, usability, and mobile compatibility.",
  },
  {
    id: 5,
    color: "#F2B721",
    heading: "Content Strategy ",
    content:
      "Engaging content, including captivating blogs, compelling videos, and more, is our forte, forging a genuine connection with your audience.",
  },
  {
    id: 6,
    color: "#F4622A",
    heading: "Social Media Management",
    content:
      "We cultivate a robust social media presence, adeptly handling content creation and posting.",
  },
  {
    id: 7,
    color: "#254194",
    heading: "Paid Advertising",
    content:
      "Crafting and overseeing potent paid advertising campaigns on key platforms is our expertise.",
  },
  {
    id: 8,
    color: "#F2B721",
    heading: "Email Marketing ",
    content:
      "Our email campaigns excel in nurturing leads and ensuring customer retention.",
  },
  {
    id: 9,
    color: "#F4622A",
    heading: "Analytics Setup",
    content:
      "Cutting-edge tools like Google Analytics are seamlessly integrated to empower data-driven decision-making.",
  },

  {
    id: 10,
    color: "#254194",
    heading: "Strategy Development",
    content:
      "We meticulously craft a customized digital marketing strategy that complements with your goals and KPIs.",
  },
  {
    id: 11,
    color: "#F2B721",
    heading: "Content Distribution ",
    content:
      "We employ a multi-channel approach to maximize the dissemination of your content.",
  },
  {
    id: 12,
    color: "#F4622A",
    heading: "SEO Optimization  ",
    content:
      "Our continuous enhancements in SEO bolster your website's visibility in search engine rankings.",
  },
  {
    id: 13,
    color: "#254194",
    heading: "Reputation Management ",
    content:
      "We vigilantly monitor and manage online reviews and your digital reputation.",
  },
  {
    id: 14,
    color: "#F2B721",
    heading: "Reporting ",
    content:
      "We keep our clients well-informed about campaign performance and outcomes by sharing regular, insightful reports.",
  },
  {
    id: 15,
    color: "#F4622A",
    heading: "Client Communication",
    content:
      "Transparent, open communication is our hallmark, ensuring you are updated on the progress every step of the way.",
  },
  {
    id: 16,
    color: "#254194",
    heading: "A/B Testing ",
    content:
      "For Campaign optimization, we do rigorous A/B testing to ensure superior results.",
  },
  {
    id: 17,
    color: "#F2B721",
    heading: "Website Maintenance ",
    content:
      "We ensure your website remains not only up-to-date but also impenetrably secure.",
  },
  {
    id: 18,
    color: "#F4622A",
    heading: "Client Feedback",
    content:
      "Your satisfaction is paramount and is treasured for our relentless pursuit of improvement.",
  },
];
export default DigitalMarketing;
