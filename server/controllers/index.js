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
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) { // a function which handles posting a message to the database
        var newMessage = req.body;
        var postCallback = function(){
          var statusCode = 201;
          res.writeHead(statusCode, headers);
          res.end();
        };
        newMessage.roomname = newMessage.roomname || '';
        models.messages.post(newMessage.username, newMessage.text, newMessage.roomname, postCallback);
    }

  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

