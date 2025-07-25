function fibs(n) {
    if (n === 0) return [];
    if (n === 1) return [0];

    let arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    return arr;
}

function fibsRec(n) {
    if (n === 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    let arr = fibsRec(n - 1);
    arr.push(fibsRec(n - 1)[n - 3] + fibsRec(n - 1)[n - 2]);
    return arr;
}

let time = 8;

// console.time('iterative')
// console.log(fibs(time));
// console.timeEnd('iterative');

// console.time('recursion')
// console.log(fibsRec(time));
// console.timeEnd('recursion');

function mergeSort(array) {
    //if (length === 1) return array
    //if length > 1) mergeSort(array.slice(0, length/2))
    //               mergeSort(array.slice(length/2, length))
    //               mergeArrays(left, right);
    let left = [];
    let right = [];
    if (array.length === 1) return array;
    else {
        left = mergeSort(array.slice(0, array.length / 2));
        right = mergeSort(array.slice(array.length / 2, array.length));
        return mergeArrays(left, right);

    }
}

function mergeArrays(left, right) {
    let newArr = [];
    let maxLength = left.length + right.length;

    for (let i = 0; i < maxLength; i++) {
        let nextValue = 0;

        if (left.length === 0) nextValue = right.shift();
        else if (right.length === 0) nextValue = left.shift();
        else if (left[0] < right[0]) {
            nextValue = left.shift();
        } else {
            nextValue = right.shift();
        }

        newArr[i] = nextValue;
    }

    return newArr;
}

console.log(mergeSort([105, 79, 100, 110]));