-- MySQL dump 10.11
--
-- to install this database, from a terminal, type:
-- mysql -u USERNAME -p -h SERVERNAME wko < wko.sql
--
-- Host: localhost    Database: wko
-- ------------------------------------------------------
-- Server version   5.0.45-log

/*DROP DATABASE IF EXISTS wko;
CREATE DATABASE wko;
USE wko;*/

DROP TABLE IF EXISTS pages;
CREATE TABLE pages (
name VARCHAR(32) DEFAULT NULL 
);
INSERT INTO pages VALUES
('Index'),
('Programs'),
('Programs2'),
('Help'),
('Resources'),
('About'),
('Contact'),
('SpecialEvents'),
('ThankYou'),
('WaystoGive');

-- debug output to just show the contents of all tables
/*SHOW TABLES;
SELECT * FROM pages;
*/
