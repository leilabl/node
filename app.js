// Look up user's badge count and javascript points

var username = 'leilaloezer';
var https = require('https');

function printMessage(username, badgeCount, points){
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " in JavaScript";
  console.log(message);
}
// Connect to API url (https://teamtreehouse.com/username.json)
var request = https.get('https://teamtreehouse.com/' + username + '.json', function(response){
  //Read data
  console.log(response.statusCode);
  //Parse data
  //Print data

});

var request = request.on('error', function(e){
  console.error(e.message);
});

printMessage(username, 1000, 5000);
