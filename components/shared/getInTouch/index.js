import React, { useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import {
  Row,
  Col,
  Form,
  Container,
  Button,
  // ToastContainer,
} from "react-bootstrap";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import FetchService from "@/services/Fetch";
import { Notification } from "../Notification";
import renderHTML from "@/helpers/renderHTML";
import PhoneInput from "react-phone-number-input";
import Link from "next/link";
import Spinner from "react-bootstrap/Spinner";
import { isValidPhoneNumber } from "react-phone-number-input";

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

const GetInTouch = ({ data }) => {
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState({
    required: true,
    valid: true,
  });

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
    isPending: isLoading,

    // error: reviewError,
    // data,
  } = useMutation({
    mutationFn: (payload) => FetchService.sendEmail(payload),

    onSuccess: () => {
      setPhoneError({
        required: true,
        valid: true,
      });

      setPhone("");
      Notification(
        "success",
        "<div style='font-size:13px'>Thank you for contacting Vcana Global. Your message has been successfully received!</div>"
      );

      resetField("name", "email", "message", "phone");
      reset();
    },

    onError: (error) => {
      Notification(
        "error",
        `<div style='font-size:13px'>An error occurred: ${
          error.error || "Please try again later."
        }</div>`
      );
    },
  });

  const submitHandler = () => {
    if (phoneError.required && phoneError.valid) {
      mutate({ ...getValues(), phone: phone });
    }
  };

  return (
    <div id="contact" className={`${styles.bodyColor} ${styles.bgbody} `}>
      <Container className={` ${styles.upcont}  `}>
        <div
          className={` ${styles.serviceresponsive} ${styles.getresponive}  `}
        >
          <Row className={` ${styles.upcont}  `}>
            {/* here is the text area section start */}

            <Col className={styles.mainHeading}>
              <div className="short_heading">Contact us</div>
              <hr />
              <h2 className="mt-3 px-4">{renderHTML(data?.heading)}</h2>
              <div className={styles.textp}>
                <p className="text-center  fs-6 p-lg-1">{data?.desc}</p>
              </div>
            </Col>

            {/* here is the text area section end */}

            {/* here is the box-content section start */}
            <div className={styles.topadjustment}>
              <Row className={styles.form_container}>
                <Col lg={6} md={12} xs={12} sm={12} className="md-m-5 ">
                  <div className={`${styles.rcontents} ${styles.w90}`}>
                    <h3 className={` ${styles.heading} text-white`}>
                      {data?.sub_headL}
                    </h3>
                    <div className={styles.heading_line}>
                      <div className={styles.heading_line1}></div>
                      <div className={styles.heading_line2}></div>
                    </div>
                    <div>
                      <div className={styles.getunderContent}>
                        <h2 className=" mt-2">{data?.sub_head1}</h2>
                        {data.sub_desc ? (
                          <p className="mt-lg-5">{data.sub_desc}</p>
                        ) : (
                          <>
                            {data.sub_descStart && data.sub_descEnd && (
                              <p>
                                {data.sub_descStart}
                                <Link
                                  href="tel:+1 (302) 394-6860"
                                  className="text-white"
                                >
                                  +1 (302) 394-6860
                                </Link>
                                {data.sub_descEnd}
                              </p>
                            )}
                          </>
                        )}
                        <h5 className=" mt-4 mb-3">{data?.sub_head2}</h5>
                        <ul className="list-unstyled  my-4">
                          {data?.LI?.map((q) => {
                            return (
                              <li key={q} className=" text-white my-3">
                                <Image
                                  src="https://vcana-website-assets.s3.amazonaws.com/images/shared/yes.png"
                                  alt="yes"
                                  width={20}
                                  height={20}
                                />
                                {q}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>

                <Col lg={6} md={12} xs={12} sm={12} className="md-m-5 ">
                  <div className={styles.w90}>
                    <h3 className={`text-white ${styles.heading}`}>
                      {data?.sub_headR}
                    </h3>

                    <div className={`${styles.heading_line}`}>
                      <div className={styles.heading_line1}></div>
                      <div className={styles.heading_line2}></div>
                    </div>
                    <div className="mt-5">
                      <Form onSubmit={handleSubmit(submitHandler)}>
                        <Row>
                          <div className={styles.input_align}>
                            <Col md={6} xs={12}>
                              <Form.Group controlId="name">
                                <Form.Control
                                  type="text"
                                  placeholder="Enter your Name"
                                  className={`${styles.input}  ${styles.inpu} ${styles.nameInput}`}
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
                            <Col md={6} xs={12}>
                              <Form.Group
                                controlId="phone"
                                style={{ marginBottom: "25px" }}
                              >
                                <PhoneInput
                                  international
                                  defaultCountry="US"
                                  ountryCallingCodeEditable={false}
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
                                  placeholder="Enter your Phone no"
                                  className={`${styles.input} ml rounded-2 ${styles.phInpt}`}
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
                        </Row>
                        <Form.Group
                          controlId="mobile"
                          style={{ marginBottom: "35px" }}
                        >
                          <Form.Control
                            type="email"
                            placeholder="Enter your Email"
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
                            rows={3}
                            className={styles.input}
                            placeholder="Tell Us Your Project or Idea"
                            {...register("message", {})}
                          />
                        </Form.Group>

                        <Button
                          className={styles.submit_btn}
                          type="submit"
                          disabled={isLoading}
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
                              className="elementType"
                            />
                          ) : (
                            "Send Message"
                          )}
                        </Button>
                      </Form>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            {/* here is the box-content section start */}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default GetInTouch;
