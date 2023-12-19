

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
			<td>
				<button class="btn btn-outline-info btn-sm text-uppercase copy-access-key" title="Clique para copiar a chave de acesso" name="${item.chave_de_acesso}">
					<i class="bi bi-clipboard-check-fill"></i>
				</button>
				<a class="btn btn-outline-warning btn-sm text-uppercase" title="Acesse o link para consultar a nota fiscal desejada" href="https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx" target="_blank" rel="noopener noreferrer">boleto</a>
				<a class="btn btn-outline-info btn-sm text-uppercase" title="Acesse o link para consultar a nota fiscal desejada" href="https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx" target="_blank" rel="noopener noreferrer">nota fiscal</a>
			</td>
		</tr>`
		)
	})
}

tableBuilder(data)

$(".copy-access-key").on("click", function(){
	const accessKey = $(this).attr("name")
	navigator.clipboard.writeText(accessKey)
})