DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id int(11) NOT NULL AUTO_INCREMENT,
  userid int NOT Null,
  text VARCHAR(255),
  -- created_at timestamp NOT NULL DEFAULT current_timestamp,
  roomname VARCHAR(20),
  PRIMARY KEY (ID)
  
);

CREATE TABLE users (
  /* Describe your table here.*/
  id int(11) NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL,
  PRIMARY KEY (ID)
  -- UNIQUE (username)
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

