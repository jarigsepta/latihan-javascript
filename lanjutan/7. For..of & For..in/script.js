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

// Nodelist
const liNama = document.querySelectorAll('.nama');
for (const n of liNama) {
    console.log(n.innerHTML);
}

// arguments
function jumlahkanAngka() {
    let jumlah = 0;
    for (const a of arguments) {
        jumlah += a;
    }
    return jumlah;
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for..in
const mahasiswa = {
    nama: 'Ronaldo',
    usia: 23,
    email: 'ronaldo23@gmail.com'
}

for (const m in mahasiswa) {
    console.log(mahasiswa[m]);

}