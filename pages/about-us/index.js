import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Styles from "./index.module.css";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Banner from "@/components/shared/banner";
import Modal from "react-bootstrap/Modal";
import Link from "next/link";

import GetInTouch from "@/components/shared/getInTouch";
// import Loader from "@/helpers/Loader";
import { NextSeo } from "next-seo";

const Service = () => {
  const [modalShow, setModalShow] = React.useState(false);

  useEffect(() => {
    if (window) {
      const count = document.querySelectorAll(".number");
      let arr = Array.from(count);
      if (arr) {
        arr.map(function (item) {
          let startnumber = 0;
          function counterup() {
            startnumber++;
            item.innerHTML = `${startnumber}+`;

            if (startnumber == item.dataset.number) {
              clearInterval(stop);
            }
          }
          let stop = setInterval(function () {
            counterup();
          }, 50);
        });
      }
    }
  }, []);

  // count.map(function (item) {
  //   let startnumber = 0;

  //   function counterup() {
  //     startnumber++;
  //     item.innerHTML = startnumber;

  //     if (startnumber == item.dataset.number) {
  //       clearInterval(stop);
  //     }
  //   }

  //   let stop = setInterval(function () {
  //     counterup();
  //   }, 50);
  // });
  return (
    <>
      <NextSeo
        title="Website Design and Development Services Provider | Vcana Global"
        description="Transform your online presence with Vcana Global. Expert website design and development services tailored to your business needs. Contact us today!"
        canonical="https://www.vcanaglobal.com/about-us"
      />

      <h1 className="d-none">Website Design and Development Services</h1>
      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
      {/* here is the banner section start */}

      <Banner data={bannerData} />

      {/* here is the banner section end */}

      {/* here is the service section start */}
      <div className={`${Styles.main_services} `}>
        {/* about us first section start */}
        <div className={`${Styles.aboutbg} `}>
          <Container>
            <Row className={` ${Styles.headChoose} `}>
              <Col>
                <div className="short_heading"> About Us</div>
                <hr />
                <h2>
                  Welcome to <span> Vcana Global, </span> where digital{" "}
                  <span> dreams </span> become reality{" "}
                </h2>

                {/* <p>
                Welcome to Vcana Global, where digital dreams become reality.
                Our passion lies in crafting extraordinary digital experiences
                that drive business growth and leave lasting impressions.
              </p> */}
              </Col>
            </Row>
            <Row className={` ${Styles.firstsectionpadding}  `}>
              <Col
                xl={4}
                // md={12}
                lg={6}
                sm={12}
                // data-aos="fade-right"
                className={`${Styles.bannerinfo} ${Styles.imgBox} mx-auto`}
              >
                <Image
                  className={Styles.de}
                  src={
                    "https://vcana-website-assets.s3.amazonaws.com/images/about-us/welcome.webp"
                  }
                  width={400}
                  height={387}
                  alt="nb"
                />
              </Col>
              <Col
                xl={8}
                // md={11}
                lg={6}
                sm={12}
                // data-aos="fade-left"
                className={` mx-auto ${Styles.bannertext} `}
              >
                <p className={`fs-6 sm:text-center text-md-start mb-3`}>
                  The word ‘Vcana’ means ‘Promise’. Vcana Global is a CANDID IT
                  Consulting / Digital Marketing company with a host of services
                  to offer under one umbrella. Founded in the year 2019 by a
                  couple of IT enthusiasts who believe in making something big.
                  Today, Vcana Global is serving more than 100+ Clients across
                  the globe. We are a bunch of interesting people who work day
                  in and day out to achieve the goals of our clients.
                </p>
                <p className={`fs-6 sm:text-center text-md-start mb-3`}>
                  {" "}
                  Our core work strategy is instituted on a meticulous
                  understanding of every client’s needs, ever changing work
                  requirements and overall budget constraints. By using the
                  expertise and profound technological background, Vcana creates
                  an exhaustive web strategy for digital transformation of your
                  organization as per your business objectives. You can count
                  our IT consulting and in-depth market knowledge that will give
                  you an edge over others and help you program and digitize
                  operations, optimize company’s portfolio, and realize your
                  mission and vision.{" "}
                </p>
                <Row className={` mt-3 ${Styles.desktopview} `}>
                  <Col md={12} lg={6} sm={12} className="mx-auto">
                    <div className={Styles.vmission}>
                      <div className={Styles.vmflex}>
                        <Image
                          src={
                            "https://vcana-website-assets.s3.amazonaws.com/images/about-us/eye.png"
                          }
                          width={42}
                          height={42}
                          alt="nb"
                        />
                        <h3 className="ps-3">Our Vision</h3>
                      </div>
                      <span className="text-start pt-2 fs-6">
                        Our unwavering dedication ensures that our commitments
                        translate into positive actions. We empower clients to
                        achieve their goals and create a difference in the world
                        by contributing to the betterment of the society at
                        large.
                      </span>
                    </div>
                  </Col>

                  <Col md={12} lg={6} sm={12} className="mx-auto">
                    <div className={Styles.mission1}>
                      <div className={Styles.vmflex}>
                        <Image
                          src={
                            "https://vcana-website-assets.s3.amazonaws.com/images/about-us/reb.png"
                          }
                          width={42}
                          height={42}
                          alt="nb"
                        />
                        <h3 className="ps-3">Our Mission</h3>
                      </div>
                      <span className="text-start pt-6">
                        To become the one and only choice of our clients by
                        providing them with the top-notch services. Gaining
                        their trust by delivering innovative products and adding
                        value to organizations with utmost satisfaction and
                        accuracy.
                      </span>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className={` mt-3 ${Styles.tabview} `}>
              <Col md={6} lg={6} xl={6} sm={12} className="mx-auto">
                <div className={Styles.vmission}>
                  <div className={Styles.vmflex}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/about-us/eye.png"
                      }
                      width={42}
                      height={42}
                      alt="nb"
                    />
                    <h3 className="ps-3">Our Vision</h3>
                  </div>
                  <p className="text-start pt-2">
                    Our unwavering dedication ensures that our commitments
                    translate into positive actions. We empower clients to
                    achieve their goals and create a difference in the world by
                    contributing to the betterment of the society at large.
                  </p>
                </div>
              </Col>

              <Col md={6} lg={6} xl={6} sm={12} className="mx-auto">
                <div className={Styles.mission1}>
                  <div className={Styles.vmflex}>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/about-us/reb.png"
                      }
                      width={42}
                      height={42}
                      alt="nb"
                    />
                    <h3 className="ps-3">Our Mission</h3>
                  </div>
                  <p className="text-start pt-2">
                    To become the one and only choice of our clients by
                    providing them with the top-notch services. Gaining their
                    trust by delivering innovative products and adding value to
                    organizations with utmost satisfaction and accuracy.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* about us first section end */}
        {/* about us why choose us  start */}
        <div className={`${Styles.Choose} `}>
          <Container>
            <Row className={Styles.headChoose}>
              <Col>
                <div className="short_heading"> OUR FEATURES</div>
                <hr />
                <h2>
                  Our Key <span> Features </span>{" "}
                </h2>

                <p>
                  If you cannot decide which mobile application development
                  company to hire for your app development, these reasons will
                  help you make the right choice.
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={6} lg={4} className={Styles.sectionChoose}>
                <div>
                  <Image
                    src={
                      "https://vcana-website-assets.s3.amazonaws.com/images/about-us/Choose.gif"
                    }
                    width={80}
                    height={80}
                    alt="nb"
                  />
                  <h3 className={Styles?.h6Hover}>WORLD-WIDE TO WORLDWIDE</h3>
                  <p>
                    Although young, Vcana Global has more than 500+ clients
                    across the globe and has successfully delivered 200+
                    projects world-wide being true to our words,”We Deliver What
                    We Promise”.
                  </p>
                </div>
              </Col>
              <Col md={6} lg={4} className={Styles.sectionChoose}>
                <div>
                  <Image
                    src={
                      "https://vcana-website-assets.s3.amazonaws.com/images/about-us/Choose1.gif"
                    }
                    width={80}
                    height={80}
                    alt="nb"
                  />
                  <h3>INDUSTRY WIDE TO INDUSTRYWIDE</h3>
                  <p>
                    Vcana Global team brings immense experience in required
                    technologies that are being used industry wide and keep
                    ourselves updated with new and upcoming technologies.
                  </p>
                </div>
              </Col>
              <Col md={6} lg={4} className={Styles.sectionChoose}>
                <div>
                  <Image
                    src={
                      "https://vcana-website-assets.s3.amazonaws.com/images/about-us/Choose2.gif"
                    }
                    width={80}
                    height={80}
                    alt="nb"
                  />
                  <h3>SEAMLESS TEAM INTERACTION</h3>
                  <p>
                    Vcana Global, we leverage technology to uphold commitments.
                    Equipped with essential tools, our team ensures project
                    excellence. Our entire team stays seamlessly connected,
                    whether sitting in a room or miles apart.
                  </p>
                </div>
              </Col>
              <Col md={6} lg={4} className={Styles.sectionChoose}>
                <div>
                  <Image
                    src={
                      "https://vcana-website-assets.s3.amazonaws.com/images/about-us/Choose3.gif"
                    }
                    width={80}
                    height={80}
                    alt="nb"
                  />
                  <h3>TIMED, BUDGETED SUCCESS</h3>
                  <p>
                    We pride ourselves when it comes to delivering the projects
                    to our customers. Vcana Global has track record of
                    delivering 100% projects well on or before the agreed time
                    and within specified budget of our customers.
                  </p>
                </div>
              </Col>
              <Col md={6} lg={4} className={Styles.sectionChoose}>
                <div>
                  <Image
                    src={
                      "https://vcana-website-assets.s3.amazonaws.com/images/about-us/Choose4.gif"
                    }
                    width={80}
                    height={80}
                    alt="nb"
                  />
                  <h3>PERSONALIZED SOLUTIONS</h3>
                  <p>
                    Since inception, Vcana Global has been catering to the needs
                    of small and medium businesses throughout the world. A touch
                    of personal attention to each and every customer is what
                    makes us different. We go the extra mile for complex client
                    needs.
                  </p>
                </div>
              </Col>
              <Col md={6} lg={4} className={Styles.sectionChoose}>
                <div>
                  <Image
                    src={
                      "https://vcana-website-assets.s3.amazonaws.com/images/about-us/Choose5.gif"
                    }
                    width={80}
                    height={80}
                    alt="nb"
                  />
                  <h3>TOP-MOST TO TOPMOST</h3>
                  <p>
                    At Vcana Global, fulfilling each and every requirement of
                    yours is our top-most priority. We ensure that all your
                    needs are accounted for and properly addressed. Count on us
                    to keep your operations up & running 24/7.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* about us why choose us  end  */}
      </div>

      {/* here is the service section end */}

      {/* here is the expertise section start */}
      <div className={Styles.ourexpertisebg}>
        <Container>
          <Row className={`mx-auto ${Styles.ourexpertise} `}>
            <Col md={12} lg={5} xl={6} sm={12} className="">
              <div className={`${Styles.ourexpertisetimg} `}>
                <Image
                  className={Styles.exerptise}
                  src={
                    "https://vcana-website-assets.s3.amazonaws.com/images/about-us/AboutGif.gif"
                  }
                  width={400}
                  height={387}
                  alt="nb"
                />
              </div>
            </Col>
            <Col md={12} lg={7} xl={6} sm={12}>
              <div className={` ${Styles.ourexpertisetext}  `}>
                <div className={Styles.xpertiseflex}>
                  <Image
                    src={
                      "https://vcana-website-assets.s3.amazonaws.com/images/about-us/OurExpertise.gif"
                    }
                    width={40}
                    height={38}
                    alt="nb"
                  />
                  <h2 className="ps-3 text-light">Our Expertise</h2>
                </div>
                <p className="text-start pt-2">
                  At Vcana Global, we offer a comprehensive suite of services
                  that include web design, development, mobile app creation, and
                  digital marketing. Our integrated approach ensures seamless
                  solutions that captivate audiences and deliver tangible
                  results. From designing visually stunning websites to
                  developing functional mobile apps and executing effective
                  marketing campaigns, we are your go-to team.
                </p>
                <div className={Styles.aboutcta}>
                  <Link href="#contact">
                    {" "}
                    <button>Work with Us</button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* here is the expertise section end */}

      {/* here is value section end */}
      <div className={`${Styles.Choose} `}>
        <Container>
          <Row className={Styles.headChoose}>
            <Col>
              <div className="short_heading">Our Values</div>
              <hr />
              <h2>
                OUR <span> CORE </span> VALUES
              </h2>

              <p>
                As the name suggests, we believe in keeping our word and from
                that comes our punch line 'We Deliver What We Promise'.
              </p>
            </Col>
          </Row>

          {
            <div className={Styles.desktview}>
              {" "}
              <Image
                className={`${Styles.de1} pb-3 mt-4 `}
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/about-us/values22.gif"
                }
                width={12000}
                height={6000}
                alt="nb"
              />
            </div>
          }
          <div className={Styles.mobileview}>
            {" "}
            <Image
              className={`${Styles.de1} pb-3 mt-4 `}
              src={
                "https://vcana-website-assets.s3.amazonaws.com/images/about-us/values11.webp"
              }
              width={12000}
              height={6000}
              alt="nb"
            />
          </div>
        </Container>
      </div>

      {/* here is value section end */}

      {/* about us leadership section  start */}

      {/* about us leadership section end*/}
      <div className={Styles.leadership}>
        <Container>
          <Row className={`${Styles.headChoose} `}>
            <Col>
              <div className="text-light  short_heading">Our Leadership</div>
              <hr />
              <h2 className="text-light mt-3">
                Meet <span>Vcana Global's</span> dynamic leadership
              </h2>

              <p className="text-light">
                With diverse expertise, our leaders bring strategic insights and
                a wealth of experience to guide our company towards continuous
                growth and success. Discover the faces behind our thriving
                organization.
              </p>
            </Col>
          </Row>
          <Row className={`mx-auto ${Styles.Leadertabs} `}>
            <Col md={12} className={`mx-auto ${Styles.Leadertabs} `}>
              <Row>
                <Col md={6}>
                  <div className={`${Styles.leader} ${Styles.leadertabs} `}>
                    <Image
                      src="https://vcana-website-assets.s3.amazonaws.com/images/about-us/vishaln.webp"
                      alt="sdaf"
                      height={110}
                      className={Styles.leader_img}
                      width={110}
                      //loader={Loader}
                    />
                    <h3>Vishal sud</h3>
                    <h4> Co-Founder & President </h4>
                    <p>
                      {" "}
                      As a visionary strategist, Mr Sud, orchestrates
                      innovation, strategy, and transformation to ensure Vcana
                      Global, remains at the forefront of industry's
                      ever-evolving landscape.
                    </p>

                    {/* <Link href={""}>Read More {">>"}</Link> */}

                    <ul>
                      <li>
                        <Link
                          href={"https://www.linkedin.com/in/vishalsud/"}
                          target="_blank"
                        >
                          Know More {">>"}
                        </Link>
                      </li>

                      <li>
                        <Link
                          href={"https://www.linkedin.com/in/vishalsud/"}
                          target="_blank"
                          className={Styles.links}
                        >
                          <Image
                            src="https://vcana-website-assets.s3.amazonaws.com/images/about-us/link.png"
                            href={"https://www.linkedin.com/in/vishalsud/"}
                            target="_blank"
                            alt="sdaf"
                            height={30}
                            className={Styles.imghover}
                            width={30}
                          />{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md={6}>
                  <div className={`${Styles.leader} ${Styles.leadertab} `}>
                    <Image
                      src="https://vcana-website-assets.s3.amazonaws.com/images/about-us/anshuln.webp"
                      alt="pic"
                      height={110}
                      className={Styles.leader_img}
                      width={110}
                      //loader={Loader}
                    />
                    <h3>Anshul Verma</h3>
                    <h4> Co-Founder & CEO </h4>
                    <p>
                      {" "}
                      As a CEO, Mr Verma, a visionary leader, adeptly navigates
                      corporate decisions and relationships, setting the
                      company's tone and vision ensuring a brighter future for
                      Vcana Global.
                    </p>

                    <ul>
                      <li>
                        <Link
                          href={
                            "https://www.linkedin.com/in/anshulverma1986?trk=public_profile_browsemap-profile"
                          }
                          target="_blank"
                        >
                          Know More{">>"}
                        </Link>
                      </li>

                      <li>
                        <Link
                          href={
                            "https://www.linkedin.com/in/anshulverma1986?trk=public_profile_browsemap-profile"
                          }
                          target="_blank"
                          className={Styles.links}
                        >
                          <Image
                            src="https://vcana-website-assets.s3.amazonaws.com/images/about-us/link.png"
                            alt="pic"
                            height={30}
                            width={30}
                            className={Styles.imghover}
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      {/* about us counter section  start */}
      <div className={Styles.contersec}>
        <Container className={Styles.counter}>
          <h2 className="text-light">
            A Symphony of Success: Decoding Our Achievements in Numbers
          </h2>
          <Row id="projectFacts" className={Styles.sectionClass}>
            <div className={`columns eight ${Styles.fullWidth} `}>
              <div className={Styles.projectFactsWrap}>
                <div
                  className={` item wow fadeInUpBig animated animated ${Styles.item11} `}
                >
                  <h3 data-number="4" id="number1" className="number"></h3>

                  <span></span>

                  <p>Years in Business</p>
                </div>
                <div
                  className={` item wow fadeInUpBig animated animated ${Styles.item11} `}
                >
                  <h3 data-number="500" id="number1" className="number"></h3>
                  <span></span>
                  <p>Happy Clients</p>
                </div>
                <div
                  className={` item wow fadeInUpBig animated animated ${Styles.item11} `}
                >
                  <h3 data-number="24" id="number1" className="number"></h3>
                  <span></span>
                  <p>Technical Experts</p>
                </div>
                <div
                  className={` item wow fadeInUpBig animated animated ${Styles.item11} `}
                >
                  <h3 data-number="600" id="number1" className="number"></h3>
                  <span></span>
                  <p>Projects Delivered</p>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      {/* about us counter section  end */}

      {/* about us grt in touch section  start */}
      <GetInTouch data={GetInTouchData} />
      {/* about us grt in touch section end */}
    </>
  );
};

const bannerData = {
  heading: "About Us",
  img: "https://vcana-website-assets.s3.amazonaws.com/images/banners/aboutnew.webp",
};
const GetInTouchData = {
  heading: "Contact Us for Your <span> Business Needs</span>",
  desc: " We are always ready to respond to any questions, comments or suggestions that you want to share with us about your business. So talk with us whenever you want through your preferred communication channel.",
  sub_headR: "Send Us A Message",
  sub_headL: "Speak to Us",
  sub_head1: "",
  sub_head2: "At Vcana Global, you are assured to get ",
  sub_descStart:
    "We are eager to grow your business with our cutting-edge web & digital marketing services. Call our experts at ",
  sub_descEnd:
    " or meet them in-person at our premises to let them take the next step.",
  LI: [
    "Fulfillment of Promises",
    "Unmatched excellence and quality",
    "A dedicated team to support your business endeavors",
  ],
};

export default Service;
