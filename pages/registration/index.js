import React, { useState } from "react";
// import { useState } from "react";
import Styles from "./index.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import FetchService from "@/services/Fetch";
import { Notification } from "@/components/shared/Notification";
import Spinner from "react-bootstrap/Spinner";
import { NextSeo } from "next-seo";

//helper
const errorMessage = (error) => {
  return (
    <div
      style={{ color: "red", margintTop: "15px !important", display: "flex" }}
    >
      {error}
    </div>
  );
};

const Registration = () => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      check_term: false,
      company: "",
      degine_vision: "",
      email: "",
      industry: "",
      message: "",
      name: "",
      phone: "",
      primary_issue: "",
      primary_objective: "",
      primary_objective_specify: "",
      website_url: "",
    },
  });

  const [countryCode, setCountryCode] = useState("+1");

  const { mutate, isPending: isLoading } = useMutation({
    mutationFn: (payload) => FetchService.registrationForm(payload),
    onError: (error) => {
      if (error !== "") {
        Notification("error", error.error);
      }

      console.log("error=====", error);
    },
    onSuccess: () => {
      Notification(
        "success",
        "<div style='font-size:13px'>Thank you for contacting Vcana Global. Your message has been successfully received!</div>"
      );
      reset();
      reset();
      setCountryCode("+1");
    },
  });

  const submitHandler = () => {
    mutate({ ...getValues(), country_code: countryCode });
  };

  watch();

  return (
    <>
      <NextSeo
        title="Free Website Designs | Vcana Global - Your Dream Site Awaits!"
        description="Register with Vcana Global today and get your dream website! Enjoy free website designs to boost engagement and grow your business effortlessly."
        canonical="https://www.vcanaglobal.com/registration"
      />
      <h1 className="d-none"> Design Free Websites</h1>
      <div className={Styles.mainBg}>
        <Container fluid>
          <Row className={`${Styles.registrationMain}`}>
            <Col md={12} col lg={12} Col xl={6}>
              <div className={Styles.top}>
                <Image
                  src={
                    "https://vcana-website-assets.s3.amazonaws.com/images/registration/registration.png"
                  }
                  alt="icon"
                  className="mb-3 ms-2"
                  width={1000}
                  height={749}
                />
              </div>
            </Col>
            <Col md={12} col lg={12} Col xl={6}>
              <div className={Styles.formstyle}>
                <Form onSubmit={handleSubmit(submitHandler)}>
                  <h4>Get Your Dream Website</h4>
                  <p>Register with Vcana Global Today!</p>
                  <div className={Styles.formstyle1}>
                    <Form.Group controlId="formName">
                      {/* <Form.Label>
                        Enter your name <span>*</span>
                      </Form.Label> */}
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        {...register("name", {
                          required: true,
                          minLength: 2,
                        })}
                      />
                      {errors.name &&
                        errors.name.type === "required" &&
                        errorMessage("Please enter a name")}
                      {errors.name &&
                        errors.name.type === "minLength" &&
                        errorMessage("Name must be 2 characters")}
                    </Form.Group>
                  </div>
                  <div className={Styles.formstyle1}>
                    <Form.Group controlId="formEmail">
                      {/* <Form.Label>
                        Enter your email <span>*</span> */}
                      {/* </Form.Label> */}
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
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
                  </div>
                  {/* <Form.Label>
                    Enter your phone number<span>*</span>
                  </Form.Label> */}
                  <div className={Styles.phoneInput}>
                    <div className={`formresss ${Styles.country}`}>
                      <PhoneInput
                        international
                        defaultCountry="US"
                        value={countryCode}
                        maxLength={4}
                        type="tel"
                        aria-label="Enter your Phone no."
                        onChange={(e) => setCountryCode(e)}
                      />
                    </div>

                    <div className={`formresss ${Styles.number}`}>
                      <Form.Group controlId="formPhoneNumber">
                        <Form.Control
                          type="text"
                          placeholder="Enter your phone number"
                          {...register("phone", {
                            required: true,

                            validate: {
                              validNumber: (value) => {
                                if (value.startsWith("0")) {
                                  return false;
                                }
                                return true;
                              },
                              minLength: (value) =>
                                value.replace(/\D/g, "").length >= 10,
                              maxLength: (value) =>
                                value.replace(/\D/g, "").length <= 10,
                            },
                          })}
                        />

                        {errors.phone &&
                          errors.phone.type === "required" &&
                          errorMessage("Please enter a Phone Number")}
                        {errors.phone &&
                          errors.phone.type === "minLength" &&
                          errorMessage(
                            "Phone Number must be at least 10 Number"
                          )}
                        {errors.phone &&
                          errors.phone.type === "maxLength" &&
                          errorMessage(
                            "Phone Number must be less than 10 Number"
                          )}
                        {errors.phone &&
                          errors.phone.type === "pattern" &&
                          errorMessage("Invalid Phone Number")}
                        {errors.phone &&
                          errors.phone.type === "validNumber" &&
                          errorMessage("Please enter a valid Phone Number")}
                      </Form.Group>
                    </div>
                  </div>
                  <div className={Styles.formstyle1}>
                    <Form.Group controlId="formCompanyName">
                      {/* <Form.Label>
                        Enter your company name <span></span>
                      </Form.Label> */}
                      <Form.Control
                        type="text"
                        placeholder="Enter your company name"
                        {...register("company", {
                          required: true,
                        })}
                      />
                      {errors.company &&
                        errors.company.type === "required" &&
                        errorMessage("Please enter a Company Name")}
                    </Form.Group>
                  </div>
                  <div className={Styles.formstyle1}>
                    <Form.Group controlId="formIndustry">
                      {/* <Form.Label>
                        Enter your industry <span>*</span>
                      </Form.Label> */}
                      <Form.Control
                        type="text"
                        placeholder="Enter your industry"
                        {...register("industry", {
                          required: true,
                        })}
                      />
                      {errors.industry &&
                        errors.industry.type === "required" &&
                        errorMessage("Please enter Industry")}
                    </Form.Group>
                  </div>
                  <div className={Styles.formstyle1}>
                    <Form.Group controlId="formWebsiteUrl">
                      {/* <Form.Label>
                        Enter your website URL <span>*</span>
                      </Form.Label> */}
                      <Form.Control
                        type="text"
                        placeholder="Enter your website URL"
                        {...register("website_url", {})}
                      />
                    </Form.Group>
                  </div>
                  <div className={Styles.formstyle1}>
                    <Form.Group controlId="formName">
                      <Form.Label>
                        What's the primary issue with your current website or
                        online presence? <span>*</span>
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        {...register("primary_issue", {
                          required: true,
                        })}
                        defaultValue={""}
                      >
                        <option value="" disabled={true}>
                          Choose the right option
                        </option>

                        <option value="Limited user engagement">
                          Limited user engagement
                        </option>
                        <option value="Poor website performance (speed, loading times)">
                          Poor website performance (speed, loading times)
                        </option>
                        <option value="Outdated design or functionality">
                          Outdated design or functionality
                        </option>
                        <option value="Difficulty in managing content">
                          Difficulty in managing content
                        </option>
                        <option value="Lack of mobile responsiveness">
                          Lack of mobile responsiveness
                        </option>
                        <option value="Other">Other please specify</option>
                      </Form.Select>

                      {errors.primary_issue &&
                        errors.primary_issue.type === "required" &&
                        errorMessage(
                          "Describe the primary issue with your current website or online presence"
                        )}
                    </Form.Group>
                  </div>
                  {getValues().primary_issue == "Other" && (
                    <Form.Group controlId="formOtherText">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Please specify..."
                        {...register("primary_issue_specify", {
                          required: true,
                        })}
                      />
                      {errors.primary_issue_specify &&
                        errors.primary_issue_specify.type === "required" &&
                        errorMessage("Please Describe Primary issue")}
                    </Form.Group>
                  )}
                  <div className={Styles.formstyle1}>
                    <Form.Group controlId="formName">
                      <Form.Label>
                        {" "}
                        What your primary objectives for the new website?{" "}
                        <span>*</span>
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        {...register("primary_objective", {
                          required: true,
                        })}
                        defaultValue={""}
                      >
                        <option value="" disabled={true}>
                          Choose the right option
                        </option>

                        <option value="Increase brand awareness">
                          Increase brand awareness
                        </option>
                        <option value="Generate leads or sales">
                          Generate leads or sales
                        </option>
                        <option value="Improve user engagement and interaction">
                          Improve user engagement and interaction
                        </option>
                        <option value="Enhance customer experience">
                          Enhance customer experience
                        </option>
                        <option value="Showcase products or services">
                          Showcase products or services
                        </option>
                        <option value="Other">Other please specify</option>
                      </Form.Select>
                      {errors.primary_objective &&
                        errors.primary_objective.type == "required" &&
                        errorMessage(
                          "Describe are your primary objectives for the new website?"
                        )}
                    </Form.Group>
                  </div>{" "}
                  {getValues().primary_objective == "Other" && (
                    <Form.Group controlId="formOtherText">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Please specify..."
                        {...register("primary_objective_specify", {
                          required: true,
                        })}
                      />
                      {errors.primary_objective_specify &&
                        errors.primary_objective_specify.type === "required" &&
                        errorMessage("Please Describe Objective Issue")}
                    </Form.Group>
                  )}
                  <div className={Styles.formstyle1}>
                    <Form.Group controlId="formName">
                      <Form.Label>
                        {" "}
                        Which design style best matches your vision for the new
                        website?
                      </Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        {...register("degine_vision", {})}
                        defaultValue={""}
                      >
                        <option value="" disabled={true}>
                          Choose the right option
                        </option>

                        <option value="Modern and Minimalist">
                          Modern and Minimalist
                        </option>
                        <option value="Bold and Creative">
                          Bold and Creative
                        </option>
                        <option value="Elegant and Classic">
                          Elegant and Classic
                        </option>
                        <option value="Clean and Professional">
                          Clean and Professional
                        </option>
                        <option value="Rustic and Organic">
                          Rustic and Organic
                        </option>
                        <option value="High-Tech and Futuristic">
                          High-Tech and Futuristic
                        </option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className={Styles.texta}>
                    <Form.Label className="wertyui"> Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="Leave a comment here"
                      style={{ height: "100px" }}
                      {...register("message", {})}
                    />
                  </div>
                  <Form.Group className="mb-3 m-2 p- ">
                    <Form.Check
                      className={Styles.forminput}
                      type="checkbox"
                      label={
                        <div className="checkbox">
                          This checkbox ensures that users acknowledge their
                          responsibility for providing accurate information.
                          Additionally, it includes a hyperlink to your
                          company's{" "}
                          <Link href="/term-and-condition">
                            Terms & Conditions
                          </Link>{" "}
                          for users to review before completing registration.
                        </div>
                      }
                      {...register("check_term", {
                        required: true,
                      })}
                    />
                    {errors.check_term &&
                      errors.check_term.type === "required" &&
                      errorMessage(
                        "Please tick the check box to submit your entry"
                      )}
                  </Form.Group>
                  <Button type="submit" disabled={isLoading}>
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
                      "Submit"
                    )}
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Registration;
