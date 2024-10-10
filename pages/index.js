import dynamic from "next/dynamic";
// import { Suspense } from "react";
// import { useEffect,useState } from "react";

import styles from "@/styles/Home.module.css";
import { Container } from "react-bootstrap";
// const GetInTouch = dynamic(() => import("@/components/shared/getInTouch"));

import { NextSeo } from "next-seo";
// import VideoPlayer from "@/components/videoPlayer";
import BussinesNeed from "@/components/home/bussiness-need";
import About from "@/components/home/about";
import Services from "@/components/home/services";
import Feature from "@/components/home/feature";
import Portfolio from "@/components/home/portfolio";
import { Client } from "react-hydration-provider";
import Testimonial from "@/components/shared/testimonial";
import Blog from "@/components/home/blog";

import GetInTouch from "@/components/shared/getInTouch";
import Process from "@/components/home/process";
import Calculator from "@/components/home/calculator";
// import Skeleton from "react-loading-skeleton";

const VideoPlayer = dynamic(() => import("@/components/videoPlayer"));
//helper

export default function Home() {
  // const [shouldLoad, setShouldLoad] = useState(false);

  // useEffect(() => {
  //   const handleLoad = () => {
  //     setTimeout(() => {
  //       setShouldLoad(true);
  //     }, 0);
  //   };

  //   window.addEventListener("load", handleLoad);

  //   return () => {
  //     window.removeEventListener("load", handleLoad);
  //   };
  // }, []);

  return (
    <>
      <NextSeo
        title="Website and App Development Company | Web Design | Vcana Global"
        description=" Vcana Global: Your trusted Website and App Development Company. Elevate your online presence with our innovative solutions and expert craftsmanship. Get started now!"
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "web development services, custom web development, full stack development company, responsive web design,, technical seo, social media marketing, ppc management ",
          },
        ]}
        canonical="https://www.vcanaglobal.com/"
      />

      <div className={styles.main}>
        {/* slider section start */}
        <div className={`${styles.heroBanner} ${styles.bannerposition}`}>
          <div className={`${styles.BannerRow}`}>
            {/* {shouldLoad ? ( */}
            <VideoPlayer />
            {/* ) : (
              <Skeleton
                src={"/Vcana Video Thumbnail.webp"}
                width={100}
                height={700}
                className={styles.video_container}
              />
            )}  */}
            {/* Business Needs start */}
            <BussinesNeed />
            {/* Business Needs start */}
          </div>
        </div>
        {/* slider section start */}

        {/* here is the about section start */}

        <About />
        {/* here is the about section end */}
        {/* Services section start */}
        <Services />
        {/* Services section start */}
        {/* here is the our key feature start */}
        <Feature />
        {/* here is the our key feature end */}
        {/* process section start */}
        <Process />
        {/* process section end */}

        {/* portfolio section start */}
        <Portfolio />
        {/* our portfolio Section end */}
        {/* ourclient section start */}
        <Client />

        {/* ourclient section End */}
        <div className="md-pt-0 pb-0">
          <Testimonial slide={1} />
        </div>

        <div className={styles.touch} id="contact">
          <Container fluid>
            <section>
              <GetInTouch data={GetInTouchData} />
            </section>
          </Container>
          {/* here is the blog section start */}
          <Blog />
          {/* here is the blog section end */}

          {/* here is the cost calculator section start */}
          <Calculator />
          {/* here is the cost calculator section start */}
        </div>
      </div>
    </>
  );
}

const GetInTouchData = {
  heading: "Contact Us for Your <span> Business Needs</span>",
  desc: " We are always ready to respond to any questions, comments or suggestions that you want to share with us about your business. So talk with us whenever you want through your preferred communication channel.",
  sub_headR: "Send Us A Message",
  sub_headL: "Speak To Us",
  sub_head1: "",
  sub_head2: "At Vcana Global, you are assured to get",
  sub_descStart:
    "We are eager to grow your business with our cutting-edge web & digital marketing services. Call our experts at ",
  sub_descEnd:
    " or meet them in-person at our premises to let them take the next step.",

  LI: [
    "Fulfillment of Promises",
    "Unmatched excellence and quality",
    "A dedicated team to support your business endeavors",
  ],
};
