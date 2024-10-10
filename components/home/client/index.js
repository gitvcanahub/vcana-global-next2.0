import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Client = () => {
  return (
    <div className={`mt-0 mb-0 ${styles.cleintBoxs}`}>
      <Container>
        <Row className="justify-content-lg-between">
          <Col xs="12" className={styles.chooesheading}>
            <sapn className="short_heading fw-bold fs-5">Clients</sapn>
            <hr />
            <h2 className="mt-3">
              Discover Our <span>Clients</span>
            </h2>
            <p className="mt-1">
              From startups to enterprises, our solutions have empowered diverse
              businesses, delivering exceptional <br></br>digital experiences
              that foster growth and success.
            </p>
          </Col>
        </Row>
        <Row className={styles.client_sec}>
          <Col lg={2} xs={6} md={3}>
            <div className={`${styles.clientlogo} ms-0 mt-0 `}>
              <Image
                className={styles.cleintimga}
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/cleint/logo11.png"
                }
                alt="g"
                height={60}
                width={150}
              />
            </div>
          </Col>
          <Col lg={2} xs={6} md={3}>
            <div className={`${styles.clientlogo}  mt-md-0 `}>
              <Image
                className={styles.cleintimga}
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/cleint/site-logo.png"
                }
                alt="g"
                height={60}
                width={150}
              />
            </div>
          </Col>
          <Col lg={2} xs={6} md={3}>
            <div className={`${styles.clientlogo}  mt-md-0`}>
              <Image
                className={styles.cleintimga}
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/cleint/agbl.webp"
                }
                alt="g"
                height={60}
                width={150}
              />
            </div>
          </Col>
          <Col lg={2} xs={6} md={3}>
            <div className={`${styles.clientlogo}  mt-md-0`}>
              <Image
                className={styles.cleintimga}
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/cleint/litgo.webp"
                }
                alt="g"
                height={80}
                width={150}
              />
            </div>
          </Col>
          <Col lg={2} xs={6} md={3}>
            <div className={`${styles.clientlogo}  mt-md-0`}>
              <Image
                className={styles.cleintimga}
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/cleint/download.png"
                }
                alt="g"
                height={80}
                width={150}
              />
            </div>
          </Col>
          <Col lg={2} xs={6} md={3}>
            <div className={`${styles.clientlogo} mt-md-0   me-0 `}>
              <Image
                className={styles.cleintimga}
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/cleint/cleint5.webp"
                }
                alt="g"
                height={80}
                width={150}
              />
            </div>
          </Col>
          <Col lg={2} xs={6} md={3}>
            <div className={`${styles.clientlogo}  md-mb-0 ms-0 `}>
              <Image
                className={styles.cleintimga}
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/cleint/nivrt.gif"
                }
                alt="g"
                height={80}
                width={150}
              />
            </div>
          </Col>
          <Col lg={2} xs={6} md={3}>
            <div className={styles.clientlogo}>
              <Image
                className={styles.cleintimga}
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/cleint/cleint13.webp"
                }
                alt="g"
                height={80}
                width={150}
              />
            </div>
          </Col>
          <Col lg={2} xs={6} md={3}>
            <div className={styles.clientlogo}>
              <Image
                className={styles.cleintimga}
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/cleint/roastronixlogo.png"
                }
                alt="g"
                height={80}
                width={150}
              />
            </div>
          </Col>
          <Col lg={2} xs={6} md={3}>
            <div className={styles.clientlogo}>
              <Image
                className={styles.cleintimga}
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/cleint/cleint15.webp"
                }
                alt="g"
                height={80}
                width={150}
              />
            </div>
          </Col>
          <Col lg={2} xs={6} md={3}>
            <div className={styles.clientlogo}>
              <Image
                className={styles.cleintimga}
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/cleint/cleint9.webp"
                }
                alt="g"
                height={80}
                width={150}
              />
            </div>
          </Col>
          <Col lg={2} xs={6} md={3}>
            <div className={`${styles.clientlogo}  me-md-0 `}>
              <Image
                className={styles.cleintimga}
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/cleint/cleint10.webp"
                }
                alt="g"
                height={80}
                width={150}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Client;
