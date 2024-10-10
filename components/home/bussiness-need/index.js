import React, { useState } from "react";
import { isValidPhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-number-input";
import styles from "@/styles/Home.module.css";
import { useMutation } from "@tanstack/react-query";
import FetchService from "@/services/Fetch";
import { Notification } from "@/components/shared/Notification";
import { useForm } from "react-hook-form";
import Spinner from "react-bootstrap/Spinner";
import { Container, Row, Col } from "react-bootstrap";
import renderHTML from "@/helpers/renderHTML";

const errorMessage = (error) => {
  return (
    <div
      style={{ color: "red", margintTop: "0px !important", display: "flex" }}
    >
      {renderHTML(error)}
    </div>
  );
};

const BussinesNeed = () => {
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
      // setValu
      Notification(
        "success",
        "<div style='font-size:13px'>Thank you for contacting Vcana Global. Your message has been successfully received!</div>"
      );
      resetField("name", "email", "message", "phone");
      reset();
      setPhoneError({
        required: true,
        valid: true,
      });

      setPhone("");
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
    <div className={`${styles.businessneedbg}`}>
      <Container>
        <Row>
          <Col>
            <div className={`${styles.businessheading}`}>
              <h6>
                Contact Us for <span>Your Business Needs </span>
              </h6>
              <div>
                <form
                  className={`${styles.formflex}`}
                  onSubmit={handleSubmit(submitHandler)}
                >
                  <div className={` me-5 ${styles.businessheading}`}>
                    <input
                      type="text"
                      className={`form-control  ${styles.businesinput}`}
                      placeholder="Enter your Name"
                      aria-label="Enter your Name"
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
                        "Please enter only alphabetic <br/> characters (A-Z, a-z)."
                      )}
                  </div>

                  <div className={` me-5 ${styles.businessheading}`}>
                    <PhoneInput
                      international
                      defaultCountry="US"
                      countryCallingCodeEditable={false}
                      type="tel"
                      className={`form-control  ${styles.businesinput}`}
                      placeholder="Enter your Phone no."
                      aria-label="Enter your Phone no."
                      value={phone}
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
                  </div>

                  <div className={` me-5 ${styles.businessheading}`}>
                    <input
                      type="email"
                      className={`form-control ${styles.businesinput}`}
                      aria-describedby="emailHelp"
                      placeholder="Enter your Email"
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
                  </div>
                  <button
                    type="submit"
                    className={`btn btn-primary ${styles.btnhover} ${styles.btnatbs}`}
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
                      />
                    ) : (
                      "Inquire Now"
                    )}
                  </button>
                </form>
              </div>
              <p>
                We are always ready to respond to any questions, comments or
                suggestions that you want to share with us.{" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BussinesNeed;
