$(document).ready(toDowhenReady)
console.log ('Connected to Main.JS');
function toDowhenReady() {
  var settings = {
    url: 'http://omdbapi.com',
    data: {
        s: 'sharknado',
        apikey: '2f6435d9'
    }
  }
    $.ajax(settings).done(displaySearches);
}
function displaySearches(response) {
  console.log(response)

}
