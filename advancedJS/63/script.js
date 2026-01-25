
async function getWeather(city) {
    try {
        let apiKey = `7fe4febcf1088efce10cb29955d0120b`;

        let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        if (!raw.ok) {
            throw new Error("City not found");
        }
        let data = await raw.json();
        if(data.main.temp > 25) {
            console.log("It's warm in " + city);
        } else if(data.main.temp < 10) {
            console.log("It's cold in " + city);
        } else {
            console.log("The weather in " + city + " is moderate");
        }
        console.log(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
getWeather("London");