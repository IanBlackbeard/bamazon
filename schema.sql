DROP DATABASE IF EXISTS top_songsDB;
CREATE database top_songsDB;

USE top_songsDB;

CREATE TABLE top5000 (
	position INT NOT NULL,
	artist VARCHAR (100),
	song VARCHAR(150),
	year INT,
	raw_total DECIMAL(16,4),
	raw_usa DECIMAL(16,4),
	raw_uk DECIMAL(16,4),
	raw_eur DECIMAL(16,4),
	raw_row DECIMAL(16,4),
	PRIMARY KEY (POSITION)
);

SELECT * FROM top5000;




