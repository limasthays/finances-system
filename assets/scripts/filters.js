$("#emission-month-filter").on("change", function() {
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



