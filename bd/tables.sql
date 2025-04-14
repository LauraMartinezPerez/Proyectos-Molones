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

ALTER TABLE project ADD COLUMN fk_autor INT NOT NULL;
ALTER TABLE project ADD FOREIGN KEY (fk_autor) REFERENCES autor(id);

INSERT INTO autor (name, job, autorImage)
VALUES
	('Laura', 'FullStack', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&s'),
    ('Judit', 'FullStack', 'https://cdn.pixabay.com/photo/2014/04/02/17/07/user-307993_1280.png');

INSERT INTO project (projectName, slogan, demo, repository, technologies, description, projectImage, fk_autor)
VALUES
	('Proyectos Molones', 'Confía en el proceso', 'https://www.google.es', 'https://www.google.es', 'HTML, CSS, JS y React', 'Es un proyecto sobre bases de datos', 'https://es.unesco.org/youth/toptips/user/pages/images/home-feature-two_mobile.png', 1),
    ('Proyectos más molones', 'Hoy me siento un poco column-reverse', 'https://www.google.es', 'https://www.google.es', 'HTML, CSS, JS y React', 'Es un proyecto sobre las dificultades de programar', 'https://assets.asana.biz/m/2729b34d99aa7f91/webimage-article-project-planning-project-design-2x.jpg', 2);
    
SELECT *
FROM autor, project
WHERE project.fk_autor = autor.id;


    