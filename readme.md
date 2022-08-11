### Following readme instructions of practice-express-2 with some modificaions

1 - Git init
2 - npm init
3 - added the command "nodemon server.js" as test script in package.json - so that I can run npm test to run dev env
4 - npm i express nodemon
5 - Placed a listen call on the server
6 - Created a landing route "/" and tested it with Postman & browser.
7 - Created a POST route and attempted to echo back the response - FAILED - req.body is undefined due to data incoming to the server not being parsed. Remember all incoming data is in string format so it needs to be parsed.
8 - Parse incoming data to server to be able to use it (this needs to happen as part of server configuation)
9 - Parsing done using body-parser or built in equivalent.
10 - console.log(req.body) after parsing calls - CONFIRMED returns OBJECT with passed in values
11 - Created .gitignore and added node_modules to it - didn't add .gitignore to itself as that's not best practice. It needs to be committed.
12 - Changed the test command as this should be for a testing script not for development runtime. Instead, created a start-dev command.
13 - Routes folder + 3 routes
