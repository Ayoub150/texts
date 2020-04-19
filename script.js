(function (global) {

// Set up a namespace for our utility
var ajaxUtils = {};


// Returns an HTTP request object
function getRequestObject() {
  if (window.XMLHttpRequest) {
    return (new XMLHttpRequest());
  } 
  else if (window.ActiveXObject) {
    // For very old IE browsers (optional)
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  } 
  else {
    global.alert("Ajax is not supported!");
    return(null); 
  }
}


// Makes an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest = 
  function(requestUrl, responseHandler, isJsonResponse) {
    var request = getRequestObject();
    request.onreadystatechange = 
      function() { 
        handleResponse(request, 
                       responseHandler,
                       isJsonResponse); 
      };
    request.open("GET", requestUrl, true);
    request.send(null); // for POST only
  };


// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error
function handleResponse(request,
                        responseHandler,
                        isJsonResponse) {
  if ((request.readyState == 4) &&
     (request.status == 200)) {

    // Default to isJsonResponse = true
    if (isJsonResponse == undefined) {
      isJsonResponse = true;
    }

    if (isJsonResponse) {
      responseHandler(JSON.parse(request.responseText));
    }
    else {
      responseHandler(request.responseText);
    }
  }
}


// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;


})(window);


$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector(".nav-tuure").addEventListener("blur",...
  $(".nav-tuure").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $(".nav-celiye").collapse('hide');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $(".nav-tuure").click(function (event) {
    $(event.target).focus();
  });
});

   
   

(function (global) {

var pp = {};

pp.aa = "http://davids-restaurant.herokuapp.com/categories/81.json"

pp.bb = "http://davids-restaurant.herokuapp.com/categories/82.json"

pp.cc = "http://davids-restaurant.herokuapp.com/categories/83.json"

pp.dd = "http://davids-restaurant.herokuapp.com/categories/84.json"

pp.ee = "http://davids-restaurant.herokuapp.com/categories/85.json"

pp.ff = "http://davids-restaurant.herokuapp.com/categories/86.json"

pp.gg = "http://davids-restaurant.herokuapp.com/categories/87.json"

pp.hh = "http://davids-restaurant.herokuapp.com/categories/88.json"

pp.ii = "http://davids-restaurant.herokuapp.com/categories/89.json"

pp.jj = "http://davids-restaurant.herokuapp.com/categories/90.json"

var homeHtml = "http://davids-restaurant.herokuapp.com/categories/91.json";

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center loading-icon'>";
  html += "<img src='content://media/external/file/11671'></div>";
  insertHtml(selector, html);
};

// Remove the class 'active' from home and switch to All Articles button

var activeUbedelArticles = function () {
// Remove active from home button

var classes = document.querySelector("#guri").className

classes = classes.replace(new RegExp("active", "g"), "")

document.querySelector("#guri").className = classes

// Add 'active' to All Articles button if not already there


var classes = document.querySelector("#maqaallo").className 

if (classes.indexOf("active") == -1) {
classes += " active"

document.querySelector("#maqaallo").className = classes
}

}

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main")
      .innerHTML = responseText.id;
  },
  true);
 

pp.loadGaree = function (sel) { 
if (sel == 1) {
urlll = pp.aa
}
if (sel == 21) {
urlll = pp.bb
}
if (sel == 22) {
urlll = pp.cc
}
if (sel == 23) {
urlll = pp.dd
}
if (sel == 31) {
urlll = pp.ee
}

if (sel == 32) {
urlll = pp.ff
}

if (sel == 41) {
urlll = pp.gg
}

if (sel == 42) {
urlll = pp.hh
}

if (sel == 43) {
urlll = pp.ii
}

if (sel == "articles") {
urlll = pp.jj
}


showLoading("#main");
 $ajaxUtils.sendGetRequest(urlll, dhise);};
 

dhise = function (responseText) {

activeUbedelArticles();
    document.querySelector("#main")
      .innerHTML = responseText.id;
  }
 });

global.$pp = pp;

})(window);
