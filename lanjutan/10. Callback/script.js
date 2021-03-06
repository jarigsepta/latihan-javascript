// Synchronous Callback
function halo(nama) {
    alert(`Halo, ${nama}`);
}

function tampilkanPesan(callback) {
    const nama = prompt("Masukkan Nama : ");
    callback(nama);
}

tampilkanPesan(halo);

// asynchronous callback
function getDataMahasiswa(url, success, error) {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(xhr.response);
            } else if (xhr.status === 404) {
                error();
            }
        }
    };
    xhr.open("get", url);
    xhr.send();
}
getDataMahasiswa(
    "mahasiswa.json",
    (results) => {
        console.log(JSON.parse(results));
    },
    () => {}
);

//Menggunakan Jquery
$.ajax({
    url: "mahasiswa.json",
    success: (mhs) => {
        mhs.forEach((m) => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    },
});

// Contoh 
$.ajax({
    url: "mahasiswa.json",
    success: (mhs) => {
        mhs.forEach((m) => console.log(m.npm));
    },
    error: (e) => {
        console.log(e.responseText);
    },
});

(function () {

    console.log('mulai');

    setTimeout(function cb() {
        console.log('Callback 1');
    }); // has a default time value of 0

    console.log('pesan');

    setTimeout(function cb1() {
        console.log('Callback 2');
    }, 0);

    console.log('Selesai');
})();

function main(param1, param2, callBack) {
    console.log(param1, param2)
    callBack()
}

function myCallback() {
    console.log('hello callback')
}

main(1, 2, myCallback)