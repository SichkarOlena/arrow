// 1)написати фукцію стрілку, яка приймає джерельний масив
// і повертає масив з двох значень,
//     які є мінімальним і максимальним значенням джерельного масиву
// якщо джерельний масив порожній, то функція повертає порожній масив
//
// 2)написати функцію стрілку, яка приймає безліч аргументів
// і повертає результат їх множення, якщо аргументів не має - повертає null
//
// 3)переписати функцію, що нижче на функцію стрілку
// function askUser(quetion){
//     const userInput = confirm(quetion);
//     if(userInput){
//         return 'ok';
//     }
//     return 'error';
// }

/////  TASK 1 /////////
const task1 = (array) => {
    if (array.length === 0) {
        return array;
    } else {
        let min = array[0];
        let max = array[0];
        array.forEach((value) => {
            if (min > value) {
                min = value
            }
            if (max < value) {
                max = value
            }
        })
        return [min, max];
    }
}
const testArray = [];
const testArray2 = [2, 5, 9, 10, 5];
console.log(task1(testArray2));

/////////TASK 2 ////////////////
const task2 = (...arg) => {
    let result = null;
    arg.forEach((value, index) => {
        if (index === 0) {
            result = value
        } else {
            result = result * value
        }
    })
    return result;
}
console.log(task2(1, 4, 6,))



/////// TASK 3 /////////

const askUser = (quetion) => {
    const userInput = confirm(quetion);
    if(userInput){
        return 'ok';
    }
    return 'error';
}

console.log(askUser())
