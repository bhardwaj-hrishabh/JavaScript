// let myName = "hrishabh    "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hrishabh = function(){
    console.log("Hrishabh is present in all objects");
}

Array.prototype.heyHrishabh = function(){
    console.log("Hrishabh says Hello");
}


myHeroes.hrishabh()
myHeroes.heyHrishabh()
// heroPower.heyHrishabh()


// INHERITANCE

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "


String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True Length is : ${this.trim().length}`);
}

anotherUsername.trueLength()
"hrishabh".trueLength()
"iceTea".trueLength()