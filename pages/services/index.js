import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./index.module.css";
import GetInTouch from "@/components/shared/getInTouch";
import Image from "next/image";
import FAQ from "@/components/shared/faq";
import Testimonial from "@/components/shared/testimonial";
import Link from "next/link";
import ServiceCard from "@/components/shared/serviceCard";
import ServiceLayout from "@/components/services/service-layout/ServiceLayout";
import { ServiceFaq } from "@/data/faq/FAQ";
// import Loader from "@/helpers/Loader";
import { NextSeo } from "next-seo";
const Service = () => {
  return (
    <>
      <NextSeo
        title=" Application Development Services | Web & Mobile Apps | Web Design"
        description=" Unlock innovation with Vcana Global's Application Development Services. Expertise in web & mobile apps, coupled with stellar web design solutions."
        canonical="https://www.vcanaglobal.com/services"
      />
      <ServiceLayout bannerData={bannerData}>
        <h1 className="d-none"> Application Development Services</h1>
        <div className={Styles.main_services}>
          <Container>
            <Row
              className={` ${Styles.main_padding}  ${Styles.servicesTopDetailsBox} ${Styles.topdjust}`}
            >
              <Col
                xl={5}
                lg={12}
                className={`${Styles.bannerinfo} ${Styles.imgBox} ${Styles.imgBoxtab} `}
              >
                <Image
                  className={Styles.de}
                  src={
                    "https://vcana-website-assets.s3.amazonaws.com/images/services/services.webp"
                  }
                  width={400}
                  height={387}
                  alt="nb"
                />
              </Col>
              <Col
                xl={7}
                lg={12}
                className={`${Styles.bannertext} ${Styles.bannertexttab}`}
              >
                <h2 className={`${Styles.mainHedding1} fs-2 text-start`}>
                  Welcome to Our<span> Digital World</span>
                </h2>
                <p className={`fs-7 sm:text-center text-md-start `}>
                  Are you looking for top-notch web design and development
                  services, mobile app development, and effective digital
                  marketing solutions? Look no further! Our company is your
                  one-stop destination for all your digital needs.
                </p>
                <p className={`fs-7 sm:text-center text-md-start `}>
                  {" "}
                  In today's fast-paced digital era, having a strong online
                  presence is crucial for any business to succeed. At our
                  company, we specialize in creating stunning and functional
                  websites, developing user-friendly mobile apps, and
                  implementing result-driven digital marketing strategies to
                  help your business thrive in the competitive online landscape.{" "}
                </p>
              </Col>
            </Row>
          </Container>
          <div className="pinkbg">
            <Container>
              <Row className={`${Styles.main_padding} ${Styles.pinkbg}`}>
                <Col md={12} className={Styles.mainHeading}>
                  <div className="short_heading mt-2">SERVICES</div>

                  <hr />
                  <h2 className="pt-3  pb-2">
                    Explore Our Revenue Driving{" "}
                    <span>Web-Based Business Services</span>
                  </h2>
                </Col>
                <Container
                  className={`${Styles.bannerinfo} ${Styles.services_web} pt-5`}
                >
                  <ServiceCard
                    classes={"main_service"}
                    isBtn={true}
                    data={ServiceData}
                  />
                </Container>
              </Row>
            </Container>
          </div>
          <div
            className={`cmx mt-5 mx-0 ${Styles.main_padding} ${Styles.main_padding2}`}
            data-aos="custom"
          >
            <div
              className={`mt-4 ${Styles.PARTNER}`}
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <Container>
                <Row className={`${Styles.cmx} align-items-center`}>
                  <Col md={9}>
                    <h4 className="text-sm-center">
                      Explore Our Revenue Driving Web-Based Business Services.
                    </h4>
                  </Col>
                  <Col md={3} className={Styles.btnr}>
                    <Link
                      href="https://calendly.com/anshul-10/discussion-website-designing-development?month=2023-08"
                      target="_blank"
                    >
                      {""}
                      <button className="btnhover">
                        Schedule a Meeting
                      </button>{" "}
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className={Styles.Choose}>
            <Container>
              <Row
                className={`${Styles.main_padding} ${Styles.headChoose} ${Styles.headChoosefirst} cmx`}
              >
                <Col>
                  <div className="pt-4 short_heading "> Why Choose Us </div>
                  <hr />
                  <h2 className="pt-4  pb-4">
                    Top Reasons to <span> Choose Vcana Global</span> As Your{" "}
                    <br />
                    Business Developer Partner
                  </h2>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row className={`${Styles.rowChoose} ${Styles.main_padding} cmx`}>
                <Col md={6} className={Styles.colwhychoose}>
                  <div className={Styles.leftsectionchoose}>
                    <div className={Styles.imagebackgroundchoose}>
                      <Image
                        src={
                          "https://vcana-website-assets.s3.amazonaws.com/images/services/expertises.gif"
                        }
                        width={80}
                        height={80}
                        alt="nb"
                        //loader={Loader}
                      />
                    </div>
                  </div>
                  <div className={Styles.rightsectionchoose}>
                    <h3 className={Styles?.h6Hover}>Expertise</h3>
                    <p>
                      With years of experience in the industry, we have honed
                      our skills and stayed updated with the latest trends to
                      deliver cutting-edge solutions.
                    </p>
                  </div>
                </Col>
                <Col md={6} className={Styles.colwhychoose}>
                  <div className={Styles.leftsectionchoose}>
                    <div className={Styles.imagebackgroundchoose}>
                      <Image
                        src={
                          "https://vcana-website-assets.s3.amazonaws.com/images/services/clientcentricapproach.gif"
                        }
                        width={80}
                        height={80}
                        alt="nb"
                        //loader={Loader}
                      />
                    </div>
                  </div>
                  <div className={Styles.rightsectionchoose}>
                    <h3>Client-Centric Approach</h3>
                    <p>
                      We believe in putting our clients first. Your success is
                      our success, and we work tirelessly to achieve your goals.
                    </p>
                  </div>
                </Col>
                <Col md={6} className={Styles.colwhychoose}>
                  <div className={Styles.leftsectionchoose}>
                    <div className={Styles.imagebackgroundchoose}>
                      <Image
                        src={
                          "https://vcana-website-assets.s3.amazonaws.com/images/services/customizations.gif"
                        }
                        width={80}
                        height={80}
                        alt="nb"
                      />
                    </div>
                  </div>
                  <div className={Styles.rightsectionchoose}>
                    <h3>Customization</h3>
                    <p>
                      In accordance with the unique needs and demands of your
                      business, we build customized solutions for you that
                      effectively tackle your marketing challenges and help you
                      leverage prevalent business opportunities.
                    </p>
                  </div>
                </Col>
                <Col md={6} className={Styles.colwhychoose}>
                  <div className={Styles.leftsectionchoose}>
                    <div className={Styles.imagebackgroundchoose}>
                      <Image
                        src={
                          "https://vcana-website-assets.s3.amazonaws.com/images/services/affordablpricing.gif"
                        }
                        width={80}
                        height={80}
                        alt="nb"
                      />
                    </div>
                  </div>
                  <div className={Styles.rightsectionchoose}>
                    <h3>Affordable Pricing</h3>
                    <p>
                      We understand that every business has different budgets.
                      Our services are priced competitively without compromising
                      on quality.
                    </p>
                  </div>
                </Col>
                <Col md={6} className={Styles.colwhychoose}>
                  <div className={Styles.leftsectionchoose}>
                    <div className={Styles.imagebackgroundchoose}>
                      <Image
                        src={
                          "https://vcana-website-assets.s3.amazonaws.com/images/services/timedelivery1.gif"
                        }
                        width={80}
                        height={80}
                        alt="nb"
                      />
                    </div>
                  </div>
                  <div className={Styles.rightsectionchoose}>
                    <h3>Timely Delivery</h3>
                    <p>
                      We value your time and strive to deliver projects within
                      the agreed timelines, ensuring a smooth and hassle-free
                      experience.
                    </p>
                  </div>
                </Col>
                <Col md={6} className={Styles.colwhychoose}>
                  <div className={Styles.leftsectionchoose}>
                    <div className={Styles.imagebackgroundchoose}>
                      <Image
                        src={
                          "https://vcana-website-assets.s3.amazonaws.com/images/services/supportandmaintenance.gif"
                        }
                        width={80}
                        height={80}
                        alt="nb"
                      />
                    </div>
                  </div>
                  <div className={Styles.rightsectionchoose}>
                    <h3>Support and Maintenance</h3>
                    <p>
                      Our relationship doesn't end after the project is
                      completed. We provide ongoing support and maintenance to
                      keep your digital assets running smoothly.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          {/*INSPIRE YOUR CUSTOMERS TO BUY end */}
          {/*Why Choose us strat */}
          <div className={` ${Styles.benefitsbg} cmx`}>
            <Container>
              <div className={Styles.Business}>
                <Row
                  className={`${Styles.bannerinfo} ${Styles.main_padding} cmx`}
                >
                  <Col md={12} className={Styles.benefits}>
                    <div className="short_heading">Benefits</div>
                    <hr />
                    <h2 className="pt-4 pb-0">
                      Explore The Benefits of Our Elite Web-
                      <span>
                        Based
                        <br /> Business Services
                      </span>
                    </h2>
                  </Col>
                </Row>
                <Row
                  className={`${Styles.bannerinfo}  ${Styles.main_padding} cmx`}
                >
                  <Col
                    md={12}
                    className={Styles.ChooseBox}
                    data-aos="flip-left"
                    data-aos-duration="2000"
                  >
                    {/* <h3 className={Styles.Business1}>01</h3> */}
                    <h3>
                      {" "}
                      Enhanced Business Reach: Tailored-Made Marketing Solutions
                      for Global Impact
                    </h3>
                    <p>
                      Expand your business reach with our bespoke marketing
                      solutions. Empower your brand to connect with a wider
                      audience on local, national, and international levels,
                      seizing abundant revenue generating opportunities.
                      Experience substantial growth, heightened profitability,
                      and long-term prosperity with our proven strategies.
                    </p>
                  </Col>
                  <Col
                    md={12}
                    className={Styles.ChooseBox}
                    data-aos="flip-left"
                    data-aos-duration="2000"
                  >
                    {/* <h3 className={Styles.Business1}>02</h3> */}
                    <h3 className="text-white">
                      Elevate Customer Engagement: Revolutionary Marketing
                      Solutions
                    </h3>
                    <p>
                      Experience marketing excellence with our cutting-edge and
                      tech-savvy solutions. Seamlessly connect with your
                      audience and deliver interactive & valuable user
                      experience that captivate buyers. Enjoy increased sales,
                      satisfaction, loyalty, and retention rates, creating
                      repeat business opportunities. Embrace innovation and
                      outperform competitors with our game-changing strategies
                      for unmatched success.
                    </p>
                  </Col>

                  <Col
                    md={12}
                    className={Styles.ChooseBox}
                    data-aos="flip-left"
                    data-aos-duration="2000"
                  >
                    {/* <h3 className={Styles.Business1}>03</h3> */}
                    <h3>
                      Seize the Competitive Advantage: Propel Your Business to
                      the Top
                    </h3>
                    <p>
                      Seize the competitive advantage with our marketing
                      solutions, propelling your business to the top.
                      Strategically designed to secure a significant audience
                      share, our innovative approach ensures you outpace
                      competitors in growth and success. Thrive, surpass rivals,
                      and achieve unparalleled prosperity with our
                      transformative strategies. Embrace your journey to
                      industry dominance.
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          {/*Why Choose us  end */}
          {/*Testimonials  start */}
          <div className={` ${Styles.main_padding} cmx`}>
            {/*Testimonials  start */}
            <Testimonial slide={1} />
            {/*Testimonials  end */}
          </div>
          {/*let’s get in Touch   start */}
          <GetInTouch data={GetInTouchData} />
          {/*let’s get in Touch   end */}
          <div className={` ${Styles.main_padding} cmx`}>
            <FAQ page="Business Services <span>FAQs</span>" data={ServiceFaq} />
            {/*Frequently Asked Questions  end*/}
          </div>
        </div>
      </ServiceLayout>
    </>
  );
};
const bannerData = {
  heading: "Services",
  img: "https://vcana-website-assets.s3.amazonaws.com/images/banners/servicesnew1.webp",
  // mobileImg: "https://vcana-website-assets.s3.amazonaws.com/images/banners/VcanaServiceMobileBanners.webp",
};
const GetInTouchData = {
  heading: "Let Us Transform Your <span>Business Idea to a Reality </span>",
  desc: " ",
  sub_headR: "Send Us A Message",
  sub_headL: "Get Started Today!",
  sub_head1: "",
  sub_head2: "What you will get :",
  sub_desc:
    "Don't let your business get left behind in the digital world. Contact us now to discuss your web design and development, mobile app development, and digital marketing requirements. Our team is eager to help you elevate your online presence and achieve your business objectives.",
  LI: [
    "Fulfillment of Promises",
    "Unmatched excellence and quality",
    "A dedicated team to support your business endeavors",
  ],
};
const ServiceData = [
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/WebsiteDesignanddevelopment.gif",
    heading: "Web Design and Development",
    link: "services/website-design-development",
    content:
      "Your online success starts with a top-notch website. Our skilled designers and developers collaborate to craft captivating and user-friendly sites, from portfolios to e-commerce platforms. Let's make your vision shine!",
  },

  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/ecommercewebsitedevelopment.gif",
    heading: "E-commerce Website Development",
    link: "services/ecommerce-website-development",

    content:
      "Elevate your brand with our e-commerce prowess, Engage, sell, succeed. Our tailored online stores offer seamless navigation, secure payments, and customer engagement. Join successful retailers today!",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/mobileappdevelopment.gif",
    heading: "Mobile App Development",
    link: "services/mobile-application-development",

    content:
      "In the smartphone era, a business app is essential. Our experts create Android and iOS apps with top-notch UX, performance, and security. Keep customers engaged and returning. It's a necessity, not a luxury.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/digitalmarketing.gif",
    heading: "Digital Marketing",
    link: "services/digital-marketing",

    content:
      "Beyond a stellar website or app, online visibility demands expertise. Our data-driven digital strategists customize SEO, PPC, social media, content and email marketing plans to suit your business. Count on us for comprehensive coverage.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/web aap.gif",
    heading: "Application Development ",
    link: "services/application-development  ",

    content:
      "Your custom system development needs are well covered with us. Built as per your company’s vision and business needs, the system will effectively solve your problems.",
  },
  {
    heading: "Blockchain Development",
    link: "services/blockchain-development",
    content:
      "Embrace blockchain's power with us. Boost efficiency, security, and transparency through smart contracts and apps. Our experts ensure a competitive digital edge. Elevate your business today with future-proof solutions.",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/services/blockchaindevelopment.gif",
  },
];

export default Service;
