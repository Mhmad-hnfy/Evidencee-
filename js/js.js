let icon = document.getElementsByClassName("icon")[0];
let ull = document.getElementById("ull");
var isVisible = false;

icon.addEventListener("click", function () {
    // Check if the window width is less than 600 pixels
    if (window.innerWidth <= 1029) {
        if (isVisible) {
            ull.style.display = "none";
            isVisible = false;
        }else if (window.innerWidth > 1029){
            ull.style.display = "flex";
        }
         else {
            ull.style.display = "block";
            isVisible = true;
        }
    }
});


const sliders = document.querySelectorAll('.slider');

sliders.forEach((slider, index) => {
    let currentSlide = 0;
    const slides = slider.querySelectorAll('.slides img');
    const totalSlides = slides.length;

    function changeSlide(direction) {
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        slides.forEach((slide, idx) => {
            slide.style.transform = `translateX(${currentSlide * 100}%)`;
        });
    }

    // تنفيذ عرض الشريحة الأولى عند تحميل الصفحة
    changeSlide(0);

    // إضافة التحكم بالسلايدر بواسطة الأزرار
    slider.querySelector('.prev').addEventListener('click', () => {
        changeSlide(-1);
    });

    slider.querySelector('.next').addEventListener('click', () => {
        changeSlide(1);
    });

    // تحديث الصور كل 3 ثوانٍ
    
});


