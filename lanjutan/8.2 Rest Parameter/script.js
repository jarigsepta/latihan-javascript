// Rest Parameter

function myFunc(a, ...myArgs) {
    return myArgs;
}

console.log(myFunc(1, 2, 3, 4, 5));


// dg Arguments
function functionKu() {
    return Array.from(arguments);
}
// mengubah object menjadi array
console.log(functionKu(5, 4, 3, 2, 1));


function jumlahkan(...angka) {
    let total = 0;
    for (const a of angka) {
        total += a;
    }
    return total;
}

console.log(jumlahkan(1, 2, 3, 4, 5));


// rest parameter dg reduce
function penjumlahan(...angka) {
    return angka.reduce((a, b) => a + b);
}
console.log(penjumlahan(1, 2, 3, 4, 5));

// rest parameter dg array destructuring
const kelompok1 = ['ROnaldo', 'Raul', 'Kaka', 'Suarez', 'Fernando'];
const [ketua, wakil, ...anggota] = kelompok1;
console.log(anggota);

// rest parameter dg object destructuring
const team = {
    pm: 'Ronaldo',
    frondEnd: 'Messi',
    backEnd: 'Dida',
    ux: 'Pirlo',
    devOps: 'Robert'
}
const {
    pm,
    ...myTeam
} = team;
console.log(myTeam);