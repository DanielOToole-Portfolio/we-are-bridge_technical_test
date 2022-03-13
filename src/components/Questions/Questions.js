// React Imports
import React, { useRef } from "react";

// Style Imports
import "./questions.css";

// Library Imports
import Carousel from "react-bootstrap/Carousel";

const Questions = ({ qData, setQData }) => {
  const ref = useRef(null);

  const onPrevClick = () => {
    ref.current.prev();
  };
  const onNextClick = () => {
    ref.current.next();
  };

  return (
    <div className="questions-cont">
      <h3>CALCULATING YOUR TOTAL COSTS</h3>

      <Carousel interval={null} ref={ref} fade className="qc">
        <Carousel.Item>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2>
                What is your approximate annual Spend on industrial items?
              </h2>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <input
                type="number"
                placeholder="50..."
                onChange={(e) =>
                  setQData({ ...qData, industItems: Number(e.target.value) })
                }
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2>
                Approximately how many unique purchase orders are raised per
                annum for these items?
              </h2>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <input
                type="number"
                placeholder="30..."
                onChange={(e) =>
                  setQData({ ...qData, pOrderItem: Number(e.target.value) })
                }
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2>
                Approximately how many suppliers are you using for industrial
                supplies?
              </h2>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <input
                type="number"
                placeholder="10..."
                onChange={(e) =>
                  setQData({ ...qData, industSupp: Number(e.target.value) })
                }
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="row q-slide-nav">
        <div className="col-md-6 col-sm-12">
          <div className="nav prev" onClick={onPrevClick}>
            <i className="arrow" />
          </div>
          <div className="nav next" onClick={onNextClick}>
            <i className="arrow" />
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};

export default Questions;
