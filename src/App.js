import React from "react";
import Form from "./components/Form";
import Installments from "./components/Installments";
import { useState } from "react";

export default function App() {
  const [startCapital, setStartCapital] = useState(0);
  const [monthlyInstallments, setMonthlyInstallments] = useState(0);
  const [monthlyFees, setMonthlyFees] = useState(0);

  const handleInputCapital = (event) => {
    setStartCapital(+event.target.value);
  };
  const handleInputFees = (event) => {
    setMonthlyFees(+event.target.value);
  };
  const handleInputInstallments = (event) => {
    setMonthlyInstallments(+event.target.value);
  };

  return (
    <div className="container">
      <h1 className="center">React - Juros Compostos</h1>
      <div style={{ marginTop: "60px" }} className="  row col s12">
        <Form label="Capital Inicial" onChange={handleInputCapital}></Form>
        <Form label="Taxa de Juros Mensal" onChange={handleInputFees}></Form>
        <Form label="Período (meses)" onChange={handleInputInstallments}></Form>
      </div>
      <div style={{ marginTop: "30px" }} className="row col s24">
        <Installments
          capital={parseFloat(startCapital)}
          fees={parseFloat(monthlyFees)}
          months={parseInt(monthlyInstallments)}
        />
      </div>
    </div>
  );
}
