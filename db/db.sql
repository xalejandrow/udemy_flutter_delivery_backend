use udemy_delivery;

CREATE TABLE users(
	id BIGINT key AUTO_INCREMENT,
	email VARCHAR(180) not NULL UNIQUE,
	name VARCHAR(90) not NULL,
	lastname VARCHAR(90) NOT NULL,
	phone VARCHAR(90) not NULL UNIQUE,
	image VARCHAR(255) null,
	password VARCHAR(90) not null,
	created_at TIMESTAMP(0) not NULL,
	updated_at TIMESTAMP(0) not NULL
);