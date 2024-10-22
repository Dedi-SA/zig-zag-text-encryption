// Step 1 : Filtering
const ZZTE = (theText, thePassword) => {
    if (!is.str(theText)) {
        invArg('zztEncryptor()');
        console.log('The input must be string');
    }
    else {
        if (theText.length === 0) {
            return theText;
        }
        else {
            if (typeof thePassword !== 'string') {
                invArg('zztEncryptor()');
                console.log('The password must be string');
            }
            else {
                return mulaiEnkripsiDekripsi([...theText], thePassword);
            }
        }
    }
};