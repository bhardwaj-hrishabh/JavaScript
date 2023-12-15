//  Dates

let myDate = new Date()
// console.log(myDate.toString());  // Mon Dec 11 2023 17:40:23 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Mon Dec 11 2023
// console.log(myDate.toLocaleString()); // 11/12/2023, 5:41:40 pm
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default', {
    weekday: "long",
})