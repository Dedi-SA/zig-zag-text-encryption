const keyStandartLength = 94, // The required number of elements needed for a valid KEY

      KEY = [...'Pr#j["I4YRo.bW;^$v0_h8e`qL}J?u<G1%n]DA7:)N9~Vc-X*tOmi zfx=U{a&6T+EQ\'!2lK|HF>@Sgyk,Ms3dw/Bp(5CZ'],

      // To Check is variable 'KEY' is valid or not
      isValidKey = theKey => {
            if (Array.isArray(theKey) && theKey.every(e => is.str(e))) {
                
                return noDuplicate(theKey).length === keyStandartLength;
            }
            else
                return false;
      }