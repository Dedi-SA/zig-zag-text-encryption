
const zzteValidation = () => {
    let theProblems = [];

    // Check rules.js
    if (passwordMaxLength < 3) {
        theProblems.push('Variable "passwordMaxLength" is to few, it should be 4 or higher.');
    }
    if (reflectionMaxNumber < 2) {
        theProblems.push('Variable "reflectionMaxNumber" is to few, it should be 3 or higher.');
    }

    
    // Check functions.js
    if (typeof rotate !== 'function') {
        theProblems.push(`Variable "rotate" should be a function. The system detected it as ${typeof rotate}.`);
    }
    if (typeof getRotatorNumbers !== 'function') {
        theProblems.push(`Variable "getRotatorNumbers" should be a function. The system detected it as ${typeof getRotatorNumbers}.`);
    }
    if (typeof getStringFromMirror !== 'function') {
        theProblems.push(`Variable "getStringFromMirror" should be a function. The system detected it as ${typeof getStringFromMirror}.`);
    }
    if (typeof doMirroring !== 'function') {
        theProblems.push(`Variable "doMirroring" should be a function. The system detected it as ${typeof doMirroring}.`);
    }
    if (typeof getRandomNumberByString !== 'function') {
        theProblems.push(`Variable "getRandomNumberByString" should be a function. The system detected it as ${typeof getRandomNumberByString}.`);
    }


    // Check key.js
    if (!isValidKey(KEY)) {
        theProblems.push('The KEY is detected invalid.');
    }


    //Check mirrorBox.js
    if (!isValidMirrorBox()) {
        theProblems.push('The Mirror Box is detected invalid.');
    }
    

    // Check encryptor.js
    if (typeof mulaiEnkripsiDekripsi !== 'function') {
        theProblems.push(`Variable "mulaiEnkripsiDekripsi" should be a function. The system detected it as ${typeof mulaiEnkripsiDekripsi}.`);
    }
    if (typeof rotatorSessions !== 'function') {
        theProblems.push(`Variable "rotatorSessions" should be a function. The system detected it as ${typeof rotatorSessions}.`);
    }

    
    return {
        theStatus: theProblems.length === 0 ? true : false,
        theIssues: theProblems
    };
};