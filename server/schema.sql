DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id int(11) NOT NULL AUTO_INCREMENT,
  body VARCHAR(255),
  created_at DATETIME(0),
  PRIMARY KEY (ID),
  uid int(11),
  rid int (11)
);

CREATE TABLE users (
  /* Describe your table here.*/
  id int(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  PRIMARY KEY (ID),
  UNIQUE (name)
);
/* Create other tables and define schemas for them here! */
CREATE TABLE rooms (
  /* Describe your table here.*/
  id int(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(255),
  PRIMARY KEY (ID),
  UNIQUE (name)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

