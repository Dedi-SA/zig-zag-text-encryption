
// Step 1 : Filtering & Fixing
const ZZTE = (theText, thePassword, status, numberOfReflections, mirrorId) => {

    // If 'theText' is not a string
    if (!is.str(theText)) {
        invArg('ZZTE()');
        console.log('"theText" should be a string.');
        console.log(`The input type : ${typeof theText}`);
        console.log('The input length : ' + theText.length);
        return '';
    }
    // If 'theText' is empty string, then there is no encryption
    else if(theText.length === 0) {
        return theText;
    }
    // If 'thePassword' is not a string
    else if (!is.str(thePassword)) {
        invArg('ZZTE()');
        console.log('"thePassword" should be a string.');
        console.log(`The input : ${thePassword} ${typeof thePassword}`);
        return '';
    }
    // If 'numberOfReflections' is not a number or number less than 1
    else if (!is.number(numberOfReflections) || numberOfReflections < 1) {
        invArg('ZZTE()');
        console.log('"numberOfReflections" should be a positive number (greater than zero).');
        console.log(`The input : ${numberOfReflections} (${typeof numberOfReflections})`);
        return '';
    }
    // If 'numberOfReflections' is larger than the limit
    else if (numberOfReflections > reflectionMaxNumber) {
        invArg('ZZTE()');
        console.log('"numberOfReflections" is invalid.');

        if (reflectionMaxNumber === 1) {
            console.log('"numberOfReflections" should be 1 because the rule states it must be 1.');
            console.log('If this amount is too small, please increase the maximum limit by changing the variable.');
        }
        else if (reflectionMaxNumber == 2) {
            console.log('"numberOfReflections" should be 1 or 2 because the maximum number is 2.');
            console.log('If this amount is too small, please increase the maximum limit by changing the variable.');
        }
        else {
            console.log('"numberOfReflections" should be in the range 1 to ' + reflectionMaxNumber);
        }

        console.log(`The input : ${numberOfReflections} (${typeof numberOfReflections})`);
        return '';
    }
    // If 'mirrorId' is not a number
    else if (!is.number(mirrorId)) {
        invArg('ZZTE()');
        console.log('"mirrorId" should be a positive number.');
        console.log(`The input : ${mirrorId} (${typeof mirrorId})`);
        return '';
    }
    // If 'mirrorId' is negative or beyond the limit
    else if (mirrorId < 0 || mirrorId >= mirrorBox.length) {
        invArg('ZZTE()');
        console.log('"mirrorId" is invalid.');

        if (mirrorBox.length === 1) {
            console.log(`It should be 0 because there is just 1 mirror detected.`);
        }
        else if (mirrorBox.length === 2) {
            console.log(`It should be 0 or 1 because there is just 2 mirror detected.`);
        }
        else {
            console.log(`It should be between '0' and ${mirrorBox.length - 1}.`);
        }

        console.log(`The input : ${mirrorId} (${typeof mirrorId})`);
        return '';
    }
    else {
        // Jika reflectionMaxNumber melebihi batas, maka yang akan digunakan adalah sisa hasil bagi dari nilaiMax
        // When reflectionMaxNumber exceed the limit, then the remainder will be used
        if (numberOfReflections > reflectionMaxNumber) {

            numberOfReflections = Math.ceil(numberOfReflections % reflectionMaxNumber);

            console.log('The number of reflections must not exceed ' + reflectionMaxNumber + ', otherwise your results may not be as expected.');
            console.log('The Encryption still safe, no problem.');
        }
        
        /*
            Bila panjang password melebihi batas, maka hanya diambil sebanyak batas yang ditentukan (passwordMaxLength) dimulai dari depan

            If the password length exceeds the limit, only the number of characters up to the specified limit (passwordMaxLength)
            will be taken, starting from the beginning.
        */
        thePassword = thePassword.length <= passwordMaxLength ? thePassword : thePassword.slice(0, passwordMaxLength);

        return mulaiEnkripsiDekripsi([...theText], thePassword, status, numberOfReflections, mirrorId);
    }
};

String.prototype.zzte = function(thePassword, status, numberOfReflections, mirrorId) {
    return ZZTE(this.toString(), thePassword, status, numberOfReflections, mirrorId);
};

String.prototype.zzte_enc = function(thePassword, numberOfReflections, mirrorId) {
    return ZZTE(this.toString(), thePassword, true, numberOfReflections, mirrorId);
};

String.prototype.zzte_dec = function(thePassword, numberOfReflections, mirrorId) {
    return ZZTE(this.toString(), thePassword, false, numberOfReflections, mirrorId);
};

String.prototype.zzteTest_enc = function() {
    return ZZTE(this.toString(), '', true, 1, 1);
};

String.prototype.zzteTest_dec = function() {
    return ZZTE(this.toString(), '', false, 1, 1);
};