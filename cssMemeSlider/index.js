//Исчходные данные по слайдеру (const)
const sliderImages = document.querySelectorAll('.slider__img'),
sliderLine = document.querySelector('.slider__line'),
sliderDots = document.querySelectorAll('.slider__dot'),
sliderText = document.querySelectorAll('.slider__text');

//Переменные
let sliderCount = 0,
sliderWidth;

//Адаптивность слайдера
window.addEventListener('resize', showSlide);

// Функции ================
//Задает нужную ширину картинки и sliderLine
function showSlide() {
    sliderWidth = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
    sliderImages.forEach(item => item.style.width = sliderWidth + 'px');

    rollSlider();
}
showSlide();

//Задает шаг перемещения сладов
function rollSlider() {
    sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

//Указывает как слайд по счету активен
function thisSlide(index) {
    sliderDots.forEach(item => item.classList.remove('active-dot'));
    sliderDots[index].classList.add('active-dot');
}

//Вешает клик на dot
sliderDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sliderCount = index;
        rollSlider();
        thisSlide(sliderCount);
    })
})