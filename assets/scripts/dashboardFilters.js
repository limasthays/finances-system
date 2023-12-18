const dataWithParsedMoneyValues = data.map(item => {
	return {...item, valor: parseFloat(item.valor)}
})

const notChargedInvoices = dataWithParsedMoneyValues.filter(item => item.status === "emitida")

const expiredInvoices = dataWithParsedMoneyValues.filter(item => item.status === "vencida")

const paidInvoices = dataWithParsedMoneyValues.filter(item => item.status === "paga")

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



const initialTotalNumber = dataWithParsedMoneyValues.map(item => {
	return item.valor
}).reduce((acc, curr) => {
	return adjustingNumber(acc + curr)
})
$("#total-invoices-value").text(`R$${initialTotalNumber}`)

const initialNotChargedInvoicesNumber = notChargedInvoices.map(item => {
	return item.valor
}).reduce((acc, curr) => {
	return adjustingNumber(acc + curr)
})
$("#not-charged-invoices").text(`R$${initialNotChargedInvoicesNumber}`)

const initialExpiredInvoicesNumber = expiredInvoices.map(item => {
	return item.valor
}).reduce((acc, curr) => {
	return adjustingNumber(acc + curr)
})
$("#expired-invoices").text(`R$${initialExpiredInvoicesNumber}`)

const initialPaidInvoicesNumber = paidInvoices.map(item => {
	return item.valor
}).reduce((acc, curr) => {
	return adjustingNumber(acc + curr)
})
$("#paid-invoices").text(`R$${initialPaidInvoicesNumber}`)


$("#total-invoices-selector").on("change", function(){
	const periodText = $("#current-period")
	const selectorValue = $(this).val()
	
	if(selectorValue === "ano"){
		periodText.text("2023")
		$("#total-invoices-value").text(`R$${initialTotalNumber}`)
		$("#not-charged-invoices").text(`R$${initialNotChargedInvoicesNumber}`)
		$("#expired-invoices").text(`R$${initialExpiredInvoicesNumber}`)
		$("#paid-invoices").text(`R$${initialPaidInvoicesNumber}`)
	}

	if(selectorValue === "trimestre"){
		periodText.text("out. 23 - dez. 23")
		const quarterText = quarterData.map(item => item.valor).reduce((acc, curr) => {
			return adjustingNumber(acc + curr)
		})
		$("#total-invoices-value").text(`R$${quarterText}`)

		const quarterNotChargedText = quarterData.filter(item => item.status === "emitida")
		.map(item => item.valor)
		.reduce((acc, curr) => {
			return adjustingNumber(acc + curr)
		})
		$("#not-charged-invoices").text(`R$${quarterNotChargedText}`)

		const quarterExpiredText = quarterData.filter(item => item.status === "vencida")
		.map(item => item.valor)
		.reduce((acc, curr) => {
			return adjustingNumber(acc + curr)
		})
		$("#expired-invoices").text(`R$${quarterExpiredText}`)
		
		const quarterPaidText = quarterData.filter(item => item.status === "paga")
		.map(item => item.valor)
		.reduce((acc, curr) => {
			return adjustingNumber(acc + curr)
		})
		$("#paid-invoices").text(`R$${quarterPaidText}`)

	}

	if(selectorValue === "mes"){
		periodText.text("dezembro 2023")
		const thisMonthText = thisMonth.map(item => item.valor).reduce((acc, curr) => {
			return adjustingNumber(acc + curr)
		})
		$("#total-invoices-value").text(`R$${thisMonthText}`)

		const notChargedThisMonth = thisMonth.filter(item => item.status === "emitida")
		.map(item => item.valor)
		.reduce((acc, curr) => {
			return adjustingNumber(acc + curr)
		})
		$("#not-charged-invoices").text(`R$${notChargedThisMonth}`)
		
		const expiredThisMonth = thisMonth.filter(item => item.status === "vencida")
		.map(item => item.valor)
		.reduce((acc, curr) => {
			return adjustingNumber(acc + curr)
		})
		$("#expired-invoices").text(`R$${expiredThisMonth}`)

		const paidThisMonth = thisMonth.filter(item => item.status === "paga")
		.map(item => item.valor)
		.reduce((acc, curr) => {
			return adjustingNumber(acc + curr)
		})
		$("#paid-invoices").text(`R$${paidThisMonth}`)

	}

})

