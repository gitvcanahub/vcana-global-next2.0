import React, { useState } from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import { Row, Col, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Styles from "./index.module.css";
import GetInTouch from "@/components/shared/getInTouch";
import Testimonial from "@/components/shared/testimonial";
import Banner from "@/components/shared/banner";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import FetchService from "@/services/Fetch";
import Skeleton from "react-loading-skeleton";
// import Loader from "@/helpers/Loader";
// import SpiningLoader from "@/components/shared/spining-leader";
import { config } from "@/config";
import { NextSeo } from "next-seo";
const Portfolios = () => {
  const [filter, setFilter] = useState({
    category: "",
    showOn_web: true,
  });

  const {
    data: portfolioData,
    isLoading: portfolioLoading,
    // error: companyError,
  } = useQuery({
    queryKey: ["Portfolios", filter],
    queryFn: () => FetchService.portfolioAll(filter),
    keepPreviousData: true,
  });

  const filterHandler = (cat) => {
    setFilter({ category: cat, showOn_web: true });
  };

  return (
    <>
      <NextSeo
        title="Vcana Global: Development, Design, Digital Marketing Portfolio"
        description="Explore our portfolio showcasing top-notch web design, mobile app development,
and digital marketing projects. Discover why clients love our work!"
        canonical="https://www.vcanaglobal.com/portfolio"
      />
      {/* here is the banner section start */}
      <Banner data={bannerData} />
      <h1 className="d-none">Portfolio</h1>

      {/* here is the banner section end */}
      <div className={Styles.bodyColor}>
        <Container>
          {/* here is the portfolio text section start */}
          <Row className={` mt-1 ${Styles.mainpaddingleft} `}>
            <Col md={12} className={Styles.mainHeading}>
              {/* <h3 className="text-center fw-bold fs-5 pb-3">Portfolio</h3>
            <hr /> */}
              <h2 className={`${Styles.mainHedding} fs-3 mt-3 text-center`}>
                Our <span>Latest Projects</span>
              </h2>
              <div className={Styles.textp}>
                <p className="text-center fs-6 p-lg-3">
                  Discover our diverse range of projects that showcase the
                  breadth and depth of our expertise at Vcana Global. From
                  cutting-edge websites and innovative mobile apps to impactful
                  digital marketing campaigns, each project exemplifies our
                  commitment to excellence, innovation, and client success.
                </p>
              </div>
            </Col>
          </Row>

          {/* here is the portfolio text section end */}

          {/* here is the portfolio menulayout section start */}

          {/* here is the portfolio menulayout section start */}

          <Row className={`mt-5 ${Styles.tabsmenu} `}>
            <Col md={11} className="m-auto">
              <Nav
                variant="underline"
                defaultActiveKey="link-1"
                className={` ${Styles.navhead} portfolio_tab`}
              >
                <Nav.Item className={` ${Styles.navdetail} `}>
                  <Nav.Link
                    className={` ${Styles.navlink} `}
                    eventLink="link-1"
                    eventKey="link-1"
                    onClick={() => filterHandler("")}
                  >
                    All
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className={` ${Styles.navdetail} `}>
                  <Nav.Link
                    className={` ${Styles.navlink} `}
                    eventKey="link-2"
                    onClick={() => filterHandler("WEB DESIGN AND DEVELOPMENT")}
                  >
                    Website Design
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className={` ${Styles.navdetail} `}>
                  <Nav.Link
                    className={` ${Styles.navlink} `}
                    eventKey="link-3"
                    onClick={() => filterHandler("Mobile App")}
                  >
                    Mobile App
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className={` ${Styles.navdetail} `}>
                  <Nav.Link
                    className={` ${Styles.navlink} `}
                    eventKey="link-4"
                    onClick={() => filterHandler("Digital Marketing")}
                  >
                    Digital Marketing
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className={` ${Styles.navdetail} `}>
                  <Nav.Link
                    className={` ${Styles.navlink} `}
                    eventKey="link-5"
                    onClick={() => filterHandler("Software Application")}
                  >
                    Software Application
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className={` ${Styles.navdetail} `}>
                  <Nav.Link
                    className={` ${Styles.navlink} `}
                    eventKey="link-6"
                    onClick={() => filterHandler("SEO")}
                  >
                    SEO
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
          {/* here is the portfolio menulayout section end */}
          {/* here is the portfolio menulayout section end */}

          {/* here is the portfolio desktop card section start */}
          {/* here is the portfolio desktop card section end */}

          {/* here is the portfolio mobile card section start */}

          {/* here is the portfolio desktop card section end */}
        </Container>

        {portfolioLoading ? (
          <>
            <Container>
              <Row className={` mt-5 mb-5 ${Styles.desktop} `}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((port) => (
                  <Col
                    md={6}
                    xs={12}
                    sm={12}
                    lg={6}
                    // xl={4}
                    // data-aos="fade-right"
                    // data-aos-duration="1500"
                    className={`${Styles.portfolio} ${Styles.boxwidth} `}
                    key={port}
                  >
                    <Skeleton className={Styles.loadingprot} />
                  </Col>
                ))}
              </Row>
            </Container>
            <Container>
              <Row className={` mt-5 mb-5 ${Styles.mobiletab} `}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((port) => (
                  <Col
                    md={6}
                    xs={12}
                    sm={12}
                    lg={6}
                    xl={4}
                    className={` mx-auto ${Styles.portfolio} `}
                    key={port}
                  >
                    <Skeleton className={Styles.loadingprot} />
                  </Col>
                ))}
              </Row>
            </Container>
          </>
        ) : (
          <>
            <Container fluid>
              <Row className={` mt-5 mb-5 ${Styles.mobiletab} `}>
                {portfolioData?.data?.map((port) => {
                  return (
                    <Col
                      md={6}
                      xs={12}
                      sm={12}
                      lg={6}
                      xl={4}
                      className={` mx-auto ${Styles.portfolio} `}
                      key={port?.heading}
                    >
                      <div
                        className={` ${Styles.portfoliomobi}  ${Styles.porthovermobile} `}
                        style={{
                          background: `url(${config.imageUrl}${port.image2}) `,
                        }}
                      >
                        <div className={Styles.portfolifrntdetial}></div>
                      </div>
                      <div className={Styles.portfoliabsultmobi}>
                        <div className={` mb-5 ${Styles.portfoliinertext} `}>
                          <h3>{port?.website_name}</h3>
                          <p>{port?.content}</p>
                          <div className=" text-start">
                            {port?.technology[0]?.split(",").map((t) => {
                              return (
                                <Button key={t} className={Styles.portbutton}>
                                  {t}
                                </Button>
                              );
                            })}
                          </div>
                          <div className="mb-1 text-start">
                            <Link href={`portfolio/${port?.url}`}>
                              <Button className={Styles.btnhover}>
                                View Detail
                              </Button>
                            </Link>
                            <Link href={port?.website_link} target="_blank">
                              <Button className={Styles.btnhover}>
                                Visit Website
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Container>
            <Container>
              <Row className={` mt-5 mb-5 ${Styles.desktop} `}>
                {portfolioData?.data?.map((port) => {
                  return (
                    <Col
                      key={port?.heading}
                      md={6}
                      xs={12}
                      sm={12}
                      lg={6}
                      data-aos="flip-down"
                      data-aos-duration="2000"
                      className={`${Styles.portfolio} ${Styles.boxwidth} `}
                    >
                      <div
                        className={` ${Styles.portfoliobg} ${Styles.porthover} `}
                        style={{
                          background: `url(${config.imageUrl}${port.image2}) `,
                        }}
                      >
                        <div className={Styles.portfolifrntdetial}></div>
                      </div>
                      <div className={Styles.portfoliabsult}>
                        <div className={` mb-5 ${Styles.portfoliinertext} `}>
                          <h3>{port?.website_name}</h3>
                          <p>{port?.content}</p>
                          <div className=" text-start">
                            {port?.technology[0]?.split(",").map((t) => {
                              return (
                                <Button key={t} className={Styles.portbutton}>
                                  {t}
                                </Button>
                              );
                            })}
                          </div>
                          <div className="mb-2 text-start">
                            <Link href={`portfolio/${port?.url}`}>
                              <Button className={Styles.btnhover}>
                                View Detail
                              </Button>
                            </Link>
                            <Link href={port?.website_link} target="_blank">
                              <Button className={Styles.btnhover}>
                                Visit Website
                              </Button>
                            </Link>
                          </div>
                        </div>
                        <div className={Styles.portfoliinnerimg}>
                          <Image
                            src={`${config.imageUrl}${port?.image1}`}
                            alt="icon"
                            className="mb-3 ms-2"
                            width={260}
                            height={720}
                            //loader={Loader}
                          />
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </>
        )}
      </div>
      {/* l */}
      <Container fluid>
        {/* here is the get in touch section start */}

        <GetInTouch data={GetInTouchData} />

        {/* here is the get in touch section end */}

        {/* here is the testiminials section start */}

        <Row className={Styles.mainpaddingleft}>
          <Testimonial slide={3} />
        </Row>
        {/* here is the testiminials section end*/}
      </Container>
    </>
  );
};

const bannerData = {
  heading: "Portfolio",
  // content:
  //   "The digital marketing world is constantly evolving and so much is happening in it. Vcana Global blog is the best way to keep yourself updated on the latest digital marketing trends, techniques, technologies and more.",
  img: "https://vcana-website-assets.s3.amazonaws.com/images/banners/portfolionew.webp",
};
const GetInTouchData = {
  heading: "Contact Us for Your <span> Business Needs</span>",
  desc: " We are always ready to respond to any questions, comments or suggestions that you want to share with us about your business. So talk with us whenever you want through your preferred communication channel.",
  sub_headR: "Speak to Us",
  sub_headL: "Send Us A Message",
  sub_head1: "",
  sub_head2: "At Vcana Global, you are assured to get ",
  sub_descStart:
    "We are eager to grow your business with our cutting-edge web & digital marketing services. Call our experts at ",
  sub_descEnd:
    " through your preferred communication channel or meet them in-person at our premises to  take the next step.",
  LI: [
    "Fulfillment of Promises",
    "Unmatched excellence and quality",
    "A dedicated team to support your business endeavors",
  ],
};

export default Portfolios;
