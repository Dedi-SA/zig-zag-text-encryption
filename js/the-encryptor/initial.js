// Rule
const maxPassword = 20,
      maxNumberOfReflection = 100;

// Step 1 : Filtering & Fixing
const ZZTE = (theText, thePassword, status, numberOfReflections, mirrorId) => {
    if (!is.str(theText)) {
        invArg('ZZTE()');
        console.log('The input must be string.');
        return '';
    }
    else if(theText.length === 0) {
        return theText;
    }
    else if (!is.str(thePassword)) {
        invArg('ZZTE()');
        console.log('The password must be string.');
        return '';
    }
    else if (!is.number(numberOfReflections)) {
        invArg('ZZTE()');
        console.log('Number of Reflections must be a number.');
        return '';
    }
    else if (!is.number(mirrorId) || mirrorId < 0 || mirrorId >= mirrorBox.length) {
        invArg('ZZTE()');
        console.log('mirrorId is invalid');
        return '';
    }
    else {
        // Jika maxNumberOfReflection melebihi batas, maka yang akan digunakan adalah sisa hasil bagi dari nilaiMax
        // When maxNumberOfReflection exceed the limit, then the remainder will be used
        if (numberOfReflections > maxNumberOfReflection) {

            numberOfReflections = Math.ceil(numberOfReflections % maxNumberOfReflection);

            console.log('The number of reflections must not exceed ' + maxNumberOfReflection + ', otherwise your results may not be as expected.');
            console.log('Your Encryption still safe, no problem.');
        }

        // Bila panjang password melebihi batas, maka hanya 20 karakter pertama yang akan digunakan
        // If the password is longer than the limit, only the first 20 characters will be used
        thePassword = thePassword.length <= maxPassword ? thePassword : thePassword.slice(0, maxPassword);

        return mulaiEnkripsiDekripsi([...theText], thePassword, status, numberOfReflections, mirrorId);
    }
};