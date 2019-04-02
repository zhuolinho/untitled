function slidePuzzle(arr) {
    const tree = [];
    const path = [];
    const hash = {};
    tree.push(makeObj(arr, -1));

    for (let index = 0; ; index++) {
        const tmp = branch(tree[index].value);
        let i = 0;

        for (; i < tmp.length; i++) {
            const value = tmp[i].value;
            if (!hash[value]) {
                const obj = makeObj(value, index, tmp[i].path);
                if (obj) {
                    console.log(tree.length);
                    tree.push(obj);
                } else {
                    break;
                }
                hash[value] = true;
            }
        }

        if (i !== tmp.length) {
            path.unshift(tmp[i].path);
            for (let parent = index; parent > -1; parent = tree[parent].parent) {
                if (tree[parent].path) path.unshift(tree[parent].path);
            }
            break;
        }
    }

    return path;
}

function branch(arr) {
    const values = [];
    const { i, j, x, y } = find0(arr);
    if (i !== 0) {
        values.push({ value: swap(arr, i - 1, j, i, j), path: arr[i - 1][j] });
    }

    if (j !== 0) {
        values.push({ value: swap(arr, i, j - 1, i, j), path: arr[i][j - 1] });
    }

    if (i !== x) {
        values.push({ value: swap(arr, i + 1, j, i, j), path: arr[i + 1][j] });
    }

    if (j !== y) {
        values.push({ value: swap(arr, i, j + 1, i, j), path: arr[i][j + 1] });
    }

    return values;
}

function makeObj(arr, parent, path) {
    if (solute(arr)) {
        return false;
    } else {
        return { value: arr, parent, path };
    }
}

function find0(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (!arr[i][j]) {
                return { i, j, x: arr.length - 1, y: arr[i].length - 1 };
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

let puzzle2 = [
	[10, 3, 6, 4],
	[ 1, 5, 8, 0],
	[ 2,13, 7,15],
	[14, 9,12,11]
];

console.log(slidePuzzle(puzzle2));
