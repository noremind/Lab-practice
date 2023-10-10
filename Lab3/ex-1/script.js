// LAb3Ex1
// Бейсембай Нурым

class FixedCapacityStack {
    constructor(maxLength) {
        this.stack = new Array(maxLength)
        this.head = 0
        this.maxLength = maxLength
    }



    isEmpty() {
        if(this.head === 0){
            return true
        } else{
            return false
        }
    }




    //Проверка на запольненность
    isFull() {
        if(this.head === this.maxLength){
            return true
        } else{
            return false
        }
    }






    // Добавления элемента с конца
    push(item) {
        if (this.isFull()) {
            console.log("Стек переполнен")
            return
        }
        this.stack[this.head] = item //Указывает на пустое место и в то пустое место добавим новую элемент
        this.head++
    }





    pop() {
        if (this.isEmpty()) {
            console.log("Стек пустой")
            return
        }

        if(this.head > 0){
            this.head-- // С помощью постфикснной записю удаляем элемент с конца
            return this.stack[this.head]
        }
    }




    //Вывод элментов один за другим
    top() {
        if (this.isEmpty()) {
            console.log("Стек пуст")
            return
        }
        // console.log(this.stack[this.head])
        return this.stack[this.head - 1]//this.head = undefined , а с -1 это уже указывает на последную элемент массива так как массив начинается с 0
    }


    //Вывод элментов один за другим
    toString() {
        let result = ""
        for (let i = 0; i < this.head; i++) {
            result += this.stack[i] + " "
        }
        return result
    }

}

// Пример использования:
const stack = new FixedCapacityStack(3)// 3 это максимальное количество элементов

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)



console.log(stack)


console.log("Стек:", stack.toString())
console.log("Вершина стека:", stack.pop())


console.log("Стек после извлечения элемента:", stack.toString())