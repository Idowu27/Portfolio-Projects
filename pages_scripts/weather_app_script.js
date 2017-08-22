var moscow_url =
  "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='Moscow')&format=json";

var ajax = new XMLHttpRequest();
ajax.open("GET", moscow_url);
ajax.onload = function() {
  var json = JSON.parse(this.responseText);
  console.log(json);

  /*** City ***/
  var city_name = document.getElementsByClassName("city");
  city_name[0].innerHTML = json.query.results.channel.location.city;
  /*** Country ***/
  var country = document.getElementsByClassName("country");
  country[0].innerHTML = json.query.results.channel.location.country;

  /*** Status ***/
  var test = document.getElementsByClassName("status");
  test[0].innerHTML = json.query.results.channel.item.condition.text;
  /*** temp***/
  var temp = document.getElementsByClassName("temp");
  temp[0].innerHTML = json.query.results.channel.item.condition.temp + "&deg;";

  /*** Get weather image ***/

  var img = document.getElementsByClassName("imgs");
  if (
    (json.query.results.channel.item.condition.code > "30" &&
      json.query.results.channel.item.condition.code < "35") ||
    json.query.results.channel.item.condition.code === "36"
  ) {
    img[0].innerHTML =
      '<img class="sunny-img"src="http://res.cloudinary.com/pandaapple27/image/upload/v1503096753/sun-icon_htemzy.png">';
  } else if (
    (json.query.results.channel.item.condition.code > "18" &&
      json.query.results.channel.item.condition.code < 31) ||
    json.query.results.channel.item.condition.code === "44"
  ) {
    img[0].innerHTML =
      '<img class="imgs cloudy-img" src="http://res.cloudinary.com/pandaapple27/image/upload/v1503096753/cloud-icon_pje4tg.png">';
  } else if (
    (
      (json.query.results.channel.item.condition.code > 0 &&
        json.query.results.channel.item.condition.code < 19) ||
        json.query.results.channel.item.condition.code === 35,
      45,
      56 ||
        (json.query.results.channel.item.condition.code > 36 &&
          json.query.results.channel.item.condition.code < 44)
    )
  ) {
    img[0].innerHTML =
      '<img class="rainy-img"src="http://res.cloudinary.com/pandaapple27/image/upload/v1503096753/rain-icon_e7p6nn.png">';
  } else {
    img[0].innerHTML = "Null";
  }

  console.log(test);
};

ajax.send();

/*** GET RIO TEMP AND STATUS ***/
var rio_url =
  "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='Rio de Janeiro')&format=json";

var ajax = new XMLHttpRequest();
ajax.open("GET", rio_url);
ajax.onload = function() {
  var json = JSON.parse(this.responseText);
  console.log(json);

  /*** City ***/
  var city_name = document.getElementsByClassName("city");
  city_name[1].innerHTML = json.query.results.channel.location.city;
  /*** Country ***/
  var country = document.getElementsByClassName("country");
  country[1].innerHTML = json.query.results.channel.location.country;

  /*** Status ***/
  var test = document.getElementsByClassName("status");
  test[1].innerHTML = json.query.results.channel.item.condition.text;

  /*** temp in F ***/
  var temp = document.getElementsByClassName("temp");
  temp[1].innerHTML = json.query.results.channel.item.condition.temp + "&deg;";

  /*** Get weather image ***/
  console.log(json.query.results.channel.item.condition.code);
  var img = document.getElementsByClassName("imgs");
  if (
    (json.query.results.channel.item.condition.code > "30" &&
      json.query.results.channel.item.condition.code < "35") ||
    json.query.results.channel.item.condition.code === "36"
  ) {
    img[1].innerHTML =
      '<img class="sunny-img"src="http://res.cloudinary.com/pandaapple27/image/upload/v1503096753/sun-icon_htemzy.png">';
  } else if (
    (json.query.results.channel.item.condition.code > "18" &&
      json.query.results.channel.item.condition.code < 31) ||
    json.query.results.channel.item.condition.code === "44"
  ) {
    img[1].innerHTML =
      '<img class="imgs cloudy-img" src="http://res.cloudinary.com/pandaapple27/image/upload/v1503096753/cloud-icon_pje4tg.png">';
  } else if (
    (
      (json.query.results.channel.item.condition.code > 0 &&
        json.query.results.channel.item.condition.code < 19) ||
        json.query.results.channel.item.condition.code === 35,
      45,
      56 ||
        (json.query.results.channel.item.condition.code > 36 &&
          json.query.results.channel.item.condition.code < 44)
    )
  ) {
    img[1].innerHTML =
      '<img class="rainy-img"src="http://res.cloudinary.com/pandaapple27/image/upload/v1503096753/rain-icon_e7p6nn.png">';
  } else {
    img[1].innerHTML = "Null";
  }

  console.log(test);
};

ajax.send();
/*** GET LONDON TEMP AND STATUS ***/

var london_url =
  "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='London')&format=json";

var ajax = new XMLHttpRequest();
ajax.open("GET", london_url);
ajax.onload = function() {
  var json = JSON.parse(this.responseText);
  console.log(json);

  /*** City ***/

  var city_name = document.getElementsByClassName("city");
  city_name[2].innerHTML = json.query.results.channel.location.city;
  /*** Country ***/
  var country = document.getElementsByClassName("country");
  country[2].innerHTML = json.query.results.channel.location.country;
  /*** Status ***/
  var test = document.getElementsByClassName("status");
  test[2].innerHTML = json.query.results.channel.item.condition.text;
  /*** temp ***/
  var temp = document.getElementsByClassName("temp");
  temp[2].innerHTML = json.query.results.channel.item.condition.temp + "&deg;";
  /*** Get weather image ***/

  var img = document.getElementsByClassName("imgs");
  if (
    (json.query.results.channel.item.condition.code > "30" &&
      json.query.results.channel.item.condition.code < "35") ||
    json.query.results.channel.item.condition.code === "36"
  ) {
    img[2].innerHTML =
      '<img class="sunny-img"src="http://res.cloudinary.com/pandaapple27/image/upload/v1503096753/sun-icon_htemzy.png">';
  } else if (
    (json.query.results.channel.item.condition.code > "18" &&
      json.query.results.channel.item.condition.code < "31") ||
    json.query.results.channel.item.condition.code === "44"
  ) {
    img[2].innerHTML =
      '<img class="imgs cloudy-img" src="http://res.cloudinary.com/pandaapple27/image/upload/v1503096753/cloud-icon_pje4tg.png">';
  } else if (
    (
      (json.query.results.channel.item.condition.code > 0 &&
        json.query.results.channel.item.condition.code < 19) ||
        json.query.results.channel.item.condition.code === 35,
      45,
      56 ||
        (json.query.results.channel.item.condition.code > 36 &&
          json.query.results.channel.item.condition.code < 44)
    )
  ) {
    img[2].innerHTML =
      '<img class="rainy-img"src="http://res.cloudinary.com/pandaapple27/image/upload/v1503096753/rain-icon_e7p6nn.png">';
  } else {
    img[2].innerHTML = "Null";
  }
  console.log(test);
};

ajax.send();

/**** the search function ****/

var add_button = document.getElementById("add");
var search_bg = document.getElementById("search-box");
var no_button = document.getElementById('off-btn');
var exit_button = document.getElementById('exit');
var search_input = document.getElementById('search-decor')
add_button.addEventListener("click",function(event){

  search_bg.style.height='480px';
  exit_button.style.display ="initial";
  search_input.style.display ="initial";

});

exit_button.addEventListener("click",function(event){
search_input.style.display ="none";
  exit_button.style.display ="none";
  search_bg.style.height = 0;


});

/*** Find a City's temp ***/
var find = document.getElementById('find');
var search_btn = document.getElementById('search_btn');
var content = document.getElementById('content');

var start_url ="https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='";
var end_url = "')&format=json";

search_btn.addEventListener('click', function(event){
  var q = find.value
  if (q === ""){
    content.innerHTML = '<p>Please type something in the search box</p>'
  }
  else{
    var ajax = new XMLHttpRequest();
ajax.open("GET", start_url + q + end_url);
ajax.onload = function() {
  var json = JSON.parse(this.responseText);
  console.log(json);
}

  }
});
