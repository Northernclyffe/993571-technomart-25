		var link = document.querySelector(".contacts-button");
		var popup = document.querySelector(".popup-form");
		var close = popup.querySelector(".close-form");

		link.addEventListener("click", function (log) {
			log.preventDefault();
			popup.classList.add("form-show");
		});

		close.addEventListener("click", function (log) {
			log.preventDefault();
			popup.classList.remove("form-show");
		});

		var linkmap = document.querySelector(".map-img");
		var popupmap = document.querySelector(".popup-map");
		var closemap = popupmap.querySelector(".close-form");

		linkmap.addEventListener("click", function (log) {
			log.preventDefault();
			popupmap.classList.add("form-show");
		});

		closemap.addEventListener("click", function (log) {
			log.preventDefault();
			popupmap.classList.remove("form-show");
		});

		var searchclass = document.querySelector(".search");
		var search = document.querySelector("[type=search]");
		var searchbut = document.querySelector(".search-but");
		var searchhov = document.querySelector(".search-hov");

		search.onfocus = function () {
			searchclass.classList.add("search-focus");
			search.classList.add("search-focus-field");
			searchbut.classList.add("search-but-foc");
			searchbut.classList.remove("search-but");
			searchhov.classList.remove("search-hov");
		};

		search.onblur = function () {
			searchclass.classList.remove("search-focus");
			search.classList.remove("search-focus-field");
			searchbut.classList.remove("search-but-foc");
			searchbut.classList.add("search-but");
			searchhov.classList.add("search-hov");
		};

		var popupcart = document.querySelector(".popup-cart");
		var closecart = popupcart.querySelector(".close-form");
		var elements = document.querySelectorAll(".cart");
		var headercart = document.querySelector(".header-cart");
		var y = document.querySelector(".null");

		  for (var i = 0; i < elements.length; i++) {
		    elements[i].addEventListener("click", function (log) {
			log.preventDefault();
			popupcart.classList.add("form-show");
			headercart.classList.add("cart-active");
			y.innerHTML = +y.innerHTML+1;
		});
			};

		closecart.addEventListener("click", function (log) {
			log.preventDefault();
			popupcart.classList.remove("form-show");
		});