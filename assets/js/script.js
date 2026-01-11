const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text'); 

const updateProgressBar = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
    const scrolledRounded = Math.round(scrolled);
    progressBar.style.width = `${scrolled}%`;
    progressText.innerText = `${scrolledRounded}%`;
    progressText.style.left = `${scrolled}%`;
    
    if (scrolled > 1) {
        progressText.classList.remove('opacity-0');
    } else {
        progressText.classList.add('opacity-0');
    }
}
window.addEventListener('scroll', updateProgressBar);