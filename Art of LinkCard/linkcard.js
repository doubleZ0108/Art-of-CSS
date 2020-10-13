window.onload = function(){
    /*
      markdown转换为html后，单独的链接格式为这样，可以通过如下的js将其转换为LinkCard格式
      <p>
        <a href="https://github.com/sdfsdf/sdf/sdfasdf/sdsdf">this is a link</a>
      </p>
    */
    renderLinkCard();
};

function renderLinkCard(){
    document.querySelectorAll("p > a").forEach((e, index)=> {
        if(e.parentNode.firstElementChild==e && e.parentNode.lastElementChild==e){
          let elem = e.parentNode;
          let href = e.href;
          let text = e.innerHTML;
  
          let arrUrl = href.split("//");
          let start = arrUrl[1].split("/")[0];
          let domainHref = arrUrl[0] + "//" + start;
                  
          elem.innerHTML = ["<a href=\"" + href + "\" class=\"LinkCard\">\n" +
          "        <span class=\"LinkCard-backdrop\"></span>\n" +
          "        <span class=\"LinkCard-content\">\n" +
          "            <span class=\"LinkCard-text\">\n" +
          "            <span class=\"LinkCard-title\">" + text + "</span>\n" +
          "            <span class=\"LinkCard-meta\">\n" +
          "                <svg class=\"Zi Zi--InsertLink\" fill=\"currentColor\" viewBox=\"0 0 24 24\"><path d=\"M13.414 4.222a4.5 4.5 0 1 1 6.364 6.364l-3.005 3.005a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 0-.707l3.005-3.005a2.5 2.5 0 1 0-3.536-3.536l-3.005 3.005a.5.5 0 0 1-.707 0l-.707-.707a.5.5 0 0 1 0-.707l3.005-3.005zm-6.187 6.187a.5.5 0 0 1 .638-.058l.07.058.706.707a.5.5 0 0 1 .058.638l-.058.07-3.005 3.004a2.5 2.5 0 0 0 3.405 3.658l.13-.122 3.006-3.005a.5.5 0 0 1 .638-.058l.069.058.707.707a.5.5 0 0 1 .058.638l-.058.069-3.005 3.005a4.5 4.5 0 0 1-6.524-6.196l.16-.168 3.005-3.005zm8.132-3.182a.25.25 0 0 1 .353 0l1.061 1.06a.25.25 0 0 1 0 .354l-8.132 8.132a.25.25 0 0 1-.353 0l-1.061-1.06a.25.25 0 0 1 0-.354l8.132-8.132z\"></path></svg>\n" +
          "                <span>" + domainHref + "</span>\n" +
          "            </span>\n" +
          "        </span>\n" +
          "        </span>\n" +
          "    </a>"].join("");
  
          elem.firstElementChild.firstElementChild.style.backgroundImage = `url("https://picsum.photos/seed/` + Date.parse(new Date()) + index + `/390/200")`;
        }
      });
}