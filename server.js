const express=require("express");

const app=express();
var bodyParser = require('body-parser');

const https=require("https");

// app.use(bodyParser.urlencoded({  
//   extended: true              
// }));                            
// app.use(bodyParser.json());

app.get("/", function(req,res){
 
 const url="https://api.openweathermap.org/data/2.5/weather?q=kolhapur&units=metric&appid=b0698a4fb098eea5152b02c54bb46585";
 https.get(url,function(response){
   console.log(response);
    response.on("data",function(data){
    const weather=  JSON.parse(data);
    //console.log(weather);
    const temperature=weather.main.temp;
    const desc=weather.weather[0].description;
    const icon=weather.weather[0].icon;
    const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png";
    res.write("<h1>"+desc+" </h1>");
    res.write("<img src=" + imageURL  + ">");
    res.send();
  //   app.post('/data', function(reqq, ress) {
     
  //    ress.send(weather);
  
  // })
   
    })
 })

 //res.send("work");
})


app.listen(3000, function(){
 console.log("tryl");
});
//04n
//https://api.openweathermap.org/data/2.5/weather?q=kolhapur&units=metric&appid=b0698a4fb098eea5152b02c54bb46585