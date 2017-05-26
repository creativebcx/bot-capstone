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

// Start Screen Animations
$(function(){
    $(".start-tagline").typed({
      strings: ["where can I go hiking?", "where can I buy a tent?", "where can I see wildlife?", "mountain bike rides?", "are there local guide services?"],
      typeSpeed: 0,
      loop: true,
      backDelay: 3000
    });
  });

$('.scroll-down').click(function(event) {
      event.preventDefault();
      //var hash = this.hash;
      $('.start').animate({scrollTop:$(document).height()}, 800);
      return false;
        //scrollTop:$(document).height()
      //}, 1000, function(){}
      //);
  });