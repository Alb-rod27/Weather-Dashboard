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
      console.log(userInput)
      localStorage.setItem("currentWeather", JSON.stringify(userInput));
    }

    var loadTasks = function() {
      tasks = JSON.parse(localStorage.getItem("userInput"));

    };
    
    loadTasks();
};

})

