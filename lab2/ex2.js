//Лаб 2  Бейсембай Нурым

const M = +prompt("Укажите размер первого массива (M):")
const N = +prompt("Укажите размер второго массива (N):")

// Создаем метод manualPush чтобы добавить элементы в конец массива
Array.prototype.manualPush = function (...elements) {
    const manualLen = this.length

    for (let i = 0; i < elements.length; i++) {
        this[manualLen + i] = elements[i]
    }

    return this.length
}

// Создаем метод manualIndexOf чтобы найти индекс элемента из массива
Array.prototype.manualIndexOf = function (searchElement, fromIndex = 0) {
    const length = this.length
    let startIndex = fromIndex >= 0 ? fromIndex : Math.max(0, length + fromIndex)

    for (let i = startIndex; i < length; i++) {
        if (this[i] === searchElement) {
            return i
        }
    }
    return -1
}



//Создаю и заполняю значениями первый массив
const A = [];
for (let i = 0; i < M; i++) {
  A.manualPush(+prompt(`Введите элемент A[${i}]:`))
}



// Создаю и заполняю второй массив
const B = [];
for (let i = 0; i < N; i++) {
  B.manualPush(+prompt(`Введите элемент B[${i}]:`))
}



// Создаю третий массив для элементов из A, которых нет в B
const C = [];
for (let i = 0; i < M; i++) {
  const currentElement = A[i];

  // Проверяю, есть ли текущий элемент в массиве B
  if (B.manualIndexOf(currentElement) === -1 && C.manualIndexOf(currentElement) === -1) {
    C.manualPush(currentElement)
  }
}



// Вывести результат
if (C.length === 0) {
  console.log("Элементы из массива A, которых нет в массиве B: Нет элементов.");
} else {
  console.log("Элементы из массива A, которых нет в массиве B, без повторений:", C);
}
