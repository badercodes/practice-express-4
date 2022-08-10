### Following readme instructions of practice-express-2 with some modificaions

1 - Git init
2 - npm init
3 - added the command "nodemon server.js" as test script in package.json - so that I can run npm test to run dev env
4 - npm i express nodemon
5 - Placed a listen call on the server
6 - Created a landing route "/" and tested it with Postman
7 - Created a POST route and attempted to echo back the response - FAILED - req.body is undefined due to data incoming to the server not being parsed. Remember all incoming data is in string format.
8 - Parse incoming data to server to be able to use it (this needs to happen as part of server configuation)
9 - console.log(req.body) after parsing calls - CONFIRMED returns OBJECT with passed in values
