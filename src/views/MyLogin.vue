<template>
    <div class="login">
        <div class="myform">
            <div class="title">
                <h3>Login Form</h3>
            </div>
            <el-form :model="formdata" :rules="rules">
                <el-form-item prop="user">
                    <el-input placeholder="用户名" v-model="formdata.user" ></el-input>
                </el-form-item>
                 <el-form-item prop="pw">
                    <el-input placeholder="密码" v-model="formdata.pw"></el-input>
                </el-form-item>
                 <el-form-item>
                    <el-button type="primary" size="" class="btn" @click="tijiao">Login</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
  import instance from '../api/index'
  export default ({
    name: "MyLogin",
    methods: {
    //   async get(){
    //     let {data} = await instance.get('/login')
    //     console.log(data)
    //   },
        tijiao(){//登录行为
            this.subbtn()
        },
        async subbtn(){//登录业务
            let user = this.formdata.user;
            let pw = this.formdata.pw
            let {data} = await instance.post('/login',{user,pw})
            console.log(data)
            //存token
            localStorage.setItem('token',data.data.token)
            if(data.message === 'fail'){
                return this.$message.error('登陆失败')
            } 
            if(data.message === 'success') {
                this.$message({
                    type:'success',
                    message:'登陆成功',
                    duration:3000,
                    onClose:()=>{
                        this.$router.push({name:'liebiao'})
                    }
                })
            }
        }
    },
    data(){
        let userfn = function (rules,value,callback) {
                let rg = /^[a-zA-Z0-9]{5,10}/
                if(rg.test(value))return
                return callback(new Error('用户格式不对'))
            }
        let pwfn = function (rules,value,callback) {
            let rg = /^[a-zA-Z0-9]{6,10}/
            if(rg.test(value))return
            return callback(new Error('密码格式不对'))
        }
        return {
            formdata:{
                user:'admin',
                pw:'123456'
            },
            rules:{
                user:[{validator:userfn,trigger:'blur'}],
                pw:[{validator:pwfn,trigger:'blur'}]
            },
        }
    },
    created(){
    //   this.subbtn()
    }
  })
</script>
<style scoped>
    .login {
        background:#2d3a4b;
        width:100vw;
        height:100vh;
    }
    .login .title {
        width:400px;
        position:absolute;
        left:50%;
        margin-left:-200px;
        text-align:center;
        top:-100px;
    }
    .login .title h3 {
        color:#fff;
    }
    .login .myform {
        position:absolute;
        left:50%;
        top:50%;
        box-sizing:border-box;
        padding:20px;
        width:400px;
        height:200px;
        margin-left:-185px;
        margin-top:-130px;
    }
    .btn {
        width:100%;
    }
</style>