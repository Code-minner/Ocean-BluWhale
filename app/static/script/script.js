


function toggleNavBar() {
    var bar = document.querySelector('.bar');
    var navBar = document.getElementById("navbar")


    bar.classList.toggle('roller');
    bar.classList.toggle('active');
    navBar.classList.toggle("navigation")
}



document.addEventListener('DOMContentLoaded', function () {
    // Function to animate the counter
    function animateCounter(counterElement, targetCount) {
        let currentCount = 0;
        const animationDuration = 3000; // Duration in milliseconds
        const countIncrement = targetCount / (animationDuration / 16); // 60 frames per second

        function updateCounter() {
            currentCount += countIncrement;
            counterElement.textContent = Math.floor(currentCount);

            if (currentCount < targetCount) {
                requestAnimationFrame(updateCounter);
            } else {
                counterElement.textContent = targetCount;
            }
        }

        updateCounter();
    }

    // Callback function for the Intersection Observer
    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    const targetCount = counter.getAttribute('data-count');
                    animateCounter(counter, targetCount);
                });

                // Unobserve the target once animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }

    // Set up the Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0.5, // Trigger when 50% of the target is visible
    });

    // Target the container to observe
    const targetContainer = document.getElementById('targetContainer');
    observer.observe(targetContainer);
});


const backgroundContainer = document.querySelector('.background-elements');

if (backgroundContainer) {
    for (let i = 0; i < 10; i++) {
        const circle = document.createElement('div');
        circle.className = 'floating-circle';
        circle.style.width = Math.random() * 200 + 50 + 'px';
        circle.style.height = circle.style.width;
        circle.style.left = Math.random() * 100 + '%';
        circle.style.top = Math.random() * 100 + '%';
        circle.style.animationDelay = Math.random() * 5 + 's';
        backgroundContainer.appendChild(circle);
    }
}



document.addEventListener('DOMContentLoaded', function () {
    const swiper_bg = new Swiper('.swiper-container_bg', {
        loop: true, // Enable looping
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000, // Auto-slide every 5 seconds
        },
        slidesPerView: 1, // Display one slide at a time
        spaceBetween: 10, // Space between

    });
});






document.addEventListener('DOMContentLoaded', function () {
    const cardSwiper1 = new Swiper('.card_swiper', {
        autoplay: {
            delay: 1500,

        },
        loop: true,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        breakpoints: {
            300: {
                slidesPerView: 2,
            },
            880: {
                slidesPerView: 3,
            },
            980: {
                slidesPerView: 4,
            },
            1000: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 6,
            },

        },
    });
});

console.log('what the fucking ness')

document.addEventListener('DOMContentLoaded', function () {
    const cardSwiper2 = new Swiper('.card_swipers', {
        autoplay: {
            delay: 4000,
        },
        loop: true,
        spaceBetween: 13,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        breakpoints: {

            300: {
                slidesPerView: 2,
            },

            900: {
                slidesPerView: 3,
            },

            1100: {
                slidesPerView: 4,
            },

            1200: {
                slidesPerView: 4,
            },

        },
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const swiper_tes = new Swiper('.swiper_content_tes', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 0, // No delay for continuous movement
            disableOnInteraction: false,
        },
        speed: 5000, // Slower speed for smoother movement
        breakpoints: {
            // Responsive breakpoints
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            968: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20
            }
        }
    });

});

// Add manual pause/resume on hover
const swiperContainer = document.querySelector('.swiper_container_testimonial');

swiperContainer.addEventListener('mouseenter', () => {
    swiper.autoplay.stop();
});

swiperContainer.addEventListener('mouseleave', () => {
    swiper.autoplay.start();
});

































