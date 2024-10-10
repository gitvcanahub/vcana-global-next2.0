import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Button,
  Accordion,
  useAccordionButton,
  Card,
} from "react-bootstrap";
import { MdMail, MdOutlinePhoneInTalk } from "react-icons/md";
import { BiSolidMap } from "react-icons/bi";
import Link from "next/link";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import Styles from "./Header.module.css";

function Header() {
  const [navBackground, setNavBackground] = useState(false);

  function toggleNav() {
    // document.getElementById("mySidepanel").addEventListener("click", () => {
    //   document.getElementById("mySidepanel").style.height = "0";
    // } )

    if (Number(document.getElementById("mySidepanel").clientHeight) > 0) {
      document.getElementById("mail_info").style.display = "block";
      document.getElementById("mySidepanel").style.height = "0";
      document.getElementById("toggleB").childNodes[0].style.transform = "";
      document.getElementById("toggleB").childNodes[1].style.opacity = "1";
      document.getElementById("toggleB").childNodes[2].style.transform = "";
    } else {
      document.getElementById("mail_info").style.display = "none";
      document.getElementById("mySidepanel").style.height = "100%";
      document.getElementById("toggleB").childNodes[0].style.transform =
        "rotate(45deg) translate(5px, 4px) ";
      document.getElementById("toggleB").childNodes[1].style.opacity = "0";
      document.getElementById("toggleB").childNodes[2].style.transform =
        "rotate(-45deg) translate(12px, -10px) ";
    }
  }

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => "");

    return (
      <button
        type="button"
        onClick={decoratedOnClick}
        // onMouseLeave={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  /* Set the width of the sidebar to 0 (hide it) */
  // function closeNav() {
  //   document.getElementById("mySidepanel").style.height = "0";
  // }

  useEffect(() => {
    // document.getElementById("mySidepanel").style.top = "44px";
    //  document.getElementById("mySidepanel").style.transition='0.9s ease'
    const handleScroll = () => {
      const show = window.scrollY >= 50;

      if (show) {
        setNavBackground(true);
        // document.getElementById("mySidepanel").style.top = "0px";
      } else {
        // document.getElementById("mySidepanel").style.top = "44px";
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //handle arrow click transform

  const arrowTransform = () => {
    if (document.getElementById("dwn_arrow").style.transform) {
      document.getElementById("dwn_arrow").style.transform = "";
    } else {
      document.getElementById("dwn_arrow").style.transform = "rotate(90deg)";
    }
  };

  return (
    <>
      {/* header Section Start */}
      {/* add some  */}
      <div
        id="mail_info"
        className={`${Styles.headercontact} `}

        // style={{ color: router.pathname === "/" ? "black" : "white" }}
      >
        <Container>
          <Row className={`${Styles.topHead}align-items-center`}>
            <Col
              className={`${Styles.phoneIcon} d-flex justify-content-lg-between`}
            >
              <div className="d-flex ">
                <ul>
                  <li className={Styles.tell}>
                    {" "}
                    <MdOutlinePhoneInTalk size={20} />
                    <Link href="tel:+1 (302) 394-6860"> +1 (302) 394-6860</Link>
                  </li>
                  <li>
                    <BiSolidMap size={22} />
                    <Link
                      href="https://maps.app.goo.gl/Cec9vkGTJ3jf9J3BA"
                      target="_blank"
                    >
                      651 N. Broad St., Suite 206, Middletown, DE 19709
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>
                    {" "}
                    <MdMail size={20} />{" "}
                    <Link href="mailto:info@vcanaglobal.com">
                      {" "}
                      info@vcanaglobal.com
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <MdMail size={20} />{" "}
                    <Link href="mailto:sales@vcanaglobal.com">
                      {" "}
                      <span>sales@vcanaglobal.com</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className={`${Styles.loHeader} ${Styles.headerposition} ${
          navBackground ? Styles.fixedHeader : ""
        }`}
      >
        <div className={Styles.main}>
          <Navbar expand="lg" className={`${Styles.setNav} `}>
            <Container className="align-middle cmx">
              <div
                style={{
                  display: "flex",
                  justifyContent: "spaceBetween;",
                }}
              >
                <div className="">
                  <Link href="/">
                    <Image
                      width={200}
                      height={100}
                      src="https://vcana-website-assets.s3.amazonaws.com/images/home/logovc.svg"
                      alt="Picture of logo"
                    />
                  </Link>
                </div>

                <div
                  className={Styles.toggleBtn}
                  id="toggleB"
                  onClick={toggleNav}
                >
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>

              <div id="mySidepanel" className={Styles.sidepanel}>
                {" "}
                <Link onClick={toggleNav} href="/">
                  Home
                </Link>
                <Link onClick={toggleNav} href="/about-us">
                  About
                </Link>
                <Accordion defaultActiveKey="0">
                  <Card className="demotext">
                    <Card.Header>
                      <Link onClick={toggleNav} href="/services">
                        Services
                      </Link>
                      <CustomToggle eventKey="2">
                        <span id="dwn_arrow" onClick={arrowTransform}>
                          {">"}
                        </span>
                      </CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <>
                        <Link
                          onClick={toggleNav}
                          href="/services/website-design-development"
                        >
                          <Card.Body>Web Design and Development</Card.Body>
                        </Link>
                        <Link
                          onClick={toggleNav}
                          href="/services/ecommerce-website-development"
                        >
                          <Card.Body>E-COMMERCE WEBSITE DEVELOPMENT</Card.Body>
                        </Link>
                        <Accordion defaultActiveKey="0">
                          <Card>
                            <Card.Header className="pluxicon1111 mt-2">
                              <Link
                                onClick={toggleNav}
                                href="/services/application-development"
                              >
                                APPLICATION DEVELOPMENT
                              </Link>
                              <CustomToggle eventKey="15">
                                <span> {">"}</span>
                              </CustomToggle>
                            </Card.Header>
                            <div className="menu_style mat">
                              <Accordion.Collapse eventKey="15">
                                <>
                                  <Link
                                    onClick={toggleNav}
                                    href="/services/saas-paas"
                                  >
                                    <Card.Body>PaaS and SaaS</Card.Body>
                                  </Link>
                                  <Link
                                    onClick={toggleNav}
                                    href="/services/ai-ml-applications"
                                  >
                                    <Card.Body>ai-ml-applications</Card.Body>
                                  </Link>
                                </>
                              </Accordion.Collapse>
                            </div>
                          </Card>
                        </Accordion>
                        <Accordion defaultActiveKey="0">
                          <Card>
                            <Card.Header className="pluxicon111 ">
                              <Link
                                onClick={toggleNav}
                                href="/services/mobile-application-development"
                              >
                                MOBILE APP DEVELOPMENT
                              </Link>
                              <CustomToggle eventKey="10">
                                <span> {">"}</span>
                              </CustomToggle>
                            </Card.Header>
                            <div className="menu_style margian">
                              <Accordion.Collapse eventKey="10">
                                <>
                                  <Link
                                    onClick={toggleNav}
                                    href="/services/android-app-development"
                                  >
                                    <Card.Body>
                                      Android App Development
                                    </Card.Body>
                                  </Link>
                                  <Link
                                    onClick={toggleNav}
                                    href="/services/ios-app-development"
                                  >
                                    <Card.Body>
                                      <small>i</small>os App Development
                                    </Card.Body>
                                  </Link>
                                  <Link
                                    onClick={toggleNav}
                                    href="/services/cross-plateform-app-development"
                                  >
                                    <Card.Body>
                                      Cross Platform App Development
                                    </Card.Body>
                                  </Link>
                                </>
                              </Accordion.Collapse>
                            </div>
                          </Card>
                        </Accordion>

                        <Accordion defaultActiveKey="0">
                          <Card>
                            <Card.Header className="pluxicon1111">
                              <Link
                                onClick={toggleNav}
                                href="/services/digital-marketing"
                              >
                                DIGITAL MARKETINg
                              </Link>
                              <CustomToggle eventKey="11">
                                <span> {">"}</span>
                              </CustomToggle>
                            </Card.Header>
                            <div className="menu_style">
                              <Accordion.Collapse eventKey="11">
                                <>
                                  {" "}
                                  <Link
                                    onClick={toggleNav}
                                    href="/services/search-engine-optimization"
                                  >
                                    <Card.Body>
                                      Search Engine Optimization (SEO)
                                    </Card.Body>
                                  </Link>
                                  <Link
                                    onClick={toggleNav}
                                    href="/services/social-media-marketing"
                                  >
                                    <Card.Body>
                                      Social Media Marketing (SMM)
                                    </Card.Body>
                                  </Link>
                                  <Link
                                    onClick={toggleNav}
                                    href="/services/pay-per-click"
                                  >
                                    <Card.Body>Pay-Per-Click (PPC)</Card.Body>
                                  </Link>
                                  <Link
                                    onClick={toggleNav}
                                    href="/services/content-writing"
                                  >
                                    <Card.Body>Content Writing</Card.Body>
                                  </Link>
                                  <Link
                                    onClick={toggleNav}
                                    href="/services/email-marketing"
                                  >
                                    <Card.Body>EMAIL MARKETING</Card.Body>
                                  </Link>
                                </>
                              </Accordion.Collapse>
                            </div>
                          </Card>
                        </Accordion>

                        <Link
                          onClick={toggleNav}
                          href="/services/blockchain-development"
                        >
                          <Card.Body>BLOCKCHAIN DEVELOPMENT</Card.Body>
                        </Link>
                      </>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                <Link onClick={toggleNav} href="/blog">
                  Blog
                </Link>
                <Link onClick={toggleNav} href="/portfolio">
                  Portfolio
                </Link>
                <Link onClick={toggleNav} href="/contact">
                  Contact
                </Link>
                <Link
                  target="_blank"
                  href="https://calendly.com/anshul-10/discussion-website-designing-development?month=2024-01"
                >
                  <Button className={Styles.btnhover}>
                    <span>Book a Meeting</span>
                  </Button>
                </Link>
              </div>
              <Navbar.Collapse
                id="basic-navbar-nav"
                className={`${Styles.navMenu} d-lg-flex justify-content-end`}
              >
                <Nav className="" navbarScroll>
                  <Link href="/">Home</Link>
                  <Link href="/about-us">About</Link>
                  <Link href="/services"> Services</Link>
                  <Link href="/blog">Blog</Link>
                  <Link href="/portfolio"> Portfolio</Link>
                  <Link href="/contact">Contact</Link>
                </Nav>
                <Link
                  target="_blank"
                  href="https://calendly.com/anshul-10/discussion-website-designing-development?month=2024-01"
                >
                  <Button className={Styles.btnhover}>
                    <span>Book a Meeting</span>
                  </Button>
                </Link>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
      {/* header Section End */}
    </>
  );
}

export default Header;
