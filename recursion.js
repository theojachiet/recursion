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
    arr.push(fibsRec(n-1)[n-3] + fibsRec(n-1)[n-2]);
    return arr;
}

let time = 8;

console.time('iterative')
console.log(fibs(time));
console.timeEnd('iterative');

console.time('recursion')
console.log(fibsRec(time));
console.timeEnd('recursion');