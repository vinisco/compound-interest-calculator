import React from "react";

import Installment from "./Installment";
import { capitalIncome } from "../helpers/functions.js";

export default function Installments({ capital, fees, months }) {
  const data = capitalIncome(capital, fees, months);
  return (
    <div>
      {data.map(
        ({ currentMonth, currentCapital, currentFee, currentIncome }) => {
          return (
            <div style={style} className="col s2" key={currentMonth}>
              <Installment
                currentMonth={currentMonth}
                currentCapital={currentCapital}
                currentFee={currentFee}
                currentIncome={currentIncome}
              />
            </div>
          );
        }
      )}
    </div>
  );
}
const style = {
  marginTop: "10px",
  border: "1px solid",
  borderRadius: "4px",
  justifyContent: "space-between",
  margin: "4px",
  alignItems: "center",
};
