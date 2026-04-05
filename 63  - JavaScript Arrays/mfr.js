let arr = [1, 14, 6, 19, 8, 13]

// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }
// console.log(newArr);

let newArr = arr.map((e, index, arr) => {
    return e ** 2
})
console.log(newArr);


const GreaterThanFifty = (e) => {
    if (e > 50) {
        return true
    } return false
}

console.log(newArr.filter(GreaterThanFifty)) 

let arr2 = [1,2,3,4,5,6,7]

const red = (a, b) =>{
    return a*b
}

console.log(arr2.reduce(red));

