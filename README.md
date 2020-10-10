# Bracketere
DROP DATABASE IF EXISTS nodelogin;  
CREATE DATABASE nodelogin;  
USE nodelogin;  

CREATE TABLE accounts  
(  
	id int NOT NULL AUTO_INCREMENT,  
	username varchar (255) NOT NULL,  
    password varchar (255) NOT NULL,  
	PRIMARY KEY (id)  
);  

INSERT INTO nodelogin.accounts (username, password )  
VALUES ("pravin544@gmail.com", "pravin123");  

---------------------------------------------------------------------------  

DROP DATABASE IF EXISTS country_db;  
CREATE DATABASE country_db;  
USE country_db;  

CREATE TABLE countries  
(  
	id int NOT NULL AUTO_INCREMENT,  
	CountryName varchar (255)  NOT NULL,  
    createdAt date,  
    updatedAt date,  
	PRIMARY KEY (id)  
);  
INSERT INTO country_db.countries (CountryName)  
VALUES ("Nepal");  
