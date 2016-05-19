function foo(x: boolean): number {

    if (x) {
        return 10;
    } else {
        // throw new Error();
    }

    return 1;
}

function bar(x: number, y: boolean): number {

    switch (x) {
        case 3: if (y) return 2; else return 1;
        case 4: return 3;
        default: return 4;
    }
}
