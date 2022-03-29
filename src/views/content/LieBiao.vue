<template>
    <div>
        <div class="middle">
            <div>
                <button type="">编辑添加</button>
                <button type="">本地导出表格</button>
            </div>
            <div>
                <input type="" name="" value="" placeholder="请输入文章标题">
                <input type="" name="" value="" placeholder="请选择类型">
                <button type="" class="search">查询</button>
                <button type="" class="reset">重置</button>
            </div>
        </div>
        <el-table :data="arrs">
            <el-table-column prop="title" label="文章标题"></el-table-column>
            <el-table-column prop="name" label="作者"></el-table-column>
            <el-table-column prop="num" label="浏览量"></el-table-column>
            <el-table-column prop="ret" label="回复"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                <!-- 编辑删除 -->
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 弹窗 -->
        <el-dialog title="编辑" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="文章标题" :label-width="formLabelWidth">
                    <el-input v-model="form.title" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="作者" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="浏览量" :label-width="formLabelWidth">
                    <el-input v-model="form.num" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="回复" :label-width="formLabelWidth">
                    <el-input v-model="form.ret" autocomplete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="fnsure">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import instance from '../../api/index'
    export default ({
        name: "LieBiao",
        methods: {
            fnsure(){//确定

            },
            handleEdit(){//编辑行为
                this.dialogFormVisible = true

            },
            handleDelete(a,b){//删除行为
                this.delete(a)
                this.get()
            },
            async delete(index){//删除业务
                let {data} = await instance.delete('/biaoge/'+index)
                console.log(index)
            },
            async get(){ //获取业务 渲染页面
                let {data} = await instance.get('/biaoge')
                // console.log(data)
                this.arrs = data
            }
        },
        data(){
            return {
                arrs:null,
                form:{
                    title:'',
                    name:'',
                    num:'',
                    ret:''
                },
                formLabelWidth:'100px',
                dialogFormVisible:false, //弹窗是否显示
            }
        },
        created(){
            this.get()
        }
    })
</script>
<style scoped>
    .middle {
        display:flex;
        justify-content:space-between;
    }
    .middle button {
        /* height:25px; */
        padding:10px;
        margin-left:20px;
    }
    .middle input {
        height:40px;
        margin-left:20px;
        width:200px;
    }
    .middle div:first-child button {
        background:#0086f1;
        color:#fff;
        border:none;
    }
    /* .middle div:last-child button{
        background:#67c23a;
        color:#fff;
        border:none;
    } */
    .search {
        background:#67c23a;
        color:#fff;
        border:none;
    }
    .reset {
        background:#e9a23c;
        color:#fff;
        border:none;
    }
</style>