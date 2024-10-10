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
import { contentMarketing } from "@/data/faq/FAQ";
import ServiceLayout from "../service-layout/ServiceLayout";
// import Loader from "@/helpers/Loader";
import Button from "react-bootstrap/Button";
import { NextSeo } from "next-seo";

const ContentMarketing = () => {
  return (
    <>
      <NextSeo
        title="Content Marketing Agency | Tailored Content Strategies | Vcana Global"
        description="Discover tailored content strategies with Vcana Global, a leading content
marketing agency. Elevate your brand's presence with our expertise."
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "seo content writing services, seo friendly content writing services, seo content writing agency, seo content writing company",
          },
        ]}
        canonical="https://www.vcanaglobal.com/services/content-writing"
      />
      <ServiceLayout bannerData={bannerData}>
        <h1 className="d-none">Content Writing Services</h1>

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
                      "https://vcana-website-assets.s3.amazonaws.com/images/contentMarketing/contantMar.png"
                    }
                    width={400}
                    height={661}
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
                  Unlock the Power of Words with Vcana Global:
                  <span> Your Expert Content Writing Partner</span>
                </h2>
                <p
                  className={` ${Styles.impactps} sm:text-center text-md-start `}
                >
                  Are you looking to make a lasting impact with your online
                  presence? Welcome to Vcana Global Content Writing Services,
                  where words come to life, engage, and drive results.
                </p>
                <p
                  className={`  ${Styles.impactps} sm:text-center text-md-start `}
                >
                  We specialize in crafting engaging content that not only
                  captures your audience but also ranks high on search engines.
                  Imagine having content that not only tells your story but
                  sells it too. Our content isn't just words; it's a powerful
                  marketing tool. Whether you're a budding entrepreneur, a small
                  business, or a large corporation, our service is tailored to
                  meet your needs. We understand the nuances of your industry
                  and create content that resonates with your target audience.
                </p>
                <p
                  className={`  ${Styles.impactps}  sm:text-center text-md-start `}
                >
                  Why do you need our service? In today's digital age, content
                  is not just king; it's the heartbeat of your online presence.
                  It's the key to building trust, engaging your audience, and
                  boosting your website's search engine ranking. Our content
                  writing service offers a strategic advantage that propels your
                  brand to the top. Don’t miss the opportunity. Choose Vcana
                  Global and experience the difference!
                </p>
              </Col>
            </Row>
          </Container>
          {/* hero banner section  end*/}
          {/* CTA BUTTON  */}
          <div
            className={`cmx mt-5 mb-4 ${Styles.main_padding1} `}
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
                    <h4>
                      Resonate, Convert, Succeed - Choose Our Expertise in
                      Content Writing.{" "}
                    </h4>
                  </Col>
                  <Col md={4} className={Styles.btnr}>
                    <Link href="#contact">
                      {""}
                      <button className="btnhover">Get Started</button>{" "}
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          {/* Our SEO Services section  start*/}
          <Row className={`${Styles.pinkbgs} ${Styles.main_padding1}`}>
            <Container>
              <Col
                md={12}
                className={`${Styles.mainHeading} ${Styles.serinclude}`}
              >
                <p
                  className={`text-center fw-bold fs-5 short_heading ${Styles.seriv}`}
                >
                  SERVICES
                </p>
                <hr />
                <h2 className={`text-center my-3 px-md-4 px-sm-4 px-lg-0`}>
                  Discover the <span>Content-Based Array</span> of Services We
                  Offer
                </h2>
              </Col>
              <Container className={`${Styles.bannerinfo}`}>
                <ServiceCard data={ServiceData} />
              </Container>
            </Container>
          </Row>
          {/* Our SEO Services section  end*/}

          {/* WHY CHOOSE US section  start*/}
          <Container>
            <div
              className={`${Styles.your_website} ${Styles.main_padding1} cmx`}
            >
              <p className="short_heading">WHY CHOOSE US</p>
              <hr />
              <h2 className={` my-3 text-center px-md-4 px-sm-4 px-lg-0`}>
                Why Choose Vcana Global -{" "}
                <span> Our Unmatched Proposition</span>
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
                        "https://vcana-website-assets.s3.amazonaws.com/images/contentMarketing/Experienced Writers.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />
                    <h3>Experienced Writers</h3>
                    <p>
                      Our team comprises experienced writers who are experts in
                      their respective niches. We bring industry-specific
                      knowledge to the table, ensuring that your content is not
                      just informative but also authoritative.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.cuttingedge}`}
                  >
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/contentMarketing/SEO Mastery.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />{" "}
                    <h3> SEO Mastery</h3>
                    <p>
                      We understand the importance of search engine visibility.
                      Our SEO experts integrate relevant keywords seamlessly
                      into your content to boost your rankings and attract
                      organic traffic.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.Aprochboxtransport} `}
                  >
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/contentMarketing/Tailored Solutions.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />
                    <h3>Tailored Solutions</h3>
                    <p>
                      We don't believe in one-size-fits-all solutions. Every
                      project is unique, and we create custom content that suits
                      your brand, goals, and target audience.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.Aprochboxdetails12} ${Styles.AprochboxAfford}`}
                  >
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/contentMarketing/Unparalleled Quality.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />
                    <h3>Unparalleled Quality</h3>
                    <p>
                      Our commitment to quality is unwavering. Every piece of
                      content we create undergoes meticulous proofreading and
                      editing to ensure it's error-free and polished to
                      perfection.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.Aprochboxdetails12} ${Styles.dedicated}`}
                  >
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/contentMarketing/Versatile Solutions.gif"
                      }
                      width={80}
                      height={80}
                      alt="nb"
                    />
                    <h3>Versatile Solutions</h3>
                    <p>
                      We provide a wide variety of content marketing solutions
                      aptly adapted for various online content publishing and
                      transmission platforms. These include blogs, press
                      releases, SMO posts, business descriptions, GMB and more.
                    </p>
                  </div>
                </Col>
                <Col sm={12} md={12} lg={6} xl={4}>
                  <div
                    className={`${Styles.Aprochboxdetails} ${Styles.Aprochboxtransport}  ${Styles.Aprochboxdetails11} ${Styles.lastaprox} ${Styles.Aprochboxdetails12} ${Styles.ctaboxdetail}`}
                  >
                    <div className={Styles.getStart}>
                      <h3 className="text-white">
                        Request Your Content Makeover
                      </h3>

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
            classes2={"slide_heightseo"}
            heading={"Our Process"}
            page={
              <h2 className="px-4">
                Our Unconventional <span>Content Marketing Steps</span>{" "}
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
            page="Content Writing <span>FAQs</span>"
            data={contentMarketing}
          />
          {/*Frequently Asked Questions  end*/}
        </div>
      </ServiceLayout>
    </>
  );
};

export default ContentMarketing;

const bannerData = {
  heading: "Content Writing",
  img: "https://vcana-website-assets.s3.amazonaws.com/images/banners/content.webp",
};
const GetInTouchData = {
  heading: "Aren't You Bored of <span> Doing This All Alone?</span>",
  desc: " ",
  sub_headR: "Send Us A Message",
  sub_headL: "Speak to Us",
  sub_head1: "",
  sub_head2: "At Vcana Global, you are assured to get",
  sub_desc:
    "Partner with us for content that goes beyond words. We are not just content writers; we are content sculptors, crafting pieces that tell your story, engage your audience, and deliver remarkable results.",
  LI: [
    "Fulfillment of Promises",
    "Unmatched excellence and quality",
    "A dedicated team to support your business endeavors",
  ],
};
const ServiceData = [
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/contentMarketing/Blog Writing.gif", //1
    heading: "Blog Writing ",
    content:
      "Enrich your blog with thought-provoking and informative content. We specialize in crafting engaging blog posts that capture your audience's imagination and keep them coming back for more.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/contentMarketing/Website Content.gif", //2
    heading: "Website Content",
    content:
      "Your website is your digital storefront. Our website content services ensure that your virtual doors are always open, welcoming visitors with informative, SEO-optimized content that converts.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/contentMarketing/Social Media Content.gif", //3
    heading: "Social Media Content",
    content:
      "Fuel your social media presence with compelling posts that ignite engagement. We understand the art of brevity and how to connect with your audience effectively on various platforms.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/contentMarketing/Product Descriptions.gif", //4
    heading: "Product Descriptions",
    content:
      "Turn browsers into buyers with persuasive product descriptions that highlight the unique selling points of your products, driving sales and increasing customer satisfaction.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/contentMarketing/Email Newsletter Campaigns.gif", //5
    heading: "Email Newsletter Campaigns",
    content:
      "Stay connected with your audience through persuasive email newsletters. Our content drives traffic, conversions, and customer loyalty, ensuring that your subscribers eagerly anticipate your updates.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/contentMarketing/Ghostwriting Services.gif", //6
    heading: "Ghostwriting Services",
    content:
      "Have a story to tell or expertise to share but no time to write? Our ghostwriting services are the answer. We'll convey your message, ensuring your voice and ideas shine through. ",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/contentMarketing/Editing and Proofreading.gif", //7
    heading: "Editing and Proofreading",
    content:
      "Polish your content to perfection with our editing and proofreading services. We ensure your message is flawless and free of errors, making your content shine.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/contentMarketing/Whitepapers and E books.gif", //8
    heading: "Whitepapers and E-books",
    content:
      "Establish thought leadership with in-depth whitepapers and e-books. These resources help you attract leads, showcase your industry expertise, and boost your brand authority.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/contentMarketing/Infographic and Visual Content.gif", //9
    heading: "Infographic and Visual Content",
    content:
      "Communicate complex ideas with eye-catching infographics and visual content. Sometimes, visuals speak louder than words, and we excel in creating visuals that captivate.",
  },
];
const processData = [
  {
    color: "#254194",
    heading: "Consultation & Planning",
    content:
      "We begin with a consultation to understand your business objectives and target audience, crucial for crafting an aligned content strategy.",
  },

  {
    color: "#F2B721",
    heading: "Research & Creation",
    content:
      "After comprehending your needs, our expert writers conduct industry research to craft personalized, high-quality content. We optimize it for SEO to enhance search result rankings.",
  },
  {
    color: "#F4622A",
    heading: "Editing & Revisions",
    content:
      "Our team do rigorous editing to ensure error-free, high-quality content. Collaborative revisions are made for your complete satisfaction with the final product.",
  },
  {
    color: "#254194",
    heading: "Delivery & Follow-up",
    content:
      "After completing your content, we'll provide it in your preferred format. We'll then follow up to ensure your satisfaction and alignment with your business needs. Ongoing support is always available.",
  },
];
