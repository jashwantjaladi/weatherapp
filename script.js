const search=document.getElementById("search")
const submit=document.getElementById("submit")
const locate=document.querySelector(".location")
const country=document.querySelector(".country")
const region=document.querySelector(".region")
const conditions=document.querySelector(".conditions")
const tempC=document.querySelector(".tempC")
const feelslikeC=document.querySelector(".feelslikeC")
const humidity=document.querySelector(".humidity")
const cloudcover=document.querySelector(".cloudcover")
const tempF=document.querySelector(".tempF")


submit.addEventListener("click", function(e)
{  
    
    function getweather(city){
        city=search.value;
        fetch(`https://api.weatherapi.com/v1/current.json?key=dad245cb16604e50aeb103348231310&q=${city}&aqi=no`, {mode: 'cors'})
        .then(function (response)
        {
           return response.json()
        })
        .then(function(data)
        {
            tempF.style.display="flex"
            console.log(data)
            locate.innerHTML="Location: " +data.location.name
            country.innerHTML="Country: "+data.location.country
            region.textContent="Region: " +data.location.region
            conditions.innerHTML="Current Conditions: " +data.current.condition.text
            tempC.innerHTML="Temparature: "+data.current.temp_c + " Celsius"
            tempF.addEventListener("click", function(e)
            {
               if(tempC.innerHTML==="Temparature: "+data.current.temp_c + " Celsius")
               {
                tempC.innerHTML="Temparature: "+data.current.temp_f + " fahrenheit"
                tempF.innerHTML="Convert to Celsius"

               }else if((tempC.innerHTML==="Temparature: "+data.current.temp_f + " fahrenheit"))
               {
                tempC.innerHTML="Temparature: "+data.current.temp_c + " Celsius"
                tempF.innerHTML="Convert to Fahrenheit"
               }
            })
            feelslikeC.innerHTML="Feels like C: "+data.current.feelslike_c
            humidity.innerHTML="Humidity: "+data.current.humidity
            cloudcover.innerHTML="Cloud Cover: "+data.current.cloud
        
        
        })
        .catch(function(error){
        console.log(error)
        })
        }
        getweather()

})


