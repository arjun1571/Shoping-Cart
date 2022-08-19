document.getElementById("case-btn").addEventListener("click", function () {
  const caseInputFieald = document.getElementById("case-input");
  const caseStringValue = caseInputFieald.value;
  const caseNumberValue = parseInt(caseStringValue);

  const increseValue = caseNumberValue + 1;
  caseInputFieald.value = increseValue;
});
