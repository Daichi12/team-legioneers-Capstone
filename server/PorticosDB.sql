CREATE DATABASE PorticosDB;

CREATE TABLE Account(
Account_id SERIAL PRIMARY KEY,
Employee_FirstName VARCHAR(40),
Employee_LastName VARCHAR(40),
Employee_Password VARCHAR(225),
Email VARCHAR(100)
);

CREATE TABLE Menu(
    Dish_id SERIAL PRIMARY KEY,
    Dish_Name VARCHAR(100),
    Dish_Type VARCHAR(100),
    Dish_Description VARCHAR(400),
    Pricing DECIMAL
    );
CREATE TABLE Gift_Shop(
    Merchandise_id SERIAL PRIMARY KEY,
    Merchandise_Name VARCHAR(100),
    Merchandise_Description VARCHAR(100),
    Merchandise_Pricing DECIMAL
);
CREATE TABLE Reservations(
    Reservation_id SERIAL PRIMARY KEY,
    Reservation_Name VARCHAR(80),
    Reservation_Time TIMESTAMP,
    Table_OR_Event VARCHAR(80),
    GROUP_SIZE INTEGER,
    Phone VARCHAR(12),
    Note VARCHAR(100),
    Email VARCHAR(100),
    Event_Start_Time TIMESTAMP,
    Event_End_Time TIMESTAMP
);