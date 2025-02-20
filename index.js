document.addEventListener("DOMContentLoaded", () => {
    let index = 0;
    const slides = document.querySelectorAll(".carrosel img");
    const totalSlides = slides.length;

    if (totalSlides === 0) {
        console.error("Nenhuma imagem encontrada no carrossel!");
        return;
    }

    function updateCarrosel() {
        const carrosel = document.querySelector(".carrosel");
        if (carrosel) {
            carrosel.style.transform = `translateX(${-index * 100}%)`;
        }
    }

    function nextSlide() {
        index = (index + 1) % totalSlides;
        updateCarrosel();
    }

    function prevSlide() {
        index = (index - 1 + totalSlides) % totalSlides;
        updateCarrosel();
    }

    // Tornar as funções acessíveis globalmente
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;

    setInterval(nextSlide, 3000);
});
