import React from "react";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import Styles from "./index.module.css";
import Image from "next/image";
// import Loader from "@/helpers/Loader";
import renderHTML from "@/helpers/renderHTML";
// import Link from "next/link";

// import Link from "next/link";

const ServiceCard = ({ data, classes, isBtn }) => {
  return (
    <>
      {/* <Link href={`services/${data?.link}`}> */}
      <Row className={`${Styles.servicesrowbox} Styles.section_services cmx`}>
        {data?.map((data, i) => {
          return (
            <Col
              key={i}
              sm={12}
              md={12}
              lg={10}
              xl={6}
              xxl={6}
              className={`${Styles.single_service} ${Styles[classes]}`}
              // onClick={() => route.push(`services/${data?.link}`)}
            >
              {/* <Link href={`services/${data?.link}`}> */}
              <div className={Styles.content}>
                <span className={Styles.iconBox}>
                  <Image
                    src={data?.img}
                    //loader={Loader}
                    alt="image"
                    width={60}
                    height={60}
                  />
                </span>
                <h3 className={Styles.title}>{renderHTML(data?.heading)}</h3>
                <p className={Styles.description}>{data?.content}</p>
              </div>
              <Link href={`/${data?.link}`} className={Styles.serviceCardBtn}>
                {""}
                {isBtn && data?.link && (
                  <button>
                    {" "}
                    <Image
                      src="https://vcana-website-assets.s3.amazonaws.com/images/services/arrowright.png"
                      //loader={Loader}
                      alt="ImageArrow"
                      width={25}
                      height={25}
                    />
                  </button>
                )}
              </Link>
              <h4>0{Number(i) + 1}</h4>
              {/* </Link> */}
            </Col>
          );
        })}
      </Row>
      {/* </Link> */}
    </>
  );
};

export default ServiceCard;
