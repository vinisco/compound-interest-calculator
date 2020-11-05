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
            <div className="col s2" key={currentMonth}>
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
