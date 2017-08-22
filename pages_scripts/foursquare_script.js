var url = 'https://api.foursquare.com/v2/venues/search?near=';
var token ="&limit=10&oauth_token=D3WD4BO32EI4BSC33KAMJSM1RUC3NR2LO0RUCGMXUYQ5Z3QE&v=20160530";
var button = document.getElementById('button');
var find = document.getElementById('find');
var content = document.getElementById('content');

button.addEventListener('click',function(event){

  content.innerHTML = " ";
  var q = find.value;
  if (q == ""){
    content.innerHTML = '<p>Please type somthing in the search box</p>'
  }

  else
    var ajax = new XMLHttpRequest();
    ajax.open('GET', url + q +token);
  ajax.onload = function(){
    var json = JSON.parse(this.responseText);
    console.log(json);
    for(i = 0; i< 10; i++){
      var box_list = document.createElement('div');
      box_list.className = 'box';
      document.body.appendChild(box_list);

      var box_title = document.createElement('h2');
           box_title.className = 'number';
            box_title.innerHTML = '2';
        box_list.appendChild(box_title);

         box_list.innerHTML = '<p>' + json.response.venues[i].name + '</p>'+ '<p>' + json.response.venues[i].location.formattedAddress + '</p>';


    }


  };


  ajax.send();



});
