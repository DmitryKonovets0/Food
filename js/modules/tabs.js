const tabs = () => {
    const btns = document.querySelectorAll('.tabheader__item'),
        tabContents = document.querySelectorAll('.tabcontent');


        function hideTabs() {
        tabContents.forEach(tabContent => {
            tabContent.style.display = 'none';
        });
        btns.forEach(btn => {
            btn.classList.remove('tabheader__item_active')
        })


    }
    hideTabs()
    tabContents[0].style.display = 'block'
    btns[0].classList.add('tabheader__item_active')
    function showTabs(index) {
        hideTabs()
        tabContents[index].style.display = 'block'
        btns[index].classList.add('tabheader__item_active')

    }

    btns.forEach((btn, index) => {
        btn.addEventListener('click', ()=> {
            showTabs(index)
        })
    })


};

export default tabs;
