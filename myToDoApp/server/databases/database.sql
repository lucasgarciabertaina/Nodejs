CREATE DATABASE system;

CREATE TABLE accounts
(
    id serial NOT NULL,
    premium boolean,
    direction text,
    name text,
    user_id integer,
    CONSTRAINT accounts_pkey PRIMARY KEY (id),
    CONSTRAINT user_id FOREIGN KEY (user_id)
        REFERENCES users (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE activities
(
    id serial NOT NULL,
    activity text,
    type text,
    id_account integer,
    done boolean,
    date date,
    CONSTRAINT activities_pkey PRIMARY KEY (id),
    CONSTRAINT account_id FOREIGN KEY (id_account)
        REFERENCES accounts (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

CREATE TABLE users
(
    id serial NOT NULL,
    username text,
    password text,
    CONSTRAINT users_pkey PRIMARY KEY (id)
);

