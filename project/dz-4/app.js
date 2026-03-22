const container = document.querySelector(".characters");

const request = new XMLHttpRequest();
request.open("GET", "data/characters.json");

request.onload = () => {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);

    data.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>Возраст: ${item.age}</p>
      `;

      container.append(card);
    });
  } else {
    console.log("Ошибка загрузки JSON");
  }
};

request.send();
