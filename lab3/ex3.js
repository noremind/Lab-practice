//Лаб 3  Бейсембай Нурым

let M = +prompt("Укажите размер массива A:")
let N = +prompt("Укажите размер массива B:")


// Создаю собственную функцию(метод) как push в JS
// Пушить элементв конец массива
Array.prototype.manualPush = function (...elements) {
    const manualLen = this.length

    for (let i = 0; i < elements.length; i++) {
        this[manualLen + i] = elements[i]
    }

    return this.length
}



// Создаю собственную функцию(метод) как include в JS
// manualIncludes - проверяет есть ли выбранный элемент в массиве
Array.prototype.manualIncludes = function(searchElement, fromIndex = 0) {
  const length = this.length;
  let startIndex = fromIndex >= 0 ? fromIndex : Math.max(0, length + fromIndex);

  for (let i = startIndex; i < length; i++) {
    if (this[i] === searchElement) {
      return true;
    }
  }

  return false;
};







// Создаю пустой третий массив
let C = []

// Создаю массивы А и В и заполняю их случайными числами
let A = []
for (let i = 0; i < M; i++) {
    A.manualPush(+prompt(`Введите элемент A[${i}]:))`)
}

let B = []
for (let i = 0; i < N; i++) {
    B.manualPush(+prompt(`Введите элемент B[${i}]:)`)
}

// Вывожу массивы А и В
console.log("Массив А:", A)
console.log("Массив B:", B)



// Обхожу массив А
for (let i = 0; i < M; i++) {
    let isTotal = false

    // Выполняю проверку наличия текущего элемента массива A в массиве B.
    for (let j = 0; j < N; j++) {
        if (A[i] === B[j]) {
            isTotal = true
            break
        }
    }

    // При условии, что текущий элемент не совпадает, мы добавляем его в массив C, если он там отсутствует.
    if (!isTotal && !C.manualIncludes(A[i])) {
        C.manualPush(A[i])
    }
}

// Обхожу массив В
for (let i = 0; i < N; i++) {
    let isTotal = false

    // Выполняю проверку наличия текущего элемента массива B в массиве A.
    for (let j = 0; j < M; j++) {
        if (B[i] === A[j]) {
            isTotal = true
            break
        }
    }

    // При условии, что текущий элемент не совпадает, мы добавляем его в массив C, если он там отсутствует.
    if (!isCommon && !C.manualIncludes(B[i])) {
        C.manualPush(B[i])
    }
}

// Вывожу массив С
console.log("Итог массив С:", C)
