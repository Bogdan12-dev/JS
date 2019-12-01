// // "use strict"

// // // const abc = function(a, b, c) {
// // //     return a + b + c;
// // //   };

// // //   console.log(abc(1, 2, 3));

// // //   const multi = function(a, b, c) {
// // //     return a * b - c;
// // //   };

// // //   console.log(multi(1, 2, 5, 3, 5));

// // //   const fnB = function() {
// // //     console.log("this is function 2");
// // //   };

// // //   const fnA = function() {
// // //     console.log("this is function 1");
// // //     fnB();
// // //     console.log("This is functions 2 & 1");
// // //   };

// // //   console.log(fnA());

// // //   const count = function(countFrom = 0, countTo = 10, step = 1) {
// // //     console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

// // //     for (let i = countFrom; i <= countTo; i += step) {
// // //       console.log(i);
// // //     }
// // //   };

// // //   console.log(count());
// // //   console.log(count(5, 21, 2));
// // //   console.log(count())
// // //    const args = function() {
// // //        let sum = 0;

// // //        for(let el of arguments){
// // //            sum +=el;
// // //        }
// // //        return sum;
// // //    }
// // //    console.log(args(1, 2, 3, 4, 5));
// // //    const arrFromArgs = function(){
// // //        let arr = Array.from(arguments)

// // //        if(arr.includes(5)){
// // //            alert("Molodez");}
// // //            else{
// // //                alert("Rozbiinik")
// // //            }
// // //    };

// // //    const operator = function(...arg){
// // //        console.log(arg);
// // //    };
// // // const withdraw = function(amount, balance) {
// // //     if (amount === 0) {
// // //       console.log('Для проведения операции введите сумму больше нуля.');
// // //     } else if (amount > balance) {
// // //       console.log('Недостаточно средств на счету.');
// // //     } else {
// // //       console.log('Операция снятия средств проведена.');
// // //     }
// // //   };

// // //   withdraw(0, 300); // Для проведения операции введите сумму больше нуля.
// // //   withdraw(500, 300); // Недостаточно средств на счету.
// // //   withdraw(100, 300); // Операция снятия средств проведена.

// // // const hello2 = function(name="Gost"){
// // //     console.log(`Privet, ${name}`);
// // // }
// // // hello2("MAKAR")

// // // const repet = function(str, n = 2){
// // //     for (let i = 0; i <=)
// // // // }\
// // // const c = 5;
// // // function a(){
// // //     const r = 5;
// // //     if(1 == 1){
// // //     }
// // //     console.log(f)
// // //     function b(){
// // //         const f = 10;
// // //     }
// // // }
// // // console.log(c)

// // const h =10;
// // const sum = function(){
// //     let a = 5;
// //     console.log(a = h);
// // };
// // sum();
// // const hots = function(){
// //     let c = 5

// //     const fot = function(){
// //         let b = 10;
// //         console.log(c + b);
// //     };
// //     return fot();
// // }

// // hots();
// // const sum = function(a, b, c) {
// //     console.log(a + b + c );
// // };
// // const sum2 = (a, b, c) => a + b + c;
// // console.log(sum2)

// const multi = function(arr, num) {
//   let newArr = arr.slice(0);
//    for(const el of newArr) {
//        el = el * num;
//    }
//    console.log(newArr);
// };

// const pass = ["qwerty", "qwerty321", "ajax", "zxcvs"];

const pass = prompt("please password");
const validation = function (pass) {
    if(pass.length > 6 && pass.length < 12){
       return true
    }
    else{
    return    false
    }
}
console.log(validation(pass));