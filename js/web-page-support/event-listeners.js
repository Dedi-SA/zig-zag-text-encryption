        // Simplified element
const   tempatStatusEnkripsi   = get.element('#tempatStatusEnkripsi'),
        tempatPassword         = get.element('#tempatPassword'),
        tempatInput            = get.element('#tempatInput'),
        tempatOutput           = get.element('#tempatOutput'),
        jumlahRefleksi         = get.element('#tempatJumlahRefleksi');

const   inputElements = document.querySelectorAll('.value-input'),
        changeElements = document.querySelectorAll('.value-change'),
        dblClickElements = document.querySelectorAll('.double-click'),
        inputPasswordElements = document.querySelectorAll('.password-input');
        
const   startTheProcess = () => {
            tempatOutput.value = ZZTE(tempatInput.value, tempatPassword.value, tempatStatusEnkripsi.value === 'enkripsi', +jumlahRefleksi.value, +get.element('#tempatJenisCermin').value);
            resultSpaceWarning();
        };

        inputElements.forEach(theElement => {
            theElement.addEventListener('input', startTheProcess);
        })

        changeElements.forEach(theElement => {
            theElement.addEventListener('change', startTheProcess);
        })

        dblClickElements.forEach(theElement => {
            theElement.addEventListener('dblclick', function() {
                tempatStatusEnkripsi.value = tempatStatusEnkripsi.value === 'enkripsi' ? 'dekripsi' : 'enkripsi';
                startTheProcess();
            })
        })

        inputPasswordElements.forEach(theElement => {
            theElement.addEventListener('input', function() {
                tempatPassword.value = [...tempatPassword.value].filter(e => generalString.includes(e)).join('');
                startTheProcess();
            })
        })