import React, { useState } from "react";
import { Col, Row, Accordion, Container } from "react-bootstrap";
import Styles from "./index.module.css";
import renderHTML from "@/helpers/renderHTML";

const FAQ = (props) => {
  const [activeKey, setActiveKey] = useState(0);

  const handleAccordionToggle = (key) => {
    if (activeKey === key) {
      setActiveKey(null);
    } else {
      setActiveKey(key);
    }
  };

  return (
    <Container>
      <Row className={`${Styles.bannerinfo} mt-5 mb-md-5 cmx`}>
        <Col className="box" md={12}>
          <h2 className="pt-0 pb-3 px-4">{renderHTML(props.page)}</h2>
          {props.data?.map((faq, i) => {
            return (
              <Accordion
                key={i}
                activeKey={activeKey}
                onSelect={() => handleAccordionToggle(i)}
                defaultActiveKey={0}
              >
                <Accordion.Item eventKey={i}>
                  <Accordion.Header className="targ">
                    {faq?.heading}
                  </Accordion.Header>
                  <Accordion.Body>{renderHTML(faq?.content)}</Accordion.Body>
                </Accordion.Item>
              </Accordion>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default FAQ;
