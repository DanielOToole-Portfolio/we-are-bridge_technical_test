// React Imports
import React, { useState } from "react";

// Style Imports
import "./estimate.css";

const Estimate = ({ estimate }) => {
  const [total, setTotal] = useState(0);

  function totalIt(e) {
    var input = document.getElementsByName("checkbox");
    var checkboxTotal = 0;

    e.target.parentNode.classList[e.target.checked ? "add" : "remove"](
      "checked"
    );

    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        checkboxTotal += parseFloat(input[i].value);
      }
    }
    setTotal(checkboxTotal);
  }

  return (
    <div className="estimate-cont">
      <h3>CALCULATING YOUR TOTAL COSTS</h3>

      <div className="container">
        <div className="row">
          {estimate.map((item) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12 checkbox-cont"
              key={item.name}
            >
              <i className="tick" />
              <p>{item.text}</p>
              <span></span>
              <div className="price-cont">
                <span className="text">ESTIMATE</span>
                <span className="price">£ {item.value.toFixed(2)}</span>
              </div>
              <input
                type="checkbox"
                name="checkbox"
                className="checkbox-input"
                value={item.value}
                onClick={totalIt}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 col-md-6 col-sm-12 total-cont">
          <div className="total">
            <span className="text">TOTAL</span>

            <span className="total-price"> £ {total.toFixed(2)}</span>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12"></div>
      </div>
    </div>
  );
};

export default Estimate;
