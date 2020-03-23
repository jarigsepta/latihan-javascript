const menampilkanNama = () => `Hello World`;
console.log(menampilkanNama);

// implisit return
const tNama = nama => `Halo, ${nama}`;
console.log('Erik');

const tampilNama = (nama, waktu) => {
    return `Selamat ${waktu}, ${nama}`
}

console.log(tampilNama('Erik', 'Malam'));