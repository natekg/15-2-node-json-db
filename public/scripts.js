const add = () => {
  document.getElementById("add-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const firstNumber = parseFloat(
      document.getElementById("firstNumber").value
    );
    const secondNumber = parseFloat(
      document.getElementById("secondNumber").value
    );

    const addResult = firstNumber + secondNumber;
    console.log(addResult);

    document.getElementById("result").innerText = "Result: " + addResult;

    updateJson("add-form", addResult);
  });
};

const multiply = () => {
  document
    .getElementById("multiply-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const firstNumber = parseFloat(
        document.getElementById("m-firstNumber").value
      );
      const secondNumber = parseFloat(
        document.getElementById("m-secondNumber").value
      );

      const multiplyResult = firstNumber * secondNumber;
      console.log(firstNumber * secondNumber);

      document.getElementById("multiply-result").innerText =
        "Result: " + multiplyResult;

      updateJson("multiply-form", multiplyResult);
    });
};

const createProductID = () => {
  document
    .getElementById("product-id-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const productType = document.getElementById("product-type").value;
      console.log(productType);
      const productPrefix = (productType) => {
        if (productType === "powertrain") {
          return "PT";
        }
        if (productType === "fueling") {
          return "FF";
        }
        if (productType === "electrical") {
          return "EE";
        }
        if (productType === "etc") {
          return "EZ";
        } else {
          return "";
        }
      };

      console.log(productPrefix(productType));

      const productIdentifier =
        document.getElementById("product-identifier").value;

      const concatenatedResult = productPrefix(productType) + productIdentifier;

      document.getElementById("product-id-result").innerText =
        "Result: " + concatenatedResult;

      updateJson("product-id-form", concatenatedResult);
    });
};

// This is a new function that runs at the end of all the other functions
// to update the data into our JSON file
const updateJson = (formId, resultValue) => {
  const now = new Date();
  const dateTimeString = now.toISOString();

  fetch("/updateDB", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      timestamp: dateTimeString,
      formId: formId,
      value: resultValue,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
};

document.addEventListener("DOMContentLoaded", function () {
  add();
  multiply();
  createProductID();
  // Removed the updateJson() call here because it's not necessary and was incorrect
});
