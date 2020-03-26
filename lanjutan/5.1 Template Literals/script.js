// Template String (Literals)

const nama = 'Joni';
const umur = 23;

console.log(`Halo, nama ${nama} dan umur ${umur} tahun`);



console.log(`${alert('halo')}`);


const x = 10;
console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);


// html fragments
const mhs = {
    nama: 'Joko',
    umur: 23,
    nrp: 123456,
    email: 'joko@gmail.com'
};

const el = `<div class="mhs">
<h2>${mhs.nama}<h2>
<span class="nrp">${mhs.nrp}</span>
</div>`;

console.log(el);