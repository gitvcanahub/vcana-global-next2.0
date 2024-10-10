import React, { useEffect, useState } from "react";
import Styles from "./index.module.css";
import { Col, Container, Row } from "react-bootstrap";
import renderHTML from "@/helpers/renderHTML";

const Banner = ({ data }) => {
  const [bg, setBg] = useState(data?.img);

  useEffect(() => {
    if (data?.mobileImg && window.innerWidth < 700) {
      setBg(data?.mobileImg);
    }
  }, []);

  return (
    <div
      className={`${Styles.bannerMain}`}
      style={{ backgroundImage: `url(${bg})` }}
      title={data.alt}
    >
      <Container>
        <Row>
          <Col sm={4} md={5} lg={7} className={`${Styles.bannerdetail}`}>
            <span className="text-start fw-bold">
              {" "}
              {renderHTML(data?.heading)}
            </span>

            {/* <span role="img" aria-label="[place alt text here]">
              {" "}
            </span>
            <p className="fs-6 fw-normal text-white pt-3 pb-3">
              {data?.content}
            </p>
            {data?.btnLink && (
              <Button
                className={Styles.mainbtn}
                as="input"
                type="submit"
                value={data?.btnText}
              />
            )} */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
