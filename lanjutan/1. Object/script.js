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