
// Step 1 : Filtering & Fixing
const ZZTE = (theText, thePassword, status, numberOfReflections, mirrorId) => {
    if (!is.str(theText)) {
        invArg('ZZTE()');
        console.log('"theText" should be a string.');
        console.log(`The input : ${typeof theText}`);
        return '';
    }
    else if(theText.length === 0) {
        return theText;
    }
    else if (!is.str(thePassword)) {
        invArg('ZZTE()');
        console.log('"thePassword" should be a string.');
        console.log(`The input : ${typeof thePassword}`);
        return '';
    }
    else if (!is.number(numberOfReflections)) {
        invArg('ZZTE()');
        console.log('"numberOfReflections" should be a number.');
        console.log(`The input : ${typeof numberOfReflections}`)
        return '';
    }
    else if (!is.number(mirrorId)) {
        invArg('ZZTE()');
        console.log('"mirrorId" should be a number.');
        console.log(`The input : ${typeof mirrorId}`)
        return '';
    }
    else if (mirrorId < 0 || mirrorId >= mirrorBox.length) {
        invArg('ZZTE()');
        console.log('"mirrorId" is invalid.');

        if (mirrorBox.length === 1) {
            console.log(`It should be '0' because there is just 1 mirror detected.`);
        }
        else {
            console.log(`It should be '0' to ${mirrorBox.length - 1}`);
        }

        console.log(`The input : ${mirrorId}`)
        return '';
    }
    else {
        // Jika reflectionMaxNumber melebihi batas, maka yang akan digunakan adalah sisa hasil bagi dari nilaiMax
        // When reflectionMaxNumber exceed the limit, then the remainder will be used
        if (numberOfReflections > reflectionMaxNumber) {

            numberOfReflections = Math.ceil(numberOfReflections % reflectionMaxNumber);

            console.log('The number of reflections must not exceed ' + reflectionMaxNumber + ', otherwise your results may not be as expected.');
            console.log('Your Encryption still safe, no problem.');
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