// Step 1 : Filtering
const ZZTE = (theText, thePassword, status) => {
    if (!is.str(theText)) {
        invArg('ZZTE()');
        console.log('The input must be string');
    }
    else {
        if (theText.length === 0) {
            return theText;
        }
        else {
            if (typeof thePassword !== 'string') {
                invArg('ZZTE()');
                console.log('The password must be string');
            }
            else if (thePassword.length > 20) {
                thePassword = thePassword.slice(0, 19);
            }
            else {
                return mulaiEnkripsiDekripsi([...theText], thePassword, status);
            }
        }
    }
};