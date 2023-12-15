class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hrishabh`
    }

    set password(value){
        this._password = value
    }
}

const hrishabh = new User("h@hrishabh.ai", "abc")
console.log(hrishabh.email);