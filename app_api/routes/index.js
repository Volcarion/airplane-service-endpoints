var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var ctrlClimb = require('../controllers/climbController');
var ctrlTakeoff = require('../controllers/takeoffController');
var ctrlLanding = require('../controllers/landingController');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Airport Data Querying' });
});
/*
1. db.ClimbData.find({Weight: 18000},{_id: 0, Flaps10: 1})
2. db.ClimbData.find({Weight: 28000},{_id: 0, VClimb: 1})
3. db.ClimbData.find({Weight: 22000}, {_id: 0, Flaps5: 1})
4. db.TakeoffData.find({Setting: 5, Weight: 24000, Temp: "Above 20", Altitude: 4000},{_id: 0, Vr: 1})
5. db.TakeoffData.find({Setting: 15, Weight: 20000, Temp: "At or Below 20", Altitude: 4000},{_id: 0, V2: 1})
6. db.TakeoffData.find({Setting: 10, Weight: 20000, Temp: "At or Below 20", Altitude: 4000},{_id: 0, Vr: 1})
7. db.TakeoffData.find({Setting: 5, Weight: 28000, Temp: "At or Below 20", Altitude: 6000},{_id: 0, Vr: 1})
8. db.LandingData.find({Setting: 10,Weight: 20000},{_id: 0, Vref: 1})
9. db.LandingData.find({Setting: 15,Weight: 29000},{_id: 0, Vapp: 1})
10. db.LandingData.find({Setting: 5,Weight: 24000},{_id: 0, Vga: 1})
*/

router.get('/climb/:weight/:value', ctrlClimb.climbInfo);

router.get('/takeoff/:weight/:setting/:temp/:altitude/:value', ctrlTakeoff.takeoffInfo);

router.get('/landing/:weight/:setting/:value', ctrlLanding.landingInfo);

module.exports = router;
