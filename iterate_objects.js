// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

function logDairy() {
    for (i = 0; i < dairy.length; i++) {
        console.log(dairy[i]);
    }
}

logDairy();

// Task 2
const animal = {
    canJump: true
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
    for (const props in bird) {
        if (bird.hasOwnProperty(props) && props !== 'canJump') {
            console.log(`${props}: ${bird[props]}`);
        }
    }
}

birdCan();

// Task 3
function animalCan() {
    for (const props in bird) {      
        console.log(`${props}: ${bird[props]}`);      
    }
}

animalCan();