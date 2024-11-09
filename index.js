const btnContainer = document.querySelectorAll(".btn-container button");
const screen = document.querySelector("#screen p");
let currentInput = "";
let prevInput = "";
let operator = "";
let result = 0;

btnContainer.forEach((btn) => {
  btn.addEventListener("mousedown", () => {
    btn.classList.add("pressed");
  });
  btn.addEventListener("mouseup", () => {
    btn.classList.remove("pressed");
  });
  btn.addEventListener("mouseleave", () => {
    btn.classList.remove("pressed");
  });
  btn.addEventListener("click", () => {
    const btnValue = btn.textContent;
    if (!isNaN(btnValue) || btnValue === ".") {
      currentInput += btnValue;
      screen.textContent = currentInput;
    } else if (
      btnValue === "+" ||
      btnValue === "-" ||
      btnValue === "x" ||
      btnValue === "/"
    ) {
      if (prevInput && currentInput && operator) {
        result = performCalculation(
          parseFloat(prevInput),
          parseFloat(currentInput),
          operator
        );
        screen.textContent = result;
        prevInput = result.toString();
      } else {
        prevInput = currentInput;
      }
      operator = btnValue;
      currentInput = "";
    } else if (btnValue === "=") {
      const prev = parseFloat(prevInput);
      const current = parseFloat(currentInput);
      result = performCalculation(prev, current, operator);
      console.log(result);
      screen.textContent = result;
      currentInput = result.toString();
      operator = "";
    }
  });
});

function performCalculation(prev, current, operator) {
  switch (operator) {
    case "+":
      return prev + current;
    case "-":
      return prev - current;
    case "x":
      return prev * current;
    case "/":
      return prev / current;
  }
}
