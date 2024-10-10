import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import FAQ from "@/components/shared/faq";
import Testimonial from "@/components/shared/testimonial";
import GetInTouch from "@/components/shared/getInTouch";
import ServiceCard from "@/components/shared/serviceCard";
import Process from "@/components/shared/process-slider";
import { SeoFaq } from "@/data/faq/FAQ";
import ServiceLayout from "../service-layout/ServiceLayout";
// import Loader from "@/helpers/Loader";
import { NextSeo } from "next-seo";

const SEO = () => {
  return (
    <>
      <NextSeo
        title="Top SEO Services Company | Vcana Global"
        description="Boost your online visibility with Vcana Global, a leading SEO services company.
Drive traffic and outrank competitors. Get started today!"
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "local seo services, on page seo, technical seo, organic seo, seo audit, seo services agency",
          },
        ]}
        canonical="https://www.vcanaglobal.com/services/search-engine-optimization"
      />
      <ServiceLayout bannerData={bannerData}>
        <h1 className="d-none">search engine optimization services</h1>

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
                      "https://vcana-website-assets.s3.amazonaws.com/images/seo/seo(2).webp"
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
                  SEO Services with <span>High-Impact Results</span>
                </h2>
                <p
                  className={` ${Styles.impactps} sm:text-center text-md-start `}
                >
                  In today's digital landscape, the power of SEO cannot be
                  overstated. Welcome to Vcana Global, where we transform the
                  way businesses thrive online. With a relentless focus on your
                  success, I'm here to show you the extraordinary benefits of
                  our SEO services.
                </p>
                <p
                  className={`  ${Styles.impactps} sm:text-center text-md-start `}
                >
                  Picture this: your business, prominently featured on the first
                  page of search engine results. That's the promise of Vcana
                  Global's SEO expertise. Our tailor-made solutions are designed
                  for businesses of all sizes, from startups to established
                  enterprises.
                </p>
                <p
                  className={`  ${Styles.impactps}  sm:text-center text-md-start `}
                >
                  But what's in it for you? It's simple. Increased online
                  visibility, a surge in web traffic, and a boost in revenue.
                  Our data-driven strategies ensure your brand stands out in the
                  digital crowd, driving higher search engine rankings and
                  enhancing your brand recognition.
                </p>
                <p
                  className={`  ${Styles.impactps} sm:text-center text-md-start `}
                >
                  Why do you need our service? Because in a world where online
                  presence is everything, SEO is your golden ticket to success.
                  Join us at Vcana Global, and let's take your business to new
                  heights, together.
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
                <div className={`short_heading`}>SERVICES</div>
                <hr />
                <h2 className={`my-3 px-md-4 px-sm-4 px-lg-0`}>
                  Our SEO <span>Services Include</span>
                </h2>
              </Col>
              <Container className={`${Styles.bannerinfo}`}>
                <ServiceCard data={ServiceData} />
              </Container>
            </Container>
          </Row>
          {/* Our SEO Services section  end*/}
          {/* CTA BUTTON  */}
          <div
            className={`cmx mt-5 ${Styles.main_padding1} `}
            data-aos="custom"
          >
            <div
              className={`mt-4 ${Styles.PARTNER}  `}
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <Container>
                <Row className={`${Styles.cmx} `}>
                  <Col md={8}>
                    {/* <h5>WE PARTNER WITH BRANDS TO</h5> */}
                    {/* <Image
                      className={Styles.partnertextdeceorationbox}
                      src={"https://vcana-website-assets.s3.amazonaws.com/images/services/textdeceoration.png"}
                      width={141.6}
                      height={3.2}
                      alt="nb"
                    /> */}

                    <h5>
                      Unlock Your Website's Potential: Opt for Our Premium SEO
                      Services.
                    </h5>
                  </Col>
                  <Col md={4} className={Styles.btnr}>
                    <Link href="#contact">
                      {""}
                      <button className={`${Styles.btnhover} btnhover`}>
                        Start Now
                      </button>{" "}
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          {/* WHY CHOOSE US section  start*/}
          <Container>
            <div
              className={`${Styles.your_website} ${Styles.main_padding1} cmx`}
            >
              <div className="short_heading">WHY CHOOSE US</div>
              <hr />
              <h2 className={`my-3 px-md-4 px-sm-4 px-lg-0`}>
                The Vcana <span>Global Edge</span>
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
                        "https://vcana-website-assets.s3.amazonaws.com/images/seo/provenresults.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />
                    <h3>Proven Results</h3>
                    <p>
                      Our track record speaks volumes, with numerous businesses
                      dominating search engine results thanks to our strategies.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.cuttingedge}`}
                  >
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/seo/cuttingedgetechnology.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />{" "}
                    <h3> Cutting-Edge Technology</h3>
                    <p>
                      We stay at the forefront of industry trends, using the
                      latest tools and techniques to keep you ahead in search
                      results.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.Aprochboxtransport} `}
                  >
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/seo/transparentcommunication.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />
                    <h3>Transparent Communication</h3>
                    <p>
                      We keep you informed at every step, so you know precisely
                      how we're enhancing your online presence.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.Aprochboxdetails12} ${Styles.AprochboxAfford}`}
                  >
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/seo/affordability.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />
                    <h3>Affordability</h3>
                    <p>
                      Premium SEO services shouldn't come with a premium price
                      tag. We offer competitive rates that align with your
                      budget.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.Aprochboxdetails12} ${Styles.dedicated}`}
                  >
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/seo/dedicatedsupport.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />
                    <h3>Dedicated Support</h3>
                    <p>
                      Our team is always ready to answer your questions and
                      provide ongoing support.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.Aprochboxdetails11} ${Styles.lastaprox} ${Styles.Aprochboxdetails12} ${Styles.ctaboxdetail}`}
                  >
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/seo/datadrivendecisions.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />
                    <h3>Data-Driven Decisions</h3>
                    <p>
                      Our strategies are rooted in data and analytics, ensuring
                      that every move we make is backed by solid insights.
                    </p>
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
            heading={"Revolutionary Steps"}
            page={
              <h2 className="px-4">
                Get Acquainted with Our <span>Streamlined SEO Process</span>{" "}
              </h2>
            }
            desc={""}
            classes1={"container_back"}
          />
          {/*OUR PROVEN PROCESS section end*/}
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
            page="Search Engine Optimization <span>FAQs</span>"
            data={SeoFaq}
          />
          {/*Frequently Asked Questions  end*/}
        </div>
        {/*OUR PROVEN PROCESS section end*/}
      </ServiceLayout>
    </>
  );
};

const GetInTouchData = {
  heading: "Success & Growth",
  desc: " Our ultimate goal is your SEO success. Whether it's increased visibility, higher traffic, or improved conversion rates, we work tirelessly to achieve your objectives and foster your digital growth.",
  sub_headR: "Send Us A Message",
  sub_headL: "Ready to Take the Leap?",
  sub_head1: "",
  sub_head2: "",
  sub_desc:
    "Are you ready to boost your website's visibility, drive targeted traffic, and build a robust online presence? Contact us today, and let's embark on this journey together. Your vision, our expertise – together, we'll redefine the online world.",
  LI: [
    "Fulfillment of Promises",
    "Unmatched excellence and quality",
    "A dedicated team to support your business endeavors",
  ],
};
const ServiceData = [
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/seo/preliminaryaudit.gif", //1
    heading: "Preliminary Audit ",
    content:
      "Our comprehensive SEO audit is the first step towards optimizing your online presence. Our experts analyze your website's performance and identify areas for improvement, ensuring that your digital strategy is finely tuned for success.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/seo/competitoranalysis.gif", //2
    heading: "Competitor Analysis",
    content:
      "Vcana Global delves deeply into your competitors' SEO practices, examining their keywords and target pages. We then craft a comprehensive strategy designed to propel your business ahead of the competition.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/seo/keywordanalysis.gif", //3
    heading: "Keyword Analysis",
    content:
      "Keyword research is the foundation upon which successful SEO strategies are built. It's not just about finding words; it's about discovering the language your audience uses.  Our SEO experts delve deep into your industry, identifying the phrases that matter most to your target market.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/seo/contentoptimization.gif", //4
    heading: "Content Optimization",
    content:
      "Our SEO agency excels at crafting and optimizing your web page content, ensuring it becomes SEO-friendly, highly discoverable on search engines, and perfectly aligned with your company's SEO objectives.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/seo/onpage.gif", //5
    heading: "On-Page SEO",
    content:
      "Our on-page SEO enhances your site's visibility, credibility, and user experience. We optimize content, HTML, meta tags, CTAs, ensuring higher traffic and conversions.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/seo/linkbuilding.gif", //6
    heading: "Link Building",
    content:
      "Quality backlinks are essential for high rankings. Our experts use guest posts, broken link building, and more to secure top-notch backlinks, elevating your SERP position. ",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/seo/localsearchoptimization.gif", //7
    heading: "Local Search Optimization",
    content:
      "Our SEO services encompass Local SEO, prioritizing local search optimization. We ensure customers in your area easily find and contact you, boosting visibility through NAP Strategy and widespread Citations for top local results.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/seo/technicalseo.gif", //8
    heading: "Technical SEO",
    content:
      "We optimize your website technically for success. Our experts ensure search engines can find and index your content seamlessly while enhancing user experience. We specialize in speed optimization, resolving indexing issues, and ensuring uninterrupted traffic flow.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/seo/reporting.gif", //9
    heading: "Reporting ",
    content:
      "When it comes to performance metrics, traffic is a crucial KPI. Utilizing Google Analytics, we continually monitor your website's traffic trends. Each month, you'll receive a comprehensive report detailing your organic traffic progress since the campaign's inception, alongside month-to-month comparisons.",
  },
];
const processData = [
  {
    color: "#254194",
    heading: "Discovery & Analysis",
    content:
      "In the initial phase, we conduct a comprehensive analysis of your current online presence, including website performance, existing keywords, and competitor landscape. We identify both strengths and areas for improvement.",
  },

  {
    color: "#F2B721",
    heading: "Keyword Research",
    content:
      "Next, we delve into extensive keyword research to pinpoint the most valuable and relevant terms for your industry. These carefully chosen keywords will serve as the cornerstone of your SEO strategy.",
  },
  {
    color: "#F4622A",
    heading: "On-Page Optimization",
    content:
      "Our on-page optimization process focuses on fine-tuning essential elements such as meta tags, headers, and content. This ensures that your web pages are not only search engine-friendly but also highly accessible to users.",
  },
  {
    color: "#254194",
    heading: "Off-Page SEO",
    content:
      "Off-page SEO comes into play as we strategically build high-quality backlinks to your website. This involves outreach, guest posting, and various techniques aimed at bolstering your website's authority and credibility.",
  },

  {
    color: "#F2B721",
    heading: "Content Creation",
    content:
      "Content creation is a critical aspect of our strategy. We craft engaging, relevant, and valuable content tailored to your specific audience while optimizing it for search engines.",
  },

  {
    color: "#F4622A",
    heading: "Technical SEO",
    content:
      "We pay close attention to technical SEO, optimizing aspects like website speed, mobile responsiveness, and site structure. This optimization enhances user experience and boosts search engine rankings.",
  },
  {
    color: "#254194",
    heading: "Monitoring & Reporting",
    content:
      "Our monitoring and reporting system ensures continuous tracking of your website's performance, including keyword rankings, traffic, and conversions. Regular reports keep you informed of your progress.",
  },
  {
    color: "#f2b721",
    heading: "Ongoing Optimization",
    content:
      "SEO is an ever-evolving process. We adapt our strategies based on data analysis and algorithm updates, consistently working to maintain and improve your search engine rankings.",
  },
  {
    color: "#f4622a",
    heading: "Transparent Communication",
    content:
      "We believe in transparent communication and maintain open and frequent dialogue with you, keeping you well-informed of all developments and strategies.",
  },
  {
    color: "#f2b721",
    heading: "Success & Growth",
    content:
      "Our ultimate goal is your SEO success. Whether it's increased visibility, higher traffic, or improved conversion rates, we work tirelessly to achieve your objectives and foster your digital growth.",
  },
];

const bannerData = {
  heading: "Search Engine Optimization Services",

  img: "https://vcana-website-assets.s3.amazonaws.com/images/banners/seo.webp",
};
export default SEO;
