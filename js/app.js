let value = 0;

const countEl = document.getElementById("count");
const btnMinus = document.getElementById("btnMinus");
const btnPlus = document.getElementById("btnPlus");
const btnReset = document.getElementById("btnReset");

function render() {
  countEl.textContent = String(value);
}

btnMinus.addEventListener("click", () => {
  value--;
  render();
});

btnPlus.addEventListener("click", () => {
  value++;
  render();
});

btnReset.addEventListener("click", () => {
  value = 0;
  render();
});

render();
