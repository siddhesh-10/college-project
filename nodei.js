



const { Client } = require("quotebook-api");
const client = Client({ apiKey: "api-key122345" });
var quote="tree";
// Promise
client
.fetchAllTags()
.then(response => console.log(response.data.result))
.catch(e => console.log(e));
  
// Async-Await
(async () => {
  try {
    const response = await client.fetchRandom();//console.log(response.data.result.quote);
   quote = response.data.result.quote; console.log(quote);

  } catch (e) {
    return console.log(e);
  }
 })();
console.log(quote);
const superheroes = require('superheroes');
 
superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]
 
quote=superheroes.random();console.log(quote);
document.getElementById("quote").innerHTML = quote;


