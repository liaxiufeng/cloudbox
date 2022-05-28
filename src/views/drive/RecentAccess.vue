<template>
    <div class="content-page">
        <loading v-show="loading"/>
        <alert-messege v-model="alertMsg.show" v-bind="alertMsg"/>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card card-block card-stretch card-transparent ">
                        <div class="card-header d-flex justify-content-between pb-0">
                            <div class="header-title"><h4 class="card-title">文件</h4></div>
                            <div class="card-header-toolbar d-flex align-items-center">
                                <div class="card-header-toolbar">
                                    <div class="dropdown">
                                        <button type="button" class="btn btn-primary mt-2"
                                                @click="removeRecentAll(false)">
                                            <i class="las la-brush mr-2"></i>清空记录
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-for="(file,index) in recent.files" class="col-lg-3 col-md-6 col-sm-6">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-body image-thumb">
                            <a href="#" @click="openFileOrFolder(file)">
                                <div class="mb-2 text-center p-3 rounded iq-thumb">
                                    <div class="iq-image-overlay"></div>
                                    <img :src="fileIcon(file)"
                                         class="img-fluid">
                                </div>
                                <a href="#" class="folder">
                                    <h5 class="mb-2" :class="file.isHeart ? 'text-danger' : ''">{{file.name}}</h5>
                                    <p class="mb-2">
                                        <i class="lar la-clock mr-2 font-size-20"
                                           :class="file.isHeart? 'text-danger':'text-blue'"></i>{{file.lastUpdateDate}}
                                    </p>
                                </a>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="card card-block card-stretch card-transparent">
                        <div class="card-header d-flex justify-content-between pb-0">
                            <div class="header-title"><h4 class="card-title">文件夹</h4></div>
                            <div class="card-header-toolbar">
                                <div class="dropdown">
                                    <button type="button" class="btn btn-primary mt-2" @click="removeRecentAll(true)">
                                        <i class="las la-brush mr-2"></i>清空记录
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-for="(file,index) in recent.folders" class="col-md-6 col-sm-6 col-lg-3">
                    <div class="card card-block card-stretch card-height">
                        <div class="card-body image-thumb">
                            <a href="#" @click="openFileOrFolder(file)">
                                <div class="mb-2 text-center p-3 rounded iq-thumb">
                                    <div class="iq-image-overlay"></div>
                                    <img :src="fileIcon(file)"
                                         class="img-fluid">
                                </div>
                                <a href="#" class="folder">
                                    <h5 class="mb-2" :class="file.isHeart ? 'text-danger' : ''">{{file.name}}</h5>
                                    <p class="mb-2">
                                        <i class="lar la-clock mr-2 font-size-20"
                                           :class="file.isHeart? 'text-danger':'text-blue'"></i>{{file.lastUpdateDate}}
                                    </p>
                                    <p class="mb-0">
                                        <i class="las la-file-alt mr-2 font-size-20"
                                           :class="file.isHeart? 'text-danger':'text-blue'"></i>
                                        {{file.childrenNumber}}个文件
                                    </p>
                                </a>
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
    import {fileIconBySuffix, removeRecentAll,openFile, openFileOrFolder} from "../../fn/fileAction";

    export default {
        name: "RecentAccess",
        components: {Loading, AlertMessege},
        data() {
            return {
                recent: {
                    files: [],
                    folders: []
                },
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
            fileIcon(file) {
                return fileIconBySuffix(file);
            },
            removeRecentAll(isFolder) {
                removeRecentAll(this, isFolder);
            },
            freshData() {
                this.loading = true;
                this.initRecent();
            },
            initRecent() {
                request({
                    url: "recentOpen/recent"
                }).then(res => {
                    if (res.status === 200) {
                        console.log(res);
                        this.recent.files = res.data.fileRecent;
                        this.recent.folders = res.data.folderRecent;
                        this.loading = false;
                    } else {
                        this.show("访问失败！", 2000, "error");
                    }
                });
            }
        },
        mounted() {
            this.initRecent();
        }
    }
</script>

<style scoped>

</style>