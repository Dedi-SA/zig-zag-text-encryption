//         // Simplified element
const   tempatStatusEnkripsi   = get.element('#tempatStatusEnkripsi'),
        tempatPassword         = get.element('#tempatPassword');

const   inputElements = document.querySelectorAll('.value-input'),
        changeElements = document.querySelectorAll('.value-change'),
        dblClickElements = document.querySelectorAll('.double-click'),
        inputPasswordElements = document.querySelectorAll('.password-input');


        inputElements.forEach(theElement => {
            theElement.addEventListener('input', function() {
                tempatOutput.value = ZZTE();
            });
        });

        changeElements.forEach(theElement => {
            theElement.addEventListener('change', function() {
                tempatOutput.value = ZZTE();
            });
        });

        dblClickElements.forEach(theElement => {
            theElement.addEventListener('dblclick', function() {
                tempatStatusEnkripsi.value = tempatStatusEnkripsi.value === 'enkripsi' ? 'dekripsi' : 'enkripsi';
                tempatOutput.value = ZZTE();
            });
        });

        inputPasswordElements.forEach(theElement => {
            theElement.addEventListener('input', function() {
                tempatPassword.value = [...specialGet.password()].filter(e => generalString.includes(e)).join('');
                tempatOutput.value = ZZTE();
            });
        });