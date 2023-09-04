let info = document.querySelector(".info")
let timeBar = document.querySelector('#search-bar')
let main = document.querySelector(".main")

function weatherApp(presentCity){
    let p = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${presentCity}&appid=7909a3f6027a002f28a9f982feb7917c&units=metric`)
    p.then((response)=> {
    return response.json()}
    ).then((output)=>{
    try{
        let placeName = output.name
        let weatherPic = output.weather[0].icon
        let weatherEL = output.weather[0].description
        info.innerHTML = `
        <div class='min-max'>
            <span class="heading">${placeName}</span>
            <span class="temperature">${Math.floor(output.main.temp)}°c</span>
            <img class="imageJs" src="http://openweathermap.org/img/w/${weatherPic}.png">
            <h4>${weatherEL}</h4>
            <div id="weat">
                <div class='extra'>max/min temp:<br> <p>${output.main.temp_max}°c <br>${output.main.temp_min}°c</p></div>
                <div class='extra'>Wind-speed:<br> <p>${output.wind.speed}</p></div>
                <div class='extra'>Humidity:<br><p> ${output.main.humidity}</p></div>
                <div class='extra'>Pressure:<br> <p>${output.main.pressure}atm</p> </div>
            </div>
        </div>
        `  
        
    }catch(error){
        alert("Please,enter the name of the place and try again.")
    }
    })
}       
weatherApp("Solihull")

timeBar.addEventListener('click',()=>{
    let city = document.querySelector(".enterPlace").value
    weatherApp(`${city}`)
})

//for time zone output
setInterval(()=>{
    document.querySelector(".watch").textContent = Date()
},1000)