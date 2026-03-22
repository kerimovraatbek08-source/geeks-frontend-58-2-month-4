const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailButton.onclick = () => {
  if (regExp.test(gmailInput.value)) {
    gmailResult.innerText = "OK, GOOD!";
    gmailResult.style.color = "green";
  } else {
    gmailResult.innerText = "NO, ERROR X(";
    gmailResult.style.color = "red";
  }
};

// ===== Движение блока =====
const childBlock = document.querySelector(".child_block");

let positionX = 0;
let positionY = 0;

const moveChildBlock = () => {
  if (positionX < 448 && positionY === 0) {
    positionX++;
    childBlock.style.left = `${positionX}px`;
  } else if (positionX >= 448 && positionY < 448) {
    positionY++;
    childBlock.style.top = `${positionY}px`;
  } else if (positionY >= 448 && positionX > 0) {
    positionX--;
    childBlock.style.left = `${positionX}px`;
  } else if (positionX === 0 && positionY > 0) {
    positionY--;
    childBlock.style.top = `${positionY}px`;
  }
  setTimeout(moveChildBlock, 5);
};
moveChildBlock();

// ===== Таймер =====
const seconds = document.querySelector("#seconds");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let interval;
let secs = 0;

startBtn.onclick = () => {
  if (!interval) {
    interval = setInterval(() => {
      secs++;
      seconds.innerText = secs;
    }, 1000);
  }
};

stopBtn.onclick = () => {
  clearInterval(interval);
  interval = null;
};

resetBtn.onclick = () => {
  clearInterval(interval);
  interval = null;
  secs = 0;
  seconds.innerText = 0;
};

// ===== Загрузка characters.json =====
const list = document.querySelector(".characters-list");
const defaultPhoto =
  "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg";

fetch("../data/characters.json")
  .then((res) => {
    if (!res.ok) throw new Error("Ошибка загрузки characters.json");
    return res.json();
  })
  .then((data) => {
    data.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${item.photo || defaultPhoto}">
        <h3>${item.name}</h3>
        <p>Age: ${item.age}</p>
      `;

      list.append(card);
    });
  })
  .catch((err) => console.log(err));

fetch("../data/any.json")
  .then((res) => {
    if (!res.ok) throw new Error("Ошибка загрузки any.json");
    return res.json();
  })
  .then((data) => console.log("ANY JSON:", data))
  .catch((err) => console.log(err));
