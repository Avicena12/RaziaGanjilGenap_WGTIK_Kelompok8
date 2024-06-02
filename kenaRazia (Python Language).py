def kenaRazia(date, data):
    # Lokasi yang termasuk dalam aturan ganjil-genap
    lokasi_ganjil_genap = [
        "Gajah Mada",
        "Hayam Wuruk",
        "Sisingamangaraja",
        "Panglima Polim",
        "Fatmawati",
        "Tomang Raya"
    ]
    
    # Menentukan apakah tanggal adalah ganjil atau genap
    is_date_odd = date % 2 != 0
    
    # Fungsi untuk mengecek apakah pelat nomor ganjil atau genap
    def is_plate_odd(plate):
        last_digit = int(''.join(filter(str.isdigit, plate))[-1])
        return last_digit % 2 != 0
    
    # Array untuk menyimpan hasil pelanggaran
    results = []
    
    # Loop melalui setiap data kendaraan
    for kendaraan in data:
        # Hanya cek kendaraan yang bertipe Mobil
        if kendaraan['type'].lower() == "mobil":
            is_plate_odd_number = is_plate_odd(kendaraan['plat'])
            tilang = 0
            
            # Loop melalui setiap rute yang dilalui kendaraan
            for rute in kendaraan['rute']:
                if rute in lokasi_ganjil_genap:
                    # Cek pelanggaran
                    if (is_date_odd and not is_plate_odd_number) or (not is_date_odd and is_plate_odd_number):
                        tilang += 1
            
            # Jika terdapat pelanggaran, tambahkan ke hasil
            if tilang > 0:
                results.append({"name": kendaraan['name'], "tilang": tilang})
    
    return results

data = [
    {
        "name": "Denver",
        "plat": "B 2791 KDS",
        "type": "Mobil",
        "rute": ["TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"]
    },
    {
        "name": "Toni",
        "plat": "B 1212 JBB",
        "type": "Mobil",
        "rute": [
            "Pintu Besar Selatan",
            "Panglima Polim",
            "Depok",
            "Senen Raya",
            "Kemang"
        ]
    },
    {
        "name": "Stark",
        "plat": "B 444 XSX",
        "type": "Motor",
        "rute": ["Pondok Indah", "Depok", "Senen Raya", "Kemang"]
    },
    {
        "name": "Anna",
        "plat": "B 678 DD",
        "type": "Mobil",
        "rute": [
            "Fatmawati",
            "Panglima Polim",
            "Depok",
            "Senen Raya",
            "Kemang",
            "Gajah Mada"
        ]
    }
]

print(kenaRazia(27, data))
# Output: [ {'name': 'Toni', 'tilang': 1}, {'name': 'Anna', 'tilang': 3} ]
