<template>
    <div id="app" :class="darkClass">
        <router-view/>
    </div>
</template>
<script>
    export default {
        computed: {
            darkClass() {
                return this.$store.state.isDark ? 'dark' : 'white';
            }
        },
        provide(){
            return{
                reload:this.reload
            }
        },
        data(){
            return{
                isRouterAlive:true
            }
        },
        methods:{
            reload(){
                this.isRouterAlive = false;
                this.$nextTick(()=>{
                    this.isRouterAlive = true;
                });
            }
        }
    }
</script>
<style>
    @import "assets/css/backend.min.css";
    @import "assets/fonts/fontawesome-free/all.min.css";
    @import "assets/fonts/line-awesome/line-awesome.min.css";
    @import "assets/fonts/remixicon/remixicon.css";
    @import "assets/fonts/remixicon/remixicon.css";

    #app {
        min-height: 100vh;
        position: relative;
        z-index: 10;
    }

    .iq-sidebar {
        z-index: 900;
    }

    .content-page {
        min-height: calc(100vh - 55px);
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    .flex {
        display: flex;
    }

    .between {
        display: flex;
        justify-content: space-between;
    }

    .around {
        display: flex;
        justify-content: space-around;
    }

    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .viewHide {
        opacity: 0;
    }

    .dark .messageBox textarea.el-textarea__inner,.dark .el-upload--picture-card,.dark .el-input__inner{
        background: #1d1d1f;
        color: #a6a6a6;
        border-color: #8f93f6;
    }

    .dark .el-button--primary{
        background:#8f93f6;
    }

    .dark .el-button--primary span{
        color:#fff;
    }

    .white input:focus {
        box-shadow: 0 0 4px 2px #e2e2e2;
        border-radius: 8px;
    }

    .dark input:focus {
        box-shadow: 0 0 13px 10px #202023;
        border-radius: 8px;
    }

</style>
