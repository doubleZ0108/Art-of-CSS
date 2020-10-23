window.onload = function() {
    document.addEventListener('scroll', (e)=>{
        // 在顶端的时候为0  滚动到底端的时候为1
        let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        
        const h1 = document.querySelector('h1');
        h1.style.setProperty('--percentage', `${scrolled * 100}%`);
    });
}