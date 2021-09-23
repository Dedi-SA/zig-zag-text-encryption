// Kamis, 9 September 2021 | 21.54 WIB


    // Ini kunci
    const KUNCI = [...'PrjI4YRobWv0h8eqLJuG1nDA7N9VcXtOmi zfxUa6TEQ2lKHFSgykMs3dwBp5CZ']; // Bisa dimodifikasi sesuai selera, namun dengan mematuhi 3 poin berikut
    /*
        Ketentuan :
            1. KUNCI merupakan kumpulan dari 63 karakter berbeda, yang mana tiap karakter ditulis hanya 1 kali
            2. Di dalamnya terdiri atas 26 alfabet kecil, 26 alfabet KAPITAL, 10 digit angka, dan 1 karakter spasi
            3. Pengurutan tiap karakter tersebut adalah bebas/acak sesuai kehendak, yang mana tiap urutannya akan mempengaruhi hasil enkripsi-dekripsi
    */

    const teksInput_yangDiizinkan = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ', // Jangan diedit !!
          hurufDanAngka = teksInput_yangDiizinkan.slice(0, -1), // Jangan diedit !!
          hurufKapital = teksInput_yangDiizinkan.slice(0, 25), // Jangan diedit !!

          CERMIN = [ // Array CERMIN : Setiap elemen dalam array CERMIN boleh dimodifikasi dengan mematuhi beberapa aturan di bawah
                [...'maHM4frVEhBpk5TDKXIOCb9gsvl18qj3Y6W0AUuzJcSiFNw2ZQ7tnyGeL dxPoR'], // [0]  A
                [...'maHVhBDKXgsv3jY6WuzRIcStnyEGe dxPoLFNw2ZQi70JAl18qOCbU9pkTM4fr5'], // [1]  B
                [...'TMbU918qi70oFyEGe dWvn3jBDKLXsmaVNY6guzRIcStHxPw2ZQJlhOCpAk4fr5'], // [2]  C
                [...'JlhOTw2ZQCpAkbU91qyHGe igu70MxPo8fraVFsIcStLNY6zBEn3j4dWmXD5KRv'], // [3]  D
                [...'IcG2ZQCNY6u1rtLqxzWmpBEn3j4dsaXD5eARv7o8f igOJl0MShKyHPbUw9TkVF'], // [4]  E
                [...'PUw9TkVJlmpBE1rtbCNY65eFARvu7of igOxZQyHLq8zWn3j4dsXDIacG2M0ShK'], // [5]  F
                [...'pZQyHL5TIacG2BE1rk igO8zdseFKWn3j4tbVJXDUCNlxM90hmY6SqRvu7ofPwA'], // [6]  G
                [...'rkY6j2WCNpZhDUyHL5TOEAlmF1Qn3BsxS90zdqRvu7eo igMf4tb8IacGPwKVJX'], // [7]  H
                [...'qWzMKvSu7eo rpigAf1NcGPwmLOEdVHXUykY2Z6FR5Tx90ClhDs4tb8jIa3BQnJ'], // [8]  I
                [...'gykY2Z6NcGPwFR5Afn1eo LOEdmVhDs4tb8a3BIQJHXUqjWzMKvSu7rpiTx90Cl'], // [9]  J
                [...'N1XqPcM7JxTOjoBzFgSlvQ9teApI0wGVb3n5u DWhkYHsLifR4C8amZ6Edy2UKr'], // [10] K
                [...'rEa4iAuXJNm7bQUvd1pOCVzRhsWcFnTY6qHPLxD3j8oIftwGB0Mk9eS y5lZKg2']  // [11] L
                /*
                    Aturan :
                        1. Semua ketentuan yang berlaku untuk variabel KUNCI di atas, juga berlaku untuk setiap elemen di dalam array CERMIN

                        2. Elemen yang dimaksud adalah baris kode yang ditandai dengan huruf A sampai L
                        
                        3. Seluruh elemen di dalam array CERMIN bersifat unik ( TIDAK boleh ada yang sama satu sama lain )

                        4. Tiap elemen terdiri atas 63 karakter dengan urutan yang berbeda-beda
                           dan TIDAK BOLEH SAMA dengan urutan karakter yang ada pada variabel KUNCI

                        5. Jumlah elemen dalam array CERMIN boleh ditambah atau dikurangi secara bebas dengan tetap
                           mengikuti peraturan sebelumnya, dengan catatan jumlah elemen dalam array CERMIN => min:1 max:26
                           Saat ini ditulis, array CERMIN memiliki 12 elemen di dalamnya ( A sampai L )
                */
          ];

    const get = {
        id: karakter => { // Untuk mendapatkan nomor indeks dari string yang dikirim (nomor indeks sesuai urutan pada KUNCI)
            if (typeof karakter === 'string' && karakter.length === 1)
                return KUNCI.indexOf(karakter, 0);
            else {
                console.log('--------');
                console.log('Kesalahan : Fungsi get.id() menerima parameter yang tidak valid');
                console.log('Jenis : ' + typeof karakter);

                if (typeof karakter === 'string') { // Jika string
                    console.log('String : ' + ( karakter.length < 1 ? '<-kosong->' : (karakter === ' ' ? '<-spasi->' : karakter) ));
                    console.log('Panjang string : ' + karakter.length);
                }
                else { // Jika bukan string
                    console.log('Nilai : ' + karakter);
                }

                console.log('--------');
            }
        },
        cermin: () => { // return : Array
            return CERMIN[+tempatJenisCermin.value]; // Jenis cermin yang akan dipakai
        },
        nilaiCermin: str => {
            if (typeof str === 'string' && str.length === 1) {
                
                if (get.statusEnkripsi()) { // Jika Enkripsi
                    return get.cermin()[teksInput_yangDiizinkan.indexOf(str)];
                }
                else { // Jika Dekripsi
                    return teksInput_yangDiizinkan[get.cermin().indexOf(str)];
                }
            }
            else {
                console.log('--------');
                console.log('Kesalahan : Fungsi get.id() menerima parameter yang tidak valid');
                console.log('Jenis : ' + typeof str);

                if (typeof str === 'string') { // Jika string
                    console.log('String : ' + ( str.length < 1 ? '<-kosong->' : (str === ' ' ? '<-spasi->' : str) ));
                    console.log('Panjang string : ' + str.length);
                }
                else { // Jika bukan string
                    console.log('Nilai : ' + str);
                }

                console.log('--------');
                console.log('Tempat input dan output dikosongkan....');
                tempatInput.value = '';
                tempatOutput.value = '';
            }
        },
        statusEnkripsi: () => {
            return get.elemen('#tempatStatusEnkripsi').value === 'enkripsi';
        },
        password: () => {
            return tempatPassword.value;
        },
        passwordValue: password => { // Mendapatkan nilai unik dari nomor indeks dari tiap karakter pada password
            if (password.length < 1)
                return [0, 0];
            else if (password.length === 1)
                return [get.id(password), 0];
            else {
                password = [...password];
                let sliceValue = Math.ceil(password.length / 2);

                return [password.slice(sliceValue).map(e => get.id(e)).reduce((a,b) => a+b,0), password.slice(0, sliceValue).map(e => get.id(e)).reduce((a,b) => a+b,0)];
            }
        },
        password_concatenateValue: password => {
            /*
                Tiap karakter akan di-'convert' menjadi nomor indeksnya masing-masing, kemudian digabung, lalu diconvert menjadi angka

                Contoh : ~ password 'bca'
                         ~ huruf 'b' diganti menjadi 8, karena di dalam variabel KUNCI, huruf 'b' berada dalam indeks ke 8
                         ~ karena harus 2 digit angka, maka angka 8 ditambahkan 0 di depannya menjadi 08
                         ~ huruf 'c' menjadi 28
                         ~ huruf 'a' menjadi 39
                         ~ saat masih dalam bentuk string, angka-angka tersebut digabung dan menghasilkan nilai 082839 (string)
                         ~ string tersebut kemudian di-'convert' menjadi integer sehingga menghasilkan nilai 82839 (integer)
                         ~ kemudian nilai integer akan di-'return'

                         Catatan : Dengan beberapa improvisasi dan modifikasi kode
            */
            if (password.length < 1) {
                return tempatInput.value.length * (1 + tempatInput.value.length);
            }
            else if (password.length === 1) {
                let id                    = get.id(password)
                    panjang_Password      = password.length < 1 ? 67 + id : password.length + 17 + id,
                    nilaiJenisCermin      = +get.elemen('#tempatJenisCermin').value + panjang_Password + id + 4,
                    panjang_Input         = ( tempatInput.value.length < 1 ? Math.abs((72 + nilaiJenisCermin) - panjang_Password) + id : nilaiJenisCermin + panjang_Password + id + 2);
                return panjang_Password + nilaiJenisCermin + panjang_Input + 11;
            }
            else {
                let hasil,
                    nilaiKonkatenasi = [...password].map(e => get.id(e) + '').map(e => e.length === 1 ? '0' + e : e).join(''); // Mengganti tiap karakter password menjadi nilai indeks masing-masing (nilai indeks dalam bentuk string)
                    nilaiKonkatenasi = nilaiKonkatenasi.split('').map((e, i) => ((i+1) % 10 === 0 ? e + ',' : e)).join(''); // Setiap sampai 5 elemen, maka elemen tersebut akan ditambahkan koma di belakangnya
                    nilaiKonkatenasi = nilaiKonkatenasi.split(',').map(e => +e); // Meng-convert masing-masing elemen menjadi integer

                    hasil = nilaiKonkatenasi.reduce((a,b) => a+b, 0); // Menjumlahkan seluruh elemen

                return Math.ceil(hasil / (password.length * 11)); // Math.ceil() digunakan untuk berjaga-jaga jika hasilnya desimal, nilai nol sangat dihindari
            }
        },
        elemen: namaElemen => {
            if (namaElemen.startsWith('.'))
                return document.getElementsByClassName(namaElemen.slice(1));
            else if (namaElemen.startsWith('#'))
                return document.getElementById(namaElemen.slice(1));
            else
                console.log('Kesalahan : Fungsi get.elemen() menerima parameter yang tidak');
        },
        restOfChars: teksPertama => {
            if (typeof teksPertama === 'string' && teksPertama.length === 1 && KUNCI.includes(teksPertama)) {
                return [...KUNCI.slice(get.id(teksPertama)), ...KUNCI.slice(0, get.id(teksPertama))];
            }
            else {
                console.log('--------');
                console.log('Kesalahan : Fungsi get.restOfChars() menerima parameter yang tidak valid');
                console.log('Jenis : ' + typeof teksPertama);

                if (typeof teksPertama === 'string') { // Jika string
                    console.log('String : ' + ( teksPertama.length < 1 ? '<-kosong->' : (teksPertama === ' ' ? '<-spasi->' : teksPertama) ));
                    console.log('Panjang string : ' + teksPertama.length);
                }
                else { // Jika bukan string
                    console.log('Nilai : ' + teksPertama);
                }

                console.log('--------');
                console.log('Tempat input dan output dibersihkan....');
                tempatInput.value = '';
                tempatOutput.value = '';
            }
        },
        fibonacci: (nilai_A, nilai_B, jumlah_yangDiinginkan) => {
            // Berfungsi untuk mendapatkan Deret Fibonacci dalam array
            // Tidak ada hubungannya dengan project ini, cuma iseng saja

            if (Number.isInteger(nilai_A) && Number.isInteger(nilai_B) && Number.isInteger(jumlah_yangDiinginkan) && jumlah_yangDiinginkan >= 0) {
                let hasil = [nilai_A, nilai_B],
                    penghitungan = [nilai_A, nilai_B];
                while (hasil.length < jumlah_yangDiinginkan) {
                    penghitungan = [penghitungan[1], penghitungan[0] + penghitungan[1]];
                    hasil.push(penghitungan[1]);
                }
                
                return hasil;
            }
        }
    },

    // Kumpulan fungsi yang menghasilkan nilai boolean
    is = {
        valid_CERMIN: () => { // Untuk mengecek apakah jenis cermin yang digunakan valid atau tidak
            let cermin_diFilter           = get.cermin().filter(e => KUNCI.includes(e)),
                cermin_tanpaPengulangan   = new Set(cermin_diFilter);

            return KUNCI.length === (get.cermin().length + cermin_diFilter.length + cermin_tanpaPengulangan.size) / 3;
        }
    },

    geser = (karakter, arah, jumlahPenggeseran) => {
        jumlahPenggeseran = jumlahPenggeseran >= KUNCI.length ? jumlahPenggeseran % KUNCI.length : jumlahPenggeseran;

        if (jumlahPenggeseran === 0) {
            return karakter;
        }
        else {
            let arr = get.restOfChars(karakter); // Karakter yang didapat dari parameter menjadi patokan awal untuk mendapatkan karakter selanjutnya

            return ( arah ? arr[arr.length - jumlahPenggeseran] : arr[jumlahPenggeseran] );
        }
    },

    // Tahap 1 : Memulai proses enkripsi jika memenuhi syarat
    mulaiProses = () => {
        if (tempatInput.value.length > 0 && is.valid_CERMIN())
            tempatOutput.value = pemotonganString(tempatInput.value);
        else {
            tempatInput.value = '';
            tempatOutput.value = '';

            if (!is.valid_CERMIN()) {
                if (Array.isArray(get.cermin())) {
                    console.log('Kesalahan : Jenis cermin yang digunakan tidak valid, silahkan gunakan yang lain atau perbaiki kode');
                    console.log('Jenis cermin : ' + hurufKapital[+tempatJenisCermin.value] + ' [' + tempatJenisCermin.value + ']');
                }
                else {
                    console.log('Kesalahan : Jenis cermin yang digunakan harus berupa array dengan 63 karakter di dalamnya');
                    console.log('Cermin yang anda gunakan : ' + typeof get.cermin());
                }
            }
        }

        ifContain_spaceChar();
    },
    
    // Tahap 2 : Mem-backup tanda baca
    pemotonganString = teksAsli => {
        teksAsli = [...teksAsli];

        // Hanya string yang terdapat pada variabel KUNCI yang akan diroses
        // Selain itu akan disimpan sementara, kemudian diletakkan kembali sesuai urutannya pada hasil akhir
        if (teksAsli.filter(e => KUNCI.includes(e)).length > 0) {
            let tandaBaca              = [],
                jumlahMaksimal_perBlok = 43 - Math.round(get.password().length / 2);

            // 2.1 : Pendataan tanda baca
            teksAsli.forEach((e, i) => {
                if (!KUNCI.includes(e)) {
                    tandaBaca.push([i, e]);
                }
            });
            teksAsli = teksAsli.filter(e => KUNCI.includes(e));

            // 2.2 (1) : Cermin_enkripsi
            if (get.statusEnkripsi()) {
                let jumlahRefleksi = tempatJumlahRefleksi.value + 1;

                while (jumlahRefleksi > 0) {
                    teksAsli = teksAsli.map(e => get.nilaiCermin(e));
                    jumlahRefleksi--;
                }
            }

            // 2.3 : Enkripsi - Dekripsi
            let hasil;
            if (teksAsli.length <= jumlahMaksimal_perBlok) {
                hasil = penggeseranVertikal(teksAsli, 0);
            }
            else {
                let teksTerpecah = [];
                    jumlahMaksimalTeksTerpecah = Math.floor(teksAsli.length / jumlahMaksimal_perBlok) + (teksAsli % jumlahMaksimal_perBlok === 0 ? 0 : 1);
                while (teksTerpecah.length !== jumlahMaksimalTeksTerpecah) {
                    teksTerpecah.push(teksAsli.slice(0, jumlahMaksimal_perBlok));
                    teksAsli = teksAsli.slice(jumlahMaksimal_perBlok);
                }
                
                hasil = teksTerpecah.map((e, nomorUrutBlok) => {
                    return penggeseranVertikal(e, nomorUrutBlok);
                }).flat(Infinity);
            }

            // 2.2 (2) : Cermin_dekripsi
            if (!get.statusEnkripsi()) {
                let jumlah_Refleksi = tempatJumlahRefleksi.value + 1;

                while (jumlah_Refleksi > 0) {
                    hasil = hasil.map(e => get.nilaiCermin(e));
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

    // Tahap 3 : Enkripsi - Dekripsi
    penggeseranVertikal = (teks_arr, nomorUrutBlok) => {

        // 3.1 : Deklarasi variabel sebelum proses enkripsi-dekripsi
        let arahGeser                = get.statusEnkripsi(), // Mendapatkan arah geser : true (kanan) / false (kiri)
            password                 = get.password(), // Mendapatkan password dari tempat input password
            nilaiPassword            = get.passwordValue(password), // Mendapatkan 
            nilaiKonkatenasiPassword = Math.ceil(get.password_concatenateValue(password) / 14), // Tiap karakter pada password akan di-convert menjadi 2 digit angka sesuai nomor urut pada
            nilaiPrimer              = password.length === 0 ? 19 : [...password].map(e => e.codePointAt(0)).reduce((a,b) => a+b, 0), // Nilai yang akan menempati slot pertama deret Fibonacci
            nilaiSekunder            = Math.ceil((nilaiPrimer + 3) / 2), // Nilai yang akan menempati slot ke-dua deret Fibonacci
            jumlahPenguncian         = Math.ceil(password.length < 1 ? 4 : password.length / 3) + 4, // Jumlah penguncian yang akan dilakukan (penggeseran mulai awal sampai akhir dihitung sebagai 1 penguncian)

            angkaGeser               = [nomorUrutBlok + nilaiPassword[1] + nilaiKonkatenasiPassword + nilaiPrimer, nomorUrutBlok + nilaiPassword[0] + nilaiSekunder - 10];
                angkaGeser           = [Math.abs(Math.ceil(angkaGeser[0])), Math.abs(Math.ceil(angkaGeser[1]))]; // Membulatkan ke atas jika desimal dan menjadikannya bilangan cacah (bilangan bulat positif mulai dari 0)
            
        // 3.2 : Enkripsi - Dekripsi
        while (jumlahPenguncian > 0) {
            for(let i = 0; i < teks_arr.length; i++) {

                // Pengecekan : Jika nilai di dalam array angkaGeser melebihi jumlah tertentu, maka nilainya akan dikurangi
                angkaGeser            = [angkaGeser[0] > 100000000 ? Math.ceil(angkaGeser[0] / 100000) : angkaGeser[0], angkaGeser[1] > 50000000 ? Math.ceil(angkaGeser[1] / 1700000) : angkaGeser[1]];

                // Proses penggeseran
                teks_arr[i] = geser(teks_arr[i], arahGeser, angkaGeser[0]);

                // Konfigurasi pasca penggeseran
                arahGeser             = !arahGeser; // Pembalik arah geser (Penentu proses zig-zag)
                angkaGeser            = [angkaGeser[1], angkaGeser[0] + angkaGeser[1] + 7]; // angkaGeser[0] digunakan untuk menentukan jumlah penggeseran yang akan dilakukan oleh Fungsi geser()
                                                                                        // Pola yang digunakan adalah pola pada Deret Fibonacci (TIDAK harus simulai dari 1,1)
            }
            jumlahPenguncian--;
        }

        // 3.3 : Hasil akhir
        return teks_arr;
    },

    // Berfungsi untuk memberi peringatan kepada pengguna jika hasil output terdapat karakter spasi
    ifContain_spaceChar = () => {
        let statusEnkripsi = get.elemen('#tempatStatusEnkripsi').value;

        if (tempatOutput.value.length === 1 && tempatOutput.value === ' ') { // Jika hasil output adalah 1 karakter spasi
            tempatInfo.innerHTML = '* Hasil ' + statusEnkripsi + ' anda adalah 1 karakter spasi';
        }
        else if (tempatOutput.value.length > 1 && [...tempatOutput.value].every(e => e === ' ')) { // Jika hasil output adalah karakter spasi semuanya (2 atau lebih)
            tempatInfo.innerHTML = '* Hasil ' + statusEnkripsi + ' anda adalah ' + tempatOutput.value.length + ' karakter spasi';
        }
        else if (tempatOutput.value.startsWith('  ') || tempatOutput.value.endsWith('  ')) { // Jika hasil output terdapat karakter spasi yang berhimpitan di awal atau di akhir
            let jumlahSpasi = [...tempatOutput.value].filter(e => e === ' ').length;
            tempatInfo.innerHTML = '* Terdapat ' + tempatOutput.value.length + ' karakter pada hasil ' + statusEnkripsi + ', dan ' + jumlahSpasi + ' diantaranya merupakan karakter spasi, hati-hati jika ingin meng-copy';
        }
        else if (tempatOutput.value.startsWith(' ') && tempatOutput.value.endsWith(' ')) { // Jika hasil output diawali dan diakhiri karakter spasi
            tempatInfo.innerHTML = '* Hasil ' + statusEnkripsi + ' mengandung karakter spasi di awal dan akhir, hati-hati jika ingin meng-copy';
        }
        else if (tempatOutput.value.startsWith(' ')) { // Jika hasil output diawali dengan karakter spasi
            tempatInfo.innerHTML = '* Hasil ' + statusEnkripsi + ' diawali dengan karakter spasi, hati-hati jika ingin meng-copy';
        }
        else if (tempatOutput.value.endsWith(' ')) { // Jika hasil output diakhiri dengan karakter spasi
            tempatInfo.innerHTML = '* Hasil ' + statusEnkripsi + ' diakhiri dengan karakter spasi, hati-hati jika ingin meng-copy';
        }
        else if (tempatOutput.value.includes(' ')) { // Jika hasil output terdapat paling tidak 1 karakter spasi di dalamnya
            tempatInfo.innerHTML = '* Hasil ' + statusEnkripsi + ' mengandung karakter spasi, hati-hati jika ingin meng-copy';
        }
        else {
            tempatInfo.innerHTML = '';
        }
    };

    // Elemen
    const tempatStatusEnkripsi   = get.elemen('#tempatStatusEnkripsi'),
          tempatPassword         = get.elemen('#tempatPassword'),
          tempatJenisCermin      = get.elemen('#tempatJenisCermin'),
          tempatJumlahRefleksi   = get.elemen('#tempatJumlahRefleksi'),
          tempatInput            = get.elemen('#tempatInput'),
          tempatOutput           = get.elemen('#tempatOutput'),
          tempatInfo             = get.elemen('#tempatInfo');
          
    const tempatInput_TextChanged = () => {
                mulaiProses();
          },

          tempatStatusEnkripsi_ValueChanged = () => {
                mulaiProses();
          },

          tempatStatusEnkripsi_DoubleClick = () => {
                // Membalik kondisi status enkripsi
                tempatStatusEnkripsi.value = tempatStatusEnkripsi.value === 'enkripsi' ? 'dekripsi' : 'enkripsi';

                mulaiProses();
          },

          tempatPassword_TextChanged = () => {
                // Mem-filter tempat password sesuai variabel "teksInput_yangDiizinkan"
                tempatPassword.value = [...get.password()].filter(e => teksInput_yangDiizinkan.includes(e)).join('');

                mulaiProses();
          },

          tempatJenisCermin_ValueChanged = () => {
                mulaiProses();
          },

          tempatJumlahRefleksi_ValueChanged = () => {
                mulaiProses();
          };

    // Membuat daftar 'value' untuk tempatJenisCermin
    for (let i = 0; i < CERMIN.length; i++) {
        if (i < hurufKapital.length) {
            let option_jenisCermin             = document.createElement('option');
                option_jenisCermin.value       = i;
                option_jenisCermin.innerHTML   = hurufKapital[i];
            tempatJenisCermin.appendChild(option_jenisCermin);
        }
    }

    // Membuat daftar 'value' untuk tempatJumlahRefleksi
    for(let i = 1; i <= 31; i++) {
        let option_jumlahRefleksi           = document.createElement('option');
            option_jumlahRefleksi.value     = i;
            option_jumlahRefleksi.innerHTML = i;
        tempatJumlahRefleksi.appendChild(option_jumlahRefleksi);
    }

    // Jika elemen HTML dan JavaScript diproses, maka 'penanda-kini' otomatis fokus ke tempat input
    tempatInput.focus();

    
// Rabu, 22 September 2021 09.53