        // Simplified element
const   tempatStatusEnkripsi   = specialGet.elemen('#tempatStatusEnkripsi'),
        tempatPassword         = specialGet.elemen('#tempatPassword'),
        tempatJenisCermin      = specialGet.elemen('#tempatJenisCermin'),
        tempatJumlahRefleksi   = specialGet.elemen('#tempatJumlahRefleksi'),
        tempatInput            = specialGet.elemen('#tempatInput'),
        tempatOutput           = specialGet.elemen('#tempatOutput'),
        tempatInfo             = specialGet.elemen('#tempatInfo');

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
            // Mem-filter tempat password sesuai variabel "KUNCI_diurutkan"
            tempatPassword.value = [...specialGet.password()].filter(e => KUNCI_diurutkan.includes(e)).join('');

            zztEncryptor();
        },

        tempatJenisCermin_ValueChanged = () => {
            zztEncryptor();
        },

        tempatJumlahRefleksi_ValueChanged = () => {
            zztEncryptor();
        };