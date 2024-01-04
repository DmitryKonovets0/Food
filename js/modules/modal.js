const modal = () => {
    let btnPressed = false;
    const modalTriggers = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          closeBtn = document.querySelector('[data-close]');

    // const modalByTimeout = setTimeout(() => {
    //     modal.style.display = 'block'
    // }, 2000)
    const openModal = () => {
        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                modal.style.display = 'block'
                btnPressed = true
                clearTimeout(modalByTimeout)
            })
        })
    }
    const closeModal = () => {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none'
        })
        modal.addEventListener('click', e => {
            if(e.target && e.target == modal )
                modal.style.display = 'none'
        })
    }
    const modalByScroll = () => {
        window.addEventListener('scroll', () => {
            if( !btnPressed && window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
                modal.style.display = 'block'
            }
        })

    }
    modalByScroll()
    openModal()
    closeModal()
}
export default modal