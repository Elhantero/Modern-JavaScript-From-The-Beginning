let val;

const today = new Date();
let birthDay = new Date("7-18-1987");
birthDay = new Date("September 10 1980");
birthDay = new Date("9/10/1987");

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getTime();

birthDay.setMonth(2);
birthDay.setDate(12);
birthDay.setFullYear(1985);
birthDay.setHours(2);
birthDay.setMinutes(30);
birthDay.setSeconds(25);

console.log(val);
console.log(birthDay);
