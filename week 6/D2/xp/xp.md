DAY 2

1.1

SELECT * FROM items
ORDER BY price ASC


1.2

SELECT * FROM items
ORDER BY price DESC

or 

SELECT * FROM items
WHERE price >='80'
ORDER BY price DESC

1.3


SELECT first_name, last_name FROM  customers
ORDER BY first_name ASC
limit 3

1.4

SELECT  last_name FROM  customers
ORDER BY last_name  DESC


2 & 2.1

CREATE TABLE purchases (
 customer_id INTEGER references customers(customers_id),
item_id INTEGER references items(table_id)
)


INSERT INTO purchases(customer_id)
VALUES
('2')

2.2

SELECT first_name, last_name,price,items_name
FROM customers 
FULL OUTER JOIN purchases 
ON customers.customer_id = purchases.customer_id
FULL OUTER JOIN items
ON items.item_id=purchases.item_id


3.1
SELECT ALL * FROM purchases

No, unless you can relate the data from purchases to its parents tables it won't be useful 

3.2

SELECT ALL * FROM purchases,customers 

well it will give you some customers data but without any Purchases
 items history there for the most part not much to do with it

 3.3

 SELECT ALL * FROM purchases 
WHERE purchases.customer_id ='4'

 SELECT ALL * FROM customers,items  
WHERE customers.customer_id ='4'

3.4


SELECT ALL * FROM purchases,items 
WHERE items_name ='large_desk'
AND items_name ='small_desk'


4.

SELECT first_name, last_name,items_name FROM customers,items
WHERE last_name ='Scott'
AND items_name ='hard drive'


5.

SELECT first_name, last_name,items_name FROM customers,items


Exercise 2 : Dvdrental Database

1
SELECT * FROM customer


2.
SELECT (first_name ||' ' || last_name)  AS  full_name FROM customer



3.
SELECT DISTINCT create_date FROM customer

4.


SELECT DISTINCT first_name  FROM customer
ORDER BY  first_name ASC

5. 
SELECT  rental_rate ,film_id, title,description,release_year FROM film
ORDER BY rental_rate ASC


6.
SELECT address,phone FROM address
WHERE district='Texas'


7.

SELECT * FROM film
WHERE film_id ='15'
OR film_id ='150'


8.

SELECT film_id,title,description,rental_rate,length FROM film

9.

SELECT film_id,title,description,rental_rate,length FROM film
WHERE title LIKE 'Ai%'


10.

SELECT title, replacement_cost  FROM film
ORDER BY replacement_cost ASC
LIMIT 10 


11.

SELECT title, replacement_cost  FROM film
ORDER BY replacement_cost ASC
LIMIT 20 



12.



SELECT customer.customer_id ,first_name,last_name,payment_id
FROM customer
INNER JOIN payment
ON customer.customer_id=payment.customer_id
ORDER BY customer_id ASC



13. 


SELECT film.film_id, inventory.film_id, title
FROM film
LEFT JOIN inventory
ON  film.film_id=inventory.film_id
WHERE inventory.film_id IS null


14.

SELECT city, country
FROM country
INNER JOIN city
ON  city.country_id=country.country_id




