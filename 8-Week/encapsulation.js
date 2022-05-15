const maas = 4000;
const fazlaMesai = 20;
const fazlaMesaiUcreti = 10;

const maasHesapla = (maas, fazlaMesai, fazlaMesaiUcreti) => {
  return maas + fazlaMesai * fazlaMesaiUcreti;
};

const calisan_1 = {
  maas: 4000,
  fazlaMesai: 20,
  fazlaMesaiUcreti: 10,
  maasHesapla: function () {
    return this.maas + this.fazlaMesai * this.fazlaMesaiUcreti;
  },
};