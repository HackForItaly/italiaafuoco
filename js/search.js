(function() {
  function displaySearchResults_bis(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<li><a href="' + item.url + '"><h3>' + item.title + '</h3></a>';
        appendString += '<p>' + item.content.substring(0, 150) + '...</p></li>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  function displayDoc(item) {
      var appendString = "";
      appendString += '<a href="' + item.url + '" class="list-group-item">';
      appendString += '<div class="panel panel-default">';
      appendString += '<div class="panel-heading">';

      appendString += '<h4>' + item.title + '</h4>';

      appendString += '</div>';
      appendString += '<div class="panel-body">';

      appendString += '<small>';
      appendString += '<p class="list-group-item-text">' + item.content.substring(0, 250) + '...</p>';
      //appendString += '<p class="list-group-item-text">' + item.date + '</p>';
      appendString += '</small>';

      appendString += '</div>';
      appendString += '<div class="panel-footer">';

      appendString += '</div>';
      appendString += '</div>';
      appendString += '</a>';

      return appendString;
  }


  function displaySearchResults(results, store) {
      var searchResults = document.getElementById('search-results');
      if (results.length) { // Are there any results?
          var appendString = '';

          var resultsArray=[];

          for (var i = 0; i < results.length; i++) {  // Iterate over the results
              var item = store[results[i].ref];
              resultsArray.push(item);
          }

          // reverse order results
          resultsArray = resultsArray.sort(function(a,b) {
                  return -1 * (parseInt(a.created_at) - parseInt(b.created_at));
          });

          appendString += '<div class="panel-group">';
          for (var i = 0; i < resultsArray.length; i++) {  // Iterate over the results
              var item = resultsArray[i];
              if (item.state == "open") {
                  appendString += displayDoc(item);
              }
          }
          appendString += '</div>';

          appendString += '<div class="panel-group">';
          for (var i = 0; i < resultsArray.length; i++) {  // Iterate over the results
              var item = resultsArray[i];
              if (item.state != "open") {
                  appendString += displayDoc(item);
              }
          }
          appendString += '</div>';

          searchResults.innerHTML = appendString;
        } else {
          searchResults.innerHTML = '<li>Nessuna promessa trovata</li>';
        }
  }


  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);

    // Initalize lunr with the fields it will be searching on. I've given title
    // a boost of 10 to indicate matches on this field are more important.
    var idx = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('content');
    });

    for (var key in window.store) { // Add the data to lunr
      idx.add({
        'id': key,
        'title': window.store[key].title,
        'content': window.store[key].content
      });

      var results = idx.search(searchTerm); // Get lunr to perform a search
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();