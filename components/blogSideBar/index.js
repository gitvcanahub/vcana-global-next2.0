import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "./index.module.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import FetchService from "@/services/Fetch";
import { Notification } from "../shared/Notification";
// import StickyBox from "react-sticky-box";
import Spinner from "react-bootstrap/Spinner";

import Skeleton from "react-loading-skeleton";

import BlogService from "@/services/Blog";

//helper
const errorMessage = (error) => {
  return (
    <div
      style={{ color: "red", margintTop: "0px !important", display: "flex" }}
    >
      {error}
    </div>
  );
};

const BlogSidebar = (props) => {
  const {
    register,
    handleSubmit,
    getValues,
    resetField,
    formState: { errors },
  } = useForm();

  const {
    data: Categories,
    isLoading: categoryloading,
    // error: companyError,
  } = useQuery({
    queryKey: ["category"],
    queryFn: () => BlogService.getCategory(),
    keepPreviousData: true,
  });

  const {
    mutate,
    isPending: isLoading,
    // error: reviewError,
    // data,
  } = useMutation({
    mutationFn: (payload) => FetchService.newsLetter(payload),
    onError: (error) => {
      Notification(
        "error",
        `<div style='font-size:13px'>An error occurred: ${
          error.error || "Please try again later."
        }</div>`
      );
    },
    onSuccess: (data) => {
      // setValu

      if (data.success === false) {
        Notification("error", "Allready Subscribed!");
      } else {
        Notification("success", "Thank you for subscribing!");
        resetField("email");
      }
    },
  });

  const submitHandler = () => {
    mutate(getValues());
  };

  const searchhandler = (val) => {
    props.searchHandler(val);
  };

  const contactHandler = () => {
    document.getElementById("side").style.transition = "all 0.5s ease-out";
    document.getElementById("side").style.top = "-500px";
  };

  useEffect(() => {
    let lastVal = 0;
    const handleScroll = () => {
      const show = window.scrollY;

      if (show < lastVal) {
        document.getElementById("side").style.transition = "all 0.5s ease-out";
        document.getElementById("side").style.top = "70px";
        lastVal = show;
      } else {
        lastVal = show;
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div id="side" style={{ top: "70px", position: "sticky" }}>
        <div className={styles.rectangleDiv1}>
          {/* start first blog side section search */}
          <div className={styles.rectangleDiv}>
            <h2>Search</h2>
            <div className={` mt-4 ${styles.divider}`}></div>
            <div className={` mt-4 ${styles.inputsection}`}>
              <InputGroup
                className={`mb-3 ${styles.inpu}`}
                onChange={(e) => searchhandler({ title: e.target.value })}
              >
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  className={` ${styles.blogbutton}`}
                >
                  Go
                </Button>
              </InputGroup>
            </div>
          </div>
          {/* end first blog side section search */}

          {/* start second blog side section search */}
          <div className={`${styles.rectangleDiv} mt-4`}>
            <h2>About</h2>
            <div className={` mt-4 ${styles.divider}`}></div>
            <p className="mt-3 text-start">
              Word ‘Vcana’ means ‘Promise’. Vcana Global is a CANDID IT
              Consulting / Digital Marketing Company with a host of services to
              offer under one umbrella. Founded in the 2019 by a couple of
              enthusiasts who believed in making something big, Vcana Global
              today is serving more that 50 Clients throughout the globe. We are
              a cuddlable bunch of interesting people who work day in and day
              out to achieve the goals of our clients.
            </p>
          </div>

          {/* close second blog side section search */}

          {/* start third blog side section search */}
          <div
            className={`${styles.rectangleDiv} mt-4`}
            onClick={contactHandler}
          >
            <h2>Categories</h2>

            <div className={` mt-4 ${styles.divider}`}></div>

            {categoryloading ? (
              <ul>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => {
                  return (
                    <li key={data}>
                      <Skeleton className={styles.loadingblog} />
                    </li>
                  );
                })}
              </ul>
            ) : (
              <ul>
                {Categories?.map((data) => {
                  return (
                    <li key={data.category} className={`${styles.boxopen}  `}>
                      {" "}
                      <div
                        className="cursor_pointer"
                        onClick={() => searchhandler({ category: data._id })}
                      >
                        {">>"}

                        {data?.category}
                      </div>
                      <div className={`${styles.boxhideshow} `}>
                        <ul>
                          {data.sub_category.map((sub_data) => (
                            <li
                              key={sub_data}
                              className="cursor_pointer"
                              onClick={() =>
                                searchhandler({ sub_category: sub_data._id })
                              }
                            >
                              {" "}
                              {" - "} {sub_data?.sub_category}{" "}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          {/* close third blog side section search */}

          {/* start forth blog side section search */}
          <div className={`${styles.rectangleDiv} ${styles.news} mt-4`}>
            <h2>Newsletter</h2>
            <div className={` mt-4 ${styles.divider}`}></div>
            <div className={` mt-4 ${styles.inputsection}`}>
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group">
                  <input
                    type="email"
                    className={` form-control ${styles.newsemail}`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Your Email"
                    {...register("email", {
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      },
                    })}
                  />
                  {errors.email &&
                    errors.email.type === "required" &&
                    errorMessage("Please enter email address")}
                  {errors.email &&
                    errors.email.type === "pattern" &&
                    errorMessage("Invaid Email")}
                </div>
                <Button
                  type="submit"
                  className={` btn btn-primary mt-3 ${styles.newsbutton}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    "  Submit"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;

// const Categories1 = [
//   {
//     category: "Web Design and Development:",
//     sub_category: [
//       "Web Design Trends",
//       "User Experience (UX) Design",
//       "Front-end Development",
//       " Back-end Development",
//       "Responsive Design",
//       " E-commerce Development",
//       " Content Management Systems (CMS)",
//       "Website Maintenance and Updates",
//     ],
//   },
//   {
//     category: "Mobile App Development:",
//     sub_category: [
//       "redApp Development Trends",
//       "iOS App Development",
//       "Android App Development",
//       "Cross-Platform Development",
//       "App User Experience (UX/UI)",
//       "App Testing and Quality Assurance",
//       " App Monetization Strategies",
//       "App Store Optimization (ASO)",
//     ],
//   },
//   {
//     category: "Digital Marketing:",
//     sub_category: [
//       " Digital Marketing Strategies",
//       "Search Engine Optimization (SEO)",
//       "Pay-Per-Click Advertising (PPC)",
//       "Content Marketing",
//       "Social Media Marketing",
//       "Email Marketing",
//       "Influencer Marketing",
//       "Analytics and Data-driven Marketing",
//     ],
//   },
//   {
//     category: "Custom Web App Development: ",
//     sub_category: [
//       "Web App Development Technologies",
//       "Web App Design and User Experience",
//       "Web App Development Process",
//       "Front-End Development",
//       "Back-End Development",
//       "Web Security and Data Protection",
//       "Testing and Quality Assurance",
//       "Web App Deployment and Hosting",
//       "Web App Maintenance and Support",
//       "Trends and Innovations in Web App Development",
//       "Troubleshooting and Debugging",
//     ],
//   },
//   {
//     category: "Blockchain Development:",
//     sub_category: [
//       "Blockchain Technology Explained",
//       "Smart Contracts",
//       "Blockchain Security",
//       "Blockchain Development Tools",
//     ],
//   },
//   {
//     category: "Tech Industry Insights:",
//     sub_category: [
//       "Technology Trends and Predictions",
//       "Industry News and Updates",
//       "Analysis of Key Events",
//     ],
//   },
//   {
//     category: "Client Education:",
//     sub_category: [
//       "Beginner's Guides to Relevant Technologies",
//       "How to Choose the Right Development Partner",
//       "Maximizing ROI on Digital Marketing",
//       "Team and Company Culture:",
//     ],
//   },
//   {
//     category: "Online Marketing and Advertising: ",
//     sub_category: [
//       "Strategies for Promoting Your Services",
//       "Using Paid Advertising Platforms",
//       "Affiliate Marketing",
//     ],
//   },
//   {
//     category: "Emerging Technologies:",
//     sub_category: [
//       "AI and Machine Learning",
//       "Internet of Things (IoT)",
//       "Augmented Reality (AR) and Virtual Reality (VR)",
//     ],
//   },
//   {
//     category: "Web Security and Data Privacy:",
//     sub_category: [
//       "Importance of Security in Web and App Development",
//       "Compliance with Data Privacy Regulations",
//       "Tips for Choosing the Right Service:",
//       "Factors to Consider When Hiring a Development Partner",
//       "Evaluating Digital Marketing Agencies",
//     ],
//   },
// ];
