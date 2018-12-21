//가짜 배열인 arguments를 진빠 배열로 치환
function checkNum() {
    const argArray = Array.prototype.slice.call(arguments);
    console.log(argArray);
    const result = argArray.every(v => typeof v === 'number')
    console.log(result)
}

const result = checkNum(10,2,3,4,5,false)

function checkNum1(...argArray) {
    const result = argArray.every(v => typeof v === 'number')
    console.log(result)
}

const result1 = checkNum1(10,2,3,4,5, false)