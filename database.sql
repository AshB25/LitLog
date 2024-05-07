-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "user" (
"id" SERIAL PRIMARY KEY,
"username" VARCHAR(80) UNIQUE NOT NULL,
"email" VARCHAR(200) NOT NULL,
"cell_num" VARCHAR(20),
"password" VARCHAR(1000) NOT NULL
);

CREATE TABLE "books" (
"id" SERIAL PRIMARY KEY,
"title" VARCHAR(200) NOT NULL,
"author" VARCHAR(200) NOT NULL,
"pubdate" INTEGER,
"pagecount" INTEGER,
"cover" VARCHAR(200) NOT NULL,
"user_id" INT REFERENCES "user"
)

CREATE TABLE "goals" (
"id" SERIAL PRIMARY KEY,
"book_id" INT REFERENCES "books" NOT NULL,
"user_id" INT REFERENCES "user" NOT NULL,
"book_title" VARCHAR(200),
"number" INTEGER NOT NULL,
"chp_pgs" VARCHAR(10) NOT NULL,
"deadline" DATE NOT NULL
)