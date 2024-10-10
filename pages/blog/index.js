import React, { useState } from "react";
import GetInTouch from "@/components/shared/getInTouch";
import Testimonial from "@/components/shared/testimonial";
import styles from "./index.module.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import BlogLayout from "@/components/blogLayout";
import Link from "next/link";
import BlogService from "@/services/Blog";
import renderHTML from "@/helpers/renderHTML";
import { useQuery } from "@tanstack/react-query";
import Pagination from "react-bootstrap/Pagination";
// import SpiningLoader from "@/components/shared/spining-leader";
import moment from "moment";
import Skeleton from "react-loading-skeleton";
import { NextSeo } from "next-seo";
import { config } from "config";

const Blogs = () => {
  const [filter, setFilter] = useState({
    limit: 10,
    page: 1,
    is_published: "1",
    title: "",
    category: "",
    sub_category: "",
    showOn_web: true,
  });
  const {
    data: blogs,
    isLoading: blogloading,
    // error: companyError,
  } = useQuery({
    queryKey: ["blogs", filter],
    queryFn: () => BlogService.getAll(filter),
    keepPreviousData: true,
  });

  const numberOfPages = Math.ceil(blogs?.total / 10);

  const arr = [];

  for (let i = 0; i < numberOfPages; i++) {
    arr.push(i + 1);
  }

  //blog search by title

  const searchHandler = (val) => {
    setFilter((pre) => {
      return { ...pre, ...val };
    });
  };

  return (
    <>
      <NextSeo
        title="Mobile & Web Tech, Design, Digital Marketing Blogs & News | Vcana Global"
        description="Stay ahead with insightful Mobile & Web Tech, Design, & Digital Marketing news.
Explore Vcana Global for the latest blogs and updates in the industry."
        canonical="https://www.vcanaglobal.com/blog"
      />
      <BlogLayout bannerData={bannerData} searchHandler={searchHandler}>
        <h1 className="d-none">Blog</h1>

        <Container className={` ${styles.cardive} `}>
          {!blogloading ? (
            <Row className={`justify-content-md-strat ${styles.cardreletive} `}>
              {blogs?.data.length > 0 ? (
                blogs?.data.map((blog) => {
                  return (
                    <Col
                      sm={12}
                      lg={12}
                      xl={6}
                      md={6}
                      className={`${styles.cardmargin}`}
                      key={blog?._id}
                    >
                      <Card
                        // style={{ width: "36.5rem" }}
                        className={` ${styles.cardmrgin1} `}
                      >
                        <Link href={`/blog/${blog?.url}`}>
                          {" "}
                          <Card.Img
                            variant="top"
                            src={`${config.imageUrl}${blog?.image}`}
                            alt={blog?.imageAlt}
                            className=""
                            // //loader={Loader}
                          />
                        </Link>
                        <span className={` ${styles.cardresponsive} `}>
                          {moment(blog?.date).format("DD")}
                          <span className={` ${styles.dateleftborder} `}>
                            {moment(blog?.date).format("MMMM")}
                          </span>
                          <span className={` ${styles.dateleftborder} `}>
                            {moment(blog?.date).format("YYYY")}
                          </span>
                        </span>
                        <Card.Body className={` ${styles.cardbg} `}>
                          <Card.Title className={` ${styles.cardtittle} `}>
                            <Link href={`/blog/${blog?.url}`}>
                              {blog?.title}
                            </Link>
                          </Card.Title>
                          <Card.Text className={` ${styles.cardtext} `}>
                            {renderHTML(blog?.content)}
                          </Card.Text>
                        </Card.Body>
                        <div className={` ${styles.cardlink} `}>
                          <Link href={`/blog/${blog?.url}`}>
                            <Button className={` ${styles.cardbtn} `}>
                              Read More
                            </Button>
                          </Link>
                        </div>
                      </Card>
                    </Col>
                  );
                })
              ) : (
                <h1>Blog Not Found</h1>
              )}
              <Col
                md={12}
                className={`mt-3 mb-5 text-end ${styles.pegination} `}
              >
                <Pagination>
                  <Pagination.First
                    disabled={blogs?.pagination?.prev ? false : true}
                    onClick={() => {
                      setFilter((pre) => {
                        return { ...pre, page: pre.page - 1 };
                      });
                    }}
                  />

                  {arr?.map((page) => {
                    return (
                      <Pagination.Item
                        key={page}
                        linkStyle={{
                          backgroundColor:
                            filter?.page == page ? "#f4622a" : "",
                          color: filter?.page == page ? "#ffff" : "black",
                        }}
                        onClick={() => {
                          setFilter((pre) => {
                            return {
                              ...pre,
                              page: page,
                            };
                          });
                        }}
                      >
                        {page}
                      </Pagination.Item>
                    );
                  })}

                  <Pagination.Last
                    disabled={blogs?.pagination?.next ? false : true}
                    onClick={() => {
                      setFilter((pre) => {
                        return { ...pre, page: pre.page + 1 };
                      });
                    }}
                  />
                </Pagination>
              </Col>
            </Row>
          ) : (
            <Row className={`justify-content-md-strat ${styles.cardreletive} `}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => {
                return (
                  <Col sm={12} lg={12} xl={6} md={6} key={data}>
                    <Card
                      // style={{ width: "36.5rem" }}
                      className={` ${styles.cardmrginmain} `}
                    >
                      {" "}
                      <Skeleton height={300} />
                      <Skeleton className={styles.loading} />
                      <Skeleton className={styles.loading1} />
                      <Skeleton className={styles.loading1} />
                      <Skeleton className={styles.loadingtext} />
                      <Skeleton className={styles.loadingbtn} />
                    </Card>
                  </Col>
                );
              })}
            </Row>
          )}
        </Container>
        <div className={` ${styles.getintouchpadding} `}>
          {/* <GetInTouch /> */}
        </div>
        <Row className=" justify-content-md-end">
          <Col
            className={`${styles.testimonialswidth} col-md-12 justify-content-md-end`}
          >
            <Testimonial />
          </Col>
        </Row>
        <GetInTouch data={GetInTouchData} />
      </BlogLayout>
    </>
  );
};

const bannerData = {
  heading: "Blog",
  // content:
  // "The digital marketing world is constantly evolving and so much is happening in it. Vcana Global blog is the best way to keep yourself updated on the latest digital marketing trends, techniques, technologies and more.",
  img: "https://vcana-website-assets.s3.amazonaws.com/images/banners/blognew.webp",
};
const GetInTouchData = {
  heading: "Contact Us for Your <span> Business Needs</span>",
  desc: " We are always ready to respond to any questions, comments or suggestions that you want to share with us aboutyour business. So talk with us whenever you want through your preferred communication channel.",
  sub_headR: "Speak to Us",
  sub_headL: "Send Us A Message",
  sub_head1: "",
  sub_head2: "Send Us A Message",
  sub_descStart:
    "We are eager to grow your business with our cutting-edge web & digital marketing services. Call our experts at ",
  sub_descEnd:
    " or meet them in-person at our premises to let them take the next step. us whenever you want through your preferred communication channel.",

  LI: [
    "Fulfillment of Promises",
    "Unmatched excellence and quality",
    "A dedicated team to support your business endeavors",
  ],
};

export default Blogs;
