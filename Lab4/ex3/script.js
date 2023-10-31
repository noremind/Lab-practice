//Lab4ex3
//Бейсембай Нурым
//Фибоначи

function fibonachi(n){

	if(n < 1 ){//Базовый случай
		return 0
	}


	if(n === 1){//Базовый случай
		return 1
	}


	return fibonachi(n - 1) + fibonachi(n - 2)
}


console.log(fibonachi(3))


// 0 1 1 2 3 5 8 13 21






//Итаривный рекурсия
// function fib_iter(n , acc1 = 1 ,acc2 = 1){
// 	if(n < 1){
// 		return acc1
// 	}

// 	else{
// 		return fib_iter(n - 1, acc1 + acc2, acc1)
// 	}
// }

// console.log(fib_iter(3))

// Это тоже самое но итератвный подход