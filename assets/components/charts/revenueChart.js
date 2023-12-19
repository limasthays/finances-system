const paidInvoicesData = data.filter(item => item.status === "paga")

const paidAmountByMonth = {
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

const gettingPaidAmount = paidInvoicesData.forEach(item => {
	const splittedMonth = item.emissao.split("/")[1]

	switch (splittedMonth) {
		case "01":
			paidAmountByMonth.jan++
			break
		case "02":
			paidAmountByMonth.fev++
			break
		case "03":
			paidAmountByMonth.mar++
			break
		case "04":
			paidAmountByMonth.abr++
			break
		case "05":
			paidAmountByMonth.mai++
			break
		case "06":
			paidAmountByMonth.jun++
			break
		case "07":
			paidAmountByMonth.jul++
			break
		case "08":
			paidAmountByMonth.ago++
			break
		case "09":
			paidAmountByMonth.set++
			break
		case "10":
			paidAmountByMonth.out++
			break
		case "11":
			paidAmountByMonth.nov++
			break
		case "12":
			paidAmountByMonth.dez++
			break
		default:
			break	

	}
})

const revenueAmount = Object.values(paidAmountByMonth)

const ctxRevenue = document.getElementById("receita")

new Chart(ctxRevenue, {
	type: 'line',
    data: {
      labels: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
      datasets: [{
        label: 'quantidade de notas fiscais pagas',
        data: revenueAmount,
				borderColor: "rgb(102, 16, 242)",
        borderWidth: 2,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
					suggestedMax: 6,
        }
      }
    }
})