import React from "react";
import styles from "./index.module.css";
import Banner from "@/components/shared/banner";
import { Container, Row, Col } from "react-bootstrap";
import { NextSeo } from "next-seo";
import Link from "next/link";
// import Table from "react-bootstrap/Table";

const PrivacyPolicy = () => {
  return (
    <>
      <NextSeo
        title="Cookie Policy |  Vcana Global"
        description="  Vcana Global utilizes cookies to enhance website functionality, improve performance, track user preferences, and deliver personalized ads, ensuring a seamless experience across all services."
        canonical="https://www.vcanaglobal.com/cookie-policy"
      />
      <Banner data={bannerData} />
      <div className={`${styles.polictext}  ${styles.cookiePolicyy}`}>
        <Container>
          <Row>
            <Col>
              <p className="text-start mb-xl-4">Last updated October 1, 2024</p>
              <h2 className="text-start mb-xl-3">Introduction</h2>
              <p className="text-xl-start mb-xl-4">
                Vcana Global ("we," "our," or "us") operates with offices
                registered in both the United States and India. We provide
                services in web design and development, mobile app development,
                application development, e-commerce development, digital
                marketing, and blockchain development. This Cookies Policy
                explains how we use cookies and similar technologies on our
                website(s) to provide better services and improve the user
                experience.
              </p>
              <p className="text-xl-start mb-xl-4">
                By continuing to use our website(s), you consent to our use of
                cookies in accordance with this policy.
              </p>
              <h2 className="text-start mb-xl-3">What Are Cookies?</h2>
              <p className="text-xl-start mb-xl-4">
                Cookies are small text files stored on your device (computer,
                smartphone, or tablet) when you visit a website. Cookies help
                websites remember your actions and preferences (such as login
                information, language settings, and other display preferences)
                over a period of time, making your experience smoother.
              </p>
              <h2 className="text-start mb-xl-3">Types of Cookies We Use</h2>
              <p className="text-xl-start mb-xl-4">
                We use different types of cookies to enhance the functionality
                of our website and support our service offerings, such as web
                development, e-commerce, and digital marketing.
              </p>
              <h3 className="text-start mb-xl-3">
                1. Strictly Necessary Cookies
              </h3>
              <p className="text-xl-start mb-xl-4">
                These cookies are essential for you to browse our website and
                use its core features. Without these cookies, the website's
                services, such as accessing secure areas, cannot be provided.
              </p>
              <h3 className="text-start mb-xl-3">2. Performance Cookies</h3>
              <p className="text-xl-start mb-xl-4">
                These cookies help us understand how visitors use our website by
                collecting anonymous information about page views, time spent on
                pages, and other key metrics. This allows us to enhance our web
                design and mobile app development services.
              </p>
              <h3 className="text-start mb-xl-3">3. Functionality Cookies</h3>
              <p className="text-xl-start mb-xl-4">
                These cookies allow our website to remember choices you make,
                such as language preferences or region, and provide enhanced,
                more personalized features. They may also be used to provide
                services you have requested, such as staying logged in.
              </p>
              <h3 className="text-start mb-xl-3">
                4. Targeting and Advertising Cookies
              </h3>
              <p className="text-xl-start mb-xl-4">
                We use these cookies to deliver relevant advertisements to you
                based on your browsing habits, either on our site or elsewhere.
                This is particularly important for our digital marketing
                services, where we target users with personalized ads. These
                cookies also limit the number of times you see an ad and help us
                measure the effectiveness of our campaigns.
              </p>
              <h3 className="text-start mb-xl-3">5. Third-Party Cookies</h3>
              <p className="text-xl-start mb-xl-4">
                Some of our web, mobile app, and blockchain development services
                integrate with third-party providers, like analytics platforms
                (e.g., Google Analytics) or social media platforms. These
                third-party cookies track user activity across websites and are
                subject to the third party’s privacy policies.
              </p>
              <h2 className="text-start mb-xl-3">Why We Use Cookies</h2>
              <p className="text-xl-start mb-xl-4">
                We use cookies for the following reasons:
              </p>
              <p className="text-xl-start mb-xl-4">
                <ul>
                  <li>
                    To improve the functionality and performance of our website,
                    ensuring it aligns with our web design and e-commerce
                    solutions.
                  </li>
                  <li className="pt-3">
                    To analyze how users interact with our content, which helps
                    us develop mobile applications and websites that better
                    serve our clients.
                  </li>
                  <li className="pt-3">
                    To enhance digital marketing efforts by delivering
                    personalized ads based on user interests.
                  </li>
                  <li className="pt-3">
                    To ensure smooth transactions and functionality on our
                    e-commerce and blockchain platforms.
                  </li>
                </ul>
              </p>
              <h2 className="text-start mb-xl-3">Legal Compliance</h2>
              <p className="text-xl-start mb-xl-4">
                Since we operate in both the USA and India, we comply with
                applicable regulations in both regions.
              </p>
              <h3 className="text-start mb-xl-3">1. For USA Users:</h3>
              <p className="text-xl-start mb-xl-4">
                We adhere to the California Consumer Privacy Act (CCPA) and
                other relevant federal laws. You have the right to opt out of
                the sale of your personal information and manage your cookie
                preferences.
              </p>
              <h3 className="text-start mb-xl-3">2. For Indian Users:</h3>
              <p className="text-xl-start mb-xl-4">
                We comply with the Information Technology Act, 2000, and the
                Information Technology (Reasonable Security Practices and
                Procedures and Sensitive Personal Data or Information) Rules,
                2011. Your data is processed and stored in compliance with these
                regulations.
              </p>
              <h2 className="text-start mb-xl-3">Managing Your Cookies</h2>
              <p className="text-xl-start mb-xl-4">
                You can control and manage cookies in several ways. Most
                browsers allow you to:
              </p>
              <p className="text-xl-start mb-xl-4">
                <ul>
                  <li>
                    View what cookies are stored and delete them on an
                    individual basis.
                  </li>
                  <li className="pt-3">Block third-party cookies.</li>
                  <li className="pt-3">
                    Block cookies from specific websites.
                  </li>
                  <li className="pt-3">Block all cookies.</li>
                  <li className="pt-3">
                    Delete all cookies when you close your browser.
                  </li>
                </ul>
              </p>
              <p className="text-xl-start mb-xl-4">
                For more details on managing cookies, you can visit your
                browser's help documentation.
              </p>
              <h2 className="text-start mb-xl-3">Third-Party Cookies</h2>
              <p className="text-xl-start mb-xl-4">
                We may partner with third-party service providers for analytics
                and advertising purposes. For example, Google Analytics helps us
                analyze web traffic and user behavior, allowing us to optimize
                our development and digital marketing services. Please refer to
                their respective privacy policies for more information on their
                cookie usage.
              </p>
              <h2 className="text-start mb-xl-3">Cookie Retention</h2>
              <p className="text-xl-start mb-xl-4">
                The duration a cookie remains on your device depends on its
                type. Session cookies are deleted when you close your browser,
                while persistent cookies remain until their expiration or
                deletion by the user.
              </p>
              <h2 className="text-start mb-xl-3">Changes to This Policy</h2>
              <p className="text-xl-start mb-xl-4">
                We may update this Cookies Policy from time to time to reflect
                changes in our business or legal requirements. We encourage you
                to review this policy regularly to stay informed about how we
                are using cookies.
              </p>
              <h2 className="text-start mb-xl-3">Contact Us</h2>
              <p className="text-xl-start mb-xl-4">
                If you have any questions or concerns about our Cookies Policy
                or how we handle your data, please contact us:
              </p>
              <p className="text-xl-start mb-xl-4">
                <ul>
                  <li>
                    <strong>USA Office:</strong>{" "}
                    <Link href="mailto:info@vcanaglobal.com">
                      info@vcanaglobal.com ,
                    </Link>{" "}
                    <Link href="mailto:sales@vcanaglobal.com">
                      sales@vcanaglobal.com
                    </Link>{" "}
                    and{" "}
                    <Link href="tel:+1 (302) 394-6860">+1 (302) 394-6860</Link>
                  </li>
                  <li className="pt-3">
                    <strong>India Office:</strong>{" "}
                    <Link href="mailto:info@vcanaglobal.com">
                      info@vcanaglobal.com ,
                    </Link>{" "}
                    <Link href="mailto:sales@vcanaglobal.com">
                      sales@vcanaglobal.com
                    </Link>{" "}
                    and <Link href="tel:+91 6283282970">+91 6283282970</Link>
                  </li>
                </ul>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
const bannerData = {
  heading: "Cookie Policy",
  img: "./cookie-policy.webp",
};

export default PrivacyPolicy;
