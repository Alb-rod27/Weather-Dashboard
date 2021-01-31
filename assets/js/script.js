$(document).ready(function() {
    $("#start-btn").on("click", function() {

        var userInput = $("#input-value").val();
        currentWeather(userInput)

    })
    var apiKey = "7ca2dd2d0abe48ddd1b123c1a4753c0e"

    function currentWeather(userInput) {
        var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=" + apiKey;
      
        // make a get request to url
        fetch(queryUrl)
          .then(function(response) {
            
              return response.json();
            // request was successful
            
            
          })
          .then(function(data) {
              var currentWeatherEl = $("#current-weather")
              currentWeatherEl.empty();
              console.log(data)
            var cardContainer = $("<div>").addClass("card")
            var cardBody = $("<div>").addClass("card-body")
            var cityName = $("<h1>").addClass("card-title").text(data.name)
            
            cardBody.append(cityName)
            cardContainer.append(cardBody)
            currentWeatherEl.append(cardContainer)

            saveTasks()
    })
    
    var saveTasks = function() {
      localStorage.setItem("currentWeather", JSON.stringify(currentWeather));
    }

    };
    //when you click on a city in the history section then it shows current and future conditions for that city again.
    
    //when you input the city it has to show the forecast for the next 5 days and add the city to the history.
    
    //when you view the current weather conditions for that city populate city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
    
    // add color to the UV index to show whether the weather is favorable, moderate, or sever (green, orange, red)
    
    //populate the cards for the next 5 days with date, an icon representation of weather conditions, the temperature, and the humidity
    
    
})