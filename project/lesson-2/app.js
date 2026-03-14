const characters = [
  {
    name: "John Wick",
    age: 23,
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR113Y6SJsJwKO_e-6_ON-jSkOW6vujvmQzOg&s",
  },

  {
    name: "Shtriletz",
    age: 37,
  },
  {
    name: "Shrek",
    age: 45,
  },
  {
    name: "Naruto",
    age: 25,
    photo:
      "https://99px.ru/sstorage/86/2019/07/image_861907191324086935178.gif",
  },
  {
    name: "Maka",
    age: 32,
  },
  {
    name: "Sponge Bob",
    age: 35,
  },
  {
    name: "Gojo satoru",
    age: 25,
  },
  {
    name: "Saruto",
    age: 34,
  },
  {},
];

const defaultPhoto = (src =
  "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=");

characters.forEach((characters) => {
  const card = document.createElement("div");
  card.setAttribute("class", "card");

  card.innerHTML = `<div class = "card-photo"><img src="${characters.photo || defaultPhoto}" alt="${characters.name}"></div><h4>${characters.name}</h4> <span><i>age:</i>${characters.age}</span>`;
  document.body.appendChild(card);
});

const card = document.querySelector(".card");
card = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data/data.json");
  xhr.setReguestHeader("Content-type", "application/json");
  xhr.send();
};

console.log(xhr);
