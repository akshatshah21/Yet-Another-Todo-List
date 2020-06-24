# Setup and Installation
Follow these steps to get this project running locally on your computer.

1. If you don't already, install [Node.js](https://nodejs.org/)
2. Install [PostgreSQL](https://www.postgresql.org/). pgAdmin is not required, but if you want, you can install it from [here](https://www.pgadmin.org/download/).
3. Clone this repository on your computer.
```bash
git clone https://github.com/akshatshah21/Yet-Another-Todo-List.git
```
4. Go into the directory and install the required server dependencies.
```bash
cd yet-another-todo-list/
npm install
```
5. Install client dependencies
```bash
npm run client-install
```
6. Create the database in PostgreSQL.

	a. Open the psql shell
	```bash
	psql -U <USERNAME>
	```
	b. Create the database
	```sql
	CREATE DATABASE <DBNAME>
	```
	c. Connect to the database
	```
	\c DBNAME
	```
	d. Create the tables by running the create_tables.sql file
	```bash
	\i <ABSOLUTE_PATH_TO_DIR>/db/create_tables.sql
	```
	e. Check if a table "todo" has been created in a database by running `\d DBNAME`

7. Modify the contents of `keys.js` to match your user credentials for the PostgreSQL database
8. Run the application
```bash
npm run dev
```

You can view the app on localhost:5000/ (or at the port you have set the PORT environment variable to)

