const UNSUPPORTED_SYMBOLS = [' ', '’', 'ў', 'ж', 'ш', 'ч', 'я', 'й', '«', 'ь']

const CYRILLIC_TO_LATIN = (() => {
    const cyrillic = 'а, б, в, г, д, е, ё, ж, з, и, й, к, л, м, н, о, п, р, с, т, у, ф, х, ц, ч, ш, щ, ъ, ы, ь, э, ю, я, і, ў'.split(', ');
    const latin = 'a, b, v, g, d, e, jo, zh, z, i, j, k, l, m, n, o, p, r, s, t, u, f, h, c, ch, sh, shh, , y, , je, ju, ja, i, u'.split(', ');
    if (cyrillic.length !== latin.length) {
        throw new Error('different number of letters in alphabets');
    }
    const result = {};
    for (let i = 0; i < cyrillic.length; i++) {
        result[cyrillic[i]] = latin[i];
    }
    return result;
})();


function translit(word) {
    let result = '';
    for (const letter of word.toLowerCase()) {
        const latin = CYRILLIC_TO_LATIN[letter];
        if (latin) {
            result += latin;
            continue;
        }
        if (letter === ' ') {
            result += '_';
        }
        if (letter >= '0' && letter <= '9') {
            result += latin;
        }
    }
    return result;
}

function update(wordsSet) {
    const words = Array.from(wordsSet)
        .filter(w => !UNSUPPORTED_SYMBOLS.some(s => w.indexOf(s) >= 0))
        .map(w => { return { orig: w, trans: translit(w) } })
        .filter(comb => comb.trans.length === 7)

    document.querySelector('#total-words').innerText = `Усяго ${words.length} слоў`;
    const div = document.querySelector('#result');
    div.innerHTML = '';
    for (const comb of words) {
        const row = document.createElement('div');
        row.classList.add('row');
        const orig = document.createElement('span');
        orig.classList.add('original');
        orig.innerText = comb.orig;
        row.appendChild(orig);
        const arrow = document.createElement('span');
        arrow.classList.add('arrow');
        arrow.innerText = '→';
        row.appendChild(arrow);
        const trans = document.createElement('span');
        trans.classList.add('transliterated');
        trans.innerText = comb.trans;
        row.appendChild(trans);
        div.appendChild(row);
    }

}

async function main() {
    const dup = new Set();
    let words = (await (await fetch('bel_words.txt')).text())
        .split('\n')
        .map(w => w.substring(w.lastIndexOf('@') + 1))
        .map(w => w.toLowerCase())
        .map(w => w.replaceAll(/´/g, ''));
    words = new Set(words);
    update(words);
    console.log(words);
}

main();