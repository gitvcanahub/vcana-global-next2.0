import Banner from "@/components/shared/banner";
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import StickyBox from "react-sticky-box";
import { useRouter } from "next/router";

import styles from "./PortFolioDetail.module.css";
import Button from "react-bootstrap/Button";
// import Loader from "@/helpers/Loader";

import FetchService from "@/services/Fetch";
import SpiningLoader from "@/components/shared/spining-leader";
import { config } from "@/config";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";
// import { NextSeo } from "next-seo";

const PortfolioDetail = () => {
  const router = useRouter();
  const { url } = router.query;
  const {
    data: portfolio,
    isLoading: portfolioLoading,
    // error: companyError,
  } = useQuery({
    queryKey: ["Portfolio", url],
    queryFn: () => FetchService.portfolio(url),
    keepPreviousData: true,
  });

  return (
    <>
      {/* <NextSeo nofollow={true} noindex={true} /> */}
      <Banner data={bannerData} />
      <Container className={styles.bgcolore}>
        {portfolioLoading ? (
          <SpiningLoader />
        ) : (
          <Row className={` pt-5 pb-5 ${styles.maindetails}`}>
            <Col md={7} className={` ${styles.tabresp}`}>
              <div className={`${styles.frame}`}>
                <div className={`${styles.frame__head}`}>
                  {" "}
                  <span className={`${styles.frame__dots}`}></span>{" "}
                  <span className={`${styles.addressbar}`}>
                    <Link
                      rel="noreferrer"
                      href={portfolio?.url}
                      target="_blank"
                    >
                      {portfolio?.url}
                    </Link>
                  </span>{" "}
                  <span className={`${styles.frame__lines}`}></span>{" "}
                </div>
                <div className={`${styles.frame__body}`}>
                  <div className={`${styles.screen}`}>
                    <Image
                      className={`${styles.images} `}
                      src={`${config.imageUrl}${portfolio?.image}`}
                      width={12000}
                      height={6000}
                      //loader={Loader}
                      alt="nb"
                    />
                  </div>
                </div>
              </div>
            </Col>

            <Col md={5} className={` ${styles.tabresp2}`}>
              <StickyBox
                className=" bg-white  "
                offsetTop={62}
                offsetBottom={20}
              >
                <div className={styles.rightside}>
                  <Row className={styles.rightsidefirst}>
                    <h1 className="text-start">{portfolio?.website_name}</h1>
                    <p className="text-start">{portfolio?.content}</p>
                  </Row>
                  <div className={styles.sidefirst}>
                    <Row>
                      <Col md={12} className={styles.projectdetail}>
                        <h1 className={`text-start ${styles.projectinfo} `}>
                          Projects Info
                        </h1>
                        <h5 className="mt-4">
                          Category:
                          <span>
                            <p> {portfolio?.category} </p>
                          </span>
                        </h5>
                        <h5>
                          Date:
                          <span>
                            {moment(portfolio?.date).format("DD MMM YYYY")}
                          </span>
                        </h5>
                        <h5>
                          Technology:
                          <span>
                            {portfolio?.technology[0]?.split(",").map((t) => {
                              return (
                                <span key={t} className="ml-1">
                                  {" "}
                                  {t}
                                </span>
                              );
                            })}
                          </span>
                        </h5>
                        <Link href="/contact#contact">
                          <Button className={styles.btnhover}>
                            <span>Inquire Now</span>
                          </Button>
                        </Link>
                        <Link href={portfolio?.website_link} target="_blank">
                          <Button className={`ms-3 ${styles.btnhover}`}>
                            <span>Visit Website</span>
                          </Button>
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </div>
              </StickyBox>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

const bannerData = {
  heading: "Portfolio",
  // content:
  //   "The digital marketing world is constantly evolving and so much is happening in it. Vcana Global blog is the best way to keep yourself updated on the latest digital marketing trends, techniques, technologies and more.",
  img: "https://vcana-website-assets.s3.amazonaws.com/images/portfolio/pro.webp",
};

export default PortfolioDetail;
