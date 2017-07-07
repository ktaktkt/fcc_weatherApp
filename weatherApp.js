$(document).ready(function(){
var long;
var lat;
var cTemp;
var fTemp;

//get geolocation
  $.getJSON("https://freegeoip.net/json/", function(data2){
    lat = data2.latitude; 
    long = data2.longitude; 

   
    var api = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=1ba0fb261faaedacf78fdf0d0e008866';
    
    $.getJSON(api, function(data){
      var weatherType = data.weather[0].description;
      var kelvin = data.main.temp;
      var windSpeed = data.wind.speed;
      var city = data.name;
      var tempSwap = true;
       
      
      fTemp = (kelvin*(9/5) - 459.67).toFixed(1);
      cTemp =  (kelvin - 273).toFixed(1);
      $("#city").html(city);
     
      $("#weatherType").html(weatherType);
      
      $("#fTemp").html(fTemp + " &#8457");
     
      $("#fTemp").click(function(){
            if(tempSwap === false){
               $("#fTemp").html(fTemp + " &#8457");
               tempSwap = true;　
            }
     　　　　　 else {
             $("#fTemp").html(cTemp+ " ℃");
              tempSwap =false;
              }
  
      });
      
    $("#windSpeed").html(windSpeed + " mps");
            
     if(weatherType === "clear sky"){
        $("body").css('background-image', 'url(http://www.stockazoo.com/uploads/3/5/4/5/3545172/sky_002.jpg)');
     }
      else if (weatherType === "rain" ) {
                    $("body").css('background-image', 'url(http://www.pixelstalk.net/wp-content/uploads/2016/08/Rain-Window-Background-Free-Download.jpg)');
        $("body").css('color', 'white');
               }
     else if(weatherType === "light shower snow"){
        $("body").css('background-image', 'url(http://www.trbimg.com/img-58542121/turbine/bal-wx-light-snow-a-tenth-of-an-inch-of-ice-forecast-overnight-20161216)');
        $("body").css('background-size', 'cover');
     }
      else {
        $("body").css('background-image', 'url(https://upload.wikimedia.org/wikipedia/commons/1/16/Appearance_of_sky_for_weather_forecast,_Dhaka,_Bangladesh.JPG)')
        
        $("body").css('background-size', 'cover');
      }
  
    });

  });
  
  });


  
