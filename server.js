
const express = require('express');
var cors = require('cors');
const app = express();
const bodyParser= require('body-parser');
var path =require('path');
const root = require('path').join(__dirname,  'build');



// const api = require('./server/routes/index');

const port = 3002;

app.use(cors());
// app.use('/api', api);


app.use(bodyParser.urlencoded({extended: true}));

const MongoClient = require('mongodb').MongoClient;



var db;
MongoClient.connect('mongodb+srv://tester:1q2w3e4r@cluster0.kjxwx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
function(에러, client){
  if (에러) return console.log(에러)
  
  db = client.db('nodetest');

  app.listen(3002, function() {
    console.log('listening on 3002')
  });

  app.use(express.static(root));

  app.get("*", (요청, 응답) => {
    응답.sendFile('index.html', { root });
})

// app.get('/', function(요청, 응답) { 
  
//   응답.sendFile(path.join(__dirname, '/build/index.html'))
// }) 


app.post('/add', function(요청, 응답){
    응답.send('전송완료');
    console.log(요청.body.date);
    console.log(요청.body.title);
    db.collection('post').insertOne({이름: 요청.body.date, 나이 : 요청.body.title}, function(에러, 결과){
        console.log('저장완료');
    
})});
});