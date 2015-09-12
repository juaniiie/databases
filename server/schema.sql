DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id int(11) NOT NULL AUTO_INCREMENT,
  text VARCHAR(255),
  created_at timestamp NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY (ID),
  uid int(11),
  rid int (11)
);

CREATE TABLE users (
  /* Describe your table here.*/
  id int(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(255),
  PRIMARY KEY (ID),
  UNIQUE (username)
);
/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  /* Describe your table here.*/
  id int(11) NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(255),
  PRIMARY KEY (ID),
  UNIQUE (roomname)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

