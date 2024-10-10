import React, { useState, useEffect } from "react";
import style from "../website-calculator/index.module.css";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { CalculatorContext } from "@/store/CalculatorContext";
import { useMutation } from "@tanstack/react-query";
import Styles from "../contact/index.module.css";
import FetchService from "@/services/Fetch";
import Spinner from "react-bootstrap/Spinner";
import PhoneInput from "react-phone-number-input";
import { useRouter } from "next/router";
import { getCountryCallingCode } from "react-phone-number-input";
import Image from "next/image";
import { NextSeo } from "next-seo";

const errorMessage = (error) => {
  return <div className={`${style.ImpMess} d-flex mt-2`}>{error}</div>;
};

const Pricing = () => {
  const [showModal, setShowModal] = useState(false);

  const { finalPrice, formValue } = useContext(CalculatorContext);
  let parsedFinalPrice = parseInt(finalPrice, 10);
  const router = useRouter();

  if (isNaN(parsedFinalPrice)) {
    parsedFinalPrice = 0;
  }

  const cost = parsedFinalPrice + 450;
  const costprice = parsedFinalPrice - 150;

  const [phoneNum, setPhoneNum] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [countryValue, setCountryValue] = useState("");
  const [clickSubmit, setClickSubmit] = useState(false);

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
      setTimeout(() => {
        setShowModal(true);
        setPhoneValue("");
        setClickSubmit(false);
      }, 2000);

      reset();
    },
  });

  const submitHandler = () => {
    if (phoneValue && phoneNum === 10) {
      mutate({ ...getValues(), phone: phoneValue });
    } else {
      setClickSubmit(true);
    }
  };

  const handleCloseModal = () => {
    // setShowModal(false);
    router.push("/");
  };

  useEffect(() => {
    if (!finalPrice) {
      router.push("/website-calculator");
    }
  }, []);

  const phoneInputHandler = (e) => {
    const phoneNumber = Number(e?.length) - Number(countryValue);
    setPhoneValue("");
    setPhoneNum(phoneNumber);
    setPhoneValue(e);
  };

  const countryHandler = (e) => {
    setCountryValue(getCountryCallingCode(e)?.length + 1);

    getCountryCallingCode(e);
  };

  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      setClickSubmit(true);
    }
  }, [errors]);

  return (
    <>
      <NextSeo
        title="Free Website Price Calculator | Vcana Global"
        description="Calculate your website's cost instantly with Vcana Global's Free Website Price Calculator. Easy, quick, and accurate estimates to help you budget effectively. "
        canonical="https://www.vcanaglobal.com/pricing"
      />

      <div className={style.main_backg}>
        <Container>
          <Row className="p-4">
            <Col>
              <h1 className={style.headcost}>Free Website Price Calculator</h1>
              <h5 className={style.estimate}>
                We Estimate Your Project Will Cost Between{" "}
                <span className={style.finalPrice}>
                  {" "}
                  ${costprice} & ${cost}{" "}
                </span>
                {formValue?.login_funtionality && (
                  <p className="">
                    * Additional Charges For Login / Signup Functionality Are
                    Based On The Complexity.
                  </p>
                )}
              </h5>
            </Col>
          </Row>
        </Container>
        <Container className={style.formSection}>
          <Row>
            <Col>
              <Form
                className={style.formPricing}
                onSubmit={handleSubmit(submitHandler)}
              >
                <p className={style.chooseHeading} id={style.webHeading}>
                  Please complete the web form below for an exact project quote
                  from a{" "}
                  <strong className={style.strong}> Vcana Global </strong>{" "}
                  website design strategist
                </p>
                <Row
                  className={`${style.priceRow} d-flex justify-content-between g-4`}
                >
                  <Col md className="mb-3 mb-lg-3">
                    <Form.Group className="mb-3">
                      <label>
                        {" "}
                        Name <span className={style.ImpMess}>*</span>
                      </label>
                      <Form.Control
                        type="text"
                        {...register("name", {
                          required: true,
                          minLength: 2,
                        })}
                        className={`${style.accHeader} p-3 p-sm-3 `}
                        id={style.pricingInput}
                      />
                      {errors.name &&
                        errors.name.type === "required" &&
                        errorMessage("Please enter a name")}
                      {errors.name &&
                        errors.name.type === "minLength" &&
                        errorMessage("Name must be 2 characters")}
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <label>
                        Email<span className={style.ImpMess}>*</span>
                      </label>
                      <Form.Control
                        type="email"
                        {...register("email", {
                          required: true,
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          },
                        })}
                        className={`${style.accHeader} p-3`}
                        id={style.pricingInput}
                      />
                      {errors.email &&
                        errors.email.type === "required" &&
                        errorMessage("Please enter email address")}
                      {errors.email &&
                        errors.email.type === "pattern" &&
                        errorMessage("Invaid Email")}
                    </Form.Group>
                  </Col>
                  <Col md className={`${style.phoneColumn} mb-3`}>
                    <Form.Group controlId="phone" className="mb-3">
                      <label>
                        Phone Number<span className={style.ImpMess}>*</span>
                      </label>
                      <PhoneInput
                        defaultCountry="US"
                        id={style.pricingInput}
                        countryCallingCodeEditable={false}
                        name="phone"
                        value={phoneValue}
                        className={`${Styles.input}  ${style.phoneIpt}`}
                        onChange={(e) => phoneInputHandler(e)}
                        onCountryChange={(e) => countryHandler(e)}
                      />
                      {clickSubmit &&
                        !phoneValue &&
                        errorMessage("Phone number is required")}

                      {clickSubmit && (
                        <>
                          {Number(phoneValue?.length) - Number(countryValue) <
                            10 &&
                            Number(phoneValue?.length) -
                              Number(countryValue) !==
                              0 &&
                            errorMessage("Phone Number must be 10 digits")}
                          {Number(phoneValue?.length) - Number(countryValue) >
                            10 &&
                            errorMessage(
                              "Phone Number must be less than 10 digits"
                            )}
                        </>
                      )}
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <label>Company</label>
                      <Form.Control
                        type="text"
                        {...register("company", {
                          minLength: 2,
                        })}
                        className={`${style.accHeader} p-3`}
                        id={style.pricingInput}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={12} className="mb-3">
                    <Form.Group className="mb-3">
                      <label>Website</label>
                      <Form.Control
                        type="text"
                        {...register("website", {
                          minLength: 2,
                        })}
                        className={`${style.accHeader} p-3`}
                        id={style.pricingInput}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <label>Comments</label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        {...register("message", {})}
                        className={`${style.textareas} p-3`}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <div
                  className="d-flex justify-content-between pt-4"
                  id={style.pricingBtn}
                >
                  <Link
                    href="/website-calculator"
                    className={`${style.peviousButton} align-items-center`}
                  >
                    {" "}
                    Previous{" "}
                  </Link>
                  <Button
                    className={Styles.submit_btn}
                    id={style.submitBtn}
                    type="submit"
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
                      "Send me a proposal"
                    )}
                  </Button>
                </div>
                <Modal
                  show={showModal}
                  dialogClassName={style.fullScreenModal}
                  onHide={handleCloseModal}
                >
                  <div className={`${style.modal_section} px-4 py-5`}>
                    <Image
                      src="https://vcana-website-assets.s3.amazonaws.com/images/thankyou.png"
                      alt="Thank you"
                      width={300}
                      height={200}
                    />
                    <h5 className={style.website_thnx}>
                      Thanks for using our Website Cost Calculator!
                    </h5>
                    <p className={`${style.andone} pb-4`}>
                      We have looked into your request andone of our strategists
                      will get back to you shortly.
                    </p>
                    <button
                      className={`${style.peviousButton} my-0 mx-auto d-flex justify-content-center align-items-center mb-4`}
                      onClick={handleCloseModal}
                    >
                      Go To Home
                    </button>
                  </div>
                </Modal>
              </Form>
            </Col>
          </Row>
        </Container>

        <section className={style.custom}>
          <Container>
            <Row className="p-5">
              <Col>
                <h2 className={style.headcost}>
                  Custom Website Cost Calculator
                </h2>
                <Row className="pt-5">
                  <Col md={6} lg={6} sm={12}>
                    <p
                      className={`${style.customPassage} text-aligns-left`}
                      id={style.alignLeft}
                    >
                      The final price of your custom website design depends on
                      your specific project requirements that may include your
                      digital strategy, distinctive landing pages, content
                      migration, motion graphics or more.{" "}
                    </p>
                  </Col>
                  <Col md={6} lg={6} sm={12}>
                    <p className="text-align-left" id={style.alignLeft}>
                      Are you finding it challenging to calculate the exact cost
                      of your website based on multiple factors?
                    </p>
                    <p className="text-align-left" id={style.alignLeft}>
                      Our meticulously developed website cost calculator makes
                      it simple for you to get an estimate and plan your budget
                      accordingly for your forthcoming web design solution.{" "}
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={style.quote_section}>
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} className={`${style.brand} p-5`}>
                <h2 className={style.headGrow}>
                  Ready To Grow Your Brand Online?
                </h2>
                <span
                  className={`${style.quoteBtn} d-flex justify-content-center`}
                >
                  <Link href="/contact" className={style.quoteButton}>
                    REQUEST A QUOTE
                  </Link>
                </span>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
};

export default Pricing;
