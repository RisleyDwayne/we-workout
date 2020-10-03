-- Create Database if it doesn't exist --
DROP DATABASE IF EXISTS project_2;

CREATE DATABASE project_2;

USE project_2;

CREATE TABLE exercises (
    id INT NOT NULL AUTO_INCREMENT,
    exercise_name VARCHAR(75) NOT NULL,
    body_zone VARCHAR(25) NOT NULL,
	weights_used BOOLEAN DEFAULT false,
    exercise_description TEXT(999) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE workout (
    id INT NOT NULL AUTO_INCREMENT,
    workout_name VARCHAR(75) NOT NULL,
    exercise_id INT NOT NULL,
    PRIMARY KEY(id)
);

SELECT * FROM exercises;
SELECT * FROM workout;

INSERT INTO workout (exercise_name, body_zone, weights_used,exercise_description) VALUES ;