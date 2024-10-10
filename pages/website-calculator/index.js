import React, { useContext, useEffect, useState } from "react";
import styles from "./index.module.css";
import { Container, Row, Col, Accordion, Form, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { CalculatorContext } from "@/store/CalculatorContext";
import Styles from "../contact/index.module.css";
import Image from "next/image";
import { Notification } from "@/components/shared/Notification";
import { data } from "../../components/data";
import { useForm } from "react-hook-form";
import { NextSeo } from "next-seo";

const Calculator = () => {
  const form = useForm({
    mode: "onChange",
  });

  const router = useRouter();
  const { setFinalPrice, formValue, setFormValue } =
    useContext(CalculatorContext);

  const { register, handleSubmit, getValues, setValue, watch } = form;

  const [selectedCategories, setSelectedCategories] = useState([]);

  watch();
  //--------------- Website Category starts -----------------//
  const categories = [
    { id: 1, name: "Business" },
    { id: 2, name: "Blog" },
    { id: 3, name: "Entertainment" },
    { id: 4, name: "News" },
    { id: 5, name: "Non-Profit/Organization" },
    { id: 6, name: "Membership" },
    { id: 7, name: "Portfolio" },
    { id: 8, name: "Personal" },
    { id: 9, name: "Forum" },
    { id: 10, name: "Knowledge Base" },
    { id: 11, name: "Others" },
  ];

  const handleCategoryChange = (event) => {
    const categoryId = parseInt(event.target.value);
    if (event.target.checked) {
      if (selectedCategories.length === 2) {
        Notification(
          "error",
          "<div style='font-size:13px'>You can only choose up to two values.</div>"
        );
        event.preventDefault();
        return;
      }
      setSelectedCategories([...selectedCategories, categoryId]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((id) => id !== categoryId)
      );
    }
  };

  //--------------- Website Category ends -----------------//

  // new code start here

  const submitHandler = () => {
    const { commanHandler, cmsHandler, logo, ...rest } = getValues();

    if (!commanHandler) {
      Notification("error", "Please select a Technology");
      return;
    }

    if (commanHandler === "ecommerce" && !cmsHandler) {
      Notification("error", "Please Choose Your Preferred Cms");

      return;
    }

    let techPrice = 0;

    let functionalPrice = 0;

    let logoPrice = 0;

    if (logo) {
      logoPrice = data.logo[logo].basicPrice;
    }

    for (const [key, value] of Object.entries(rest)) {
      if (value === true) {
        const basePrice = data[key]?.basicPrice ? data[key]?.basicPrice : 0;

        const perPageCost =
          Number(rest[`${key}_pages`]) * data[key]?.perPage
            ? Number(rest[`${key}_pages`]) * data[key]?.perPage
            : 0;

        functionalPrice = basePrice + perPageCost + functionalPrice;
      }
    }

    if (commanHandler === "ecommerce") {
      techPrice =
        data[commanHandler].cms[cmsHandler].basicPrice +
        Number(getValues()[`${cmsHandler}Pages`]) *
          data[commanHandler].cms[cmsHandler].perPage;
    } else {
      techPrice =
        data[commanHandler].basicPrice +
        Number(getValues()[commanHandler]) * data[commanHandler].perPage;
    }

    setFinalPrice(techPrice + functionalPrice + logoPrice);

    setFormValue({ ...getValues(), selectedCategories: selectedCategories });

    router.push("/pricing");
  };

  useEffect(() => {
    if (formValue) {
      setSelectedCategories([...formValue.selectedCategories]);
      for (const [key, value] of Object.entries(formValue)) {
        setValue(key, value);
      }
    }
  }, []);

  return (
    <>
      <NextSeo
        title="Free Website Cost Calculator | Vcana Global"
        description="Calculate your website costs for free with Vcana Global's Website Cost Calculator. Get instant estimates for your project and plan your budget efficiently. Try it now!"
        canonical="https://www.vcanaglobal.com/website-calculator"
      />

      <div className={styles.main_backg}>
        <Container>
          <Row className="p-3 p-sm-4 p-lg-5">
            <Col span={12}>
              <h1 className={styles.headcost}>Free Website Cost Calculator</h1>
              <p>
                Fill in your desired features below to calculate the price for
                your preferred web design using our free website cost
                calculator.
              </p>
            </Col>
          </Row>
        </Container>

        <Container className="pb-4">
          <Row className={`${styles.backg} p-3 p-sm-4 p-lg-5 `}>
            <h2 className={styles.chooseHeading}>
              Choose the type of website you need
            </h2>
            <Col>
              <Accordion>
                <Form onSubmit={handleSubmit(submitHandler)}>
                  <Accordion id="accText">
                    <Accordion.Item
                      eventKey="0"
                      className={`${styles.accText} mb-4 `}
                    >
                      <Accordion.Header className={styles.accHeader}>
                        <input
                          type="radio"
                          value="basic_wordpress"
                          className={styles.inputRadio}
                          {...register("commanHandler")}
                        />
                        <h3 className={styles.dropHeader}>
                          {" "}
                          Basic WordPress Website{" "}
                        </h3>
                      </Accordion.Header>
                      <Accordion.Body className={styles.accordionB}>
                        <ul className={styles.pages_header}>
                          <div className={styles.options}>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Up to 10 Pages Without Login Functionality{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Basic Logo Design{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />{" "}
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                100% Responsive{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />{" "}
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                SEO-Friendly{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />{" "}
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Chat Integration (human to human){" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                          </div>
                          <li className={styles.lastrow}>
                            <h5 className={styles.additionalLine}>
                              For additional page requirements, simply select
                              the desired number of pages
                            </h5>
                            <div
                              className={`${styles.pageInput} d-flex justify-content-end`}
                            >
                              <span className={styles.pagecost}>
                                {" "}
                                Each page will cost $
                                {data?.basic_wordpress?.perPage}{" "}
                              </span>{" "}
                              <span className={styles.pagesSpan}>
                                <input
                                  type="number"
                                  placeholder="0"
                                  className={styles.pagesize}
                                  min="0"
                                  {...register("basic_wordpress")}
                                />
                              </span>
                            </div>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="1"
                      className={`${styles.accText} mb-4`}
                    >
                      <Accordion.Header className={styles.accHeader}>
                        <input
                          type="radio"
                          value="advanced_wordpress"
                          className={styles.inputRadio}
                          {...register("commanHandler")}
                        />
                        <h3 className={styles.dropHeader}>
                          {" "}
                          Advanced WordPress Website{" "}
                        </h3>
                      </Accordion.Header>
                      <Accordion.Body className={styles.accordionB}>
                        <ul className={styles.pages_header}>
                          <div className={styles.options}>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Up to 12 Pages Without Login Functionality{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Custom Design{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Dynamic{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Basic Logo Design{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                100% Responsive{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                SEO-Friendly{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Chat Integration (human to human){" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                          </div>
                          <li className={styles.lastrow}>
                            <h5 className={styles.additionalLine}>
                              For additional page requirements, simply select
                              the desired number of Pages
                            </h5>
                            <div
                              className={`${styles.pageInput} d-flex justify-content-end`}
                            >
                              <span className={styles.pagecost}>
                                {" "}
                                Each page will cost $
                                {data?.advanced_wordpress?.perPage}{" "}
                              </span>{" "}
                              <span className={styles.pagesSpan}>
                                <input
                                  type="number"
                                  placeholder="0"
                                  className={styles.pagesize}
                                  min="0"
                                  {...register("advanced_wordpress")}
                                />
                              </span>
                            </div>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="2"
                      className={`${styles.accText} mb-4`}
                    >
                      <Accordion.Header className={styles.accHeader}>
                        <input
                          type="radio"
                          value="ecommerce"
                          className={styles.inputRadio}
                          {...register("commanHandler")}
                        />
                        <h3 className={styles.dropHeader}>
                          {" "}
                          E-Commerce Website{" "}
                        </h3>
                      </Accordion.Header>
                      <Accordion.Body className={styles.accordionB}>
                        <ul className={styles.pages_header}>
                          <div className={styles.options}>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Home Page, About Page, Contact Page & Product
                                Page (up to 5 products){" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Payment Gateway Integration{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Shopping-Cart{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Login/Sign-Up Functionality{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Basic Logo Design{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                100% Responsive{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                SEO-Friendly{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Chat Integration (human to human){" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                          </div>
                        </ul>
                        <div className={styles.cms_section}>
                          <h5 className={`${styles.chooseCms} pt-4 pb-0`}>
                            Please Select Your Preferred CMS
                          </h5>
                          <hr className={styles.hr} />
                          <ul
                            className={`${styles.pages_header} ${styles.prefered_cms}`}
                          >
                            {[
                              { key: "magento", val: "Magento" },
                              { key: "shopify", val: "Shopify" },
                              { key: "woo_commerce", val: "Commerce" },
                              { key: "open_cart", val: "Open Cart" },
                              { key: "big_commerce", val: "Big Commerce" },
                            ].map((cms) => {
                              return (
                                <li key={cms.key} className="display-grid">
                                  <span
                                    className={`${styles.cmsborder} d-flex justify-content-between align-items-center`}
                                  >
                                    {cms.val}
                                    <input
                                      className={styles.radiobtnn}
                                      type="radio"
                                      id={styles.inputNum}
                                      value={cms.key}
                                      {...register("cmsHandler", {
                                        onChange: () => {
                                          setValue(
                                            "commanHandler",
                                            "ecommerce"
                                          );
                                        },
                                      })}
                                    />
                                  </span>
                                  {getValues().cmsHandler === cms.key && (
                                    <span className={styles.lastrow}>
                                      <h5 className={styles.additionalLine}>
                                        To add more products, just choose the
                                        desired number of pages.{" "}
                                      </h5>
                                      <div
                                        className={`${styles.pageInput} d-flex justify-content-end`}
                                      >
                                        <span className={styles.pagecost}>
                                          <p
                                            className={styles.additionalLineCms}
                                          >
                                            {`(+${
                                              data?.ecommerce?.cms?.[cms.key]
                                                ?.perPage
                                            } per additional product for ${
                                              cms.val
                                            })`}
                                          </p>
                                        </span>
                                        <span className={styles.pagesSpan}>
                                          <input
                                            type="number"
                                            placeholder="0"
                                            className={styles.pagesize}
                                            min="1"
                                            {...register(`${cms.key}Pages`)}
                                          />
                                        </span>
                                      </div>
                                    </span>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="3"
                      className={`${styles.accText} mb-4`}
                    >
                      <Accordion.Header className={styles.accHeader}>
                        <input
                          type="radio"
                          value="static_React"
                          className={styles.inputRadio}
                          {...register("commanHandler")}
                        />
                        <h3 className={styles.dropHeader}>
                          {" "}
                          Static Website in React or Next.js
                        </h3>
                      </Accordion.Header>
                      <Accordion.Body className={styles.accordionB}>
                        <ul className={styles.pages_header}>
                          <div className={styles.options}>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Up to 8 Pages Without Login Functionality{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Basic Logo Design{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                100% Responsive{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                SEO-Friendly{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Chat Integration (human to human){" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                          </div>
                          <li className={styles.lastrow}>
                            <h5 className={styles.additionalLine}>
                              For additional page requirements, simply select
                              the desired number of pages
                            </h5>
                            <div
                              className={`${styles.pageInput} d-flex justify-content-end`}
                            >
                              <span className={styles.pagecost}>
                                {" "}
                                Each page will cost $
                                {data?.static_React?.perPage}{" "}
                              </span>{" "}
                              <span className={styles.pagesSpan}>
                                <input
                                  type="number"
                                  placeholder="0"
                                  className={styles.pagesize}
                                  min="0"
                                  {...register("static_React")}
                                />
                              </span>
                            </div>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="4"
                      className={`${styles.accText} mb-4`}
                    >
                      <Accordion.Header className={styles.accHeader}>
                        <input
                          type="radio"
                          value="dynamic_react"
                          className={styles.inputRadio}
                          {...register("commanHandler")}
                        />
                        <h3 className={styles.dropHeader}>
                          {" "}
                          Dynamic Website in React or Next.js{" "}
                        </h3>
                      </Accordion.Header>
                      <Accordion.Body className={styles.accordionB}>
                        <ul className={styles.pages_header}>
                          <div className={styles.options}>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Up to 8 Pages Without Login Functionality{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Dynamic Structure{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Custom Design{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Basic Logo Design{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                100% Responsive{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                SEO-Friendly{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Chat integration (human to human){" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                          </div>
                          <li className={styles.lastrow}>
                            <h5 className={styles.additionalLine}>
                              For additional page requirements, simply select
                              the desired number of pages
                            </h5>
                            <div
                              className={`${styles.pageInput} d-flex justify-content-end`}
                            >
                              <span className={styles.pagecost}>
                                {" "}
                                Each page will cost $
                                {data?.dynamic_react?.perPage}{" "}
                              </span>{" "}
                              <span className={styles.pagesSpan}>
                                <input
                                  type="number"
                                  placeholder="0"
                                  className={styles.pagesize}
                                  min="1"
                                  {...register("dynamic_react")}
                                />
                              </span>
                            </div>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="5"
                      className={`${styles.accText} mb-4`}
                    >
                      <Accordion.Header className={styles.accHeader}>
                        <input
                          type="radio"
                          value="basic_wix"
                          className={styles.inputRadio}
                          {...register("commanHandler")}
                        />
                        <h3 className={styles.dropHeader}>
                          {" "}
                          Basic Wix Website{" "}
                        </h3>
                      </Accordion.Header>
                      <Accordion.Body className={styles.accordionB}>
                        <ul className={styles.pages_header}>
                          <div className={styles.options}>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Up to 8 Pages{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Theme-Based{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                SEO-Friendly{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                100% Responsive{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                          </div>
                          <li className={styles.lastrow}>
                            <h5 className={styles.additionalLine}>
                              For additional page requirements, simply select
                              the desired number of pages
                            </h5>
                            <div
                              className={`${styles.pageInput} d-flex justify-content-end`}
                            >
                              <span className={styles.pagecost}>
                                {" "}
                                Each page will cost ${
                                  data?.basic_wix?.perPage
                                }{" "}
                              </span>{" "}
                              <span className={styles.pagesSpan}>
                                <input
                                  type="number"
                                  placeholder="0"
                                  className={styles.pagesize}
                                  min="1"
                                  {...register("basic_wix")}
                                />
                              </span>
                            </div>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="6"
                      className={`${styles.accText} mb-4`}
                    >
                      <Accordion.Header className={styles.accHeader}>
                        <input
                          type="radio"
                          value="custom_wix"
                          className={styles.inputRadio}
                          {...register("commanHandler")}
                        />
                        <h3 className={styles.dropHeader}>
                          CustomWix / Squarespace / Weebly Website
                        </h3>
                      </Accordion.Header>
                      <Accordion.Body className={styles.accordionB}>
                        <ul className={styles.pages_header}>
                          <div className={styles.options}>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Up to 8 Pages{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                Custom Design{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                SEO-Friendly{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                            <li className={styles.listTop}>
                              <h4
                                className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                              >
                                {" "}
                                100% Responsive{" "}
                              </h4>
                              <Image
                                src="https://vcana-website-assets.s3.amazonaws.com/images/tenor.png"
                                alt="tenor"
                                width={20}
                                height={20}
                              />
                            </li>
                          </div>
                          <li className={styles.lastrow}>
                            <h5 className={styles.additionalLine}>
                              For additional page requirements, simply select
                              the desired number of pages
                            </h5>
                            <div
                              className={`${styles.pageInput} d-flex justify-content-end`}
                            >
                              <span className={styles.pagecost}>
                                {" "}
                                Each page will cost ${
                                  data?.custom_wix?.perPage
                                }{" "}
                              </span>{" "}
                              <span className={styles.pagesSpan}>
                                <input
                                  type="number"
                                  placeholder="0"
                                  className={styles.pagesize}
                                  min="1"
                                  {...register("custom_wix")}
                                />
                              </span>
                            </div>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="7"
                      className={`${styles.accText} mb-4`}
                    >
                      <Accordion.Header
                        className={styles.accHeader}
                        id={styles.addFeature}
                      >
                        <h3 className={styles.dropHeader}>
                          {" "}
                          Choose your website category and additional features,
                          and see pricing{" "}
                        </h3>
                      </Accordion.Header>
                      <Accordion.Body className={styles.accordionB}>
                        <Form>
                          <ul
                            className={styles.pages_header}
                            id={styles.scrollbarCat}
                          >
                            {categories.map((cat, index) => (
                              <li key={index} className={styles.categoryTop}>
                                <input
                                  type="checkbox"
                                  value={cat.id}
                                  checked={selectedCategories.includes(cat.id)}
                                  onChange={handleCategoryChange}
                                />
                                <h4
                                  className={`${styles.listOfDropdown} fw-normal text-secondary py-2`}
                                >
                                  {" "}
                                  {cat.name}{" "}
                                </h4>
                              </li>
                            ))}
                          </ul>
                        </Form>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="8"
                      className={`${styles.accHeader} mb-4 d-flex align-items-center justify-content-between bg-light `}
                      id={styles.multiLang}
                    >
                      <h3 className={styles.dropHeader}>
                        {" "}
                        Do you need multi-language feature ?{" "}
                      </h3>
                      <div
                        className={`${styles.pageGap} d-flex justify-content-between align-items-center`}
                      >
                        <span className={styles.pagecost}>($150)</span>
                        <p className="onoff">
                          <input
                            type="checkbox"
                            id="toggle1"
                            {...register("multi_language_feature", {})}
                          />
                          <label for="toggle1"></label>
                        </p>
                      </div>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="9"
                      className={`${styles.accHeader} mb-4 d-flex align-items-center justify-content-between bg-light `}
                      id={styles.multiLang}
                    >
                      <h3 className={styles.dropHeader}>
                        {" "}
                        Do you need Chatbot Feature ?{" "}
                      </h3>
                      <div
                        className={`${styles.pageGap} d-flex justify-content-between align-items-center`}
                      >
                        <span className={styles.pagecost}>
                          ($10/user/month)
                        </span>
                        <p className="onoff">
                          <input
                            type="checkbox"
                            id="toggle2"
                            {...register("chatbot_feature")}
                          />
                          <label for="toggle2"></label>
                        </p>
                      </div>
                    </Accordion.Item>

                    {getValues("chatbot_feature") && (
                      <li className={styles.lastrow} id={styles.dropdownrow}>
                        <h5 className={styles.additionalLine}>
                          Please select no. of users
                        </h5>
                        <div
                          className={`${styles.pageInput} d-flex justify-content-end`}
                          id={styles.inputWidth}
                        >
                          <span className={styles.pagesFeature}>
                            <input
                              type="number"
                              placeholder="0"
                              className={styles.pagesize}
                              min="1"
                              {...register("chatbot_feature_pages")}
                            />
                          </span>
                        </div>
                      </li>
                    )}

                    <Accordion.Item
                      eventKey="10"
                      className={`${styles.accHeader} mb-4 d-flex align-items-center justify-content-between bg-light`}
                      id={styles.multiLang}
                    >
                      <h3 className={styles.dropHeader}>
                        {" "}
                        Do you need Copywriting Services ?{" "}
                      </h3>
                      <div
                        className={`${styles.pageGap} d-flex justify-content-between align-items-center`}
                      >
                        <span className={styles.pagecost}>($150 per page)</span>
                        <p className="onoff">
                          <input
                            type="checkbox"
                            id="toggle3"
                            {...register("copy_writing_service")}
                          />
                          <label for="toggle3"></label>
                        </p>
                      </div>
                    </Accordion.Item>
                    {getValues("copy_writing_service") && (
                      <li className={styles.lastrow} id={styles.dropdownrow}>
                        <h5 className={styles.additionalLine}>
                          Please select no. of pages
                        </h5>
                        <div
                          className={`${styles.pageInput} d-flex justify-content-end`}
                          id={styles.inputWidth}
                        >
                          <span className={styles.pagesFeature}>
                            <input
                              type="number"
                              placeholder="0"
                              className={styles.pagesize}
                              min="1"
                              {...register("copy_writing_service_pages")}
                            />
                          </span>
                        </div>
                      </li>
                    )}

                    <Accordion.Item
                      eventKey="11"
                      className={`${styles.accHeader} mb-4 d-flex align-items-center justify-content-between bg-light`}
                      id={styles.multiLang}
                    >
                      <h3 className={styles.dropHeader}> Motion Graphics ? </h3>
                      <div
                        className={`${styles.pageGap} d-flex justify-content-between align-items-center`}
                      >
                        <span className={styles.pagecost}>
                          ($120per graphic)
                        </span>
                        <p className="onoff">
                          <input
                            type="checkbox"
                            id="toggle4"
                            {...register("motion_graphic")}
                          />
                          <label for="toggle4"></label>
                        </p>
                      </div>
                    </Accordion.Item>
                    {getValues("motion_graphic") && (
                      <li className={styles.lastrow} id={styles.dropdownrow}>
                        <h5 className={styles.additionalLine}>
                          Please choose the number for your special graphic
                          requirements
                        </h5>
                        <div
                          className={`${styles.pageInput} d-flex justify-content-end`}
                          id={styles.inputWidth}
                        >
                          <span className={styles.pagesFeature}>
                            <input
                              type="number"
                              placeholder="0"
                              className={styles.pagesize}
                              min="1"
                              {...register("motion_graphic_pages")}
                            />
                          </span>
                        </div>
                      </li>
                    )}

                    <Accordion.Item
                      eventKey="12"
                      className={`${styles.accText} mb-4`}
                    >
                      <Accordion.Header
                        className={styles.accHeader}
                        id={styles.addFeature}
                      >
                        <h3 className={styles.dropHeader}>
                          {" "}
                          Logo Designing Advanced (for custom requirements){" "}
                        </h3>
                      </Accordion.Header>
                      <Accordion.Body className={styles.accordionB}>
                        <ul className={styles.pages_header}>
                          <li className={`${styles.categoryTop} mb-2`}>
                            <span
                              className={`${styles.listOfDropdown} d-flex justify-content-between align-items-center`}
                            >
                              <span className={styles.logoWidth}>
                                3D Logo Design
                                <span className={styles.pagecost}>($75)</span>
                              </span>
                              <input
                                type="radio"
                                id={styles.inputNum}
                                value="threeD_logo"
                                {...register("logo")}
                              />
                            </span>
                          </li>
                          <li className={`${styles.categoryTop} mb-2`}>
                            <span
                              className={`${styles.listOfDropdown} d-flex justify-content-between align-items-center`}
                            >
                              <span className={styles.logoWidth}>
                                Animated Logo Design
                                <span className={styles.pagecost}>($100)</span>
                              </span>
                              <input
                                type="radio"
                                id={styles.inputNum}
                                value="animated_logo"
                                {...register("logo")}
                              />
                            </span>
                          </li>
                          <li className={`${styles.categoryTop} mb-2`}>
                            <span
                              className={`${styles.listOfDropdown} d-flex justify-content-between align-items-center`}
                            >
                              <span className={styles.logoWidth}>
                                Both
                                <span className={styles.pagecost}>($175)</span>
                              </span>
                              <input
                                type="radio"
                                id={styles.inputNum}
                                value={"both_logos"}
                                {...register("logo")}
                              />
                            </span>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="13"
                      id={styles.multiLang}
                      className={`${styles.accHeader} mb-4 d-flex align-item-center bg-light justify-content-between`}
                    >
                      <h3 className={styles.dropHeader}>
                        {" "}
                        Do you need help with Onsite Optimization ?{" "}
                      </h3>
                      <div
                        className={`${styles.pageGap} d-flex justify-content-between align-items-center`}
                      >
                        <span className={styles.pagecost}>($250)</span>
                        <p className="onoff">
                          <input
                            type="checkbox"
                            id="toggle5"
                            {...register("onSite_optimization")}
                          />
                          <label for="toggle5"></label>
                        </p>
                      </div>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="14"
                      className={`${styles.accHeader} mb-4 d-flex align-items-center justify-content-between bg-light `}
                      id={styles.multiLang}
                    >
                      <h3 className={styles.dropHeader}>
                        {" "}
                        Do you require Web Hosting Services ?{" "}
                      </h3>
                      <div
                        className={`${styles.pageGap} d-flex justify-content-between align-items-center`}
                      >
                        <span className={styles.pagecost}>($350)</span>
                        <p className="onoff">
                          <input
                            type="checkbox"
                            id="toggle6"
                            {...register("web_hosting")}
                          />
                          <label for="toggle6"></label>
                        </p>
                      </div>
                    </Accordion.Item>
                    {getValues("web_hosting") && (
                      <li className={styles.lastrow} id={styles.dropdownrow}>
                        <h5 className={styles.additionalLine}>
                          5 Email addresses and 32 GB shared space
                        </h5>
                      </li>
                    )}

                    <Accordion.Item
                      eventKey="15"
                      className={`${styles.accHeader} mb-4 d-flex align-items-center justify-content-between bg-light `}
                      id={styles.multiLang}
                    >
                      <h3 className={styles.dropHeader}>
                        {" "}
                        Do you need login / Signup functionality ?{" "}
                      </h3>
                      <div
                        className={`${styles.pageGap} d-flex justify-content-end`}
                      >
                        <p className="onoff">
                          <input
                            type="checkbox"
                            id="toggle7"
                            {...register("login_funtionality")}
                          />
                          <label for="toggle7"></label>
                        </p>
                      </div>
                    </Accordion.Item>
                    <Row
                      className=" justify-content-between pt-4"
                      id={styles.submit_btn}
                    >
                      <Col md={6} lg={6} sm={12}>
                        <Button
                          id={styles.submitButton}
                          className={Styles.submit_btn}
                          onClick={() => {
                            router.push("/contact");
                          }}
                        >
                          Looking for Customized package ?{" "}
                        </Button>
                      </Col>
                      <Col md={6} lg={6} sm={12} className={styles.sbmt}>
                        <Button
                          type="submit"
                          id={styles.submitButton}
                          className={Styles.submit_btn}
                        >
                          {" "}
                          See Pricing{" "}
                        </Button>
                      </Col>
                    </Row>
                  </Accordion>
                </Form>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Calculator;
