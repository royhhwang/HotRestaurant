DROP DATABASE IF EXISTS restaurantDB;
CREATE DATABASE restaurantDB;
USE restaurantDB;
CREATE TABLE customer
(
    id INT
    AUTO_INCREMENT NOT NULL,
    name VARCHAR
    (100) NULL,
    number INT
    (10) NULL,
    email VARCHAR
    (100) NULL,
    unique_id INT
    (10) NULL,
    PRIMARY KEY
    (id)
);
