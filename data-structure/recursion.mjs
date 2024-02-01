// 재귀함수 테스트

function myFunction(number) {
    console.log(number);
    myFunction(number - 1);
}


// 팩토리얼 재귀함수
function factorial(number) {
    if(number === 1) {
        return 1;
    }
    return number * factorial(number - 1);
}
