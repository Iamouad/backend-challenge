# The Stack

I created my app with Express.
I used Mongoose to connect to MongoDB atlas cluster (cloud).
I used Jest as my test framework.

## Principal commands:
**_npm install: to install dependencies indicated at package.json._**
**_npm run server launch express server and expose apis (hot-mode reloading)._**
**_npm run test:watch launch unit tests (hot-mode reloading)._**

### Docker config

If you have docker installed, you need to build an image using dockerfile and start the backend container with these commands:
**_docker build -t server-app ._** .
**_docker run -p 5000:5000 server-app_**.

else you need to have node installed.

# Api url:

**_http://localhost:5000/api/places/_**

EndPoints:

// @route GET api/places?city=Oklahoma
// @desc get places filtered by name, state, city or all them attributes
// @access Public

// @route POST api/places
// @desc Create a new place (name, state, city attributes are required a checking will be made at the endpoint)
// @access Public

// @route PUT api/places/:place_id
// @desc UPDATE an existing place (update one or more attributes at the time given a place id)
// @access Public

// @route Delete api/places/:place_id
// @desc delete a place
// @access Public
