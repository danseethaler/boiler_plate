//Server

var express = require('express'),
    request = require('request');

var app = express();

app.use(express.static('static'));

app.get('/:userID',function(req, res){

    var userID = req.params.userID

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

    for (var i = 0; i < users.length; i++) {
        if (users[i].id === userID) {
            res.send(users[i])
            break;
        }
    }


})

app.listen(8888);
