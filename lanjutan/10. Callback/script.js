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