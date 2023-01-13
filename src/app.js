/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#thedomain").innerHTML = generateDomain();
};


let generateDomain = () => {
  
  //PARTS TO CONCATENATE
  let pronoun = ["the", "our", "this"];
  let adj = ["great", "big", "enormous", "short"];
  let noun = ["jogger", "racoon", "crypto-miner", "playstation-fan", "rabbit"];
  let ext = [".com", ".net", ".us", ".io", ".es", ".ar"];


  //FOR LOOP(S)

  let newArr=[]
  for(let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let x = 0; x < noun.length; x++) {
         for (let y = 0; y < ext.length; y++) {
           newArr.push(pronoun[i] + adj[j] + noun[x] + ext[y]);
          }
      }
    }
  }
  return newArr;
}
