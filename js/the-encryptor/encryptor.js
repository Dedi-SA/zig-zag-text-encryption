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
    };

const getRotatorNumbers = (theTextArr, thePassword, numberOfEncryptions) => {
        const randomNumber_1 = Math.abs(theTextArr.length - thePassword.length) + 1,
              randomNumber_2 = Math.ceil((thePassword.length + numberOfEncryptions) / 4) + theTextArr.length;

        return [
            randomNumber_1 > 10000 ? randomNumber_1 - Math.ceil(randomNumber_1 / 3) + 1 : randomNumber_1,
            randomNumber_2 > 10000 ? randomNumber_2 - Math.floor(randomNumber_2 / 4) + 1 : randomNumber_2
        ];
    },
    
    // Tahap 2 : Pencerminan, Pembalik
    mulaiEnkripsiDekripsi = (theTextArr, thePassword, status, numberOfReflections) => {
        
        // Max : 10
        let numberOfEncryptions = Math.ceil(thePassword.length > 0 ? thePassword.length / 4 : 1);

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
            while(numberOfEncryptions > 0) {
                hasil = penggeseranVertikal(theTextArr, thePassword, status, numberOfEncryptions + 1); // return [str, str, ....]
                numberOfEncryptions--;
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

        return hasil.join('');
    },

    // Tahap 3 : Enkripsi - Dekripsi
    penggeseranVertikal = (theTextArr, thePassword, status, sessions) => {
        
        let rotatorNumbers = getRotatorNumbers(theTextArr, thePassword, sessions); // return : [number, number]
        
        // 3.2 : Enkripsi - Dekripsi
        while (sessions > 0) {
            for(let i = 0; i < theTextArr.length; i++) {
                
                // Rotating each string character
                theTextArr[i] = rotate(theTextArr[i], status, rotatorNumbers[0]);

                // Zig-Zag Rule: Switching from true (rightward) to false (leftward) and the other way around
                status      = !status;

                rotatorNumbers   = [rotatorNumbers[1], rotatorNumbers[0] + rotatorNumbers[1]];
                /*
                    Each string will be rotated based on a Fibonacci-like sequence
                    The starting numbers (rotatorNumbers[0] and rotatorNumbers[1]) is a random positive number
                    
                    Example :
                        rotatorNumbers[0] = 5
                        rotatorNumbers[1] = 2

                        Then then the order will be : 5, 2, 7, 9, 16, 25, ...
                */
            }
            sessions--;
        }

        // 3.3 : The Result
        return theTextArr;
    };

// Tanggal selesai versi pertama : Rabu, 22 September 2021 09.53
