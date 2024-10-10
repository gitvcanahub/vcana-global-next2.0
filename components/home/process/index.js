import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Process = () => {
  return (
    <div className={`${styles.process} `}>
      <Container>
        <Row className={styles.headChoose}>
          <Col>
            <p className="short_heading fw-bold fs-5">Process</p>
            <hr />
            <h2 className={"mt-3"}>
              Process <span> We Follow</span>
            </h2>

            <p className={` ${styles.mobilepadd}`}>
              Navigate our seamless process: From ideation and design to
              development and deployment, we meticulously craft digital
              solutions that drive results and exceed expectations.
            </p>
          </Col>
        </Row>
        <div className={styles.desktview}>
          <Image
            className={`${styles.process_img} pb-3 mt-4`}
            src={
              "https://vcana-website-assets.s3.amazonaws.com/images/home/homepage gif.gif"
            }
            width={12000}
            height={6000}
            alt="nb"
          />
        </div>
        <div className={styles.mobileview}>
          <Image
            className={`${styles.process_img} pb-3 mt-4`}
            src={
              "https://vcana-website-assets.s3.amazonaws.com/images/home/homemobile.png"
            }
            width={12000}
            height={6000}
            alt="nb"
          />
        </div>
      </Container>
    </div>
  );
};

export default Process;
