var a = 5;
let b = "kampus merdeka";
const nama = "Genta";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
  let asal = "indonesia";
  return console.log("perkenalkan nama saya " + nama + " nomor urut " + b + "berasal dari " + asal);
}

if (terdaftar === true) {
  console.log(nama + " terdaftar sebagai kegiatan kamous merdeka");
}

a = b;
nama = b;

console.log("asal diakses = " + asal);
console.log("a adalah = " + a);
console.log("b adalah = " + b);

// 1a
// ambilah index ke 2 dalam array baris 5
console.log("array = " + lengkap_arr[1]);

// 1b
// ubah kode diatas sehingga dapat menampilkan kode baris 13
// let terdaftar = true;

// 1c
// lakukan pemnaggilan untuk function perkenalan di baris 22
perkenalan();

// 1d
// kalian bebas mengubah kode diatas hingga menampilkan output pada console
console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
console.log("array = " + lengkap_arr[2]);
console.log("a adalah = " + b);
console.log("b adalah = " + b);
perkenalan();

// no 2
// 2a
//soal  : jelaskan kenapa baris 12,13,14 tidak dapat tampil
//jawab : karena pada variable terdaftar nilainya false sedangkan pada if (terdaftar === true) benilai true

// 2b
// soal  : jelaskan kenapa deklarasi pada baris 17 menyebabkan error?
// jawab : karena di baris 17 ada inisialisasi ulang nilai variable nama menggunakan const, yang mana const tidak dapat diubah nilainya.

// 2c
// soal  : dengan melakukan komen pada baris 17, apakah baris 28 dapat dieksekusi?
// jawab : tidak bisa,
