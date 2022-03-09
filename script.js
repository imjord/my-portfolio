var projectsObj = [
  {
    src: "./assets/nosql-social.png",
    name: "noSQL Backend Social Network",
    skill: "MongoDB, Node, Express",
    info: "A backend purely made for social and adding thoughts to a starter code client front end",
  },

  {
    src: "./assets/coin.png",
    name: "coinvrt",
    skill: "Javascript, Jquery, Bootstrap, HTML, CSS",
    info: "A group project using a cyrpto api to like your favorite crypto currencies",
  },
  {
    src: "./assets/budget.png",
    name: "Budget Tracker PWA",
    skill: "Webpack,Service Worker, Javascript ",
    info: "A simple budget tracker that works offline PWA",
  },
  {
    src: "./assets/csharpstaff.PNG",
    name: "C# Console Staff App",
    skill: "C#",
    info: "A C# console app for staff team members",
  },
  {
    src: "./assets/expo.PNG",
    name: "Mobile Image Share App EXPO",
    skill: "Javascript, Expo, React-Native",
    info: "A simple app made for your mobile device to share images from your photos",
  },
  {
    src: "./assets/express-node.png",
    name: "Express Note Taker",
    skill: "Javascript, Express, NodeJS",
    info: "A note taker using express routes, used a starter front end",
  },
  {
    src: "./assets/fooder.png",
    name: "Fooder",
    skill: "Javascript, NodeJS, Sequlize, ORM, HTML, CSS, Bootstrap",
    info: "A group project that I was the sole backend developer for. Created a site to like resturants",
  },
  {
    src: "./assets/games.PNG",
    name: "MVC Game database",
    skill: "Javascript, EJS, NodeJS, MongoDB",
    info: "A game database that you can add your games to.",
  },
  {
    src: "./assets/java.png",
    name: "Java Guessing Game GUI",
    skill: "Java",
    info: "A simple guessing game made with java. Has a GUI",
  },
  {
    src: "./assets/mysql.PNG",
    name: "mysql Voting App",
    skill: "Javascript, NodeJS, mySQL",
    info: "A voting backend database made with mysql and express",
  },
  {
    src: "./assets/node-noteakercrud.png",
    name: "Node CRUD",
    skill: "Javascript, NodeJS, CRUD, Express",
    info: "A note taker app made with CRUD using express",
  },
  {
    src: "./assets/port.PNG",
    name: "React Portfolio",
    skill: "Javascript, React",
    info: "My portfolio. but in react",
  },
  {
    src: "./assets/quiz.png",
    name: "Javascript Quiz App",
    skill: "Javascript",
    info: "A quiz made in javascript",
  },
  {
    src: "./assets/quote.PNG",
    name: "Quote Generator",
    skill: "Javascript, HTML, CSS",
    info: "Quote Generator using an api to generate quotes. Can also tweet them",
  },
  {
    src: "./assets/rpg-node.PNG",
    name: "Node RPG",
    skill: "Javascript, NodeJS, OOP",
    info: "Using javascript OOP to make a rpg",
  },
  {
    src: "./assets/run.PNG",
    name: "run buddy",
    skill: "HTML, CSS",
    info: "A website for a running company",
  },
  {
    src: "./assets/scroll.PNG",
    name: "infinite scroll",
    skill: "Html, css, javascript",
    info: "Able to infinitly scroll through unsplash photos api",
  },
  {
    src: "./assets/wayo.png",
    name: "Ecommerce Wayo website",
    skill: "mongodb, javascript, graphql, html, css, react, express",
    info: "An ecommerce website to buy clothing. made the backend for this group project",
  },
  {
    src: "./assets/weather.PNG",
    name: "Weather Site",
    skill: "HTML, CSS, Javascript",
    info: "A website made with openweather api",
  },
  {
    src: "./assets/work.PNG",
    name: "Workscheduler",
    skill: "HTML, CSS,Javascript, Moment.js",
    info: "A website for making a busy schedule",
  },
];

var imageEl = document.getElementById("project-img");
var nameEl = document.getElementById("project-name");
var skillsEl = document.getElementById("skills");
var infoEl = document.getElementById("info");
var nextBtn = document.querySelector(".next-btn");
var prevBtn = document.querySelector(".prev-btn");

let currentItem = 0;

// when document loads first item on array

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

function showPerson(person) {
  const item = projectsObj[person];

  imageEl.setAttribute("src", item.src);
  nameEl.textContent = item.name;
  skillsEl.textContent = item.skill;
  infoEl.textContent = item.info;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  showPerson(currentItem);
});
