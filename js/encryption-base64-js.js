
const logo_utama = 'data:image/png;base64,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';


document.getElementById('logo-utama').setAttribute('src', logo_utama);