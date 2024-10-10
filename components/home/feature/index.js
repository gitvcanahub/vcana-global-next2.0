import React from "react";

import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";

const Feature = () => {
  return (
    <div
      className={` ${styles.ProcessWeFollow} ${styles.ProcessWeFollowbg}`}
      data-aos="fade-down"
    >
      <div className={styles.fey}>
        <Container>
          <p className="mt-5 short_heading fw-bold fs-5"> Our Features</p>
          <hr></hr>
          <h2 className="mt-3">
            Our Key <span>Features</span>
          </h2>
          <p>
            Unlock the Power Behind Our Expertise. Discover the crucial
            ingredients fueling our clients' business growth and triumph.
          </p>
          <Row className={styles.features}>
            <Col md={6} lg={6} xl={4} className={styles.feyf}>
              <Image
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/home/keyfeature.gif"
                }
                width={0}
                height={0}
                alt="nb"
                className={`me-3 ${styles.featureimg}`}
                //loader={Loader}
              />
              <h3 className="short_heading">Client-Centric Development</h3>
              <p>
                In today's dynamic business landscape, catering to the unique
                needs of enterprises is paramount. We excel in creating custom
                solutions that serve as catalysts for business enhancement.
              </p>
            </Col>
            <Col md={6} lg={6} xl={4} className={styles.feyf}>
              <Image
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/home/keyfeature1.gif"
                }
                width={0}
                height={0}
                alt="nb"
                className={`me-3 ${styles.featureimg}`}
                //loader={Loader}
              />
              <h3 className="short_heading">Agile Development </h3>
              <p>
                At our core, we embrace agile development methodologies that
                pave the way for delivering superior, robust, and scalable
                solutions. This approach ensures that your business is equipped
                to navigate the competitive landscape with confidence.
              </p>
            </Col>
            <Col md={6} lg={6} xl={4} className={styles.feyf}>
              <Image
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/home/keyfeature2.gif"
                }
                width={0}
                height={0}
                alt="nb"
                className={`me-3 ${styles.featureimg}`}
                //loader={Loader}
              />
              <h3 className="short_heading">Dedicated Development Team</h3>
              <p>
                Our adept team is driven by a commitment to deliver excellence.
                With unwavering dedication, they channel their expertise to
                drive projects towards resounding success, leaving no stone
                unturned.
              </p>
            </Col>
            <Col md={6} lg={6} xl={4} className={styles.feyf}>
              <Image
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/home/keyfeature3.gif"
                }
                width={0}
                height={0}
                alt="nb"
                className={`me-3 ${styles.featureimg}`}
                //loader={Loader}
              />
              <h3 className="short_heading">Unwavering Support </h3>
              <p>
                We stand by our clients through every step of the journey. Our
                unwavering, round-the-clock support ensures that your
                expectations are not just met but exceeded, resulting in
                enduring partnerships.
              </p>
            </Col>
            <Col md={6} lg={6} xl={4} className={styles.feyf}>
              <Image
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/home/keyfeature4.gif"
                }
                width={0}
                height={0}
                alt="nb"
                className={`me-3 ${styles.featureimg}`}
                //loader={Loader}
              />
              <h3 className="short_heading">Fortifying with Data Backups</h3>
              <p>
                In an ever-evolving digital landscape, safeguarding vital
                project data is paramount. Our robust data backup strategy acts
                as your safety net, ensuring that your mission-critical
                information remains intact, even in the face of unexpected
                challenges.
              </p>
            </Col>
            <Col md={6} lg={6} xl={4} className={styles.feyf}>
              <Image
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/home/keyfeature5.gif"
                }
                width={0}
                height={0}
                alt="nb"
                className={`me-3 ${styles.featureimg}`}
                //loader={Loader}
              />
              <h3 className="short_heading">Uncompromised Data Protection</h3>
              <p>
                Your data deserves the utmost protection. We go the extra mile
                by signing a comprehensive Non-Disclosure Agreement (NDA),
                ensuring the complete confidentiality of your sensitive
                information. Our commitment extends to delivering products that
                align with the highest standards of data protection.
              </p>
            </Col>
            <Col
              md={6}
              lg={6}
              xl={4}
              className={`${styles.feyf} border-bottom-0`}
            >
              <Image
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/home/keyfeature6.gif"
                }
                width={0}
                height={0}
                alt="nb"
                className={`me-3 ${styles.featureimg}`}
                //loader={Loader}
              />
              <h3 className="short_heading">Quality at the Forefront</h3>
              <p>
                Quality is our lodestar. We meticulously adhere to project
                specifications, ensuring the delivery of exceptional products
                that stand out in the industry. Our competitive pricing further
                enhances the value you receive.
              </p>
            </Col>
            <Col
              md={6}
              lg={6}
              xl={4}
              className={`${styles.feyf} border-bottom-0`}
            >
              <Image
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/home/keyfeature7.gif"
                }
                width={0}
                height={0}
                alt="nb"
                className={`me-3 ${styles.featureimg}`}
                //loader={Loader}
              />
              <h3 className="short_heading">Expert Guidance </h3>
              <p>
                From inception to realization, our technical team accompanies
                you. During the Discovery, Designing, and Development phases,
                their expertise translates into invaluable insights and
                recommendations, nurturing your product for optimal performance.
              </p>
            </Col>
            <Col
              md={6}
              lg={6}
              xl={4}
              className={`${styles.feyf} border-bottom-0`}
            >
              <Image
                src={
                  "https://vcana-website-assets.s3.amazonaws.com/images/home/time.gif"
                }
                width={0}
                height={0}
                alt="nb"
                className={`me-3 ${styles.featureimg}`}
                //loader={Loader}
              />
              <h3 className="short_heading">Timely Project Delivery</h3>
              <p>
                We don't just meet deadlines; we make time our ally. With
                clockwork precision, we ensure that your projects reach the
                finish line promptly. It's not just about delivering on time;
                it's about delivering on your expectations, every time.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Feature;
