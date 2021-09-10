CREATE DATABASE firstapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name,email) VALUES
    ('jose', 'joe@ibm.com'),
    ('ryan', 'ryan@faztweb.com');
