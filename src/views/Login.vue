<template>
    <div class="wrapper">
        <section class="login-content">
            <div class="container h-100">
                <div class="row justify-content-center align-items-center height-self-center">
                    <div class="col-md-5 col-sm-12 col-12 align-self-center">
                        <div class="sign-user_card">
                            <img :src="require('@/assets/images/logo.png')"
                                class="img-fluid rounded-normal light-logo logo" alt="logo">
                            <img :src="require('@/assets/images/logo-white.png')"
                                 class="img-fluid rounded-normal darkmode-logo logo" alt="logo">
                            <h3 class="mb-3">登录</h3>
                            <div style="min-height: 2em;">
                                <p>Login to stay connected.</p>
                            </div>
                            <form id="loginForm" @submit.prevent="startLogin">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="floating-label form-group">
                                            <input class="floating-input form-control" type="text" placeholder=" " required
                                                v-model="username">
                                            <label>用户名</label>
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
                                        <a href="#" class="text-primary float-right">
                                            忘记密码?
                                        </a>
                                    </div>
                                </div>
                                <div class="around">
                                    <button type="submit" class="btn btn-primary">登录</button>
                                    <button type="button" class="btn btn-success" @click="$router.history.back()">取消</button>
                                </div>
                                <p class="mt-3">
                                    还没有账户?
                                    <a href="#" class="text-primary">去注册</a>
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
    import axios from "axios";

    export default {
        name: "Login",
        data() {
            return {
                username: null,
                password: null,
                remember: false,
                msg:{
                    flag:null,
                    msg:null
                }
            }
        },
        methods: {
            startLogin() {
                axios.get(this.$urlProcessor("login"), {
                    params: {
                        username: this.username,
                        password: this.password
                    }
                }).then(res => {
                    console.log(res);
                });
            }

        }
    }
</script>

<style scoped>

</style>