function tableBuilder(arrayData){
	const table = $(".invoices-table")
	arrayData.forEach(item => {
		table.append(
			`<tr>
			<th scope="row">${item.id}</th>
			<td>${item.pagador}</td>
			<td>${item.valor}</td>
			<td>${item.status}</td>
			<td>${item.emissao}</td>
			<td>${item.cobranca}</td>
			<td>${item.vencimento}</td>
			<td>${item.pagamento}</td>
		</tr>`
		)
	})
}

tableBuilder(data)