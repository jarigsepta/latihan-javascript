// Arrow function (function expression)
const Mahasiswa = function () {
    this.nama = 'Joko';
    this.umur = 23;
    this.sayHello = () => {
        console.log(`Halo, nama ${this.nama} dan usia ${this.umur} tahun`);
    }
}

const joko = new Mahasiswa();



const Mhs = function () {
    this.nama = 'Joni';
    this.umur = 23;
    this.sayHello = () => {
        console.log(`Halo, nama ${this.nama} dan usia ${this.umur} tahun`);
    }

    setInterval(() => {
        console.log(this.umur++);
    }, 500);
}

const joni = new Mhs();