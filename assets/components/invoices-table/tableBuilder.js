

function tableBuilder(arrayData){
	const table = $(".invoices-table")
	arrayData.forEach(item => {
		table.append(
			`<tr class="invoice-item">
			<th scope="row" title="Id da nota fiscal">${item.id}</th>
			<td class="text-capitalize payer" title="Pagador">${item.pagador}</td>
			<td title="Valor da nota fiscal">R$ ${item.valor}</td>
			<td class="status" title="Status da nota fiscal">${item.status}</td>
			<td class="emission-date" title="Data de emissão">${item.emissao}</td>
			<td class="charge-date" title="Data de cobrança">${item.cobranca}</td>
			<td title="Data de vencimento">${item.vencimento}</td>
			<td class="payment-date" title="Data de pagamento">${item.pagamento}</td>
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
	alert('Chave de acesso copiada! Clique no botão "boleto" ou "nota fiscal" para acessar a nota fiscal.')
})