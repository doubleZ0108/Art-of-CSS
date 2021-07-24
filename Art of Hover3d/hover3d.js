window.onload = function () {
    let isinvert = true;
    let isshine = true;

    let container = document.getElementById("container");
    let card = document.getElementById("card");
    let shine = document.getElementById("shine");

    container.addEventListener("mouseenter", function(){
        if(isshine){
            shine = document.createElement("div");
            shine.id = "shine";
            shine.style.position = "absolute";

            setStyle(shine, {
                top: 0 + "px",
                left: 0 + "px",
                bottom: 0 + "px",
                right: 0 + "px",
                zIndex: "999",
            });
            card.appendChild(shine);
        }
    });

    container.addEventListener("mousemove", function(event) {
        let w      = this.offsetWidth,
            h      = this.offsetHeight,
            ax 	   = isinvert? -( w / 2 - event.offsetX)/20 : ( w / 2 - event.offsetX)/20;
            ay     = isinvert ? ( h / 2 - event.offsetY)/20 : ( h / 2 - event.offsetY)/20;
            dy     = event.offsetY - h / 2,
            dx     = event.offsetX - w / 2,
            theta  = Math.atan2(dy, dx),
            angle  = theta * 180 / Math.PI - 90;
                
        if (angle < 0) {
            angle  = angle + 360;
        }

        setStyle(container,{
            perspective: 1000 + "px",
            transformStyle: "preserve-3d",
        });
        setStyle(card, {
            perspective: 1000 + "px",
            transformStyle: "preserve-3d",
            transform: "rotateY("+ax+"deg) rotateX("+ay+"deg)",
        });
        if(isshine){
            setStyle(shine, {
                background: 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + event.offsetY / h * .5 + ') 0%,rgba(255,255,255,0) 80%)',
            });
        }
    });

    container.addEventListener("mouseleave", function(){
        setStyle(card, {
            transform: "rotateX(0) rotateY(0)",
        })
        if(isshine){
            card.removeChild(shine);
        }
    });
};

function setStyle(obj,css){
    for(let atr in css){
        obj.style[atr] = css[atr];
    }
}
