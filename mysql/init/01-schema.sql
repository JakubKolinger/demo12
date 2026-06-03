SET NAMES utf8mb4;
CREATE DATABASE IF NOT EXISTS demo12db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE USER IF NOT EXISTS 'demo12admin'@'%' IDENTIFIED BY 'Demo12Pass1!';
GRANT ALL PRIVILEGES ON demo12db.* TO 'demo12admin'@'%';
FLUSH PRIVILEGES;

USE demo12db;

CREATE TABLE IF NOT EXISTS db_users (
    id    BIGINT AUTO_INCREMENT PRIMARY KEY,
    name  VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE
);

INSERT INTO db_users (name, email) VALUES
    ('Alice Nováková',  'alice@demo6.com'),
    ('Bob Procházka',   'bob@demo6.com'),
    ('Carol Dvořáková', 'carol@demo6.com')
ON DUPLICATE KEY UPDATE name = VALUES(name);
