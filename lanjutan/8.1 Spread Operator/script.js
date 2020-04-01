// spread operator
// menggabungkan 2 array
const mhs = ['Ronaldo', 'Messi', 'Raul'];
const dosen = ['Candra', 'Setiawan', 'Kholis'];
const orang = [...mhs, ...dosen];
console.log(orang);

// menambah array lain
const org = [...mhs, 'Jimmy', ...dosen];
console.log(org);