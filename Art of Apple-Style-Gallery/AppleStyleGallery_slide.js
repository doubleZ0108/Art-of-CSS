window.onload = function(){
    let counter = 0;
    document.querySelectorAll(".apple-style-gallery").forEach((gallery, index) => {
        gallery.style.left = index*100 + "%";
        ++counter;
    });


    let rate = 0;
    let outterPadding = 80, innerPadding=10;
    document.getElementById("right-arrow").addEventListener("click", ()=>{
        rate += 1;
        if(rate == counter){
            rate = counter - 1;
            noMoreCallBack("right-arrow");
        }
        galleryTransformCallBack();
    });

    document.getElementById("left-arrow").addEventListener("click", ()=>{
        rate -= 1;
        if(rate < 0) {
            rate = 0;
            noMoreCallBack("left-arrow");
        }
        galleryTransformCallBack();
    });

    setInterval(()=>{
        rate = (rate + 1) % counter;
        galleryTransformCallBack();
    }, 3000);

    function noMoreCallBack(id){
        var arrow = document.getElementById(id);
        arrow.style.animation = "noMoreAnimation 1s";
        arrow.addEventListener("animationend", () => {
            arrow.style.animation = "";
        });
    }

    function galleryTransformCallBack(){
        document.querySelectorAll(".apple-style-gallery").forEach((gallery)=>{
            gallery.style.transform = "translateX(calc("+ rate*-100 +"% - " + (outterPadding*2*rate - innerPadding*2*rate - outterPadding)+ "px))";
        });
    }
};