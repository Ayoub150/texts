https://github.com/jhu-ep-coursera/fullstack-course4/tree/master/examples


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
</script>

<script>
// another way:

function httpGet(theUrl)
{
var xmlHttp = null;

xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", theUrl, false );
xmlHttp.send( null );
return xmlHttp.responseText;
}
</script>
<script>
// the fetch API: 

fetch('some_url')
    .then(function (response) {
        switch (response.status) {
            // status "OK"
            case 200:
                return response.text();
            // status "Not Found"
            case 404:
                throw response;
        }
    })
    .then(function (template) {
        console.log(template);
    })
    .catch(function (response) {
        // "Not Found"
        console.log(response.statusText);
    });
</script>
