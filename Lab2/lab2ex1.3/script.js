// Lab2Ex1.3


// Бейсембай Нурым



class Node {//Класс узел
	constructor(data, next = null){
		this.data = data
		this.next = next
	}
}


class LinkedList{
	constructor(data){
		this.head = null //Началный или первый элемент по умалчанию null
		this.tail = null // Конечный или последный элемент п оумалчанию null
	}


	// this - ссылается на экземпляр
	addToTail(data){//Добавляет в конец поиска новый элемент
		//node - узел
		const node = new Node(data) //next - это указатель на след элмент но в данном случае append доваляет элмент в конец оно будет равен к null


		if(this.tail){//Если tail равен чему указывает или он true
			this.tail.next = node //Мы меняем последий элемент на null. Крч это равен последнему элменту списка
		}

		if(!this.head){//Если не определен head. Это тот случай когда список пуст
			this.head = node
		}

		this.tail = node //Самый последний элемент который мы добвили долен быть равен tail так как append добавляетть элмент в коннец списка
	}


		// after - старые данные
	// data - новые которые добавим после after
	insertAfter(after , data){//Вставим после
		const found = this.find(after)//Найдем элемент

		if(!found){//если ничего не нашли
			return
		}

		const node = new Node(data, found.next)//Создаем новый экземпяр

		found.next = node// Добавим новый элемент после найденного
	}

	addToHead(data){//Добавления в начало
		const node = new Node(data , this.head)//Так как мы добавляем элемент в началу next должен указывать на первую элемент, (это типа уталкивает первую элемент)

		this.head = node

		if(!this.tail){//Если tail не определен
			this.tail = node
		}
	}

	print() {//Выводит все своитсво data
        let current = this.head
        let result = ""
        while (current) {
            result += current.data + " "
            current = current.next
        }
        console.log(result)
    }


    reverse() {
        let prev = null
        let current = this.head
        let nextNode = null
        while (current) {
            nextNode = current.next
            current.next = prev
            prev = current
            current = nextNode
        }
        this.tail = this.head
        this.head = prev
    }
}


const list = new LinkedList()



list.addToTail('1')//Добавить в начало
list.addToTail('2')
list.addToTail('3')
list.addToTail('4')
list.addToTail('5')


list.reverse()

console.log(list)




