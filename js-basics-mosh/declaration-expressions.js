
//Function Declaration
walk()
function walk() {
    console.log('walk'  )
}
walk()

//Function Expression
let run = function() {
console.log('run');
};

let move = run;
run();
move();