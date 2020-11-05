function capitalIncome(capital, fee, months) {
  let installmentVector = [];
  let installment = {
    currentMonth: "",
    currentCapital: "",
    currentIncome: "",
    currentFee: "",
  };
  for (let i = 0; i < months; i++) {
    installment = {
      currentMonth: i + 1,
      currentCapital: capital * Math.pow(1 + fee / 100, i + 1),
      currentIncome: capital * Math.pow(1 + fee / 100, i + 1) - capital,
      currentFee:
        ((capital * Math.pow(1 + fee / 100, i + 1) - capital) / capital) * 100,
    };
    installmentVector.push(installment);
  }
  return installmentVector;
}

function isNegative(fee) {
  if (fee < 0) return { color: "red" };
}

export { capitalIncome, isNegative };
