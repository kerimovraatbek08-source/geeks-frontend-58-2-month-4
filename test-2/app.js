// 1) Извлечение чисел
function extractNumbers(str) {
  return str
    .split("")
    .filter((el) => !isNaN(el) && el !== " ")
    .map(Number);
}
console.log("Задание 1:", extractNumbers("a1fg5hj6"));

// 2) Фибоначчи с задержкой
function fibonacciWithDelay(a = 0, b = 1) {
  if (a > 144) return;

  console.log("Фибоначчи:", a);

  setTimeout(() => {
    fibonacciWithDelay(b, a + b);
  }, 1000);
}
fibonacciWithDelay();

// 3) API запрос
async function getProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    data.forEach((item) => {
      console.log("Title:", item.title);
    });
  } catch (error) {
    console.error("Ошибка:", error);
  }
}
getProducts();

// 4) Делегирование событий
document.getElementById("buttons").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    document.body.style.background = e.target.textContent;
  }
});

// 5) Показать / скрыть блок
const btn = document.getElementById("toggleBtn");
const box = document.getElementById("box");

btn.onclick = () => {
  box.style.display = box.style.display === "none" ? "block" : "none";
};

// 6) Счётчик
let count = 0;
const counter = document.getElementById("counter");

const interval = setInterval(() => {
  count++;
  counter.textContent = count;

  if (count === 100) {
    clearInterval(interval);
  }
}, 1);

// 7) GET запрос по кнопке
document.getElementById("getData").onclick = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    console.log("JSON:", data);
  } catch (error) {
    console.error("Ошибка:", error);
  }
};
