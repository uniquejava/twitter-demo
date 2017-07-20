var express = require('express');
var router = express.Router();
var Twitter = require('twitter');

/* GET home page. */
router.get('/', function (req, res, next) {

  var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

  // client.get('application/rate_limit_status', {
  // }, function (error, response) {
  //   if (error) {
  //     return console.log(error);
  //   }
  //
  //   console.log(JSON.stringify(response));
  // });

  // see https://dev.twitter.com/rest/public/search
  // see Query operators
  // see https://dev.twitter.com/rest/reference/get/search/tweets
  client.get('search/tweets', {
    // q: 'from:kobebryant',
    q: 'China until:2017-06-19',
    // result_type: 'recent',
    lang: 'en',
    count: 200
  }, function (error, tweets, response) {
    if (error) {
      return console.log(error);
    }
    var len = tweets.statuses.length;
    console.log('search: ' + len);
    console.log(JSON.stringify(tweets.statuses[0]));
    console.log(JSON.stringify(tweets.statuses[len - 1]));
  });

  /**
   * Grab a list of favorited tweets
   **/
  client.get('favorites/list', function (error, tweets, response) {
    if (error) {
      return console.log(error);
    }
    console.log("favorites:" + tweets.length);  // The favorites.
  });


  // tweet
  // client.post('statuses/update', {status: 'I Love Twitter'})
  //   .then(function (tweet) {
  //     console.log(tweet);
  //   })
  //   .catch(function (error) {
  //     throw error;
  //   });

  res.render('index', {title: 'Express 4'});
});

module.exports = router;
