import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";

import Link from "next/link";

const Calculator = () => {
  return (
    <div className={styles.calcSection}>
      <Container className={styles.costcalculator}>
        <Row>
          <Col md={12} lg={6} xl={6} className={styles.leftsectioncalu}>
            <h2>Get quote with our free website cost calculator</h2>
            <Link href="/website-calculator" className={styles.btncost}>
              <Button className={styles.btnhover}>
                <span>Explore</span>
              </Button>
            </Link>
          </Col>
          <Col md={12} lg={6} xl={6} className={styles.rightsectionimg}>
            <Image
              src={
                "https://vcana-website-assets.s3.amazonaws.com/images/home/caluculator.webp"
              }
              width={140}
              height={140}
              alt="nb"
              //loader={Loader}
              className={styles.calimg}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Calculator;
