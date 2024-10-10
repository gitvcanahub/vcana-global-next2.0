import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "swiper/css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
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

const WebDesignDelaware = () => {
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

    onError: (error) => {
      Notification(
        "error",
        `<div style='font-size:13px'>An error occurred: ${
          error.message || "Please try again later."
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
    <>
      <NextSeo
        title="Custom Web Design Company In Delaware USA | Vcana Global"
        description="Vcana Global, a leading custom web design company in Delaware, USA, delivers unique, user-friendly websites tailored to your brand. Boost your online presence with us today!"
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "custom web design company Delaware, responsive web design Delaware, web design service in Delaware, ecommerce web design services Delaware, web app design services Delaware",
          },
        ]}
        canonical="https://www.vcanaglobal.com/web-design-delaware"
      />
      <div className={Style.banner_bg}>
        <Container>
          <Row>
            <div className={Style.banner_text}>
              <h1>Web Design & Development Company, Delaware</h1>
            </div>
            <div className={Style.baaner_text1}>
              <p>
                We have unmatched excellence in building aesthetically stunning
                and highly-functional websites for business success.
              </p>
            </div>
            <div className={Style.bannerlist}>
              <ul>
                <li>Latest and industry-oriented website designs</li>
                <li>Give best experiences to customers</li>
                <li>Help businesses leverage gains</li>
              </ul>
              <Link href="/contact">
                <button>Request A Quote</button>
              </Link>{" "}
            </div>
          </Row>
        </Container>
      </div>

      <div className={Style.gitform}>
        <Container>
          <Row>
            <Col md={5} lg={5} sm={12}>
              <div className={Style.formleft}>
                <h2 className="text-start">Share Your Needs</h2>
                <p>
                  Transform your Digital Presence with Vcana Global Web Design
                  Services
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
            <Col md={7} lg={7} sm={12} className=" align-items-center">
              <div className={Style.formright}>
                <h3 className="h3Headings">
                  OUR VERSATILE <span> WEB DESIGN </span>SERVICES
                </h3>
                <p>
                  Our comprehensive array of website design services include
                  specialist consulting services, custom design, development and
                  more. Sneak peek through our range of services.
                </p>
              </div>

              <div className={`${Style.formBoxManual} formBoxSroll`}>
                <div className={Style.formright1}>
                  <h5 className={Style.clicker} tabindex="1">
                    Custom Web Design
                  </h5>
                  <p className={Style.hiddendiv}>
                    Our experts thoroughly study your specific business needs
                    and accordingly, they build a custom website for you. It
                    creates a unique online identity of your business, drives
                    traffic and conversions and gives you a competitive edge.
                  </p>
                </div>
                <div className={Style.formright1}>
                  <h5 className={Style.clicker} tabindex="2">
                    Custom Website Redesign
                  </h5>
                  <p className={Style.hiddendiv}>
                    Our outstanding website redesigning capabilities can help
                    you equip your old existing website with the latest and
                    trending look and feel and functionality. This leads to
                    enhanced user experiences and journeys. Whether you want a
                    full or partial site redesigning, we keep you covered.
                  </p>
                </div>
                <div className={Style.formright1}>
                  <h5 className={Style.clicker} tabindex="3">
                    E-commerce Web Design
                  </h5>
                  <p className={Style.hiddendiv}>
                    Our team takes full care of planning, designing and building
                    your e-store. Our web strategists, designers and developers
                    collaborate with you to create a fully optimized online
                    store for you.
                    <br />
                    <br />
                    Whether you want to build a web-based store from scratch,
                    redesign an existing one or migrate it to a new platform,
                    our team extends you full support.
                  </p>
                </div>
                <div className={Style.formright1}>
                  <h5 className={Style.clicker} tabindex="4">
                    Local SEO
                  </h5>
                  <p className={Style.hiddendiv}>
                    If your business wants to reach the local audience in
                    Delaware, let Vcana Global experts create a custom website
                    for you, track its performance and provide maintenance
                    support for it. Also, you can entrust our team with the
                    responsibility to build a custom SEO strategy for boosting
                    your website’s visibility in search rankings and for driving
                    conversions.
                  </p>
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
                  Our Website Design<span> Portfolio</span>
                </h3>
                <p>
                  We are making an impact across industries and helping business
                  brands grow online. Explore the portfolio of our web design
                  clients.
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
                  // {!portfolioLoading
                  //     ? portfolioData?.data?.map((port) =>
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
                  OUR WEBSITE DEVELOPMENT <span>PROCESS</span>
                </h3>
                <p>
                  Our experts are knowledgeable of the latest web design
                  technologies, trends and standards. After fully understanding
                  a client’s requirements, they take a step-by-step approach to
                  deliver their project.
                </p>
              </div>
            </Col>
          </Row>
          <Row className={Style.spaceleft}>
            <Col md={4}>
              <div className={`${Style.progrid} pb-0`}>
                <h6>Understand Requirements</h6>
                <p>
                  Understanding the requirements is the most important phase of
                  any project. Here, we also work with the client to establish
                  the schedule, budget, timeline and technical needs.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${Style.progrid} pb-0`}>
                <h6>Design The Wireframe</h6>
                <p>
                  The site structure forms the backbone of the project. It acts
                  as a reference guide for everyone during the entire duration
                  of the project by providing the website its initial look and
                  feel.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${Style.progrid} pb-0`}>
                <h6>Code And Develop</h6>
                <p>
                  Here, we make sure that the team works as a unit to code and
                  develop the masterpiece in creation and be ready for the first
                  review and take the feedback.
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
                <h6>Testing & Fixing Of Bugs</h6>
                <p>
                  No project is flawless. Hence, rigorous testing done by our QA
                  team makes sure that your project is fixed for any bugs before
                  it is delivered.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${Style.progrid} pt-0`}>
                <h6>Deployment</h6>
                <p>
                  Hurray! The masterpiece is ready to be deployed for your
                  audience to feel the new experience.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${Style.progrid} pt-0`}>
                <h6>Maintenance</h6>
                <p>
                  What else? We not only deliver your projects but we also
                  pledge to make sure that your website faces no problem.
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
              <p>We are a value-oriented web design agency</p>
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <div className={Style.chooestext}>
                <p>
                  Vcana Global has established its credentials as a full-service
                  web design agency. We are dedicated to growing brands in the
                  digital landscape. Our seasoned team follows a proactive and
                  consultative approach for building cutting-edge websites that
                  help to advance online presence of businesses.
                </p>
                <p>
                  We are industry leaders with expertise spanning across web
                  design, development, branding and digital marketing. We are
                  your reliable partner in taking your custom website design and
                  development project to success. We assure you to maintain
                  transparent communication in your project and deliver you the
                  results you want.
                </p>
              </div>
            </Col>
            <Col
              md={6}
              className="d-flex align-items-center justify-content-center"
            >
              <Image
                className={Style.chooesimg}
                src="/chooseUs.webp"
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
                  Meet Our Expert Web
                  <span> Designers</span>{" "}
                </h3>
                <p>
                  Our ace designers have sharpened their skills and knowledge by
                  working over web development projects of varying business
                  needs, industries and complexity.
                </p>
                <p>
                  They are excited and ready to work on your custom website
                  designing project. But first they want to understand about
                  your website vision and needs. Accordingly, they will do the
                  needful to turn it to reality. To embark on your website
                  development journey, approach our specialists today.
                </p>
                <Link
                  target="_blank"
                  href="https://calendly.com/anshul-10/discussion-website-designing-development?month=2024-01"
                >
                  <button>Schedule A Consultation</button>
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
                  Some Helpful <span>FAQs</span>
                </h3>
                <p>
                  Here are some useful FAQs that will help you choose the right
                  website design agency for your project.
                </p>
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
                    What makes Vcana Global different from other web design
                    companies?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  The thing that sets us apart from other web design companies
                  is that we follow a strategic approach to every project. We
                  have highly experienced industry experts with a proven track
                  record in designing custom and result-oriented websites. They
                  use valuable insights and the latest trends to build
                  brand-specific websites. To make your project a success, our
                  experts provide expensive consulting services and take full
                  leadership of it.
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
                  <span className="px-2">02</span>{" "}
                  <span className={Style.accHeadName}>
                    What kind of results can I expect from hiring a web design
                    company in Delaware?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  A professional Delaware web design company should offer unique
                  custom solutions tailored to your company’s requirements. They
                  should serve your target audience and help your business brand
                  grow online.
                  <br /> <br />
                  There are some distinct benefits of hiring a professional web
                  design company for your custom website design and development
                  project. These include higher targeted traffic volume, wider
                  business reach, improved onsite engagement and conversions,
                  enhanced customer retention, improved overall brand
                  performance and boosted revenue generation.
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
                  <span className="px-2">03</span>{" "}
                  <span className={Style.accHeadName}>
                    Which particular web design services do you provide?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  We are an end-to-end web design company that provides services
                  for all types of website projects. We hold proficiency in
                  designing and developing static websites, dynamic websites,
                  blogging websites, portfolio websites, personal websites,
                  e-commerce websites, etc.
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
                  <span className="px-2">04</span>{" "}
                  <span className={Style.accHeadName}>
                    Do I have to be local to the Delaware area to work with
                    Vcana Global?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  No, Vcana Global works with businesses all over the USA and
                  even worldwide. Irrespective of your location, you can connect
                  and communicate your needs with our experts through one of the
                  virtual communication mediums that you prefer.
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
                  <span className="px-2">05</span>{" "}
                  <span className={Style.accHeadName}>
                    Should I choose a web design firm based in Delaware?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  Delaware is not only extremely suitable for both small
                  start-ups and big conglomerates, but it also has a wealth of
                  exceptional web design talent. They are knowledgeable of the
                  latest industry trends and are equipped with data-driven best
                  practices. Vcana Global is such a Delaware web design agency
                  that has the requisite website design skills and expertise to
                  take your brand to the next level and give your business a
                  global reach.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Container>
      </div>
    </>
  );
};

export default WebDesignDelaware;
