import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import {
  FaAngleRight,
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedinIn,
} from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import Form from "react-bootstrap/Form";
import { SiPowerpages } from "react-icons/si";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Styles from "./Footer.module.css";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import FetchService from "@/services/Fetch";
import { Notification } from "../shared/Notification";
import Spinner from "react-bootstrap/Spinner";

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

function Footer() {
  const {
    register,
    handleSubmit,
    getValues,
    resetField,
    formState: { errors },
  } = useForm();

  const {
    mutate,
    isPending: isLoading,
    // error: reviewError,
    // data,
  } = useMutation({
    mutationFn: (payload) => FetchService.newsLetter(payload),
    onError: (error) => {
      Notification(
        "error",
        `<div style='font-size:13px'>An error occurred: ${
          error.error || "Please try again later."
        }</div>`
      );
    },
    onSuccess: (data) => {
      if (data.success === false) {
        Notification("error", "Allready Subscribed!");
      } else {
        Notification("success", "Thank you for subscribing!");
        resetField("email");
      }
    },
  });

  const submitHandler = () => {
    mutate(getValues());
  };

  return (
    <>
      {/* =======================new footer================  */}

      <div className={` ${Styles.Sectionfooter} pb-1`}>
        <Container>
          <Row className={` mb-5 mx-auto ${Styles.footerpadding}`}>
            <Col
              className={`${Styles.setNewsletter}`}
              md={{ order: 1, span: 6 }}
              lg={{ order: 1, span: 3 }}
              sm={12}
            >
              <Link href="/">
                <Image
                  width={250}
                  height={48}
                  src="https://vcana-website-assets.s3.amazonaws.com/images/home/logovc.svg"
                  alt="Picture of logo"
                  className={Styles.logoFooter}
                />
              </Link>
              <div>
                <p>
                  Crafting Digital Excellence: Web Design, Mobile App
                  Development, Digital Marketing. Your Success, Our Priority.{" "}
                </p>
              </div>
              <div className={` ${Styles.setaddress}`}>
                <h6>
                  Sign up for our newsletter to get the latest updates from
                  Vcana Global.
                </h6>
                <div className={`${Styles.footerform}`}>
                  <Form
                    className={`${Styles.footerinput} d-flex`}
                    onSubmit={handleSubmit(submitHandler)}
                  >
                    <Form.Control
                      type="email"
                      placeholder="Your Email Id"
                      {...register("email", {
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        },
                      })}
                    />

                    <Button type="submit" disabled={isLoading}>
                      {isLoading ? (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : (
                        "  Subscribe"
                      )}
                    </Button>
                  </Form>
                </div>
                {errors.email &&
                  errors.email.type === "required" &&
                  errorMessage("Please enter email address")}
                {errors.email &&
                  errors.email.type === "pattern" &&
                  errorMessage("Invaid Email")}
              </div>
            </Col>
            <Col
              md={{ order: 3, span: 6 }}
              lg={{ order: 2, span: 3 }}
              sm={12}
              className={` ${Styles.tabscreen} `}
            >
              <div className={` ${Styles.setlinks}  ${Styles.footerm} `}>
                <ul>
                  <h2>WHAT WE DO</h2>
                  <li>
                    <FaAngleRight color="#b0b0b0" />
                    <Link href="/services/website-design-development">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <FaAngleRight color="#b0b0b0" />
                    <Link href="/services/application-development">
                      Application Development
                    </Link>
                  </li>
                  <li>
                    <FaAngleRight color="#b0b0b0" />
                    <Link href="/services/digital-marketing">
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <FaAngleRight color="#b0b0b0" />
                    <Link href="/services/ecommerce-website-development">
                      E-Commerce Website
                    </Link>{" "}
                  </li>
                  <li>
                    <FaAngleRight color="#b0b0b0" />
                    <Link href="/services/mobile-application-development">
                      Mobile App Development
                    </Link>
                  </li>
                  <li>
                    <FaAngleRight color="#b0b0b0" />
                    <Link href="/services/block-chain-development">
                      Blockchain Development
                    </Link>
                  </li>
                  {/* <li>
                    <FaAngleRight color="#b0b0b0" />
                    <Link href="">Corporate Culture</Link>
                  </li> */}
                </ul>
              </div>
            </Col>
            <Col
              md={{ order: 2, span: 6 }}
              lg={{ order: 3, span: 3 }}
              sm={12}
              className={` ${Styles.tabscree}  `}
            >
              <div className={` ${Styles.setlinks} ${Styles.setlinks} pl-md-5`}>
                <ul>
                  <h2>WHO WE ARE</h2>
                  <li>
                    <FaAngleRight color="#b0b0b0" />
                    <Link href="/about-us">About Us</Link>{" "}
                  </li>
                  <li>
                    <FaAngleRight color="#b0b0b0" />
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <FaAngleRight color="#b0b0b0" />
                    <Link href="/portfolio">Portfolio</Link>
                  </li>

                  <li>
                    <FaAngleRight color="#b0b0b0" />
                    <Link href="/blog">Blog</Link>
                  </li>

                  <li>
                    <FaAngleRight color="#b0b0b0" />
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col
              md={{ order: 4, span: 6 }}
              lg={{ order: 4, span: 3 }}
              sm={12}
              className={` md:ms-2 md:me-2 ${Styles.setaddress} ${Styles.setaddress1}`}
            >
              <h2> OUR OFFICES</h2>
              <div>
                <Link
                  href="https://www.google.com/maps/place/Times+Square/@30.707011,76.68711,16z/data=!4m6!3m5!1s0x390fefe44572a7c7:0xfdbafc3b892f2686!8m2!3d30.7070107!4d76.6871097!16s%2Fg%2F11frqz9__t?hl=en&entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>
                    <span className="fs-4">
                      <BiMap />
                    </span>

                    <span>
                      Plot No. C 196 A, Times Square, Phase 8B, Industrial Area,
                      Sector 74, Sahibzada Ajit Singh Nagar, 140308, Punjab
                    </span>
                  </h5>
                </Link>
                <p>
                  {/* C196/A, Times Square, Phase 8B Ind. Area, SAS Nagar, Mohali
                  160055, Punjab. */}
                </p>
              </div>

              <div>
                <h5>
                  <span className="fs-4">
                    <BsPhone />
                  </span>
                  <p>
                    <Link href="tel:+91 172-5026778"> +91 1725026778,</Link>
                    <Link href="tel:+91 6283282970"> +91 6283282970</Link>
                  </p>
                </h5>
              </div>
              <div>
                <Link
                  href="https://www.google.com/maps/place/Vcana+Global+Inc./@39.4558061,-75.7174323,15z/data=!4m5!3m4!1s0x0:0x7d67fcd33506f50c!8m2!3d39.4558061!4d-75.7174323"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5>
                    <span className="fs-4">
                      {" "}
                      <BiMap />
                    </span>
                    <span>
                      651 N. Broad St., Suite 206, Middletown, DE 19709
                    </span>
                  </h5>
                </Link>
              </div>

              <div>
                <h5>
                  <span className="fs-4">
                    {" "}
                    <BsPhone />
                  </span>
                  <p>
                    <Link href="tel:+1 (302) 394-6860"> +1 (302) 394-6860</Link>{" "}
                  </p>
                </h5>
              </div>
              <div>
                <h5>
                  <span className="fs-4">
                    {" "}
                    <MdOutlineMailOutline />
                  </span>
                  <Link href="mailto:info@vcanaglobal.com">
                    {" "}
                    <span>info@vcanaglobal.com</span>
                  </Link>
                </h5>
                <h5>
                  <Link href="mailto:sales@vcanaglobal.com">
                    <span className="fs-4">
                      <MdOutlineMailOutline />
                    </span>
                    <span>sales@vcanaglobal.com</span>
                  </Link>
                </h5>
              </div>
            </Col>
          </Row>
        </Container>

        <div
          className={`${Styles.footerMenuBtn} d-flex justify-content-end px-3 mb-2`}
        >
          <Button
            className={`${Styles.ftrBtn} p-1`}
            aria-expanded="false"
            aria-controls="footer-menu"
          >
            <SiPowerpages className="fs-2" />
            <div className={`${Styles.footerMenus} rounded`} aria-hidden="true">
              <ul>
                <li className="menu-item">
                  <div className={`${Styles.menuboxx}`}>
                    <span className="c-btn__icon">
                      <MdOutlineKeyboardDoubleArrowRight />
                    </span>
                    <Link href="/web-design-delaware" className="text-dark">
                      Delaware web design & development
                    </Link>
                  </div>
                </li>

                <li className="menu-item">
                  <div className={`${Styles.menuboxx}`}>
                    <span className="c-btn__icon">
                      <MdOutlineKeyboardDoubleArrowRight />
                    </span>
                    <Link href="/mobile-app-delaware" className="text-dark">
                      Delaware mobile app development
                    </Link>
                  </div>
                </li>

                <li className="menu-item">
                  <div className={`${Styles.menuboxx}`}>
                    <span className="c-btn__icon">
                      <MdOutlineKeyboardDoubleArrowRight />
                    </span>
                    <Link href="/ecommerce-delaware" className="text-dark">
                      Delaware E-commerce development
                    </Link>
                  </div>
                </li>

                <li className="menu-item">
                  <div className={`${Styles.menuboxx}`}>
                    <span className="c-btn__icon">
                      <MdOutlineKeyboardDoubleArrowRight />
                    </span>
                    <Link href="/custom-app-delaware" className="text-dark">
                      Delaware custom app development
                    </Link>
                  </div>
                </li>

                <li className="menu-item">
                  <div className={`${Styles.menuboxx}`}>
                    <span className="c-btn__icon">
                      <MdOutlineKeyboardDoubleArrowRight />
                    </span>
                    <Link href="/delaware-seo-services" className="text-dark">
                      Delaware SEO services
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </Button>
        </div>
      </div>

      <div className={`${Styles.footercopey}`}>
        <Container>
          <Row
            className={` ${Styles.footerpadding} ${Styles.footerpadding1} align-items-center`}
          >
            <Col
              className={` pt-lg-3 pt-md-3 mx-auto pt-xl-0 pt-xxl-3 ${Styles.SetCopeyright} align-middle`}
              md={6}
              lg={4}
              sm={12}
            >
              <p>© 2024, All Rights Reserved Vcana Global, Inc.</p>
            </Col>
            <Col
              className={`pt-0 pt-md-0 pt-xxl-3 ${Styles.SetCopeyrightt} mx-auto `}
              md={6}
              lg={4}
              sm={12}
            >
              <p className="text-md-start text-sm-start align-middle">
                <Link href="/terms-of-use">
                  {" "}
                  <span className={`${Styles.borderbtm}  `}>
                    Terms of Use
                  </span>{" "}
                </Link>
                -
                <Link href="/privacy-policy">
                  <span className={`${Styles.borderbtm}  `}>
                    {" "}
                    Privacy Policy{" "}
                  </span>
                </Link>
              </p>
            </Col>
            <Col className={`${Styles.SetCopeyright}  `} md={12} lg={4} sm={12}>
              <div className={`text-sm-left xxl-md-end ${Styles.socialIcon}`}>
                <Link
                  href="https://www.facebook.com/vcanaglobal"
                  target="_blank"
                  className={` ${Styles.socialIcon}`}
                >
                  {" "}
                  <FaFacebookF />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/vcana-global"
                  target="_blank"
                >
                  {" "}
                  <FaLinkedinIn />
                </Link>
                <Link
                  href="https://www.instagram.com/vcanaglobal"
                  target="_blank"
                >
                  {" "}
                  <FaInstagramSquare />
                </Link>
                <Link href="https://twitter.com/GlobalVcana" target="_blank">
                  <Image
                    className={Styles.partnertextdeceorationbox}
                    src={
                      "https://vcana-website-assets.s3.amazonaws.com/images/twitter.png"
                    }
                    width={141.6}
                    height={3.2}
                    alt="nb"
                  />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =======================new footer================ */}
    </>
  );
}

export default Footer;
