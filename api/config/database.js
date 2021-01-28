const mongoose = require ('mongoose');

mongoose.connect('mongodb://mongo/lojasupl', {
     useNewUrlParser: true , 
     useUnifiedTopology: true, 
     useCreateIndex: true,
    });
mongoose.Promise = global.Promise;
module.exports = mongoose;
