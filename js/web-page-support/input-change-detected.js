        // Simplified element
const   tempatStatusEnkripsi   = get.element('#tempatStatusEnkripsi'),
        tempatPassword         = get.element('#tempatPassword'),
        tempatJenisCermin      = get.element('#tempatJenisCermin'),
        tempatJumlahRefleksi   = get.element('#tempatJumlahRefleksi'),
        tempatInput            = get.element('#tempatInput'),
        tempatOutput           = get.element('#tempatOutput'),
        tempatInfo             = get.element('#tempatInfo');

const   tempatInput_TextChanged = () => {
            zztEncryptor();
        },

        tempatStatusEnkripsi_ValueChanged = () => {
            zztEncryptor();
        },

        tempatStatusEnkripsi_DoubleClick = () => {
            // Membalik kondisi status enkripsi
            tempatStatusEnkripsi.value = tempatStatusEnkripsi.value === 'enkripsi' ? 'dekripsi' : 'enkripsi';

            zztEncryptor();
        },

        tempatPassword_TextChanged = () => {
            // Mem-filter tempat password sesuai variabel "generalString"
            tempatPassword.value = [...specialGet.password()].filter(e => generalString.includes(e)).join('');

            zztEncryptor();
        },

        tempatJenisCermin_ValueChanged = () => {
            zztEncryptor();
        },

        tempatJumlahRefleksi_ValueChanged = () => {
            zztEncryptor();
        };