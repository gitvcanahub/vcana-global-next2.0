import React from "react";
import ServiceLayout from "../service-layout/ServiceLayout";
import Styles from "./index.module.css";
import { Col, Row, Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/shared/serviceCard";
import Process from "@/components/shared/process-slider";
import Testimonial from "@/components/shared/testimonial";
import GetInTouch from "@/components/shared/getInTouch";
import FAQ from "@/components/shared/faq";
import { blogChainFaq } from "@/data/faq/FAQ";
import Button from "react-bootstrap/Button";
import { NextSeo } from "next-seo";

const index = () => {
  return (
    <>
      <NextSeo
        title="Custom blockchain app development company | Vcana Global"
        description="Elevate your business with Vcana Global, a top-tier blockchain app development
company. Tailored solutions for your success await!"
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "custom blockchain development, blockchain development services, blockchain technology, blockchain development company ",
          },
        ]}
        canonical="https://www.vcanaglobal.com/services/blockchain-development"
      />
      <ServiceLayout bannerData={bannerData}>
        <h1 className="d-none">blockchain development services</h1>

        <div className={Styles.main_services}>
          <Container>
            <Row
              className={`py-4 py-md-0 py-xl-0 ${Styles.bannerinfo} ${Styles.bannerAdjustment}`}
            >
              <Col
                lg={12}
                xl={5}
                className={` ${Styles.imgBox} ${Styles.adjustinfos}`}
              >
                <div className={Styles.main_img}>
                  <Image
                    className={Styles.imagebox}
                    src={
                      "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/Blockchainimg.webp"
                    }
                    width={450}
                    height={487}
                    alt="nb"
                  />
                  <div className={Styles.overlay}></div>
                </div>
              </Col>
              <Col
                lg={12}
                xl={7}
                className={`${Styles.bannertext} ${Styles.mainheadinad} `}
              >
                <h2
                  className={`${Styles.mainHedding1} ${Styles.main} text-lg-start text-sm-center text-md-center px-md-4 px-sm-4 px-lg-0`}
                >
                  Are You Ready to Dive Into{" "}
                  <span> the Future of Digital </span>
                  Innovation?
                </h2>
                <p className="fs-6 md:text-center text-lg-start ">
                  Welcome to Vcana Global, your gateway to cutting-edge
                  blockchain technology. Our services cater to businesses of all
                  sizes, from startups to established corporations.
                </p>
                <p className="fs-6 md:text-center text-lg-start ">
                  At Vcana Global, we offer a comprehensive range of solutions,
                  including NFT marketplace creation, Private Blockchain
                  implementation, and Smart Contract development. We understand
                  that in today's fast-paced digital landscape, staying ahead is
                  not an option—it's essential.
                </p>
                <p className="fs-6 md:text-center text-lg-start ">
                  What sets us apart is our commitment to transforming your
                  business through blockchain's full potential. We're not just
                  service providers; we're partners in your journey of growth,
                  security, and efficiency.
                </p>
              </Col>
            </Row>
          </Container>
          {/* Our Services section  start*/}
          <Row className={`${Styles.pinkbgs} ${Styles.main_padding1} `}>
            <Container>
              <Col
                md={12}
                className={`${Styles.mainHeading} ${Styles.bannerinfo} mb-4 `}
              >
                <h3 className={`short_heading`}>Services We Offer</h3>
                <hr />
                <h2 className={`text-center my-3 px-4`}>
                  Explore Our Revenue Driving{" "}
                  <span> Blockchain Development Services </span>
                </h2>
              </Col>
              <Container className={`${Styles.bannerinfo}`}>
                <ServiceCard data={ServiceData} />
                {/* <ServiceCard data= {<ServiceData/>}/> */}
              </Container>
            </Container>
          </Row>
          {/* Our SEO Services section  end*/}
          {/* Our offer 1 section  start*/}
          <Container>
            <Row className="mt-5 mb-5 pt-lg-5 pb-lg-5">
              <Col
                md={12}
                className={`${Styles.mainHeading} ${Styles.bannerinfo} ${Styles.market}`}
              >
                <div className={`short_heading`}>WE ARE OFFERING</div>
                <hr />
                <h2
                  className={`${Styles.mainHedding1} ${Styles.main} ${Styles.ourser} ${Styles.spanStyle1} text-center mt-3 px-4`}
                >
                  <span> 01 </span> NFT Marketplace <span>Development </span>
                </h2>
                <p>
                  NFTs, or Non-Fungible Tokens, have taken the digital world by
                  storm. They represent unique digital assets, from artwork to
                  collectibles
                  <br /> and virtual real estate. Our NFT marketplace
                  development services enable you to create, manage, and trade
                  NFTs seamlessly.{" "}
                </p>
              </Col>
              <Col>
                <Row className={`${Styles.bannerinfo} md-mt-5 mt-3`}>
                  <Col lg={6}>
                    <div className={Styles.nftHeading}>
                      <h3 className={`${Styles.nftText} mb-4 short_heading`}>
                        How We Can Help
                        <hr className="mt-2" />
                      </h3>
                      <div className={`${Styles.nftBox} ${Styles.offer0ne}`}>
                        <h4>Customized NFT Platforms</h4>
                        <p>
                          We design NFT marketplaces tailored to your specific
                          needs and branding.
                        </p>
                      </div>
                      <div className={`${Styles.nftBox} ${Styles.offer0ne}`}>
                        <h4>Security</h4>
                        <p>
                          Our solutions prioritize the highest level of security
                          to protect your valuable digital assets.
                        </p>
                      </div>

                      <div className={`${Styles.nftBox} ${Styles.offer0ne}`}>
                        <h4>User-Friendly</h4>
                        <p>
                          We ensure an intuitive user experience for both
                          creators and collectors.
                        </p>
                      </div>
                      <div className={`${Styles.nftBox} ${Styles.offer0ne}`}>
                        <h4>Scalability</h4>
                        <p>
                          Our NFT marketplaces are built to handle growing
                          demand without compromising performance.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className={Styles.nftHeading}>
                      <h3 className={`${Styles.nftText} short_heading mb-4 `}>
                        Benefits of Our NFT Marketplace Development
                        <hr className="mt-2" />
                      </h3>

                      <div className={`${Styles.nftBox} ${Styles.section2} `}>
                        <h3>01</h3>
                        <h4>Monetization</h4>
                        <p>
                          Generate revenue by facilitating NFT trading and
                          collecting transaction fees.
                        </p>
                      </div>

                      <div className={`${Styles.nftBox} ${Styles.section2} `}>
                        <h3>02</h3>
                        <h4>Brand Exposure</h4>
                        <p>
                          Enhance your brand's visibility in the blockchain and
                          crypto space.
                        </p>
                      </div>
                      <div className={`${Styles.nftBox} ${Styles.section2}`}>
                        <h3>03</h3>
                        <h4>Diversification</h4>
                        <p>
                          Explore new opportunities in the booming NFT market.
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className={Styles.bannerinfo}>
                  <div className={Styles.ctaBlue}>
                    <Row>
                      <Col md={8} className="d-flex align-items-center">
                        <h5>Explore the world of NFT trading.</h5>
                      </Col>

                      <Col md={4} className={Styles.btnr}>
                        <Link href="#contact">
                          {""}
                          <button className="btnhover">
                            Discover the Marketplace
                          </button>{" "}
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>
          {/* Our offer 1 section  end*/}
          {/* Our offer 2 section  start*/}
          <div className={Styles.pinkbgs}>
            <Container>
              <Row className="sm-mt-1 md-mb-5 ">
                <Col
                  md={12}
                  className={`${Styles.mainHeading} ${Styles.bannerinfo} ${Styles.market}`}
                >
                  <div className={`short_heading`}>WE are OFFERING</div>
                  <hr />
                  <h2
                    className={`${Styles.mainHedding1} ${Styles.main} ${Styles.ourser}  ${Styles.spanStyle} text-center mt-3 px-4`}
                  >
                    <span>02</span> Private Blockchain{" "}
                    <span> Development </span>
                  </h2>
                  <p>
                    Private blockchains offer restricted access to authorized
                    participants. They are ideal for businesses that require
                    control, privacy, and <br />
                    scalability while leveraging blockchain technology.{" "}
                  </p>
                </Col>
                <Col>
                  <Row className={`${Styles.bannerinfo} mt-5`}>
                    <Col lg={6}>
                      <div className={Styles.blockChainHeading}>
                        <h3 className={`${Styles.nftText} short_heading mb-4`}>
                          How We Can Help
                          <hr className="mt-2" />
                        </h3>
                        <div
                          className={`${Styles.blockChainBox}  ${Styles.boxNum} `}
                        >
                          <h4>Tailored Solutions</h4>
                          <p>
                            We design private blockchains to meet your specific
                            business requirements.
                          </p>
                        </div>
                        <div
                          className={`${Styles.blockChainBox} ${Styles.blockYellow}  ${Styles.boxNum}`}
                        >
                          <h4>Security</h4>
                          <p>
                            Implement robust security measures to protect
                            sensitive data.
                          </p>
                        </div>

                        <div
                          className={`${Styles.blockChainBox} ${Styles.blockRed}  ${Styles.boxNum} `}
                        >
                          <h4>Efficiency</h4>
                          <p>
                            Increase operational efficiency through streamlined
                            processes.
                          </p>
                        </div>
                        <div className={Styles.blockChainBox}>
                          <h4>Scalability</h4>
                          <p>
                            Ensure your private blockchain can adapt to your
                            business's growth.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} className="mt-md-4 mt-lg-0">
                      <div className={Styles.blockChainHeading}>
                        <h3 className={`${Styles.nftText} short_heading mb-4`}>
                          Benefits of Our Private Blockchain Development
                          <hr className="mt-2" />
                        </h3>

                        <div
                          className={`${Styles.blockChainBox} ${Styles.blockYellow} `}
                        >
                          <h3>01</h3>
                          <h4>Enhanced Security</h4>
                          <p>
                            Protect sensitive information and transactions from
                            unauthorized access.
                          </p>
                        </div>

                        <div
                          className={`${Styles.blockChainBox} ${Styles.boxNum}`}
                        >
                          <h3>02</h3>
                          <h4>Improved Efficiency</h4>
                          <p>
                            Reduce intermediaries and streamline operations.
                          </p>
                        </div>
                        <div
                          className={`${Styles.blockChainBox} ${Styles.blockRed} `}
                        >
                          <h3>03</h3>
                          <h4>Scalability</h4>
                          <p>
                            Scale your private blockchain network as your
                            business expands.
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                  <Row className={`${Styles.bannerinfo} mb-4 mt-4`}>
                    <div className={Styles.ctaBlue}>
                      <Row>
                        <Col md={9} className="d-flex align-items-center">
                          <h5>
                            Discuss your private blockchain needs with us.
                          </h5>
                        </Col>

                        <Col md={3} className={Styles.btnr}>
                          <Link
                            href="https://calendly.com/anshul-10/discussion-website-designing-development?month=2023-08"
                            target="_blank"
                          >
                            {""}
                            <button className="btnhover">
                              Request Consultation
                            </button>{" "}
                          </Link>
                        </Col>
                      </Row>
                    </div>
                  </Row>
                </Col>
              </Row>
            </Container>
            {/* Our offer 2 section  end*/}
          </div>
          {/* Our offer 3 section  start*/}
          <Container>
            <Row className="mt-5  pt-md-5 pb-md-5">
              <Col
                md={12}
                className={`${Styles.mainHeading} ${Styles.bannerinfo} ${Styles.market}`}
              >
                <div className={`short_heading`}>WE are OFFERING</div>
                <hr />
                <h2
                  className={`${Styles.mainHedding1} ${Styles.main} ${Styles.ourser} ${Styles.spanStyle3} text-center mt-3 px-4`}
                >
                  <span>03</span>Smart Contract <span> Development </span>
                </h2>
                <p>
                  Smart contracts are self-executing agreements with the terms
                  directly written into code. They automate and enforce
                  contractual
                  <br /> agreements, reducing the need for intermediaries.{" "}
                </p>
              </Col>
              <Col>
                <Row className={`${Styles.bannerinfo} mt-5`}>
                  <Col lg={6}>
                    <div className={Styles.nftHeading}>
                      <h3 className={`${Styles.nftText} short_heading mb-4`}>
                        How We Can Help
                        <hr className="mt-2" />
                      </h3>
                      <div className={`${Styles.nftBox} ${Styles.smart}`}>
                        <h4>Custom Smart Contracts</h4>

                        <p>
                          Develop smart contracts tailored to your specific
                          business needs.
                        </p>
                      </div>
                      <div className={`${Styles.nftBox} ${Styles.smart}`}>
                        <h4>Efficiency</h4>
                        <p>
                          Automate processes and reduce the potential for human
                          error.
                        </p>
                      </div>

                      <div className={`${Styles.nftBox} ${Styles.smart}`}>
                        <h4>Transparency</h4>
                        <p>
                          Benefit from transparent and tamper-proof agreements.{" "}
                        </p>
                      </div>
                      <div className={`${Styles.nftBox} ${Styles.smart}`}>
                        <h4>Cost Savings</h4>
                        <p>
                          Cut costs associated with traditional contract
                          execution.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className={Styles.nftHeading}>
                      <h3 className={`${Styles.nftText} short_heading mb-4 `}>
                        Benefits of Our Smart Contract Development
                        <hr className="mt-2" />
                      </h3>

                      <div className={`${Styles.nftBox} ${Styles.threrd} `}>
                        <h3>01</h3>
                        <h4>Automation</h4>
                        <p>Streamline complex business processes.</p>
                      </div>

                      <div className={`${Styles.nftBox} ${Styles.threrd}`}>
                        <h3>02</h3>
                        <h4>Security</h4>
                        <p>Eliminate the risk of fraud and manipulation.</p>
                      </div>
                      <div className={`${Styles.nftBox} ${Styles.threrd}`}>
                        <h3>03</h3>
                        <h4>Accuracy</h4>
                        <p>Ensure precise execution of agreements.</p>
                      </div>
                    </div>
                  </Col>
                </Row>

                <Row className={Styles.bannerinfo}>
                  {/* <Col className={` ${Styles.ctayellow}`}>
                    <h2>Explore the benefits of smart contracts</h2>
                    <Col md={12} className={Styles.btnryellow}>
                      <Link href="#contact">
                        {""}
                        <button className="btnhover1">
                          Automate Your Agreements
                        </button>{" "}
                      </Link>
                    </Col>
                  </Col> */}
                  <div className={Styles.ctaBlue}>
                    <Row>
                      <Col md={8} className="d-flex align-items-center">
                        <h5>Explore the benefits of smart contracts.</h5>
                      </Col>

                      <Col md={4} className={Styles.btnr}>
                        <Link href="#contact">
                          {""}
                          <button className="btnhover">
                            Automate Your Agreements
                          </button>{" "}
                        </Link>
                      </Col>
                    </Row>
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>

          {/* Our offer 3 section  end*/}

          {/*technology  section start */}
          <div className={`${Styles.Choose} ${Styles.pinkbg}`}>
            <Container>
              <Row
                className={` ${Styles.headChoose}  ${Styles.main_padding} ${Styles.bannerinfo}`}
              >
                <Col>
                  <p className="short_heading">Technologies Used</p>
                  <hr className={`${Styles.tech} mt-2`} />
                  <h2 className={`py-3 px-4`}>
                    Lead with Cutting-<span>Edge Solutions </span>
                  </h2>
                </Col>
              </Row>
            </Container>
            <Container>
              <Row className={`${Styles.tecHeading} ${Styles.bannerinfo} mt-3`}>
                <h3 className="short_heading">Smart Contract Development</h3>
                <hr />
              </Row>
              <Row
                className={`${Styles.rowChoose231} ${Styles.main_padding} ${Styles.bannerinfo} d-flex  `}
              >
                {whyChooseData?.map((data) => {
                  return (
                    <Col
                      xs={6}
                      sm={6}
                      md={4}
                      lg={4}
                      xl={2}
                      key={data.name}
                      className={` ${Styles.tecnologyusesbox} mt-4`}
                    >
                      <div className={`${Styles.cardInner2} p-3  h-100`}>
                        <Image
                          src={data?.img}
                          // //loader={Loader}
                          alt="ImageTechlogo"
                          width={60}
                          height={60}
                          className={`${Styles.tools_img} me-0`}
                        />
                        <h4
                          className={`${Styles.headingCARD2} text-start pt-2 pb-0`}
                        >
                          {data?.name}
                        </h4>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Container>
            <Container>
              <Row className={`${Styles.tecHeading} ${Styles.bannerinfo} mt-5`}>
                <h3 className="short_heading">Private Blockchain</h3>
                <hr />
              </Row>
              <Row
                className={`${Styles.rowChoose231} ${Styles.main_padding} ${Styles.bannerinfo} d-flex   `}
              >
                {PrivateChooseData?.map((data) => {
                  return (
                    <Col
                      xs={6}
                      sm={6}
                      md={4}
                      lg={4}
                      xl={2}
                      key={data.name}
                      className={` ${Styles.tecnologyusesbox} mt-4`}
                    >
                      <div className={`${Styles.cardInner2} p-3  h-100`}>
                        <Image
                          src={data?.img}
                          // //loader={Loader}
                          alt="ImageTechlogo"
                          width={60}
                          height={60}
                          className={`${Styles.tools_img} me-0`}
                        />
                        <h4
                          className={`${Styles.headingCARD2} text-start pt-2 pb-0`}
                        >
                          {data?.name}
                        </h4>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Container>
            <Container>
              <Row className={`${Styles.tecHeading} ${Styles.bannerinfo} mt-5`}>
                <h3 className="short_heading">NFT Marketplace</h3>
                <hr />
              </Row>
              <Row
                className={`${Styles.rowChoose231} ${Styles.main_padding} ${Styles.bannerinfo} d-flex  `}
              >
                {nftChooseData?.map((data) => {
                  return (
                    <Col
                      xs={6}
                      sm={6}
                      md={4}
                      lg={4}
                      xl={2}
                      key={data.name}
                      className={` ${Styles.tecnologyusesbox} mt-4`}
                    >
                      <div className={`${Styles.cardInner2} p-3  h-100`}>
                        <Image
                          src={data?.img}
                          // //loader={Loader}
                          alt="ImageTechlogo"
                          width={60}
                          height={60}
                          className={`${Styles.tools_img} me-0`}
                        />
                        <h4
                          className={`${Styles.headingCARD2} text-start pt-2 pb-0`}
                        >
                          {data?.name}
                        </h4>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </div>
          {/*technology  section end */}

          {/* here is the section start Plan */}
          {/* <div
            className={`${Styles.ratebox} ${Styles.bannerinfo} pt-lg-5 pb-lg-4`}
          >
            <Container>
              <Row
                className={` ${Styles.pricecardrowbox} ${Styles.main_padding} `}
              >
                <Col
                  md={12}
                  className={`${Styles.mainHeading} ${Styles.spacekummainhading}  mb-5 mt-5`}
                >
                  <h3 className="text-center fw-bold fs-5 ">OUR PLANS</h3>
                  <hr />
                  <h1 className={`${Styles.mainHedding}  text-center my-3`}>
                    Choose the <span>Right Plan</span>
                  </h1>
                  <p>
                    Please note that prices may vary depending on the complexity
                    and scale of your project. Contact us for a detailed quote.
                  </p>
                </Col>
                <Col md={4} className={`${Styles.price} mb-1`}>
                  <h3>Starting at</h3>
                  <h6>$X,XXX</h6>
                  <h4>NFT Marketplace Development</h4>
                  <p> Customized NFT marketplace solution</p>
                </Col>
                <Col md={4} className={`${Styles.price} mb-1`}>
                  <h3>Starting at</h3>
                  <h6>$X,XXX.</h6>
                  <h4>Private Blockchain Development</h4>
                  <p> Tailored private blockchain solution</p>
                </Col>
                <Col md={4} className={`${Styles.price} mb-1`}>
                  <h3>Starting at</h3>
                  <h6>$X,XXX</h6>
                  <h4>Smart Contract Development</h4>
                  <p> Custom smart contract development</p>
                </Col>
              </Row>
            </Container>
          </div> */}
          {/* here is the section end plan */}
          {/* here is the choose  section start  */}
          <div className={Styles.colorbg}>
            <Container className={Styles.bannerinfo}>
              <div className={Styles.whychoseus}>
                <Row className={` mb-1 cmx ${Styles.main_padding}`}>
                  <Col md={12} className={Styles.benefits}>
                    <div className="short_heading">Why choose Us</div>
                    <hr />
                    <h2 className={`mt-3 px-4`}>
                      Why Choose Vcana Global for
                      <span> Blockchain Development</span> - Our Unmatched
                      Benefits
                    </h2>
                  </Col>
                </Row>
                <Row className={` ${Styles.chosesec}  ${Styles.main_padding}`}>
                  <Col lg={4} md={6} className={Styles.ourapproach}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/data.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="text-start"
                    />
                    <h3 className="md-text-start">
                      Knowledge of Data Structures
                    </h3>
                    <p className="md-text-start ">
                      Our expert developers possess in-depth knowledge of data
                      structures, a fundamental component of Blockchain
                      technology. This ensures robust and efficient data
                      management within your Blockchain solutions.
                    </p>
                  </Col>
                  <Col lg={4} md={6} className={Styles.ourapproach}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/cloud.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                    />
                    <h3 className="md-text-start">High Availability</h3>
                    <p className="md-text-start">
                      We understand the importance of uptime in Blockchain
                      applications. Our solutions are designed for high
                      availability, minimizing downtime and ensuring seamless
                      operation.
                    </p>
                  </Col>
                  <Col lg={4} md={6} className={Styles.ourapproach}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/user.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="md-text-start">
                      User-Friendly, Flexible Models
                    </h3>
                    <p className="md-text-start">
                      Our user-centric approach ensures that the Blockchain
                      solutions we develop are not only technically robust but
                      also user-friendly. We offer flexibility to cater to
                      various client requirements.
                    </p>
                  </Col>
                  <Col lg={4} md={6} className={Styles.ourapproach}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/strong.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="md-text-start">
                      Strong Cryptography Expertise
                    </h3>
                    <p className="md-text-start">
                      Blockchain relies heavily on cryptography for security. At
                      Vcana Global, we have a strong team of cryptography
                      experts who implement top-tier security measures to
                      protect your Blockchain data.
                    </p>
                  </Col>
                  <Col lg={4} md={6} className={Styles.ourapproach}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/process.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="md-text-start">
                      Comprehensive Ideation Process
                    </h3>
                    <p className="md-text-start">
                      We go beyond development, assisting you in the ideation
                      process. We help you explore business opportunities,
                      assess technical and financial feasibility, and refine
                      your Blockchain strategy.
                    </p>
                  </Col>
                  <Col lg={4} md={6} className={Styles.ourapproach}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/tech.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="text-start"
                    />
                    <h3 className="md-text-start">
                      Proficiency in Latest Technologies and Programming
                      Languages
                    </h3>
                    <p className="md-text-start ">
                      We stay ahead in the tech race by continually updating our
                      skills. Our developers are proficient in the latest
                      technologies and programming languages, ensuring that your
                      Blockchain solutions are cutting-edge.
                    </p>
                  </Col>

                  <Col lg={4} md={6} className={Styles.ourapproach}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/delivery.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                    />
                    <h3 className="md-text-start">
                      On-Time Delivery at Affordable Prices
                    </h3>
                    <p className="md-text-start">
                      We are committed to delivering projects on time and within
                      budget. Our competitive pricing ensures that you get value
                      for your investment without compromising on quality.
                    </p>
                  </Col>
                  <Col lg={4} md={6} className={Styles.ourapproach}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/hand.gif"
                      }
                      width={70}
                      height={70}
                      alt="nb"
                      className="me-3"
                    />
                    <h3 className="md-text-start">
                      Client Satisfaction Guaranteed
                    </h3>
                    <p className="md-text-start">
                      Ultimately, our goal is your satisfaction. We work closely
                      with you to understand your needs and provide tailor-made
                      Blockchain solutions that align with your objectives.
                    </p>
                  </Col>
                  <Col lg={4} md={12} className={Styles.ourapproach}>
                    <div className={Styles.choosebg}>
                      <h4>Start your blockchain journey with Vcana Global</h4>

                      <Link
                        href="https://calendly.com/anshul-10/discussion-website-designing-development?month=2023-08"
                        target="_blank"
                      >
                        <Button className={Styles.btnhover}>
                          Schedule a Meeting
                        </Button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
          {/* here is the approach section end  */}

          {/*OUR PROVEN PROCESS section start*/}
          <div className={`${Styles.bannerinfo} ${Styles.progressive}`}>
            <Process
              data={processData}
              height={"100%"}
              classes2={"bloch_chain_box"}
              heading={"Progressive Workflow Solutions"}
              page={
                <h2 className="px-4">
                  Our Blockchain <span>Development Process</span>{" "}
                </h2>
              }
              desc={""}
              classes1={"container_back"}
            />
          </div>

          {/*OUR PROVEN PROCESS section end*/}
          {/* testmonial  */}
          <div className={Styles.bannerinfo}>
            <Testimonial slide={1} />
          </div>

          {/* testmonial  */}
          {/* Contact   */}

          <div id="contact" className="pt-3">
            <GetInTouch data={GetInTouchData} />
          </div>

          {/* Contact   */}
          <div>
            <div className={` ${Styles.main_padding} ${Styles.bannerinfo} cmx`}>
              <FAQ
                page="Blockchain Development Services <span>FAQs</span>"
                data={blogChainFaq}
              />
              {/*Frequently Asked Questions  end*/}
            </div>
          </div>
        </div>
      </ServiceLayout>
    </>
  );
};

const GetInTouchData = {
  heading:
    "Are You Ready to Dive Into the <span> Future of Digital Innovation? </span>",
  desc: " ",
  sub_headR: "Send Us A Message",
  sub_headL: "Join The Innovation",
  sub_head1: "",
  sub_head2: "At Vcana Global, you are assured to get ",
  sub_desc:
    "Welcome to Vcana Global, your gateway to cutting-edge blockchain technology.",
  LI: [
    "Fulfillment of Promises",
    "Unmatched excellence and quality",
    "A dedicated team to support your business endeavors",
  ],
};
const bannerData = {
  heading: "Blockchain <br>Development Services",
  img: "https://vcana-website-assets.s3.amazonaws.com/images/banners/block.webp",
};

const ServiceData = [
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/service3.gif", //1
    heading: "NFT Marketplace Development ",
    content:
      "NFTs, or Non-Fungible Tokens, have taken the digital world by storm. They represent unique digital assets, from artwork to collectibles and virtual real estate. Our NFT marketplace development services enable you to create, manage, and trade NFTs seamlessly.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/service2.gif", //2
    heading: "Private Blockchain Development",
    content:
      "Private blockchains offer restricted access to authorized participants. They are ideal for businesses that require control, privacy, and scalability while leveraging blockchain technology.",
  },
  {
    img: "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/service1.gif", //3
    heading: "Smart Contract Development",
    content:
      "Smart contracts are self-executing agreements with the terms directly written into code. They automate and enforce contractual agreements, reducing the need for intermediaries.",
  },
];

const processData = [
  {
    color: "#254194",
    heading: "Understanding Business Needs ",
    content:
      "Our first step is to understand the specific needs and objectives of the business or project. What problems are you trying to solve? What processes can benefit from decentralization and transparency? ",
  },

  {
    color: "#F2B721",
    heading: "Designing the Architecture",
    content:
      "Once the requirements are clear, the architecture of the blockchain network is designed. This includes decisions about whether to create a public or private blockchain, consensus mechanisms, and the structure of smart contracts. ",
  },
  // {
  //   color: "#F4622A",
  //   heading: "Competitor Analysis ",
  //   content:
  //     "Analyzing your competitors’ campaigns and strategies is also an important part of the analysis undertaken by our experts before they draft plans for executing your campaigns.",
  // },
  {
    color: "#f4622a",
    heading: "Development",
    content:
      "This is the technical implementation phase. Developers write the code for the blockchain network, including the creation of smart contracts, if needed. Smart contracts are self-executing contracts with predefined rules, often written in languages like Solidity for Ethereum.",
  },

  {
    color: "#254194",
    heading: "Testing",
    content:
      "Rigorous testing is crucial to ensure the security and functionality of the blockchain. Testing includes unit testing, integration testing, and security testing to identify and fix vulnerabilities.",
  },
  {
    color: " #F2B721",
    heading: "Deployment",
    content:
      "Once the blockchain is thoroughly tested and refined, it's ready for deployment. It's launched on the network, and nodes are set up to maintain the network. ",
  },
  {
    color: "#f4622a",
    heading: "Maintenance and Updates",
    content:
      "Blockchain networks require ongoing maintenance and updates to address security issues, improve performance, and add new features. This is often an iterative process.",
  },
  {
    color: "#254194",
    heading: "Security",
    content:
      "Ensuring the security of the blockchain is paramount. Measures like encryption, cryptographic hashing, and consensus mechanisms are put in place to prevent unauthorized access and data manipulation.",
  },
  {
    color: "#F2B721",
    heading: "User Interface",
    content:
      "Depending on the use case, user interfaces (UI) and user experiences (UX) may need to be developed to allow users to interact with the blockchain network easily.",
  },
  {
    color: "#f4622a",
    heading: "Documentation",
    content:
      "Comprehensive documentation is crucial for developers, users, and stakeholders to understand how the blockchain operates, how to use it, and how to develop on top of it.",
  },
  {
    color: "#254194",
    heading: "Education and Training",
    content:
      "If the blockchain network is intended for a broader audience, providing education and training materials can be essential to onboard users and developers effectively.",
  },
  {
    color: "#F2B721",
    heading: "Scaling",
    content:
      "As the network grows, scaling solutions may be necessary to handle increased transaction volume and maintain performance.",
  },
  {
    color: "#f4622a",
    heading: "Monitoring and Analytics",
    content:
      "Tools for monitoring the health and performance of the blockchain network are essential. Analytics can provide insights into user behavior and network activity.",
  },
];

const whyChooseData = [
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/ethr.png",
    name: "Ethereum",
    // data: ["Wordpress", "Joomla", "Drupal", "Wix", "Weebly", "Sitecore"],
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/binance.png",
    name: "Binance Smart Chain",
    // data: ["Elementor", "VisualComposer", "Yoast", "Everest Forms", "WP Mush"],
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/cardano.png",
    name: "Cardano",
    // data: [
    //   "Django",
    //   "Ruby on Rails",
    //   "Angular",
    //   "React JS",
    //   "ASP.Net",
    //   "CakePhP",
    // ],
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/eos.png",
    name: "EOS",
    // data: ["Elementor", "VisualComposer", "Yoast", "Everest Forms", "WP Mush"],
  },

  {
    height: "230px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/tezos.png",
    name: "Tezos",
    // data: ["Zapier", "Runscope", "Postman", "SoapUI"],
  },
];
const PrivateChooseData = [
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/hyper.png",
    name: "Hyperledger Fabric",
    // data: ["Wordpress", "Joomla", "Drupal", "Wix", "Weebly", "Sitecore"],
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/corda.png",
    name: "Corda",
    // data: ["Elementor", "VisualComposer", "Yoast", "Everest Forms", "WP Mush"],
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/quorum.png",
    name: "Quorum",
    // data: ["Elementor", "VisualComposer", "Yoast", "Everest Forms", "WP Mush"],
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/multi.png",
    name: "Multichain",
    // data: [
    //   "Django",
    //   "Ruby on Rails",
    //   "Angular",
    //   "React JS",
    //   "ASP.Net",
    //   "CakePhP",
    // ],
  },
  {
    height: "230px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/ethereum.png",
    name: "Ethereum",
    // data: ["Zapier", "Runscope", "Postman", "SoapUI"],
  },
];

const nftChooseData = [
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/ethr.png",
    name: "Ethereum",
    // data: ["Wordpress", "Joomla", "Drupal", "Wix", "Weebly", "Sitecore"],
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/binance.png",
    name: "Binance Smart Chain",
    // data: ["Elementor", "VisualComposer", "Yoast", "Everest Forms", "WP Mush"],
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/flow.png",
    name: "Flow",
    // data: ["Elementor", "VisualComposer", "Yoast", "Everest Forms", "WP Mush"],
  },
  {
    height: "220px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/wax.png",
    name: "WAX",
    // data: [
    //   "Django",
    //   "Ruby on Rails",
    //   "Angular",
    //   "React JS",
    //   "ASP.Net",
    //   "CakePhP",
    // ],
  },
  {
    height: "230px",
    img: "https://vcana-website-assets.s3.amazonaws.com/images/block-chain/polygon.png",
    name: "Polygon",
    // data: ["Zapier", "Runscope", "Postman", "SoapUI"],
  },
];
export default index;
