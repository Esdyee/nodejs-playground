function strLength(arr) {
    console.log(arr);
    if(!arr[0]) return 0;
    return strLength(arr.slice(0,-1)) + 1;
}

let str = 'abcde';
let len = strLength(str);

console.log(len);
