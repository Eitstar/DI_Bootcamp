create table items ( item_id serial primary key, name varchar(150) not null, amount int not null )

insert into items (name, amount) values ('Macbook', 2500), ('HP', 890), ('Dell', 1230)

create table orders ( order_id int not null, item_id int references items(item_id) on delete cascade )

insert into orders (order_id, item_id) values (1, 2), (1, 2), (1, 3), (1, 1), (2, 1), (2, 3), (3, 1)

select * from items select * from orders