// Jooneil Ahn
// Example for public get method

var reply = require('./../');

var opts = {
    first: {
        message: "This is the first question. Which of these colors is your favorite color?",
        options: ['red', 'blue', 'green']
    },
    second: {
        message: "Why is your favorite color red?",
        depends_on: {
            first: 'red'
        }
    },
    third: {
        message: "What is your favorite food?",
        type: 'string'
    },
    fourth: {
        message: "What is your favorite password to use?",
        type: 'password'
    },
    fifth: {
        message: "Is the reply module cool?",
        type: 'boolean',
        default: true
    }
}

reply.get(opts, function(err, results) {
    if (err) {
        console.log("error...closing.")
    } else {
        console.log("\nSo apparently your favorite color is " + results.first);
        console.log("Your favorite food is " + results.third);
        console.log("Your favorite password is " + results.fourth);
        if (results.fifth) {
            console.log ("And you think this module is cool. \n");
        } else {
            console.log("And you don't think module is cool :( \n");
        }
    }
})