import * as pad from 'complete-string';

function main() {
    const name = 'Piotr';
    const longName = pad.withChar(name, 10, '_');
    console.log(longName);

    const sec = new Date().getSeconds();
    const what = pad.withZero(String(sec), 2);
    console.log(what);
}

main();
