# TDD with Node.js

A project created to learn Test Driven Development (TDD) with Node.js, PostgreSQL, and Knex.
We practice a [TDD approach](https://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html) called Red/Green/Refactor.

The rules of Red/Green/Refactor (RGR) cycle are simple.

1. Create a unit tests that fails
2. Write production code that makes that test pass.
3. Clean up the mess you just made.

> Make it work. Make it right. Make it fast. — Kent Beck's original injunction

**What are we creating?**

This is a test-first approach to developing a RESTful API.

## Tech Stack

- Database: PostgreSQL
- SQL query builder: Knex.js
- Test runner: Mocha
- Test assertion: Chai

## Local Development

Run the app with this command:

```sh
npm start
```

Debug the app with this command:

```sh
npm run debug
```

## Project status

We are not quite done since we are not testing or handling for all possible errors.
