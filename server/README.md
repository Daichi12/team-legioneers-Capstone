# Getting started with the Express Server
This server folder was created using [Express] (https://github.com/expressjs/express/blob/master/Readme.md).

## Available Scripts

In the project directory, you can run:
### `npm test`
Runs the server on port 5000
The server will be listening to [http://localhost:5000].
The server will respond to the requests being made on the client side following the CRUD methodology.
Any changes being made on the server side will refresh the port that its listening to with said changes.

## For developers
If you want to test the available routes that are shown in index.js, you would need to download the postgres database to create the necesary db and tables. To accomplish this, you can follow this tutorial https://youtu.be/fZQI7nBu32M. Once you have postgres downloaded, you would need to connect to your postgres database as the postgres super user. The credentials needed to connect to the superuser are usually the default values shown on screen. If the default port is not 5433, you would need to change the port in the db.js file too to connect succesfully to the database. Notice that Once you are connected to the superuser, you can run the commands foud in the PorticosDB.sql file. Create the porticosdb database in your superuser and run \c porticosdb command to connect to the recently created database.

Once connected to the database you need to run a command to download a dependency for the accounts table. The command is: create extension if not exists "uuid-ossp";  . Once that extension is downloaded, you can copy and paste the following table commands found in the sql file to create the tables. Once the tables are created, recheck if the default port is 5433, if not then change it to your default and change the password to the one you typed while downloading postgresql to connect to the superuser in the db.js file. Once thats done you can succesfully connect to the database. If you want to test the routes on the index.js file, erase the node_mudules repository found inside the server folder and run npm install to have the dependencies installed. Once thats done, you can run npm test to run nodemon on index.js. 

You can use Postman to generate requests to test the following routes:
http://localhost:5000/event_reservations (POST) Create a new event reservation entry
http://localhost:5000/event_reservations (GET) Return all of the existing event reservations 
http://localhost:5000/event_reservations/id (GET) Returns an event reservation entry
http://localhost:5000/event_reservations/id (PUT) Updates an event reservation entry
http://localhost:5000/event_reservations/id (DELETE) Deletes an event reservation if it exists

http://localhost:5000/table_reservations (POST) Create a new table reservation entry
http://localhost:5000/table_reservations (GET) Return all of the existing table reservations 
http://localhost:5000/table_reservations/id (GET) Returns a table reservation entry
http://localhost:5000/table_reservations/id (PUT) Updates a table reservation entry
http://localhost:5000/event_reservations/id (DELETE) Deletes a table reservation if it exists

http://localhost:5000/account/login (POST) Verifies if the admin account exists in the database. If it exists it will assign a json web token(jwt) to the user.
http://localhost:5000/account/is_verified (GET) Will constantly ask if the user has the necesary jwt token to access the private route to the admin dashboard.
http://localhost:5000/dashboard (GET) Will return the username of the admin account if the user has a valid jwt token.


