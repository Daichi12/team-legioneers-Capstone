CREATE DATABASE PorticosDB;

CREATE TABLE Account(
Account_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
Employee_UserName VARCHAR(80),
Employee_Password VARCHAR(225)
);

CREATE TABLE Menu(
    Dish_id SERIAL PRIMARY KEY,
    Dish_Name VARCHAR(100),
    Dish_Description VARCHAR(100),
    Dish_Pricing VARCHAR(400),
    Dish_Type DECIMAL
    );
CREATE TABLE Merchandise_Shop(
    Merchandise_id SERIAL PRIMARY KEY,
    Merchandise_Name VARCHAR(100),
    Merchandise_Description VARCHAR(100),
    Merchandise_Pricing DECIMAL
);
<<<<<<< HEAD
CREATE TABLE Event_Reservations(
    Event_Reservation_id SERIAL PRIMARY KEY,
=======
CREATE TABLE Table_Reservations(
    Reservation_id SERIAL PRIMARY KEY,
>>>>>>> 44a6274418b79e72426f2dd530b2c0a6b2cb9af5
    Reservation_Name VARCHAR(80),
    Group_Size INTEGER,
    Phone VARCHAR(12),
<<<<<<< HEAD
=======
    Notes VARCHAR(100)
);
CREATE TABLE Event_Reservations(
    Reservation_id SERIAL PRIMARY KEY,
    Reservation_Name VARCHAR(80),
    Reservation_Time TIMESTAMP,
    GROUP_SIZE INTEGER,
    Phone VARCHAR(12),
>>>>>>> 44a6274418b79e72426f2dd530b2c0a6b2cb9af5
    Email VARCHAR(100),
    Event_Start_Time TIMESTAMP,
    Event_End_Time TIMESTAMP,
    Notes VARCHAR(100)
);
<<<<<<< HEAD
CREATE TABLE Table_Reservations(
    Table_Reservation_id SERIAL PRIMARY KEY,
    Reservation_Name VARCHAR(80),
    Reservation_Time TIMESTAMP,
    Group_Size INTEGER,
    Phone VARCHAR(12),
    Notes VARCHAR(100)
);
=======
INSERT INTO Account (Employee_UserName, Employee_Password) VALUES ('Roberto Melendez', 'abc123');
>>>>>>> 44a6274418b79e72426f2dd530b2c0a6b2cb9af5
