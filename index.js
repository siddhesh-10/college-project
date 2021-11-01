fetch("https://api.openweathermap.org/data/2.5/weather?q=kolhapur&units=metric&appid=b0698a4fb098eea5152b02c54bb46585")
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});
function appendData(data) {
var mainContainer = document.getElementById("weather");

    var div = document.createElement("div");
    const desc=data.weather[0].description;
    const icon=data.weather[0].icon;
    const feel=data.main.feels_like;
    const temperature=data.main.temp;
    const imageURL="http://openweathermap.org/img/wn/"+icon+"@2x.png";
    div.innerHTML = "<p>"+desc+"  <img src="+imageURL+"></p><p> feels like "+feel+ "<span>&#8451;</span><p> temperature "+temperature+"<span>&#8451;</span>";
    mainContainer.appendChild(div);

}