function tableBuilder(arrayData){
	const table = $(".invoices-table")
	arrayData.forEach(item => {
		table.append(
			`<tr class="invoice-item">
			<th scope="row" title="id da nota fiscal">${item.id}</th>
			<td class="text-capitalize payer" title="pagador">${item.pagador}</td>
			<td title="valor total">R$ ${item.valor}</td>
			<td class="status" title="status da nota fiscal">${item.status}</td>
			<td class="emission-date" title="data de emissão">${item.emissao}</td>
			<td class="charge-date" title="data de cobrança">${item.cobranca}</td>
			<td title="data de vencimento">${item.vencimento}</td>
			<td class="payment-date" title="data de pagamento">${item.pagamento}</td>
		</tr>`
		)
	})
}

tableBuilder(data)