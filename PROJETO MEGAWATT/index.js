let index = 0;
        const slides = document.querySelectorAll(".carousel img");
        const totalSlides = slides.length;

        function updateCarousel() {
            const carousel = document.querySelector(".carousel");
            carousel.style.transform = `translateX(${-index * 100}%)`;
        }

        function nextSlide() {
            index = (index + 1) % totalSlides;
            updateCarousel();
        }

        function prevSlide() {
            index = (index - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }

        setInterval(nextSlide, 3000); // Troca automática a cada 3 segundos