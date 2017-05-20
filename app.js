var youtubeSearch = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(query, callback) {
  $.getJSON(youtubeSearch, query, callback);
}

function displayYoutubeSearchData(data) {
  var resultElement = '';
  if (data.items) {
    data.items.forEach(function(item) {
     resultElement += '<a href="'+item.snippet.thumbnails.default.url+'"><img class="thumbnails" src="' + item.snippet.thumbnails.default.url + '"/></a>';
    });
  }
  //use <a element, open and close in different
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
    part: 'snippet'
  };
  getDataFromApi(query, displayYoutubeSearchData);
}

$(function(){init();});
