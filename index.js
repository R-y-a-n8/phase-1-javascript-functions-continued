function saturdayFun() {
    console.log("This Saturday, I want to roller-skate!")
}
saturdayFun();
//=> "This Saturday, I want to roller-skate"

1 + 1; //=> 2
"Razzle " + "dazzle!"; //=>"Razzle dazzle"

(function() {
    console.log("Yet more razzling");
});

const fn = function mondayWork () {
    console.log(This mondayWork, I will go to the office)
}

function saturdayFun() {
    const part1 = "roller skate";
    return function () {
        const part 2 = "go to office";
        return function () {
            console.log(`${part1.toUpperCase()} ${part2} ${saturdayFun}`);
        }
    }  
}
