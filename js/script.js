// //Async await
let humid=document.querySelector("#humidity")
let place=document.querySelector("#w-place")
let speed=document.querySelector("#speed")
let deg=document.querySelector("#wdeg")
let icon=document.querySelector("#w-icon")
let btn=document.querySelector("#icon-search")
btn.addEventListener("click",()=>{
    fetchData()
})

    async function fetchData() {
        const apiKey = "c173a06fda4634d705ee06f969f0f4a3";
        const city = document.getElementById('ip-1').value;
    
        let inputData=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
        let Data=await inputData.json();
        let finalData=Data;
        console.log(finalData)
        // Get current date and time
            let currentDate = new Date();
            let date = currentDate.toLocaleDateString(); // Format the date
            let time = currentDate.toLocaleTimeString(); // Format the time
            document.getElementById('date').innerText = date;
            document.getElementById('time').innerText = time;
            console.log(date, time);
        //weather temperature
            let w_temp=finalData.main.humidity
            humid.innerText=w_temp+" %";
            console.log(w_temp)
        //weather place
            let w_place=finalData.name
            place.innerText=w_place;
            console.log(w_place)
        //weather wind speed
            let w_speed=finalData.wind.speed
            speed.innerText=w_speed+" km/h";
            console.log(w_speed)
        //deg
            let w_deg=finalData.main.temp
            let w_deg_c=w_deg - 273.15;
            deg.innerText=Math.round(w_deg_c)+" °C";
            console.log(w_deg_c)


        //icon
        let w_icon=finalData.weather[0].icon;
        document.getElementById("w-icon").src=`https://openweathermap.org/img/wn/${w_icon}@2x.png`;
        console.log(w_icon)
    }