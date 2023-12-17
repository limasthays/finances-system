$(".menu").load("assets/components/menu/menu.html")
// $(".header").load("assets/components/header/header.html")

const pageTitle = $(".header").attr("name")

$(".header").html(
	`<header class="d-flex align-items-center justify-content-between py-1 bg-white shadow-sm rounded">
	<div class="d-flex align-items-center">
		<button class="navbar-toggler p-3" data-bs-toggle="collapse" data-bs-target="#menu-sidebar">
		<i class="bi bi-list"></i>                         
	</button>
	<h1 class="fs-3 m-0 fw-bold">${pageTitle}</h1>
	</div>
	
	<div class="d-flex align-items-center p-3">
		<i class="bi bi-person-fill fs-5"></i>
	</div>
</header>`
)
