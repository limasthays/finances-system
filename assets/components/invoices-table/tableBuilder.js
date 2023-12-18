function tableBuilder(arrayData){
	const table = $(".invoices-table")
	arrayData.forEach(item => {
		table.append(
			`<tr class="invoice-item">
			<th scope="row">${item.id}</th>
			<td class="text-capitalize">${item.pagador}</td>
			<td>${item.valor}</td>
			<td>${item.status}</td>
			<td class="emission-date">${item.emissao}</td>
			<td class="charge-date">${item.cobranca}</td>
			<td>${item.vencimento}</td>
			<td class="payment-date">${item.pagamento}</td>
		</tr>`
		)
	})
}

tableBuilder(data)