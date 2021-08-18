function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// ! ADD BUTTON

function addButton(inputId, priceId) {
  const price = parseInt(document.getElementById(priceId).innerText);

  const newValue = parseInt(document.getElementById(inputId).value) + 1;
  document.getElementById(inputId).value = newValue;

  if (priceId == "price1") {
    let newPrice = newValue * 1299;

    document.getElementById(priceId).innerText = newPrice;
  } else {
    let newPrice = newValue * 59;

    document.getElementById(priceId).innerText = newPrice;
  }

  document.getElementById("subtotal").innerText =
    parseInt(document.getElementById("case-input1").value) * 1299 +
    parseInt(document.getElementById("case-input2").value) * 59;

  // ! TAX CALCULATION

  document.getElementById("tax").innerText = round(
    parseInt(document.getElementById("subtotal").innerText) * 0.1,
    1
  );

  // ! TOTAL CALCULATION

  document.getElementById('total').innerText = parseInt(document.getElementById("subtotal").innerText) + parseFloat(document.getElementById("tax").innerText)
}

// ! REMOVE BUTTON

function removeButton(inputId, priceId) {
  const inputValue = parseInt(document.getElementById(inputId).value);
  // const price = parseInt(document.getElementById(priceId).innerText);

  if (inputValue > 0) {
    const newValue = inputValue - 1;
    document.getElementById(inputId).value = newValue;

    if (priceId == "price1") {
      let newPrice = newValue * 1299;

      document.getElementById(priceId).innerText = newPrice;
    } else {
      let newPrice = newValue * 59;

      document.getElementById(priceId).innerText = newPrice;
    }
  }

  // ! SUBTOTAL CALCULATION

  document.getElementById("subtotal").innerText =
    parseInt(document.getElementById("case-input1").value) * 1299 +
    parseInt(document.getElementById("case-input2").value) * 59;

  // ! TAX CALCULATION

  document.getElementById("tax").innerText = round(
    parseInt(document.getElementById("subtotal").innerText) * 0.1,
    1
  );

  // ! TOTAL CALCULATION

  document.getElementById('total').innerText = parseInt(document.getElementById("subtotal").innerText) + parseFloat(document.getElementById("tax").innerText)
}
