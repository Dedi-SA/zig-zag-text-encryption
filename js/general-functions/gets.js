const get = {
        id: (theString, theReference) => { // Untuk mendapatkan nomor indeks dari string yang dikirim
            if (is.str(theString) && theString.length === 1)
                return theReference.indexOf(theString, 0);
            else {
                invArg('get.id()');
                console.log(`theString : ${theString} (${typeof theString})`)
                console.log(`theReference type : ${typeof theReference}`);
                console.log(`theReference length : ${theReference.length}`);
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