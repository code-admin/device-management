<template>
<div class="header-box">
    <div class="left">
        <div class="logo">
            <img src="../../../assets/logo.png" alt="智能设备管理平台">
            <span>智能设备管理平台</span>
        </div>
    </div>
    <div class="right">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
            <el-menu-item v-for="(nav,index) in navbar" :index="`${index+1}`" :key="index">{{nav.name}}</el-menu-item>
        </el-menu>
    </div>
</div>
</template>

<script>
export default {
    name: 'nbHeader',
    data() {
        return {
            activeIndex: '2',
            navbar: [{
                    name: '电表设备',
                    router: ''
                },
                {
                    name: '智能井盖',
                    router: ''
                },
                {
                    name: '烟感设备',
                    router: ''
                },
                {
                    name: '燃气设备',
                    router: ''
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.header-box {
    height: 60px;
    width: 100%;
    min-width: 1366px;

    .left {
        display: inline-block;
        width: 215px;
        overflow: hidden;
        background-color: #2D3E50;
        padding: 20px;

        .logo {
            display: flex;

            img {
                width: 28.9px;
                height: 22px;
                align-items: center;
            }

            span {
                align-items: center;
                opacity: 0.8;
                font-family: PingFangSC-Semibold;
                font-size: 18px;
                color: #FFFFFF;
                text-align: left;
                height: 25px;
                line-height: 25px;
                margin-left: 8px;
            }
        }

    }

    .right {
        display: inline-block;
    }
}
</style>
