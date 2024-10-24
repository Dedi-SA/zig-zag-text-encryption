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

const getRotatorNumbers = (theTextArr, thePassword, sessions) => {
        const randomNumber_1 = Math.abs(theTextArr.length - thePassword.length) + 1,
              randomNumber_2 = Math.ceil((thePassword.length + sessions) / 4) + theTextArr.length;

        return [
            randomNumber_1 > 10000 ? randomNumber_1 - Math.ceil(randomNumber_1 / 3) + 1 : randomNumber_1,
            randomNumber_2 > 10000 ? randomNumber_2 - Math.floor(randomNumber_2 / 4) + 1 : randomNumber_2
        ];
    };
    
// Tahap 2 : Pencerminan, Pembalik, Substitusi ganjil-genap (Mirroring, Reverse, Odd-Even Swap)
const mulaiEnkripsiDekripsi = (theTextArr, thePassword, status, numberOfReflections) => {
        
        let numberOfEncryptions = Math.ceil(thePassword.length > 0 ? thePassword.length / 4 : 1),
            substitutionLimit   = theTextArr.length - (theTextArr.length % 2);

        // 2.2 (1) : Jika enkripsi
        if (status) {
            while (numberOfReflections > 0) {
                theTextArr = theTextArr.map(e => specialGet.nilaiCermin(e)); // Pencerminan (mirroring)
                numberOfReflections--;
            }

            theTextArr = theTextArr.reverse(); // Pembalik (reverse)
            
            // Substitusi ganjil-genap (Odd-even swap)
            if (theTextArr.length > 1){
                for(let i = 0; i < substitutionLimit; i+=2) {
                    [theTextArr[i], theTextArr[i+1]] = [theTextArr[i+1], theTextArr[i]];
                }
            }
        }
        
        // 2.3 : Enkripsi - Dekripsi
            while(numberOfEncryptions > 0) {
                theTextArr = penggeseranVertikal(theTextArr, thePassword, status, numberOfEncryptions + 1); // return [str, str, ....]
                numberOfEncryptions--;
            }

        // 2.2 (2) : Jika dekripsi
        if (!status) {

            // Substitusi ganjil-genap (Odd-even swap)
            if (theTextArr.length > 1) {
                for(let i = 0; i < substitutionLimit; i+=2) {
                    [theTextArr[i], theTextArr[i+1]] = [theTextArr[i+1], theTextArr[i]];
                }
            }
            
            theTextArr = theTextArr.reverse(); // Pembalik (reverse)

            while (numberOfReflections > 0) {
                theTextArr = theTextArr.map(e => specialGet.nilaiCermin(e)); // Pencerminan (mirroring)
                numberOfReflections--;
            }
        }

        return theTextArr.join('');
    },

    // Tahap 3 : Enkripsi - Dekripsi
    penggeseranVertikal = (theTextArr, thePassword, status, sessions) => {
        
        let rotatorNumbers = getRotatorNumbers(theTextArr, thePassword, sessions); // return : [number, number]
        
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
