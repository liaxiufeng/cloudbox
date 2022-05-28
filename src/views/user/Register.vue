<template>
    <div class="wrapper">
        <alert-messege v-model="alertMsg.show" v-bind="alertMsg"/>
        <section class="login-content">
            <div class="container h-100">
                <div class="row justify-content-center align-items-center height-self-center">
                    <div class="col-md-5 col-sm-12 col-12 align-self-center">
                        <div class="sign-user_card">
                            <div v-show="false">
                                <img src="~assets/images/logo.png" class="img-fluid rounded-normal light-logo logo"
                                     alt="logo" v-show="!$store.state.isDark">
                                <img src="~assets/images/logo-white.png"
                                     class="img-fluid rounded-normal darkmode-logo logo"
                                     alt="logo" v-show="$store.state.isDark">
                            </div>
                            <h2 class="mb-3">注册</h2>
                            <form @submit.stop.prevent="register">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="floating-label form-group">
                                            <input v-model="user.username" class="floating-input form-control"
                                                   type="text" placeholder=" " required
                                                   @change.lazy="checkUserName">
                                            <label>用户名</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="floating-label form-group">
                                            <input v-model="user.email" class="floating-input form-control" type="email"
                                                   placeholder=" " required
                                                   @change.lazy="checkEmail">
                                            <label>邮箱</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-8">
                                        <div class="floating-label form-group">
                                            <input v-model="user.verifierCode" class="floating-input form-control" type="text"
                                                   placeholder=" " required @change.lazy="checkEmail">
                                            <label>验证码</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="floating-label form-group">
                                            <button type="button" class="btn btn-outline-primary"
                                                    :disabled="emailCodeTimeIndex > 0"
                                                    @click="sendEmailCode"
                                                >
                                                {{emailCodeTimeIndex === 0 ? '发送验证码' : '验证码('+emailCodeTimeIndex+')'}}
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="floating-label form-group">
                                            <input v-model="user.password" class="floating-input form-control"
                                                   type="password" placeholder=" " required>
                                            <label>密码</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="floating-label form-group">
                                            <input v-model="user.rePassword" class="floating-input form-control"
                                                   type="password" placeholder=" " required>
                                            <label>确认密码</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="custom-control custom-checkbox mb-3 text-left">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1"
                                                   required>
                                            <label class="custom-control-label" for="customCheck1">
                                                我同意使用协议
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div class="around">
                                    <button type="submit" class="btn btn-primary">注册</button>
                                    <button type="button" class="btn btn-success" @click="cancelRegister">取消</button>
                                </div>
                                <p class="mt-3">已有账号？
                                    <a href="#" @click="$router.push('/login')" class="text-primary">去登录</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import AlertMessege from "../../components/msg/AlertMessage";
    import {checkEmail, checkUserName, register, sendMailCode} from "../../fn/user";

    export default {
        name: "Register",
        components: {AlertMessege},
        data() {
            return {
                user: {
                    username: null,
                    email: null,
                    password: null,
                    rePassword: null,
                    verifierCode:null
                },
                emailCodeTimeIndex: 0,
                alertMsg: {
                    show: false,
                    showTime: 2000,
                    type: "error",
                    msg: ""
                }
            }
        },
        created() {
        },
        methods: {
            cancelRegister() {
                this.$router.push('/index');
            },
            checkUserName() {
                checkUserName(this);
            },
            checkEmail() {
                checkEmail(this);
            },
            register() {
                register(this);
            },
            sendEmailCode(){
              sendMailCode(this,this.user.email);
            },
            showError(msg) {
                this.alertMsg.msg = msg;
                this.alertMsg.type = "error";
                this.alertMsg.show = true;
            },
            showSuccess(msg) {
                this.alertMsg.msg = msg;
                this.alertMsg.type = "success";
                this.alertMsg.show = true;
            },
            showMsg(msg, showTime, type) {
                this.alertMsg.show = false;
                this.alertMsg.msg = msg;
                this.alertMsg.showTime = showTime;
                this.alertMsg.type = type;
                this.alertMsg.show = true;
            }
        }
    }
</script>

<style scoped>

</style>