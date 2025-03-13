document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    });

    elements.forEach(el => observer.observe(el));
});

function togglePlay(videoId) {
    let video = document.getElementById(videoId);
    let button = video.nextElementSibling;

    if (video.paused) {
        video.play();
        video.muted = false;
        button.textContent = "ПАУЗА";
    } else {
        video.pause();
        button.textContent = "ИГРАТЬ";
    }

    video.onended = function() {
        button.textContent = "ИГРАТЬ";
    };
}
