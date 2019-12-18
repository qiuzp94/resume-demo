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

//会动的二级菜单
let liTags = document.querySelectorAll('nav.menu > ul >li')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active')
    }
}
//点击导航栏自己滚动到对应 div
let aTags = document.querySelectorAll('nav.menu > ul >li >a')
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault()
        let a = x.currentTarget
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop
        window.scrollTo(0, top - 80)
        console.log(x)
    }
}


