Array.prototype.myPush = function (...elements) {
    const originalLength = this.length //Здесь мы сохраняем длину массива this = array
    for (let i = 0; i < elements.length; i++) {
        this[originalLength + i] = elements[i] //Так как мы внутри цикла мы должны знать изначальную длину массива
        // Если напишем this[this.length + i] будет не правильно так как длина изменяется а мы заранее должны знать длину массива и к нему добавить новый элемент
    }

    return this.length
}

function distributeElements(array) {
    const greaterZero = []
    const lessZero = []
    const equalZero = []

    for (let i = 0; i < array.length; i++) {//Перебираю массив

        if (array[i] > 0) {
            greaterZero.myPush(array[i])
        }

        else if (array[i] < 0) {
            lessZero.myPush(array[i])
        }

        else {
            equalZero.myPush(array[i])
        }
    }
    // До этого момента у нас было Функция
    return { // Здесь после return начинается сформироваться Обьект
        positiveNums: greaterZero,
        negativeNums: lessZero,
        zeroNums: equalZero,
    }//И функция вернеть Обьект с своиствами
    // По сути я вернул несколько переменных как своисва обьекта
}


// Пример использования функции
const inputArray = [13, -6, 0, 4, -2, 0, 19, 1]
const result = distributeElements(inputArray)//result = object type

console.log("Положительные числа:", result.positiveNums)//13, 4, 19, 1
console.log("Отрицательные числа:", result.negativeNums)//-6, -2
console.log("Нулевые числа:", result.zeroNums)// 0, 0

console.log("result обьект:", result)



