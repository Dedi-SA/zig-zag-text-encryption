// By standard, mirror is limited to 26
for (let i = 0; i < 26; i++) {
    if (i >= mirrorBox.length) {
        break;
    }

    let option_jenisCermin             = document.createElement('option');
        option_jenisCermin.value       = i;
        option_jenisCermin.innerHTML   = get.capitalLetters()[i];
    tempatJenisCermin.appendChild(option_jenisCermin);
}