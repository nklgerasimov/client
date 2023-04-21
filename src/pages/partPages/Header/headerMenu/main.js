	document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
		const dropDownBtn = dropDownWrapper.querySelector('.nav-menu__item');
		const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
		const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
		
		dropDownBtn.addEventListener('click', function (e) {
			dropDownList.classList.toggle('dropdown__list--visible');
			this.classList.add('nav-menu__item--active');
			console.log('ok')
		});
	});

