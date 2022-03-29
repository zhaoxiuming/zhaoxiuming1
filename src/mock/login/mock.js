let Mock = require("mockjs")

Mock.mock('/api/login','post',function(config){
    // console.log(config.body)
    let a = JSON.parse(config.body)
    let user = a.user
    let pw = a.pw
    if(user=='admin'&&pw=='123456'){
        // console.log(1)
        return {
            status:200,
            message:'success',
            data:{user:'admin',pw:'123456',token:'qqqqqqqqq'}
        }
    }else{
        return {
            status:200,
            message:'fail'
        }
    }
})