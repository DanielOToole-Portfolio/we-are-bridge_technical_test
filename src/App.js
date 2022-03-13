// React Imports
import React, { useState, useRef } from "react";

//Style Imports
import "./App.css";

// Components Imports
import Estimate from "./components/Estimate/Estimate";
import Questions from "./components/Questions/Questions";
import Report from "./components/Report/Report";
import Success from "./components/Success/Success";

// Data Imports
import ExtimateDataArray from "./Data/EstimateData";

// Library Imports
import Carousel from "react-bootstrap/Carousel";

function App() {
  const [estimate, setEstimate] = useState(ExtimateDataArray);

  const [qData, setQData] = useState({
    industItems: 0,
    pOrderItem: 0,
    industSupp: 0,
  });

  const ref = useRef(null);

  const [index, setIndex] = useState(0);

  const onPrevClick = () => {
    ref.current.prev();
  };

  const onNextClick = () => {
    ref.current.next();
  };

  return (
    <div className="App">
      <div className="background">
        <div className="blur"></div>
      </div>
      <div className="page-cont container">
        <Carousel interval={null} ref={ref}>
          <Carousel.Item>
            <Estimate estimate={estimate} />
            <div className="nav next" onClick={() => onNextClick(index)}>
              <span>Continue</span>
              <i className="arrow" />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <Questions qData={qData} setQData={setQData} />
            <div className="qNav">
              <div className="nav prev" onClick={onPrevClick}>
                <i className="arrow" />
                <span>Go back</span>
              </div>
              <div className="nav next" onClick={() => onNextClick(index)}>
                <span>Continue</span>
                <i className="arrow" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className="r">
            <Report estimate={estimate} qData={qData} />
            <div className="nav next send" onClick={() => onNextClick(index)}>
              <span>Send me this report</span>
            </div>
            <div className="nav prev" onClick={onPrevClick}>
              <i className="arrow" />
              <span>Go back</span>
            </div>
          </Carousel.Item>
          <Carousel.Item className="thank-cont">
            <Success />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
