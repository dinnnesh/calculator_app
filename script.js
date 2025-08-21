const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let input = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "C") {
      input = "";
      display.textContent = "0";
    } else if (value === "=") {
      try {
        input = eval(input).toString();
        display.textContent = input;
      } catch {
        display.textContent = "Error";
        input = "";
      }
    } else {
      input += value;
      display.textContent = input;
    }
  });
});
