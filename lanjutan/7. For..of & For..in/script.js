// for..of
// array
const mhs = ['Toni', 'Messi', 'Ronaldo'];

for (const m of mhs) {
    console.log(m);
}

//string
const nama = 'Kaka';
for (const n of nama) {
    console.log(n);
}


// menggunakan method entries
for (const [i, m] of mhs.entries()) {
    console.log(`${m} adalah mahasiswa ke-${i}`);
}