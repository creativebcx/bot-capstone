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
     resultElement += '<a target="_blank" class="link" href="http://www.youtube.com/watch?v='+item.id.videoId+'">\
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
    q: 'jackson hole mountain biking and climbing',
    r: 'json',
    key: 'AIzaSyChuFTyDgp6IMVOfnb03oDUBZw1qC7rCGA',
    part: 'snippet',
  };
  getDataFromApi(query, displayYoutubeSearchData);
}

$(function(){init();});

// Landing Page Animations
$(function(){
    $(".start-tagline").typed({
      strings: ["where can I go hiking?", "where can I see wildlife?", "mountain bike rides?"],
      typeSpeed: 0,
      loop: true,
      backDelay: 3000
    });
  });

// Start Bot Animations
$('.scroll-down').click(function(event) {
  event.preventDefault();
  $('#container-bot').removeClass('hidden');
  $('.tagline-container').addClass('hidden');
/*
      $('body').animate({scrollTop:$(document).height()}, 3000);
      console.log('hello');
      //$('body').animate({opacity: 0.0}, 3000);
      $('#container-bot').css("display", "initial");
      $('#video').css("display", "initial");
      $('#bottom-tool').css("display", "initial");
      $('h2').css("display", "block");
      //$('body').css('background-image', 'none');*/
  });

// Animation for bot reply so that conversation stays on bot reply screen
$('input.cleverscriptsubmit').click(function(event) {
      setTimeout(function(){
          $('.cleverscriptreply').animate({scrollTop:$(document).height()}, 1000);
    }, 100);
});










