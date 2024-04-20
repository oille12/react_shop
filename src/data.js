let data = [
    {
        id:0,
        title:'모니터',
        content:'울트라 모니터',
        price:4000
    },
    {
        id:1,
        title:'마우스',
        content:'',
        price:2000
    },
    {
        id:2,
        title:'키보드',
        content:'',
        price:3000
    }
];

let num1 = 1;
let num2 = 2;
let num3 = 3;


export default data;
// default 는 하나만 내보낼 수 있다.
// 추가로 내보내고 싶다면
export {num1, num2, num3};
