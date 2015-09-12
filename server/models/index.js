var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var query = 'select m.id, u.username, m.text, m.created_at, r.roomname \
      from messages m inner join rooms r on (m.rid=r.id) inner join users u on (m.uid=u.id)';

      db.query(query, [], function(err, results){
        if(err){
          throw err;
        }
        console.log(results);
        callback(results);
      });

    }, // a function which produces all the messages
    post: function (username, text, roomname, callback) {
      var insertUserQuery = 'insert into users (username) values ("'+ username +'")';
      var insertRoomQuery = 'insert into rooms (roomname) values ("'+ roomname +'")';

      var getUserQuery = '(select id from users where username = "' + username + '")';
      var getRoomQuery = '(select id from rooms where roomname = "' + roomname + '")';

      var messageQuery = 'insert into messages (text,uid,rid) values ("'+ text +'",' + getUserQuery + ',' + getRoomQuery +')';

     // a function which can be used to insert a message into the database
     db.query(insertUserQuery, [], function(err, results){
        db.query(insertRoomQuery, [], function(err, results){
          db.query(messageQuery, [], function(err, results){
            if (err){
              throw err;
            }
            callback();
          });
        });
     });
    }
  },
  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};