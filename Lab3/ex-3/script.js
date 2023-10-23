// Lab3ex3
// Бейсембай Нурым


let k = []
let a = prompt('Введите скобки') //Типа cin и все написанное string

for (let i = 0; i < a.length; i++) { //Записываю строку в массив
    k.push(a[i])
}
console.log(k)


//Один тип скобок без стека с counter


let stack = []


function bracketMethod(k) {
    //Если скобки не четнsе тогда это False так как остается 1 скобка без пар
    if (k.length % 2 == 0) {

        for (let i = 0; i < k.length; i++) {
            //Добавляю открывающие скобки в стэк
            if (k[i] === '(' || k[i] === '[' || k[i] === '{') {
                stack.push(k[i])// (( )
            }


            //Проверка скобок что такое скобки есть и проверяю stack.length что оно больше 0
            else if (k[i] === ')' || k[i] === '}' || k[i] === ']') {

                if (stack.length === 0) { //Так как в стеке первый не можеть быть ) то сразу return делаем. Так как е него уже нету пары
                    console.log('No')
                    return
                }

                let topBracket = stack[stack.length - 1] //Последний элемент stack или же вершмна
                                            // ()
                if ((topBracket === '(' && k[i] === ')') || (topBracket === '{' && k[i] === '}') || (topBracket === '[' && k[i] === ']')) { //Скобки обязательные без них false и true поплывет

                    stack.pop() //Если совпадает то удаляю элемент из стека
                } else {
                    console.log('No')
                    return
                }
            }
        }
        //Если в stack ничего не осталось тогда все верно
        if (stack.length === 0) {
            console.log('Yes')
        } else {
            console.log('No', stack)
        }
    } else {
        console.log('Кол-во скобок должен быь ЧЕТНЫМ')
    }

}

bracketMethod(k);