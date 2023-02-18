const {Persegi, PersegiPanjang} = require("./formula.js")

let persegi = new Persegi();

console.log(`Luas persegi: ${persegi.luas(12)}`);
console.log(`Keliling persegi: ${persegi.keliling(11)}`);

let persegiPanjang = new PersegiPanjang();

console.log(`Luas persegi panjang: ${persegiPanjang.luas(10, 11)}`);
console.log(`Keliling persegi panjang: ${persegiPanjang.keliling(10, 10)}`);