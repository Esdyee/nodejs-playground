function BubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        console.log(i, 'i')
        for(let j = 0; j < array.length - 1 - i; j++) {
            if(array[j] > array[j + 1]) {
                console.log(j, 'j')
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
        console.log('----')
    }
}

let array = [5, 4, 3, 2, 1];

console.log(array);
BubbleSort(array);
console.log(array);

