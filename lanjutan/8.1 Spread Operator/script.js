// spread operator
// menggabungkan 2 array
const mhs = ['Ronaldo', 'Messi', 'Raul'];
const dosen = ['Candra', 'Setiawan', 'Kholis'];
const orang = [...mhs, ...dosen];
console.log(orang);

// menambah array lain
const org = [...mhs, 'Jimmy', ...dosen];
console.log(org);


// mengcopy array
const mahasiswa = ['Jono', 'Joni', 'jamal'];
const mahasiswa1 = [...mahasiswa]
mahasiswa1[0] = 'Fajar'
console.log(mahasiswa);
console.log(mahasiswa1);

const liMhs = document.querySelectorAll('li');
const mahasiswaa = [...liMhs].map(m => m.textContent);
console.log(mahasiswaa);