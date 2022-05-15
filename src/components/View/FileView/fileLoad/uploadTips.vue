<template>
    <div class="upload_box">
        <el-upload
                class="upload-demo"
                ref="upload"
                :action="actionComputed"
                :on-preview="handlePreview"
                :on-success="uploadSuccess"
                :on-error="uploadError"
                :file-list="fileList"
                :auto-upload="false"
                :multiple="false"
                :headers="headers"
                :data="{'parent':fid}"
                list-type="picture-card"
        >
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>

<script>
    import baseURL from "../../../../axios/factory";

    export default {
        name: "uploadTips",
        data() {
            return {
                headers: {
                    token: localStorage.getItem('token'),
                },
                fileList: []
            };
        },
        computed:{
          actionComputed(){
              return baseURL + "file/upload";
          }
        },
        methods: {
            submitUpload() {
                this.$refs.upload.submit();
                this.submit = false;
            },
            handlePreview(file) {
                console.log(file);
            },
            uploadSuccess(response, file, fileList) {
                this.$refs.upload.clearFiles();
                clearTimeout(this.timer);
                this.timer = setTimeout(() => {
                    this.$emit("success",response.msg);
                }, 900);
            },
            uploadError(response) {
                const msg = JSON.parse(response.message).message;
                this.$emit("error", msg, 2000, "error");
            }
        },
        props: {
            fid: {
                type: String,
                default: "0"
            },
            submitAction: {
                type: Boolean,
                default: false
            }
        },
        watch:{
            submitAction(newValue,oldValue){
                if (newValue) this.submitUpload();
            }
        }
    }
</script>

<style>
</style>