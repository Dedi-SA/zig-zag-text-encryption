const specialGet = {
            cermin: () => { // return : Array
                return CERMIN[+tempatJenisCermin.value]; // Jenis cermin yang akan dipakai
            },
            nilaiCermin: str => {
                if (is.str(str) && str.length === 1) {
                    
                    if (specialGet.statusEnkripsi()) { // Jika Enkripsi
                        return specialGet.cermin()[generalString.indexOf(str)];
                    }
                    else { // Jika Dekripsi
                        return generalString[specialGet.cermin().indexOf(str)];
                    }
                }
                else {
                    console.log('Kesalahan : Fungsi specialGet.nilaiCermin() menerima argumen yang tidak valid');
                    console.log('Jenis : ' + typeof str);

                    if (is.str(str)) { // Jika string
                        console.log('String : ' + ( str.length < 1 ? '<-kosong->' : (str === ' ' ? '<-spasi->' : str) ));
                        console.log('Panjang string : ' + str.length);
                    }
                    else { // Jika bukan string
                        console.log('Nilai : ' + str);
                    }
                    
                    tempatInput.value = '';
                    tempatOutput.value = '';
                }
            },
            statusEnkripsi: () => {
                return get.element('#tempatStatusEnkripsi').value === 'enkripsi';
            },
            password: () => {
                return tempatPassword.value;
            },
            passwordValue: password => { // Mendapatkan nilai unik dari nomor indeks dari tiap karakter pada password
                if (password.length < 1)
                    return [0, 0];
                else if (password.length === 1)
                    return [get.id(password, KEY), 0];
                else {
                    password = [...password];
                    let sliceValue = Math.ceil(password.length / 2);

                    return [password.slice(sliceValue).map(e => get.id(e, KEY)).reduce((a,b) => a+b,0), password.slice(0, sliceValue).map(e => get.id(e, KEY)).reduce((a,b) => a+b,0)];
                }
            },
            restOfChars: teksPertama => {
                if (is.str(teksPertama) && teksPertama.length === 1 && KEY.includes(teksPertama)) {
                    return [...KEY.slice(get.id(teksPertama, KEY)), ...KEY.slice(0, get.id(teksPertama, KEY))];
                }
                else {
                    console.log('Kesalahan : Fungsi specialGet.restOfChars() menerima argumen yang tidak valid');
                }
            },

             // If there a specific character that not registered in generalString variable, then it will be push into tempArr
            karakterHilang: theString => {
                let tempArr = [];
                generalString.forEach((e, i) => {
                    if (theString.includes(e) === false)
                        tempArr.push(e)
                });

                console.log('Karakter yang hilang : ' + tempArr);
            }
        };