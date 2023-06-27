const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c16811862fmshfecdf3a2a91850ap183cc9jsnf44e32318a4d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
var loader= document.getElementById("preloader");
const getWeather = (city) =>{
    loader.style.display="block";
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
    .then(response => response.json())
    .then(response => {    
   //cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML =response.temp
    temp2.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    humidity2.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_temp
    wind_speed.innerHTML = response.wind_speed
    wind_speed2.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    const date = new Date(response.sunrise * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();    
    sunrise.innerHTML =  `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;    
    const dateSunset = new Date(response.sunset * 1000);
    const hoursSunset = dateSunset.getHours();
    const minutesSunSet = dateSunset.getMinutes();
    const secondsSunSet = dateSunset.getSeconds();
    sunset.innerHTML = `${hoursSunset.toString().padStart(2, '0')}:${minutesSunSet.toString().padStart(2, '0')}:${secondsSunSet.toString().padStart(2, '0')}`;  
    loader.style.display="none";
    console.log(response)
})
.catch(err => console.log(err));
}

submitId.addEventListener("click",(e)=>{
    e.preventDefault();
    getWeather(city.value);
})

getWeather("Delhi");

var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src="sun_318-900565.png";
    }else{
        icon.src="moonicon.png";
        
    }
}

