CREATE TABLE labook_users(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE labook_posts(
    id VARCHAR(255) PRIMARY KEY,
    photo VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL UNIQUE,
    created_at DATE NOT NULL,
    author_id VARCHAR(255),
    type ENUM ("normal", "evento") default "normal",
    foreign key (author_id) references labook_users (id)
);

CREATE TABLE labook_friends(
	id_follow VARCHAR(255),
	id_followed VARCHAR(255),
	FOREIGN KEY (id_follow) REFERENCES labook_users(id),
	FOREIGN KEY (id_followed) REFERENCES labook_users(id)
);