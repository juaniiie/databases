var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      //1) Join tables
      //2) Innerjoin messages and rooms: messages.rid = rooms.id
      //3) Innerjoin messages and users: messages.uid = users.id
      //4) Create a object for each row
      //5) Return array of objects
      var query = 'select u.name, m.body, m.created_at, r.name \
      from messages m inner join rooms r on (m.rid=r.id) inner join users u on (m.uid=u.id)';

      db.query(query, [], function(err, results){
        if(err){
          throw err;
        }
        callback(results);
      });

    }, // a function which produces all the messages
    post: function (username, body, roomname) {
      // var idUserQuery = 'select id from users u where u.name = "' + username + '"';
      // db.query(idUserQuery, [], function(err, userIDs){
      //   if (err){
      //     throw err;
      //   }
      //   else if(userIDs.length === 0){
      //     //Make a new userID
      //   }
      //   else{
      //     //Find room ID
      //     var idRoomQuery = 'select id from rooms r where r.name = "' + roomname + '"';
      //     db.query(idRoomQuery,[], function(err, roomIDs){
      //       if(err)
      //     })
      //   }
      var insertUserQuery = 'insert into users (name) values ("'+ username +'")';
      var insertRoomQuery = 'insert into rooms (name) values ("'+ roomname +'")';

      var getUserQuery = '(select id from users where name = "' + username + '")';
      var getRoomQuery = '(select id from rooms where name = "' + roomname + '")';

      var messageQuery = 'insert into messages (body,uid,rid) values ("'+body+'",' + getUserQuery + ',' + getRoomQuery +')';


    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};