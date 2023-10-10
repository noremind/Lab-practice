// Lab3Ex2

// Бейсембай Нурым

class ListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor() {
    this.head = null
    this.tail = null
    this.numbers = 0
  }

  // Проверка на пустоту стека
  isEmpty() {
    if(this.numbers === 0){
      return true
    } else{
      return false
    }
  }

  // Вернуть размер стека
  size() {
    if(this.numbers){
      return this.numbers
    }
  }

  // Добавить элемент в стек
  push(item) {
    const node = new ListNode(item);

    if (this.isEmpty()) {
      // Если стек был пуст, обновляем как head, так и tail
      this.head = node;
      this.tail = node;
    } else {
      // Иначе добавляем новый элемент в конец списка
      this.tail.next = node;
      this.tail = node;
    }

    this.numbers++;
  }





  // Удалить вершину стека
  pop() {
    if (this.isEmpty()) {
      console.log("Стек пуст")
      return
    }
    const item = this.head.data //Что бы вернуть удаленную элемент

    this.head = this.head.next //Удаления элмента на одну позицию назад


    if (this.isEmpty()) {
      this.tail = null
    }

    this.numbers-- //Постфиксная запись - сначала вернеть значения потом увеличаться

    return item
  }



  top() {
    if (this.isEmpty()) {
      console.log("Стек пуст")
      return
    }
    return this.head.data //Последний элемент
  }



  // вывод на экран
  toString() {
    let current = this.head
    const elements = []


    while (current) {//Цикл работает до сих пор пока не дойдет до null
      elements.push(current.data)
      current = current.next //
    }

    return elements
  }
}

// Пример использования
const stack = new Stack()


stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack)


// stack.pop()

console.log("Стек:", stack.toString())
console.log("Размер стека:", stack.size())
console.log("Вершина стека:", stack.top())

stack.pop()
console.log("Стек после удаления вершины:", stack.toString())