// Lab4ex1
// Бейсембай Нурым

function insertStarRec( text, length = text.length, index = 0, result = ''){
	if(length === 0){  //Базовый случай
		console.log(result)
		return result
	}


	else{
		//            Условие               ? Выражения 1 :   Выражения 2
		result += index === text.length - 1 ?  text[index] : text[index] + '*'
		index++

		insertStarRec( text, length - 1, index, result)
	}
}


let text = 'LItBeoFLcSGBOFQxMHoIuDDWcqcVgkcRoAeocXO'

console.log(insertStarRec(text))





