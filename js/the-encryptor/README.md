# the-encryptor

**the-encryptor** is the core engine of ZZTE.
It is portable and can be used in other projects.

## Contents List
1. [key.js](#keyjs)
2. [mirrorBox.js](#mirrorBoxjs)


## key.js

    1. KEY is an array containing 94 specific string characters.

    2. It consists of 10 digits number, 26 small alphabets, 26 CAPITAL alphabets,

       1 space character, and 31 symbols and punctuation marks.

       (Basically all characters on modern keyboard EXCEPT: the left slash '\')

    3. No characters should be repeated, and no characters should be left out.

    4. The character order is random and can be modified, as long as it matches the definitions in points 1, 2, and 3.
    
    5. KEY is a central variable that required to run the encryptor.


Here is the KEY if sorted :

    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ `~!@#$%^&*()-_=+[]{}|;:\'",.<>/?'



## mirrorBox.js

    1. mirrorBox is a nested array.

    2. Each element in it is basically the KEY, but in a random order and must not be the same as the KEY.

    3. The maximum number of elements is 26, same as the alphabet, and it must not exceed that.

    4. None of these elements should exactly match the sequence of characters in the KEY being used.

    5. There must be no twin elements in it.

       If any are found, then the mirrorBox will be declared invalid, and the program will not run.