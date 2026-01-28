const minIncomeForDuplex = 60000;
    const minCreditScoreForDuplex = 700;

    const minIncomeForCondo = 45000;
    const minCreditScoreForCondo = 680;

    const minIncomeForCar = 30000;
    const minCreditScoreForCar = 650;

    function getLoanMessage(annualIncome, creditScore) {
      if (annualIncome >= minIncomeForDuplex && creditScore >= minCreditScoreForDuplex) {
        return "You qualify for a duplex, condo, and car loan.";
      } else if (annualIncome >= minIncomeForCondo && creditScore >= minCreditScoreForCondo) {
        return "You qualify for a condo and car loan.";
      } else if (annualIncome >= minIncomeForCar && creditScore >= minCreditScoreForCar) {
        return "You qualify for a car loan.";
      } else {
        return "You don't qualify for any loans.";
      }
    }

    function checkLoan() {
      const income = Number(document.getElementById("income").value);
      const score = Number(document.getElementById("score").value);
      const resultDiv = document.getElementById("result");

      if (!income || !score) {
        resultDiv.className = "alert alert-warning mt-3";
        resultDiv.textContent = "Please enter both income and credit score.";
        resultDiv.classList.remove("d-none");
        return;
      }

      const message = getLoanMessage(income, score);

      resultDiv.className = "alert alert-info mt-3";
      resultDiv.textContent = message;
      resultDiv.classList.remove("d-none");
    }