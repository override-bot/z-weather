let key = "8ae21bd13ed8a84eb5455a3699b91c3d";
var time = new Date().getHours();


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else if (!(navigator.geolocation)) {
        console.log('location not found');
    }
}

function showPosition(position) {
    window.lat = position.coords.latitude;
    window.lon = position.coords.longitude;
    window.alert("Location Acquired: lat:" + lat + " lng:" + lon);
    parseJson2();
    parseJson();

}

function parseJson() {
    //var symbol = document.getElementById('symbol').value;
    let link = "https://api.openweathermap.org/data/2.5/weather?lat=" + window.lat + "&lon=" + window.lon + "139&units=metric&apikey=8ae21bd13ed8a84eb5455a3699b91c3d";
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
    image.src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`;

    image.className = 'image';
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

function parseJson2() {
    let link = "https://api.openweathermap.org/data/2.5/onecall?lat=" + window.lat + "&lon=" + window.lon + "&units=metric&appid=8ae21bd13ed8a84eb5455a3699b91c3d";
    let request = new XMLHttpRequest();
    request.open('GET', link);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        const response = request.response;
        console.log(response)
        showForecast(response);

    }
}

function showForecast(response) {
    var nextHour = response.hourly[0].dt;
    var nextHourHuman = convert_unix(nextHour);
    document.getElementById('nextHour').innerHTML = nextHourHuman;
    var nextIcon = `http://openweathermap.org/img/wn/${response.hourly[0].weather[0].icon}@2x.png`
    document.getElementById('icon').src = nextIcon;
    document.getElementById('nextTemp').innerHTML = `${response.hourly[0].temp}&#176`;
    var nextHour2 = response.hourly[1].dt;
    var nextHourHuman2 = convert_unix(nextHour2);
    document.getElementById('nextHour2').innerHTML = nextHourHuman2;
    var nextIcon2 = `http://openweathermap.org/img/wn/${response.hourly[1].weather[0].icon}@2x.png`
    document.getElementById('icon2').src = nextIcon2;
    document.getElementById('nextTemp2').innerHTML = `${response.hourly[1].temp}&#176`;
    var nextHour3 = response.hourly[2].dt;
    var nextHourHuman3 = convert_unix(nextHour3);
    document.getElementById('nextHour3').innerHTML = nextHourHuman3;
    var nextIcon3 = `http://openweathermap.org/img/wn/${response.hourly[2].weather[0].icon}@2x.png`
    document.getElementById('icon3').src = nextIcon3;
    document.getElementById('nextTemp3').innerHTML = `${response.hourly[2].temp}&#176`;
}

function convert_unix(time) { // This will convert EPOCH time or Unix time into Human readable time
    var date = new Date(time * 1000);
    var day = "0" + date.getDate();
    var mon = date.getMonth();
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var yr = date.getFullYear();
    var hours = date.getHours();

    var min = "0" + date.getMinutes();
    return hours + ":" + min.substr(-2);
}