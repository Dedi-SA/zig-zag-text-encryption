        // Simplified element
const   tempatStatusEnkripsi   = get.elemen('#tempatStatusEnkripsi'),
        tempatPassword         = get.elemen('#tempatPassword'),
        tempatJenisCermin      = get.elemen('#tempatJenisCermin'),
        tempatJumlahRefleksi   = get.elemen('#tempatJumlahRefleksi'),
        tempatInput            = get.elemen('#tempatInput'),
        tempatOutput           = get.elemen('#tempatOutput'),
        tempatInfo             = get.elemen('#tempatInfo');

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
            tempatPassword.value = [...get.password()].filter(e => KUNCI_diurutkan.includes(e)).join('');

            zztEncryptor();
        },

        tempatJenisCermin_ValueChanged = () => {
            zztEncryptor();
        },

        tempatJumlahRefleksi_ValueChanged = () => {
            zztEncryptor();
        };