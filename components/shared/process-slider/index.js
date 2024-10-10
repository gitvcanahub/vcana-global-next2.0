import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Styles from "./index..module.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import renderHTML from "@/helpers/renderHTML";
const Process = (props) => {
  return (
    <div className={`${Styles.procardmain}  ${Styles[props.classes]}`}>
      <Container>
        <Row className={Styles.choosenhead}>
          <Col className={Styles.slideH}>
            <div className="short_heading">{renderHTML(props?.heading)}</div>
            <hr className={Styles.tech} />
            <h2 className={` py-3`}>{props?.page}</h2>
            <p>{props?.desc}</p>
          </Col>
        </Row>

        <Row>
          <Swiper
            className="process-swiper dynam"
            // spaceBetween={30}`
            speed={1000}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            style={{ width: "90%", height: props.height }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                // spaceBetween: 10,
              },
              768: {
                slidesPerView: 1,
                // spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              1280: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              1366: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
            }}
          >
            {props.data?.map((data, i) => {
              return (
                <SwiperSlide key={i}>
                  <div
                    style={{ background: data.color }}
                    className={`${Styles.slidesdetails} ${
                      Styles[props?.classes2]
                    }`}
                  >
                    {i > 8 ? (
                      <h3 className={Styles.numHead}>{i + 1}</h3>
                    ) : (
                      <h3 className={Styles.numHead}>0{i + 1}</h3>
                    )}
                    <h4 className={"text-start text-white "}>
                      {data?.heading}{" "}
                    </h4>
                    <p className={"text-start text-white"}>{data?.content}</p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Row>
      </Container>
    </div>
  );
};

export default Process;
