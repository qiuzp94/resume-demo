AV.init({
    appId: "nOpWpY8dlokVBIvvNs2P5NwH-MdYXbMMI",
    appKey: "PqvmSeohDVaWlPCNHumwATpg",
    serverURLs: "https://api.qiuzp.com"
});


var query = new AV.Query('Message');
query.find()
    .then(
        function (messages) {
            let array = messages.map((item) => item.attributes)
            array.forEach((item) => {
                let li = document.createElement('li')
                li.innerText = `${item.name}:${item.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
                myForm.querySelector('input[name=content]').value = ''
                myForm.querySelector('input[name=name]').value = ''

            })
            console.log(array)
        }
        
    );
    console.log(AV.Object)
let myForm = document.querySelector('#postMessageForm')
myForm.addEventListener('submit', function (e) {
    e.preventDefault()//阻止默认事件，否则会有默认跳转
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
    

})


