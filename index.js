//Исчходные данные по слайдеру (const)
const sliderImages = document.querySelectorAll('.slider__img'),
sliderLine = document.querySelector('.slider__line'),
sliderDots = document.querySelectorAll('.slider__dot');

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