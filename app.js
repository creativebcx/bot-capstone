var youtubeSearch = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(query, callback) {
  $.getJSON(youtubeSearch, query, callback);
}

function displayYoutubeSearchData(data) {
  var resultElement = '';
  if (data.items) {
    data.items.forEach(function(item) {
     resultElement += '<a href="'+item.snippet.thumbnails.default.url+'"type="video/mp4">\
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
    q: 'yellowstone and teton summer outdoor adventures',
    r: 'json',
    key: 'AIzaSyChuFTyDgp6IMVOfnb03oDUBZw1qC7rCGA',
    part: 'snippet'
  };
  getDataFromApi(query, displayYoutubeSearchData);
}

$(function(){init();});

//wrap them again, width that lines to edge, margin: 0px auto,

//tablet size do grid with 2x2 spacing - grid spacing for phone 