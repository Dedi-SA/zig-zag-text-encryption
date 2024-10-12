    const specialIs = {
            valid_KUNCI: (theKey) => {
                if (Array.isArray(theKey) && theKey.length === keyStandartLength) {
                    
                    return [...theKey].length === noDuplicate(theKey).length && theKey.every(e => is.str(e));
                }
                else
                    return false;
            },
            valid_CERMIN: (theMirror) => { // Untuk mengecek apakah jenis cermin yang digunakan valid atau tidak
                let cermin_diFilter           = specialGet.cermin().filter(e => KEY.includes(e)),
                    cermin_tanpaPengulangan   = noDuplicate(cermin_diFilter);

                return KEY.length === (specialGet.cermin().length + cermin_diFilter.length + cermin_tanpaPengulangan.length) / 3;
            }
        },

        geser = (karakter, arah, jumlahPenggeseran) => {
            jumlahPenggeseran = jumlahPenggeseran >= KEY.length ? jumlahPenggeseran % KEY.length : jumlahPenggeseran;

            if (jumlahPenggeseran === 0) {
                return karakter;
            }
            else {
                let arr = specialGet.restOfChars(karakter); // Karakter yang didapat dari parameter menjadi patokan awal untuk mendapatkan karakter selanjutnya

                return ( arah ? arr[arr.length - jumlahPenggeseran] : arr[jumlahPenggeseran] );
            }
        },

        // Tahap 1 : Memulai proses enkripsi jika tempat input > 0 DAN cermin yang digunakan adalah valid
        zztEncryptor = () => {

            if (tempatInput.value.length > 0)
                tempatOutput.value = mulaiEnkripsiDekripsi(tempatInput.value);

            ifContain_spaceChar();
    },
    
    // Tahap 2 : Pencerminan, Pembalik, Substitusi depan-belakang
    mulaiEnkripsiDekripsi = teksAsli => {
        teksAsli = [...teksAsli]; // Teks asli dipecah menjadi array

        // Hanya string yang terdapat pada variabel KEY yang akan diroses
        // Selain itu akan disimpan sementara, kemudian diletakkan kembali sesuai urutannya pada hasil akhir
        if (teksAsli.filter(e => KEY.includes(e)).length > 0) {
            let tandaBaca              = [],
                jumlahEnkripsi         = Math.ceil(specialGet.password().length === 0 ? 1 : specialGet.password().length) / 2 + 2; // Maks:10 (Jumlah tindakan enkripsi-dekripsi)

            // 2.1 : Pendataan tanda baca
            teksAsli.forEach((e, i) => {
                if (!KEY.includes(e)) {
                    tandaBaca.push([i, e]);
                }
            });
            teksAsli = teksAsli.filter(e => KEY.includes(e));

            // 2.2 (1) : Jika enkripsi
            if (specialGet.statusEnkripsi()) {
                let jumlahRefleksi = +tempatJumlahRefleksi.value + Math.abs(Math.floor((get.element('#tempatPassword').maxLength / 17) * 100) - specialGet.password().length) + (+get.element('#tempatJenisCermin').value);
                while (jumlahRefleksi > 0) {
                    teksAsli = teksAsli.map(e => specialGet.nilaiCermin(e)); // Pencerminan
                    jumlahRefleksi--;
                }

                teksAsli = teksAsli.reverse(); // Pembalik

                if (teksAsli.length > 1){
                    // Substitusi belakang-depan
                    teksAsli = teksAsli.length === 1 ? teksAsli : teksAsli.slice(Math.ceil(teksAsli.length / 2)).concat( teksAsli.slice(0, Math.ceil(teksAsli.length / 2)) );

                    let batas_perulangan = teksAsli.length % 2 === 1 ? teksAsli.length - 1 : teksAsli.length,
                        temp;
                    for(let i = 0; i < batas_perulangan; i+=2) { // Substitusi ganjil-genap
                        temp          = teksAsli[i];
                        teksAsli[i]   = teksAsli[i+1];
                        teksAsli[i+1] = temp;
                    }
                }
            }
            
            // 2.3 : Enkripsi - Dekripsi
            let hasil;
                for (let id_enkripsi = 0; id_enkripsi < jumlahEnkripsi; id_enkripsi++) {
                    hasil = penggeseranVertikal(teksAsli, 0 + id_enkripsi); // hasil return : array[str, str, ....]
                }

            // 2.2 (2) : Jika dekripsi
            if (!specialGet.statusEnkripsi()) {
                if (hasil.length > 1){
                    let batas_perulangan = hasil.length % 2 === 1 ? hasil.length - 1 : hasil.length,
                        temp;
                    for(let i = 0; i < batas_perulangan; i+=2) { // Substitusi ganjil-genap
                        temp          = hasil[i];
                        hasil[i]   = hasil[i+1];
                        hasil[i+1] = temp;
                    }
                    
                    // Substitusi depan-belakang
                    hasil = hasil.length === 1 ? hasil : hasil.slice(Math.floor(hasil.length / 2)).concat( hasil.slice(0, Math.floor(hasil.length / 2)) );
                }
                hasil = hasil.reverse(); // Pembalik

                let jumlah_Refleksi = +tempatJumlahRefleksi.value + Math.abs(Math.floor((get.element('#tempatPassword').maxLength / 17) * 100) - specialGet.password().length) + (+get.element('#tempatJenisCermin').value);
                while (jumlah_Refleksi > 0) {
                    hasil = hasil.map(e => specialGet.nilaiCermin(e)); // Pencerminan
                    jumlah_Refleksi--;
                }

            }

            // 2.4 : Mengembalikan tanda baca
            if (tandaBaca.length === 0) {
                return hasil.join('');
            }
            else {
                tandaBaca.forEach(e => {
                    if (e[0] === 0)
                        hasil = [e[1], ...hasil];
                    else if (e[0] === hasil.length)
                        hasil = [...hasil, e[1]];
                    else {
                        hasil = [...hasil.slice(0, e[0]), e[1], ...hasil.slice(e[0])];
                    }
                })
                return hasil.join('');
            }
        }
        else {
            return teksAsli.join('');
        }
    },

    // Tahap 3 : Enkripsi-Dekripsi
    penggeseranVertikal = (teks_arr, nomorUrutBlok) => {

        // 3.1 : Deklarasi variabel sebelum proses enkripsi-dekripsi
        let arahGeser                = specialGet.statusEnkripsi(), // Mendapatkan arah geser : true (kanan) / false (kiri)
            password                 = specialGet.password(), // Mendapatkan password dari tempat input password
            nilaiPassword            = specialGet.passwordValue(password), // Mendapatkan nilai Password [number, number]
            nilaiKonkatenasiPassword = Math.ceil(get.stringConcatenateNumber(password, get.reverse(password)) / 14), // Tiap karakter pada password akan di-convert menjadi 2 digit angka sesuai nomor urut pada
            nilaiPrimer              = password.length === 0 ? 19 : [...password].map(e => e.codePointAt(0)).reduce((a,b) => a+b, 0), // Nilai yang akan menempati slot pertama deret Fibonacci
            nilaiSekunder            = Math.ceil((nilaiPrimer + 3) / 2), // Nilai yang akan menempati slot ke-dua deret Fibonacci
            jumlahPenguncian         = Math.ceil(password.length < 1 ? 4 : password.length / 3) + 4, // Jumlah penguncian yang akan dilakukan (penggeseran mulai awal sampai akhir dihitung sebagai 1 penguncian)

            angkaGeser               = [nomorUrutBlok + nilaiPassword[1] + nilaiKonkatenasiPassword + nilaiPrimer + teks_arr.length + 7, nomorUrutBlok + nilaiPassword[0] + nilaiSekunder - 10];
                angkaGeser           = [Math.abs(Math.ceil(angkaGeser[0])), Math.abs(Math.ceil(angkaGeser[1]))]; // Membulatkan ke atas jika desimal dan menjadikannya bilangan cacah (bilangan bulat positif mulai dari 0)

        

        // 3.2 : Enkripsi - Dekripsi
        while (jumlahPenguncian > 0) {
            for(let i = 0; i < teks_arr.length; i++) {

                // Pengecekan : Jika nilai di dalam array angkaGeser melebihi jumlah tertentu, maka nilainya akan dikurangi
                angkaGeser            = [angkaGeser[0] > 1000000000 ? Math.ceil((angkaGeser[0] / 729624102) * 100) : angkaGeser[0], angkaGeser[1] > 500000000 ? Math.ceil((angkaGeser[1] / 421092685) * 100) : angkaGeser[1]];

                // Proses penggeseran
                teks_arr[i] = geser(teks_arr[i], arahGeser, angkaGeser[0]);

                // Konfigurasi pasca penggeseran
                arahGeser             = !arahGeser; // Pembalik arah geser (Penentu proses zig-zag)
                angkaGeser            = [angkaGeser[1], angkaGeser[0] + angkaGeser[1] + 7]; // angkaGeser[0] digunakan untuk menentukan jumlah penggeseran yang akan dilakukan oleh Fungsi geser()
                                                                                            // Pola yang digunakan adalah pola pada Deret Fibonacci (TIDAK harus dimulai dari 1,1)
            }
            jumlahPenguncian--;
        }

        // 3.3 : Hasil akhir
        return teks_arr;
    };

// Tanggal selesai versi pertama : Rabu, 22 September 2021 09.53
