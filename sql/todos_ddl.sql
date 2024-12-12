use todos;

drop table todos;
create table todos
(
	id int(11) NOT NULL AUTO_INCREMENT
    , text varchar(100)
    , completed bit
    , color varchar(30)
    , PRIMARY KEY (`id`)
);

insert into todos values(0, 'add mysql api', 0, '');

/* select * from todos */