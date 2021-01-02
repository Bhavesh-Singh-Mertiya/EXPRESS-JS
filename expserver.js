const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
	res.send("Welcome to my  express js application")
})

app.get('/about', function(req, res){
	res.send("This is my about page")
})

app.get('/calculator', function(req, res) {
	// console.log(__dirname)
	 res.sendFile(__dirname + '/cal.html')
})

app.post('/calculator', function(req, res){
	// res.send("thanku for your post")

	console.log(req.body)

	let n1 = Number(req.body.num2)
	let n2 = Number(req.body.num1)
	let sum = n1 + n2 

	res.send("The sum of number is : " + sum)
})

app.listen(port, function(req, res){
	console.log(`server is running at port localhost//: ${port}`);
});