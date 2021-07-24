window.onload = function () {
    document.querySelectorAll('.dock li').forEach(li => {
        li.addEventListener('mousemove', e => {
            console.log(e.target.tagName)
            let item = e.target
            let itemRect = item.getBoundingClientRect()
            
            // 鼠标hover到某个li上的时候，靠近左侧则 offset -> 0, 靠近右侧则 offset -> 1
            let offset = Math.abs(e.clientX - itemRect.left) / itemRect.width
            
            let prev = item.previousElementSibling || null
            let next = item.nextElementSibling || null

            let scale = 0.5
            resetScale()

            if(prev) {
                prev.style.setProperty('--scale-factor', 1 + scale * Math.abs(offset - 1))
            }

            item.style.setProperty('--scale-factor', 1 + scale)

            if(next) {
                next.style.setProperty('--scale-factor', 1 + scale * offset)
            }
        })
    })
    document.querySelector('.dock').addEventListener('mouseleave', e => {
        resetScale()
    })
}

function resetScale() {
    document.querySelectorAll('.dock li').forEach(li => {
        li.style.setProperty('--scale-factor', 1)
    })
}