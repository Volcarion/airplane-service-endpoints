var mongoose = require('mongoose');

var connectionstring ="mongodb://Volcarion:Valermos1@ds129600.mlab.com:29600/cidm4382";
mongoose.connect(connectionstring, { useMongoClient: true });

mongoose.Promise = global.Promise;

require('./climb');
require('./takeoff');
require('./landing');