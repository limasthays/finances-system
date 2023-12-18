$("#emission-month-filter").on("change", function() {
	$("#charge-month-filter").val("")
	$("#payment-month-filter").val("")
	$("#status-filter").val("")

  const selectedMonth = $(this).val() 

	if(selectedMonth !== ""){
		$(".emission-date").each(function() {
      const splited = $(this).text().split("/")[1]

      if (splited !== selectedMonth) {
        $(this).closest(".invoice-item").hide()
      } else {
        $(this).closest(".invoice-item").show()
      }
    })
	}  
})

$("#charge-month-filter").on("change", function() {
	$("#emission-month-filter").val("")
	$("#payment-month-filter").val("")
	$("#status-filter").val("")

  const selectedMonth = $(this).val()

	if(selectedMonth !== ""){
		$(".charge-date").each(function() {
      const splited = $(this).text().split("/")[1]

      if (splited !== selectedMonth) {
        $(this).closest(".invoice-item").hide()
      } else {
        $(this).closest(".invoice-item").show()
      }
    })
	}
})

$("#payment-month-filter").on("change", function() {
	$("#emission-month-filter").val("")
	$("#charge-month-filter").val("")
	$("#status-filter").val("")

  const selectedMonth = $(this).val()

	if(selectedMonth !== ""){
		$(".payment-date").each(function() {
      const splited = $(this).text().split("/")[1]

      if (splited !== selectedMonth) {
        $(this).closest(".invoice-item").hide()
      } else {
        $(this).closest(".invoice-item").show()
      }
    })
	}
})

$("#status-filter").on("change", function() {
	$("#emission-month-filter").val("")
	$("#charge-month-filter").val("")
	$("#payment-month-filter").val("")

	const selectedStatus = $(this).val()

	if(selectedStatus !== ""){
		$(".status").each(function() {
			if($(this).text() !== selectedStatus ){
				$(this).closest(".invoice-item").hide()
			} else {
				$(this).closest(".invoice-item").show()
			}
		})
	}
})