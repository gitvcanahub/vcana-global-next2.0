import React from "react";
import styles from "@/styles/Home.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <Container
        className={`pt xl-5  pt-md-5 pb-sm-0 pt-sm-0 pb-lg-5 ${styles.tabmargin}`}
      >
        <Row className={`mx-auto ${styles.tabwidth}`}>
          <Col
            md={12}
            lg={6}
            sm={12}
            className={` mx-auto ${styles.abouttext} ${styles.aboutmobi}`}
          >
            <dt>
              Web and Mobile
              <span> App Development Company</span>
            </dt>
            <hr />
            <p>Welcome to Vcana Global: A Glimpse into Our World of Promise</p>
          </Col>
          <Col
            md={12}
            lg={6}
            sm={12}
            className={`mx-auto ${styles.aboutus} ${styles.none}`}
            // data-aos="fade-up-left"
          >
            <Image
              src={
                "https://vcana-website-assets.s3.amazonaws.com/images/home/aboutus.webp"
              }
              it
              width={600}
              height={690}
              // objectFit="cover"
              alt="nb"
              className="text-center"
              //loader={Loader}
            />
          </Col>
          <Col
            md={12}
            lg={6}
            sm={12}
            className={` mx-auto ${styles.abouttext} ${styles.aboutmobi}`}
          >
            <p>
              Step into the world of Vcana Global, where an exhilarating journey
              awaits you through captivating web consulting and digital
              marketing solutions. Our moniker, 'Vcana,' inspired by 'Promise,'
              embodies our steadfast dedication to delivering we have emerged as
              a distinguished web consultancy and facilitator of transformative
              web and digital solutions. With more than 500+ clients worldwide,
              their trust in us speaks volumes about our proficiency and
              unwavering commitment to excellence. At our core, we are a dynamic
              team of creative minds, tech enthusiasts, and strategic thinkers.
              Specializing in web designing and development, mobile app
              creation, and digital marketing, we bring dreams to life in the
              digital realm. Join us on this transformative journey as we shape
              digital landscapes and redefine success.
            </p>

            <Link href="/about-us">
              <Button className={styles.btnhover}>
                <span>Read More</span>
              </Button>
            </Link>
          </Col>

          <Col
            md={12}
            lg={6}
            sm={12}
            className={`mx-auto ${styles.aboutus} ${styles.aboutmobinone}`}
            // data-aos="fade-up-left"
          >
            <Image
              src={
                "https://vcana-website-assets.s3.amazonaws.com/images/home/aboutus.webp"
              }
              width={600}
              height={630}
              // objectFit="cover"
              alt="nb"
              className="text-center"
              //loader={Loader}
            />
          </Col>
          <Col
            md={12}
            lg={6}
            sm={12}
            className={` mx-auto ${styles.abouttext} ${styles.aboutmobinone}`}
          >
            <h1>
              Web and Mobile
              <span> App Development Company</span>
            </h1>
            <hr />
            <p>
              Welcome to Vcana Global : A Glimpse into Our World of Promise.
            </p>
            <p>
              Step into the world of Vcana Global, where an exhilarating journey
              awaits you through captivating web consulting and digital
              marketing solutions. Our moniker, 'Vcana,' inspired by 'Promise,'
              embodies our steadfast dedication to delivering precisely as
              promised to clients. <br></br>
              <br></br>Since our inception in 2019, we have emerged as a
              distinguished web consultancy and facilitator of transformative
              web and digital solutions. With more than 500+ clients worldwide,
              their trust in us speaks volumes about our proficiency and
              unwavering commitment to excellence. At our core, we are a dynamic
              team of creative minds, tech enthusiasts, and strategic thinkers.
              Specializing in web designing and development, mobile app
              creation, and digital marketing, we bring dreams to life in the
              digital realm.
            </p>
            <p>
              Join us on this transformative journey as we shape digital
              landscapes and redefine success.
            </p>

            <Link href="/about-us">
              <Button className={styles.btnhover}>
                <span>Read More</span>
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
