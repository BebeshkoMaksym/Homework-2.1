// let height = 21;

// for (let i = 1; i < height;i++){
//     let space = ' '.repeat(height - i);
//     let star = '*'.repeat(2 * i - 1)
//     console.log(space + star);
// }

// let number = 9;

// if (number < 2){
//     console.log('Число ' + number + ' не есть простым');
// } else{
//     let isSimple = true;

//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             isSimple = false;
//             break;
//         }
//     }
//     if (isSimple) {
//         console.log('Число ' + number + ' есть простым');
//     } else {
//         console.log('Число ' + number + ' не есть простым');
//     }
// }

// const N = 10; 
// const perfectNumbersInRange = [];

// for (let i = 1; i <= N; i++) {
//   let sum = 0;
//   for (let j = 1; j <= i / 2; j++) {
//     if (i % j === 0) {
//       sum += j;
//     }
//   }
//   if (sum === i) {
//     perfectNumbersInRange.push(i);
//   }
// }

// console.log('Досконалі числа в діапазоні від 1 до ' + N + '; ' + perfectNumbersInRange);
