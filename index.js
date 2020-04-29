let key = "ce2b708b22a04a488bd5ce83e7889109";

function parseJson() {
    //var symbol = document.getElementById('symbol').value;
    let link = "https://api.weatherbit.io/v2.0/current?city=italy&key=ce2b708b22a04a488bd5ce83e7889109";

    let request = new XMLHttpRequest();
    request.open('GET', link);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        const response = request.response;
        console.log(response)
        showWeather(response);

    }
}

function showWeather(response) {
    var container = document.getElementById('data');
    var image = document.createElement('i');
    /** if (response.data[0].weather.description == "Few clouds") {
         image.src = "https://www.metaweather.com/static/img/weather/ico/hc.ico";
     } else if (response.data[0].weather.description == "Clear Sky") {
         image.src = "https://www.metaweather.com/static/img/weather/ico/c.ico"
     } else if (response.data[0].weather.description == "Broken clouds") {
         image.src = "https://www.metaweather.com/static/img/weather/ico/hc.ico"
     } else if (response.data[0].weather.description == "Overcast clouds") {
         image.src = "https://www.metaweather.com/static/img/weather/ico/hc.ico"
     }**/
    image.className = response.data[0].weather.icon;
    container.appendChild(image);
    var temp = document.createElement('p')
    temp.className = 'temp';
    temp.innerHTML = `${response.data[0].temp}&#176`;
    container.appendChild(temp);
    var city = document.createElement('p')
    city.className = 'city';
    city.innerHTML = `${response.data[0].city_name}, ${response.data[0].country_code}`;
    container.appendChild(city);

}