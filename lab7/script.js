// LabEx7

// Бейсембай Нурым

Array.prototype.myPush = function (...elements) {
    const originalLength = this.length
    for (let i = 0; i < elements.length; i++) {
        this[originalLength + i] = elements[i]
    }

    return this.length
}



//Вычесляется каждый число из массива
function isPrimeNumber(num) {
    if (num <= 1 && num > 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {//Math.sqrt что бы сократить колличество операции
        if (num % 2 === 0 || num % 3 === 0) {
            return false
        }
    }
    return true // Так как у нас функция isPrimeNumber вывызается для каждого элемента массива тогда нам просто надо вернуть является ли данный число простым или нет
}



//Аналог методу Filter в Js
function deletePrimesNumber(array) {
    const numbersNotPrime = []
    const primeNums = []
    if(Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            if (!isPrimeNumber(array[i])) {
                // Здесь у нас все числа кроме простых
                numbersNotPrime.myPush(array[i])
            } else{
                primeNums.myPush(array[i])
            }
        }
        console.log('Простые числа: ', primeNums)
        return numbersNotPrime
    }else {
        console.log('Укажите тип: массив')
    }
}

const array = [-18, -9, 1, 0, 2, 78, 4, 5, 46, 7, 20, 66, 9, 15 , 80]

console.log('Массив без простых чисел: ', deletePrimesNumber(array)) // [78, 4, 46, 20, 66, 9, 15, 80]