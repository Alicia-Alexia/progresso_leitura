const progressBar = document.getElementById('progress-bar');
function updateProgressBar() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    const scrolledPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    progressBar.style.width = scrolledPercentage + "%";
}
window.addEventListener('scroll', updateProgressBar);