$(document).ready(function(){
  subreddits();
  

  $('ul').on('click', function(e){
    console.log($(e.target).html());
  })



  function subreddits(){
    console.log('is this happening');
    $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url: 'http://www.reddit.com/subreddits/popular.json?jsonp=?',
    success: function(response) {
      console.log(response);
      displaySub(response.data.children);
    }
    })
  }




});

function displaySub(arr){
  arr.forEach(function(thread){
    $('ul').append("<li>" + thread.data.display_name+ '</li>');
  })
}