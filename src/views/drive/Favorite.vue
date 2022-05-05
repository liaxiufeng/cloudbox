<template>
    <div class="content-page">
        <loading v-show="loading"/>
        <alert-messege v-model="alertMsg.show" v-bind="alertMsg"/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card card-block card-stretch card-transparent ">
                        <div class="card-header d-flex justify-content-between pb-0">
                            <div class="header-title"><h4 class="card-title">我的收藏夹</h4></div>
                            <div class="card-header-toolbar d-flex align-items-center">
                                <div class="card-header-toolbar">
                                    <div class="dropdown">
                                        <button type="button" class="btn btn-primary mt-2" @click="removeFavoriteAll">
                                            <i class="las la-brush mr-2"></i>
                                            清空收藏
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-for="(file,index) in favoriteFiles" class="col-lg-3 col-md-6 col-sm-6">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-body image-thumb">
                            <a href="#" @click="openFileOrFolder(file)">
                                <div class="mb-4 text-center p-3 rounded iq-thumb">
                                    <div class="iq-image-overlay"></div>
                                    <img :src="fileIcon(file)"
                                         class="img-fluid">
                                </div>
                                <div class="between align-items-center">
                                    <h6 style="max-width: 60%">{{file.name}}</h6>
                                    <div class="center">
                                        <button type="button" class="btn btn-outline-info rounded-sm"
                                            @click.stop="removeFavorite(file)">
                                            <i class="las la-trash-alt iq-arrow-left"></i>
                                            取消收藏
                                        </button>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {request} from "../../axios/factory";
    import AlertMessege from "../../components/msg/AlertMessage";
    import Loading from "../../components/msg/Loading";
    import {openFileOrFolder} from "../../fn/loaction";
    import { fileIconBySuffix, removeFavorite, removeFavoriteAll} from "../../fn/fileAction";

    export default {
        name: "favorite.vue",
        components: {Loading, AlertMessege},
        data() {
            return {
                favoriteFiles:[],
                alertMsg: {
                    show: false,
                    showTime: -1,
                    type: "error",
                    closeBtn: true,
                    msg: "this is a test msg!"
                },
                loading: true
            }
        },
        methods: {
            showMsg(msg, showTime, type) {
                this.alertMsg.show = false;
                this.alertMsg.msg = msg;
                this.alertMsg.showTime = showTime;
                this.alertMsg.type = type;
                this.alertMsg.show = true;
            },
            openFileOrFolder(file) {
                openFileOrFolder(this, file);
            },
            fileIcon(file){
                return fileIconBySuffix(file);
            },
            removeFavorite(file){
                removeFavorite(this,file.fid);
            },
            removeFavoriteAll(){
                removeFavoriteAll(this);
            },
            initFavorite(){
                request({
                    url: "file/heart"
                }).then(res => {
                    this.favoriteFiles = res.data;
                    this.loading = false;
                });
            },
            freshData(){
                this.loading = true;
                this.initFavorite();
            }
        },
        mounted() {
            this.initFavorite();
        }
    }
</script>

<style scoped>

</style>