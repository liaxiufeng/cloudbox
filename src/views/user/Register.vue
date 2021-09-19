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
                                    <a href="login" class="text-primary">去登录</a>
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
    import {request, toPage500} from "../../network/netWork";
    import AlertMessege from "../../components/msg/AlertMessage";

    export default {
        name: "Register",
        components: {AlertMessege},
        data() {
            return {
                user: {
                    username: null,
                    email: null,
                    password: null,
                    rePassword: null
                },
                alertMsg: {
                    show: false,
                    showTime: 3000,
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
                if (this.user.username) {
                    request({
                        url: "/register/checkUserName",
                        method: "post",
                        params: {username: this.user.username}
                    }).then(res => {
                        res.status === 200 ? this.showSuccess(res.msg) : this.showError(res.msg);
                    }).catch(toPage500);
                } else {
                    this.showError("用户名不能为空！");
                }
            },
            checkEmail() {
                if (!/^([a-zA-Z]|[0-9])(\w|\-)+@\w+\.[a-zA-Z]{2,4}$/.test(this.user.email)) {
                    this.showError("邮箱格式不正确！");
                } else if (this.user.email) {
                    request({
                        url: "/register/checkEmail",
                        method: "post",
                        params: {email: this.user.email}
                    }).then(res => {
                        res.status === 200 ? this.showSuccess(res.msg) : this.showError(res.msg);
                    }).catch(toPage500);
                } else {
                    this.showError("邮箱不能为空！");
                }
            },
            register() {
                if (!/^([a-zA-Z]|[0-9])(\w|\-)+@\w+\.[a-zA-Z]{2,4}$/.test(this.user.email)) {
                    this.showError("邮箱格式不正确！");
                } else if (this.user.password !== this.user.rePassword) {
                    this.showError("俩次输入密码不一致！");
                } else if (!(/\d+/g.test(this.user.password) &&
                    /[a-zA-Z]+/g.test(this.user.password) &&
                    /^.{6,16}$/g.test(this.user.password))) {
                    this.showError("密码必须是包含数字和字母的6-16位字符！");
                } else {
                    request({
                        url: "register",
                        method: "post",
                        params: this.user
                    }).then(res => {
                        if (res.status === 200) {
                            this.showSuccess("注册成功");
                            setTimeout(() => {
                                this.$router.push("login");
                            }, 200);
                        } else {
                            this.showError(res.msg);
                        }
                    }).catch(e=>{
                        console.log(e);
                    });
                }
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
            }
        }
    }
</script>

<style scoped>

</style>