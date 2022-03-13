// React Import
import React, { useEffect, useState } from "react";

// Styles Import
import "./report.css";

const Report = ({ estimate, qData }) => {
  const identR = estimate.find((element) => element.name === "identR");
  const reqQ = estimate.find((element) => element.name === "reqQ");
  const findP = estimate.find((element) => element.name === "findP");
  const raiseO = estimate.find((element) => element.name === "raiseO");
  const authS = estimate.find((element) => element.name === "authS");
  const payP = estimate.find((element) => element.name === "payP");
  const delP = estimate.find((element) => element.name === "delP");
  const inC = estimate.find((element) => element.name === "inC");
  const placeO = estimate.find((element) => element.name === "placeO");

  const [suppProd, setSuppProd] = useState();
  const [quoteOrderPro, setQuoteOrderPro] = useState();
  const [expOrder, setExpOrder] = useState();
  const [proInvoice, setProInvoice] = useState();
  const [paySupp, setPaySup] = useState();
  const [totalCost, setTotalCost] = useState();

  useEffect(() => {
    setSuppProd(identR.value + reqQ.value * qData.pOrderItem);

    setQuoteOrderPro(
      findP.value + raiseO.value + authS.value + payP.value * qData.pOrderItem
    );
    setExpOrder(delP.value * qData.industItems);
    setProInvoice(inC.value * qData.pOrderItem);
    setPaySup(placeO.value * qData.industSupp);
    setTotalCost(suppProd + quoteOrderPro + expOrder + proInvoice + paySupp);
  }, [
    qData,
    suppProd,
    quoteOrderPro,
    expOrder,
    proInvoice,
    paySupp,
    totalCost,
  ]);

  return (
    <div className="report-cont">
      <h3>CALCULATING YOUR TOTAL COSTS - YOUR RESULTS</h3>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h3 className="desc">
              By utilising the Bridge Sales Enablement Agency calculator
              organisations can simplify the processes associated with indirect
              procurement and unlock significant typical savings of up to 60% of
              process costs.
            </h3>
            <p>
              Based on what you have told us about your process we can estimate
              that the following costs are being insured within your procurement
              processes.
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="report-totals">
              <div className="report-row wr">
                <p>Supplier & product</p>
                <span>
                  £{" "}
                  {suppProd && suppProd.toString().length >= 10
                    ? suppProd.toFixed(9)
                    : suppProd}
                </span>
              </div>
              <div className="report-row wr">
                <p>Quotation to order process</p>
                <span>
                  £{" "}
                  {quoteOrderPro && quoteOrderPro.toString().length >= 10
                    ? quoteOrderPro.toFixed(9)
                    : quoteOrderPro}
                </span>
              </div>
              <div className="report-row wr">
                <p>Expediting & receiving orders</p>
                <span>
                  £{" "}
                  {expOrder && expOrder.toString().length >= 10
                    ? expOrder.toFixed(9)
                    : expOrder}
                </span>
              </div>
              <div className="report-row wr">
                <p>Processing invoices</p>
                <span>
                  £{" "}
                  {proInvoice && proInvoice.toString().length >= 10
                    ? proInvoice.toFixed(9)
                    : proInvoice}
                </span>
              </div>
              <div className="report-row wr">
                <p>Paying suppliers</p>
                <span>
                  £{" "}
                  {paySupp && paySupp.toString().length >= 10
                    ? paySupp.toFixed(9)
                    : paySupp}
                </span>
              </div>
              <div className="report-row pw">
                <p>Total Process Costs (year)</p>
                <span>
                  £{" "}
                  {totalCost && totalCost.toString().length >= 10
                    ? totalCost.toFixed(9)
                    : totalCost}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
