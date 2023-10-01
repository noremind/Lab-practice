// LAb1Ex6

// Бейсембай Нурым

// Создать функцию, позволяющую удалять блок элементов, начиная
// с произвольного индекса массива.


Array.prototype.myPush = function (...elements) {
    const originalLength = this.length
    for (let i = 0; i < elements.length; i++) {
        this[originalLength + i] = elements[i]
    }

    return this.length
}



let deleteElement = function (array, index) {
    let resultArr = []


    if (Array.isArray(array) && indexToRemove > -1 && indexToRemove < array.length) {//Проверка того что это точно массив и что indexToRemove не с -1 индексом и не больше чем сам массив

        for (let i = 0; i < array.length; i++) { // Беребигаюс по массиву


            if (i !== index) { //Удаляет именно того элемента который мы указали в переменную indexToRemove
                resultArr.myPush(array[i])
            }


        }
        return resultArr
    }
    else {
        console.log("Данную функцию можно использовать только за типом Массив , и должен быть мешьше чем длина массива")
    }
}

let array = [1, 2, 3, 4, 5]

let object = {
	array: [1,2,3,5]
}

let indexToRemove = 4

console.log(deleteElement(array, indexToRemove)) //True
// Вывод: [1, 2, 3, 4]

console.log(deleteElement(object, indexToRemove)) //False так как вызван Обьект
