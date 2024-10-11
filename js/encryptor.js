// Tanggal mulai versi pertama : Kamis, 9 September 2021 | 21.54 WIB

    // Ini kunci
    const KUNCI = [...'Pr#j["I4YRo.bW;^$v0_h8e`qL}J?u<G1%n]DA7:)N9~Vc-X*tOmi zfx=U{a&6T+EQ\'!2lK|HF>@Sgyk,Ms3dw/Bp(5CZ']; // Bisa dimodifikasi sesuai selera, namun dengan mematuhi 3 poin berikut
    /*
        Ketentuan :
            1. KUNCI merupakan kumpulan dari 94 karakter berbeda, yang mana tiap karakter ditulis hanya 1 kali
            2. Di dalamnya terdiri atas 26 alfabet kecil, 26 alfabet KAPITAL, 10 digit angka, 1 karakter spasi, dan 31 simbol serta tanda baca (semua jenis karakter pada keyboard KECUALI garis miring ke kiri)
            3. Pengurutan tiap karakter tersebut adalah bebas/acak sesuai kehendak, yang mana tiap urutannya akan mempengaruhi hasil enkripsi-dekripsi
    */

    const KUNCI_diurutkan = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ `~!@#$%^&*()-_=+[]{}|;:\'",.<>/?', // Jangan diedit !!
          hurufDanAngka = KUNCI_diurutkan.slice(0, KUNCI_diurutkan.indexOf('Z') + 1), // Jangan diedit !!
          hurufKapital = KUNCI_diurutkan.slice(KUNCI_diurutkan.indexOf('A'), KUNCI_diurutkan.indexOf('Z') + 1), // Jangan diedit !!
          angka = KUNCI_diurutkan.slice(0, 9); // Jangan diedit !!

          CERMIN = [ // Array CERMIN : Setiap elemen dalam array CERMIN boleh dimodifikasi dengan mematuhi beberapa aturan di bawah
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
                        1. Semua ketentuan yang berlaku untuk variabel KUNCI di atas, juga berlaku untuk setiap elemen di dalam array CERMIN

                        2. Elemen yang dimaksud adalah baris kode yang ditandai dengan huruf A sampai L
                        
                        3. Seluruh elemen di dalam array CERMIN bersifat unik ( TIDAK boleh ada yang sama satu sama lain )

                        4. Tiap elemen terdiri atas 94 karakter dengan urutan yang berbeda-beda
                           dan TIDAK BOLEH SAMA dengan urutan karakter yang ada pada variabel KUNCI

                        5. Jumlah elemen dalam array CERMIN boleh ditambah atau dikurangi secara bebas dengan tetap
                           mengikuti peraturan sebelumnya, dengan catatan jumlah elemen dalam array CERMIN => min:1 max:26
                           Saat ini, array CERMIN memiliki 26 elemen di dalamnya ( A sampai Z )
                */
          ];

    const get = {
        id: karakter => { // Untuk mendapatkan nomor indeks dari string yang dikirim (nomor indeks sesuai urutan pada KUNCI)
            if (is.str(karakter) && karakter.length === 1)
                return KUNCI.indexOf(karakter, 0);
            else {
                console.log('Kesalahan : Fungsi get.id() menerima argumen yang tidak valid');
                console.log('Jenis : ' + typeof karakter);

                if (is.str(karakter)) { // Jika string
                    console.log('String : ' + ( karakter.length < 1 ? '<-kosong->' : (karakter === ' ' ? '<-spasi->' : karakter) ));
                    console.log('Panjang string : ' + karakter.length);
                }
                else { // Jika bukan string
                    console.log('Nilai : ' + karakter);
                }

                console.log('')
            }
        },
        cermin: () => { // return : Array
            return CERMIN[+tempatJenisCermin.value]; // Jenis cermin yang akan dipakai
        },
        nilaiCermin: str => {
            if (is.str(str) && str.length === 1) {
                
                if (get.statusEnkripsi()) { // Jika Enkripsi
                    return get.cermin()[KUNCI_diurutkan.indexOf(str)];
                }
                else { // Jika Dekripsi
                    return KUNCI_diurutkan[get.cermin().indexOf(str)];
                }
            }
            else {
                console.log('Kesalahan : Fungsi get.nilaiCermin() menerima argumen yang tidak valid');
                console.log('Jenis : ' + typeof str);

                if (is.str(str)) { // Jika string
                    console.log('String : ' + ( str.length < 1 ? '<-kosong->' : (str === ' ' ? '<-spasi->' : str) ));
                    console.log('Panjang string : ' + str.length);
                }
                else { // Jika bukan string
                    console.log('Nilai : ' + str);
                }

                console.log('');
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
        concatenateValue: password => {
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
                console.log('Kesalahan : Fungsi get.elemen() menerima argumen yang tidak valid\n ');
        },
        restOfChars: teksPertama => {
            if (is.str(teksPertama) && teksPertama.length === 1 && KUNCI.includes(teksPertama)) {
                return [...KUNCI.slice(get.id(teksPertama)), ...KUNCI.slice(0, get.id(teksPertama))];
            }
            else {
                console.log('Kesalahan : Fungsi get.restOfChars() menerima argumen yang tidak valid');
                console.log('Jenis : ' + typeof teksPertama);

                if (is.str(teksPertama)) { // Jika string
                    console.log('String : ' + ( teksPertama.length < 1 ? '<-kosong->' : (teksPertama === ' ' ? '<-spasi->' : teksPertama) ));
                    console.log('Panjang string : ' + teksPertama.length);
                }
                else { // Jika bukan string
                    console.log('Nilai : ' + teksPertama);
                }

                console.log('');
                tempatInput.value = '';
                tempatOutput.value = '';
            }
        },
        karakterHilang: cermin => { // Jika karakter yang ada pada cermin kurang dari jumlah normal, maka fungsi ini dapat dipanggil untuk melihat 
            let temp = [];
            KUNCI.forEach((e, i) => {
                if (!cermin.includes(e))
                    temp.push(e)
            });

            console.log('Karakter yang hilang : ' + temp);
        }
    },

    // Kumpulan fungsi yang menghasilkan nilai boolean
    is = {
        str: str => {
            return typeof str === 'string';
        },
        valid_KUNCI: (theKey) => {
            if (Array.isArray(theKey)) {
                return [...theKey].length === clearTheDuplicate(theKey).length && theKey.every(e => is.str(e));
            }
            else
                return false;
        },
        valid_CERMIN: () => { // Untuk mengecek apakah jenis cermin yang digunakan valid atau tidak
            let cermin_diFilter           = get.cermin().filter(e => KUNCI.includes(e)),
                cermin_tanpaPengulangan   = clearTheDuplicate(cermin_diFilter);

            return KUNCI.length === (get.cermin().length + cermin_diFilter.length + cermin_tanpaPengulangan.length) / 3;
        }
    },

    clearTheDuplicate = obj => { // Privent duplicate in string or array
        if (Array.isArray(obj)) {
            let temp = new Set(arr)
            return [...temp];
        }
        else if (typeof obj === 'string'){
            let temp = new Set([...obj]);
            return [...temp].join('');
        }
        else {
            console.log('Kesalahan : Fungsi clearTheDuplicate() menerima argumen yang tidak valid\n ');
            return false;
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

    // Tahap 1 : Memulai proses enkripsi jika tempat input > 0 DAN cermin yang digunakan adalah valid
    zztEncryptor = () => {
        let statusValidKunci  = is.valid_KUNCI(KUNCI);
        let statusValidCermin = is.valid_CERMIN();

        if (tempatInput.value.length > 0 && statusValidKunci && statusValidCermin)
            tempatOutput.value = mulaiEnkripsiDekripsi(tempatInput.value);
        else {
            tempatInput.value = '';
            tempatOutput.value = '';

            if (!statusValidKunci) { // Jika variabel KUNCI tidak valid
                if (Array.isArray(KUNCI)) {
                    console.log('Kesalahan : KUNCI tidak valid');
                    console.log('Jika anda meng-edit KUNCI, harus memenuhi 3 syarat : ');
                    console.log('1. Kunci harus berupa array');
                    console.log('3. Di dalamnya terdapat 26 alfabet kecil, 26 alfabet KAPITAL, 10 digit angka, 1 karakter spasi, dan 31 karakter simbol serta tanda baca');
                    console.log('4. Tiap elemen bersifat unik / tidak boleh ditulis dua kali');
                }
                else { // Jika KUNCI bukan array
                    console.log('Kesalahan : Variabel KUNCI harus berupa Array');
                    let jenis;
                    if (is.str(KUNCI)) {
                        jenis = 'String';
                    } else if (typeof KUNCI === 'object') {
                        jenis = 'Objek';
                    } else if (typeof KUNCI === 'number' && !isNaN(KUNCI)) {
                        jenis = 'Angka';
                    } else if (typeof KUNCI === 'number' && isNaN(KUNCI)) {
                        jenis = 'NaN';
                    } else {
                        jenis = typeof KUNCI;
                    }

                    console.log('Jenis variabel KUNCI sekarang : ' + jenis);
                }
                console.log('');
            }
            else if (!statusValidCermin) { // Jika cermin yang digunakan tidak valid
                if (Array.isArray(get.cermin())) {
                    console.log('Kesalahan : Jenis cermin yang digunakan tidak valid, silahkan gunakan yang lain atau perbaiki kode');
                    console.log('Jenis cermin : ' + hurufKapital[+tempatJenisCermin.value] + ' [' + tempatJenisCermin.value + ']');
                }
                else {
                    console.log('Kesalahan : Jenis cermin yang digunakan harus berupa array dengan 94 karakter di dalamnya');
                    console.log('Cermin yang anda gunakan : ' + typeof get.cermin());
                }
                console.log('');
            }
        }

        ifContain_spaceChar();
    },
    
    // Tahap 2 : Pencerminan, Pembalik, Substitusi depan-belakang
    mulaiEnkripsiDekripsi = teksAsli => {
        teksAsli = [...teksAsli]; // Teks asli dipecah menjadi array

        // Hanya string yang terdapat pada variabel KUNCI yang akan diroses
        // Selain itu akan disimpan sementara, kemudian diletakkan kembali sesuai urutannya pada hasil akhir
        if (teksAsli.filter(e => KUNCI.includes(e)).length > 0) {
            let tandaBaca              = [],
                jumlahEnkripsi         = Math.ceil(get.password().length === 0 ? 1 : get.password().length) / 2 + 2; // Maks:10 (Jumlah tindakan enkripsi-dekripsi)

            // 2.1 : Pendataan tanda baca
            teksAsli.forEach((e, i) => {
                if (!KUNCI.includes(e)) {
                    tandaBaca.push([i, e]);
                }
            });
            teksAsli = teksAsli.filter(e => KUNCI.includes(e));

            // 2.2 (1) : Jika enkripsi
            if (get.statusEnkripsi()) {
                let jumlahRefleksi = +tempatJumlahRefleksi.value + Math.abs(Math.floor((get.elemen('#tempatPassword').maxLength / 17) * 100) - get.password().length) + (+get.elemen('#tempatJenisCermin').value);
                while (jumlahRefleksi > 0) {
                    teksAsli = teksAsli.map(e => get.nilaiCermin(e)); // Pencerminan
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
            if (!get.statusEnkripsi()) {
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

                let jumlah_Refleksi = +tempatJumlahRefleksi.value + Math.abs(Math.floor((get.elemen('#tempatPassword').maxLength / 17) * 100) - get.password().length) + (+get.elemen('#tempatJenisCermin').value);
                while (jumlah_Refleksi > 0) {
                    hasil = hasil.map(e => get.nilaiCermin(e)); // Pencerminan
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
        let arahGeser                = get.statusEnkripsi(), // Mendapatkan arah geser : true (kanan) / false (kiri)
            password                 = get.password(), // Mendapatkan password dari tempat input password
            nilaiPassword            = get.passwordValue(password), // Mendapatkan 
            nilaiKonkatenasiPassword = Math.ceil(get.concatenateValue(password) / 14), // Tiap karakter pada password akan di-convert menjadi 2 digit angka sesuai nomor urut pada
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

    // Simplified element
    const tempatStatusEnkripsi   = get.elemen('#tempatStatusEnkripsi'),
          tempatPassword         = get.elemen('#tempatPassword'),
          tempatJenisCermin      = get.elemen('#tempatJenisCermin'),
          tempatJumlahRefleksi   = get.elemen('#tempatJumlahRefleksi'),
          tempatInput            = get.elemen('#tempatInput'),
          tempatOutput           = get.elemen('#tempatOutput'),
          tempatInfo             = get.elemen('#tempatInfo');

    const tempatInput_TextChanged = () => {
                zztEncryptor();
          },

          tempatStatusEnkripsi_ValueChanged = () => {
                zztEncryptor();
          },

          tempatStatusEnkripsi_DoubleClick = () => {
                // Membalik kondisi status enkripsi
                tempatStatusEnkripsi.value = tempatStatusEnkripsi.value === 'enkripsi' ? 'dekripsi' : 'enkripsi';

                zztEncryptor();
          },

          tempatPassword_TextChanged = () => {
                // Mem-filter tempat password sesuai variabel "KUNCI_diurutkan"
                tempatPassword.value = [...get.password()].filter(e => KUNCI_diurutkan.includes(e)).join('');

                zztEncryptor();
          },

          tempatJenisCermin_ValueChanged = () => {
                zztEncryptor();
          },

          tempatJumlahRefleksi_ValueChanged = () => {
                zztEncryptor();
          };

// Tanggal selesai versi pertama : Rabu, 22 September 2021 09.53
