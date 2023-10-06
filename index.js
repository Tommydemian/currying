function createFunction() {
    function multiplyBy2(num) {
        return num * 2;
    }
    return multiplyBy2;
}

const generatedFunc = createFunction();
// eslint-disable-next-line no-unused-vars
const result = generatedFunc(6); // 12
