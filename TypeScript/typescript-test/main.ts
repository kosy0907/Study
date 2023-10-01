// number
function add(a: number, b: number) {
    return a + b;
}
const sum: number = add(2, 2);
console.log(sum);


// interface
interface User {
    name: String,
    age: number,
    isValid: boolean
}
let userArr: User[] = [
    {
        name: 'Kim',
        age: 23,
        isValid: false
    },
    {
        name: 'Ko',
        age: 25,
        isValid: true
    }
]
console.log(userArr[0].name);
console.log(userArr[1].isValid);


// Enum - 숫자 혹은 문자열 값 집합에 이름(Member)을 부여할 수 있는 타입, 값의 종류가 일정한 범위로 정해져 있는 경우 유용
enum Week {
    Sun = 2,
    Mon = 3,
    Tue = 11,
    Wed,
    Thu,
    Fri,
    Sat
}
console.log(Week.Mon);
console.log(Week.Tue);
console.log(Week.Wed);