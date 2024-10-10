import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
// import Link from "next/link";
import styles from "./Sidebar.module.css";
// import StickyBox from "react-sticky-box";
// import { Dropdown } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import FetchService from "@/services/Fetch";
import { Notification } from "../Notification";

import Spinner from "react-bootstrap/Spinner";

//helper
const errorMessage = (error) => {
  return (
    <div
      style={{ color: "red", margintTop: "0px !important", display: "flex" }}
    >
      {error}
    </div>
  );
};

const Sidebar = () => {
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

  const {
    register,
    handleSubmit,
    getValues,
    resetField,
    reset,

    formState: { errors },
  } = useForm();

  const {
    mutate,
    isLoading,
    // error: reviewError,
    // data,
  } = useMutation({
    mutationFn: (payload) => FetchService.sendEmail(payload),

    onSuccess: () => {
      // setValu
      Notification(
        "success",
        "<div style='font-size:13px'>Thank you for contacting Vcana Global. Your message has been successfully received!</div>"
      );

      resetField("name", "email", "message", "phone");
      reset();
    },
  });

  const submitHandler = () => {
    mutate(getValues());
  };

  const contactHandler = () => {
    document.getElementById("side").style.transition = "all 0.5s ease-out";
    document.getElementById("side").style.top = "-200px";
  };

  useEffect(() => {
    let lastVal = 0;
    const handleScroll = () => {
      const show = window.scrollY;

      if (show < lastVal) {
        document.getElementById("side").style.transition = "all 0.5s ease-out";
        document.getElementById("side").style.top = "70px";
        lastVal = show;
      } else {
        lastVal = show;
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div id="side" style={{ top: "70px", position: "sticky" }}>
        <div className={`${styles.rectangleDiv} card1`}>
          <h2 className="mb-4">Our Service Catalog</h2>

          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Link href="/services/website-design-development">
                  Web Design and Development
                </Link>
              </Card.Header>
            </Card>
            <Card>
              <Card.Header>
                <Link href="/services/ecommerce-website-development">
                  E-COMMERCE WEBSITE DEVELOPMENT
                </Link>
              </Card.Header>
            </Card>
            {/* <Card>
              <Card.Header>
                <Link href="/services/application-development">
                  APPLICATION DEVELOPMENT
                </Link>
              </Card.Header>
            </Card> */}
            {/* <Card>
              <Card.Header>
                <Link href="/services">
                  <CustomToggle eventKey="6">
                    Web Application Development
                  </CustomToggle>
                </Link>
              </Card.Header>
            </Card> */}
            <Card>
              <Card.Header className="pluxicon">
                <Link href="/services/application-development">
                  APPLICATION DEVELOPMENT
                </Link>
                <CustomToggle eventKey="5">
                  <span>+</span>
                </CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <>
                  <Link href="/services/saas-paas">
                    <Card.Body style={{ textTransform: "math-auto" }}>
                      SAAS AND PAAS
                    </Card.Body>
                  </Link>
                  <Link href="/services/ai-ml-applications">
                    <Card.Body>AI Powered Applications</Card.Body>
                  </Link>
                </>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header className="pluxicon">
                <Link href="/services/mobile-application-development">
                  MOBILE APP DEVELOPMENT
                </Link>
                <CustomToggle eventKey="2">
                  <span>+</span>
                </CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <>
                  <Link href="/services/android-app-development">
                    <Card.Body>Android App Development</Card.Body>
                  </Link>
                  <Link href="/services/ios-app-development">
                    <Card.Body>
                      <small>i</small>os App Development
                    </Card.Body>
                  </Link>
                  <Link href="/services/cross-plateform-app-development">
                    <Card.Body>Cross Platform App Development</Card.Body>
                  </Link>
                </>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header className="pluxicon">
                <Link href="/services/digital-marketing">
                  DIGITAL MARKETING
                </Link>
                <CustomToggle eventKey="3">
                  <span>+</span>
                </CustomToggle>
              </Card.Header>

              <Accordion.Collapse eventKey="3">
                <>
                  {" "}
                  <Link href="/services/search-engine-optimization">
                    <Card.Body>Search Engine Optimization (SEO)</Card.Body>
                  </Link>
                  <Link href="/services/social-media-marketing">
                    <Card.Body>Social Media Marketing (SMM)</Card.Body>
                  </Link>
                  <Link href="/services/pay-per-click">
                    <Card.Body>Pay-Per-Click (PPC)</Card.Body>
                  </Link>
                  <Link href="/services/content-writing">
                    <Card.Body>Content Writing</Card.Body>
                  </Link>
                  <Link href="/services/email-marketing">
                    <Card.Body>EMAIL MARKETING</Card.Body>
                  </Link>
                </>
              </Accordion.Collapse>
            </Card>{" "}
            {/* <Card>
              <Card.Header>
                <CustomToggle eventKey="4">OUTSOURCING SERVICES</CustomToggle>
                <Accordion.Collapse eventKey="4"></Accordion.Collapse>
                <>
                  {" "}
                  <Card.Body> Business Process Outsourcing(BPO)</Card.Body>
                  <Card.Body> Knowledge Process Outsourcing (KPO)</Card.Body>
                  <Card.Body> Recruitment Process Outsourcing (RPO)</Card.Body>
                </>
              </Card.Header>
            </Card>{" "} */}
            {/* <Card>
              <Card.Header>
                <Link href="/services">
                  <CustomToggle eventKey="4">OUTSOURCING SERVICES</CustomToggle>
                </Link>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <>
                  {" "}
                  <Link href="/service">
                    <Card.Body> Business Process Outsourcing(BPO)</Card.Body>
                  </Link>
                  <Link href="/service">
                    <Card.Body> Knowledge Process Outsourcing (KPO)</Card.Body>
                  </Link>
                  <Link href="/service">
                    <Card.Body>
                      {" "}
                      Recruitment Process Outsourcing (RPO)
                    </Card.Body>
                  </Link>
                </>
              </Accordion.Collapse>
            </Card>{" "} */}
            <Card>
              <Card.Header>
                <Link href="/services/blockchain-development">
                  BLOCKCHAIN DEVELOPMENT
                </Link>
              </Card.Header>

              <Accordion.Collapse eventKey="5">
                <>
                  {" "}
                  {/* <Link href="/services/">
                    <Card.Body>services</Card.Body>
                  </Link> */}
                </>
              </Accordion.Collapse>
            </Card>{" "}
          </Accordion>
        </div>
        <div onClick={contactHandler} className={`${styles.rectangleDiv} mt-5`}>
          <h2>Connect With Us</h2>
          <div className={`${styles.hrdetail} mt-4`}>
            <hr />
          </div>
          <Form onSubmit={handleSubmit(submitHandler)}>
            <Form.Group
              className={styles.input}
              controlId="exampleForm.ControlInput2"
            >
              <Form.Control
                size="lg"
                type="text"
                placeholder="Your Name"
                className={styles.incontrol}
                {...register("name", {
                  required: true,
                  minLength: 2,
                  pattern: { value: /^[A-Za-z ]*$/ },
                })}
              />
              {errors.name &&
                errors.name.type === "required" &&
                errorMessage("Please enter a name")}
              {errors.name &&
                errors.name.type === "minLength" &&
                errorMessage("Name must be 2 characters")}
              {errors.name &&
                errors.name.type === "pattern" &&
                errorMessage(
                  "Please enter only alphabetic characters (A-Z, a-z)."
                )}
            </Form.Group>
            <Form.Group
              className={styles.input}
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                size="lg"
                type="email"
                placeholder="Your Email"
                className={styles.incontrol}
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  },
                })}
              />
              {errors.email &&
                errors.email.type === "required" &&
                errorMessage("Please enter email address")}
              {errors.email &&
                errors.email.type === "pattern" &&
                errorMessage("Invaid Email")}
            </Form.Group>

            <Form.Group
              className={styles.input}
              controlId="exampleForm.ControlTextarea3"
            >
              <Form.Control
                as="textarea"
                size="lg"
                rows={4}
                className={styles.textareaa}
                placeholder="Tell Us Your Project or Idea"
                {...register("message", {})}
              />
            </Form.Group>
            <Button
              type="submit"
              className={`${styles.formBtn} btnhover `}
              disabled={isLoading}
            >
              {isLoading ? (
                <Spinner
                  as="span"
                  animation="border"
                  size=""
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                "Send Message"
              )}
            </Button>
          </Form>
        </div>
        {/* 
        <div
          className={`${styles.sideImage} mt-5  widget cta-widget`}
          style={{
            backgroundImage: `url(https://vcana-website-assets.s3.amazonaws.com/images/bnr13.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "500px",
            width: "100%",
          }}
        >
          <h4 className="title">
            Need Any
            <br />
            Consultations?
          </h4>
          <Link href={"/"} className="site-button">
            Send Message
          </Link>
        </div> */}
      </div>
    </>
  );
};

export default Sidebar;
