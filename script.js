let money = +prompt('Введите сумму которую хотите перевести') 
let now = +prompt('Введите вашу валюту 1 - UAH ; 2 - USD ; 3 - EURO')
let convert = +prompt('Введите валюту в которую хотите конвертировать 1 - UAH ; 2 - USD ; 3 - EURO')
const dollar = (36.94)
const euro = (37)
if (now == 1 ){
	if (convert == 2){
		let resultUahUsd = money / dollar
		alert(resultUahUsd)
		} 
	else if (convert == 3){
		let resultUahEuro = money / euro
		alert(resultUahEuro)
		} 
	else if (convert == 1){
		alert('Вы не можете перевести гривну в гривну')
		}
	else{
		alert('Вы совершили ошибку , возможно вы ввели буквами , а не цифрами 1 - UAH ; 2 - USD ; 3 - EURO')
	}
}
else if (now == 2 ){
	if (convert == 1){
		let resultUsdUah = money * dollar
		alert(resultUsdUah)
		} 
	else if (convert == 3){
		let resultUsdEuroUm = money * dollar
		let resultUsdEuro = resultUsdEuroUm / euro
		alert(resultUsdEuro)
		} 
	else if (convert == 1){
		alert('Вы не можете перевести доллар в доллар')
		}
	else{
		alert('Вы совершили ошибку , возможно вы ввели буквами , а не цифрами 1 - UAH ; 2 - USD ; 3 - EURO')
	}
}
else if (now == 3 ){
	if (convert == 1){
		let resultEuroUah = money * euro
		alert(resultEuroUah)
		} 
	else if (convert == 2){
		let resultEuroUsdUm = money * euro
		let resultEuroUsd = resultEuroUsdUm / dollar
		alert(resultUsdEuro)
		} 
	else if (convert == 3){
		alert('Вы не можете перевести евро в евро')
		}
	else{
		alert('Вы совершили ошибку , возможно вы ввели буквами , а не цифрами 1 - UAH ; 2 - USD ; 3 - EURO')
	}
}
else{
	alert('Шота ты не то сделал , обезьяна , обнови страницу и давай по новой')
}


  
