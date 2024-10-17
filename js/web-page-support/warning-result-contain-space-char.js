// To tell the user if the output value is contain space character ' '
const resultSpaceWarning = () => {
    let statusEnkripsi = get.element('#tempatStatusEnkripsi').value;

    if (tempatOutput.value.length === 1 && tempatOutput.value === ' ') { // Jika hasil output adalah 1 karakter spasi
        tempatInfo.innerHTML = `* Hasil ${statusEnkripsi} anda adalah 1 karakter spasi`;
    }
    else if (tempatOutput.value.length > 1 && noDuplicate(tempatOutput.value) === ' ') { // Jika hasil output adalah karakter spasi semuanya (2 atau lebih)
        tempatInfo.innerHTML = `* Hasil ${statusEnkripsi} anda adalah ${tempatOutput.value.length} karakter spasi`;
    }
    else if (tempatOutput.value.startsWith('  ') || tempatOutput.value.endsWith('  ')) { // Jika hasil output terdapat karakter spasi yang berhimpitan di awal atau di akhir
        let jumlahSpasi = [...tempatOutput.value].filter(e => e === ' ').length;
        tempatInfo.innerHTML = `* Terdapat ${tempatOutput.value.length} karakter pada hasil ${statusEnkripsi}, dan ${jumlahSpasi} diantaranya merupakan karakter spasi, hati-hati jika ingin meng-copy`;
    }
    else if (tempatOutput.value.startsWith(' ') && tempatOutput.value.endsWith(' ')) { // Jika hasil output diawali dan diakhiri karakter spasi
        tempatInfo.innerHTML = `* Hasil ${statusEnkripsi} mengandung karakter spasi di awal dan akhir, hati-hati jika ingin meng-copy`;
    }
    else if (tempatOutput.value.startsWith(' ')) { // Jika hasil output diawali dengan karakter spasi
        tempatInfo.innerHTML = `* Hasil ${statusEnkripsi} diawali dengan karakter spasi, hati-hati jika ingin meng-copy`;
    }
    else if (tempatOutput.value.endsWith(' ')) { // Jika hasil output diakhiri dengan karakter spasi
        tempatInfo.innerHTML = `* Hasil ${statusEnkripsi} diakhiri dengan karakter spasi, hati-hati jika ingin meng-copy`;
    }
    else if (tempatOutput.value.includes(' ')) { // Jika hasil output terdapat paling tidak 1 karakter spasi di dalamnya
        tempatInfo.innerHTML = `* Hasil ${statusEnkripsi} mengandung karakter spasi, hati-hati jika ingin meng-copy`;
    }
    else {
        tempatInfo.innerHTML = ``;
    }
}