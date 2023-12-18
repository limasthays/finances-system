$("#emission-month-filter").on("change", function() {
	$("#charge-month-filter").val("")

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



