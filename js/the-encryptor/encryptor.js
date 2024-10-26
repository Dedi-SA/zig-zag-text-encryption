
// Step 2 : Pencerminan, Pembalik, Substitusi ganjil-genap (Mirroring-Reverse, Odd-Even Swap)
const mulaiEnkripsiDekripsi = (theTextArr, thePassword, status, numberOfReflections, mirrorId) => {
    
        let numberOfEncryptions = Math.ceil(thePassword.length > 0 ? thePassword.length / 4 : 1),
            substitutionLimit   = theTextArr.length - (theTextArr.length % 2);

        /*
            If status === true  : step 2A => step 2B => step 2C => step 3  => End
            If status === false : Step 3  => step 2C => step 2B => step 2A => End
        */
        if (status) {
            // Step 2A : Pencerminan (mirroring) => Pembalik (reversing)
            while (numberOfReflections > 0) {
                theTextArr = theTextArr.map(e => doMirroring(e, mirrorId, status)).reverse();
                numberOfReflections--;
            }
            
            // Step 2C : Substitusi ganjil-genap (Odd-even swap)
            if (theTextArr.length > 1){
                for(let i = 0; i < substitutionLimit; i+=2) {
                    [theTextArr[i], theTextArr[i+1]] = [theTextArr[i+1], theTextArr[i]];
                }
            }
        }
        
        /*
            If the password is empty, the string will be taken from the chosen mirror to then optimize
            the rotor number in the following steps
        */
        if (thePassword.length < 3) {
            thePassword = getStringFromMirror(mirrorId) + thePassword;
        }
        
        // Step 3 : Enkripsi - Dekripsi
        while(numberOfEncryptions > 0) {
            theTextArr = penggeseranVertikal(theTextArr, thePassword, status, thePassword.length - 1); // return [str, str, ....]
            numberOfEncryptions--;
        }

        if (!status) {
            // Step 2C : Substitusi ganjil-genap (Odd-even swap)
            if (theTextArr.length > 1) {
                for(let i = 0; i < substitutionLimit; i+=2) {
                    [theTextArr[i], theTextArr[i+1]] = [theTextArr[i+1], theTextArr[i]];
                }
            }

            // Step 2A : Pembalik (reversing) => Pencerminan (mirroring)
            while (numberOfReflections > 0) {
                theTextArr = theTextArr.reverse().map(e => doMirroring(e, mirrorId, status));
                numberOfReflections--;
            }
        }

        // End
        return theTextArr.join('');
    },

    // Tahap 3 : Enkripsi - Dekripsi
    penggeseranVertikal = (theTextArr, thePassword, status, sessions) => {
        let rotatorNumbers = getRotatorNumbers(theTextArr, thePassword, sessions); // return : [number, number]
        
        while (sessions > 0) {
            for(let i = 0; i < theTextArr.length; i++) {
                
                // Rotating each string character
                theTextArr[i] = rotate(theTextArr[i], status, rotatorNumbers[0]);
                theTextArr[i] = rotate(theTextArr[i], status, get.id(thePassword[sessions], KEY));

                // Zig-Zag Rule: Switching from true (rightward) to false (leftward) and the other way around
                status      = !status;

                rotatorNumbers   = [rotatorNumbers[1], rotatorNumbers[0] + rotatorNumbers[1] + get.id(thePassword[sessions], KEY)];
                /*
                    Each string will be rotated based on a Fibonacci-like sequence
                    The starting numbers (rotatorNumbers[0] and rotatorNumbers[1]) is a random positive number
                    
                    Example :
                        rotatorNumbers[0] = 5
                        rotatorNumbers[1] = 2+5

                        Then then the order will be : 5, 2, 12, 19, 36, 55, ...
                */
            }
            sessions--;
        }

        for (let i = 0; i < thePassword.length; i++) {

        }

        // 3.3 : The Result
        return theTextArr;
    };

// Tanggal selesai versi pertama : Rabu, 22 September 2021 09.53
