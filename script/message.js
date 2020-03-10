!function () {
    var view = document.querySelector('section.message')

    var model = {
        fetch:function(){},
        save:function(){}
    }
    var controller = {
        view: null,
        messageList: null,
        init: function (view) {
            this.view = view
            this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('form')
            this.initAv()
            this.loadMessages()
            this.bindEvents()
        },
        initAv: function () {
            AV.init({
                appId: "nOpWpY8dlokVBIvvNs2P5NwH-MdYXbMMI",
                appKey: "PqvmSeohDVaWlPCNHumwATpg",
                serverURLs: "https://api.qiuzp.com"
            })
        },
        loadMessages: function () {
            var query = new AV.Query('Message');
            query.find()
                .then(
                    (messages) => {
                        let array = messages.map((item) => item.attributes)
                        array.forEach((item) => {
                            let li = document.createElement('li')
                            li.innerText = `${item.name}:${item.content}`
                            this.messageList.appendChild(li)
                        })
                    }

                );

        },
        bindEvents: function () {
            // let myForm = document.querySelector('#postMessageForm')
            this.form.addEventListener('submit', function (e) {
                e.preventDefault()//阻止默认事件，否则会有默认跳转
                this.saveMessage()

            }.bind(this))
        },
        saveMessage: function () {
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
            var Message = AV.Object.extend('Message');
            var message = new Message();
            message.set({
                'content': content,
                'name': name,
            })
            message.save().then(function (Object) {
                let li = document.createElement('li')
                li.innerText = `${object.attributes.name}: ${object.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
                location.reload(true);
 
            })
            alert('留言成功啦')
            
        }




    }


    controller.init(view)

}.call()





