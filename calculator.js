const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
})

app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', (req, res) => {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  let bmi = weight / (height * height);
  
  res.send(`Your BMI is ${bmi.toFixed(2)}`);
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
