import React, { useState } from "react";
import Banner from "@/components/shared/banner";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Image from "next/image";
import styles from "./index.module.css";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import FetchService from "@/services/Fetch";
import { Notification } from "@/components/shared/Notification";
import Link from "next/link";
import Spinner from "react-bootstrap/Spinner";
// import Loader from "@/helpers/Loader";
import PhoneInput from "react-phone-number-input";
import { NextSeo } from "next-seo";
import { isValidPhoneNumber } from "react-phone-number-input";
//helper
const errorMessage = (error) => {
  return (
    <div
      style={{ color: "red", margintTop: "5px !important", display: "flex" }}
    >
      {error}
    </div>
  );
};

const Contact = () => {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState({
    required: true,
    valid: true,
  });
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: (payload) => FetchService.sendEmail(payload),

    onSuccess: () => {
      Notification(
        "success",
        "<div style='font-size:13px'>Thank you for contacting Vcana Global. Your message has been successfully received!</div>"
      );
      setPhoneError({
        required: true,
        valid: true,
      });

      setPhone("");

      reset();
    },
  });

  const submitHandler = () => {
    if (phoneError.required && phoneError.valid) {
      mutate({ ...getValues(), phone: phone });
    }
  };

  return (
    <>
      <NextSeo
        title="Contact Vcana Global: #1 Web Design & Dev Company in USA & India"
        description="Connect with Vcana Global, the top web design & development company in USA &
India. We turn your web vision into reality. Reach us at sales@vcanaglobal.com."
        canonical="https://www.vcanaglobal.com/contact"
      />
      {/* here is the banner section start */}

      <Banner data={bannerData} />
      <h1 className="d-none">
        Contact Us to Boost Your Digital Journey and Business Potential with
        Mobile & Web Help!
      </h1>

      {/* here is the banner section end */}
      <div className={styles.bodyColor}>
        <Container className="mb-5">
          <Row className={` mt-5 ${styles.j}  `}>
            {/* here is the text area section start */}

            <Col className={styles.mainHeading}>
              <span className="text-center mt-3 mb-2 fw-bold fs-5  mb-2 short_heading">
                Contact us
              </span>
              <hr />
              <h2 className="mt-3  text-center">
                Contact Us for<span> Your Business Needs</span>
              </h2>
              <div className={styles.textp}>
                <p className="text-center  fs-6 p-lg-1">
                  We are always ready to respond to any questions, comments or
                  suggestions that you want to share with us about <br /> your
                  business. So talk with us whenever you want through your
                  preferred communication channel.
                </p>
              </div>
            </Col>

            {/* here is the text area section end */}

            {/* here is the box-content section start */}
            <Row id="contact" className={styles.form_container}>
              <Col lg={6} md={6} xs={12} sm={12} className="md-m-5 ">
                <div className={styles.w90}>
                  <h3 className={styles.heading}>Get in Touch.</h3>

                  <div className={styles.heading_line}>
                    <div className={styles.heading_line1}></div>
                    <div className={styles.heading_line2}></div>
                  </div>
                  <div>
                    <div className={styles.contact_detail}>
                      <Image
                        src={
                          "https://vcana-website-assets.s3.amazonaws.com/images/contact/Icon (1).png"
                        }
                        width={70}
                        height={70}
                        //loader={Loader}
                        alt="sdf"
                      />
                      <ul className={styles.info}>
                        <li className={styles.info_head}> Phone :</li>
                        <li className={styles.info_desc}>
                          <Link href="tel:+1 (302) 394-6860 ">
                            +1 (302) 394-6860
                          </Link>
                        </li>
                        <li className={styles.info_desc}>
                          <Link href="tel:+91 172-5026778 ">
                            +91 1725026778
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className={styles.contact_detail}>
                      <Image
                        src={
                          "https://vcana-website-assets.s3.amazonaws.com/images/contact/Icon (3).png"
                        }
                        width={70}
                        height={70}
                        alt="sdfg"
                        //loader={Loader}
                      />
                      <ul className={styles.info}>
                        <li className={styles.info_head}> Email:</li>
                        <li className={styles.info_desc}>
                          {" "}
                          <Link href="mailto:info@Vcanaglobal.com">
                            info@vcanaglobal.com
                          </Link>
                        </li>
                        <li className={styles.info_desc}>
                          <Link href="mailto:info@Vcanaglobal.com">
                            sales@vcanaglobal.com
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className={styles.contact_detail}>
                      <Image
                        src={
                          "https://vcana-website-assets.s3.amazonaws.com/images/contact/whataap.png"
                        }
                        width={70}
                        height={70}
                        //loader={Loader}
                        alt="sdd"
                      />
                      <ul className={styles.info}>
                        <li className={styles.info_head}> Whats App</li>
                        <li className={styles.info_desc}>
                          <Link href="https://wa.me/+13023946830">
                            +1 (302) 394-6860{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} xs={12} sm={12} className="md-m-5 ">
                <div className={styles.w90}>
                  <h3 className={styles.heading}>Send Us A Message</h3>

                  <div className={`${styles.heading_line}`}>
                    <div className={styles.heading_line1}></div>
                    <div className={styles.heading_line2}></div>
                  </div>

                  <Row>
                    <div className="mt-md-3">
                      <Form onSubmit={handleSubmit(submitHandler)}>
                        <div className={`${styles.input_align}`}>
                          <Col md={6}>
                            <Form.Group controlId="name">
                              <span>*</span>
                              <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                className={`${styles.input}  ${styles.inpu} `}
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
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              controlId="phone"
                              style={{ marginBottom: "35px" }}
                            >
                              <span>*</span>
                              {/* <Form.Control */}
                              <PhoneInput
                                international
                                defaultCountry="US"
                                ountryCallingCodeEditable={false}
                                placeholder="Enter your phone number"
                                className={`${styles.input} ml ${styles.phNumber}`}
                                value={phone}
                                type="tel"
                                onChange={(e) => {
                                  setPhone(e);
                                  setPhoneError({
                                    required: !!e,
                                    valid: isValidPhoneNumber(
                                      e?.toString() ? e?.toString() : "+1"
                                    ),
                                  });
                                }}
                              />
                              {!phoneError.required &&
                                !phoneError.valid &&
                                errorMessage("Please enter a Phone Number")}

                              {phoneError.required &&
                                !phoneError.valid &&
                                errorMessage("Invaid Phone Number")}
                            </Form.Group>
                          </Col>
                        </div>
                        <Form.Group
                          controlId="email"
                          style={{ marginBottom: "35px" }}
                        >
                          <span>*</span>
                          <Form.Control
                            type="email"
                            placeholder="Enter email address"
                            className={styles.input}
                            {...register("email", {
                              required: true,
                              pattern: {
                                value:
                                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
                          controlId="message"
                          style={{ marginBottom: "35px" }}
                        >
                          <Form.Control
                            as="textarea"
                            rows={6}
                            className={styles.input1}
                            placeholder="Enter your message"
                            {...register("message", {})}
                          />
                        </Form.Group>

                        <Button
                          className={styles.submit_btn}
                          type="submit"
                          onClick={() => {
                            setPhoneError({
                              required: !!phone,
                              valid: isValidPhoneNumber(phone ? phone : ""),
                            });
                          }}
                        >
                          {isLoading ? (
                            <Spinner
                              as="span"
                              animation="border"
                              size="sm"
                              role="status"
                              aria-hidden="true"
                              variant="light"
                            />
                          ) : (
                            "Send Message"
                          )}
                        </Button>
                      </Form>
                    </div>
                  </Row>
                </div>
              </Col>
            </Row>

            {/* here is the box-content section start */}
          </Row>
        </Container>
      </div>
      <Container className={`  ${styles.mainpai} `}>
        {/* <Row> */}
        <Row className={` mt-5 ${styles.j} map-iframe `}>
          {/* here is the text area section start */}

          <Col md={12} sm={12} className={styles.mainHeading}>
            <span className="text-center fw-bold fs-5 mt-3 mb-2 short_heading">
              Offices
            </span>
            <hr />
            <h2 className={`${styles.mainHedding} mt-3  text-center`}>
              Our Business<span> Presence</span>
            </h2>
            <div className={styles.textp}>
              <p className="text-center  fs-6 p-lg-1">
                Our powerful presence enables us to effectively serve the needs
                of our diverse clients distributed all around the world
                <br /> and proactively contribute in their business growth and
                success.
              </p>
            </div>
          </Col>

          <Col
            lg={6}
            md={6}
            xs={12}
            sm={12}
            className={`mb-5  ${styles.mainpaddi1} `}
          >
            <h3 className={`${styles.heading} ${styles.office} `}>
              INDIA OFFICE
            </h3>

            <div className={`${styles.heading_line} mb-5`}>
              <div className={styles.heading_line1}></div>
              <div className={styles.heading_line2}></div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.404913554876!2d76.68453477543021!3d30.707015286875375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefe44572a7c7%3A0xfdbafc3b892f2686!2sTimes%20Square!5e0!3m2!1sen!2sin!4v1690390623799!5m2!1sen!2sin"
              width="100%"
              height="450"
              className={`${styles.maps} `}
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
          </Col>
          <Col
            lg={6}
            md={6}
            xs={12}
            sm={12}
            className={`mb-5  ${styles.mainpaddi2} `}
          >
            <h3 className={`${styles.heading} ${styles.office}`}> US OFFICE</h3>

            <div className={`${styles.heading_line} mb-5`}>
              <div className={styles.heading_line1}></div>
              <div className={styles.heading_line2}></div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.5937255925473!2d-75.72001722408338!3d39.45591377161011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7a079b0b659fb%3A0x6576ccb231bb2892!2s651%20N%20Broad%20St%20%23206%2C%20Middletown%2C%20DE%2019709%2C%20USA!5e0!3m2!1sen!2sin!4v1690616994831!5m2!1sen!2sin"
              width="100%"
              height="450"
              className={`${styles.maps} `}
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const bannerData = {
  heading: "Contact",

  // content:
  //   "We are eager to partner with you for growing your business. Just connect with us to explain the unique digital marketing needs of your business. Our experts will carefully go through your details and accordingly suggest you the next step for going ahead in your project.",

  img: "https://vcana-website-assets.s3.amazonaws.com/images/banners/contact.webp",
  btnText: "Get Started!",
};

export default Contact;
