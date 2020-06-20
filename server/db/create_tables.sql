CREATE DATABASE perntodo;

-- UTC timestamp
CREATE TABLE Todo(
	todo_id SERIAL PRIMARY KEY,
	content VARCHAR(255),
	time_of_creation TIMESTAMP WITHOUT TIME ZONE DEFAULT (NOW() AT TIME ZONE 'utc'),
	done BOOLEAN
);


