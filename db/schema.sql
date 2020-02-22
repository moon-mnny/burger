drop database if exists burgers_db;
create database burgers_db;

use burgers_db;

create table burgers (
  id int not null AUTO_INCREMENT,
  burger_name varchar(50) NOT NULL,
  devoured boolean default False,
  primary key (id)
);
