const get = {
        id: (theString, theList) => { // Untuk mendapatkan nomor indeks dari string yang dikirim
            if (is.str(theString) && theString.length === 1)
                return theList.indexOf(theString, 0);
            else {
                console.log('Kesalahan : Fungsi get.id() menerima argumen yang tidak valid');
                console.log('Jenis : ' + typeof theString);

                if (is.str(theString)) { // Jika string
                    console.log('String : ' + ( theString.length < 1 ? '<-kosong->' : (theString === ' ' ? '<-spasi->' : theString) ));
                    console.log('Panjang string : ' + theString.length);
                }
                else { // Jika bukan string
                    console.log('Nilai : ' + theString);
                }
            }
        }
    };