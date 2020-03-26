// const mhs = {
//     nama: 'Joko',
//     umur: 23,
//     nrp: 123456,
//     email: 'joko@gmail.com'
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}<h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>`;


// 2. Looping
// const mhs = [{
//         nama: 'Joni',
//         email: 'joni@gmail.com'
//     },
//     {
//         nama: 'Joko',
//         email: 'joko@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
// ${mhs.map(m => `<ul>
// <li>${m.nama}</li>
// <li>${m.email}</li>
// </ul>`).join('')}
// </div>`;

// document.body.innerHTML = el;


// 3. COnditional
const lagu = {
    judul: 'Kau Adalah',
    penyanyi: 'Isyana Sarasvati',
    feat: 'Rayi Putra'
}

const ell = `<div class="lagu">
<ul>
    <li>${lagu.penyanyi}</li>
    <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
</ul>
</div>`;

document.body.innerHTML = ell;



// 4. Nested
// html fragments
const mhs = {
    nama: 'Joko',
    semester: 7,
    matakuliah: [
        'RPL',
        'Web',
        'PBO'
    ]
};

function cetakMatakuliah(mataKuliah) {
    return `
    <ol>
        ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
    </ol>`;
}

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">Semester : ${mhs.semester}</span>
<h4>Mata Kuliah :</h4>
${cetakMataKuliah(mhs.mataKuliah)}</div>`;

document.body.innerHTML = el;