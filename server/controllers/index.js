var models = require('../models');

var defaultCorsHeaders = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10 // Seconds.
};

var headers = defaultCorsHeaders;
headers['Content-Type'] = "text/plain";

module.exports = {
  messages: {
    get: function (req, res) {
      //1) Call meesages model get function
      //2) Receives an array of objects
      //3) Convert an array of objects into string JSON
      //4) Put it into the response
      //5) End the response
      var statusCode = 200;

      models.messages.get(function(messages){
        res.writeHead(statusCode, headers);
        res.end(JSON.stringify({results: messages}));
        console.log("GET WORKS");
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) { // a function which handles posting a message to the database
      //1) Get a json data from request
      //2) Pass it into the model
      //3) Model will insert it into the DB
      //4) End the response

      var body = "";
      res.on('data', function(chunk){
        body += chunk;
      });
      res.on('end', function() {
        var newMessage = JSON.parse(body);
        var postCallback = function(){
          var statusCode = 302;
          res.writeHead(statusCode, headers);
          res.end();
        };
        model.messages.post(newMessage.username, newMessage.message, newMessage.roomname, postCallback);
      });
    }

  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

