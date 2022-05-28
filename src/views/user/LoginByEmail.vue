<template>
    <div class="wrapper">
        <alert-messege v-model="alertMsg.show" v-bind="alertMsg"/>
        <section class="login-content">
            <div class="container h-100">
                <div class="row justify-content-center align-items-center height-self-center">
                    <div class="col-md-5 col-sm-12 col-12 align-self-center">
                        <div class="sign-user_card">
                            <img src="~assets/images/logo.png" class="img-fluid rounded-normal light-logo logo" alt="logo"
                                 v-if="!$store.state.isDark">
                            <img src="~assets/images/logo-white.png" class="img-fluid rounded-normal darkmode-logo logo"
                                 alt="logo" v-if="$store.state.isDark">
                            <h3 class="mb-3">邮箱验证</h3>
                            <p>登录成功后请不要忘记在个人中心修改密码哦！</p>
                            <form @submit.prevent="login">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="floating-label form-group">
                                            <input v-model="email" class="floating-input form-control"
                                                type="test" placeholder=" " required>
                                            <label>邮箱</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-8">
                                        <div class="floating-label form-group">
                                            <input v-model="verifierCode" class="floating-input form-control" type="text"
                                                   placeholder=" " required>
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
                                </div>
                                <div class="around">
                                    <button type="submit" class="btn btn-primary">登录</button>
                                    <button type="button" class="btn btn-success" @click="$router.push('login')">取消</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import {loginByEmail, sendMailCode} from "../../fn/user";
    import AlertMessege from "../../components/msg/AlertMessage";

    export default {
        name: "LoginByEmail",
        components: {AlertMessege},
        data(){
            return {
                email:null,
                verifierCode:null,
                emailCodeTimeIndex: 0,
                alertMsg: {
                    show: false,
                    showTime: 2000,
                    type: "error",
                    msg: ""
                }
            }
        },
        methods:{
            sendEmailCode(){
                sendMailCode(this,this.email);
            },
            login(){
                loginByEmail(this,this.email,this.verifierCode);
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