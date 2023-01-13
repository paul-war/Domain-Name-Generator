/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext;

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#theexcuse").innerHTML = generateExcuse();
  });
  console.log("Hello!");
};

let generateExcuse = () => {
  let who = [
    "A yellow backhoe",
    "A bunch of sad clowns",
    "A cripto-miner",
    "The dog",
    "My grandma",
    "My brothers turtle",
    "My bird",
    "Master Splint",
    "Mister Miyagi",
    "A stubborn pidgeon"
  ];
  let action = [
    "pierced",
    "ate",
    "peed",
    "crushed",
    "broke",
    "stole",
    "chopped up"
  ];
  let what = [
    "my notebook",
    "my Github repository",
    "my homework",
    "the keys",
    "the car"
  ];
  let when = [
    "before the class",
    "right on time",
    "when I was fishing in the toilet",
    "during my lunch",
    "while I was praying",
    "despite I was sat on the throne",
    "while I was meditating"
  ];

  let whoindx = Math.floor(Math.random() * who.length);
  let actionindx = Math.floor(Math.random() * action.length);
  let whatindx = Math.floor(Math.random() * what.length);
  let whenindx = Math.floor(Math.random() * when.length);

  return (
    who[whoindx] +
    " " +
    action[actionindx] +
    " " +
    what[whatindx] +
    " " +
    when[whenindx]
  );
};
