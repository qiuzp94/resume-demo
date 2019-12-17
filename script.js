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
console.log(liTags)
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active')
    }
}