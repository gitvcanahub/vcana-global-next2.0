import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Controller, Navigation } from "swiper/modules";
// import Loader from "@/helpers/Loader";
// // import Loader from "@/helpers/Loader";
const Testimonial = (props) => {
  const [activeTest, setActiveTest] = useState(0);

  const swiperHandler = () => {
    const testimonial1 = document
      .querySelector(".test-swiper")

      .querySelector(".swiper-slide-active");

    if (testimonial1) {
      const testimonial = testimonial1
        .querySelector(".imt1")
        .getAttribute("data_id");
      setActiveTest(testimonial);
    }
  };

  useEffect(() => {
    const testimonial = document
      .querySelector(".test-swiper")
      .querySelector(".swiper-slide-active")
      .querySelector(".imt1")
      .getAttribute("data_id");
    setActiveTest(testimonial);
  }, []);

  const reviewHandler = (link) => {
    window.open(link);
  };

  return (
    <div className={`${styles.testimonialSec} cmx `}>
      <Container>
        <Row className={styles.chooeshe}>
          <Col xs="12" className={styles.chooesheading}>
            <div className="pb-0 short_heading">Testimonials</div>
            <hr />
            <h2 className="py-3 px-4">
              Hear What Our <span> Clients Say</span>
            </h2>
            <p>
              Discover the experiences of our satisfied clients through their
              heartfelt testimonials. From small<br></br> businesses to industry
              giants, they share how our solutions have transformed their
              success.{" "}
            </p>
          </Col>{" "}
          <Swiper
            className="test-swiper"
            loop={true}
            onSlideChange={(event) => swiperHandler(event)}
            speed={2000}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation, Controller]}
            style={{ width: "90%" }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                // spaceBetween: 10,
              },
              768: {
                slidesPerView: props.slide,
                // spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                // spaceBetween: 30,
                // width: "85%",
              },

              1280: {
                slidesPerView: 5,
              },
            }}
          >
            {TestimonialData?.map((data) => {
              return (
                <SwiperSlide key={data.id} style={{ marginTop: "40px" }}>
                  <div
                    className="imt1"
                    data_id={data.id}
                    onClick={() => reviewHandler(data?.link)}
                  >
                    <Image
                      className={styles.testImg}
                      src={data.img}
                      // //loader={Loader}
                      width={50}
                      height={50}
                      alt="nb"
                      //loader={Loader}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Col className={`${styles.slide} mb-4`}>
            {TestimonialData.map((data) => {
              return (
                <div
                  key={data?.id}
                  className={`${styles.test2_swiper}  ${
                    styles[
                      data.id - 1 == activeTest ? "slide2_show" : "slide2_hide"
                    ]
                  }`}
                  onClick={() =>
                    reviewHandler(TestimonialData[activeTest]?.link)
                  }
                >
                  <div className={styles.testimoinal1}>
                    <p>{data?.reviews}</p>
                    <h3>{data?.name}</h3>
                    <h4 className="text-black">{data?.position}</h4>
                    <p>{data?.company}</p>
                    <Image
                      src={
                        "https://vcana-website-assets.s3.amazonaws.com/images/home/strat.png"
                      }
                      width={140}
                      height={25}
                      alt="nb"
                      //loader={Loader}
                    />
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const TestimonialData = [
  {
    id: 1,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Adilah Anwar",
    position: "Owner",
    reviews:
      "Vcann Global Inc is an international company the specializes in website development and they designed my website and did an amazing job! The team is very responsive and easy to work with. Give them a try if you’re looking for an authentic website that will draw attention! Thank you Vcann Global for an amazing job!",
    company: "Iconycs",
    link: "https://g.co/kgs/xue8Nv",
  },
  {
    id: 2,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/fb.webp",
    name: "Victoria Ipri ",
    position: "Owner",
    reviews:
      "If you're a small business owner, you know how tough it can be to find a great design company to build your websites, landing pages, etc. Most design companies only want big-ticket projects. So I was beyond pleased to discover Anshul Verma and the team at Vcana Global - they are trustworthy, affordable, and experienced and created my new website quickly and to my specifications. I especially appreciate their timely and complete communications. I will definitely hire Vcana Global again, and highly recommend you do too!",
    // company: "Iconycs",
    link: "https://www.facebook.com/victoria.ipri/posts/10225164746002351?ref=embed_post",
  },

  {
    id: 3,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Eric Decosta",
    position: "Owner",
    reviews:
      "Vcana Global experts are professional and very enthusiastic about their projects. They know their stuff well. Their knowledge isn't limited to Web Design. But they also hold a vast understanding of marketing and how to implement it to drive their clients’ business. They were very intuitive in understanding my business’s needs. Their results have exceeded my expectations.",
    // company: "",
    link: "https://g.co/kgs/TbRR8j",
  },
  {
    id: 4,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/fb.webp",
    name: "Isabella Grace",
    position: "Owner",
    reviews:
      "Anshul and his team do outstanding web development with great results. The work was complete within 2 weeks as proposed. They are very professional and great to work with. I would recommend them to anyone that wishes to upgrade their current website or build a new one!!",
    // company: "Iconycs",
  },
  {
    id: 5,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Patrick Weimer",
    position: "Owner",
    reviews:
      "I am very pleased to have Vcana Glogal as my provider! An issue arose that could have been very costly to my business and it was great to see the tireless effort all put in to resolve the issue for me. Their dedication to the matter lets me know they are a true partner!",
    // company: "",
    link: "https://g.co/kgs/kEpNrs",
  },
  {
    id: 6,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/fb.webp",
    name: "Joseph Pero",
    position: "Owner",
    reviews:
      "They did a wonderful job for two of my websites. Ankush and his staff were very supportive and responsive to my needs. I plan on using them again!",
    // company: "Iconycs",
    link: "https://www.facebook.com/permalink.php?story_fbid=1898319276972926&id=100003846173772&ref=embed_post",
  },
  {
    id: 7,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Homa Popal",
    position: "Owner",
    reviews:
      "They were very flexible and designed a website that met my vision. With consistent check-ins, and on-going communication, their team worked hard to make sure I was happy with the final design. I would highly recommend them.",
    // company: "",
    link: "https://g.co/kgs/cjURHE",
  },
  {
    id: 8,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/fb.webp",
    name: "Goya Spry",
    position: "Owner",
    reviews:
      "My sister & I have started a business and needed a website. We received a recommendation from one of Vcana Global's customers. After reviewing their work, we decided to work with them. Anshul and his team have designed an impressive website for us and their customer service has been stellar. ",
    // company: "GMAC Services LLC",
    link: "https://www.facebook.com/goya.spry/posts/1188092231640093?ref=embed_post",
  },

  {
    id: 9,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Madhavas UTS Sites",
    position: "Owner",
    reviews:
      "Recently, I have taken services from Vcana Global for my website. The services that has been provided to me literally gave positive results to my business. I am so happy with the outcomes. They are really expert and have good communication.",
    // company: "",
    link: "https://g.co/kgs/nURpFZ",
  },
  {
    id: 10,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/fb.webp",
    name: "David Van Waldick ",
    position: "Owner",
    reviews:
      "Vcana provided a web re-design for us. Anshul as project manager did a great job of communication the needs to designers. Vcana was timely, professional, and priced well for the service. I would recommend using them to anyone needing a new web site at a fair price with professional results.",
    // company: "",
    link: "https://www.facebook.com/CaliforniaLifeHomes/posts/2998164463795228?ref=embed_post",
  },

  {
    id: 11,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "vivek saini",
    position: "Owner",
    reviews:
      "I'd give 10 stars if it were an option! Vcana Global team was fantastic--timely, professional, creative, and most of all, extremely knowledgeable in web design! My new website is perfect.",
    // company: "",
    link: "https://g.co/kgs/LEy1x4",
  },
  {
    id: 12,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/fb.webp",
    name: "Richard Stumpf",
    position: "Owner",
    reviews:
      "Very fast and professional. I'd recommend Vcana to anyone needing web services.",
    // company: "",
    link: "https://www.facebook.com/richard.stumpf.39/posts/10159354096305758?ref=embed_post",
  },
  {
    id: 13,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Victoria Ipri",
    position: "Owner",
    reviews:
      "Small business owners like myself often need help developing websites, landing pages, etc. But most design/development companies want to work only with big-dollar projects. That's why I was so pleased to discover Anshul Verma and the team at Vcana Global - they are a trustworthy, affordable, and experienced provider who created my new website quickly and to my specifications. and I loved their timely and complete communications. I will definitely hire them again, and highly recommend contacting Vcana Global for all your design needs!",
    // company: "",
    link: "https://g.co/kgs/tV2QKp",
  },
  {
    id: 14,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/fb.webp",
    name: "Alyssa Wilson ",
    position: "Owner",
    reviews:
      "Vcana Global has been over accommodating with all of our edits for websites, been patient with us, and have really shown us what it is to be a good company that builds websites. We have had some interesting clients and they have helped us through working with them. Anshul and his team is available when ever we need them. Fast to respond and always has a solution to the task at hand. Thank you Vcana Global for your service!",
    company: "Iconycs",
    link: "https://www.facebook.com/Alys.Wilson11/posts/3405891852776679?ref=embed_post",
  },
  {
    id: 15,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "David Van Waldick",
    position: "Owner",
    reviews:
      "Vcana provide a web re-design for us. Anshul as project manager did great job of communication the needs to designers. Vcana was timely, professional, and priced well for the service. I would recommend using them to anyone needing a new web site at a fair price with professional results.",
    // company: "",
    link: "https://g.co/kgs/BCEkGy",
  },
  {
    id: 16,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/fb.webp",
    name: "Ian Miller",
    position: "Owner",
    reviews:
      "Vcana was responsive, professional, and generally great to work with. They helped me set up a landing page for a new business.",
    // company: "Iconycs",
    link: "https://www.facebook.com/ian.miller.96155/posts/10159462618996454?ref=embed_post",
  },
  {
    id: 17,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Sharon Niman",
    position: "Owner",
    reviews:
      "Ankush was a delight to work with.  The entire team was professional and produced a quality product in a timely manner.  Best part was the very competitive pricing.  Highly recommend",
    // company: "",
    link: "https://g.co/kgs/7CwdXo",
  },
  {
    id: 18,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/fb.webp",
    name: "Habi Coulibaly ",
    position: "Owner",
    reviews:
      "Anshul is an excellent communicator with amazing professionalism. We originally had a nice website but the optimization and feel were not there.  Anshul took a look and came up with solid suggestions to start the process.  We were able to revamp our website to represent our brand in the way that we wanted working with Vcana.  The team is always ready to make changes to adapt to our vision as we continue to grow.  It has been a great experience.",
    // company: "Iconycs",
    link: "https://www.facebook.com/habi.coulibaly.7/posts/10158024067116009?ref=embed_post",
  },
  {
    id: 19,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Tim Barlow",
    position: "Owner",
    reviews:
      " Vcana Global designed our new website with outstanding results!! We are very happy with our new website and would recommend them to anyone looking to upgrade or develop a new website. They are professional and their work exceeded expectations!!!",
    // company: "",
    link: "https://g.co/kgs/wX9ben",
  },
  {
    id: 20,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/fb.webp",
    name: "Alexys Feaster",
    position: "Owner",
    reviews:
      "Vcana Global created a great website for my new company and is always very responsive and focused on making their clients happy. Anshul is extremely professional, attentive and great at what he does. It was a great experience and I highly recommend them!",
    // company: "Iconycs",
    link: "https://www.facebook.com/alexys.feaster/posts/10164636336620526?ref=embed_post",
  },
  {
    id: 21,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Dana Hawthorne",
    position: "Owner",
    reviews:
      "Overall the experience with Vcanna was quite good.  Ankush and the team offshore did a good job and for the price, you’d be hard pressed to get this much time and attention from a solely US based web dev shop.  We had them build our initial website for modernize.io and overall the site looks good!",
    // company: "",
    link: "https://g.co/kgs/yBfQji",
  },
  {
    id: 22,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/fb.webp",
    name: "Stuart Somiah",
    position: "Owner",
    reviews: "Very professional, amazing to work with",
    // company: "Iconycs",
    link: "https://www.facebook.com/stuart.somiah/posts/5167366020000877?ref=embed_post",
  },
  {
    id: 23,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Marshall Feaster",
    position: "Owner",
    reviews:
      "Vcana Global executed our website design with expertise. Not only are they good at what they do, they are very responsive to your every need. I highly recommend Vcana Global. Thank you Anshul and your team of experts.",
    // company: "",
    link: "https://g.co/kgs/d7eHzH",
  },
  {
    id: 24,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/fb.webp",
    name: "Sameena Israr ",
    position: "Owner",
    reviews: "Excellent Website design.",
    // company: "Iconycs",
    link: "https://www.facebook.com/sameena.israr/posts/4436254493058064?ref=embed_post",
  },
  {
    id: 25,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Manish Dhiman",
    position: "Owner",
    reviews:
      "One of the best IT company. The team response is excellent regarding every query. We recommend Vcana Global to anyone who is looking to build websites from the ground up.",
    // company: "",
    link: "https://g.co/kgs/EnHU7A",
  },
  {
    id: 26,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/fb.webp",
    name: "Michael Brown ",
    position: "Owner",
    reviews:
      "Anshul CEO is dedicated to customer satisfaction.  Very respectful of your time, and honest.  What I like most about Vcana Global is they are very responsive, it almost seems like they never sleep. He also has saved my organization money!",
    // company: "Iconycs",
    link: "https://www.facebook.com/permalink.php?story_fbid=4503630493041780&id=100001846206829&ref=embed_post",
  },
  {
    id: 27,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Kwaku Dokyi",
    position: "Owner",
    reviews:
      "Vcana Global Inc has been working with my business, Kooman Computing, for about 6 months now and the communication has been exceptional. Anshul and his team set the standard for customer service. I look forward to future projects and collaborations. I appreciate the service!",
    // company: "",
    link: "https://g.co/kgs/sn6ptQ",
  },
  {
    id: 28,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/fb.webp",
    name: "Mario Philip Cardenas",
    position: "Owner",
    reviews:
      "Anshul with Vcana global does excellent work. Anshul is very friendly and professional. He is an extremely hard worker and has a very creative eye. He delivered on exactly what he promised in a time efficient manner. I highly recommend his services.",
    // company: "Iconycs",
    link: "https://www.facebook.com/mario.p.cardenas.7/posts/10220619149805850?ref=embed_post",
  },
  {
    id: 29,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Ian Miller",
    position: "Owner",
    reviews:
      "Vcana has been great to work with. Very responsive and willing to iterate many times to come up with a good end product.",
    // company: "",
    link: "https://g.co/kgs/XHqXEB",
  },
  {
    id: 30,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/fb.webp",
    name: "Thurman Brown",
    position: "Owner",
    reviews:
      "Vcana staff was very responsive to what I thought my needs were and at the end of the day, I got a product that reflected my vision. Than You, Vcana Global.",
    // company: "Iconycs",
    link: "https://www.facebook.com/thurman.brown.7/posts/3428464173841814?ref=embed_post",
  },
  {
    id: 31,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Dr. Food Cost",
    position: "Owner",
    reviews:
      "Vcana will definitely get a lot more business from me.  Anshul, is easy to work with, knowledgeable, considerate, professional, and works quickly. I have already recommended Vcana to my daughter's Notary Signing company and my niece's ecommerce company.  As a restaurant consultant I will also recommend my clients to Vcana.",
    // company: "",
    link: "https://g.co/kgs/zFJ2jE",
  },
  {
    id: 32,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Archit Kumar Sood",
    position: "Owner",
    reviews:
      "Vishu is a through professional. loved his services! All the best!",
    // company: "",
    link: "https://g.co/kgs/kFXgTZ",
  },
  {
    id: 33,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Richard Stumpf",
    position: "Owner",
    reviews:
      "An excellent experience working with Vcana.  Would recommend them to anyone.  Fast and efficient.",
    // company: "",
    link: "https://g.co/kgs/WAmQUA",
  },

  {
    id: 34,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Tanshul Kaushal",
    position: "Owner",
    reviews:
      "One of the best and affordable seo company in Delaware.highly recommend.",
    // company: "",
    link: "https://g.co/kgs/tK5g74",
  },
  {
    id: 35,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Abhinandan Kalia",
    position: "Owner",
    reviews: "Awesome products and services. This company has a great future !",
    // company: "",
    link: "https://g.co/kgs/pecFv1",
  },
  {
    id: 37,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Scott Finestone",
    position: "Owner",
    reviews:
      "They did a great job building our website.  Very easy to work with.",
    // company: "",
    link: "https://g.co/kgs/zbFe4w",
  },
  {
    id: 38,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Sujata Bajracharya",
    position: "Owner",
    reviews:
      "Anshul and his team are the best! Very professional, great communication and great customer service.",
    // company: "",
    link: "https://g.co/kgs/SX4w5Z",
  },
  {
    id: 39,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Stan Consulting",
    position: "Owner",
    reviews:
      "We did several marketing projects with them. Great Company to work with! Thank you!",
    // company: "",
    link: "https://g.co/kgs/2gP2oB",
  },
  {
    id: 40,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "aman singh",
    position: "Owner",
    reviews: "Delaware best IT company. Highly recommended.....",
    // company: "",
    link: "https://g.co/kgs/hReQW5",
  },
  {
    id: 41,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Payal Chavan",
    position: "Owner",
    reviews: "Great work and amazing team.",
    // company: "",
    link: "https://g.co/kgs/M8AS3q",
  },
  {
    id: 42,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "South Jersey Digital Solutions",
    position: "Owner",
    reviews: "Great work done by their team.",
    // company: "",
    link: "https://g.co/kgs/fHwMiJ",
  },
  {
    id: 43,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Ananya 7B 26",
    position: "Owner",
    reviews: "Excellent services",
    // company: "",
    link: "https://g.co/kgs/5ip42a",
  },
  {
    id: 44,
    img: "https://vcana-website-assets.s3.amazonaws.com/images/testimonial/google.webp",
    name: "Odile Micheletti",
    position: "Founder - Kayenne Caribbean Consultancy",
    reviews:
      "I had the pleasure of working with Anshul Verma and his team on building my website, and it was a fantastic experience. Their clear communication, adherence to timelines, and willingness to incorporate my feedback made the process smooth and efficient. I’m extremely happy with the results and highly recommend Anshul for web development projects.",
    // company: "",
    // link: "",
  },
];

export default Testimonial;
