// 26 Fetch, async, await

// Callbacks

function firstFunction(parameters, callback) {
    // do stuff
    callback();
};

// Also known as "callback hell"
firstFunction(parameter, function(){
    secondFunction(parameter, function(){
        thirdFunction(parameter, function(){
             
        });
    });
});

