let Mock = require('mockjs')
let data = [
    {title:'骆驼祥子',name:'老舍',num:'123',ret:'8'},
    {title:'背影',name:'朱自清',num:'123',ret:'8'},
    {title:'背影',name:'朱自清',num:'123',ret:'8'},
    {title:'背影',name:'朱自清',num:'123',ret:'8'},
    {title:'背影',name:'朱自清',num:'123',ret:'8'},
    {title:'背影',name:'朱自清',num:'123',ret:'8'},
    {title:'背影',name:'朱自清',num:'123',ret:'8'},
]
Mock.mock('/api/biaoge','get',function(config){ 
    console.log(config)
    return data
})

Mock.mock(/\/api\/biaoge\//,'delete',function(config){//删除
    console.log(config)
    let arr = config.url.split('/')
    let id = arr.pop()
    data.splice(id,1)
    return data
})