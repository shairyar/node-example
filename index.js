const { appsignal } = require("./appsignal")
const { expressMiddleware, expressErrorHandler } = require("@appsignal/express")

const express = require("express")
const app = express();

// ADD THIS AFTER ANY OTHER EXPRESS MIDDLEWARE, BUT BEFORE ANY ROUTES!
app.use(expressMiddleware(appsignal));

app.get("/", (req, res) => {
  res.send("How are you doing?");
});

app.get("/error", (req, res) => {
  throw new Error('No message given')
});

// ADD THIS AFTER ANY OTHER EXPRESS MIDDLEWARE, AND AFTER ANY ROUTES!
app.use(expressErrorHandler(appsignal))

app.listen(8080, () => {
  console.log("Listening on port 8080");
});


app.use(function(req, res, next) {
  res.status(404).send('404');
});