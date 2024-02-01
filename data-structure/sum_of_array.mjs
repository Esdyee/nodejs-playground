function sumArray(arr) {
    if(arr.length === 1) return arr[0];
    // 0 번 인덱스부터 -1번 인덱스까지(뒤에서 첫번쨰)의 합을 구한다.
    return sumArray(arr.slice(0, -1)) + arr[arr.length -1];
}

let arr = [1, 2, 3, 4, 5];
let sum = sumArray(arr);

console.log(sum);
