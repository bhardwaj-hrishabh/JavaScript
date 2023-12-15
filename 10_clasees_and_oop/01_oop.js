const user = {
    username: "hrishabh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details");
        // console.log(`UserName : ${this.username}`);
        console.log(this);
    }

}


// console.log((user.username));
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("hrishabh", 5, true);
const userTwo = new User("hrishi", 15, false);
console.log(userOne.constructor);
// console.log(userTwo);
// New keybooard create new object everytime