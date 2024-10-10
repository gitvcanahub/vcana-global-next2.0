import React from "react";
import Styles from "./index.module.css";
import { Row } from "react-bootstrap";

const Counter = () => {
  return (
    <div className={Styles.counter}>
      <Row>
        <div id="projectFacts" className={Styles.sectionClass}>
          <div className="fullWidth eight columns">
            <div className="projectFactsWrap ">
              <div
                className="item wow fadeInUpBig animated animated"
                data-number="12"
                style="visibility: visible;"
              >
                <i className="fa fa-briefcase"></i>
                <p id="number1" className="number">
                  12
                </p>
                <span></span>
                <p>Projects done</p>
              </div>
              <div
                className="item wow fadeInUpBig animated animated"
                data-number="55"
                style="visibility: visible;"
              >
                <i className="fa fa-smile-o"></i>
                <p id="number2" className="number">
                  55
                </p>
                <span></span>
                <p>Happy clients</p>
              </div>
              <div
                className="item wow fadeInUpBig animated animated"
                data-number="359"
                style="visibility: visible;"
              >
                <i className="fa fa-coffee"></i>
                <p id="number3" className="number">
                  359
                </p>
                <span></span>
                <p>Cups of coffee</p>
              </div>
              <div
                className="item wow fadeInUpBig animated animated"
                data-number="246"
                style="visibility: visible;"
              >
                <i className="fa fa-camera"></i>
                <p id="number4" className="number">
                  246
                </p>
                <span></span>
                <p>Photos taken</p>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Counter;
