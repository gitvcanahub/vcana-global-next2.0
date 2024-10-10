import React from "react";
import ServiceLayout from "../service-layout/ServiceLayout";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/shared/faq";
import Testimonial from "@/components/shared/testimonial";
import GetInTouch from "@/components/shared/getInTouch";
import ServiceCard from "@/components/shared/serviceCard";
import Process from "@/components/shared/process-slider";
import { PPc } from "@/data/faq/FAQ";
// import Loader from "@/helpers/Loader";
import Button from "react-bootstrap/Button";
import { NextSeo } from "next-seo";

const PPC = () => {
  return (
    <>
      <NextSeo
        title="PPC Marketing Services - Scale Your Business | Vcana Global"
        description="Unlock growth with Vcana Global's PPC Marketing Services. Targeted strategies to
scale your business and maximize ROI. Elevate your brand today!"
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "ppc management service, ecommerce ppc management, best ppc agency",
          },
        ]}
        canonical="https://www.vcanaglobal.com/services/pay-per-click"
      />
      <ServiceLayout bannerData={bannerData}>
        <h1 className="d-none">Pay Per Click Marketing Agency</h1>

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
                      "https://vcana-website-assets.s3.amazonaws.com/images/PPc/Pat Per Click.webp"
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
                  Supercharge Your Business with Results-
                  <span>Oriented PPC Marketing Services</span>
                </h2>
                <p
                  className={` ${Styles.impactps} sm:text-center text-md-start `}
                >
                  Are you ready to delve into the realm of PPC marketing to
                  elevate your business? Vcana Global, a performance-driven PPC
                  agency, is eager to collaborate for the success of your
                  advertising campaigns. Our seasoned marketers bring extensive
                  experience and expertise in managing diverse PPC campaigns,
                  ensuring desired outcomes for businesses. Serving various
                  industries and encompassing paid search ads and paid social
                  ads, our services help businesses optimize audience
                  engagement, conversions, and revenue. Additionally, our
                  approach is cost-effective, maximizing the return on your
                  marketing investment.
                </p>
                <p
                  className={`  ${Styles.impactps} sm:text-center text-md-start `}
                >
                  Whether you aim to run paid ads on Google or Bing search
                  engines or on social platforms like Facebook, LinkedIn, and
                  others, our comprehensive range of PPC services has you
                  covered. Our team adopts a customized and meticulous approach
                  to address your unique PPC requirements. They meticulously
                  handle each step of the ad campaign process, from strategy
                  formulation and keyword research to ad design, copywriting,
                  bid management, landing page optimization, audience targeting,
                  conversion tracking, A/B testing, and campaign analysis.
                  Partner with us to make the impact you desire with your ads.
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
                <div className={`short_heading `}>Services</div>
                <hr />
                <h2 className={`text-center mt-3 px-md-4 px-sm-4 px-lg-0`}>
                  Our Array of PPC <span>Marketing Services</span>
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
              <div className="short_heading">WHY CHOOSE US </div>
              <hr />
              <h2 className={`my-3 text-center px-md-4 px-sm-4 px-lg-0`}>
                Why Choose <span>Vcana Global PPC Management </span> Services?
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
                        "https://vcana-website-assets.s3.amazonaws.com/images/PPc/Outstanding Results.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />
                    <h3>Outstanding Results</h3>
                    <p>
                      With our experience and skills, we deliver exceptional
                      results, driving more clicks, conversions, sales, and ROI
                      for your business.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.cuttingedge}`}
                  >
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/PPc/Single Minded Focus.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />{" "}
                    <h3> Single-Minded Focus</h3>
                    <p>
                      Our PPC experts focus on performing each step correctly
                      from the start, ensuring success in paid search and social
                      ads, including strategy, keyword research, ad design, bid
                      management, and optimization.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.Aprochboxtransport} `}
                  >
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/PPc/Transparency.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />
                    <h3>100% Transparency</h3>
                    <p>
                      As a credible marketing agency, we maintain thorough
                      transparency in our dealings, providing 24/7 access to
                      data and keeping clients informed about campaign progress.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.Aprochboxdetails12} ${Styles.AprochboxAfford}`}
                  >
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/PPc/Monthly Reporting.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />
                    <h3>Monthly Reporting</h3>
                    <p>
                      We closely monitor and report the results achieved by your
                      PPC campaigns, offering insights into increased visitors,
                      leads, sales, spending, and user behavior on your website.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.Aprochboxdetails12} ${Styles.dedicated}`}
                  >
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/PPc/Wide Ranging Portfolio.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />
                    <h3>Wide-Ranging Portfolio</h3>
                    <p>
                      Our PPC services have served a wide array of clients,
                      encompassing industries including website design,
                      pharmaceuticals, real estate and more.{" "}
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
                      <h4>Ready to launch revenue-driving PPC campaigns?</h4>

                      <Link href="#contact">
                        <Button className={`${Styles.btnhover} btnhover`}>
                          Let’s Connect{" "}
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
            classes2={"slide_heightseo"}
            heading={"Our Approach"}
            page={
              <h2 className="px-4">
                A Glimpse into Our <span>PPC Advertising Management</span>{" "}
                Process
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
                  <h2 className={`text-center my-3 px-md-4 px-sm-4 px-lg-0`}>
                    Key Benefits of <span>PPC Marketing</span>
                  </h2>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                >
                  <h3>Fast Results</h3>
                  <p>
                    PPC efforts show immediate impact, with content appearing on
                    the first page of Google and driving instant traffic to your
                    website.
                  </p>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                >
                  <h3>Warm Leads</h3>
                  <p>
                    PPC ads allow you to reach customers actively searching for
                    your products, increasing the likelihood of conversions.
                  </p>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                >
                  <h3>Targeted Marketing</h3>
                  <p>
                    PPC enables precise audience targeting based on
                    demographics, language, location, device, etc., ensuring ads
                    reach the most interested users.
                  </p>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                >
                  <h3>Customizable</h3>
                  <p>
                    PPC offers control over timing, keyword settings, etc.,
                    during campaigns, allowing for adjustments that can improve
                    results.
                  </p>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                >
                  <h3>Measurable</h3>
                  <p>
                    Tools like Google Analytics provide precise measurement of
                    PPC ad results, offering insights into clicks, impressions,
                    conversions, and spending.
                  </p>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                >
                  <h3>Positive ROI</h3>
                  <p>
                    Continuous improvement and optimization of PPC ad campaigns
                    lead to a positive return on investment for businesses.
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

          <FAQ page="Pay Per Click <span>FAQs</span>" data={PPc} />
          {/*Frequently Asked Questions  end*/}
        </div>
        {/*OUR PROVEN PROCESS section end*/}
        {/*OUR PROVEN PROCESS section end*/}
      </ServiceLayout>
    </>
  );
};

export default PPC;

const GetInTouchData = {
  heading:
    "Ready to harness the<span> power of PPC for your</span> business success?",
  desc: " ",
  sub_headR: "Send Us A Message",
  sub_headL: "Collaborate with us. ",
  sub_head1: "",
  sub_head2: "",
  sub_desc:
    "Our marketing specialists have the required knowledge and skills to help you navigate successfully through your PPC advertising journey. Contact our experts to enter the exciting world of lucrative pay-per-click ads.",
  LI: [
    "Fulfillment of Promises",
    "Unmatched excellence and quality",
    "A dedicated team to support your business endeavors",
  ],
};
const ServiceData = [
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/PPc/PPC Strategy and Consulting.gif", //1
    heading: "PPC Strategy and Consulting ",
    content:
      "After analyzing your specific business needs and marketing goals, we craft a well-structured and holistic strategy for your PPC ads. This strategy enhances performance by boosting traffic, increasing customer engagement across devices, and driving conversions.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/PPc/Paid Search.gif", //2
    heading: "Paid Search",
    content:
      "We boast an impeccable track record of building and managing result-oriented paid search ad campaigns optimized for leading search engines such as Google and Bing. These campaigns effectively generate qualified leads for our clients.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/PPc/Paid Social.gif", //3
    heading: "Paid Social",
    content:
      "Our paid social PPC campaigns enable businesses to connect with their target audience on popular social networks like Facebook, LinkedIn, and Twitter. Our designed ads leave a lasting impression, prompting the audience to take intended actions.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/PPc/Landing Page Creation.gif", //4
    heading: "Landing Page Creation",
    content:
      "We excel at building conversion-optimized landing pages for paid campaigns on AdWords and Bing Ads. These pages deliver improved results by converting more paid traffic into leads and generating increased revenue.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/PPc/Display Ads.gif", //5
    heading: "Display Ads",
    content:
      "Our Display Ads capitalize on opportunities presented by the Google Display Network for branding, awareness, and remarketing. We create compelling ad images, banners, and creative copies to reach a more qualified audience and drive conversions.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/PPc/Smart Campaigns.gif", //6
    heading: "Smart Campaigns",
    content:
      "We help clients maximize gains from Smart Shopping campaigns, leveraging automated bidding and ad placement across different networks. These campaigns, akin to Google Ads, simplify the setup and management of PPC campaigns. ",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/PPc/Ad Creative.gif", //7
    heading: "Ad Creative",
    content:
      "To provide an eye-catching and compelling paid ads experience, we create all necessary digital assets, including images, videos, ad copy, and landing page designs.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/PPc/Remarketing Retargeting.gif", //8
    heading: "Remarketing/</br>Retargeting",
    content:
      "We execute impactful remarketing/retargeting campaigns across search engines and social platforms, connecting with audiences who have previously engaged with ads or websites, thereby increasing conversions and sales.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/PPc/Keyword Research.gif", //8
    heading: "Keyword Research",
    content:
      "We undertake meticulous research to identify keywords your competitors are bidding on. This includes finding the best long-tail keywords and the right negative keywords to exclude certain search terms from your campaigns.",
  },
];
const processData = [
  {
    color: "#254194",
    heading: "Business Awareness",
    content:
      "To plan a successful PPC campaign, we start by understanding your business, discussing expectations, target services or products, budget, unique selling points, targeted geographic areas, and campaign goals.",
  },

  {
    color: "#F2B721",
    heading: "Keyword Research",
    content:
      "Our team conducts an in-depth keyword research and analysis to understand the current paid ads landscape in your industry, identify low-hanging fruit keywords, and select the most effective keywords for your PPC ads.",
  },
  {
    color: "#F4622A",
    heading: "PPC Proposal",
    content:
      "We present our findings and proposed campaign strategy, covering our approach, reporting process, paid ad strategy, keyword research, budget suggestions, and expected results in a detailed proposal.",
  },
  {
    color: "#254194",
    heading: "Execution",
    content:
      "Once you approve the proposal, we proceed with creating ads, including ad copy, keyword strategies, landing page designs, etc. Our experience ensures optimal results, often resulting in sales or inquiries within 24 hours of the ads going live.",
  },

  {
    color: "#F2B721",
    heading: "Analyzing Success",
    content:
      "We track results and measure the performance of your ad campaign, gaining insights into user behavior, page visits, and conversions using tools like Google Analytics and Google Tag Manager.",
  },

  {
    color: "#F4622A",
    heading: "Review",
    content:
      "Based on insights gained, we continuously optimize current and future PPC campaigns, proposing new strategies to improve results, including increased conversions, sales, and revenue.",
  },
];

const bannerData = {
  heading: "Pay Per Click",
  img: "https://vcana-website-assets.s3.amazonaws.com/images/banners/ppc.webp",
};
