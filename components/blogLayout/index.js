import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import Styles from "./index.module.css";
import Banner from "@/components/shared/banner";
import BlogSidebar from "../blogSideBar";

const BlogLayout = (props) => {
  return (
    <>
      <Banner data={props.bannerData} />
      <div className={Styles.main_services}>
        <Container fluid>
          <Row className={Styles.siderbarmargin}>
            <Col md={9} className={` ${Styles.mainlayout} `}>
              {props.children}
            </Col>

            <Col md={3} className={`mb-5 ${Styles.leftaout}`}>
              <BlogSidebar searchHandler={props.searchHandler} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default BlogLayout;
