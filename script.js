//作品集bar状态控制器如下
protfolio1.onclick = function () {
    protfolioBar.className = ("barInner state1")
}
protfolio2.onclick = function () {
    protfolioBar.className = ("barInner state2")
}
protfolio3.onclick = function () {
    protfolioBar.className = ("barInner state3")
}

// 第一部分 特别的tags、寻找最近的元素 onscroll事件
let specialTags = document.querySelectorAll('[data-x]')
for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
}
findClosent()
window.onscroll = function (x) {
    if (screenY > 0) {
        topNavBar.classList.add('sticky')
    } else {
        topNavBar.classList.remove('sticky')
    }
    findClosent()
}



//第二部分 寻找最近元素的函数+寻找要高亮的li
function findClosent() {
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 1; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i
        }
    }
    // minIndex 就是里窗口顶部最近的元素
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('[href="#' + id + '"]')
    let li = a.parentNode
    let brotherAndMe = li.parentNode.children
    for (let i = 0; i < brotherAndMe.length; i++) {
        brotherAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
}




//第三部分 li的选中与离开事件 、 tween的引入
let liTags = document.querySelectorAll('nav.menu>ul>li')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active')
    }
}


let aTags = document.querySelectorAll('nav.menu>ul>li>a')
function animate(time) {
    requestAnimationFrame(animate)
    TWEEN.update(time);
}
requestAnimationFrame(animate)



// 第四部分 缓慢动画代码

for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault()
        let a = x.currentTarget
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop
        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop
        let t = Math.abs((s / 100) * 300)
        if (t > 500) { t = 500 }
        const coords = { y: currentTop }
        const tween = new TWEEN.Tween(coords)
            .to({ y: targetTop }, t)
            .easing(TWEEN.Easing.Cubic.InOut)// 缓动类型
            // .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(function () {
                window.scrollTo(0, coords.y)// 如何更新界面
            })
            .start()// 开始缓动
    }
}



