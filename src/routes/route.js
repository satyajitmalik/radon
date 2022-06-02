const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore')
const lodash = require ('lodash')

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
    console.log('The first element received from underscope function is '+firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    //chunk function
    const arr =["january","February","March","April","May","June","July","August","September","October","November","December"]
    console.log(lodash.chunk(["january","February","March","April","May","June","July","August","September","October","November","December"],3))
    //Tail function
    const arr1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  const arr2=[];
  let count=0;
    for (let i=0;i<=arr1.length;i++){
  if (i%2!=0){
    arr2.push(i)
  count++;
  }if (count==10){
      break;
  }
   }
   console.log(lodash.tail(arr2));
   //union function
    const arrUnion=lodash.union([10,12],[12,13,14],[14,15,16],[15,16,17])
    console.log(arrUnion)  

    //fromPairs
    let arrpairs=[["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];
 let obj= lodash.fromPairs(arrpairs)  
 console.log(obj);
    
    
    res.send('Hello there!')
});

router.get('/candidates', function(req, res){
    console.log('Query paramters for this request are '+JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is '+state)
    console.log('Gender is '+gender)
    console.log('District is '+district)
    let candidates = ['Akash','Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res){
    console.log('The request objects is '+ JSON.stringify(req.params))
    console.log('Candidates name is '+req.params.canidatesName)
    res.send('Done')
})

router.get('/movies',function(req,res){

    const arr=["inception","Moonfall","spider man"]
    res.send(arr)
})
router.get('/movies/:indexNumber',function(req,res){

    const arr=["inception","Moonfall","spider man"]
    if(req.params.indexNumber>arr.length){
        res.send("Enter valid indexNumber")
    }else{

        res.send(arr[req.params.indexNumber])
    }

})
router.get('/films', function(req,res){
    const arr=[ {
        "id":1,
        "name":'paglu'},
        {
        "id":2,
        "name":'prem amar'},
        {
        "id":3,
        "name":'dewana'}
    ]
     res.send(arr)  
})
router.get('/films/:filmid', function(req,res){
    const arr=[ {
        "id":1,
        "name":'paglu'},
        {
        "id":2,
        "name":'prem amar'},
        {
        "id":3,
        "name":'dewana'}
    ]
    if(req.params.filmid>arr.length){
        res.send("No Movie exist with this is")
    }else{
     res.send(arr[req.params.filmid-1])  }
})





module.exports = router;
// adding this comment for no reason