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
                                <img src="~assets/images/logo-white.png" class="img-fluid rounded-normal darkmode-logo logo"
                                     alt="logo" v-show="$store.state.isDark">
                            </div>
                            <h3 class="mb-3">登录</h3>
                            <form id="loginForm" @submit.prevent="startLogin">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="floating-label form-group">
                                            <input class="floating-input form-control" type="text" placeholder=" " required
                                                   v-model="email">
                                            <label>邮箱</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="floating-label form-group">
                                            <input class="floating-input form-control" type="password" placeholder=" " required
                                                   v-model="password">
                                            <label>密码</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="custom-control custom-checkbox mb-3 text-left">
                                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                                            <label class="custom-control-label" for="customCheck1">一周内免登录</label>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <a href="#" @click.prevent="$router.push('/loginByEmail')" class="text-primary float-right">
                                            忘记密码?
                                        </a>
                                    </div>
                                </div>
                                <div class="around">
                                    <button type="submit" class="btn btn-primary">登录</button>
                                    <button type="button" class="btn btn-success" @click="cancelLogin">取消</button>
                                </div>
                                <p class="mt-3">
                                    还没有账户?
                                    <a href="#" @click.prevent="$router.push('/register')" class="text-primary">去注册</a>
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
    import {login} from "../../fn/user";


    export default {
        name: "Login",

        data() {
            return {
                email: null,
                password: null,
                remember: false,
                alertMsg: {
                    show: false,
                    showTime: -1,
                    type: "error",
                    closeBtn: true,
                    msg: ""
                }
            }
        },
        methods: {
            startLogin() {
                login(this);
            },
            cancelLogin(){
                this.$router.push('/index');
            },
            showMsg(msg, showTime, type) {
                this.alertMsg.show = false;
                this.alertMsg.msg = msg;
                this.alertMsg.showTime = showTime;
                this.alertMsg.type = type;
                this.alertMsg.show = true;
            }
        },
        components: {AlertMessege}
    }
</script>

<style scoped>

</style>