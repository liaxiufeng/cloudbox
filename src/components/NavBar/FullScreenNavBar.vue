<template>
    <div class="iq-top-navbar fixed">
        <div class="iq-navbar-custom">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
                <div class="iq-navbar-logo d-flex align-items-center justify-content-between">
                    <i class="ri-menu-line wrapper-menu" @click.stop="changeAutoMenuShow"></i>
                    <a href="#" class="header-logo">
                        <img src="../../assets/images/logo.png" class="img-fluid rounded-normal light-logo" alt="logo"
                             v-if="!$store.state.isDark">
                        <img src="../../assets/images/logo-white.png" class="img-fluid rounded-normal darkmode-logo"
                             alt="logo" v-if="$store.state.isDark">
                    </a>
                </div>
                <div class="iq-search-bar device-search">
                    <div>
                        <button type="button" class="btn btn-primary mt-2" @click="$router.back()">
                            <i class="las la-long-arrow-alt-left">
                            </i>返回
                        </button>
                    </div>
                </div>
                <user-card :user="user" @updatePhoto="updatePhoto"/>
            </nav>
        </div>
    </div>
</template>

<script>
    import {request} from "../../axios/factory";
    import UserCard from "./vompomrmts/UserCard";
    import SearchFileCard from "./vompomrmts/SearchFileCard";

    export default {
        name: "NavBar",
        components: {SearchFileCard, UserCard},
        data() {
            return {
                user: null
            }
        },
        methods: {
            changeAutoMenuShow() {
                this.$store.commit('changeAutoMenuShow');
            },
            updatePhoto(photo){
                this.user.photo = photo;
            }
        },
        mounted() {
            request({
                url: '/user'
            }).then(res => {
                this.user = res.data;
            });
        }
    }
</script>

<style>
</style>