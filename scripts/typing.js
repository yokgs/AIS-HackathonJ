const strings = [
    'We are leading a new generation to change the world',
    'Be the change you wish to see in the world'
];
let j = 0, string = '', w = 15;
let i = 0, type = true, k = 0;

function refresh() {
    if (type) {
        i = (++i) % 2;
        if (i) {
            string += strings[j][string.length];

        }
        type = string.length < strings[j].length;
    } else {
        if (k == w - 1) {
            string = string.substr(0, string.length - 1);
            type = string.length == 0;
            if (type) {
                j = (++j) % strings.length;
                k = 0;
                i = 0;
            }
        } else {
            k = (++k) % w;
        }

    }
    document.getElementById('header1').innerText = string + " ";
}

setInterval(refresh, 100);
document.querySelector('button.menu').addEventListener('click', e => {
    e.preventDefault()
    document.querySelector('body>header>nav').setAttribute('class', 'active');
});
document.querySelector('body>header>nav.active>.close').addEventListener('click', e => {
    e.preventDefault()
    document.querySelector('body>header>nav.active').setAttribute('class', '');
});
