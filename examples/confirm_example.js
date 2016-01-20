// Jooneil Ahn
// Example for public confirm method

var reply = require('./../');

reply.confirm("Please type yes to confirm", function(err, yes) {
    if (!err && yes) {
        console.log("You have confirmed!");
    } else {
        console.log("You have not confirmed!");
    }
});
