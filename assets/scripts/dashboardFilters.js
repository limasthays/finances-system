const dataWithParsedMoneyValues = data.map(item => {
	return {...item, valor: parseFloat(item.valor)}
})

function adjustingNumber(number){
	return Math.round(number * 100) / 100
}

const quarterData = dataWithParsedMoneyValues.filter(item => {
	const months = ["10", "11", "12"]
	const splitedMonth = item.emissao.split("/")[1]

	return months.includes(splitedMonth)
})

const thisMonth = dataWithParsedMoneyValues.filter(item => {
	const DECEMBER = "12"
	const splitedMonth = item.emissao.split("/")[1]

	return splitedMonth === DECEMBER
})

const periodText = $("#current-period")

const initialTotalNumber = dataWithParsedMoneyValues.map(item => {
	return item.valor
}).reduce((acc, curr) => {
	return adjustingNumber(acc + curr)
})
$(".total-value").text(`R$${initialTotalNumber}`)

const initialNotChargedInvoicesValue = dataWithParsedMoneyValues.filter(item => item.status === "emitida")
console.log(initialNotChargedInvoicesValue)

$("#total-invoices-selector").on("change", function(){
	const selectorValue = $(this).val()
	
	if(selectorValue === "ano"){
		periodText.text("2023")
		$(".total-value").text(`R$${initialTotalNumber}`)	
	}

	if(selectorValue === "trimestre"){
		periodText.text("out. 23 - dez. 23")
		const quarterText = quarterData.map(item => item.valor).reduce((acc, curr) => {
			return adjustingNumber(acc + curr)
		})
		$(".total-value").text(`R$${quarterText}`)	
	}

	if(selectorValue === "mes"){
		periodText.text("dezembro 2023")
		const thisMonthText = thisMonth.map(item => item.valor).reduce((acc, curr) => {
			return adjustingNumber(acc + curr)
		})
		$(".total-value").text(`R$${thisMonthText}`)	
	}

})

