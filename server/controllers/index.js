var db = require('../db');
var User = db.User;
var Message = db.Message;

module.exports = {
  messages: {
    get: function (req, res) {

      Message.findAll({ include: [User] })
        .then(function(results){
            //error
            res.json(results);
  
        });
      
    }, // a function which handles a get request for all messages
    post: function (req, res) { // a function which handles posting a message to the database
     User.findOrCreate({where : {username: req.body['username']}})
      .then(function(users) {
        var params = {
          text: req.body['text'], 
          roomname:req.body['roomname']
        };

        Message.create(params)
          .then(function(message){
            console.log(users[0]);
            message.setUser(users[0]);
            res.sendStatus(201);
        });
      });
    }  
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      User.findAll()
        .then(function(results){
            //error
            res.json(results);
        });
        
    },
    post: function (req, res) {
      User.create({username: req.body['username']})
        .then(function(user){
          res.sendStatus(201);
        });
    }
  }
};

