window.onload = function () {
    const buttons = document.getElementsByClassName('water-ripple');

    HTMLCollection.prototype.toArray = function () {
        return [].slice.call(this);
    };

    buttons.toArray().forEach(btn => {
        btn.addEventListener('click', function (e) {
            let x = e.clientX - e.target.offsetLeft;
            let y = e.clientY - e.target.offsetTop;

            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            this.appendChild(ripples);

            setTimeout(() => {
                ripples.remove()
            }, 1000)
        });
    });
};

