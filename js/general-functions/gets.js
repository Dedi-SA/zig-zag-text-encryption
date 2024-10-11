const get = {
        id: (theString, theReference) => { // Untuk mendapatkan nomor indeks dari string yang dikirim
            if (is.str(theString) && theString.length === 1)
                return theReference.indexOf(theString, 0);
            else {
                console.log('Fungsi get.id() menerima argumen yang tidak valid');
            }
        },

        reverse: theObject => {
            if (typeof theObject === 'string') {
                if (theObject === '') {
                    return '';
                }
                else if (theObject.length === 1) {
                    return theObject;
                }
                else {
                    return [...theObject].reverse().join(''); // reversed
                }
            }
            else if (Array.isArray(theObject)) {
                if (theObject.length <= 1) {
                    return theObject;
                }
                else {
                    return theObject.reverse();
                }
            }
            else {
                console.log('The argument that sent to get.reverse() function is invalid')
            }
        },
        
        stringConcatenateNumber: theString => {
            /*
                String will be convert to its index number according to the references provided by function caller.
                Then those number converted into string, then merged, then converted again to number

                Contoh : ~ theString 'bca'
                         ~ huruf 'b' diganti menjadi 8, karena di dalam variabel KEY, huruf 'b' berada dalam indeks ke 8
                         ~ karena harus 2 digit angka, maka angka 8 ditambahkan 0 di depannya menjadi 08
                         ~ huruf 'c' menjadi 28
                         ~ huruf 'a' menjadi 39
                         ~ saat masih dalam bentuk string, angka-angka tersebut digabung dan menghasilkan nilai 082839 (string)
                         ~ string tersebut kemudian di-'convert' menjadi integer sehingga menghasilkan nilai 82839 (integer)
                         ~ kemudian nilai integer akan di-'return'
                         ~ jika string kosong, maka fungsi akan me-return 9

                         Catatan : Dengan beberapa improvisasi dan modifikasi kode
            */
            if (theString.length < 1) {
                return 9;
            }
            else {
                let convertStringToNumber = [...theString].map(e => get.id(e, generalString));
                let mergeTheNumberIntoString = convertStringToNumber.map(e => e.toString()).join('');
                return +mergeTheNumberIntoString;
            }
        },
        element: namaElemen => {
            if (namaElemen.startsWith('.'))
                return document.getElementsByClassName(namaElemen.slice(1));
            else if (namaElemen.startsWith('#'))
                return document.getElementById(namaElemen.slice(1));
            else
                console.log('Kesalahan : Fungsi specialGet.elemen() menerima argumen yang tidak valid\n ');
        },
        allCapitalLetters: () => {
            return generalString.slice(generalString.indexOf('A'), generalString.indexOf('Z') + 1)
        }
    };