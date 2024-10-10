import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "swiper/css";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
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

const SeoServicesDelaware = () => {
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
        title="Expert Delaware SEO Services | Boost Your Online Visibility"
        description="Looking for expert SEO services in Delaware? Our SEO company in Delaware specializes in optimizing websites to improve search rankings, drive traffic, and enhance online visibility. Contact us today for a free consultation!"
        canonical="https://www.vcanaglobal.com/delaware-seo-services"
      />

      <div className={Style.banner_bg}>
        <Container>
          <Row>
            <div className={Style.banner_text}>
              <h1>BEST SEO SERVICES IN DELAWARE</h1>
            </div>
            <div className={Style.baaner_text1}>
              <p>
                We are the best SEO Company in Delaware and provider of truly
                exceptional SEO solutions that help your business get ranked
                higher and increasingly visible in the search engine results.
              </p>
            </div>
            <div className={Style.bannerlist}>
              <ul>
                <li>
                  Offer unique SEO solutions tailored to specific business needs
                </li>
                <li>
                  Keyword relevance is the key pillar of our custom business SEO
                  strategy
                </li>
                <li>
                  Drive more customers, leads, conversions, sales and revenue to
                  businesses
                </li>
              </ul>
              <Link href="/contact">
                <button>Book an appointment</button>
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
                <span className="text-start">Tell Us About Your SEO Needs</span>
                <p>
                  Drive your business success with Vcana Global’s organic SEO
                  services.
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
                  <h2 className="h3Headings">
                    OUR
                    <span> DELAWARE SEO </span> SERVICES
                  </h2>
                  <p>
                    Covering all important aspects of search engine optimization
                    and encompassing best practices and strategies, our Delaware
                    SEO services are meticulously designed to boost growth of
                    businesses and bring them success in an extremely
                    competitive and ever-changing SEO landscape of today.
                  </p>
                </div>

                <div className={`${Style.formBoxManual} formBoxSroll`}>
                  <div className={Style.formright1}>
                    <h5 className={Style.clicker} tabindex="1">
                      Site Architecture and Structure Analysis
                    </h5>
                    <p className={Style.hiddendiv}>
                      Our seo experts use the latest tools to perform an
                      in-depth analysis of your website’s structure and identify
                      the areas that need improvement in your website.
                      Accordingly, they optimize the layout and design of the
                      website and enhance its structure. This in turn enhances
                      user experience for the website visitors. Moreover, it
                      results in enhanced search engine ranking of your website
                      as search engines can efficiently crawl and index it.
                    </p>
                  </div>
                  <div className={Style.formright1}>
                    <h5 className={Style.clicker} tabindex="2">
                      Complete Site Analysis
                    </h5>
                    <p className={Style.hiddendiv}>
                      Our Delaware seo specialists perform a comprehensive
                      analysis of your website to determine its performance in
                      terms of level of visibility and ranking on search
                      engines. They use factors like backlinks, keywords and
                      content quality for analyzing the performance. The
                      analysis helps them in identifying various weaknesses and
                      strengths of the website. Accordingly, they work on
                      improving the required areas. This consequently optimizes
                      the website, thus leading to boosting of performance and
                      ranking on the search engine result pages.
                    </p>
                  </div>
                  <div className={Style.formright1}>
                    <h5 className={Style.clicker} tabindex="3">
                      Keyword Research and Strategy
                    </h5>
                    <p className={Style.hiddendiv}>
                      Our seo experts perform meticulous keyword research to
                      find and analyze the most relevant and high-traffic
                      keywords that customers use for finding the desired
                      products/services related to your industry on the web.
                      Inserting these keywords naturally in the content helps to
                      rank your website highly in search results besides
                      improving its visibility to customers within organic
                      search on the web.
                    </p>
                  </div>
                  <div className={Style.formright1}>
                    <h5 className={Style.clicker} tabindex="4">
                      Competition Analysis
                    </h5>
                    <p className={Style.hiddendiv}>
                      Our search engine optimization specialists carefully
                      analyze your competitors’ online presence and the SEO
                      strategies undertaken by them. This gives them insights
                      about the keywords, backlinks and content strategies of
                      your competitors. The specialists accordingly use these
                      strategy-related insights for improving your website’s SEO
                      and help your website stay ahead of the competition.
                    </p>
                  </div>
                  <div className={Style.formright1}>
                    <h5 className={Style.clicker} tabindex="5">
                      Content Creation and Optimization
                    </h5>
                    <p className={Style.hiddendiv}>
                      Based on your brand and products/services offered by your
                      business, our SEO experts will get created customized,
                      meaningful, insightful, informative, keyword-rich and
                      engaging content for your website from our content
                      specialists. The content will help to attract qualified
                      traffic to your website, establish your business as an
                      industry leader and improve your website’s ranking in the
                      search engines.
                    </p>
                  </div>
                  <div className={Style.formright1}>
                    <h5 className={Style.clicker} tabindex="5">
                      On Page Optimization
                    </h5>
                    <p className={Style.hiddendiv}>
                      The on-page optimization process involves optimizing your
                      website’s pages and their content for users as well as
                      search engines. Our Delaware seo experts perform various
                      on-page SEO tasks for your website, including optimizing
                      the website’s content for search intent and optimizing its
                      meta tags, title tags, internal links and URLs. This helps
                      in improving the ranking of pages of your website on
                      Google and other search engines besides driving more
                      organic traffic to the website. Moreover, this enhances
                      your website’s user friendliness.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={`${Style.seoSpecialist}`}>
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <p className="h3Headings text-center">
                Meet the Proficient <span> Delaware SEO Experts </span> at Vcana
                Global Inc
              </p>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <Card className={`${Style.maincards1} border rounded bg-light`}>
                <Card.Img src="/Preet.webp" height={500} />
                <Card.Body>
                  <Card.Title className={`${Style.cardTitle} text-center fs-5`}>
                    Prabhjeet Kaur <span>(SEO Expert)</span>
                  </Card.Title>
                  <Card.Text>
                    Passionate toward the cause of helping businesses grow
                    through the power of SEO, Preet has many successful SEO
                    projects to her credit. Right from patiently hearing the
                    clients’ needs, finding the areas of improvement in their
                    website, brainstorming over choosing the right and best-fit
                    SEO strategies for their projects to implementing them, she
                    puts in exceptional efforts to deliver the intended results
                    and gains to the clients.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <Card
                className={`${Style.maincards2} border rounded p-4 m-4 bg-light`}
              >
                <Card.Img src="/Abhishek.webp" height={500} />
                <Card.Body>
                  <Card.Title className={`${Style.cardTitle} text-center fs-5`}>
                    Abhishek <span>(SEO Specialist)</span>{" "}
                  </Card.Title>
                  <Card.Text>
                    Abhishek takes great pains to learn and keep himself updated
                    with the latest SEO industry knowledge. His strategic SEO
                    insights and tactical tips help our SEO team tide over
                    complex search engine optimization challenges in our
                    clients’ projects and navigate them to success. He is a
                    valuable member of our team whose expertise and skills are
                    playing a critical role in boosting the growth of our
                    clients’ business in Delaware .
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className={Style.portfoliosection}>
        <Container>
          <Row>
            <Col md={12} lg={5} sm={12}>
              <div className={Style.portfoliosectiontext}>
                <p className="h3Headings">
                  EXPLORE OUR
                  <span> WORLD WIDE </span> CLIENT PORTFOLIO
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
                  OUR SEARCH ENGINE OPTIMIZATION PROCESS FOR
                  <span> DELAWARE BUSINESSES</span>
                </h3>
                <p>
                  Aware of the best SEO practices and techniques, our experts
                  grasp a detailed understanding of your business requirements
                  and accordingly follow a step-by-step approach to lead your
                  SEO project to success.
                </p>
              </div>
            </Col>
          </Row>
          <Row className={Style.spaceleft}>
            <Col md={4}>
              <div className={`${Style.progrid} pb-0`}>
                <h6>PERFORM AN SEO AUDIT</h6>
                <p>
                  We perform a full analysis of all the factors that can impact
                  your website’s visibility and performance in search engines.
                  This includes assessing technical, on-page and off-page SEO
                  aspects of your website.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${Style.progrid} pb-0`}>
                <h6>BUILD THE SEO STRATEGY</h6>
                <p>
                  To build a tailored and effective SEO strategy, we research
                  relevant and high-demand keywords and analyze your
                  competitors. Accordingly, we identify KPIs and set smart
                  strategy goals.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${Style.progrid} pb-0`}>
                <h6>DO TECHNICAL SEO</h6>
                <p>
                  We consider technical site elements like XML sitemaps,
                  structured data and crawling/indexing issues and improve/fix
                  them. Otherwise, they can impact your site’s search engine
                  visibility and discoverability.
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
                <h6>CREATE CONTENT</h6>
                <p>
                  Here our content team crafts unique, high quality, valuable
                  and SEO-optimized content that ranks higher in the SERPs, thus
                  resulting in more traffic to your website and visitors
                  spending more time on the website.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${Style.progrid} pt-0`}>
                <h6>PERFORM LINK BUILDING</h6>
                <p>
                  Our SEO specialists create inbound links on high quality
                  websites that come to your website. As a result, Google views
                  your website as more authoritative and trustworthy and accords
                  it a higher ranking in its organic search results.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className={`${Style.progrid} pt-0`}>
                <h6>DO MONITORING AND CREATE REPORTS</h6>
                <p>
                  We continuously track the SEO performance of your website and
                  make regular reports. This helps to ensure that your website
                  remains optimized, competitive and visible to your target
                  market.
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
                WHY CHOOSE <span> VCANA GLOBAL INC </span> FOR YOUR{" "}
                <span> SEO IN DELAWARE?</span>
              </h3>
              <p>List out reasons why clients should choose your services</p>
            </Col>
            <Col
              lg={6}
              md={12}
              sm={12}
              className={`${Style.chosesese} d-flex align-items-center`}
            >
              <ul className={Style.ulList}>
                <li>
                  <h5 className="fs-5">
                    Local SEO Expertise: Extensive understanding of Delaware's
                    market
                  </h5>
                  <p className={`${Style.paracard} text-start`}>
                    Based in Delaware itself, our SEO company has excellent
                    knowledge of the market landscape in Delaware which makes us
                    the best choice for fulfilling your unique SEO needs.
                  </p>
                </li>
                <li>
                  <h5 className="fs-5">
                    Exclusive Support: Individualized customer service and
                    support
                  </h5>
                  <p className={`${Style.paracard} text-start`}>
                    During the entire course of your SEO project, our support
                    team maintains clear and timely communication with you and
                    tries its best to resolve your queries and suggestions.
                  </p>
                </li>
                <li>
                  <h5 className="fs-5">
                    Validated Results: Success stories or case studies involving
                    local businesses.
                  </h5>
                  <p className={`${Style.paracard} text-start`}>
                    Based on proven techniques, our custom SEO strategies
                    deliver intended results to our local business clients who
                    are happy to recognize our efforts in boosting their
                    business’s growth.
                  </p>
                </li>
                <li>
                  <h5 className="fs-5">
                    Customized Strategies: Unique SEO plans tailored to specific
                    business needs.
                  </h5>
                  <p className={`${Style.paracard} text-start`}>
                    Keeping in view particular SEO requirements, challenges and
                    goals of businesses, we tailor our SEO strategies
                    accordingly based on various parameters like industry,
                    products, customers, competitors, etc.
                  </p>
                </li>
              </ul>
            </Col>
            <Col
              lg={6}
              md={12}
              sm={12}
              className="d-flex align-items-center justify-content-center"
            >
              <Image
                className={Style.chooesimg}
                src="/chooseUs5.webp"
                width={600}
                height={350}
                objectFit="cover"
                alt="nb"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* <div className={Style.meetsection}>
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
                  <span> SEASONED SEO </span> SPECIALISTS
                </h3>
                <p>
                  Our search engine optimization experts have an in-depth
                  knowledge of the best SEO practices, strategies, techniques
                  and tactics. They have successfully worked on various SEO
                  projects of varying business needs and challenges.
                </p>
                <p>
                  Our specialists are eager to work on your SEO project and want
                  to have a word with you to fully understand your unique
                  business needs. Accordingly, they will commence with your
                  project and work dedicatedly toward making it a huge success.
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
      </div> */}

      <div className={Style.accordionsection}>
        <Container>
          <Row>
            <Col md={12}>
              <div className={Style.accortext}>
                <h3 className="h3Headings">
                  SOME COMMON FAQS ABOUT
                  <span> SEARCH ENGINE </span>OPTIMIZATION
                </h3>
                <p>
                  Here are some valuable FAQs related to SEO that will help you
                  make informed decisions for your business.
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
                  <span className="px-2">01</span>{" "}
                  <span className={Style.accHeadName}>
                    How can SEO benefit my Delaware business?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  SEO helps your Delaware business by improving your website's
                  visibility on search engines, making it easier for local
                  customers to find you. This can lead to more website traffic,
                  better brand recognition, and increased sales.
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
                    What makes your SEO services different from others in
                    Delaware?
                  </span>
                </Accordion.Header>
                <Accordion.Body className={Style.accBody}>
                  Our SEO services stand out because we tailor strategies
                  specifically for your business goals and target audience in
                  Delaware. We use a data-driven approach and stay updated with
                  the latest SEO trends to ensure your website achieves the best
                  possible results.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Container>
      </div>
    </>
  );
};

export default SeoServicesDelaware;
