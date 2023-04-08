import { useState } from "react";
import "./App.css";

function App() {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(10);
  const [fees, setFees] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [emi, setEmi] = useState(0);

  const updateEMI = () => {};

  const updateDownPayment = () => {};

  const calculateEMI = () => {};

  return (
    <div className="app">
      <span className="title" style={{ fontSize: 30, marginTop: 10 }}>
        EMI Calculator
      </span>

      <span className="title">Total Cost of Asset</span>
      <input
        type="numbet"
        value={cost}
        onChange={(e) => e.target.value}
        placeholder="Total Cost of Asset"
      />

      <span className="title">Interest Rate (in %)</span>
      <input
        type="numbet"
        value={interest}
        onChange={(e) => e.target.value}
        placeholder="Interest Rate (in %)"
      />

      <span className="title">Processing Fee (in %)</span>
      <input
        type="numbet"
        value={fees}
        onChange={(e) => e.target.value}
        placeholder="Processing Fee (in %)"
      />
      <div>

      <span className="title">Down Payment</span>
      <input
        className="slider"
        type="range"
        min={0}
        max={cost}
        value={downPayment}
        onChange={updateEMI}
      />
      <div className="lables">
        <label htmlFor="">0%</label>
        <b>{downPayment}</b>
        <label htmlFor="">100%</label>
      </div>
      </div>

      <div>
      <span className="title">Loan per Month</span>
      <input
        className="slider"
        type="range"
        min={calculateEMI(cost)}
        max={calculateEMI(0)}
        value={emi}
        onChange={updateDownPayment}
      />
      
      <div className="lables">
        <label >{calculateEMI(cost)}</label>
        <b>{downPayment}</b>
        <label>{calculateEMI(0)}</label>
      </div>

      </div>


      <span className="title">Tenure</span>
    </div>
  );
}

export default App;
