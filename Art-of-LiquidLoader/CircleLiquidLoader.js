function mouseOver() {
    console.log("over");
    let bar = document.getElementById("bar");
    bar.classList.add("bar-hovered");
}

function mouseLeave() {
    let bar = document.getElementById("bar");
    bar.classList.remove("bar-hovered");
}