const input_city = document.querySelector(".city")
const display_city = document.querySelector(".city_name")
const display_temperature = document.querySelector(".temperature")
const display_wind_speed = document.querySelector(".wind_speed")
const display_description = document.querySelector(".description")

async function get_weather(){
    try{
        const res =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input_city.value}&appid=496c698791ea225afcc26da35483087f`)
        if(!res.ok){
            // const div = document.createElement("div")
            // div.textContent = "Error During Fetching!!!"
            // document.body.appendChild(div)
            throw new Error("Invalid city name!!")
        }

        const data = await res.json()
        console.log(data)
        display_city.textContent = `${data.name}`
        const tempCelsius = (data.main.temp - 273.15).toFixed(2)
        display_temperature.textContent = ` Temperature : ${tempCelsius} °C`
        display_wind_speed.textContent = `Wind speed : ${data.wind.speed} m/s`    
        display_description.textContent = `Description : ${data.weather[0].description}`
    }
    catch(error){
        const err = document.createElement("div")
        err.textContent = `Error : ${error}`
        document.body.appendChild(err)
    }
}

document.querySelector(".search").addEventListener("click",()=>{
    get_weather()
})