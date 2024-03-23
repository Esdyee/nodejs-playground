//accumulator 누적값, currentValue 현재값, index는 인덱스, arr은 배열의 원본요소

const array = [ 6, 2, 1, 8, 10 ]

const result = array.reduce((
    accumulator,
    currentValue,
    index,
    arr
) => {
  console.log(accumulator, currentValue, index, arr);
  return accumulator + currentValue;
}, 0);
// 0 6 0
// 6 2 1
// 8 1 2
// 9 8 3
// 17 10 4
// result; // 27
