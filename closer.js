function defineModel(config) {
  // config에 전달된 set 함수를 추출합니다.
  const { setFunction } = config;

  // modifiers 객체를 정의하고 초기 값을 설정합니다.
  const modifiers = { capitalize: true };

  // model 함수는 입력 값을 받아서 config의 set 함수를 호출합니다.
  const model = function(value) {
    return setFunction(value);
  };

  // set 함수 내에서 modifiers를 참조할 수 있도록,
  // set 함수를 호출하는 model 함수와 modifiers 객체를 배열로 묶어 반환합니다.
  return [model, modifiers];
}

// defineModel 함수를 사용하여 model 함수와 modifiers 객체를 구조 분해 할당을 통해 추출합니다.
const [model, modifiers] = defineModel({
  setFunction(value) {
    // 여기에서 modifiers 객체를 참조합니다.
    if (modifiers.capitalize) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
    return value;
  }
});


// model 함수를 테스트합니다.
console.log(model("hello"));  // "Hello"를 출력해야 합니다.

// modifiers 객체의 값을 변경합니다.
modifiers.capitalize = false;

// 변경 후 model 함수를 다시 테스트합니다.
console.log(model("hello"));  // "hello"를 출력해야 합니다.



let [test1, test2] = testFunction({
    innerFunction(value) {
        test2 = value;
    }
})

function testFunction(config) {
    const { innerFunction } = config;
    const model = function(value) {
        return innerFunction(value);
    };
    return [test1, test1];
}
