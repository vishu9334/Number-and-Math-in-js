const score = 400 
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// console.log(balance);

const otherNum = 1290.8966
// console.log(otherNum.toPrecision(5));

const hunderds = 1000000;
// console.log(hunderds.toLocaleString('en-IN'));
// console.log(hunderds.toLocaleString());

//+++++++++++++++++++++++++ Maths ++++++++++++++++++++++++

console.log(Math);
// console.log(Math.abs(-4)); // This .abs mathod is do for convert negtive value only. 
//                             // Output is 4
// console.log(Math.round(4.3)); // This .round mathod is doing replace decimal value and get only intiger value.
// console.log(Math.ceil(4.3)); // This .ceil mathod is doing replace decimal value and get greter value as to campaire before value.
// console.log(Math.floor(4.3)) // flore method give a only from current value to get lower value. 

// console.log(Math.min(3,4,1,6));
// console.log(Math.max(3,4,1,6));

// console.log(Math.floor(Math.random()*10 )+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1))+ min)