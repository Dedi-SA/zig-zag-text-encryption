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

const getRotatorNumbers = (theTextArr, str, sessions) => {
    const randomNumber_1 = Math.abs(theTextArr.length - str.length) + 1,
          randomNumber_2 = Math.ceil((str.length + getRandomNumberByString(str, KEY) + sessions) / 4) + theTextArr.length;

    return [
        randomNumber_1 > 10000 ? randomNumber_1 - Math.ceil(randomNumber_1 / 3) + 1 : randomNumber_1,
        randomNumber_2 > 10000 ? randomNumber_2 - Math.floor(randomNumber_2 / 4) + 1 : randomNumber_2
    ];
};

const getStringFromMirror = mirrorId => {
    return mirrorBox[mirrorId].slice(7, 7+3);
};

const doMirroring = (theString, mirrorId, status) => {
    if (status) {
        return mirrorBox[mirrorId][KEY.indexOf(theString)];
    }
    else {
        return KEY[mirrorBox[mirrorId].indexOf(theString)];
    }
};

const getRandomNumberByString = (theString, theReference) => {
    if (theString.length === 0) {
        return 0;
    }
    else {
        theString = [...theString].map(e => get.id(e, theReference)) // get.id() for each element
                                  .map(e => e.toString())
                                  .map(e => e.length === 1 ? '0' + e : e)
                                  .reverse()
                                  .join('');

        theString = [...theString].map(e => get.id(e, theReference))
                                  .reduce((a,b) => a+b, 0);
                                  
        // Limited to three digits for performance reasons
        while (theString >= 5000) {
            theString = Math.ceil(theString / 3) + 3;
        }

        // This variable is number already
        return theString;
    }
};