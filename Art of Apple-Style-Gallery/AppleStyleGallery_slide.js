window.onload = function(){
    let counter = 0;
    document.querySelectorAll(".apple-style-gallery").forEach((gallery, index) => {
        if(index != 0){
            gallery.style.left = index*100 + "%";
        }
        ++counter;
    });


    let rate = 0;
    let paddingNow = 10;
    document.getElementById("right-arrow").addEventListener("click", ()=>{
        rate += 1;
        if(rate == counter){
            rate = counter - 1;
            noMoreCallBack("right-arrow");
        }
        document.querySelectorAll(".apple-style-gallery").forEach((gallery)=>{
            if(rate == 0){
                gallery.style.transform = "translateX(0px)";
            } else {
                gallery.style.transform = "translateX(calc("+ rate*-100 +"% - " + (rate*2*paddingNow-paddingNow) + "px))";
            }
        });
    });

    document.getElementById("left-arrow").addEventListener("click", ()=>{
        rate -= 1;
        if(rate < 0) {
            rate = 0;
            noMoreCallBack("left-arrow");
        }
        document.querySelectorAll(".apple-style-gallery").forEach((gallery)=>{
            if(rate == 0){
                gallery.style.transform = "translateX(0px)";
            } else {
                gallery.style.transform = "translateX(calc("+ rate*-100 +"% - " + (rate*2*paddingNow-paddingNow) + "px))";
            }
        });
    });

    function noMoreCallBack(id){
        var arrow = document.getElementById(id);
        arrow.style.animation = "noMoreAnimation 1s";
        arrow.addEventListener("animationend", () => {
            arrow.style.animation = "";
        });
    }
};