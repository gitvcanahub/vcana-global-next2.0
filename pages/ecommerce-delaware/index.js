import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "swiper/css";
import Form from "react-bootstrap/Form";
import Style from "./index.module.css";
import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { useQuery } from "@tanstack/react-query";
import FetchService from "@/services/Fetch";
import { config } from "@/config";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import Spinner from "react-bootstrap/Spinner";
import { isValidPhoneNumber } from "react-phone-number-input";
import PhoneInput from "react-phone-number-input";
import { Notification } from "@/components/shared/Notification";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const errorMessage = (error) => {
  return (
    <div
      style={{ color: "red", margintTop: "5px !important", display: "flex" }}
    >
      {error}
    </div>
  );
};

const EcommerceDelaware = () => {
  const [filter, setFilter] = useState({
    category: "",
    showOn_web: true,
  });

  const {
    data: portfolioData,
    isLoading: portfolioLoading,
    // error: companyError,
  } = useQuery({
    queryKey: ["Portfolios", filter],
    queryFn: () => FetchService.portfolioAll(filter),
    keepPreviousData: true,
  });

  const filterHandler = (cat) => {
    setFilter({ category: cat });
  };
  ///////////////////////////////////////////////////////
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
        title="Ecommerce Development Company in Delaware USA | Vcana Global"
        description="Vcana Global, a premier ecommerce web and app development company in Delaware, USA, delivers tailored solutions to elevate your business. Partner with us for success!"
        canonical="https://www.vcanaglobal.com/ecommerce-delaware"
      />

      <div className={Style.banner_bg}>
        <Container>
          <Row>
            <div className={Style.banner_text}>
              <h1>Top-notch E-commerce Website Development Company Delaware</h1>
            </div>
            <div className={Style.baaner_text1}>
              <p>
                We are a leading e-commerce web development agency that excels
                in building advanced and thriving web-based storefronts for
                businesses of all sizes and industries.
              </p>
            </div>
            <div className={Style.bannerlist}>
              <ul>
                <li>Customized storefronts with user-engaging UI designs</li>
                <li>Full stack e-commerce development</li>
                <li>Creative and growth driving marketing strategies</li>
              </ul>
              <Link href="/contact">
                <button>Request A Quote</button>
              </Link>
            </div>
          </Row>
        </Container>
      </div>

      <div className={Style.gitform}>
        <Container>
          <Row>
            <Col md={5} lg={5} sm={12}>
              <div className={Style.formleft}>
                <h2 className="text-start">Tell Us Your Store Needs</h2>
                <p>
                  Set your business up for e-commerce success with Vcana Global.
                </p>
                <Form onSubmit={handleSubmit(submitHandler)}>
                  <Form.Group as={Row} className="mb-3" controlId="name">
                    <Col md={12}>
                      {/* <span className="text-danger">*</span> */}
                      <Form.Control
                        type="text"
                        placeholder="Name"
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
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-3"
                    controlId="company"
                    {...register("company", {
                      // required: true,
                      minLength: 2,
                      pattern: { value: /^[A-Za-z ]*$/ },
                    })}
                  >
                    <Col md={12}>
                      <Form.Control type="text" placeholder="Company Name" />
                      {errors.company &&
                        errors.company.type === "required" &&
                        errorMessage("Please enter a company name")}
                      {errors.company &&
                        errors.company.type === "minLength" &&
                        errorMessage("Name must be 2 characters")}
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="email">
                    <Col md={12}>
                      <Form.Control
                        type="email"
                        placeholder="Email"
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
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-3" controlId="phone">
                    <Col md={12}>
                      <PhoneInput
                        international
                        defaultCountry="US"
                        ountryCallingCodeEditable={false}
                        placeholder="phone"
                        className="border rounded px-2 py-2"
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
                    </Col>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="message">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Message"
                      {...register("message", {})}
                    />
                  </Form.Group>
                  <button
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
                      "Submit"
                    )}
                  </button>
                </Form>
              </div>
            </Col>
            <Col md={7} lg={7} sm={12} className="align-items-center">
              <div>
                <div className={Style.formright}>
                  <h3 className="h3Headings">
                    OUR 360-DEGREE E-COMMERCE <span> WEB DEVELOPMENT </span>{" "}
                    SERVICES
                  </h3>
                  <p>
                    We provide a full range of e-commerce website design
                    services, including e-commerce consulting, UI/UX web and app
                    design, web development, content creation, SEO optimization,
                    online store marketing and maintenance. Explore our wide
                    array of e-commerce web design services. Give a glance to
                    our extensive range of e-commerce store services.
                  </p>
                </div>

                <div className={`${Style.formBoxManual} formBoxSroll`}>
                  <div className={Style.formright1}>
                    <h5 className={Style.clicker} tabindex="1">
                      E-commerce Web Design
                    </h5>
                    <p className={Style.hiddendiv}>
                      User interface (UI) is the foundation to the development
                      of an online store. To build a solid foundation for your
                      store, our designers create a fascinating user interface
                      (UI) that captures the attention of customers.
                      <br />
                      <br />
                      We create an engaging custom e-commerce web design that
                      perfectly reflects your brand’s identity and reinforces
                      your brand’s recognition. At the same time, it provides an
                      exceptional user experience tailored to your customer’s
                      preferences. Such experiences inspire them to connect and
                      interact with your brand and make product/service purchase
                      decisions in your favor.
                    </p>
                  </div>
                  <div className={Style.formright1}>
                    <h5 className={Style.clicker} tabindex="2">
                      Shopify Development
                    </h5>
                    <p className={Style.hiddendiv}>
                      You can confidently rely on our Shopify development
                      experts to build customized B2B and B2C Shopify stores
                      that drive more conversions and sales for you. Equipped
                      with the latest features of industry-leading Shopify
                      e-commerce building platform, the store built by our
                      experts will give a massive boost to your brand awareness
                      and skyrocket your sales.
                      <br />
                      <br />
                      Do you want to build a web-based Shopify store that well
                      serves the needs of your target audience and customers and
                      lets you effectively capture industry opportunities? Then
                      choose us for your storefront development.
                    </p>
                  </div>
                  <div className={Style.formright1}>
                    <h5 className={Style.clicker} tabindex="3">
                      Magento Development
                    </h5>
                    <p className={Style.hiddendiv}>
                      Vcana Global has seasoned experts with proficiency in
                      building complex e-commerce solutions on the Magento
                      e-commerce development platform. These solutions also
                      stand out of their feature richness, customizability,
                      flexibility, mobile responsiveness and security.
                      <br />
                      <br />
                      Whether your online business deals in unique services,
                      offers a huge inventory or runs through multiple
                      e-commerce stores, you can trust the innovative approach
                      and expertise of our Magento developers to shape your
                      store to success. So share your complicated storefront
                      requirements with us. Our developers will turn them into a
                      modern e-commerce store. Apart from building a robust and
                      scalable online presence of your business, it will also
                      provide smooth user experiences to your customers.
                    </p>
                  </div>
                  <div className={Style.formright1}>
                    <h5 className={Style.clicker} tabindex="4">
                      WooCommerce Development
                    </h5>
                    <p className={Style.hiddendiv}>
                      WooCommerce is an e-commerce plugin that lets users create
                      and manage online stores with ease. Our developers will
                      harness the full potential of WooCommerce to build a
                      customized and user friendly e-commerce store focused on
                      providing an enriching experience to customers and
                      centered around your brand.
                      <br />
                      <br />
                      Being SEO and sales optimized and equipped with a crystal
                      clear navigation, the store will enable you to generate
                      high quality leads and convert them into customers. It
                      will help your business become an outright winner in the
                      extremely competitive e-commerce market.
                      <br />
                      <br />
                      We also excel at building web-based stores powered by
                      PrestaShop and BigCommerce. Our range of services also
                      encompass multi-store development and integration,
                      e-commerce store upgradation and migration, custom modules
                      & plugins development, payment gateway API integration and
                      store maintenance and support.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={Style.portfoliosection}>
        <Container>
          <Row>
            <Col md={12} lg={5} sm={12}>
              <div className={Style.portfoliosectiontext}>
                <h3 className="h3Headings">
                  EXPLORE OUR E-COMMERCE CLIENT'S<span> PORTFOLIO</span>
                </h3>
                <p>
                  Our e-commerce expertise has partnered with brands from
                  different parts of the world and belonging to diverse
                  industries to set them up for a big e-commerce success.
                </p>
              </div>
            </Col>
            <Col md={12} lg={7} sm={12} className={Style.prot}>
              <div className={`${Style.prolist} `}>
                <ul>
                  <li
                    className={filter.category === "" ? Style.active : ""}
                    onClick={() => filterHandler("")}
                  >
                    All
                  </li>
                  <li
                    className={
                      filter.category === "WEB DESIGN AND DEVELOPMENT"
                        ? Style.active
                        : ""
                    }
                    onClick={() => filterHandler("WEB DESIGN AND DEVELOPMENT")}
                  >
                    Website Design
                  </li>
                  <li
                    className={
                      filter.category === "Mobile App" ? Style.active : ""
                    }
                    onClick={() => filterHandler("Mobile App")}
                  >
                    Mobile App
                  </li>
                  <li
                    className={
                      filter.category === "Digital Marketing"
                        ? Style.active
                        : ""
                    }
                    onClick={() => filterHandler("Digital Marketing")}
                  >
                    Digital Marketing
                  </li>
                  <li
                    className={
                      filter.category === "Software Application"
                        ? Style.active
                        : ""
                    }
                    onClick={() => filterHandler("Software Application")}
                  >
                    Software Application
                  </li>
                  <li
                    className={filter.category === "SEO" ? Style.active : ""}
                    onClick={() => filterHandler("SEO")}
                  >
                    SEO
                  </li>
                </ul>
              </div>
            </Col>

            {!portfolioLoading
              ? portfolioData?.data?.slice(0, 6).map((port) => (
                  <Col md={6} sm={12} lg={4} key={port?._id} mt-3>
                    <div className={Style.img}>
                      <Image
                        className={`${Style.pros} ${Style.setImg}`}
                        src={`${config.imageUrl}${port.image2}`}
                        width={400}
                        height={600}
                        objectFit="cover"
                        alt="nb"
                      />
                      <Link href={`/portfolio/${port?.url}`}>
                        <button className="text-dark">
                          {port?.website_name}
                        </button>
                      </Link>
                    </div>
                  </Col>
                ))
              : Array(6)
                  .fill()
                  .map((_, index) => (
                    <Col
                      md={6}
                      sm={12}
                      lg={4}
                      key={index}
                      className="mt-3 px-2"
                    >
                      <Skeleton height={300} />
                      <Skeleton width={`100%`} height={30} />
                    </Col>
                  ))}
          </Row>
          <Link href="/portfolio">
            <button className={Style.projectBtn}>Discover More Projects</button>
          </Link>
        </Container>
      </div>

      <div className={Style.process_section}>
        <Container fluid>
          <Row>
            <Col md={12}>
              <div className={Style.protext}>
                <h3 className="h3Headings">
                  OUR E-COMMERCE DEVELOPMENT <span>PROCESS</span>
                </h3>
                <p>
                  Our streamlined e-commerce development process is designed to
                  drive remarkable results for your online store.
                </p>
              </div>
            </Col>
          </Row>
          <Row className={Style.spaceleft}>
            <Col md={4}>
              <div className={`${Style.progrid} pb-0`}>
                <h6>Web Store Strategy</h6>
                <p>
                  After knowing your unique e-commerce store needs and other
                  related aspects, our experts accordingly will devise a
                  strategy for bringing your store to reality.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${Style.progrid} pb-0`}>
                <h6>Planning & Information Architecture</h6>
                <p>
                  We plan the steps for a smooth customer journey from when they
                  first visit your website till they purchase. These include
                  creating layout wireframes, user flow, user journey and
                  sitemap structures.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${Style.progrid} pb-0`}>
                <h6>Creative Design</h6>
                <p>
                  Before your e-commerce store becomes functional, our designers
                  will create an enchanting and brand-aligned design for it.
                  They will place interactions, animations and other visual
                  elements in the conversion funnel.
                </p>
              </div>
            </Col>
          </Row>
          <Row className={Style.processMidImg}>
            <Col md={12}>
              <Image
                className={`${Style.prosss} w-100 h-100`}
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/webdelaware/processpic.png"
                }
                width={1800}
                height={300}
                objectFit="cover"
                alt="nb"
              />
            </Col>
          </Row>
          <Row className={Style.spaceright}>
            <Col md={4}>
              <div className={`${Style.progrid} pt-0`}>
                <h6>Responsive Development</h6>
                <p>
                  As per your chosen platform, we create a flexible, accessible
                  and conversion-optimized store website by custom coding,
                  adding extensions and integrations and optimizing it for
                  multiple screen sizes and devices.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${Style.progrid} pt-0`}>
                <h6>Launch</h6>
                <p>
                  Our developers optimize your website for loading speed,
                  performance, etc., fix issues and secure data and customer
                  details. Also, our marketers optimize it for SEO and digital
                  marketing. Now, it is ready to go live.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${Style.progrid} pt-0`}>
                <h6>Maintenance</h6>
                <p>
                  After development and launch, we work to update your website’s
                  design and functionality and keep it functional and
                  issue-free. This includes updating plugins, optimizing images,
                  CMS version and information, securing backup and more.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={Style.chooesSection}>
        <Container>
          <Row>
            <Col md={12} className="pb-4">
              <h3 className="h3Headings">
                Why Companies <span>Choose Us ?</span>
              </h3>
              <p>We are an innovative e-commerce development company</p>
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <div className={Style.chooestext}>
                <p>
                  Vcana Global, a versatile e-commerce web development company,
                  excels in building highly performing and feature-rich
                  web-based stores as per specific business needs, customer
                  preferences and the latest e-commerce trends. By driving more
                  traffic and sales for our clients, the stores are augmenting
                  their growth in today’s extremely competitive market
                  landscape.
                </p>
                <p>
                  Knowledgeable of the latest e-commerce platforms, including
                  Magento, Shopify, WooCommerce, BigCommerce and PrestaShop, our
                  team also implements the best e-commerce development
                  practices. Having hands-on experience in building and
                  maintaining varied, most complex and challenging e-commerce
                  websites, you can trust them to deliver you a high quality and
                  profitable store website on time and budget.
                </p>
              </div>
            </Col>
            <Col
              md={6}
              className="d-flex align-items-center justify-content-center"
            >
              <Image
                className={Style.chooesimg}
                src="/chooseUs3.webp"
                width={600}
                height={350}
                objectFit="cover"
                alt="nb"
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className={Style.meetsection}>
        <Container>
          <Row>
            <Col md={6} className="d-flex align-items-center">
              <div className={Style.meetimg}>
                <Row className={Style.grpRow}>
                  <Col md={6}>
                    <Image
                      className={Style.starImg1}
                      src="/Asset1.png"
                      width={300}
                      height={250}
                      alt="nb"
                    />
                  </Col>
                  <Col md={6}>
                    <Image
                      className={Style.starImg2}
                      src="/Asset2.png"
                      width={300}
                      height={250}
                      alt="nb"
                    />
                  </Col>
                  <Col md={6}>
                    <Image
                      className={Style.starImg3}
                      src="/Asset3.png"
                      width={300}
                      height={250}
                      alt="nb"
                    />
                  </Col>
                  <Col md={6}>
                    <div className={Style.box}>
                      <Image
                        className={Style.starImg4}
                        src="/Asset4.png"
                        width={300}
                        height={250}
                        alt="nb"
                      />
                      <h6>20+</h6>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <div className={Style.meetitext}>
                <h3 className="h3Headings">
                  MEET OUR E-COMMERCE<span> SPECIALISTS</span>{" "}
                </h3>
                <p>
                  Well versed in the craft of building customized and highly
                  converting e-commerce websites for diverse industry verticals,
                  our specialists have the requisite skills and knowledge to
                  navigate your store building project to success.
                </p>
                <p>
                  Enthused to bring your store’s vision to reality, they are
                  waiting to have a word with you to know your specific
                  storefront needs and expectations. So our experts can
                  accordingly proceed to bring your store to life.
                </p>
                <Link
                  target="_blank"
                  href="https://calendly.com/anshul-10/discussion-website-designing-development?month=2024-01"
                >
                  <button>Schedule A Meeting </button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={Style.accordionsection}>
        <Container>
          <Row>
            <Col md={12}>
              <div className={Style.accortext}>
                <h3 className="h3Headings">
                  USEFUL <span>FAQs</span>
                </h3>
              </div>
            </Col>
          </Row>
          <div className={`${Style.box123} box123`}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item
                className={Style.accItem}
                style={{
                  background: "none!important",
                  boxShadow: "none!important",
                }}
                eventKey="0"
              >
                <Accordion.Header className={Style.accHead}>
                  {" "}
                  <span className="px-2">01</span>
                  <span className={Style.accHeadName}>
                    What do e-commerce web developers do?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  E-commerce web developers build and optimize your e-commerce
                  store website to boost traffic, generate leads and enhance
                  sales and revenue for your business. They utilize in-depth
                  knowledge of programming languages such as CSS and HTML and
                  JavaScript frameworks like ReactJS and AngularJS. They
                  translate your brand’s unique vision from a prototype to a
                  functional, user friendly and efficient website.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className={Style.accItem}
                style={{
                  background: "none!important",
                  boxShadow: "none!important",
                }}
                eventKey="1"
              >
                <Accordion.Header className={Style.accHead}>
                  <span className="px-2">02</span>
                  <span className={Style.accHeadName}>
                    How much time will be spent in the development of my
                    e-commerce website?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  The time of your e-commerce website development project will
                  depend on the level of complexity of your online store’s
                  requirements.
                  <br />
                  <br />
                  E-commerce building projects may take between 3 and 6 months
                  for completion. However, e-commerce development should be a
                  continuing solution to ensure high performance of your
                  e-commerce store.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className={Style.accItem}
                style={{
                  background: "none!important",
                  boxShadow: "none!important",
                }}
                eventKey="2"
              >
                <Accordion.Header className={Style.accHead}>
                  <span className="px-2">03</span>
                  <span className={Style.accHeadName}>
                    What is the cost of e-commerce website development?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  The cost of custom web development can be as little as
                  $15,000. But the price of an extensive e-commerce website can
                  lie between $50,000-$60,000 and even more.
                  <br />
                  <br />
                  The true cost depends on your specific project requirements.
                  Factors such as distinctive landing pages, choice of content
                  management system (CMS) and custom functionalities have an
                  impact on your e-commerce website’s price.
                  <br />
                  <br />
                  Our website cost calculator can help you in working out the
                  price of your e-commerce website for free.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className={Style.accItem}
                style={{
                  background: "none!important",
                  boxShadow: "none!important",
                }}
                eventKey="3"
              >
                <Accordion.Header className={Style.accHead}>
                  <span className="px-2">04</span>
                  <span className={Style.accHeadName}>
                    Why should I partner with Vcana Global for e-commerce web
                    design?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  We are a full-service agency with years of experience in the
                  custom e-commerce website development realm. When you partner
                  with Vcana Global, you leverage our full range of expertise
                  and skills. We have helped many brands grow online. We take
                  complete ownership of the projects and offer end-to-end
                  solutions from e-commerce web design and development to
                  marketing and beyond.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className={Style.accItem}
                style={{
                  background: "none!important",
                  boxShadow: "none!important",
                }}
                eventKey="4"
              >
                <Accordion.Header className={Style.accHead}>
                  <span className="px-2">05</span>
                  <span className={Style.accHeadName}>
                    Do you provide support and maintenance after the development
                    of e-commerce websites?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  Yes, we provide support and maintenance services after
                  building and delivering your e-commerce store website. These
                  services are important to ensure your store continues to
                  provide an outstanding user experience and drive conversions.
                  <br />
                  <br />
                  Our 24 x 7 support services include custom coding, complex
                  tools, techniques, integrations, updates and quick fixes. They
                  help to keep your store functional and relevant in all
                  situations.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Container>
      </div>
    </>
  );
};

export default EcommerceDelaware;
