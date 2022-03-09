var projectsObj = [
  {
    src: "./assets/nosql-social.png",
    name: "noSQL Backend Social Network",
    skill: "MongoDB, Node, Express",
    info: "A backend purely made for social and adding thoughts to a starter code client front end",
    repo: "https://github.com/imjord/NOSQL-SOCIAL-NETWORK-API",
  },

  {
    src: "./assets/coin.png",
    name: "coinvrt",
    skill: "Javascript, Jquery, Bootstrap, HTML, CSS",
    info: "A group project using a cyrpto api to like your favorite crypto currencies",
    repo: "https://github.com/imjord/coinvrt",
  },
  {
    src: "./assets/redux.png",
    name: "Redux ecommerce site",
    skill: "React redux",
    info: "An ecommerce website redone using redux",
    repo: "https://github.com/imjord/redux-challenge",
  },
  {
    src: "./assets/budget.png",
    name: "Budget Tracker PWA",
    skill: "Webpack,Service Worker, Javascript ",
    info: "A simple budget tracker that works offline PWA",
    repo: "https://github.com/imjord/Budget-Tracker",
  },
  {
    src: "./assets/csharpstaff.PNG",
    name: "C# Console Staff App",
    skill: "C#",
    info: "A C# console app for staff team members",
    repo: "https://github.com/imjord/Staff-Console-CSharp",
  },
  {
    src: "./assets/expo.PNG",
    name: "Mobile Image Share App EXPO",
    skill: "Javascript, Expo, React-Native",
    info: "A simple app made for your mobile device to share images from your photos",
    repo: "https://github.com/imjord/expo-imageShare",
  },
  {
    src: "./assets/express-node.png",
    name: "Express Note Taker",
    skill: "Javascript, Express, NodeJS",
    info: "A note taker using express routes, used a starter front end",
    repo: "https://github.com/imjord/Note-taker",
  },
  {
    src: "./assets/fooder.png",
    name: "Fooder",
    skill: "Javascript, NodeJS, Sequlize, ORM, HTML, CSS, Bootstrap",
    info: "A group project that I was the sole backend developer for. Created a site to like resturants",
    repo: "https://github.com/imjord/fooder_01",
  },
  {
    src: "./assets/games.PNG",
    name: "MVC Game database",
    skill: "Javascript, EJS, NodeJS, MongoDB",
    info: "A game database that you can add your games to.",
    repo: "https://github.com/imjord/Game-Database-MVC",
  },
  {
    src: "./assets/java.png",
    name: "Java Guessing Game GUI",
    skill: "Java",
    info: "A simple guessing game made with java. Has a GUI",
    repo: "https://github.com/imjord/GUI-Guessing-Game",
  },
  {
    src: "./assets/mysql.PNG",
    name: "mysql Voting App",
    skill: "Javascript, NodeJS, mySQL",
    info: "A voting backend database made with mysql and express",
    repo: "https://github.com/imjord/mySQL-voting",
  },
  {
    src: "./assets/node-noteakercrud.png",
    name: "Node CRUD",
    skill: "Javascript, NodeJS, CRUD, Express",
    info: "A note taker app made with CRUD using express",
    repo: "https://github.com/imjord/node-noteTaker",
  },
  {
    src: "./assets/port.PNG",
    name: "React Portfolio",
    skill: "Javascript, React",
    info: "My portfolio. but in react",
    repo: "https://github.com/imjord/React-Port",
  },
  {
    src: "./assets/quiz.png",
    name: "Javascript Quiz App",
    skill: "Javascript",
    info: "A quiz made in javascript",
    repo: "https://github.com/imjord/quiz-app",
  },
  {
    src: "./assets/quote.PNG",
    name: "Quote Generator",
    skill: "Javascript, HTML, CSS",
    info: "Quote Generator using an api to generate quotes. Can also tweet them",
    repo: "https://github.com/imjord/Quote-Generator",
  },
  {
    src: "./assets/rpg-node.PNG",
    name: "Node RPG",
    skill: "Javascript, NodeJS, OOP",
    info: "Using javascript OOP to make a rpg",
    repo: "https://github.com/imjord/jest-another-RPG",
  },
  {
    src: "./assets/run.PNG",
    name: "run buddy",
    skill: "HTML, CSS",
    info: "A website for a running company",
    repo: "https://github.com/imjord/run-buddy",
  },
  {
    src: "./assets/passGen.png",
    name: "Password Generator",
    skill: "HTML, CSS, Javascript",
    info: "Asked a series of questions to create a randomly generated password",
    repo: "https://github.com/imjord/PasswordGenerator",
  },
  {
    src: "./assets/read.PNG",
    name: "ReadMe Generator",
    skill: "NodeJS",
    info: "A readmen generator for your projects",
    repo: "https://github.com/imjord/Professional-README-Generator",
  },
  {
    src: "./assets/scroll.PNG",
    name: "infinite scroll",
    skill: "Html, css, javascript",
    info: "Able to infinitly scroll through unsplash photos api",
    repo: "https://github.com/imjord/Infinite-Scroll",
  },
  {
    src: "./assets/wayo.png",
    name: "Ecommerce Wayo website",
    skill: "mongodb, javascript, graphql, html, css, react, express",
    info: "An ecommerce website to buy clothing. made the backend for this group project",
    repo: "https://github.com/imjord/wayo",
  },
  {
    src: "./assets/weather.PNG",
    name: "Weather Site",
    skill: "HTML, CSS, Javascript",
    info: "A website made with openweather api",
    repo: "https://github.com/imjord/Weather-Dashboard",
  },
  {
    src: "./assets/work.PNG",
    name: "Workscheduler",
    skill: "HTML, CSS,Javascript, Moment.js",
    info: "A website for making a busy schedule",
    repo: "https://github.com/imjord/Work-day-scheduler",
  },
];

var imageEl = document.getElementById("project-img");
var nameEl = document.getElementById("project-name");
var skillsEl = document.getElementById("skills");
var infoEl = document.getElementById("info");
var repoEl = document.getElementById("repo-link");
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
  repoEl.setAttribute("href", item.repo);
  repoEl.setAttribute("target", "_blank");
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
