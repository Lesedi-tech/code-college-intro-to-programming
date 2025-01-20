var sayHelloTo = function (name) {
    console.log("Hello " + name + "!");
   };

   sayHelloTo("Nick");

var printMultipleTimes = function (howManyTimes, whatToDraw) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " " + whatToDraw);
    }
};

printMultipleTimes(6, "Lesedi");

var fifthLetter = function (name) {
    if (name.length < 5) {
        return;
    }
    return "The fifth letter of your name is " + name[4] + ".";
};

console.log(fifthLetter("Tyson"));