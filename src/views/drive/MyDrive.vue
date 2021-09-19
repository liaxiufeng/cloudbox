<template>
    <FileView :loading="loading" :file-data="fileData" :location="location" @fresh="initData" :location-files="locationFiles"/>
</template>

<script>
    import Index from "../index/Index";
    import FileView from "../../components/FileView/FileView";
    import {request} from "../../network/netWork";

    export default {
        name: "MyDrive",
        data() {
            return {
                location: "",
                fileData: [],
                locationFiles: [],
                loading: true
            }
        },
        methods:{
            initData(){
                this.loading = true;
                const fid = this.$route.params.fid || 0;
                request({
                    url: "file/files",
                    params: {fid}
                }).then(res => {
                    if (res.status === 200) {
                        this.fileData = res.data.fileData;
                        this.location = res.data.location;
                        this.locationFiles = res.data.locationFiles;
                        this.loading = false;
                    }
                });
            },

        },
        created() {
            this.initData();
        },
        components: {FileView, Index},
        watch:{
            '$route':'initData'
        },
        inject:["reload"]
    }
</script>