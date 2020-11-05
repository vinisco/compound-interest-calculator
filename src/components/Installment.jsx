import React from "react";
import { isNegative } from "../helpers/functions.js";

export default function Installment({
  currentMonth,
  currentCapital,
  currentFee,
  currentIncome,
}) {
  let style = isNegative(currentFee);

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <span>{currentMonth}</span>
          </td>
          <td
            style={{
              color: "green",
              fontWeight: "bold",
              justifyContent: "space-between",
            }}
          >
            <span style={style}>
              {currentCapital.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <br />
            <span style={style}>
              {currentIncome.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <br />
            <span style={{ color: "blue", fontWeight: "bold" }}>
              <span style={style}>{`${currentFee.toFixed(2)}%`}</span>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
