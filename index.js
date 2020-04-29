let key = "8ae21bd13ed8a84eb5455a3699b91c3d";

function parseJson() {
    //var symbol = document.getElementById('symbol').value;
    let link = "https://api.openweathermap.org/data/2.5/weather?q=enugu&units=metric&apikey=8ae21bd13ed8a84eb5455a3699b91c3d";
    var cityName = 'enugu';
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
    var image = document.createElement('img');
    image.className = 'image';
    image.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;


    container.appendChild(image);
    var temp = document.createElement('p')
    temp.className = 'temp';
    temp.innerHTML = `${response.main.temp}&#176`;
    container.appendChild(temp);
    var city = document.createElement('p')
    city.className = 'city';
    city.innerHTML = `${response.name}, ${response.sys.country}`;
    container.appendChild(city);

    document.getElementById('visibility').innerHTML = `${response.wind.deg}&#176`;
    document.getElementById('speed').innerHTML = `${response.wind.speed}km/h`;
    document.getElementById('cover').innerHTML = `${response.main.pressure}`;
    document.getElementById('humid').innerHTML = `${response.main.humidity}`;


}