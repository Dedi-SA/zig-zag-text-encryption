// Generate inner htmlMembuat daftar 'value' untuk tempatJenisCermin
for (let i = 0; i < get.capitalLetters().length; i++) {
    if (i >= CERMIN.length ) { // Berenti jika indeks lebih atau sama dengan panjang Cermin
        break;
    }

    let option_jenisCermin             = document.createElement('option');
        option_jenisCermin.value       = i;
        option_jenisCermin.innerHTML   = get.capitalLetters()[i];
    tempatJenisCermin.appendChild(option_jenisCermin);
}