CREATE DATABASE IF NOT EXISTS curso_angular4;
USE curso_angular4;

CREATE TABLE productos(
id 					int(255) auto_increment not null,
name	 			varchar(255),
description	text,
price				varchar(255),
image				varchar(255),
CONSTRAINT pk_productos PRIMARY KEY(id)
)ENGINE InnoDb;