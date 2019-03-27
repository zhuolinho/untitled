function slidePuzzle(arr) {
    const tree = [];
    const path = [];
    tree.push(makeObj(arr, -1));

    for (let index = 0; ; index++) {
        const tmp = branch(tree[index].value);
        let i = 0;

        for (; i < tmp.length; i++) {
            const obj = makeObj(tmp[i].value, index, tmp[i].path);
            if (obj) {
                tree.push(obj)
            } else {
                break;
            }
        }

        if (i !== tmp.length) {
            path.unshift(tmp[i].path);
            for (let parent = index; parent > -1; parent = tree[parent].parent) {
                if (tree[parent].path) path.unshift(tree[parent].path);
            }
            break;
        }
        console.log(tree.length)
    }

    return path;
}

function branch(arr) {
    const values = [];
    const {i, j, x, y} = find0(arr);
    if (i !== 0) {
        values.push({value: swap(arr, i - 1, j, i, j), path: arr[i - 1][j]});
    }

    if (j !== 0) {
        values.push({value: swap(arr, i, j - 1, i, j), path: arr[i][j - 1]});
    }

    if (i !== x) {
        values.push({value: swap(arr, i + 1, j, i, j), path: arr[i + 1][j]});
    }

    if (j !== y) {
        values.push({value: swap(arr, i, j + 1, i, j), path: arr[i][j + 1]});
    }

    return values;
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
        for (let j = 0; j < arr[i].length; j++) {
            if (!arr[i][j]) {
                return {i, j, x: arr.length - 1, y: arr[i].length - 1};
            }
        }
    }
}

function swap(arr, x, y, x0, y0) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push([]);

        for (let j = 0; j < arr[i].length; j++) {
            if (i === x && j === y) result[i].push(arr[x0][y0]);
            else if (i === x0 && j === y0) result[i].push(arr[x][y]);
            else result[i].push(arr[i][j]);
        }
    }

    return result;
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
