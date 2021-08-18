const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users', { 
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true 
})
.then((result) => console.log("Connected to db"))
.catch((err) => console.log(err));

module.exports = mongoose