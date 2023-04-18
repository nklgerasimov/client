import React from 'react'

const Dropdown = () => {
    const dropDownBtn = dropDownWrapper.querySelector('.nav-menu__item');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');

    document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
      // Клик по кнопке. Открыть/Закрыть select
          dropDownBtn.addEventListener('click', function (e) {
          dropDownList.classList.toggle('dropdown__list--visible');
          // this.classList.add('nav-menu__item--active');
          console.log('ok')
  
          document.addEventListener('click', function (e) {
            if (e.target !== dropDownBtn) {
              dropDownBtn.classList.remove('nav-menu__item--active');
              dropDownList.classList.remove('dropdown__list--visible');
            }
          });
  
          document.addEventListener('keydown', function (e) {
            if (e.key === 'Tab' || e.key === 'Escape') {
              dropDownBtn.classList.remove('nav-menu__item--active');
              dropDownList.classList.remove('dropdown__list--visible');
            }
          });
        });
  
          })


  return (
    <div>
    </div>
  )
}

export default Dropdown