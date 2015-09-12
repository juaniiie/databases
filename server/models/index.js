var db = require('../db');

module.exports = {
  messages: {

    get: function (callback) {
      var queryStr = "select messages.id, messages.text, messages.roomname, users.username from messages \
                      left outer join users on (messages.userid = user.id) \
                      order by messages.id desc";

      db.query(queryStr, function(err, results){
        callback(results);
      });
    },
    post: function (params, callback) {
      var queryStr = "insert into messages(text, userid, roomname) \
                      values (?,(select id from users where username = ? limit 1), ?)";

      console.log("query started");
      db.query(queryStr, params, function(err,results){
          console.log(params);
          console.log(err);
          console.log("query done.");
          callback(results);
      });
    }
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = "select * from users";
      db.query(queryStr, function(err, results){
        callback(results);
      });
    },
    post: function (params, callback) {
      var queryStr = "insert into users (username) values (?)"; 
      db.query(queryStr, params, function(err,results){
          callback(results);
      });
    }
  }

};