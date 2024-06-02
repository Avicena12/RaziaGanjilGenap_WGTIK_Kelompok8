function kenaRazia(date, data) {
    // Lokasi yang termasuk dalam aturan ganjil-genap
    const lokasiGanjilGenap = [
      "Gajah Mada",
      "Hayam Wuruk",
      "Sisingamangaraja",
      "Panglima Polim",
      "Fatmawati",
      "Tomang Raya"
    ];
  
    // Menentukan apakah tanggal adalah ganjil atau genap
    const isDateOdd = date % 2 !== 0;
  
    // Fungsi untuk mengecek apakah pelat nomor ganjil atau genap
    function isPlateOdd(plate) {
      const lastDigit = plate.match(/\d/g).pop();
      return lastDigit % 2 !== 0;
    }
  
    // Array untuk menyimpan hasil pelanggaran
    const results = [];
  
    // Loop melalui setiap data kendaraan
    for (let i = 0; i < data.length; i++) {
      const kendaraan = data[i];
      
      // Hanya cek kendaraan yang bertipe Mobil
      if (kendaraan.type === "Mobil") {
        const isPlateOddNumber = isPlateOdd(kendaraan.plat);
        let tilang = 0;
  
        // Loop melalui setiap rute yang dilalui kendaraan
        for (let j = 0; j < kendaraan.rute.length; j++) {
          if (lokasiGanjilGenap.includes(kendaraan.rute[j])) {
            // Cek pelanggaran
            if ((isDateOdd && !isPlateOddNumber) || (!isDateOdd && isPlateOddNumber)) {
              tilang++;
            }
          }
        }
  
        // Jika terdapat pelanggaran, tambahkan ke hasil
        if (tilang > 0) {
          results.push({ name: kendaraan.name, tilang: tilang });
        }
      }
    }
  
    return results;
  }
  
  console.log(
    kenaRazia(27, [
      {
        name: "Denver",
        plat: "B 2791 KDS",
        type: "Mobil",
        rute: ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"]
      },
      {
        name: "Toni",
        plat: "B 1212 JBB",
        type: "Mobil",
        rute: [
          "Pintu Besar Selatan",
          "Panglima Polim",
          "Depok",
          "Senen Raya",
          "Kemang"
        ]
      },
      {
        name: "Stark",
        plat: "B 444 XSX",
        type: "Motor",
        rute: ["Pondok Indah", "Depok", "Senen Raya", "Kemang"]
      },
      {
        name: "Anna",
        plat: "B 678 DD",
        type: "Mobil",
        rute: [
          "Fatmawati",
          "Panglima Polim",
          "Depok",
          "Senen Raya",
          "Kemang",
          "Gajah Mada"
        ]
      }
    ])
  );
  
  // Output: [ { name: 'Toni', tilang: 1 }, { name: 'Anna', tilang: 3 } ]
  