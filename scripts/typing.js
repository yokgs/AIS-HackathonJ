const strings = [
    'We are leading a new generation to change the world',
    'Be the change you wish to see in the world'
];
let j = 0, string = '', w = 20;
let i = 0, type = true, k = 0;

function refresh() {
    if (type) {
            string += strings[j][string.length];
        type = string.length < strings[j].length;
    } else {
        if (k == w - 1) {
            string = string.substr(0, Math.max(string.length - 2, 0));
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