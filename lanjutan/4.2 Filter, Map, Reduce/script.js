const angka = [-4, 8, 3, -6, 9, 3, -2, 5, 6];

// mencari angka >= 3
// for
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);


// filter dg arrow function
const newAngka = angka.filter(a => a >= 3);
console.log(newAngka);