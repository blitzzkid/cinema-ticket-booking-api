## About the app

This app has been deployed with circleci for continous integration/continous delivery.

## Link to frontend repository

The frontend repository can be found at https://github.com/mtan014/cinema-ticket-booking 

## Installing required dependencies

To install the app, you would require the following dependencies:

1. Node.js - If you do not have it please download it from https://nodejs.org/en/
2. MongoDB - If you do not have it please download it from https://docs.mongodb.com/manual/installation/#mongodb-community-edition-installation-tutorials using the appropriate commands for the OS you are using.

## Starting your database

Please start your mongoDB database by running the following command in your terminal

```
mongod --dbpath ~/data/db"
```

## Running the app

Please start your database first before running this application. Also, please start this backend application first and populate it with data before you start the frontend application. After which you can do the following steps:

1. Unzip the code to a folder on your computer
2. Go to the project's folder in your command line and run the following 2 commands:

Install dependencies:

```
npm install
```

Starting the application:

```
npm run start:dev
```

## Populating data

Populate your database with data for seats by making a post request to `http://localhost:3005/seats/new` with the following json in the body. You can do this through apps such as `Insomnia` or `Postman`. You can also populate the database by running the Cypress end to end tests from the frontend project after the database and backend application is started.

```json
{
  "seatNumber": "A1",
  "status": "available",
  "capacity": 1
}
```

## Running the unit and integration tests

To run the tests

```
npm test
```

To view the unit test coverage

```
npm run test:coverage
```
