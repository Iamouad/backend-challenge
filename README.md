# The Stack

I created my app with Express.<br>
I used Mongoose to connect to MongoDB atlas cluster (cloud).<br>
I used Jest as my test framework.<br>

## Principal commands:
**_npm install: to install node modules required for that project ._**<br>
**_npm run server launch express server and expose apis (hot-mode reloading)._**<br>
**_npm run test:watch launch unit tests (hot-mode reloading)._**<br>

### Docker config

If you have docker installed, you need to build an image using dockerfile and start the backend container with these commands:<br>
**_docker build -t server-app ._** <br>
**_docker run -p 5000:5000 server-app_**.<br>

else you need to have node installed.<br>

# Api url:

**_http://localhost:5000/api/places/_**<br>

EndPoints:<br>

// @route GET api/places?city=Oklahoma<br>
// @desc get places filtered by name, state, city or all them attributes<br>
// @access Public<br>

// @route POST api/places<br>
// @desc Create a new place (name, state, city attributes are required a checking will be made at the endpoint)<br>
// @access Public<br>

// @route PUT api/places/:place_id<br>
// @desc UPDATE an existing place (update one or more attributes at the time given a place id)<br>
// @access Public<br>

// @route Delete api/places/:place_id<br>
// @desc delete a place<br>
// @access Public<br>
