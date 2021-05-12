Exercise 1 : Bootcamp

1, 2 & 3

CREATE TABLE students(
id SERIAL PRIMARY KEY,
last_name VARCHAR(200),	
first_name VARCHAR(200),	
birth_date DATE 
)


Insert

SELECT * FROM students

INSERT INTO students
  ( last_name, first_name, birth_date )
VALUES
  ('Marc',	'Benichou',	'02/11/1998'),
('Yoan'	,'Cohen','03/12/2010'),
 ('Lea',	'Benichou'	,'27/07/1987'),
 ('Amelia'	,'Dux'	,'07/04/1996'),
 ('David',	'Grez',	'14/06/2003'),
 ('Omer'	,'Simpson',	'03/10/1980')





  INSERT INTO students
    ( first_name, last_name, birth_date )
  VALUES
 ('Eitan','Marks','02/03/1986')


 SELECT

1
  SELECT * FROM students

2
  SELECT first_names, last_name FROM students

3.1
SELECT first_name, last_name FROM students
WHERE id='2';


3.2

SELECT  last_name, first_name FROM students
 WHERE    last_name = 'Benichou'  AND first_name = 'Marc';

3.3
 SELECT  last_name, first_name FROM students
 WHERE    last_name = 'Benichou'  OR first_name = 'Marc';

 3.4

 SELECT first_name, last_name FROM students
WHERE first_name LIKE '%a%';

3.5

 SELECT first_name, last_name FROM students
WHERE first_name LIKE 'a%';


3.6 

 SELECT first_name, last_name FROM students
WHERE first_name LIKE '%a_%'

3.7 

SELECT  last_name, first_name FROM students
 WHERE students_id=1 OR students_id=3 ;



4.

SELECT  birth_date,last_name, first_name FROM students
	
 WHERE birth_date >= '01/1/2000'



  