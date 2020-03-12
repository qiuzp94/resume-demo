window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        init: function () {
            AV.init({
                appId: "nOpWpY8dlokVBIvvNs2P5NwH-MdYXbMMI",
                appKey: "PqvmSeohDVaWlPCNHumwATpg",
                serverURLs: "https://api.qiuzp.com"
            })
        },
        fetch: function () {
            var query = new AV.Query(resourceName); //闭包
            return query.find() //Promise 对象
        },
        save: function (object) {
            var X = AV.Object.extend(resourceName);
            var x = new X();
            return x.save(object)
        }
    }
}
