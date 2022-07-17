DROP DATABASE IF EXISTS fun_to_do;

CREATE DATABASE fun_to_do COLLATE 'utf8mb4_general_ci';

USE fun_to_do;

CREATE TABLE users (
`id` INT(6) auto_increment primary KEY,
`name` VARCHAR(20) NOT NULL unique key,
`password` VARCHAR(20) NOT NULL,
`mail` VARCHAR(25) default NULL,
`date` DATETIME  NOT NULL,
`points` INT(9) default 0,
`code` float(25) default null
);

USE fun_to_do;
CREATE TABLE comments(
`id` INT(9) auto_increment primary key,
`postId` INT(6) NOT NULL,
`userId` INT(6) NOT NULL,
`date` DATETIME  NOT NULL,
`text` text -- maybe need to change-- 
);

CREATE TABLE rate(
`postId` INT(6) NOT NULL PRIMARY KEY,
`rate` FLOAT(5) DEFAULT NULL,
`numOfRaters` INT(6) DEFAULT 0
);

CREATE TABLE posts(
`id` INT(6) auto_increment primary key,
`text` longtext NOT NULL,
`date` DATETIME NOT NULL,
`userId` INT(6) NOT NULL,
`labels` longtext default NULL,
`title` VARCHAR(200) not null
);

CREATE TABLE images(
`id` INT(9) auto_increment primary key,
`postId` INT(6) not null
);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'a1b2c3d4';

FLUSH PRIVILEGES;
