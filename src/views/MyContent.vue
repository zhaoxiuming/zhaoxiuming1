<template>
    <div>
        <el-container>
            <el-aside width="201px" class="aside">
                <el-menu background-color="rgb(50,64,87)" text-color="#ffffff" :router="true">
                <!-- 一级菜单 -->
                    <el-menu-item class="item" style="background:#0079d9;">
                        <span>ElementUi管理后台</span>
                    </el-menu-item>
                    <!-- 二级菜单 -->
                    <!-- 首页 -->
                    <el-submenu index="1" class="item">
                        <template slot="title">
                            <i class="el-icon-eleme"></i>
                            <span>首页</span>
                        </template>
                    </el-submenu>
                    <!-- 文章管理 -->
                    <el-submenu index="2" class="item">
                        <template slot="title">
                            <i class="el-icon-folder-checked"></i>
                            <span>文章管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">文章列表</el-menu-item>
                            <el-menu-item index="2-2">多层路由展示</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <div class="top">
                        <div>
                            <img src="../assets/1.png">
                        </div>
                        <div>
                            <img src="../assets/2.png" alt="">
                            <span>admin</span>
                        </div>
                    </div>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default ({
        name: "MyContent",
        methods: {
            
        }
    })
</script>
<style scoped>
    .aside {
        border:none;
        height:80vh;
        width:199px;
        background-color:rgb(50,64,87);
    }
    .top {
        display:flex;
        justify-content:space-between;
        background:#0086f1;
        align-items:center;
        height:50px;
        margin-left:-20px;
    }
    .top div:last-child {
        display:flex;
        align-items:Center;
        justify-content:space-around;
    }
    .top span {
        color:#fff;
        margin-right:20px;
    }
</style>