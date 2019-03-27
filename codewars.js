function slidePuzzle(arr) {
    const tree = [];
    let index = -1;
    for (; ; index++) {
        const obj = makeObj(arr, index);
        if (obj) {
            tree.push(obj);
        } else {
            break;
        }
    }
    return tree;
}

function makeObj(arr, parent, path) {
    if (solute(arr)) {
        return false;
    } else {
        return {value: arr, parent, path};
    }
}

function find0(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (!arr[i][j]) {
                return {i, j};
            }
        }
    }
}

function solute(arr) {
    let n = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            n = (n + 1) % (arr.length * arr[i].length);
            if (arr[i][j] !== n) return false;
        }
    }
    return true;
}

let puzzle1 = [
    [4, 1, 3],
    [2, 8, 0],
    [7, 6, 5]
];

console.log(slidePuzzle(puzzle1));
