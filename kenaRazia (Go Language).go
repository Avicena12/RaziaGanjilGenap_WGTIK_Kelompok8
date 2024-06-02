package main

import (
	"fmt"
	"strconv"
	"strings"
)

type Vehicle struct {
	Name string
	Plat string
	Type string
	Rute []string
}

func isOdd(number int) bool {
	return number%2 != 0
}

func getLastDigit(plat string) int {
	for i := len(plat) - 1; i >= 0; i-- {
		if plat[i] >= '0' && plat[i] <= '9' {
			digit, _ := strconv.Atoi(string(plat[i]))
			return digit
		}
	}
	return 0
}

func kenaRazia(date int, data []Vehicle) []map[string]int {
	lokasiGanjilGenap := []string{
		"Gajah Mada",
		"Hayam Wuruk",
		"Sisingamangaraja",
		"Panglima Polim",
		"Fatmawati",
		"Tomang Raya",
	}

	isDateOdd := isOdd(date)
	var results []map[string]int

	for _, kendaraan := range data {
		if strings.ToLower(kendaraan.Type) == "mobil" {
			isPlateOdd := isOdd(getLastDigit(kendaraan.Plat))
			tilang := 0

			for _, rute := range kendaraan.Rute {
				for _, lokasi := range lokasiGanjilGenap {
					if rute == lokasi {
						if (isDateOdd && !isPlateOdd) || (!isDateOdd && isPlateOdd) {
							tilang++
						}
					}
				}
			}

			if tilang > 0 {
				results = append(results, map[string]int{"name": kendaraan.Name, "tilang": tilang})
			}
		}
	}

	return results
}

func main() {
	data := []Vehicle{
		{
			Name: "Denver",
			Plat: "B 2791 KDS",
			Type: "Mobil",
			Rute: []string{"TB Simatupang", "Panglima Polim", "Depok", "Senen Raya"},
		},
		{
			Name: "Toni",
			Plat: "B 1212 JBB",
			Type: "Mobil",
			Rute: []string{"Pintu Besar Selatan", "Panglima Polim", "Depok", "Senen Raya", "Kemang"},
		},
		{
			Name: "Stark",
			Plat: "B 444 XSX",
			Type: "Motor",
			Rute: []string{"Pondok Indah", "Depok", "Senen Raya", "Kemang"},
		},
		{
			Name: "Anna",
			Plat: "B 678 DD",
			Type: "Mobil",
			Rute: []string{"Fatmawati", "Panglima Polim", "Depok", "Senen Raya", "Kemang", "Gajah Mada"},
		},
	}

	result := kenaRazia(27, data)
	for _, res := range result {
		fmt.Println(res)
	}
}
