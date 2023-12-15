function SetUsername(username){
    // Complex DB calls
    this.username = username
    console.log("Called");
}

function createUsername(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUsername("chai", "chai@google.com", "123")
console.log(chai);