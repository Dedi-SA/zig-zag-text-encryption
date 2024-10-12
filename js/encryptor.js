// Tanggal mulai versi pertama : Kamis, 9 September 2021 | 21.54 WIB

    // KEY
    const KEY = [...'Pr#j["I4YRo.bW;^$v0_h8e`qL}J?u<G1%n]DA7:)N9~Vc-X*tOmi zfx=U{a&6T+EQ\'!2lK|HF>@Sgyk,Ms3dw/Bp(5CZ']; // Bisa dimodifikasi sesuai selera, namun dengan mematuhi 3 poin berikut
    /*
        Ketentuan :
            1. KEY merupakan kumpulan dari 94 karakter berbeda, yang mana tiap karakter ditulis hanya 1 kali
            2. Di dalamnya terdiri atas 26 alfabet kecil, 26 alfabet KAPITAL, 10 digit angka, 1 karakter spasi, dan 31 simbol serta tanda baca (semua jenis karakter pada keyboard KECUALI garis miring ke kiri)
            3. Pengurutan tiap karakter tersebut adalah bebas/acak sesuai kehendak, yang mana tiap urutannya akan mempengaruhi hasil enkripsi-dekripsi
    */

    const CERMIN = [ // Array CERMIN : Setiap elemen dalam array CERMIN boleh dimodifikasi dengan mematuhi beberapa aturan di bawah
                [...'w&{a0~<h3r#U;P8=-Do^eH1M@Am/QO_9xtjLF.C7?]X\'qIc+2f%v}k:Y`>bVp J*RN)zn!"ZBuE|4[Ws(TKy$G6i,dSlg5'], // [0]  A
                [...'>Qk[Go"1#<y5)A3Lf?mv$TJX aN-zt}8O=%4~RhD/^|YM!nHUr*,cB7u2j\'gl&_qVbx`9]CW:iK;{sFPSI+w@6eZ0.(pEd'], // [1]  B
                [...'Jt{Ph5,Sy(p#DUoLzcY72~F\'NwQ?]AHk<3bEre@_;x"n%6Tu)R1M=. K9^fW!Bq:j}$Xd-[lI0g8&vZs`OG4/mi*>CaV|+'], // [2]  C
                [...'Yh{Q<aoE&w72])jbf"Jr%u6[3N,FPT@}K^.8-pV*?Oi0!AkyC4 vm\'$BU9|+/Z(LS_~tWcqGI5:nxsd=HM;z1D>#Rg`lXe'], // [3]  D
                [...'4yl<5!Bm)\'gT}-2OfXMrIa{+:wD%jWG9c`p,u #R/N*x;L$S_?V~o@k]7b"vq(etJZCQh=3HzAYF^>PU6|.1dn0[s8&iKE'], // [4]  E
                [...'Iz)Wd7/jpDa(m"ZxT]P#9`3ChV;G_fl+yM wrNB%-UR~n*4tJcv\'1L=}0eQ>:$OqY@E^<8K[As!ioFXk,g6{|?.u5S&2Hb'], // [5]  F
                [...'ftEc9%RvkKn(P>q3hJ;4uA`._ma5$)-S0sO#Ww1]\'H<LCV7*,e{i=IDzZ@p[g~T&BrlY:6UxjN+y!o|XQ2?M^}8G "dF/b'], // [6]  G
                [...'g6SCsxn<W%O5DXhqy-I)f~:P?=avM^U3rJkA;>te&w[1iTGb8L/FQ+0u*d7_K4@Z`B\'zl("oR{#cN}.m !Y$H2E]9,pVj|'], // [7]  H
                [...'vdMl/E*w1Wh7H%{y:,KnBaxf8P@X]LF(+3^kq!_A>Gmi. Q;`&24c}T9[Je~N\'s)YjS?5r$-0bt"R|=oICZ<U6gOVzD#pu'], // [8]  I
                [...'%eXVo8Tb, +Yh<]G^1S(0t\'H-p|kL#_7fAuMc26;>vO@g[z?IE)C~{drUjB`lFaNWw}JQ:s!3qP&9nD5x"R$Km.*i=Zy/4'], // [9]  J
                [...'EQ?^9nJa3~B<tm;j|@y\'&h-CH>bLuT*O_4 Z16r`z#8kDf:)F]Y[cUs(0l2$,o!G5KPVSXw.qiI}dM=7gx+e{N%"v/RApW'], // [10] K
                [...'&26k<F\'*uXq(G1Ya%l B=Z8^5~{,HiVzO}s?WC+"ex7Tw>]dPUv[DoL4c|EQ9f!br@K_R;ym-#ASh:pInM3/$Jg)jN.`0t'], // [11] L
                [...'2htU0K5f!E:uweFi/Q&Tl)Lrv;Po<{B1a^J}AgX@Gs4~N.Y(7V`nRq]#b\'WO*k6_,SCZH-"=>$cxpmI?+3D%d [yM9jz8|'], // [12] M
                [...'l>3yIe0#<V}+mzJ`a1W|[$tT.rPi%E~{xc!8,K=Q2"uFo7@:NsjO-f6GRB)pZn]/?SHb*CLA4k_Y(vdM&qD\'X wg^U;59h'], // [13] N
                [...'7kX$[0`nMrZa@1h%8lY}Q"#sC_L|oB=4{^t9F,)KV~P.EH-ux(?5wTGD zO>Ue6!bR/]I\'&2Ay:iSpv;*mJdfq+<3NjWcg'], // [14] O
                [...'j8dF:#JVf(x39"}n,uC4!KcykW{6D5[\'L.G`ZhNb=z@g>T~XEO*l 7]UeA&PSpYM%i/_Q+m?Bo)$1vRrqH;aw|2-<I^0ts'], // [15] P
                [...' GYZi3W14,a(0T_.kv"*HFVx@/K2n#Ee?U[-NX~8wj5o\'9clfty;`)Op>&|uPIzCLA%!b{Q]J=$6mr<+Dd7B^sqRMgSh:}'], // [16] Q
                [...'_J<3=f&t%OX6Vc>7A^KY)]4;r-{d"gmsT#wz15uxWPe8E|k(:yp9+},UL2$Zl ?Qv@/M0*.iBRjHN~DS[ah`FICbn!qo\'G'], // [17] R
                [...'naC84msPbl+|Gp?}VM^2xcWk@N<T3Q9&/v._H[DUO`y5dq!=EIXjzFw\'e7*Y)RJo-]r:Ai"ZS>(6tf10%#,~BK{hu;g L$'], // [18] S
                [...'jR}TV5&0a,tpl.SU%L{9WbBr|"$MD26 C-uI/kN_x?4Y^q@cOgy)\'m3#E=Zsv:z!`dFJ1>f;+[Hh7A*Xw~nKQe]<8Gi(oP'], // [19] T
                [...'8 r6oUL^C.4zV#u}apE_OsY|`5&/"nfPF)cA~3=@MJtqDRK,j*9{x:BZNW]gSeH>(kyQ[1d-7;Ih$2+lb!X<?Twi0G%\'vm'], // [20] U
                [...'a\'3~I9y"bY(gz,lAtp}ZOD/>d{01&Uu?.E H2j@*:hm+6$MTP[vJ7o`qe%QNWrFwk!-VnLG^s4<8Rxc=KBS#]5X)Ci_f|;'], // [21] V
                [...'5? jE}{bO%zC\'x"pfP#D3n:X(_$;L=yhI7U8`+wa*YdR<~4BJ[!t]qQo^HVKm)>-6uS&iWrv1GN2k,TcsZgl.AMF|/e09@'], // [22] W
                [...';rDn+#O4uwVE"!ayC:$KzW.o1<3@9R-s[lc2vIT7L)Q0t_A`=pU?JY~mx}NhB,G^{ /M*8qb5(j|HSeX%>dk6\'PZf]&iFg'], // [23] X
                [...'_iPZ<=zD@b^sHpM"Q!A7m3f{a4EqX;T[I1C`wjYn2tU?Nd:r(6/gF+8] &k\'R9oK*xyVO>$,S0u|LG#v5.cJ~We)lB%h}-'], // [24] Y
                [...'p5VXtDr6:xbJ~S-hmK%Y{TqBW`yU $jv]<1C,ez7_}Fn#>2a(s\'E|Ow?&Q=8Ro9*P+04L@M";i.k^Gdu[!fNHc)lIZ/g3A'], // [25] Z

                /*
                    Aturan :
                        1. Semua ketentuan yang berlaku untuk variabel KEY di atas, juga berlaku untuk setiap elemen di dalam array CERMIN

                        2. Elemen yang dimaksud adalah baris kode yang ditandai dengan huruf A sampai Z
                        
                        3. Seluruh elemen di dalam array CERMIN bersifat unik ( TIDAK boleh ada yang sama satu sama lain )

                        4. Tiap elemen terdiri atas 94 karakter dengan urutan yang berbeda-beda
                           dan TIDAK BOLEH SAMA dengan urutan karakter yang ada pada variabel KEY

                        5. Jumlah elemen dalam array CERMIN boleh ditambah atau dikurangi secara bebas dengan tetap
                           mengikuti peraturan sebelumnya, dengan catatan jumlah elemen dalam array CERMIN => min:1 max:26
                           Saat ini, array CERMIN memiliki 26 elemen di dalamnya ( A sampai Z )
                */
          ];

    // Kumpulan fungsi yang menghasilkan nilai boolean
    const is = {
            str: str => {
                return typeof str === 'string';
            },
            valid_KUNCI: (theKey) => {
                if (Array.isArray(theKey)) {
                    return [...theKey].length === noDuplicate(theKey).length && theKey.every(e => is.str(e));
                }
                else
                    return false;
            },
            valid_CERMIN: () => { // Untuk mengecek apakah jenis cermin yang digunakan valid atau tidak
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
            let statusValidKunci  = is.valid_KUNCI(KEY);
            let statusValidCermin = is.valid_CERMIN();

            if (tempatInput.value.length > 0 && statusValidKunci && statusValidCermin)
                tempatOutput.value = mulaiEnkripsiDekripsi(tempatInput.value);
            else {
                tempatInput.value = '';
                tempatOutput.value = '';

                if (!statusValidKunci) { // Jika variabel KEY tidak valid
                    if (Array.isArray(KEY)) {
                        console.log('Kesalahan : KEY tidak valid');
                        console.log('Jika anda meng-edit KEY, harus memenuhi 3 syarat : ');
                        console.log('1. Kunci harus berupa array');
                        console.log('3. Di dalamnya terdapat 26 alfabet kecil, 26 alfabet KAPITAL, 10 digit angka, 1 karakter spasi, dan 31 karakter simbol serta tanda baca');
                        console.log('4. Tiap elemen bersifat unik / tidak boleh ditulis dua kali');
                    }
                    else { // If key is not array
                        console.log('Kesalahan : Variabel KEY harus berupa Array');
                        let jenis;
                        if (is.str(KEY)) {
                            jenis = 'String';
                        } else if (typeof KEY === 'object') {
                            jenis = 'Objek';
                        } else if (typeof KEY === 'number' && !isNaN(KEY)) {
                            jenis = 'Angka';
                        } else if (typeof KEY === 'number' && isNaN(KEY)) {
                            jenis = 'NaN';
                        } else {
                            jenis = typeof KEY;
                        }

                        console.log('Jenis variabel KEY sekarang : ' + jenis);
                    }
                    console.log('');
                }
                else if (!statusValidCermin) { // Jika cermin yang digunakan tidak valid
                    if (Array.isArray(specialGet.cermin())) {
                        console.log('Kesalahan : Jenis cermin yang digunakan tidak valid, silahkan gunakan yang lain atau perbaiki kode');
                        console.log('Jenis cermin : ' + get.capitalLetters()[+tempatJenisCermin.value] + ' [' + tempatJenisCermin.value + ']');
                    }
                    else {
                        console.log('Kesalahan : Jenis cermin yang digunakan harus berupa array dengan 94 karakter di dalamnya');
                        console.log('Cermin yang anda gunakan : ' + typeof specialGet.cermin());
                    }
                    console.log('');
                }
            }

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
