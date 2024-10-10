import React from "react";
import styles from "./index.module.css";
// import Loader from "@/helpers/Loader";
import FetchService from "@/services/Fetch";
import { useQuery } from "@tanstack/react-query";
import { config } from "config";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Button } from "react-bootstrap";
import SpiningLoader from "@/components/shared/spining-leader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Portfolio = () => {
  const {
    data: portfolios,
    isLoading: portfolioLoading,
    // error: companyError,
  } = useQuery({
    queryKey: ["Portfolio"],
    queryFn: () => FetchService.portfolioAll({ limit: "20", showOn_web: true }),
    keepPreviousData: true,
  });

  return (
    <div className={`${styles.servBoxs}`}>
      {portfolioLoading ? (
        <SpiningLoader />
      ) : (
        <Container fluid>
          <Row className="justify-content-lg-between mt-4">
            <Col xs="12">
              <p className="mt-3 short_heading fw-bold fs-5">PORTFOLIO</p>
              <hr />
              <h2 className="mt-3">
                Our <span> Portfolio</span>
              </h2>
              <p className="w-75  mx-auto  mt-1">
                Don’t believe what we say, instead have a look at our finest
                creations that are making our clients’ business grow and thrive.
              </p>
            </Col>
          </Row>
          {/* mobile portfolio Slider */}
          <Row className={`mb-5 ${styles.mobiletab}`}>
            <Swiper
              className="port-swiper"
              loop={true}
              spaceBetween={30}
              centeredSlides={true}
              speed={1000}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              style={{ width: "100%", height: "530px" }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                767: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                  // width: "100%",
                },

                // 1200: {
                //   slidesPerView: 3,
                //   spaceBetween: 20,
                //   // width: "85%",
                // },

                // 1680: {
                //   slidesPerView: 3,
                //   spaceBetween: 5,
                //   // width: "85%",
                // },
              }}
            >
              {portfolios?.data.map((port) => {
                return (
                  <SwiperSlide key={port?._id}>
                    <Col className={` ${styles.portfolio} `}>
                      <div
                        className={` ${styles.portfoliomobi}  ${styles.porthovermobile} `}
                        style={{
                          background: `url(${config.imageUrl}${port?.image2}) `,
                        }}
                      ></div>
                      <div className={styles.portfoliabsultmobi}>
                        <div className={`  ${styles.portfoliinertext} `}>
                          <h2>{port?.website_name}</h2>
                          <p>{port?.content}</p>
                          <div className=" text-start">
                            {port?.technology[0]?.split(",").map((t) => {
                              return (
                                <Button key={t} className={styles.portbutton}>
                                  {t}
                                </Button>
                              );
                            })}
                          </div>
                          <div className="mb-1 text-start">
                            <Link href={`/portfolio/${port?._url}`}>
                              <Button className={styles.btnhover}>
                                View Detail
                              </Button>
                            </Link>
                            <Link href={port?.website_link} target="_blank">
                              <Button className={styles.btnhover}>
                                Visit Website
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
          {/* desktop portfolio */}
          <Row className={`mb-5 ${styles.desktop} `}>
            <Swiper
              className="port-swiper"
              loop={true}
              spaceBetween={30}
              centeredSlides={true}
              speed={1000}
              // autoplay={{
              //   delay: 2000,
              //   disableOnInteraction: false,
              // }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              style={{ width: "90%", height: "750px" }}
              breakpoints={{
                // 640: {
                //   slidesPerView: 1,
                //   spaceBetween: 10,
                // },
                // 768: {
                //   slidesPerView: 2,
                //   // spaceBetween: 80,
                // },

                1200: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                  // width: "85%",
                },

                1680: {
                  slidesPerView: 3,
                  spaceBetween: 5,
                  // width: "85%",
                },
              }}
            >
              {portfolios?.data.map((port) => {
                return (
                  <SwiperSlide key={port?._id}>
                    <Col className={`${styles.portfolio} ${styles.boxwidth} `}>
                      <div
                        className={` ${styles.portfoliobg} ${styles.porthover} `}
                        style={{
                          background: `url(${config.imageUrl}${port?.image2})`,
                        }}
                      >
                        <div className={styles.portfolifrntdetial}></div>
                      </div>
                      <div className={styles.portfoliabsult}>
                        <div className={` ${styles.portfoliinertext} `}>
                          <h2>{port?.website_name}</h2>
                          <p>{port?.content}</p>
                          <div className=" text-start">
                            {port?.technology[0]?.split(",").map((t) => {
                              return (
                                <Button key={t} className={styles.portbutton}>
                                  {t}
                                </Button>
                              );
                            })}
                          </div>
                          <div className="mb-2 text-start">
                            <Link href={`/portfolio/${port?.url}`}>
                              <Button className={styles.btnhover}>
                                View Detail
                              </Button>
                            </Link>
                            <Link href={port?.website_link} target="_blank">
                              <Button className={styles.btnhover}>
                                Visit Website
                              </Button>
                            </Link>
                          </div>
                        </div>
                        <div className={styles.portfoliinnerimg}>
                          <Image
                            src={`${config.imageUrl}${port?.image1}`}
                            alt="icon"
                            className="mb-3 ms-2"
                            width={260}
                            height={650}
                            //loader={Loader}
                          />
                        </div>
                      </div>
                    </Col>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Portfolio;
