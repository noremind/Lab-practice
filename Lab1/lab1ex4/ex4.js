


function manualAddElementsToEndArray(arr, elementsToAdd) { //isArray - это проверка на массив ли данный аргумент
  if (Array.isArray(arr) && Array.isArray(elementsToAdd)) {
    for (let i = 0; i < elementsToAdd.length; i++) {
      arr[arr.length] = elementsToAdd[i];
    }
  } else {
    console.log("Аргументы должны быть представлены в виде массивов.");
  }
}

// Пример использования функции
const firstArray = [2, 0, 0 ,4];
const secondArray = [1, 2, 3];



manualAddElementsToEndArray(firstArray, secondArray);



console.log(firstArray); // Выведет: [2, 0, 0, 4, 1, 2,3]