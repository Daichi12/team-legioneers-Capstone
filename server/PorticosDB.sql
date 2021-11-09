CREATE DATABASE PorticosDB;

CREATE TABLE Account(
Account_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
Employee_UserName VARCHAR(80),
Employee_Password VARCHAR(225)
);

CREATE TABLE Menu(
    Dish_id SERIAL PRIMARY KEY,
    Dish_Name VARCHAR(100),
    Dish_Type VARCHAR(100),
    Dish_Description VARCHAR(400),
    Pricing DECIMAL
    );
CREATE TABLE Merchandise_Shop(
    Merchandise_id SERIAL PRIMARY KEY,
    Merchandise_Name VARCHAR(100),
    Merchandise_Description VARCHAR(100),
    Merchandise_Pricing DECIMAL
);
CREATE TABLE Table_Reservations(
    Reservation_id SERIAL PRIMARY KEY,
    Reservation_Name VARCHAR(80),
    Reservation_Time VARCHAR(7),
    GROUP_SIZE INTEGER,
    Phone VARCHAR(12),
    Notes VARCHAR(100)
);
CREATE TABLE Event_Reservations(
    Reservation_id SERIAL PRIMARY KEY,
    Reservation_Name VARCHAR(80),
    GROUP_SIZE INTEGER,
    Phone VARCHAR(12),
    Email VARCHAR(100),
    Event_Start_Time VARCHAR(7),
    Event_End_Time VARCHAR(7),
    Notes VARCHAR(100)
);
INSERT INTO Account (Employee_UserName, Employee_Password) VALUES ('Roberto Melendez', 'abc123');