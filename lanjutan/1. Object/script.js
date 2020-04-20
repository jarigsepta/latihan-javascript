// 1. Object Literal
// Problem : Tidak Efektif untuk Object yang Banyak
let mahasiswa1 = {
    nama: 'Joni',
    energy: 10,
    makan: function (porsi) {
        this.energy = this.energy + porsi;
        console.log(`Hallo ${this.nama}, Selamat Makan!`);
    }
}

let mahasiswa2 = {
    nama: 'Toni',
    energy: 20,
    makan: function (porsi) {
        this.energy = this.energy + porsi;
        console.log(`Hallo ${this.nama}, Selamat Makan!`);
    }
}



// 2. Function Declaration
function Mahasiswa(nama, energy) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;

    mahasiswa.makan = function (porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan !`);
    }

    mahasiswa.main = function (jam) {
        this.energy -= jam;
        console.log(`Halo ${this.nama}, Selamat Bermain !`);
    }
    return mahasiswa;
}

let sandi = Mahasiswa('Sandi', 10);
let doddy = Mahasiswa('Doddy', 20);



// 3. Constructor Function
function Mahasiswa(nama, energy) {
    this.nama = nama;
    this.energy = energy;

    this.makan = function (porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan !`);
    }

    this.main = function (jam) {
        this.energy -= jam;
        console.log(`Halo ${this.nama}, Selamat Bermain !`);
    }
}

let toni = new Mahasiswa('Toni', 10);

// Contoh lain
function Manusia(nama, tanggalLahir, tempatLahir, jenisKelamin, tempatTinggal) {
    this.nama = nama
    this.tanggalLahir = tanggalLahir
    this.tempatLahir = tempatLahir
    this.jenisKelamin = jenisKelamin
    this.tempatTinggal = tempatTinggal
}

var samsul = new Manusia('Samsul', '10 Januari 1996', 'Surabaya', 'Laki-Laki', 'Surabaya');
var charles = new Manusia('Charles', '08 Maret 1980', 'Maluku', 'Laki-Laki', 'Maluku')


// 4. Function Declaration + Object.create()

const methodMahasiswa = {
    makan: function (porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.nama}, Selamat Makan !`);
    },
    main: function (jam) {
        this.energy -= jam;
        console.log(`Halo ${this.nama}, Selamat Bermain !`);
    },
    tidur: function (jam) {
        this.energy += jam * 2;
        console.log(`Halo ${this.nama}, Selamat Tidur !`);
    }
};

function Mahasiswa(nama, energy) {
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;

    return mahasiswa;
}

let jamal = Mahasiswa('Jamal', 10);


// 5. Prototype
function Mahasiswa(nama, energy) {
    this.nama = nama;
    this.energy = energy;
}

Mahasiswa.prototype.makan = function (porsi) {
    this.energy += porsi;
    return `Halo ${this.nama}, Selamat Makan`;
};

Mahasiswa.prototype.main = function (jam) {
    this.energy -= jam;
    return `Halo ${this.nama}, Selamat Main`;
};

Mahasiswa.prototype.tidur = function (jam) {
    this.energy += jam * 2;
    return `Halo ${this.nama}, Selamat Tidur`;
};

let surya = new Mahasiswa("Surya", 100);


// 6. Versi Class
class Mahasiswa {
    constructor(nama, energy) {
        this.nama = nama;
        this.energy = energy;
    }
    makan(porsi) {
        this.energy += porsi;
        return `Halo ${this.nama}, Selamat Makan`
    }
    main(jam) {
        this.energy -= jam;
        return `Halo ${this.nama}, Selamat Main`
    }
    tidur(jam) {
        this.energy += jam * 2;
        return `Halo ${this.nama}, Selamat Tidur`
    }
}

let samsul = new Mahasiswa("Samsul", 100);