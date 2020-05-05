let ditepati = true;
const janji = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve("Janji telah ditepati");
  } else {
    reject("ingkar janji");
  }
});

janji
  .then((response) => console.log("OK : " + response))
  .then((response) => console.log("Not Ok  : " + response));

let ditepati1 = true;
const janji1 = new Promise((resolve, reject) => {
  if (ditepati1) {
    setTimeout(() => {
      resolve("Ditepati setelah beberapa waktu");
    }, 2000);
  } else {
    setTimeout(() => {
      resolve("Tidak ditepati setelah beberapa waktu");
    }, 2000);
  }
});

console.log("mulai");
// console.log(janji1.then(() => console.log(janji1)))
janji1
  .finally(() => console.log("Selesai menunggu"))
  .then((response) => console.log("OK : " + response))
  .catch((response) => console.log("Not Ok : " + response));
console.log("selesai");

// Promise ALL
const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        judul: "Dilan",
        sutradara: "Dilan",
        pemeran: "Dilan",
      },
    ]);
  }, 1000);
});
// Connect API Lain
const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kabupaten: "Lamongan",
        temp: 32,
        kondisi: "Cerah Berawan",
      },
    ]);
  }, 500);
});

// dengan cara satu-satu
// film.then((response) => console.log(response));
// cuaca.then((response) => console.log(response));

// menjalankan promise sekaligus
Promise.all([film, cuaca]).then((response) => {
  const [film, cuaca] = response;
  console.log(film);
  console.log(cuaca);
});
