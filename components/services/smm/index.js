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
import { smm } from "@/data/faq/FAQ";
import Button from "react-bootstrap/Button";
import { NextSeo } from "next-seo";
// import Loader from "@/helpers/Loader";

const SMM = () => {
  return (
    <>
      <NextSeo
        title="Social Media Marketing Agency | Boost Your Brand | Vcana Global"
        description="Empower your brand's online presence with Vcana Global, a premier Social Media
Marketing Agency. Let us boost your brand visibility effectively."
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "local social media marketing agency, social media management services, social media marketing company",
          },
        ]}
        canonical="https://www.vcanaglobal.com/services/social-media-marketing"
      />
      <ServiceLayout bannerData={bannerData}>
        <h1 className="d-none">Social Media Marketing Services</h1>

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
                      "https://vcana-website-assets.s3.amazonaws.com/images/smm/smmImg.png"
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
                  Let Your <span>Brand's Prominence Shine</span> in the Social
                  Sphere!
                </h2>
                <p
                  className={` ${Styles.impactps} sm:text-center text-md-start `}
                >
                  In today's digital world, social media stands as the primary
                  domain of influence. It is the space where your audience
                  actively invests their time, and your brand's presence there
                  can make all the difference. At Vcana Global, we specialize in
                  delivering adept Social Media Management services that are all
                  about your brand's success. <br />
                  Our services are designed for businesses of all sizes. Whether
                  you're a startup looking to establish your online presence or
                  an established brand aiming for a more significant impact, our
                  Social Media Management can be your secret advantage.
                </p>
                <p
                  className={`  ${Styles.impactps} sm:text-center text-md-start `}
                >
                  Aligned with a commitment to augment your brand's visibility,
                  we recognize the significance of audience engagement. Our
                  bespoke strategies are geared towards not just enhancing your
                  online reputation but also fostering resonance with your
                  brand's voice.
                  <br />
                  Ready to elevate your brand to unparalleled heights through
                  the dynamic realm of social media? Let's embark on this
                  transformative journey together.
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
                <div className={`short_heading`}>Services</div>
                <hr />
                <h2 className={`my-3 px-md-4 px-sm-4 px-lg-0`}>
                  Our SMM <span>Services Include</span>
                </h2>
              </Col>
              <Container className={`${Styles.bannerinfo}`}>
                <ServiceCard data={ServiceData} />
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
              <div className="short_heading">WHY CHOOSE US</div>
              <hr />
              <h2 className={`my-3 px-md-4 px-sm-4 px-lg-0`}>
                <span>Vcana Global's Signature</span> Advantage
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
                        "https://vcana-website-assets.s3.amazonaws.com/images/smm/Expertise.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />
                    <h3>Expertise</h3>
                    <p>
                      Our team consists of social media experts who stay updated
                      with the latest trends and algorithms. We know what works
                      and what doesn't.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.cuttingedge}`}
                  >
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/smm/Data Driven Decisions.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />{" "}
                    <h3> Data-Driven Decisions</h3>
                    <p>
                      We don't rely on guesswork. Our decisions are backed by
                      data, ensuring the best results.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.Aprochboxtransport} `}
                  >
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/smm/Proven Success.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />
                    <h3>Proven Success</h3>
                    <p>
                      We have a track record of success with satisfied clients
                      who have seen remarkable improvements in their online
                      presence.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.Aprochboxdetails12} ${Styles.AprochboxAfford}`}
                  >
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/smm/Cost Effective Packages.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />
                    <h3>Cost-Effective Packages</h3>
                    <p>
                      No hefty retainers; pay for our services' true cost.
                      Allocate any extra funds to paid advertising for optimal
                      results and value.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.Aprochboxdetails12} ${Styles.dedicated}`}
                  >
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/seo/Tailor Made.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />
                    <h3>Tailor-Made</h3>
                    <p>
                      Customized as per your business's unique needs and
                      expectations, our social media marketing solutions give
                      you complete control over your social strategy, branding,
                      etc.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.Aprochboxdetails11} ${Styles.lastaprox} ${Styles.Aprochboxdetails12} ${Styles.ctaboxdetail} ${Styles.Aprochboxtransport}`}
                  >
                    <div className={`${Styles.getStart} ${Styles.navMenu1}`}>
                      {/* <Image
                      src={"https://vcana-website-assets.s3.amazonaws.com/images/seo/datadrivendecisions.gif"}
                      width={80}
                      height={80}
                      alt="nb" */}
                      {/* /> */}
                      <h4>Let's Craft Your Brand Story</h4>
                      <p>
                        Get started today by reaching out for a free
                        consultation.
                      </p>
                      <Link href="#contact">
                        <Button className={`${Styles.btnhover} btnhover`}>
                          Get Started
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
            classes2={"smm_box"}
            heading={"REVOLUTIONARY STEPS"}
            page={
              <h2 className="px-4">
                Get Acquainted <span>with Our Streamlined</span> SMM Process
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
                  <h2 className={`my-3 px-md-4 px-sm-4 px-lg-0`}>
                    Benefits of{" "}
                    <span>
                      Social Media Marketing
                      <br />
                    </span>
                    Services
                  </h2>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <h3>Improve Your Credibility as A Brand</h3>
                  <p>
                    Having a social media presence is a start for brand
                    credibility. If not updated and optimized regularly, it's
                    akin to an empty, dusty physical location, making users
                    question your business's activity and trustworthiness.
                    Social media marketing can elevate your online presence
                    beyond the basics, establishing credibility and trust
                    through a strategic, powerful marketing plan.
                  </p>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <h3>Direct Access to Your Customers</h3>
                  <p>
                    Social media facilitates constant engagement and
                    conversations, empowering businesses to connect directly
                    with customers. Positive interactions, like engaging with
                    customer posts, foster loyalty showcasing brand love. It
                    also allows addressing issues privately, mitigating negative
                    reviews. Direct customer access builds trust and insights
                    into preferences.
                  </p>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <h3>Increased ROI</h3>

                  <p>
                    Ultimately, the prime benefit of social media management
                    lies in converting followers into customers. Targeting the
                    right audience from the start and implementing an effective
                    social media marketing plan ensures meaningful engagement
                    and ROI.
                  </p>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <h3>Grow Your Customer Base</h3>
                  <p>
                    Social Media Marketing (SMM) is a powerful tool for
                    expanding your customer base. By leveraging platforms like
                    Facebook, Instagram, and Twitter, businesses can reach a
                    vast audience, engage with potential customers, and build
                    brand loyalty. The interactive nature of social media
                    fosters direct communication, influencing purchasing
                    decisions and ultimately contributing to the growth of a
                    robust customer base.
                  </p>
                </Col>
                <Col
                  md={12}
                  className={` ${Styles.boxbg} mb-4`}
                  data-aos="flip-left"
                  data-aos-duration="2000"
                >
                  <h3>Boosts Email Marketing</h3>
                  <p>
                    Effective social media marketing complements other
                    strategies, like email marketing. Promote lead magnets
                    through posts or ads, run contests, and add sign-up forms on
                    your Facebook page to grow your email list. It
                    simultaneously benefits your email marketing efforts while
                    reaping the advantages of a well-crafted social media
                    strategy.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          {/* benifit start  */}

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
          <FAQ page="Social Media Marketing <span>FAQs</span>" data={smm} />
          {/*Frequently Asked Questions  end*/}
        </div>
        {/*OUR PROVEN PROCESS section end*/}
      </ServiceLayout>
    </>
  );
};

export default SMM;

const GetInTouchData = {
  heading: "Ready to <span> Accelerate your Social Media </span> Presence?",
  desc: " ",
  sub_headR: "Send Us A Message",
  sub_headL: "Speak to Us",
  sub_head1: "",
  sub_head2: "At Vcana Global, you are assured to get",
  sub_desc:
    "Let us be your guide to success in the digital world. Contact us today to get started on your journey to social media success. We look forward to helping you succeed in the digital realm.",
  LI: [
    "Fulfillment of Promises",
    "Unmatched excellence and quality",
    "A dedicated team to support your business endeavors",
  ],
};
const ServiceData = [
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/smm/Comprehensive Market Analysis.gif", //1
    heading: "Comprehensive Market Analysis ",
    content:
      "We meticulously examine data from diverse social media channels to derive valuable insights, shaping personalized marketing strategies and campaigns. This comprehensive analysis lays the foundation for the success of your social media endeavors.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/smm/Regular Social Media Maintenance.gif", //2
    heading: "Regular Social Media Maintenance",
    content:
      "Establishing a business presence on social platforms is just the start. Survival and success demand consistent upkeep. Our dedicated experts ensure your social media stays current, captivating potential customers and reinforcing your brand's prominence.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/smm/Customized Marketing Strategies.gif", //3
    heading: "Customized Marketing Strategies",
    content:
      "Recognizing the distinct nature of each business, we focus on your specific audience, products/services, and goals when crafting personalized social media strategies. Elevate your brand development and awareness with our bespoke approaches.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/smm/Social Media Audit.gif", //4
    heading: "Social Media Audit",
    content:
      "Producing relevant content on social platforms is vital. Our specialists consistently monitor its performance, conducting audits to identify areas for improvement. This ongoing assessment ensures our content aligns with your goals.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/smm/Strategic Content Approach.gif", //5
    heading: "Strategic Content Approach",
    content:
      "Crafting tailored content is vital for diverse platforms. From concise text and hashtags for Twitter to engaging captions for Instagram, our experts focus on optimizing content to enhance brand recognition, audience engagement, and lead generation.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/smm/Influencer Marketing.gif", //6
    heading: "Influencer Marketing",
    content:
      "Our Influencer Marketing service strategically aligns brands with influential personalities, harnessing their reach to elevate your products or services. We curate authentic partnerships, driving brand awareness, trust, and engagement.",
  },
];
const processData = [
  {
    color: "#254194",
    heading: "Dedicated Social Media Manager",
    content:
      "You will be assigned a dedicated social media account manager for strategy development and execution. Our dedicated manager, well-versed in your business, becomes your primary contact to ensure seamless collaboration.",
  },

  {
    color: "#F2B721",
    heading: "Tailored Social Strategy",
    content:
      "The first step we will take with your social media campaign is to do thorough research and strategy development. We will conduct competitive analysis, define buyer personas, and craft effective content and advertising strategies to create a roadmap to success for your social campaigns.",
  },
  {
    color: "#F4622A",
    heading: "Crafting Engaging Content",
    content:
      "Upon approval of the devised social media strategy, we commence execution. We will craft unique brand-specific posts, which are further sent for your review before the content goes live.",
  },
  {
    color: "#254194",
    heading: "Reporting & Communication",
    content:
      "You will receive monthly reports from your social media manager to review the progress. Also, you can schedule meetings at your convenience, be it weekly, biweekly, or monthly, to discuss progress.",
  },

  {
    color: "#F2B721",
    heading: "Growth Optimization",
    content:
      "Our social media marketing encompasses daily management and growth optimization. We actively monitor all social activity, aiming to respond within 24 business hours. Utilizing organic tactics like hashtags and contests, we foster growth in your social media channels.",
  },
];

const bannerData = {
  heading: "Social Media Marketing ",
  img: "https://vcana-website-assets.s3.amazonaws.com/images/banners/smm.webp",
};
