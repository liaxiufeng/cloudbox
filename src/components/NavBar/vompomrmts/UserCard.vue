<template>
    <div class="d-flex align-items-center">
        <alert-messege v-model="alertMsg.show" v-bind="alertMsg"/>
        <div class="change-mode">
            <div class="custom-control custom-switch custom-switch-icon custom-control-inline">
                <div class="custom-switch-inner">
                    <p class="mb-0"></p>
                    <input type="checkbox" class="custom-control-input" id="dark-mode"
                           @click.stop="changeDark">
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
        <button class="navbar-toggler" @click="autoBarShow = !autoBarShow" type="button"
                aria-controls="navbarSupportedContent"
                aria-label="Toggle navigation">
            <i class="ri-menu-3-line"></i>
        </button>
        <div class="collapse navbar-collapse" :class="{'show':autoBarShow}" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto navbar-list align-items-center">
                <li class="nav-item nav-icon dropdown caption-content" :class="{'show':userCardShow}">
                    <a href="#" class="search-toggle dropdown-toggle" id="dropdownMenuButton03"
                       @click.stop.prevent="userCardShow = !userCardShow">
                        <div class="line-height">
                            <div style="display:flex; flex-direction: row">
                                <div v-if="user && user.photo" class="mr-2">
                                    <img :src="user.photo" class="rounded img-fluid avatar-30">
                                </div>
                                <div>{{user ? user.username :'未登录'}}</div>
                            </div>
                        </div>
                    </a>
                    <div class="iq-sub-dropdown dropdown-menu" :class="{'show':userCardShow}"
                         aria-labelledby="dropdownMenuButton03">
                        <div class="card mb-0">
                            <div class="card-header d-flex justify-content-between align-items-center mb-0">
                                <div class="header-title">
                                    <h4 class="card-title mb-0">{{user?"我的资料":"请先登录"}}</h4>
                                </div>
                                <div class="close-data text-right badge badge-primary cursor-pointer ">
                                    <i class="ri-close-fill" @click="userCardShow = false"/>
                                </div>
                            </div>
                            <div class="card-body">
                                <div class="profile-header">
                                    <div class="cover-container text-center" v-if="user">
                                        <el-upload
                                                class="avatar-uploader mr-2"
                                                :action="photoUploadUrl"
                                                :headers="headers"
                                                :before-upload="beforeUserPhotoUpload"
                                                :on-success="userPhotoUploadSuccess"
                                                :on-error="userPhotoUploadError"
                                                :show-file-list="false">
                                            <img v-if="user && user.photo" :src="user.photo" class="avatar"/>
                                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                        </el-upload>
                                        <div class="profile-detail">
                                            <div class="center">
                                                <h5 class="mr-1">
                                                    {{user.username}}
                                                </h5>
                                                <h6 :class="{'text-cyan':user.sex ==='女','text-blue':user.sex === '男'}">
                                                    {{user.sex}}
                                                </h6>
                                            </div>
                                            <h6>
                                                {{user.describeWord}}
                                            </h6>
                                            <p>
                                                <a href="#">
                                                    {{user.email}}
                                                </a>
                                            </p>
                                        </div>
                                        <a href="#" class="btn btn-primary" @click.stop.prevent="logOut">注销</a>
                                    </div>
                                    <div class="cover-container text-center" v-if="!user">
                                        <a href="#" class="btn btn-primary"
                                           @click.stop.prevent="logIn">登录</a>
                                        <a class="ml-4" href="#"></a>
                                        <a href="#" class="btn btn-primary" @click.stop.prevent="Register">注册</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="nav-item nav-icon search-content" :class="{'show':autoSearchShow}">
                    <a href="#" class="search-toggle rounded" id="dropdownSearch"
                       @click="autoSearchShow = !autoSearchShow">
                        <i class="ri-search-line">
                        </i>
                    </a>
                    <div class="iq-search-bar iq-sub-dropdown dropdown-menu"
                         :class="{'show':autoSearchShow}"
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
                <li class="nav-item nav-icon dropdown" :class="{'show':helpShow}">
                    <a href="#" class="search-toggle dropdown-toggle" id="dropdownMenuButton01"
                       @click.stop.prevent="helpShow = !helpShow">
                        <i class="ri-question-line">
                        </i>
                    </a>
                    <div class="iq-sub-dropdown dropdown-menu" :class="{'show':helpShow}"
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
                <li class="nav-item nav-icon dropdown" :class="{'show':settingShow}">
                    <a href="#" class="search-toggle dropdown-toggle" id="dropdownMenuButton02"
                       @click="settingShow = !settingShow">
                        <i class="ri-settings-3-line"></i>
                    </a>
                    <div class="iq-sub-dropdown dropdown-menu" :class="{'show':settingShow}"
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
            </ul>
        </div>
    </div>
</template>

<script>
    import {beforeUserPhotoUpload, photoUploadUrl} from "../../../fn/user";
    import AlertMessege from "../../msg/AlertMessage";

    export default {
        name: "UserCard",
        components: {AlertMessege},
        data() {
            return {
                userCardShow: false,
                helpShow: false,
                settingShow: false,
                autoBarShow: false,
                autoSearchShow: false,
                headers: {
                    token: localStorage.getItem('token'),
                },
                alertMsg: {
                    show: false,
                    showTime: -1,
                    type: "error",
                    closeBtn: true,
                    msg: "this is a test msg!"
                }
            }
        },
        computed:{
            photoUploadUrl(){
                return photoUploadUrl();
            }
        },
        methods: {
            logOut() {
                this.$store.commit('logOut');
                this.user = null;
                this.$router.push("/index");
            },
            logIn() {
                this.$router.push("/login")
            },
            Register() {
                this.$router.push('/register');
            },
            changeDark() {
                this.$store.commit('changeDark');
            },
            beforeUserPhotoUpload(file) {
                beforeUserPhotoUpload(this, file);
            },
            userPhotoUploadSuccess(response, file, fileList) {
                if (response.status === 200){
                    this.$emit("updatePhoto",response.data);
                    this.showMsg(response.msg,2000,"success");
                }else {
                    this.showMsg(response.msg,2000,"error");
                }
            },
            userPhotoUploadError(response) {
                console.log("error", response);
            },
            showMsg(msg, showTime, type) {
                this.alertMsg.show = false;
                this.alertMsg.msg = msg;
                this.alertMsg.showTime = showTime;
                this.alertMsg.type = type;
                this.alertMsg.show = true;
            }
        },
        props: {
            user: {
                type: Object,
                default: null
            }
        }
    }
</script>

<style>
    /*
     头像上传
      */
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
</style>