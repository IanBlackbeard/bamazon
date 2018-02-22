DROP DATABASE IF EXISTS musicDB;

CREATE DATABASE musicDB;

USE musicDB;

CREATE TABLE music (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NOT NULL,
  artist VARCHAR (100) NOT NULL,
  genre VARCHAR (50),
  PRIMARY KEY (id)
);

INSERT INTO music (title, artist, genre)
VALUES ("Pauls Boutique", "Beastie Boys", 100);

INSERT INTO music (title, artist, genre)
VALUES ("chocolate", "sfsd", 120);

INSERT INTO music (title, artist, genre)
VALUES ("strawberry", "sfvsv", 75);


SELECT * FROM music;