const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

gmailButton.onclick = () => {
  if (regExp.test(gmailInput.value)) {
    gmailResult.innerText = "OK, GOOD!";
    gmailResult.style.color = "green";
  } else {
    gmailResult.innerText = "NO,ERROR X(";
    gmailResult.style.color = "red";
  }
};

const parentBlock = document.querySelector("#parent_block");
const childBlock = document.querySelector("#child_block");
let positionX = 0;

function moveBlock() {
  const maxPath = parentBlock.clientWidth - childBlock.clientWidth;

  positionX += 2;

  childBlock.style.left = `${positionX}px`;

  if (positionX < maxPath) {
    requestAnimationFrame(moveBlock);
  } else {
    childBlock.style.left = `${maxPath}px`;
    console.log("Движение завершено");
  }
}

moveBlock();
