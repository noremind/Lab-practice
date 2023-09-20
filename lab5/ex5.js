//Лаб 5  Бейсембай Нурым

Array.prototype.manualPush = function (...elements) { //Пушить элементв конец массива
    const originalLength = this.length

    for (let i = 0; i < elements.length; i++) {
        this[originalLength + i] = elements[i]
    }

    return this.length
}

//Функция для внесения набора элементов в массив, стартуя с определенного индекса
function elementsInsert(arr, startIndex, elementsToInsert) {
  if (Array.isArray(arr) && Array.isArray(elementsToInsert) && startIndex >= 0 && startIndex <= arr.length) {
    // Создаем новый массив, который будет содержать результат вставки
    const outputArr = [];




    // Копируем элементы из исходного массива до указанного индекса
    for (let i = 0; i < startIndex; i++) {
      outputArr.manualPush(arr[i])
    }




    // Вставляем элементы из elementsToInsert
    for (let i = 0; i < elementsToInsert.length; i++) {
      outputArr.manualPush(elementsToInsert[i])
    }


    // Копируем остальные элементы из исходного массива
    for (let i = startIndex; i < arr.length; i++) {
      outputArr.manualPush(arr[i])
    }




    // Перезаписываем исходный массив результатом вставки.
    arr.length = 0;
    for (let i = 0; i < outputArr.length; i++) {
      arr.manualPush(outputArr[i])
    }
  } else {
    console.log("Ошибка: Некорректные аргументы.");
  }
}



// В примере
const firstArray = [2, 0, 0, 4];
const startIndex = 2; // Начать вставку с индекса 2
const elementsToInsert = [1, 2, 3];

elementsInsert(firstArray, startIndex, elementsToInsert);

console.log(firstArray); // Выведет: [2, 0, 1, 2, 3, 0, 4]
