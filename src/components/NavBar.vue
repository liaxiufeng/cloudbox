<template>
    <div class="iq-top-navbar fixed">
        <div class="iq-navbar-custom">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
                <div class="iq-navbar-logo d-flex align-items-center justify-content-between">
                    <i class="ri-menu-line wrapper-menu">
                    </i>
                    <a href="#" class="header-logo">
                        <img src="../assets/images/logo.png" class="img-fluid rounded-normal light-logo" alt="logo"
                             v-if="!isDark">
                        <img src="../assets/images/logo-white.png" class="img-fluid rounded-normal darkmode-logo"
                             alt="logo" v-if="isDark">
                    </a>
                </div>
                <div class="iq-search-bar device-search">
                    <form>
                        <div class="input-prepend input-append">
                            <div :class="(showSearchList?'show':'')+' btn-group'">
                                <label class="dropdown-toggle searchbox" data-toggle="dropdown">
                                    <input class="dropdown-toggle search-query text search-input" type="text"
                                           placeholder="请在这里输入文件名或类型" @focus="showSearchList = true"
                                           @blur="showSearchList = false">
                                    <span class="search-replace"></span>
                                    <a class="search-link" href="#">
                                        <i class="ri-search-line">
                                        </i>
                                    </a>
                                    <span class="caret">
                                        <!--icon-->
                                    </span>
                                </label>
                                <ul :class="(showSearchList?'show':'')+' dropdown-menu'">
                                    <li>
                                        <a href="#">
                                            <div class="item">
                                                测试一下
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="item">
                                                <i class="far fa-file-pdf bg-info">
                                                </i>PDFs
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="item">
                                                <i class="far fa-file-alt bg-primary">
                                                </i>Documents
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="item">
                                                <i class="far fa-file-excel bg-success">
                                                </i>Spreadsheet
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="item">
                                                <i class="far fa-file-powerpoint bg-danger">
                                                </i>Presentation
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="item">
                                                <i class="far fa-file-image bg-warning">
                                                </i>Photos &amp; Images
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <div class="item">
                                                <i class="far fa-file-video bg-info">
                                                </i>Videos
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="d-flex align-items-center">
                    <div class="change-mode">
                        <div class="custom-control custom-switch custom-switch-icon custom-control-inline">
                            <div class="custom-switch-inner">
                                <p class="mb-0"></p>
                                <input type="checkbox" class="custom-control-input" id="dark-mode"
                                       @click.stop="changeDark"
                                       :data-active="!isDark">
                                <label class="custom-control-label" for="dark-mode" data-mode="toggle">
                                      <span class="switch-icon-left">
                                        <i class="ri-moon-clear-line a-left"></i>
                                      </span>
                                    <span class="switch-icon-right">
                                        <i class="ri-sun-line a-right"></i>
                                      </span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-label="Toggle navigation">
                        <i class="ri-menu-3-line">
                        </i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto navbar-list align-items-center">
                            <li class="nav-item nav-icon search-content">
                                <a href="#" class="search-toggle rounded" id="dropdownSearch" data-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false">
                                    <i class="ri-search-line">
                                    </i>
                                </a>
                                <div class="iq-search-bar iq-sub-dropdown dropdown-menu"
                                     aria-labelledby="dropdownSearch">
                                    <form action="#" class="searchbox p-2">
                                        <div class="form-group mb-0 position-relative">
                                            <input type="text" class="text search-input font-size-12"
                                                   placeholder="type here to search...">
                                            <a href="#" class="search-link">
                                                <i class="las la-search">
                                                </i>
                                            </a>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li :class="'nav-item nav-icon dropdown ' + (showFlag.showHelp?'show':'')">
                                <a href="#" class="search-toggle dropdown-toggle" id="dropdownMenuButton01"
                                   data-toggle="dropdown" aria-haspopup="true"
                                   :aria-expanded="showFlag.showHelp?'true':'false'"
                                   @click.stop.prevent="changeShow('showHelp')">
                                    <i class="ri-question-line">
                                    </i>
                                </a>
                                <div :class="'iq-sub-dropdown dropdown-menu ' + (showFlag.showHelp?'show':'')"
                                     aria-labelledby="dropdownMenuButton01">
                                    <div class="card shadow-none m-0">
                                        <div class="card-body p-0 ">
                                            <div class="p-3">
                                                <a href="#" class="iq-sub-card pt-0">
                                                    <i class="ri-questionnaire-line">
                                                    </i>Help</a>
                                                <a href="#" class="iq-sub-card">
                                                    <i class="ri-recycle-line">
                                                    </i>Training</a>
                                                <a href="#" class="iq-sub-card">
                                                    <i class="ri-refresh-line">
                                                    </i>Updates</a>
                                                <a href="#" class="iq-sub-card">
                                                    <i class="ri-service-line">
                                                    </i>Terms and Policy</a>
                                                <a href="#" class="iq-sub-card">
                                                    <i class="ri-feedback-line">
                                                    </i>Send Feedback</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li :class="'nav-item nav-icon dropdown ' + (showFlag.showSettings?'show':'')">
                                <a href="#" class="search-toggle dropdown-toggle" id="dropdownMenuButton02"
                                   data-toggle="dropdown" aria-haspopup="true"
                                   :aria-expanded="showFlag.showSettings?'true':'false'"
                                   @click="changeShow('showSettings')">
                                    <i class="ri-settings-3-line"></i>
                                </a>
                                <div :class="'iq-sub-dropdown dropdown-menu ' + (showFlag.showSettings?'show':'')"
                                     aria-labelledby="dropdownMenuButton02">
                                    <div class="card shadow-none m-0">
                                        <div class="card-body p-0 ">
                                            <div class="p-3">
                                                <a href="#" class="iq-sub-card pt-0">
                                                    <i class="ri-settings-3-line">
                                                    </i>Settings</a>
                                                <a href="#" class="iq-sub-card">
                                                    <i class="ri-hard-drive-line">
                                                    </i>Get Drive for desktop</a>
                                                <a href="#" class="iq-sub-card">
                                                    <i class="ri-keyboard-line">
                                                    </i>Keyboard Shortcuts</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li :class="'nav-item nav-icon dropdown caption-content ' + (showFlag.showUserCard?'show':'')">
                                <a href="#" class="search-toggle dropdown-toggle" id="dropdownMenuButton03"
                                   data-toggle="dropdown"
                                   aria-haspopup="true" :aria-expanded="(showFlag.showUserCard ? 'true' : 'false')"
                                   @click.stop.prevent="changeShow('showUserCard')">
                                    <div class="user_small_box">
                                        <div class="caption bg-primary line-height">
                                            {{isLogin ? loginUser.username.substr(0,1).toUpperCase():'U'}}
                                        </div>
                                        <div class="username">{{isLogin ? loginUser.username :'未登录'}}</div>
                                    </div>
                                </a>
                                <div :class="'iq-sub-dropdown dropdown-menu ' + (showFlag.showUserCard?'show':'')"
                                     aria-labelledby="dropdownMenuButton03">
                                    <div class="card mb-0">
                                        <div class="card-header d-flex justify-content-between align-items-center mb-0">
                                            <div class="header-title">
                                                <h4 class="card-title mb-0">{{isLogin?"我的资料":"请先登录"}}</h4>
                                            </div>
                                            <div class="close-data text-right badge badge-primary cursor-pointer ">
                                                <i class="ri-close-fill" @click="showFlag.showUserCard = false"/>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="profile-header">
                                                <div class="cover-container text-center" v-if="isLogin">
                                                    <div class="rounded-circle profile-icon bg-primary mx-auto d-block">
                                                        {{loginUser.username.substr(0,1).toUpperCase()}}
                                                        <!--                                                        <a href="#"></a>-->
                                                    </div>
                                                    <div class="profile-detail mt-3">
                                                        <h5 class="username">
                                                            {{loginUser.username}}
                                                        </h5>
                                                        <p>
                                                            <a href="#" class="__cf_email__"
                                                               data-cfemail="1c6c7d727265717d6e7f735c7b717d7570327f7371">
                                                                {{loginUser.email}}
                                                            </a>
                                                        </p>
                                                    </div>
                                                    <a href="#" class="btn btn-primary"
                                                       @click.stop.prevent="logOut">注销</a>
                                                </div>
                                                <div class="cover-container text-center" v-if="!isLogin">
                                                    <a href="#" class="btn btn-primary"
                                                       @click.stop.prevent="logIn">登录</a>
                                                    <a class="ml-4" href="#"></a>
                                                    <a href="#" class="btn btn-primary" @click.stop.prevent="Register">注册</a>
                                                </div>
                                                <div class="profile-details mt-4 pt-4 border-top">
                                                    <div class="media align-items-center mb-3" v-for="friend in friends"
                                                         v-if="isLogin">
                                                        <div class="rounded-circle iq-card-icon-small bg-primary">
                                                            {{friend.username.substr(0,1).toUpperCase()}}
                                                        </div>
                                                        <div class="media-body ml-3">
                                                            <div class="media justify-content-between">
                                                                <h6 class="mb-0">{{friend.username}}</h6>
                                                                <p class="mb-0 font-size-12">
                                                                    <i>{{friend.isActive?'在线':'离线'}}</i>
                                                                </p>
                                                            </div>
                                                            <p class="mb-0 font-size-12">
                                                                <a href="#" class="__cf_email__"
                                                                   data-cfemail="7d1c13131c100811113d1a101c1411531e1210">
                                                                    {{friend.email}}
                                                                </a>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    import Vue from "vue"
    export default {
        name: "TopBar",
        data() {
            return {
                showFlag: {
                    showUserCard: false,
                    showSettings: false,
                    showSearch: false,
                    showHelp: false,
                    showBlack: false
                },
                showSearchList: false,
                isLogin: true,
                loginUser: {
                    uid: '520',
                    username: '我是一只小毛驴呀，小毛驴。。。',
                    email: "liujun@163.com"
                },
                friends: [
                    {
                        uid: '1',
                        username: 'spiderMan',
                        email: "spider@163.com",
                        isActive: true
                    },
                    {
                        uid: '2',
                        username: 'Wolverine',
                        email: "[邮箱未公开]",
                        isActive: false
                    }, {
                        uid: '3',
                        username: '彭于晏   ',
                        email: "[邮箱未公开]",
                        isActive: false
                    }
                ]
            }
        },
        created() {
            for (let key in this.showFlag) {
                this.showFlag[key] = false;
            }
        },
        mounted() {
            this.$getLoginUser(this);
        },
        methods: {
            changeShow(key) {
                for (let keyTemp in this.showFlag) {
                    if (keyTemp === key)
                        this.showFlag[key] = !this.showFlag[key];
                    else
                        this.showFlag[keyTemp] = false;
                }
            },
            logOut() {
                console.log('log out');
            },
            logIn() {
                this.$router.push("login")
            },
            Register() {
                console.log('去注册');
            },
            changeDark() {
                this.$emit("changeDark", 1);
            }
        },
        props: ["isDark"]
    }
</script>

<style scoped>
    .user_small_box {
        display: flex;
        align-items: center;
    }

    .username {
        min-width: 3em;
        max-width: 6em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .user_small_box .username {
        line-height: 26px;
        font-size: 18px;
        margin-left: 5px;
    }

    .profile-detail {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>