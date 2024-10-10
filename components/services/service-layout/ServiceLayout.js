import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Styles from "./ServiceLayout.module.css";
import Sidebar from "@/components/shared/servicesSidebar/Sidebar";
import Banner from "@/components/shared/banner";

const ServiceLayout = (props) => {
  return (
    <>
      <Banner data={props.bannerData} />

      <div className={Styles.main_services}>
        <Container fluid>
          <Row className={Styles.siderbarmargin}>
            <Col md={12} lg={8} xl={9} className={` ${Styles.mainlayout}`}>
              <div className={Styles.siderbarmargin}>{props.children}</div>
            </Col>
            <Col md={4} xl={3} className={` ${Styles.leftaout} mb-5`}>
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ServiceLayout;
