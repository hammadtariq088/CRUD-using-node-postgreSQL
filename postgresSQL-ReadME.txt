To connect the postgreSQL database
1- \conninfo
2- \l show all the database
3- CREATE DATABASE Students
4- \l
5- \c Students
6- \! cls
7- CREATE TABLE Student ( 
ID SERIAL PRIMARY KEY,
name VARCHAR (255),
email VARCHAR(255),
dob DATE
age INT);
8- \dt
9-INSERT INTO Students (name, email, age, dob)
10- VALUES ("ahmed", "ahmed@gmail.com", 48, "1999-02-02"), ("ali", "ali@gmail.com", 38, "1998-02-02");
11 - SELECT * FROM Students
