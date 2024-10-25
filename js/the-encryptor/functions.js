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
          randomNumber_2 = Math.ceil((str.length + get.randomNumberByString(str, KEY) + sessions) / 4) + theTextArr.length;

    return [
        randomNumber_1 > 10000 ? randomNumber_1 - Math.ceil(randomNumber_1 / 3) + 1 : randomNumber_1,
        randomNumber_2 > 10000 ? randomNumber_2 - Math.floor(randomNumber_2 / 4) + 1 : randomNumber_2
    ];
};

const getStringFromMirror = () => {
        return mirrorBox[+get.element('#tempatJenisCermin').value]
               .slice(7, 3);
};