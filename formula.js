class Persegi {
  constructor(sisi) {
    this.sisi = sisi;
  }

  luas(sisi) {
    return sisi*sisi;
  }

  keliling(sisi) {
    return sisi*4;
  }
}

class PersegiPanjang {
  constructor(panjang, lebar) {
    this.panjang = panjang;
    this.lebar = lebar;
  }

  luas(panjang, lebar) {
    if (panjang === lebar) {
      return "Kalau panjang & lebar sama itu persegi bre.. bukan persegi panjang.. lu salah input ga..?";
    }
    return panjang * lebar;
  }

  keliling(panjang, lebar) {
    if (panjang === lebar) {
      return "Kalau panjang & lebar sama itu persegi bre.. bukan persegi panjang.. lu salah input ga..?";
    }
    return (panjang+lebar)*2;
  }
}

module.exports = {
  Persegi,
  PersegiPanjang,
}