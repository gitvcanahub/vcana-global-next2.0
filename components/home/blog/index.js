import React from "react";

import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";

import Link from "next/link";
import BlogService from "@/services/Blog";
import renderHTML from "@/helpers/renderHTML";
import { useQuery } from "@tanstack/react-query";
import { config } from "config";
import moment from "moment";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { FaCommentDots } from "react-icons/fa";

const Blog = () => {
  const {
    data: blogs,
    isLoading: blogLoading,
    // error: companyError,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: () =>
      BlogService.getAll({
        is_published: "1",
        showOn_web: true,
      }),
    keepPreviousData: true,
  });

  return (
    <div className={styles.blogSection}>
      <Container>
        <Row>
          <Col xs="12" className={styles.chooesheading}>
            <span className="short_heading fw-bold fs-5">blog</span>
            <hr />
            <h2 className="mt-3">
              Explore <span> Our </span> Blog
            </h2>
            <p className="mt-1">
              Dive into a wealth of insights, tips, and trends. Stay updated on
              the latest in digital solutions, web design, app development, and
              more.
            </p>
          </Col>
        </Row>

        {!blogLoading && (
          <Row className="cmx">
            <Col lg="5" className={styles.blogmain}>
              <Link href={`/blog/${blogs?.data[0].url}`}>
                <div className={styles.rightback}>
                  <div className={styles.blogImg}>
                    <Image
                      src={`${config.imageUrl}${blogs?.data[0]?.image}`}
                      //loader={Loader}
                      alt=""
                      height={200}
                      width={150}
                    />
                  </div>
                  <div className={styles.authorInfo}>
                    <div className={`${styles.bloginfo} mt-3`}>
                      <h6>
                        <span>
                          <BsFillCalendarDateFill color="red" />
                        </span>{" "}
                        {moment(blogs?.data[0].date).format("DD MM YYYY")}
                      </h6>
                      <h6>
                        <span>
                          <BiSolidUser color="red" />
                        </span>{" "}
                        {blogs?.data[0]?.author}
                      </h6>
                      <h6>
                        <span>
                          <FaCommentDots color="red" />
                        </span>{" "}
                        {blogs?.data[0]?.comments?.length}
                      </h6>
                    </div>
                  </div>

                  <div className={styles.blogHead}>
                    <h3>{blogs?.data[0].title}</h3>
                    <div className={styles.bloginto}>
                      <div className={styles.bloginto}>
                        {renderHTML(blogs?.data[0]?.content)}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>

            <Col lg="5" className={`${styles.blogmain} ${styles.is_mobile}`}>
              <Link href={`/blog/${blogs?.data[1].url}`}>
                <div className={styles.rightback}>
                  <div className={styles.blogImg}>
                    <Image
                      src={`${config.imageUrl}${blogs?.data[1]?.image}`}
                      //loader={Loader}
                      alt=""
                      height={200}
                      width={150}
                    />
                  </div>
                  <div className={styles.authorInfo}>
                    <div className={`${styles.bloginfo} mt-3`}>
                      <h6>
                        <span>
                          <BsFillCalendarDateFill color="red" />
                        </span>{" "}
                        {moment(blogs?.data[1].date).format("DD MM YYYY")}
                      </h6>
                      <h6>
                        <span>
                          <BiSolidUser color="red" />
                        </span>{" "}
                        {blogs?.data[1].author}
                      </h6>
                      <h6>
                        <span>
                          <FaCommentDots color="red" />
                        </span>{" "}
                        {blogs?.data[1]?.comments?.length}
                      </h6>
                    </div>
                  </div>

                  <div className={styles.blogHead}>
                    <h3>{blogs?.data[1].title}</h3>
                    <div className={styles.bloginto}>
                      {renderHTML(blogs?.data[1].content)}
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
            <Col lg="5" className={`${styles.blogmain} ${styles.is_mobile}`}>
              <Link href={`/blog/${blogs?.data[2].url}`}>
                <div className={styles.rightback}>
                  <div className={styles.blogImg}>
                    <Image
                      src={`${config.imageUrl}${blogs?.data[2]?.image}`}
                      //loader={Loader}
                      alt=""
                      height={200}
                      width={150}
                    />
                  </div>
                  <div className={styles.authorInfo}>
                    <div className={`${styles.bloginfo} mt-3`}>
                      <h6>
                        <span>
                          <BsFillCalendarDateFill color="red" />
                        </span>{" "}
                        {moment(blogs?.data[0].date).format("DD MM YYYY")}
                      </h6>
                      <h6>
                        <span>
                          <BiSolidUser color="red" />
                        </span>{" "}
                        {blogs?.data[0].author}
                      </h6>
                      <h6>
                        <span>
                          <FaCommentDots color="red" />
                        </span>{" "}
                        {blogs?.data[0]?.comments?.length}
                      </h6>
                    </div>
                  </div>

                  <div className={styles.blogHead}>
                    <h3>{blogs?.data[2].title}</h3>
                    <div className={styles.bloginto}>
                      <>{renderHTML(blogs?.data[2]?.content)}</>
                    </div>
                  </div>
                </div>
              </Link>
            </Col>
            <Col lg="7" className={`${styles.blogrigh} `}>
              <div className={`${styles.blogflex} d-flex mb-3`}>
                <div>
                  <Link href={`/blog/${blogs?.data[1].url}`}>
                    <Image
                      src={`${config.imageUrl}${blogs?.data[1]?.image}`}
                      //loader={Loader}
                      alt=""
                      height={80}
                      width={125}
                    />
                  </Link>
                </div>
                <div className={styles.rightSide}>
                  <div className={`${styles.bloginfo} ml-4`}>
                    <h6>
                      <span>
                        <BsFillCalendarDateFill color="red" />
                      </span>{" "}
                      {moment(blogs?.data[1].date).format("DD MM YYYY")}
                    </h6>
                    <h6>
                      <span>
                        <BiSolidUser color="red" />
                      </span>{" "}
                      {blogs?.data[1].author}
                    </h6>
                    <h6>
                      <span>
                        <FaCommentDots color="red" />
                      </span>{" "}
                      {blogs?.data[1]?.comments?.length}
                    </h6>
                  </div>
                  <Link href={`/blog/${blogs?.data[1].url}`}>
                    <h3>{blogs?.data[1]?.title}</h3>
                  </Link>
                </div>
              </div>

              <div className={`${styles.blogflex} d-flex mb-3`}>
                <div>
                  <Link href={`/blog/${blogs?.data[2].url}`}>
                    <Image
                      src={`${config.imageUrl}${blogs?.data[2]?.image}`}
                      //loader={Loader}
                      alt=""
                      height={80}
                      width={125}
                    />
                  </Link>
                </div>
                <div className={styles.rightSide}>
                  <div className={`${styles.bloginfo} ml-4`}>
                    <h6>
                      <span>
                        <BsFillCalendarDateFill color="red" />
                      </span>{" "}
                      {moment(blogs?.data[2].date).format("DD MM YYYY")}
                    </h6>
                    <h6>
                      <span>
                        <BiSolidUser color="red" />
                      </span>{" "}
                      {blogs?.data[2].author}
                    </h6>
                    <h6>
                      <span>
                        <FaCommentDots color="red" />
                      </span>{" "}
                      {blogs?.data[2]?.comments?.length}
                    </h6>
                  </div>
                  <Link href={`/blog/${blogs?.data[2].url}`}>
                    <h3>{blogs?.data[2]?.title}</h3>
                  </Link>
                </div>
              </div>
              <div className={`${styles.blogflex} d-flex mb-3`}>
                <div>
                  <Link href={`/blog/${blogs?.data[3]?.url}`}>
                    <Image
                      src={`${config.imageUrl}${blogs?.data[3]?.image}`}
                      //loader={Loader}
                      alt=""
                      height={80}
                      width={125}
                    />
                  </Link>
                </div>
                <div className={styles.rightSide}>
                  <div className={`${styles.bloginfo} ml-4`}>
                    <h6>
                      <span>
                        <BsFillCalendarDateFill color="red" />
                      </span>{" "}
                      {moment(blogs?.data[3].date).format("DD MM YYYY")}
                    </h6>
                    <h6>
                      <span>
                        <BiSolidUser color="red" />
                      </span>{" "}
                      {blogs?.data[3].author}
                    </h6>
                    <h6>
                      <span>
                        <FaCommentDots color="red" />
                      </span>{" "}
                      {blogs?.data[3]?.comments?.length}
                    </h6>
                  </div>
                  <Link href={`/blog/${blogs?.data[3].url}`}>
                    <h3>{blogs?.data[3]?.title}</h3>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Blog;
