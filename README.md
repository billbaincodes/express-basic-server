# Deployed Link
https://pacific-dawn-73645.herokuapp.com/

# Basic Express Server: GET all, GET one

## Objectives

* Build a basic express server from scratch
* Write a GET all route
* Write a GET one route
  * Use route parameters

## Resources

* [Express Docs - Hello World](https://expressjs.com/en/starter/hello-world.html)
* [Express Docs - Basic Routing](https://expressjs.com/en/starter/basic-routing.html)
* [Express Docs - Routing](https://expressjs.com/en/guide/routing.html)



# Basic Express Server: Error Handling, POST 

## Objectives

* Review GET routes
* Add error handlers to an express server
* Write a POST route
  * Add bodyParser middleware

## Resources

* [Dan Levy - Express Guides](https://github.com/justsml/guides/blob/master/express/setup-guide/app.js)
* [Learn - Express Middleware](https://learn-2.galvanize.com/cohorts/757/blocks/29/content_files/Server%20Development/06-libraries.md)
* [Learn - Error Handling](https://learn-2.galvanize.com/cohorts/757/blocks/29/content_files/Server%20Development/07-errors.md)



# Basic Express Server: PUT, DELETE Routes

## Objectives

* Write a PUT route (update one resource)
  - Use request parameters
  - Use request body
* Write a DELETE route (delete one resource)
  - Use request parameters

## Resources

* [Express Docs - req.params](https://expressjs.com/en/4x/api.html#req.params)
* [Express Docs - req.body](https://expressjs.com/en/4x/api.html#req.body)



# Basic Express Server: Express Router & Modularization

## Objectives

* Integrate Express Router into a server
* Modularize server routes
  - Separate routes into their own folder
  - Refactor route endpoints to be modular

## Resources

* [Express Docs - Router](https://expressjs.com/en/4x/api.html#router)



# Basic Express Server: Deploy to Heroku

## Objectives

* Deploy an express server to Heroku
* Use Heroku logs to debug deployment issues
* Configure server code to use environment variables

## Resources

* [Heroku Docs - Deploy Node.js App Tutorial](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
* [Heroku Docs - Heroku Logs](https://devcenter.heroku.com/articles/getting-started-with-nodejs#view-logs)

## Notes

  -Make sure start script is correct in package.json
  -Make sure POST is being set dynamically with environment variable
    -process.env.PORT
  -Bring in cors and enable it as middleware
  -Try deploying the collective API and linking it to the react inbox



# Basic Express Server: Knex Migrations & Seeds

## Objectives

* Add knex to a project
* Setup connection to a local database
* Create and run migration files
* Create and run seed files

## Resources

* [Knex.js Docs](https://knexjs.org/)
* [Knex.js Docs - Schema Builder](https://knexjs.org/#Schema)

## Notes



# Basic Express Server: Knex CRUD

## Objectives

* Implement CRUD functionality using Knex!
  - Create (POST)
  - Read (GET all, GET one)
  - Update (PUT)
  - Delete (DELETE)

## Resources

* [Knex.js Docs](https://knexjs.org/)
* [Knex Cheat Sheet](https://devhints.io/knex)

## Notes
