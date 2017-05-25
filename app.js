var youtubeSearch = 'https://www.googleapis.com/youtube/v3/search';
elStartButton = [];
//create start button that will change the css via jQuery

function getDataFromApi(query, callback) {
  $.getJSON(youtubeSearch, query, callback);
}

function displayYoutubeSearchData(data) {
  var resultElement = '';
  if (data.items) {
    data.items.forEach(function(item) {
     resultElement += '<a class="link" href="http://www.youtube.com/watch?v='+item.id.videoId+'">\
     <img class="thumbnails" src="'+ item.snippet.thumbnails.default.url +'"/></a>';
    });
  }

  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
}

function init() {
  var query = {
    q: 'jackson hole',
    r: 'json',
    key: 'AIzaSyChuFTyDgp6IMVOfnb03oDUBZw1qC7rCGA',
    part: 'snippet',
  };
  getDataFromApi(query, displayYoutubeSearchData);
}

$(function(){init();});

//wrap them again, width that lines to edge, margin: 0px auto,

//tablet size do grid with 2x2 spacing - grid spacing for phone 

//function typed() {
//  $('start-tagline').typed({
//    strings: ["good places to go hiking?", "best places to watch the sunset?", "beautiful lakes?"]
    //typeSpeed: 0,
    //loop: true,
    //backDelay: 2000
  //});
//}

//typed();

// Start Screen Animations
$(function(){
    $(".start-tagline").typed({
      strings: ["where can I go hiking?", "great places to watch the sunset?", "where can I see wildlife?", "mountain bike rides?"],
      typeSpeed: 0,
      loop: true,
      backDelay: 2000
    });
  });