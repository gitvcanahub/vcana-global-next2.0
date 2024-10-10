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

const CustomAppDelaware = () => {
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
        title="Custom App Development Company In Delaware USA | Vcana Global"
        description="Looking for custom app development in Delaware? Vcana Global provides tailored solutions and expert support to turn your vision into reality. Get in touch!"
        canonical="https://www.vcanaglobal.com/custom-app-delaware"
      />

      <div className={Style.banner_bg}>
        <Container>
          <Row>
            <div className={Style.banner_text}>
              <h1>PREMIER CUSTOM APP DEVELOPMENT COMPANY IN DELAWARE</h1>
            </div>
            <div className={Style.baaner_text1}>
              <p>
                We have unmatched expertise in building a variety of secure,
                scalable and efficient custom applications for diverse
                businesses, including startups, SMEs and enterprises.
              </p>
            </div>
            <div className={Style.bannerlist}>
              <ul>
                <li>
                  The applications built on the latest technologies and
                  development platforms
                </li>
                <li>
                  Customized and aligned to unique business needs and goals
                </li>
                <li>
                  Add on to the user experience and maximize business value
                </li>
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
                <h2 className="text-start">
                  Let Us Know Your Custom App Development Needs
                </h2>
                <p>
                  Realize your unique app vision and unlock true potential of
                  your business with innovative, tailored app development
                  services from Vcana Global.
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
                    OUR BUSINESS-TRANSFORMING CUSTOM{" "}
                    <span> APPLICATION DEVELOPMENT </span> SERVICES
                  </h3>
                  <p>
                    Our advanced custom application development services
                    meticulously design and develop tailored applications that
                    improve various facets of businesses and enhance their
                    operations. Embrace them for your business success.
                  </p>
                </div>

                <div className={`${Style.formBoxManual} formBoxSroll`}>
                  <div className={Style.formright1}>
                    <h5 className={Style.clicker} tabindex="1">
                      Customized Web Development
                    </h5>
                    <p className={Style.hiddendiv}>
                      You can trust seasoned application specialists of our
                      custom web app development company to upgrade an existing
                      application or build a new one from scratch. After
                      grasping a thorough understanding of your unique
                      application idea and brainstorming on it, our design
                      experts will accordingly go ahead to design your
                      application’s look and feel, while our developers will
                      work on adding the necessary functionality to its back-end
                      and front-end.
                      <br />
                      <br />
                      Eventually, you will get an interactive, user-friendly and
                      flawless application that effectively meets your business
                      needs, offers a seamless performance and provides engaging
                      experiences to users.
                    </p>
                  </div>
                  <div className={Style.formright1}>
                    <h5 className={Style.clicker} tabindex="2">
                      Progressive Custom Apps
                    </h5>
                    <p className={Style.hiddendiv}>
                      Our custom app development company has great prowess in
                      building the best and reliable progressive custom web apps
                      as per the unique needs of businesses. Various features
                      and benefits provided by such apps include offline
                      functioning, responsive design, easily installable, less
                      space consumption, fast updates, enhanced security,
                      linkability, etc. We are your trusted progressive custom
                      app development partner.
                    </p>
                  </div>
                  <div className={Style.formright1}>
                    <h5 className={Style.clicker} tabindex="3">
                      Web Portal Development
                    </h5>
                    <p className={Style.hiddendiv}>
                      We have finesse in building various kinds of web portals
                      including B2B and B2C web portals. We can create a
                      customized, robust, secure, scalable and easy-to-use web
                      portal for your business in accordance to your specific
                      business goals and technical infrastructure. By
                      integrating your fragmented touchpoints, services and
                      processes in one place, the portal will help to provide
                      easily navigable and personalized journeys to your
                      clients, customers and employees. If you are keen to
                      provide your audience with a unified and exalted digital
                      experience, then give us the opportunity to bring your web
                      portal idea to life.
                    </p>
                  </div>
                  <div className={Style.formright1}>
                    <h5 className={Style.clicker} tabindex="4">
                      Enterprise Application Development
                    </h5>
                    <p className={Style.hiddendiv}>
                      We excel at building secure, robust, cloud-ready, scalable
                      and compatible enterprise applications by utilizing the
                      latest technologies and development platforms. Built in
                      accordance to specific needs and requirements of
                      enterprise-level-businesses from different industries, the
                      custom enterprise applications maintain data integrity and
                      deliver superior performance.
                      <br />
                      <br />
                      Delivering differentiated services at the same place and
                      easily accessible on mobile devices, tablets and desktops,
                      the applications enable businesses to function in a smooth
                      and efficient manner. Besides reducing their costs, they
                      also support businesses in the achievement of their goals
                      and drive them to success.
                    </p>
                  </div>
                  <div className={Style.formright1}>
                    <h5 className={Style.clicker} tabindex="5">
                      Cross-platform Apps
                    </h5>
                    <p className={Style.hiddendiv}>
                      Our top-notch cross-platform app development services save
                      your business from the challenge of building separate
                      mobile apps for multiple platforms and help you create
                      best-in-class, secure, scalable and high-performance
                      cross-platform apps. Experts of our custom mobile app
                      development company use modern programming languages like
                      JavaScript, CSS3, and HTML5 and powerful and adaptable
                      cross-platform mobile application development frameworks
                      such as React Native, Flutter and Xamarin for building the
                      apps.
                      <br />
                      <br />
                      The frameworks enable our developers to write shareable
                      and reusable code for developing cross-platform apps.
                      Apart from fast and efficient cross-platform development,
                      our services help you leverage various other associated
                      gains in terms of saving time, use of less resources,
                      enabling your business to reach a wider audience and
                      quicker time to market and customization. They set your
                      business up for great success in the competitive
                      marketplace of today.
                    </p>
                  </div>
                  <div className={Style.formright1}>
                    <h5 className={Style.clicker} tabindex="6">
                      Third-Party Integration and Customization
                    </h5>
                    <p className={Style.hiddendiv}>
                      Our experts are proficient in integrating various advanced
                      and essential third-party services/products such as ERP
                      and others into existing business apps, or those being
                      developed by using the best industry practices. Our
                      third-party integration and customization services help
                      you leverage gains in terms of reduced app development
                      time, cost and effort, filling functional gaps, simplified
                      user journey and enhancing the functionality of your app
                      solutions. Embrace our app integration services to achieve
                      efficient management of your business processes, provide
                      even better customer experiences and more.
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
                  OUR CUSTOM APPLICATION DEVELOPMENT <span> PORTFOLIO</span>
                </h3>
                <p>
                  We have designed and developed some of the finest custom
                  applications, including PWAs, web portals, cross-platform apps
                  and enterprise applications. Explore our portfolio to discover
                  our range of app development capabilities.
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
                  OUR CUSTOM APP DEVELOPMENT <span>PROCESS</span>
                </h3>
                <p>
                  Our experts use trending technologies and frameworks and the
                  best industry practices to build advanced apps for diverse
                  businesses. Our team will guide you through every step of the
                  process to ensure seamless development of your application.
                </p>
              </div>
            </Col>
          </Row>
          <Row className={Style.spaceleft}>
            <Col md={4}>
              <div className={`${Style.progrid} pb-0`}>
                <h6>Requirements Analysis and Planning</h6>
                <p>
                  To build your project plan, we analyze your requirements,
                  including the app’s vision, pain points it addresses,
                  features, specifications, users, competitors, gaps in the
                  market, etc.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${Style.progrid} pb-0`}>
                <h6>Application Design and Architecture</h6>
                <p>
                  We focus on scalability, performance and user experience while
                  designing your custom application and building its
                  architecture.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${Style.progrid} pb-0`}>
                <h6>Custom Application Development</h6>
                <p>
                  Here our skilled developers take charge and utilize the latest
                  technologies to build a powerful and feature-rich application
                  tailored to your specifications.
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
                <h6>Testing and Quality Assurance</h6>
                <p>
                  Now our QA team performs stringent and comprehensive testing
                  on the fully developed custom app to ensure it performs
                  flawlessly and reliably as per the highest standards.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${Style.progrid} pt-0`}>
                <h6>Deployment</h6>
                <p>
                  Our team collaborates with you for the seamless deployment and
                  implementation of your custom-built application as per the
                  well-defined deployment plan.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${Style.progrid} pt-0`}>
                <h6>Maintenance</h6>
                <p>
                  After your application is live and end users start using it,
                  it has to be regularly updated and modified. Our team performs
                  its maintenance to ensure it functions optimally and meets
                  your evolving business needs.
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
                WHY CHOOSE OUR <span> CUSTOM APP DEVELOPMENT </span> SERVICES?
              </h3>
              <p>
                We build value-oriented and success-transforming business apps
                of all kinds.
              </p>
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <div className={Style.chooestext}>
                <p>
                  Over the years Vcana Global has built a great reputation in
                  the custom application development world. Knowledgeable of the
                  latest app technologies and tools, including Ubuntu,Ajax,
                  PostgreSQL, Angular JS, Oracle and Amazon Services, our
                  development experts have contributed in the success of many
                  diverse and technically complex app-building projects.
                </p>
                <p>
                  Whether you require a web app, PWA, web portal, enterprise
                  application, cross-platform app or want to integrate a useful
                  service/product into your existing app for enhancing its
                  functionality, you can rely on our team’s expertise. They will
                  build a scalable, secure, highly-performing and
                  customer-centered app exactly as per your specific business
                  needs.
                </p>
              </div>
            </Col>
            <Col
              md={6}
              className="d-flex align-items-center justify-content-center"
            >
              <Image
                className={Style.chooesimg}
                src="/chooseUs4.webp"
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
                  MEET OUR
                  <span> SKILLED APP </span> SPECIALISTS
                </h3>
                <p>
                  Our experts have honed their expertise by working over
                  diverse, most challenging and technically complex custom
                  application development projects. Their in-depth knowledge of
                  the app building craft makes them the best choice for
                  navigating your custom app development project to success.
                </p>
                <p>
                  Enthusiastic to commence working on your project, they want to
                  first discuss your app requirements in detail with you. This
                  will provide them the necessary insights for the next course
                  of action.
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
                  Frequently Asked Questions for{" "}
                  <span> Custom Application </span>Development
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
                    What are custom applications?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  Custom application is an application built as per the
                  particular requirements of a business and its objectives. It
                  performs various business operations. Custom-built
                  applications contain various user interface tools, components
                  and modules that automate business-related workflows and
                  provide seamless functionality.
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
                    What is custom application development?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  Custom application development is a process that involves
                  designing, development and deployment of tailor-made
                  applications for particular organizations or users. Usually, a
                  custom application is created for a specific set of groups or
                  users and it addresses business challenges within an
                  organization.
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
                    What is a custom application development company?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  A custom application development company has expertise in
                  building feature-rich and user-friendly custom applications.
                  Its experts utilize planning and strategy, implementation and
                  management for the development of applications. Organizations
                  opt for custom application development services as they are
                  unable to find an ideal ready-made product solution that
                  satisfies their specific needs and business objectives.
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
                    What are the benefits of building a custom application?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  The development of a custom application awards various
                  benefits to organizations in terms of personalization,
                  cost-effectiveness, increased productivity and high security
                  and reliability. The advantages also include flexibility and
                  scalability, seamless integration and exclusive ownership.
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
                    How much time gets spent in building a custom application?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  If the requirements are extremely complex, the average time it
                  takes to build a custom app is around 8 to 12 months. However,
                  it is quite hard to provide a precise time frame for app
                  development as it is based on various parameters.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className={Style.accItem}
                style={{
                  background: "none!important",
                  boxShadow: "none!important",
                }}
                eventKey="5"
              >
                <Accordion.Header className={Style.accHead}>
                  <span className="px-2">06</span>
                  <span className={Style.accHeadName}>
                    How much is the cost of developing a custom application?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  The price of developing a custom application depends on
                  various things. These include size of the application, the
                  complexity of the design and the application itself, its
                  functional scope, implementation technology, the migration of
                  old data and integration to other systems.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className={Style.accItem}
                style={{
                  background: "none!important",
                  boxShadow: "none!important",
                }}
                eventKey="6"
              >
                <Accordion.Header className={Style.accHead}>
                  <span className="px-2">07</span>
                  <span className={Style.accHeadName}>
                    Why choose Vcana Global for your custom application
                    development?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  Vcana Global is a reputed custom application development
                  company with years of experience in the custom application
                  development domain. Our team has successfully delivered many
                  technically complex and most challenging custom application
                  development projects for businesses belonging to diverse
                  industry verticals.
                  <br />
                  <br />
                  Because of our in-depth knowledge and understanding of the
                  custom application development world, we are the right choice
                  for bringing your custom app idea to life.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CustomAppDelaware;
