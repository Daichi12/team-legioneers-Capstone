CREATE DATABASE PorticosDB;

CREATE TABLE Account(
Account_id SERIAL PRIMARY KEY,
Employee_FirstName VARCHAR(40),
Employee_LastName VARCHAR(40),
Employee_Password VARCHAR(225)
);

CREATE TABLE Menu(
    Dish_id SERIAL PRIMARY KEY,
    Dish_Name VARCHAR(100),
    Dish_Description VARCHAR(100),
    Dish_Pricing VARCHAR(400),
    Dish_Type DECIMAL
    );
CREATE TABLE Gift_Shop(
    Merchandise_id SERIAL PRIMARY KEY,
    Merchandise_Name VARCHAR(100),
    Merchandise_Description VARCHAR(100),
    Merchandise_Pricing DECIMAL
);
CREATE TABLE Event_Reservations(
    Event_Reservation_id SERIAL PRIMARY KEY,
    Reservation_Name VARCHAR(80),
    Group_Size INTEGER,
    Phone VARCHAR(12),
    Email VARCHAR(100),
    Event_Start_Time TIMESTAMP,
    Event_End_Time TIMESTAMP,
    Notes VARCHAR(100)
);
CREATE TABLE Table_Reservations(
    Table_Reservation_id SERIAL PRIMARY KEY,
    Reservation_Name VARCHAR(80),
    Reservation_Time TIMESTAMP,
    Group_Size INTEGER,
    Phone VARCHAR(12),
    Notes VARCHAR(100)
);