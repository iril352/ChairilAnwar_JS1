// Contoh java script menggunakn if,else
let nilai = 85;
if (nilai >= 80) {
  console.log("Anda lulus ujian.");
} else {
  console.log("Anda tidak lulus ujian.");
}

// contoh penggunaan script nested 'if'
const email = "iril@gmail.com";
const password = "Konfirmasi";

if (email === "iril@gmail.com") {
  if (password === "konfirmasi") {
    console.log("Selamat Anda berhasil login");
  } else {
    console.log("Password salah");
  }
} else {
  console.log("Email belum terdaftar");
}

// contoh penggunaan script Switch Case
let pekerjaan = "Web Development";

switch (pekerjaan) {
  case "Web Development":
    console.log("Anda adalah seorang Web Development.");
    break;
  case "UI/UX":
    console.log("Anda adalah seorang UI/UX.");
    break;
  case "Desain Grafis":
    console.log("Anda adalah seorang Desain Grafis.");
    break;
  default:
    console.log("Anda memiliki pekerjaan yang tidak dikenal.");
}

// contoh penggunaan script While, Do While
let angka;

do {
  angka = parseInt(prompt("Masukkan angka lebih dari 7: "));
} while (isNaN(angka) || angka <= 7);

console.log("Anda memasukkan angka yang valid: " + angka);

// contoh penggunaan script Function

function* bilanganGenap() {
  let angka = 8;
  while (true) {
    yield angka;
    angka += 8;
  }
}
let generator = bilanganGenap();
console.log(generator.next().value);
console.log(generator.next().value);
