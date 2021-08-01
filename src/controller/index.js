const express = require('express');
const router = new express.Router();
const AWS = require('aws-sdk');
const config = require('../config/common');
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


module.exports = router;
