// Lab4ex2
// Бейсембай Нурым
// Метод Евклида

// НОД(x , y) => НОД(y, x mod y)

function euclid(x ,y){
	if(y === 0){
		console.log('y: ' , y , 'x: ' , x)
		return y
	}

	else{
		// console.log('y: ' , y , 'x: ' , x)
		euclid(y, x % y)
	}
}

console.log(euclid(9,12))