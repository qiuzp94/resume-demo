!function () {
    var model = {
        init: function () {
            AV.init({
                appId: "nOpWpY8dlokVBIvvNs2P5NwH-MdYXbMMI",
                appKey: "PqvmSeohDVaWlPCNHumwATpg",
                serverURLs: "https://api.qiuzp.com"
            })
        },
        //获取数据
        fetch: function () {
            var query = new AV.Query('Message');
            return query.find() //Promise 对象
        },
        //创建数据
        save: function (name, content) {
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({ //Promise div对象
                'content': content,
                'name': name,
            })
        }
    }
    var view = document.querySelector('section.message')
    


    var controller = {
        view: null,
        model: null,
        messageList: null,
        init: function (view, model) {
            this.view = view
            this.model = model

            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.model.init()
            this.loadMessages()
            this.bindEvents()
        },

        loadMessages: function () {
            this.model.fetch().then(
                (messages) => {
                    let array = messages.map((item) => item.attributes)
                    array.forEach((item) => {
                        let li = document.createElement('li')
                        li.innerText = `${item.name}:${item.content}`
                        this.messageList.appendChild(li)
                    })
                }

            )

        },
        bindEvents: function () {
            this.form.addEventListener('submit', function (e) {
                e.preventDefault()//阻止默认事件，否则会有默认跳转
                this.saveMessage()

            }.bind(this))
        },
        saveMessage: function () {
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            this.model.save(name, content).then(function (Object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}: ${object.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
                myForm.querySelector('input[name=content]').value = ''
                
            })
            alert('留言成功啦')
            
        }  

    }


    controller.init(view,model)

}.call()












