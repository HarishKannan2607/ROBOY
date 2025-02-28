window.addEventListener('scroll', function() {
    const textContainer = document.getElementById('textContainer');
    const scrollPosition = window.scrollY;

    // Check if the scroll position is greater than a certain value
    if (scrollPosition > 100) { // Adjust this value as needed
        textContainer.classList.add('visible');
    } else {
        textContainer.classList.remove('visible');
    }
});

let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlides() {
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0; // Reset to the first slide
    }
    slides.style.transform = `translateX(-${slideIndex * 100}%)`; // Move slides
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides();

let currentEvent = 0;
const events = document.querySelectorAll('.event');

function showEvent(index) {
    events.forEach((event, i) => {
        event.classList.remove('active', 'prev', 'next');
        if (i === index) {
            event.classList.add('active');
        } else if (i === (index - 1 + events.length) % events.length) {
            event.classList.add('prev'); 
        } else if (i === (index + 1) % events.length) {
            event.classList.add('next'); 
        }
    });
}

function changeEvent(direction) {
    currentEvent += direction;
    if (currentEvent < 0) {
        currentEvent = events.length - 1;
    } else if (currentEvent >= events.length) {
        currentEvent = 0;
    }
    showEvent(currentEvent);
}


setInterval(() => {
    changeEvent(1);
}, 3000);

showEvent(currentEvent);

document.addEventListener('scroll', function() {
    const slides = document.querySelectorAll('.listy');
    const triggerBottom = window.innerHeight / 5 * 4; // Trigger when 80% of the viewport is scrolled

    slides.forEach(slide => {
        const slideTop = slide.getBoundingClientRect().top;

        if (slideTop < triggerBottom) {
            slide.classList.add('visible');
        } else {
            slide.classList.remove('visible');
        }
    });
});

document.addEventListener('scroll', function() {
    const slides = document.querySelectorAll('.listy2');
    const triggerBottom = window.innerHeight / 5 * 4; // Trigger when 80% of the viewport is scrolled

    slides.forEach(slide => {
        const slideTop = slide.getBoundingClientRect().top;

        if (slideTop < triggerBottom) {
            slide.classList.add('visible');
        } else {
            slide.classList.remove('visible');
        }
    });
});

document.addEventListener('scroll', function() {
    const slides = document.querySelectorAll('.text-container');
    const triggerBottom = window.innerHeight / 5 * 4; // Trigger when 80% of the viewport is scrolled

    slides.forEach(slide => {
        const slideTop = slide.getBoundingClientRect().top;

        if (slideTop < triggerBottom) {
            slide.classList.add('visible');
        } else {
            slide.classList.remove('visible');
        }
    });
});

document.addEventListener('scroll', function() {
    const slides = document.querySelectorAll('.chan');
    const triggerBottom = window.innerHeight / 5 * 4; // Trigger when 80% of the viewport is scrolled

    slides.forEach(slide => {
        const slideTop = slide.getBoundingClientRect().top;

        if (slideTop < triggerBottom) {
            slide.classList.add('visible');
        } else {
            slide.classList.remove('visible');
        }
    });
});
document.addEventListener('scroll', function() {
    const slides = document.querySelectorAll('.pat');
    const triggerBottom = window.innerHeight / 5 * 4; // Trigger when 80% of the viewport is scrolled

    slides.forEach(slide => {
        const slideTop = slide.getBoundingClientRect().top;

        if (slideTop < triggerBottom) {
            slide.classList.add('visible');
        } else {
            slide.classList.remove('visible');
        }
    });
});
document.addEventListener('scroll', function() {
    const slides = document.querySelectorAll('.conn');
    const triggerBottom = window.innerHeight / 5 * 4; // Trigger when 80% of the viewport is scrolled

    slides.forEach(slide => {
        const slideTop = slide.getBoundingClientRect().top;

        if (slideTop < triggerBottom) {
            slide.classList.add('visible');
        } else {
            slide.classList.remove('visible');
        }
    });
});
document.addEventListener('scroll', function() {
    const slides = document.querySelectorAll('.fac');
    const triggerBottom = window.innerHeight / 5 * 4; // Trigger when 80% of the viewport is scrolled

    slides.forEach(slide => {
        const slideTop = slide.getBoundingClientRect().top;

        if (slideTop < triggerBottom) {
            slide.classList.add('visible');
        } else {
            slide.classList.remove('visible');
        }
    });
});
document.addEventListener('scroll', function() {
    const slides = document.querySelectorAll('.std');
    const triggerBottom = window.innerHeight / 5 * 4; // Trigger when 80% of the viewport is scrolled

    slides.forEach(slide => {
        const slideTop = slide.getBoundingClientRect().top;

        if (slideTop < triggerBottom) {
            slide.classList.add('visible');
        } else {
            slide.classList.remove('visible');
        }
    });
});


