//Server

var express = require('express'),
    request = require('request');

var app = express();

app.use(express.static('static'));

// a middleware with no mount path; gets executed for every request to the app
app.use(function (req, res, next) {
  console.log('Date:', new Date().toDateString());
  next();
});

    var users = [
    	{
    		name: 'Scott',
    		id: '344dff',
    		credits: 0
    	},
    	{
    		name: 'Dan',
    		id: '358sjv',
    		credits: 6
    	},
    	{
    		name: 'Jake',
    		id: '736mdd',
    		credits: 0
    	},
    	{
    		name: 'Steve',
    		id: '046shh',
    		credits: 12
    	}
    ]

app.get('user/:userID',function(req, res){

    var userID = req.params.userID;

    for (var i = 0; i < users.length; i++) {
        if (users[i].id === userID) {
            res.send(users[i])
            break;
        }
    }

})

app.get('/all',function(req,res){

    res.send(users)
    return;
})

app.listen(8888);
