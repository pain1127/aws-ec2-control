const express = require('express');
const router = new express.Router();
const AWS = require('aws-sdk');
const config = require('../config/common');

const model = require('./profile');
const axios = require('axios');
// Set the region 
AWS.config.update({
  region: config.region
});

// Create EC2 service object
const ec2 = new AWS.EC2({apiVersion: '2016-11-15'});

/* GET home page. */
router.get('/describeInstance', async (req, res, next) => {

  const params = {
    InstanceIds: [
      "i-0c65d619bb6d343ca"
   ]
  };

  const result = await ec2.describeInstances(params).promise();
  console.log(result);
  res.send(result.Reservations[0].Instances[0].State.Name);
});

/* GET home page. */
router.get('/stopInstance', async (req, res, next) => {
  const params = {
    InstanceIds: [
      "i-0c65d619bb6d343ca"
   ]
  };
  const result = await ec2.stopInstances(params).promise();
 // console.log(result);
  res.send(result);
});

/* GET home page. */
router.get('/startInstance', async (req, res, next) => {
  const params = {
    InstanceIds: [
      "i-0c65d619bb6d343ca"
   ]
  };

  const result = await ec2.startInstances(params).promise();
 // console.log(result);
  res.send(result);
});

router.get('/profile', async (req, res, next) => {
});

router.get('/profile', async (req, res, next) => {
  
  // const result = model.profile.reduce((pre, cur, index) => {
  //   // console.log(pre);
  //   console.log(cur);
  //   cur.data = cur.data.horizontal;
  //   pre.push(cur);
  //   return pre;
  // },[]);
  
  // res.send(result);
  const body = {
    "email" : "297test@catenoid.net",
    "password" : "test12345"
}

  const result = await axios.post('http://localhost:2001/v1/login/login', body);

  console.log(result.data);
  res.send('test');

});



module.exports = router;
