import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "@/components/shared/banner";
import Styles from "./index.module.css";
const termandcondition = () => {

  // test commnet


  
  return (
    <>
      <Banner data={bannerData} />
      <div className={Styles.termscodi}>
        <Container>
          <Row>
            <Col>
              <h3 className="text-start mb-xl-4 h3Headings mt-3">
                Competition<span> Terms and Conditions</span>
              </h3>
              <h2 className="text-start mb-xl-2">Eligibility</h2>
              <p className="text-start">
                The competition is open to individuals aged 18 years or older.
                Employees of Vcana Global and their immediate family members are
                not eligible to participate.
              </p>
              <h2 className="text-start mb-xl-2">Entry Deadline</h2>
              <p className="text-start">
                All entries must be submitted by 31st October 2024, 11:59 PM IST
                to be considered for the competition.
              </p>
              <h2 className="text-start mb-xl-2">Entry Requirements</h2>
              <p className="text-start">
                Participants must complete the registration form in its entirety
                to be eligible. Incomplete or inaccurate entries will be
                disqualified.
              </p>
              <h2 className="text-start mb-xl-2">Selection of Winner</h2>
              <p className="text-start">
                The winner will be selected at the discretion of Vcana Global
                based on criteria such as creativity, need for a website
                redesign, and potential impact of the website on the
                participant's business or project.
              </p>
              <h2 className="text-start mb-xl-2">Prize</h2>
              <p className="text-start">
                The winner will receive a free website design and development
                package from Vcana Global. The package includes a customizable
                theme, responsive design, essential content sections (hero,
                about, services, portfolio, testimonials, contact, footer).
                However, it requires the winner to provide the domain to Vcana
                Global to make the website live.
              </p>
              <h2 className="text-start mb-xl-2">Usage Rights</h2>
              <p className="text-start">
                By participating in the competition, participants grant Vcana
                Global the right to showcase their name, business/project
                details, and website design on Vcana Global’s website, social
                media channels, and marketing materials for promotional
                purposes.
              </p>
              <h2 className="text-start mb-xl-2">Notification of Winner</h2>
              <p className="text-start">
                The winner will be notified via email or phone by 15th August
                2024. If the winner does not respond within 7 days, an alternate
                winner may be selected.
              </p>
              <h2 className="text-start mb-xl-2">Prize Redemption</h2>
              <p className="text-start">
                The winner must redeem the prize within 30 days of being
                notified. Failure to do so may result in forfeiture of the
                prize.
              </p>
              <h2 className="text-start mb-xl-2">No Cash Alternative</h2>
              <p className="text-start">
                The prize is non-transferable and cannot be exchanged for cash
                or other services.
              </p>
              <h2 className="text-start mb-xl-2">
                Modification or Termination
              </h2>
              <p className="text-start">
                Vcana Global reserves the right to modify, suspend, or terminate
                the competition at any time without prior notice. In the event
                of such action, Vcana Global will notify participants via email
                or through its website.
              </p>
              <h2 className="text-start mb-xl-2">Legal Compliance</h2>
              <p className="text-start">
                Participants must comply with all applicable laws and
                regulations in their jurisdiction. Any violation of these terms
                and conditions may result in disqualification.
              </p>
              <p className="colr-cls text-start ">
                By participating in the competition, participants agree to abide
                by these terms and conditions.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
const bannerData = {
  heading: "Terms & Conditions",
  img: "https://vcana-website-assets.s3.amazonaws.com/images/banners/termBanner.webp",
};
export default termandcondition;
