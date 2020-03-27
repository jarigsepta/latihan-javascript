const nama = 'Joko';
const umur = 23;

function coba(strings, ...values) {
    let result = '';
    strings.forEach((str, i) => {
        result += `${str}${values[i] || ''}`
    });
    return result;
}


const str = coba `Halo, nama ${nama}, umur ${umur} tahun`;
console.log(str);