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

const MobileAppDelaware = () => {
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
        title="Vcana Global - Custom Mobile App Development Company In Delaware USA"
        description="Vcana Global, based in Delaware, USA, excels in custom mobile app development. Partner with us for tailored app solutions that boost your business growth. Get started now!"
        canonical="https://www.vcanaglobal.com/mobile-app-delaware"
      />
      <div className={Style.banner_bg}>
        <Container>
          <Row>
            <div className={Style.banner_text}>
              <h1>Premier Mobile App Development Company Delaware, USA</h1>
            </div>
            <div className={Style.baaner_text1}>
              <p>
                We have unmatched credentials in building innovative and
                creative apps that set businesses up for a big success.
              </p>
            </div>
            <div className={Style.bannerlist}>
              <ul>
                <li>Versatile solutions for diverse mobile platforms</li>
                <li>Agile methodology for fast and flexible development</li>
                <li>Apps equipped with the latest and most useful features</li>
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
                <h2 className="text-start">Discuss Your App Needs</h2>
                <p>
                  Unlock and convert opportunities with Vcana Global’s Elite App
                  Development Services
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
                    OUR BUSINESS-UPLIFTING <span> APP DEVELOPMENT </span>{" "}
                    SERVICES
                  </h3>
                  <p>
                    Vcana Global, the leading Mobile App Development Company in
                    Delaware, offers a comprehensive range of customized app
                    development services. Our experts have expertise in building
                    apps that are highly interactive, functional and equipped
                    with trending and advanced features. They provide visually
                    stunning and transformative user experiences and drive
                    increased revenue for our clients.
                  </p>
                </div>

                <div className={`${Style.formBoxManual} formBoxSroll`}>
                  <div className={Style.formright1}>
                    <h5 className={Style.clicker} tabindex="1">
                      Mobile App Design
                    </h5>
                    <p className={Style.hiddendiv}>
                      Our designers are proficient in creating a unique and
                      enticing UI/UX app design for your business that engages
                      users, gives them great experiences and inspires them to
                      convert. Also, it enables you to retain customers for
                      long.
                    </p>
                  </div>
                  <div className={Style.formright1}>
                    <h5 className={Style.clicker} tabindex="2">
                      Android App Development
                    </h5>
                    <p className={Style.hiddendiv}>
                      We hold absolute mastery over building modern, powerful
                      and user-engaging native apps for the Android platform.
                      They help our clients leverage various useful features of
                      the platform. These include beautiful UI, easy
                      connectivity, simplified data storage, multi-touch,
                      multi-tasking and more.
                    </p>
                  </div>
                  <div className={Style.formright1}>
                    <h5 className={Style.clicker} tabindex="3">
                      iOS App Development
                    </h5>
                    <p className={Style.hiddendiv}>
                      We have a great expertise in building robust and scalable
                      native apps for the iOS platform that provide an
                      outstanding experience to users. The apps enable our
                      clients to maximize gains from various iOS features. These
                      include simplified integration of social media
                      interactions in the app, camera integration,
                      internet-based data storage, in-app purchase, GPS,
                      bluetooth and more.
                    </p>
                  </div>
                  <div className={Style.formright1}>
                    <h5 className={Style.clicker} tabindex="4">
                      Hybrid App Development
                    </h5>
                    <p className={Style.hiddendiv}>
                      We use the latest technologies and trends for building
                      fully customized and responsive hybrid apps. Combining the
                      features of both native and web applications, the apps
                      provide businesses various benefits like enhanced UI/UX,
                      faster development, reaching a wider audience, easy
                      maintenance and more.
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
                  OUR FINEST APP DEVELOPMENT <span> PORTFOLIO</span>
                </h3>
                <p>
                  Our cutting-edge apps are enabling our clients to better serve
                  their customer needs and capture lucrative opportunities to
                  improve their bottom line. Check out our diverse and inspiring
                  app portfolio.
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
                  OUR APP DEVELOPMENT <span>PROCESS</span>
                </h3>
                <p>
                  Our experts use the latest technologies, tools, frameworks and
                  trends and follow a structured approach to build futuristic
                  apps as per the unique needs of our clients.
                </p>
              </div>
            </Col>
          </Row>
          <Row className={Style.spaceleft}>
            <Col md={4}>
              <div className={`${Style.progrid} pb-0`}>
                <h6>Strategy Development</h6>
                <p>
                  For building your app development strategy, our experts
                  consider the app’s main objectives and goals, your competitors
                  and the particular platform and monetization method.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${Style.progrid} pb-0`}>
                <h6>User Flows</h6>
                <p>
                  We describe the sequence of user-performed actions to access
                  various parts of your app. This helps us know how users
                  interact with the system and do the needful for a streamlined
                  user experience.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${Style.progrid} pb-0`}>
                <h6>UI/UX Design</h6>
                <p>
                  To build an intuitive and engaging UI/UX app design that
                  delivers a seamless user experience, we work on various design
                  areas, including mock-ups, prototypes and information
                  architecture.
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
                <h6>Development</h6>
                <p>
                  We add functionality to the UI/UX design through backend
                  development (creation of databases and server-side objects)
                  and frontend development (building of interactive elements for
                  end-users).
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${Style.progrid} pt-0`}>
                <h6>QA and Testing</h6>
                <p>
                  After development, a comprehensive QA and testing on your app
                  ensures it conforms to the highest quality and security
                  standards, is bug-free, stable and scalable and provides a
                  better user experience.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${Style.progrid} pt-0`}>
                <h6>Launch and Deployment</h6>
                <p>
                  To launch and deploy your completed app on the Apple’s App
                  Store or Google’s Play Store, we assist you in submitting it
                  on these platforms. Moreover, we provide post-launch app
                  support and maintenance.
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
                Why Businesses <span>Choose Us ?</span>
              </h3>
              <p>We are a business-empowering mobile app company.</p>
            </Col>
            <Col md={6} className="d-flex align-items-center">
              <div className={Style.chooestext}>
                <p>
                  Here are some strong reasons to choose us as your preferred
                  app development partner. Our seasoned specialists are
                  knowledgeable of the latest technologies, have an unrivalled
                  reputation in the custom app development domain and have
                  worked on the most complex and challenging app building
                  projects. Innovative, high quality, profitable and
                  value-oriented apps built by them have helped to boost our
                  clients’ business growth.
                </p>
                <p>
                  Our ability to build tailor-made and secure apps, our
                  structured app development process and on-time delivery have
                  helped us win the trust of our clients globally. We also
                  provide our clients full app ownership as well as post-launch
                  support and maintenance.
                </p>
              </div>
            </Col>
            <Col
              md={6}
              className="d-flex align-items-center justify-content-center"
            >
              <Image
                className={Style.chooesimg}
                src="/chooseUs2.webp"
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
                  MEET OUR SPECIALIST APP
                  <span> DEVELOPERS</span>{" "}
                </h3>
                <p>
                  Our developers are extremely skilled and experienced in the
                  custom app development craft and are well versed with the
                  latest app building platforms and technologies. They are
                  capable of bringing your unique app vision to life.
                </p>
                <p>
                  Before embarking on your customized app building project, they
                  want to know your specific app needs and demands. So connect
                  with our experts to begin an enriching collaboration that
                  leads to your dream app.
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
                  SOME USEFUL <span>FAQs</span>
                </h3>
                <p>
                  Here are some useful Frequently Asked Questions that will help
                  you make the right mobile app development choices.
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
                    What are the advantages of building a mobile app for your
                    brand?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  Building a functional and accessible app helps to enlarge your
                  target audience. It also boosts your brand promotion which in
                  turn leads to broadening of your client base and increased
                  sales. The app is also useful in creating a better user
                  experience and enhancing customer trust and loyalty. By
                  letting you leverage customer data collection, it enables you
                  to gain an edge over your competition.
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
                    What solutions are offered by app development services?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  Our specialist mobile app development services include the
                  creation of custom applications for mobile platforms like
                  Android and iOS and building of cross-platform apps. Also, we
                  provide UI/UX design services to provide the best possible
                  experience to users. Moreover, we provide maintenance as well
                  as support to ensure your mobile app keeps running smoothly
                  and stays updated and relevant.
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
                    What are the factors that can impact the cost of your app
                    development?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  The cost depends on various factors including the features
                  proposed in the mobile app. The UI/UX design, coding,
                  development, testing and the app’s integration with existing
                  systems also impact its cost. To gain clarity over it, you
                  need to ask your developer questions about how all these
                  different app elements influence the exact quoted cost of the
                  app.
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
                    How much time will it take to build my app?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  Depending on how much complex your app is, app developers can
                  give you a rough idea of the amount of time it should take for
                  your app development. Usually it can take 6 or 7 months to
                  finish the app development process right from ideation to
                  launch. But some technical apps may take up to a year or more
                  for their development.
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
                    Who owns the app’s intellectual property rights?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  Once the app is developed and deployed, its intellectual
                  proprietary rights belong to the client. After launching an
                  app, an app development agency transfers its rights to
                  clients. After the project is completed, the agency delivers
                  everything right from the design, app code and all development
                  work to the client. This ensures property rights and ownership
                  are secured by the rightful owner.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MobileAppDelaware;
