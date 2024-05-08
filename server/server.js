// ! Bring the express module into our server file
const express = require('express')

// ! Create an instance of express, bu calling the function.
const app = express()
const port = 5000

// * The server will be attached to "localhost", at specific port (5000)

// ! Make server deliver our webpage
  // Tell the server where the files for the page are
app.use(express.static('server/public'))



let quoteList = [
  { text: 'I\'m not going to school just for the academics - I wanted to share ideas, to be around people who are passionate about learning.', author: 'Emma Watson' },
  { text: 'Remember there\'s no such thing as a small act of kindness. Every act creates a ripple with no logical end.', author: 'Scott Adams' },
  { text: 'Intelligence plus character-that is the goal of true education.', author: 'Martin Luther King, Jr.' }
];


// GET ROUTE

 //app.use can be used for other things like routes
 //route start with a method type: GET, POST, PUT , DELETE
 //route need to have a path
//route needs to have a callback function(arrow function)
// route is a method type that receive two arguments
// ALL ROUTES MUST RESPOND WITH EITHER A STATUS CODE OR DATA
//mean we're calling the function app.get and telling it to call it quotes and what to do with the () {}

// sending status number
//app.get('/quotes', (req, res) => {
 // res.sendStatus(200) // code for the endpoint
// })

//sending some data
resizeBy.send(quoteList)




// ! Actually start server when file is ran
app.listen(
    port,
    () => { console.log("Listening on port...", port)}
)