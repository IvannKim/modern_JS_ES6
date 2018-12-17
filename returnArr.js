/*
-특정 문자열이 포함된 배열 만들어 반환하기

li 정보를 받아서 filter, includes, from 을 이용하여 
'e'가 포함된 배열을 노드로 구성된 배열 반환하기
*/

function print() {
    let list = document.querySelectorAll("li");
    let listArr = Array.from(list)
    let eArr = listArr.filter((v) => {
        return v.innerText.includes("e");
    });
    return eArr
}
print();