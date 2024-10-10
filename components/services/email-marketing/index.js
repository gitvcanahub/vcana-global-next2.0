import React from "react";
import ServiceLayout from "../service-layout/ServiceLayout";
import Styles from "./index.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/shared/faq";
import Testimonial from "@/components/shared/testimonial";
import GetInTouch from "@/components/shared/getInTouch";
import ServiceCard from "@/components/shared/serviceCard";
import Process from "@/components/shared/process-slider";
import { Email_Marketing } from "@/data/faq/FAQ";
import Button from "react-bootstrap/Button";
import { NextSeo } from "next-seo";
// import Loader from "@/helpers/Loader";

const EmailMarketing = () => {
  return (
    <>
      <NextSeo
        title="Top email marketing agency | Marketing Solutions | Vcana Global"
        description="Elevate your brand's email game with Vcana Global, the top email marketing
agency. Tailored marketing solutions for optimal engagement"
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "email marketing services, full service email marketing agency, ecommerce email marketing company",
          },
        ]}
        canonical="https://www.vcanaglobal.com/services/email-marketing"
      />
      <ServiceLayout bannerData={bannerData}>
        <h1 className="d-none">email marketing services</h1>

        <div className={Styles.main_services}>
          {/*hero banner section start*/}
          <Container className={`${Styles.bannerAdjust}`}>
            <Row
              className={`${Styles.main_padding} ${Styles.topdjust} py-4 py-md-0 py-xl-0`}
            >
              <Col
                xl={5}
                md={12}
                className={`${Styles.bannerinfo} ${Styles.new}`}
              >
                <div className={Styles.main_img}>
                  <Image
                    className={Styles.delwares}
                    src={
                      "https://vcana-website-assets.s3.amazonaws.com/images/email/Mask group.png"
                    }
                    width={400}
                    height={487}
                    alt="nb"
                    //loader={Loader}
                  />
                  <div className={Styles.overlay}></div>
                </div>
              </Col>
              <Col xl={7} md={12} className={` ${Styles.impactp} text-start`}>
                <h2
                  className={`${Styles.mainHedding1} ${Styles.main} text-lg-start text-sm-center text-md-center px-md-4 px-sm-4 px-lg-0`}
                >
                  Drive Incredible <span>Returns with Vcana Global’s </span>{" "}
                  Email Marketing Solutions
                </h2>
                <p
                  className={` ${Styles.impactps} sm:text-center text-md-start `}
                >
                  Welcome to Vcana Global, where we redefine excellence in email
                  marketing. Our customized solutions empower businesses of all
                  sizes to extend their reach and engage audience effectively.
                  Bid farewell to generic campaigns and embrace the strength of
                  personalized, data-driven strategies. Whether you're an
                  experienced marketer or a burgeoning entrepreneur, our
                  services are tailored to meet your unique requirements,
                  offering comprehensive insights and a user experience that
                  seamlessly aligns with your goals.
                </p>
                <p
                  className={`  ${Styles.impactps} sm:text-center text-md-start `}
                >
                  Let's revolutionize your email campaigns into potent tools
                  that not only enhance your brand but also deliver unmatched
                  results. Rest assured, our content is free from AI tools
                  detection and plagiarism, ensuring authenticity and innovation
                  in every communication. Partner with us to discover the art of
                  impactful communication that goes beyond the inbox.
                </p>
              </Col>
            </Row>
          </Container>
          {/* hero banner section  end*/}
          {/* Our SEO Services section  start*/}
          <Row className={`${Styles.pinkbgs} ${Styles.main_padding1}`}>
            <Container>
              <Col
                md={12}
                className={`${Styles.mainHeading} ${Styles.serinclude}`}
              >
                <p className="short_heading">Services</p>
                <hr />
                <h2 className="my-3">
                  Our Email <span>Marketing Services</span> Include
                </h2>
              </Col>
              <Container className={`${Styles.bannerinfo}`}>
                <ServiceCard classes={"email_marketing"} data={ServiceData} />
              </Container>
            </Container>
          </Row>
          {/* Our SEO Services section  end*/}
          {/* CTA BUTTON  */}
          {/* <div className={`cmx mt-5 ${Styles.main_padding1} `}>
            <div className={`mt-4 ${Styles.PARTNER}  `}>
              <Container>
                <Row className={`${Styles.cmx} `}>
                  <Col md={12}>
                    <h5>WE PARTNER WITH BRANDS TO</h5>
                    <Image
                      className={Styles.partnertextdeceorationbox}
                      src={"https://vcana-website-assets.s3.amazonaws.com/images/services/textdeceoration.png"}
                      width={141.6}
                      height={3.2}
                      alt="nb"
                    />
                    <h4>Let's Start your SEO Success Story</h4>
                  </Col>
                  <Col md={12} className={Styles.btnr}>
                    <Link href="/contact/#contact">
                      {""}
                      <button>Start Now</button>{" "}
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </div> */}
          {/* WHY CHOOSE US section  start*/}
          <Container>
            <div
              className={`${Styles.your_website} ${Styles.main_padding1} cmx`}
            >
              <p className="short_heading">WHY CHOOSE US</p>
              <hr />
              <h2 className="my-3 text-center">
                <span>Vcana Global's Distinctive</span> Edge
              </h2>
              <Row></Row>
            </div>
          </Container>
          <Container>
            <div
              className={`${Styles.WhyChooseUS} ${Styles.main_padding} ${Styles.whychosemain1}`}
            >
              <Row>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div className={`${Styles.Aprochboxdetails} `}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/email/Expertise that Gets Results.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />
                    <h3>Expertise that Gets Results</h3>
                    <p>
                      Our skilled team of email marketing specialists brings a
                      wealth of experience to the table. We've successfully
                      conducted impactful campaigns across various industries,
                      consistently achieving results that truly matter. When you
                      choose us, you're selecting experts who have honed their
                      skills over the years, adapting to the evolving landscape
                      of digital marketing.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.cuttingedge}`}
                  >
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/email/Custom Made Strategies for Your Success.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />{" "}
                    <h3> Custom-Made Strategies for Your Success</h3>
                    <p>
                      Email marketing isn't a one-size-fits-all solution, and we
                      understand that. Our team delves deep into understanding
                      your business, your audience, and your goals. We develop
                      strategies that genuinely resonate with your audience.
                      Whether it involves creating compelling content, selecting
                      optimal email delivery times, or designing eye-catching
                      templates, we have all aspects covered specifically for
                      you.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.Aprochboxtransport} `}
                  >
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/email/Cutting Edge Tech for Top Performance.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />
                    <h3>Cutting-Edge Tech for Top Performance</h3>
                    <p>
                      Stay at the forefront with our utilization of the latest
                      email marketing tools and technologies. Our technological
                      proficiency is robust, ranging from time-saving automated
                      workflows to advanced analytics that provide valuable
                      insights. We leverage technology to enhance every facet of
                      your email campaigns.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.Aprochboxdetails12} ${Styles.AprochboxAfford}`}
                  >
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/email/Complete Campaign Management.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />
                    <h3>Complete Campaign Management</h3>
                    <p>
                      We go beyond merely sending emails. Our comprehensive
                      approach encompasses every aspect of a campaign – from
                      segmenting your audience and conducting A/B testing to
                      ensuring your emails reach their destinations and
                      analyzing their performance. With us, you're not just
                      sending emails; you're orchestrating a well-planned
                      symphony of strategic communication.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.Aprochboxdetails12} ${Styles.dedicated}`}
                  >
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/email/Increased Customer Engagement.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />
                    <h3>Increased Customer Engagement</h3>
                    <p>
                      Creative email marketing campaigns devised by our experts
                      provide an engaging and immersive experience to your
                      users. They will get motivated to take the intended action
                      in the email whether it is learning about products and
                      offers, making purchases, subscribing to a newsletter,
                      etc. The engaging experiences will eventually lead to
                      increased click through rates and email opening rates and
                      your business being able to retain customers for long.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.Aprochboxdetails11} ${Styles.lastaprox} ${Styles.Aprochboxdetails12} ${Styles.ctaboxdetail}`}
                  >
                    <div className={Styles.getStart}>
                      {/* <Image
                      src={"https://vcana-website-assets.s3.amazonaws.com/images/seo/datadrivendecisions.gif"}
                      width={80}
                      height={80}
                      alt="nb"
                    /> */}
                      <h4>Ready to Turn Emails into Revenue</h4>
                      <p>
                        Get started today by reaching out for a free
                        consultation.
                      </p>
                      <Link href="#contact">
                        <Button className={`${Styles.btnhover} btnhover `}>
                          Let’s Talk
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
          {/* WHY CHOOSE US section  end*/}
          {/*OUR PROVEN PROCESS section start*/}
          <Process
            data={processData}
            classes2={"bloch_chain_box"}
            heading={"Our Approach"}
            page={
              <h2 className="px-4">
                Explore Our <span>Streamlined Email Marketing</span> Process
              </h2>
            }
            desc={""}
            classes1={"container_back"}
          />
          {/*OUR PROVEN PROCESS section end*/}

          {/* here is the section start benfits */}
          <div className={`${Styles.benefitbg} `}>
            <Container>
              <Row
                className={` ${Styles.pricecardrowbox} ${Styles.main_padding} `}
              >
                <Col md={12} className={`${Styles.mainHeading}`}>
                  <div className="short_heading">Benefits</div>
                  <hr />
                  <h2 className="text-center my-3">
                    Compelling <span>Reasons to Opt for </span>Email Marketing
                  </h2>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mt-3 mb-4`}
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <p>
                    Email is a global powerhouse, with nearly 2.5 billion users
                    (34% of the world).
                  </p>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg}  mb-4`}
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <p>
                    It stands out as one of the most effective methods,
                    generating leads and ensuring a high return on investment.
                  </p>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <p>
                    Almost everyone has an email address, making it a powerful
                    tool for reaching consumers inexpensively.
                  </p>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <p>
                    Email marketing allows businesses to connect with a vast
                    audience at minimal cost. With a remarkable ROI of $38 for
                    every $1 spent, it outshines other channels.
                  </p>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <p>
                    Personalization is the key, with 74% of marketers
                    acknowledging its impact. Email builds loyalty, trust, and
                    is action-oriented, driving website traffic and sales.
                  </p>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <p>
                    Transactional emails, as per Experian, can generate 6x more
                    revenue.
                  </p>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <p>
                    Email marketing stands out due to its capability to monitor
                    email open rates, clicks, and unsubscribed users.
                  </p>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <p>
                    Around 61% of email subscribers eagerly anticipate
                    promotional emails each week.
                  </p>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <p>
                    Approximately 83% of customers tend to spend more on brands
                    that engage them through email communications.
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
          <div id="contact" className="pt-3">
            <GetInTouch data={GetInTouchData} />
          </div>

          {/*let’s get in Touch   end */}
          {/*Frequently Asked Questions strat*/}
          {/* <FAQ data={ServiceFaq}/> */}
          <FAQ
            page="Email Marketing <span>FAQs</span>"
            data={Email_Marketing}
          />
          {/*Frequently Asked Questions  end*/}
        </div>
        {/*OUR PROVEN PROCESS section end*/}
      </ServiceLayout>
    </>
  );
};

export default EmailMarketing;

const GetInTouchData = {
  heading: "Feeling a Bit <span>Overwhelmed By Email</span> Marketing Options?",
  desc: " ",
  sub_headR: "Send Us A Message",
  sub_headL: "Speak to Us",
  sub_head1: "",
  sub_head2: "At Vcana Global, you are assured to get",
  sub_desc:
    "No stress—no need to decide now. Start with a free consultation, and we'll handle the rest.",
  LI: [
    "Fulfillment of Promises",
    "Unmatched excellence and quality",
    "A dedicated team to support your business endeavors",
  ],
};
const ServiceData = [
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/email/Email Marketing Strategy.gif", //1
    heading: "Email Marketing Strategy",
    content:
      "We specialize in tailoring the perfect email strategy for you. Our process kicks off with a thorough email audit, followed by meticulous planning and seamless implementation. This sets the stage for ongoing reviews, optimization, and eventual substantial growth.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/email/Email Campaign Management.gif", //2
    heading: "Email Campaign Management",
    content:
      "Empower your email campaigns with our comprehensive end-to-end services, designed to meticulously plan and execute result-driven strategies. Our seasoned experts ensure timely, budget-friendly, and precise deployment of your campaigns.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/email/Email Marketing Automation.gif", //3
    heading: "Email Marketing Automation",
    content:
      "We strategize, construct, and implement intelligent, scalable automation programs designed to enhance customer engagement and maximize lifetime value. Whether addressing cart abandonment or implementing win-back programs, we cover the spectrum.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/email/Email Template Design and Coding.gif", //4
    heading: "Email Template Design and Coding",
    content:
      "We offer a comprehensive array of email template production services, encompassing coding, custom templates, and PSD to HTML conversion, and more. With transparent pricing, a dedicated Account Manager, and unparalleled post-sales support, we stand out as your ideal partner.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/email/ESP Vendor Evaluation and Migration.gif", //5
    heading: "ESP Vendor Evaluation and Migration",
    content:
      "Vcana Global leverages expertise to guide your selection of the ideal ESP for email marketing. Our specialists understand your needs, expectations, and resources. Following rigorous testing, demos, and consultations, we identify the optimal ESP for your campaigns.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/email/Email Deliverability.gif", //6
    heading: "Email Deliverability",
    content:
      "Our robust email deliverability services ensure smooth delivery to your target audience. Beginning with audits and understanding your demographic, we offer expert consultation, ongoing monitoring, reviews, and optimization for uninterrupted optimal email deliverability.",
  },
];
const processData = [
  {
    color: "#254194",
    heading: "Audience Health",
    content:
      "We keep our email list clean by using automated validation and segmenting to remove inactive subscribers. Regular monitoring of IP and domain reputation helps us understand and improve deliverability at the ISP level.",
  },

  {
    color: "#F2B721",
    heading: "Strategy",
    content:
      "We emphasize retention and reactivation, using monthly reporting to identify growth patterns in Lifetime Value (LTV) and understand your customer lifecycle. Our quarterly promotional calendar ensures targeted messages align with monthly goals.",
  },
  {
    color: "#F4622A",
    heading: "Copywriting",
    content:
      "Crafting conversion-focused content involves creating cohesive elements such as content themes, headlines, body copy, CTAs, subject lines, and preheaders. All are tailored to resonate with your audience for maximum engagement.",
  },
  {
    color: "#254194",
    heading: "Design ",
    content:
      "Adhering to your brand guidelines, we use our award-winning approach to develop eye-catching mobile-first designs geared for conversion. Our scalable email design allows for efficient and precise execution while maintaining consistency.",
  },

  {
    color: "#F2B721",
    heading: "Development",
    content:
      "Our developers manually code each template for optimal mobile performance. They follow a thorough quality assurance process, ensuring your emails render perfectly on all devices and email clients. ",
  },
  {
    color: "#F4622A",
    heading: "Performance Monitoring",
    content:
      "Beyond clicks and conversions, retention involves understanding your customer base's overall behavior. In addition to assessing campaign performance, we zoom out to analyze the broader impact on revenue and customer behavior over time.",
  },
  {
    color: "#254194",
    heading: "Testing & Optimization  ",
    content:
      "We regularly conduct A/B tests to optimize performance and gain insights into your customers' preferences. Our approach varies for broadcasts and journeys: broadcasts undergo controlled A/B split tests, while automations are tested at individual touchpoints to enhance output.",
  },
];

const bannerData = {
  heading: "Email Marketing Services",
  img: "https://vcana-website-assets.s3.amazonaws.com/images/banners/email.webp",
};
