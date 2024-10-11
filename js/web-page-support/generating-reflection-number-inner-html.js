    // Generate inner html to display list of number reflection
    // By default, maximum number is 31. Represents the number of days in 1 month
    for(let i = 1; i <= 31; i++) {
        let option_jumlahRefleksi           = document.createElement('option');
            option_jumlahRefleksi.value     = i;
            option_jumlahRefleksi.innerHTML = i;
        tempatJumlahRefleksi.appendChild(option_jumlahRefleksi);
    }