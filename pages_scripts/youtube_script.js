/*https://www.googleapis.com/youtube/v3*/
var url = 'https://www.googleapis.com/youtube/v3/search';
var api_key ="AIzaSyDiONE_HP0A5EfYkA0SxUekZlyvP7L4jwY";
var button = document.getElementById('button');
var search = document.getElementById('search');
var results = document.getElementById('result');

button.addEventListener('click',function(event){
  results.innerHTML = '';
  var q = search.value;
  if( q == ""){
    result.innerHTML = '<p class="msg">Please type something in the search box</p>';
  }
  else

  var ajax = new XMLHttpRequest();
  ajax.open('GET', url + '?part=snippet,id&q=' + q + '&type=video&key=' + api_key);
  ajax.onload = function () {
    var json = JSON.parse(this.responseText);
    console.log(json);



     for( i = 0; i<5; i++){
        var result_list = document.createElement('ul');
        result_list.innerHTML = '<li><div class="text"> <p> ' + json.items[i].snippet.title+'</p>'+'<p>' + json.items[i].snippet.description+'</p>'+'<p> Published By: ' + json.items[i].snippet.channelTitle+'</p></div>' +'<div class="vid"><iframe frameBorder="0" width="440" height="315" src="https://www.youtube.com/embed/'+json.items[i].id.videoId +'"</iframe></div> </li>';
        results.appendChild(result_list);
       console.log(result_list);
      }



  }
  ajax.send();
});

/*' +json.items[0].snippet.videoId+'
  YwN-CN9EjTg


    '<p>' + json.items[i].snippet.title+'</p>'+'<p>' + json.items[i].snippet.description+'</p>'+'<p> Published By: ' + json.items[i].snippet.channelTitle+'</p>' +'<iframe width="440" height="315" src="https://www.youtube.com/embed/'+json.items[i].id.videoId +'"</iframe>';


*/
