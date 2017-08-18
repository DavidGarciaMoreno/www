const express = require('express');
const path = require('path');
const twit = require('twit');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
require('dotenv').config();
const port = 3000;

const twitter = new twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

io.on('connection', (socket) => {
    console.log('new connection made ' + socket.id);

    const stream = twitter.stream('statuses/filter', { track: ['javascript'] });

    stream.on('tweet', (tweet) => {
         socket.emit('send-data', tweet)
     });

    stream.on('connected', streamOnConnect);
    stream.on('limit', streamOnLimit);
    stream.on('warning', streamOnWarning);
    stream.on('error', streamOnErrors);
    stream.on('disconnect', streamOnDisconnect);

    socket.on('disconnect-stream', (response) => {
        console.log('disconnected from stream');
        stream.stop();
    });

    socket.on('disconnect', (response) => {
        console.log('disconnected from client ' + socket.id);
    });
});

app.get('/search', (req, res, next) => {
  console.log(req.query);
  let queryString = req.query;

  twitter.get('search/tweets', {
    q: queryString.query
  }, (error, tweets, response) => {
    if(error) {
      console.log(error);
    }
    res.send(tweets);
  });
});

function streamOnConnect(connect) {
    console.log('Streaming from the Twitter API...');
}

function streamOnLimit(limitMessage) {
    console.log('Limit message received. Stopping.');
    twitter.stop();
}

function streamOnWarning(warning) {
    console.log('Warning, too many tweets');
}

function streamOnDisconnect(disconnected) {
    console.log('Disconnected from stream');
    twitter.stop();
}

function streamOnErrors(error) {
    console.log(`${error.message} ${error.statusCode}`);
}

server.listen(port, () => {
  console.log("listening on port " + port);
});