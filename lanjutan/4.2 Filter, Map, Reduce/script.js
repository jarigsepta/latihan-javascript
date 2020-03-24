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
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);


// map dg arrow function
// kalikan semua angka dg 2
// const newAngka = angka.map(a => a * 2);
// console.log(angka);
// console.log(newAngka);


// reduce dg arrow function
const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(newAngka);