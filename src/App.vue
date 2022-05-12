<template>
    <div id="app" :class="classes">
        <router-view/>
    </div>
</template>
<script>
    export default {
        computed: {
            classes(){
                return {
                    dark:this.$store.state.isDark,
                    white:!this.$store.state.isDark,
                    'sidebar-main':this.$store.state.autoSlideMenuShow
                }
            }
        },
        // provide() {
        //     return {
        //         reload: this.reload
        //     }
        // },
        // data() {
        //     return {
        //         isRouterAlive: true,
        //         autoSlideMenuShow:false
        //     }
        // },
        // methods: {
        //     reload() {
        //         this.isRouterAlive = false;
        //         this.$nextTick(() => {
        //             this.isRouterAlive = true;
        //         });
        //     }
        // }
    }
</script>
<style>
    @import "assets/css/backend.min.css";
    @import "assets/fonts/fontawesome-free/all.min.css";
    @import "assets/fonts/line-awesome/line-awesome.min.css";
    @import "assets/fonts/remixicon/remixicon.css";
    @import "assets/fonts/remixicon/remixicon.css";

    /*基本样式*/
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

    /*菜单缩放样式*/

    @media (max-width: 1299px) {
        #app.sidebar-main .iq-sidebar {
            width: 260px;
            left: 0;
            z-index: 999;
        }
    }


    @media (min-width: 1300px) {
        .iq-top-navbar .iq-navbar-custom .wrapper-menu {
            display: none
        }

        #app.sidebar-main .iq-sidebar {
            width: 80px
        }

        #app.sidebar-main .iq-sidebar .iq-sidebar-menu .iq-menu li a span {
            -webkit-opacity: 0;
            -moz-opacity: 0;
            -ms-opacity: 0;
            -o-opacity: 0;
            opacity: 0;
            display: none;
            transition: all .6s ease-in-out
        }

        #app.sidebar-main .iq-sidebar-logo a, body.sidebar-main .iq-sidebar .iq-sidebar-menu .iq-menu li a .iq-arrow-right {
            display: none
        }

        #app.sidebar-main .iq-sidebar-logo a span, body.sidebar-main .iq-sidebar-menu .iq-menu li a .badge {
            -webkit-opacity: 0;
            -moz-opacity: 0;
            -ms-opacity: 0;
            -o-opacity: 0;
            opacity: 0;
            display: none;
            transition: all .6s ease-in-out
        }

        #app.sidebar-main .iq-sidebar-menu .iq-menu li a .iq-arrow-right {
            margin-right: 0;
            display: none
        }

        #app.sidebar-main .iq-sidebar-menu .iq-menu li a i.iq-arrow-left {
            margin: 0 auto
        }

        #app.sidebar-main .iq-sidebar-menu .iq-menu li li a i {
            margin: 0 auto;
            text-align: center
        }

        #app.sidebar-main .sidebar-default .iq-sidebar-menu .iq-menu li ul li a {
            padding-left: 20px
        }
    }

    @media (max-width: 1299px) {
        .iq-sidebar {
            display: inline-block;
            z-index: 99;
            left: -300px;
            top: 0
        }

        #app.sidebar-main .iq-sidebar {
            width: 260px;
            left: 0;
            z-index: 999
        }
    }


    @media (min-width: 1300px) {
        #app.sidebar-main .content-page {
            margin-left: 80px
        }

        #app.sidebar-main .iq-menu-bt-sidebar {
            display: block;
            margin-left: auto;
            margin-right: auto
        }
    }

    @media (min-width: 1300px) {
        #app.sidebar-main .iq-footer {
            margin-left: 80px;
            width: calc(100vw - 85px)
        }
    }

    @media (max-width: 1299px) {
        .iq-footer, #app.sidebar-main .iq-footer {
            padding: 15px 10px;
            margin-left: 0;
            width: 100%
        }

        .without-right-sidebar .iq-footer {
            width: 100%
        }
    }

    #app.sidebar-main .iq-top-navbar {
        width: calc(100% - 80px);
    }

    /*头像上传*/

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }

    /*主题样式*/
    .dark .messageBox textarea.el-textarea__inner, .dark .el-upload--picture-card, .dark .el-input__inner {
        background: #1d1d1f;
        color: #a6a6a6;
        border-color: #8f93f6;
    }

    .dark .el-button--primary {
        background: #8f93f6;
    }

    .dark .el-button--primary span {
        color: #fff;
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
