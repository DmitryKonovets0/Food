const slider = (prev, next, slide, current, total) => {

    let slideIndex = 1
    const slides = document.querySelectorAll(slide),
          prevBtn = document.querySelector(prev),
          nextBtn = document.querySelector(next),
          currentNum = document.querySelector(current),
          totalNum = document.querySelector(total);

    function showSlides(n) {
        if(n > slides.length) {
            slideIndex = 1
        }
        if(n < 1 ) {
            slideIndex = slides.length
        }
        slides.forEach(slide => {
            slide.style.display = 'none'
        })
        slides[slideIndex - 1].style.display = 'block'
        setNum()
    }
    showSlides(slideIndex)

    function setNum() {
        currentNum.innerHTML = `0` + slideIndex
        totalNum.textContent = `0` + slides.length
    }
    setNum()
    function changeSlide(n) {
        showSlides(slideIndex += n)
    }
    prevBtn.addEventListener('click', () => {
       changeSlide(-1)
        console.log(slideIndex)

    })
    nextBtn.addEventListener('click', () => {
        changeSlide(1)
        console.log(slideIndex)

    })
}
export default slider