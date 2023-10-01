// Запрашиваю размеры массивов
let M = +prompt("Задайте размер для массива M:")
let N = +prompt("Задайте значения для массива N:")



// Создаю массивы A, B и C
let A = []
let B = []
let C = []


//Array.prototype - это мы говорим что даныый функция будет работать только для типов массив
Array.prototype.manualPush = function(...elements) { //...elements - принимает много аргументов
  const originalLength = this.length;

  for (let i = 0; i < elements.length; i++) {
    this[originalLength + i] = elements[i];
  }

  return this.length;
};




// Помещаю данные элементов в массив А
console.log("Задайте значения для массива A:")
for (let i = 0; i < M; i++) {
    A.manualPush(+prompt("Введите элемент A["+i+"]:")) // Пушу в массив A
}




// Записываю значения во второй массив B
console.log("Задайте значения для массива B:")
for (let i = 0; i < N; i++) {
    B.manualPush(+prompt("Введите элемент B["+i+"]:")) // Пушу в массив B
}




// Отображаю на консоль содержимое массивов A и B.
console.log("Массив A:" + A)
console.log("Массив B:" + B)



// Сравниваю элементы массивов A и B и включаю их в массив C при совпадении
for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
        if (A[i] === B[j]) { // Проверяем строго по типам и по сходствам
            C.manualPush(A[i]) // Пушу в массив С похожие элементы
        }
    }
}





// Показываем значения массива C
console.log("Содержимое массива C " + C)



// console.log - это альтарнатива cout из C++
// +prompt - это аналог cin. Но здесь я поставил вперед prompt плюс что бы принимать число , а не ввиде строки
