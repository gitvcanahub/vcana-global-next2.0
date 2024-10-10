import React, { useState, useEffect } from "react";
import Styles from "./index.module.css";
import { LiaCookieBiteSolid } from "react-icons/lia";
import { Card, Modal, Accordion, Form } from "react-bootstrap";
import {
  getLocalStorage,
  setLocalStorage,
} from "@/components/googleAnalytic/gtagHelper";
import Link from "next/link";

function MyVerticallyCenteredModal(props) {
  const [showFullText, setShowFullText] = useState(false);
  const [addConsent, setAddConsent] = useState(false);
  const [analyticConsent, setAnalyticConsent] = useState(false);

  const handleToggleText = () => {
    setShowFullText((prev) => !prev);
  };

  const saveMyPreference = () => {
    props.setCookieConsent(true);

    setLocalStorage("ad_consent", addConsent);
    if (addConsent) {
      window.gtag("consent", "update", {
        ad_personalization: "granted",
      });
    }

    setLocalStorage("analytic_consent", analyticConsent);
    if (analyticConsent) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
    setLocalStorage("cookie_consent", true);

    window.gtag("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
    });
  };

  useEffect(() => {
    console.log(
      "ustopm consent ========>>>>>>>>",
      getLocalStorage("analytic_consent"),
      getLocalStorage("ad_consent")
    );

    setAnalyticConsent(getLocalStorage("analytic_consent"));
    setAddConsent(getLocalStorage("ad_consent"));
  }, [props.cookieConsent]);

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      centered
      className={`${Styles.modalMainDiv} modalMainDiv`}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Customize Consent Preferences
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className={Styles.modalBody}>
        <div className={Styles.parah}>
          <span className={`text-body ${showFullText ? "" : "text-snippet"}`}>
            We use cookies to help you navigate efficiently and perform certain
            functions. You will find detailed information about all cookies
            under each consent category below.
            <br />
            <br />
            The cookies that are categorized as "Necessary" are stored on your
            browser as they are essential for enabling the basic functionalities
            of the site.
            <br />
            <br />
            We also use third-party cookies that help us analyze how you use
            this website, store your preferences, and provide the content and
            advertisements that are relevant to you. These cookies will only be
            stored in your browser with your prior consent.
            <br />
            <br />
            You can choose to enable or disable some or all of these cookies but
            disabling some of them may affect your browsing experience.
          </span>
          {!showFullText && (
            <a onClick={handleToggleText} className={Styles.showMoreBtn}>
              Show More
            </a>
          )}
          {showFullText && (
            <a onClick={handleToggleText} className={Styles.showMoreBtn}>
              Show Less
            </a>
          )}
        </div>

        <Form>
          <Accordion>
            <Accordion.Item
              eventKey="0"
              className={`${Styles.AccordionItem} AccordionItem`}
            >
              <Accordion.Header className={Styles.AccordionBtn}>
                <h5 className="mb-0">Necessary</h5>
                <p className={Styles.parah2}>
                  Necessary cookies are required to enable the basic features of
                  this site, such as providing secure log-in or adjusting your
                  consent preferences. These cookies do not store any personally
                  identifiable data.
                </p>
              </Accordion.Header>
              <Accordion.Body
                className={`${Styles.AccordionBody} border rounded p-0`}
              >
                <ul class={`${Styles.ulTable} p-3`}>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Cookie</span>
                    <div>cookieyes-consent</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Duration</span>
                    <div>1 year</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Description</span>
                    <div className={Styles.longparah}>
                      CookieYes sets this cookie to remember users' consent
                      preferences so that their preferences are respected on
                      subsequent visits to this site. It does not collect or
                      store any personal information about the site visitors.
                    </div>
                  </li>
                </ul>
                <hr className={Styles.hr} />
                <ul class={`${Styles.ulTable} p-3`}>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Cookie</span>
                    <div>wpEmojiSettingsSupports</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Duration</span>
                    <div>session</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Description</span>
                    <div className={Styles.longparah}>
                      WordPress sets this cookie when a user interacts with
                      emojis on a WordPress site. It helps determine if the
                      user's browser can display emojis properly.
                    </div>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item
              eventKey="1"
              className={`${Styles.AccordionItem} AccordionItem`}
            >
              <Accordion.Header className={Styles.AccordionBtn}>
                <h5 className="mb-0">Functional</h5>
                <p className={Styles.parah2}>
                  Functional cookies help perform certain functionalities like
                  sharing the content of the website on social media platforms,
                  collecting feedback, and other third-party features.
                </p>
              </Accordion.Header>
              <Accordion.Body
                className={`${Styles.AccordionBody} border rounded p-0`}
              >
                <p className={`${Styles.parah} mb-0 px-3 py-2`}>
                  No cookies to display.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item
              eventKey="2"
              className={`${Styles.AccordionItem} AccordionItem`}
            >
              <Accordion.Header className={Styles.AccordionBtn}>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <h5 className="mb-0">Analytics</h5>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    checked={analyticConsent}
                    onClick={(e) => {
                      e.stopPropagation();

                      setAnalyticConsent(e.target.checked);
                    }}
                  />
                </div>
                <p className={Styles.parah2}>
                  Analytical cookies are used to understand how visitors
                  interact with the website. These cookies help provide
                  information on metrics such as the number of visitors, bounce
                  rate, traffic source, etc.
                </p>
              </Accordion.Header>
              <Accordion.Body
                className={`${Styles.AccordionBody} border rounded p-0`}
              >
                <ul class={`${Styles.ulTable} p-3`}>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Cookie</span>
                    <div>sbjs_migrations</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Duration</span>
                    <div>session</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Description</span>
                    <div className={Styles.longparah}>
                      Sourcebuster sets this cookie to identify the source of a
                      visit and stores user action information in cookies. This
                      analytical and behavioural cookie is used to enhance the
                      visitor experience on the website.
                    </div>
                  </li>
                </ul>

                <hr className={Styles.hr} />
                <ul class={`${Styles.ulTable} p-3`}>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Cookie</span>
                    <div>sbjs_current_add</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Duration</span>
                    <div>session</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Description</span>
                    <div className={Styles.longparah}>
                      Sourcebuster sets this cookie to identify the source of a
                      visit and stores user action information in cookies. This
                      analytical and behavioural cookie is used to enhance the
                      visitor experience on the website.
                    </div>
                  </li>
                </ul>

                <hr className={Styles.hr} />
                <ul class={`${Styles.ulTable} p-3`}>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Cookie</span>
                    <div>sbjs_first_add</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Duration</span>
                    <div>session</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Description</span>
                    <div className={Styles.longparah}>
                      Sourcebuster sets this cookie to identify the source of a
                      visit and stores user action information in cookies. This
                      analytical and behavioural cookie is used to enhance the
                      visitor experience on the website.
                    </div>
                  </li>
                </ul>

                <hr className={Styles.hr} />
                <ul class={`${Styles.ulTable} p-3`}>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Cookie</span>
                    <div>sbjs_current</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Duration</span>
                    <div>session</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Description</span>
                    <div className={Styles.longparah}>
                      Sourcebuster sets this cookie to identify the source of a
                      visit and stores user action information in cookies. This
                      analytical and behavioural cookie is used to enhance the
                      visitor experience on the website.
                    </div>
                  </li>
                </ul>

                <hr className={Styles.hr} />
                <ul class={`${Styles.ulTable} p-3`}>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Cookie</span>
                    <div>sbjs_udata</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Duration</span>
                    <div>session</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Description</span>
                    <div className={Styles.longparah}>
                      Sourcebuster sets this cookie to identify the source of a
                      visit and stores user action information in cookies. This
                      analytical and behavioural cookie is used to enhance the
                      visitor experience on the website.
                    </div>
                  </li>
                </ul>

                <hr className={Styles.hr} />
                <ul class={`${Styles.ulTable} p-3`}>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Cookie</span>
                    <div>sbjs_session</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Duration</span>
                    <div>1 hour</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Description</span>
                    <div className={Styles.longparah}>
                      Sourcebuster sets this cookie to identify the source of a
                      visit and stores user action information in cookies. This
                      analytical and behavioural cookie is used to enhance the
                      visitor experience on the website.
                    </div>
                  </li>
                </ul>

                <hr className={Styles.hr} />
                <ul class={`${Styles.ulTable} p-3`}>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Cookie</span>
                    <div>_ga_*</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Duration</span>
                    <div>1 year 1 month 4 days</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Description</span>
                    <div className={Styles.longparah}>
                      Google Analytics sets this cookie to store and count page
                      views.
                    </div>
                  </li>
                </ul>

                <hr className={Styles.hr} />
                <ul class={`${Styles.ulTable} p-3`}>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Cookie</span>
                    <div>_ga</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Duration</span>
                    <div>1 year 1 month 4 days</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Description</span>
                    <div className={Styles.longparah}>
                      Google Analytics sets this cookie to calculate visitor,
                      session and campaign data and track site usage for the
                      site's analytics report. The cookie stores information
                      anonymously and assigns a randomly generated number to
                      recognise unique visitors.
                    </div>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item
              eventKey="3"
              className={`${Styles.AccordionItem} AccordionItem`}
            >
              <Accordion.Header className={Styles.AccordionBtn}>
                <h5 className="mb-0">Performance</h5>
                <p className={Styles.parah2}>
                  Performance cookies are used to understand and analyze the key
                  performance indexes of the website which helps in delivering a
                  better user experience for the visitors.
                </p>
              </Accordion.Header>
              <Accordion.Body
                className={`${Styles.AccordionBody} border rounded p-0`}
              >
                <p className={`${Styles.parah} mb-0 px-3 py-2`}>
                  No cookies to display.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item
              eventKey="4"
              className={`${Styles.AccordionItem} AccordionItem`}
            >
              <Accordion.Header className={Styles.AccordionBtn}>
                <div className="d-flex justify-content-between align-items-center w-100">
                  <h5 className="mb-0">Advertisement</h5>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    checked={addConsent}
                    onClick={(e) => {
                      e.stopPropagation();

                      setAddConsent(e.target.checked);
                    }}
                  />
                </div>
                <p className={Styles.parah2}>
                  Advertisement cookies are used to provide visitors with
                  customized advertisements based on the pages you visited
                  previously and to analyze the effectiveness of the ad
                  campaigns.
                </p>
              </Accordion.Header>
              <Accordion.Body
                className={`${Styles.AccordionBody} border rounded p-0`}
              >
                <ul class={`${Styles.ulTable} p-3`}>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Cookie</span>
                    <div>YSC</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Duration</span>
                    <div>session</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Description</span>
                    <div className={Styles.longparah}>
                      Youtube sets this cookie to track the views of embedded
                      videos on Youtube pages.
                    </div>
                  </li>
                </ul>

                <hr className={Styles.hr} />
                <ul class={`${Styles.ulTable} p-3`}>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Cookie</span>
                    <div>VISITOR_INFO1_LIVE</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Duration</span>
                    <div>6 months</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Description</span>
                    <div className={Styles.longparah}>
                      YouTube sets this cookie to measure bandwidth, determining
                      whether the user gets the new or old player interface.
                    </div>
                  </li>
                </ul>

                <hr className={Styles.hr} />
                <ul class={`${Styles.ulTable} p-3`}>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Cookie</span>
                    <div>VISITOR_PRIVACY_METADATA</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Duration</span>
                    <div>6 months</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Description</span>
                    <div className={Styles.longparah}>
                      YouTube sets this cookie to store the user's cookie
                      consent state for the current domain.
                    </div>
                  </li>
                </ul>

                <hr className={Styles.hr} />
                <ul class={`${Styles.ulTable} p-3`}>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Cookie</span>
                    <div>test_cookie</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Duration</span>
                    <div>15 minutes</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Description</span>
                    <div className={Styles.longparah}>
                      doubleclick.net sets this cookie to determine if the
                      user's browser supports cookies.
                    </div>
                  </li>
                </ul>

                <hr className={Styles.hr} />
                <ul class={`${Styles.ulTable} p-3`}>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Cookie</span>
                    <div>IDE</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Duration</span>
                    <div>1 year 24 days</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Description</span>
                    <div className={Styles.longparah}>
                      Google DoubleClick IDE cookies store information about how
                      the user uses the website to present them with relevant
                      ads according to the user profile.
                    </div>
                  </li>
                </ul>

                <hr className={Styles.hr} />
                <ul class={`${Styles.ulTable} p-3`}>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Cookie</span>
                    <div>yt-remote-device-id</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Duration</span>
                    <div>never</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Description</span>
                    <div className={Styles.longparah}>
                      YouTube sets this cookie to store the user's video
                      preferences using embedded YouTube videos.
                    </div>
                  </li>
                </ul>

                <hr className={Styles.hr} />
                <ul class={`${Styles.ulTable} p-3`}>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Cookie</span>
                    <div>yt.innertube::requests</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Duration</span>
                    <div>never</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Description</span>
                    <div className={Styles.longparah}>
                      YouTube sets this cookie to register a unique ID to store
                      data on what videos from YouTube the user has seen.
                    </div>
                  </li>
                </ul>

                <hr className={Styles.hr} />
                <ul class={`${Styles.ulTable} p-3`}>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Cookie</span>
                    <div>yt.innertube::nextId</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Duration</span>
                    <div>never</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Description</span>
                    <div className={Styles.longparah}>
                      YouTube sets this cookie to register a unique ID to store
                      data on what videos from YouTube the user has seen.
                    </div>
                  </li>
                </ul>

                <hr className={Styles.hr} />
                <ul class={`${Styles.ulTable} p-3`}>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Cookie</span>
                    <div>yt-remote-connected-devices</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Duration</span>
                    <div>never</div>
                  </li>
                  <li className="d-flex">
                    <span className={Styles.leftheading}>Description</span>
                    <div className={Styles.longparah}>
                      YouTube sets this cookie to store the user's video
                      preferences using embedded YouTube videos.
                    </div>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Form>
      </Modal.Body>
      <Modal.Footer className="justify-content-between">
        <button
          onClick={() => {
            props.cookiesConsentHandler(false);
            props.onHide();
          }}
          className={Styles.btns}
        >
          Reject All
        </button>
        <button
          className={Styles.btns}
          onClick={() => {
            saveMyPreference();

            props.onHide();
          }}
        >
          Save My Preferences
        </button>
        <button
          onClick={() => {
            props.cookiesConsentHandler(true);

            props.onHide();
          }}
          className={Styles.acceptBtn}
        >
          Accept All
        </button>
      </Modal.Footer>
    </Modal>
  );
}

function CookieBox() {
  const [modalShow, setModalShow] = useState(false);
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    const newValue = cookieConsent ? "granted" : "denied";
    window.gtag("consent", "update", {
      ad_storage: newValue,
      ad_user_data: newValue,
    });

    setCookieConsent(storedCookieConsent);
  }, []);

  const cookiesConsentHandler = (val) => {
    const newValue = val ? "granted" : "denied";

    console.log(
      "cokkies conset in handler ==============>>>>>>>>>>>",
      cookieConsent
    );

    window.gtag("consent", "update", {
      ad_storage: newValue,
      ad_user_data: newValue,
      ad_personalization: newValue,
      analytics_storage: newValue,
    });

    setCookieConsent(val);

    setLocalStorage("cookie_consent", val);

    setLocalStorage("ad_consent", val);

    setLocalStorage("analytic_consent", val);
  };

  return (
    <>
      {" "}
      {cookieConsent && (
        <LiaCookieBiteSolid
          onClick={() => setModalShow(true)}
          className={`${Styles.mainLogo} border p-1 rounded text-white position-fixed`}
        />
      )}
      {!cookieConsent && (
        <Card className={`${Styles.mainCard} text-white`}>
          <Card.Body>
            {/* <Card.Title className="text-center">We value your privacy</Card.Title> */}
            {/* <p className={`${Styles.parah3} text-white`}>
              Click on "Accept All" to let our cookies enhance your browsing
              experience, serve you personalized ads/content and analyze our
              traffic.
            </p> */}
            <p className={`${Styles.parah3} text-white`}>
              This website uses cookies to ensure you get the best experience on
              our website.. <Link href="/cookie-policy">Read More</Link>
            </p>
            <div className="d-flex justify-content-center gap-4">
              <button
                onClick={() => setModalShow(true)}
                className={Styles.btns2}
              >
                Customize
              </button>

              <button
                onClick={() => {
                  cookiesConsentHandler(false);
                  setCookieConsent(true);
                }}
                className={Styles.btns2}
              >
                Reject All
              </button>
              <button
                className={Styles.acceptBtn2}
                onClick={() => cookiesConsentHandler(true)}
              >
                Accept All
              </button>
            </div>
          </Card.Body>
        </Card>
      )}
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        cookieConsent={cookieConsent}
        cookiesConsentHandler={cookiesConsentHandler}
        setCookieConsent={setCookieConsent}
      />
    </>
  );
}

export default CookieBox;
