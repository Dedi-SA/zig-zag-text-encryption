const rotate = (theChar, direction, rotationCount) => {
        rotationCount = rotationCount >= KEY.length ? rotationCount % KEY.length : rotationCount;

        if (rotationCount === 0) {
            return theChar;
        }
        else if (direction) {
            newID = (get.id(theChar, KEY) + rotationCount) % KEY.length;
            return KEY[newID];
        }
        else {
            newID = (get.id(theChar, KEY) - rotationCount + KEY.length) % KEY.length;
            return KEY[newID];
        }
    },
    
    // Tahap 2 : Pencerminan, Pembalik, Substitusi depan-belakang
    mulaiEnkripsiDekripsi = (theTextArr, thePassword, status) => {

        // Hanya string yang terdapat pada variabel KEY yang akan diroses
        // Selain itu akan disimpan sementara, kemudian diletakkan kembali sesuai urutannya pada hasil akhir
        if (theTextArr.filter(e => KEY.includes(e)).length > 0) {
            let tandaBaca              = [],
                numberOfEncryptions    = Math.ceil(thePassword.length === 0 ? 1 : thePassword.length) / 2 + 2; // Maks:10 (Jumlah tindakan enkripsi-dekripsi)

            // 2.1 : Pendataan tanda baca
            theTextArr.forEach((e, i) => {
                if (!KEY.includes(e)) {
                    tandaBaca.push([i, e]);
                }
            });
            theTextArr = theTextArr.filter(e => KEY.includes(e));

            // 2.2 (1) : Jika enkripsi
            if (status) {
                let jumlahRefleksi = +tempatJumlahRefleksi.value + Math.abs(Math.floor((get.element('#tempatPassword').maxLength / 17) * 100) - thePassword.length) + (+get.element('#tempatJenisCermin').value);
                while (jumlahRefleksi > 0) {
                    theTextArr = theTextArr.map(e => specialGet.nilaiCermin(e)); // Pencerminan
                    jumlahRefleksi--;
                }

                theTextArr = theTextArr.reverse(); // Pembalik

                if (theTextArr.length > 1){
                    // Substitusi belakang-depan
                    theTextArr = theTextArr.length === 1 ? theTextArr : theTextArr.slice(Math.ceil(theTextArr.length / 2)).concat( theTextArr.slice(0, Math.ceil(theTextArr.length / 2)) );

                    let batas_perulangan = theTextArr.length % 2 === 1 ? theTextArr.length - 1 : theTextArr.length,
                        temp;
                    for(let i = 0; i < batas_perulangan; i+=2) { // Substitusi ganjil-genap
                        temp            = theTextArr[i];
                        theTextArr[i]   = theTextArr[i+1];
                        theTextArr[i+1] = temp;
                    }
                }
            }
            
            // 2.3 : Enkripsi - Dekripsi
            let hasil;
                for (let id_enkripsi = 0; id_enkripsi < numberOfEncryptions; id_enkripsi++) {
                    hasil = penggeseranVertikal(theTextArr, 1 + id_enkripsi, thePassword, status); // return [str, str, ....]
                }

            // 2.2 (2) : Jika dekripsi
            if (!status) {

                let batas_perulangan = hasil.length % 2 === 1 ? hasil.length - 1 : hasil.length,
                    temp;
                    
                for(let i = 0; i < batas_perulangan; i+=2) { // Substitusi ganjil-genap
                    temp          = hasil[i];
                    hasil[i]   = hasil[i+1];
                    hasil[i+1] = temp;
                }
                
                // Substitusi depan-belakang
                hasil = hasil.length === 1 ? hasil : hasil.slice(Math.floor(hasil.length / 2)).concat( hasil.slice(0, Math.floor(hasil.length / 2)) );

                hasil = hasil.reverse(); // Pembalik

                let jumlah_Refleksi = +tempatJumlahRefleksi.value + Math.abs(Math.floor((get.element('#tempatPassword').maxLength / 17) * 100) - thePassword.length) + (+get.element('#tempatJenisCermin').value);
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
            return theTextArr.join('');
        }
    },

    // Tahap 3 : Enkripsi-Dekripsi
    penggeseranVertikal = (teks_arr, nomorUrutBlok, thePassword, status) => {

        // 3.1 : Randomizer
        let twinNumber               = specialGet.passwordValue(thePassword), // Mendapatkan nilai Password [number, number]
            concatenateNumber        = get.stringConcatenateNumber(thePassword + get.reverse(thePassword)), // Tiap karakter pada password akan di-convert menjadi 2 digit angka sesuai nomor urut pada
            nilaiPrimer              = thePassword.length === 0 ? 19 : [...thePassword].map(e => e.codePointAt(0)).reduce((a,b) => a+b, 0), // Nilai yang akan menempati slot pertama deret Fibonacci
            nilaiSekunder            = Math.ceil((nilaiPrimer + 3) / 2), // Nilai yang akan menempati slot ke-dua deret Fibonacci
            jumlahPenguncian         = Math.ceil(thePassword.length < 1 ? 4 : thePassword.length / 3) + 4, // Jumlah penguncian yang akan dilakukan (penggeseran mulai awal sampai akhir dihitung sebagai 1 penguncian)

            angkaGeser               = [nomorUrutBlok + twinNumber[1] + concatenateNumber + nilaiPrimer + teks_arr.length + 7, nomorUrutBlok + twinNumber[0] + nilaiSekunder - 10];
                angkaGeser           = [Math.abs(Math.ceil(angkaGeser[0])), Math.abs(Math.ceil(angkaGeser[1]))]; // Membulatkan ke atas jika desimal dan menjadikannya bilangan cacah (bilangan bulat positif mulai dari 0)

        

        // 3.2 : Enkripsi - Dekripsi
        while (jumlahPenguncian > 0) {
            for(let i = 0; i < teks_arr.length; i++) {

                // Pengecekan : Jika nilai di dalam array angkaGeser melebihi jumlah tertentu, maka nilainya akan dikurangi
                angkaGeser  = [angkaGeser[0] > 1000 ? Math.ceil((angkaGeser[0] / 45) * 63) : angkaGeser[0], angkaGeser[1] > 500000000 ? Math.ceil((angkaGeser[1] / 421092685) * 100) : angkaGeser[1]];

                // Rotating each string character
                teks_arr[i] = rotate(teks_arr[i], status, angkaGeser[0]);

                // Zig-Zag Rule: Switching from true (rightward) to false (leftward) and the other way around
                status      = !status;

                angkaGese   = [angkaGeser[1], angkaGeser[0] + angkaGeser[1]];
                /*
                    Each string will be rotated based on a Fibonacci-like sequence
                    The starting numbers (angkaGeser[0] and angkaGeser[1]) is a random positive number
                    
                    Example :
                        angkaGeser[0] = 5
                        angkaGeser[1] = 2

                        Then then the order will be : 5, 2, 7, 9, 16, 25, ...
                */
            }
            jumlahPenguncian--;
        }

        // 3.3 : Hasil akhir
        return teks_arr;
    };

// Tanggal selesai versi pertama : Rabu, 22 September 2021 09.53
