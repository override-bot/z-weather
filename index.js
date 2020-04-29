let key = "ce2b708b22a04a488bd5ce83e7889109";

function parseJson() {
    //var symbol = document.getElementById('symbol').value;
    let link = "https://api.weatherstack.com/current?access_key=700caecc3ef3ca305c1308d2e08a8c3f&query=enugu";

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
    image.src = response.current.weather_icons[0];

    image.className = 'image';
    container.appendChild(image);
    var temp = document.createElement('p')
    temp.className = 'temp';
    temp.innerHTML = `${response.current.temperature}&#176`;
    container.appendChild(temp);
    var city = document.createElement('p')
    city.className = 'city';
    city.innerHTML = `${response.location.name}, ${response.location.country}`;
    container.appendChild(city);

    document.getElementById('visibility').innerHTML = `${response.current.visibility}km`;
    document.getElementById('speed').innerHTML = `${response.current.wind_speed}km/h`;
    document.getElementById('cover').innerHTML = `${response.current.cloudcover}`;
    document.getElementById('humid').innerHTML = `${response.current.humidity}`;


}