CREATE TABLE project (
	id INT AUTO_INCREMENT PRIMARY KEY,
	projectName VARCHAR(45) NOT NULL,
    slogan VARCHAR(45) NOT NULL,
    demo VARCHAR(1000) NOT NULL,
    repository VARCHAR(1000) NOT NULL,
    technologies TINYTEXT NOT NULL,
    description TEXT 
);

ALTER TABLE project CHANGE description description TEXT NOT NULL;

ALTER TABLE project ADD projectImage LONGTEXT NOT NULL;

CREATE TABLE autor (
	id INT AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(45) NOT NULL,
    job VARCHAR(45) NOT NULL,
    autorImage LONGTEXT NOT NULL
);
