
SQL


XP 

1 & 2 :

CREATE TABLE customers (
customers_id SERIAL PRIMARY KEY,
first_name VARCHAR (300) ,
last_name VARCHAR (300)
)


CREATE TABLE items(
table_id SERIAL PRIMARY KEY,
items_name VARCHAR(500),
amount VARCHAR(50)
)

INSERT INTO items(items_name,amount)
VALUES
('fan','80' )
INSERT INTO items(items_name,amount)
VALUES
('large_desk','300' )
INSERT INTO items(items_name,amount)
VALUES
('small_desk','100')


INSERT INTO customers(first_name,last_name)
 VALUES
 ('Melanie  ' ,'Johnson' )
 INSERT INTO customers(first_name,last_name)
 VALUES
 ('Trevor ' ,'Green' )
INSERT INTO customers(first_name,last_name)
 VALUES
 ('Scott' ,'Scott' )
INSERT INTO customers(first_name,last_name)
VALUES
('Greg', 'Jones' )

3.1(not sure i got what you meat here)

SELECT * FROM items

3.2 

SELECT * FROM items
 WHERE amount < '80';

3.3

 SELECT * FROM items
 WHERE amount <='max';

 3.4
 SELECT * FROM customers
WHERE last_name ='smith'
will show empty 

3.5 

SELECT * FROM customers
WHERE last_name ='Jones'
3.6 
SELECT * FROM customers
WHERE last_name !='Scott'
