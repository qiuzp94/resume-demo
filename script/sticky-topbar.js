// 特别的tags、寻找最近的元素 onscroll事件
!function () {
    var view = View('#topNavBar')

    var controller = {
        view: null,
        init: function (view) {
            this.view = view 
            //因为下面的bindEvents访问不到view，所以要通过对象进行中转，才能访问
            this.bindEvents()
            // 等价于this.bindEvents.call(this)
        },
        bindEvents: function () {  //绑定事件
            var view = this.view
            window.addEventListener('scroll', (x) => {
                if (window.scrollY > 0) {
                    this.active()
                } else {
                    this.deactive()
                }
            })
            
            //箭头函数没有this
        },
        active:function(){
            this.view.classList.add('sticky')
        },
        deactive:function(){
            this.view.classList.remove('sticky')
        }
    }
    controller.init(view)
    //等价于controller.init.call(controller,view)
}.call()
