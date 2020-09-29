window.onload = () => {
    document.querySelectorAll('.loading-text div').forEach((elem, index) => {
        elem.style.animationDelay = index*0.2 + 's';
    });
};