<template>
    <div class="content-page" id="contentBox">
        <div class="demo-image__placeholder">
            <AlertMessage v-model="alertMsg.show" v-bind="alertMsg"/>
            <div class="block">
                <el-image :src="src">
                    <div slot="placeholder" class="image-slot">
                        加载中<span class="dot">...</span>
                    </div>
                </el-image>
            </div>
        </div>
    </div>
</template>

<script>
    import {request} from "../../../axios/factory";
    import AlertMessage from "../../msg/AlertMessage";

    export default {
        name: "ImgView",
        components: {AlertMessage},
        data() {
            return {
                src:"",
                alertMsg: {
                    show: false,
                    showTime: -1,
                    type: "error",
                    closeBtn: true,
                    msg: "this is a test msg!"
                }
            }
        },
        methods:{
            showMsg(msg, showTime, type) {
                this.alertMsg.show = false;
                this.alertMsg.msg = msg;
                this.alertMsg.showTime = showTime;
                this.alertMsg.type = type;
                this.alertMsg.show = true;
            }
        },
        created() {
            const fid = this.$route.params.fid;
            request({
                url: "file/img",
                params: {fid}
            }).then(res => {
                console.log(res);
                if (res.status === 200){
                    this.src = res.data;
                }else {
                    this.show
                }
            });
        }
    }
</script>

<style>
    .el-image{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .el-image__inner,img.el-image__inner{
        height: 100vh;
        width: auto;
    }
</style>