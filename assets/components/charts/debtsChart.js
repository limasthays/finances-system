const expiredInvoicesData = data.filter(item => item.status === "vencida")

const expiredAmountByMonth = {
	"jan": 0,
	"fev": 0, 
	"mar": 0, 
	"abr": 0, 
	"mai": 0, 
	"jun": 0, 
	"jul": 0, 
	"ago": 0, 
	"set": 0, 
	"out": 0, 
	"nov": 0, 
	"dez": 0
}

const gettingExpiredAmount = expiredInvoicesData.forEach(item => {
	const splittedMonth = item.emissao.split("/")[1]

	switch (splittedMonth) {
		case "01":
			expiredAmountByMonth.jan++
			break
		case "02":
			expiredAmountByMonth.fev++
			break
		case "03":
			expiredAmountByMonth.mar++
			break
		case "04":
			expiredAmountByMonth.abr++
			break
		case "05":
			expiredAmountByMonth.mai++
			break
		case "06":
			expiredAmountByMonth.jun++
			break
		case "07":
			expiredAmountByMonth.jul++
			break
		case "08":
			expiredAmountByMonth.ago++
			break
		case "09":
			expiredAmountByMonth.set++
			break
		case "10":
			expiredAmountByMonth.out++
			break
		case "11":
			expiredAmountByMonth.nov++
			break
		case "12":
			expiredAmountByMonth.dez++
			break
		default:
			break	

	}
})

const debtsAmount = Object.values(expiredAmountByMonth)

const ctxDebts = document.getElementById("dividas")

new Chart(ctxDebts, {
	type: 'line',
    data: {
      labels: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
      datasets: [{
        label: 'quantidade de notas fiscais vencidas',
        data: debtsAmount,
				borderColor: "rgb(242, 16, 95)",
        borderWidth: 2,
      }]
    },
    options: {
      scales: {
        y: {
					suggestedMax: 3,
          beginAtZero: true
        }
      }
    }
})