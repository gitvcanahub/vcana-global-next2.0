import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Styles from "./BlogDetail.module.css";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import renderHTML from "@/helpers/renderHTML";
import SpiningLoader from "@/components/shared/spining-leader";
import BlogService from "@/services/Blog";
import Banner from "@/components/shared/banner";
import StickyBox from "react-sticky-box";
import { config } from "config";
import { NextSeo } from "next-seo";
import Link from "next/link";
// import Image from "next/image";
// import { useGoogleLogin } from "@react-oauth/google";
// import axios from "axios";
// import { useForm } from "react-hook-form";
// import { Notification } from "@/components/shared/Notification";
// import Spinner from "react-bootstrap/Spinner";
// // import Loader from "@/helpers/Loader";
// import moment from "moment";

//helper
// const errorMessage = (error) => {
//   return (
//     <div
//       style={{ color: "red", margintTop: "0px !important", display: "flex" }}
//     >
//       {error}
//     </div>
//   );
// };

// config test comment

//time test
//time test

function BlogDetials() {
  const router = useRouter();

  // const [show, setShow] = useState(false);

  // const [isLogin, setIsLogin] = useState("");

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const { url } = router.query;
  // const {
  //   //register,
  //   //handleSubmit,
  //   // getValues,
  //   resetField,
  //   reset,

  //   formState: { errors },
  // } = useForm();

  // get blog data
  const {
    data: blog,
    isLoading: blogloading,
    // error,
  } = useQuery({
    queryKey: ["blog-detail", url],
    queryFn: () => BlogService.get(url),
  });

  useEffect(() => {
    const updateActiveClass = () => {
      const hash = window.location.hash.substring(1);

      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.classList.toggle(
          "activeee",
          anchor.getAttribute("href").substring(1) === hash
        );
      });
    };

    updateActiveClass();

    window.addEventListener("hashchange", updateActiveClass);

    return () => window.removeEventListener("hashchange", updateActiveClass);
  }, []);

  function myFunctionData() {
    var y = document.getElementById("showData");

    if (y.style.display === "block") {
      y.style.display = "none";
    } else {
      y.style.display = "block";
    }
  }

  return (
    <>
      {blogloading ? (
        <SpiningLoader />
      ) : (
        <>
          <NextSeo
            title={blog?.data?.seo?.metaTitle}
            description={blog?.data?.seo?.metaDescription}
            canonical={blog?.data?.seo?.canonical}
            additionalMetaTags={[
              {
                property: "keywords",
                content: blog?.data?.seo?.keywords[0],
              },
            ]}
          />
          <Banner
            data={{
              heading: "",
              // content:
              // "The digital marketing world is constantly evolving and so much is happening in it. Vcana Global blog is the best way to keep yourself updated on the latest digital marketing trends, techniques, technologies and more.",
              alt: `${blog?.data?.bannerAlt}`,
              img: `${config.imageUrl}${blog?.data?.image1}`,
            }}
          />
          <div className={Styles.boderBttom}>
            <Container>
              <Row>
                <Col xs="12" className={Styles.blogDetials}>
                  <h1>{blog?.data?.title}</h1>
                </Col>
              </Row>
            </Container>
          </div>

          <div className={`${Styles.mainBoxDiv} mt-5 mb-5`}>
            <Container fluid>
              <Row>
                <Col md={3}>
                  {blog?.data?.sidebar !== "<p><br></p>" && (
                    <StickyBox offsetTop={100} offsetBottom={100}>
                      <div className={Styles.rectangleDiv}>
                        <>{renderHTML(blog?.data?.sidebar)}</>
                      </div>
                    </StickyBox>
                  )}
                </Col>

                <Col md={6} className={Styles.blogtext}>
                  <>{renderHTML(blog?.data?.content)}</>
                </Col>
                <Col md={3} className={Styles.blogposition}>
                  <StickyBox offsetTop={50} offsetBottom={50}>
                    <div className={Styles.blogrightsection}>
                      <div className={Styles.blogrightbox}>
                        <h6>{blog?.data?.cta_h1}</h6>
                        <p>{blog?.data?.cta_h2}</p>
                        <Link
                          href={
                            blog?.data?.cta_link ? blog?.data?.cta_link : "blog"
                          }
                          target="_blank"
                        >
                          <Button
                            className={`${Styles.btnhover} ${Styles.eAnimat}`}
                          >
                            {blog?.data?.cta_btn_content}
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </StickyBox>
                </Col>
              </Row>
              <StickyBox offsetTop={50} offsetBottom={50}>
                <div className={Styles.contenttabbox}>
                  <div>
                    <a className={Styles.button} onClick={myFunctionData}>
                      TABLE OF CONTENTS
                    </a>
                  </div>
                  <div className={Styles.box} id="showData">
                    <a className={Styles.boxlinl} onClick={myFunctionData}>
                      x
                    </a>
                    <div>
                      <div
                        className={Styles.mobileside}
                        onClick={myFunctionData}
                      >
                        {renderHTML(blog?.data?.sidebar)}
                      </div>
                      <a
                        className={`${Styles.button2} mt-5`}
                        onClick={myFunctionData}
                      >
                        TABLE OF CONTENTS
                      </a>
                    </div>
                  </div>
                </div>
              </StickyBox>
            </Container>
          </div>
        </>
      )}
      {/* here is the section start commmit  */}
      {/* <div className={Styles.commint_section}>
        <Modal title="Subm9it" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Share your thoughts with us.</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit(submitHandler)}>
              <Form.Group controlId="message" style={{ marginBottom: "35px" }}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="write"
                  {...register("message", {
                    required: true,
                  })}
                />
                {errors.message &&
                  errors.message.type === "required" &&
                  errorMessage("Please enter a Comment")}
              </Form.Group>
              <Button
                type="submit"
                className={Styles.pupupBtn}
                disabled={isLoading}
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
                  "Submit Comment"
                )}
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        <Row>
          <Col md={6}>
            <div className={Styles.com}>
              <p>Comments ({comments?.total})</p>
            </div>
          </Col>
          <Col md={6}>
            <div className={Styles.com}>
              {isLogin ? (
                <Button variant="primary" onClick={() => setShow(true)}>
                  Leave a comment
                </Button>
              ) : (
                <Button variant="primary" onClick={googleLogin}>
                  Leave a comment
                </Button>
              )}
            </div>
          </Col>

          {comments?.data?.map((comment) => {
            return (
              <Col md={12} key={comment._id}>
                <div className={Styles.commit}>
                  <Image
                    src={comment?.user?.image}
                    width={20}
                    height={20}
                    alt="nb"
                    //loader={Loader}
                  />
                  <h6>{comment?.user?.name}</h6>
                  <p>
                    {comment.message}
                    <h5>
                      <span>
                        {moment(comment.createdAt).format("DD MMM YYYY ")}
                      </span>
                    </h5>
                  </p>
                </div>
              </Col>
            );
          })}

          <Col md={12}>
            <div className={Styles.commit11}>
              <Form onSubmit={handleSubmit(submitHandler)}>
                <Form.Group controlId="name">
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

                <Form.Group controlId="mobile" style={{ marginBottom: "25px" }}>
                  <Form.Control
                    type="tel"
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
                </Form.Group>

                <Form.Group
                  controlId="message"
                  style={{ marginBottom: "35px" }}
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="write"
                    {...register("message", {
                      required: true,
                    })}
                  />
                  {errors.message &&
                    errors.message.type === "required" &&
                    errorMessage("Please enter email address")}
                </Form.Group>
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
                    "Submit Comment"
                  )}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div> */}
      {/* here is the section end commmit  */}
    </>
  );
}
export default BlogDetials;
