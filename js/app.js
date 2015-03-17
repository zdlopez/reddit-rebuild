$(document).ready(function(){
  subreddits();
  

  $('.sidebar').on('click', function(e){
    console.log($(e.target).html());
    subredditsByCat($(e.target).html());
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


  function subredditsByCat(forum){
    console.log('is this happening');
    $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    url: 'http://www.reddit.com/r/' + forum +'/hot.json?jsonp=?',
    success: function(response) {
      console.log('this response', response);
      displayForum(response.data.children);
    }
    })
  }



});

function displaySub(arr){
  arr.forEach(function(thread){
    $('.sidebar').append("<li>" + thread.data.display_name+ '</li>');
  })
}

function displayForum(arr){
  $('.content').children().remove();
  //console.log('arr is ', arr);
  arr.forEach(function(thread){
    //console.log(thread.data.author);
    $('.content').append('<div class="row"><div class="col-md-2">' + thread.data.author + '</div><div class="col-md-6"><a href="' + thread.data.url + '">' + thread.data.title + '</a></div></div>');
  })
}