const get = {
        id: (theString, theReference) => { // Untuk mendapatkan nomor indeks dari string yang dikirim
            if (is.str(theString) && theString.length === 1)
                return theReference.indexOf(theString, 0);
            else {
                invArg('get.id()');
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
                invArg('get.reverse()');
            }
        },
        
        randomNumberByString: (theString, theReference) => {
            if (theString.length === 0) {
                return 0;
            }
            else {
                theString = [...theString].map(e => get.id(e, theReference)) // get.id() for each element
                                .map(e => e.toString()) // Change number into string
                                .join(''); // Join it all to get full number

                theString = Number(theString);

                // Limited to three digits for performance reasons
                while (theString >= 1000) {
                    theString = Math.ceil(theString / 3);
                }

                // This variable is number already
                return theString;
            }
        },
        element: namaElemen => {
            if (namaElemen.startsWith('.'))
                return document.getElementsByClassName(namaElemen.slice(1));
            else if (namaElemen.startsWith('#'))
                return document.getElementById(namaElemen.slice(1));
            else
                invArg('get.element()');
        },
        capitalLetters: () => {
            return generalString.slice(generalString.indexOf('A'), generalString.indexOf('Z') + 1)
        }
    };