<template>
    <div class="content-page">
        <loading v-show="loading"/>
        <AlertMessege v-model="alertMsg.show" v-bind="alertMsg"/>
        <confirm-message v-model="addRelationForm.show" @submit="addRelation(addRelationForm.searchStr)"
                         title="添加好友">
            <el-input placeholder="id/用户名/邮箱" v-model="addRelationForm.searchStr"/>
        </confirm-message>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                        <div class="card-header d-flex justify-content-between">
                            <div class="header-title"><h4 class="card-title">我的好友</h4></div>
                        </div>
                        <div class="card-body" style="min-height: 65vh">
                            <div class="row justify-content-between">
                                <div class="col-sm-6 col-md-6">
                                    <div id="user_list_datatable_info" class="dataTables_filter">
                                        <form class="mr-3 position-relative" @submit.prevent>
                                            <div class="form-group mb-0">
                                                <input type="text" class="form-control"
                                                       placeholder="id/邮箱/用户名"
                                                       v-model="searchStr"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="col-sm-6 col-md-6">
                                    <div class="user-list-files d-flex">
                                        <a class="bg-primary mr-5" href="#" @click="addRelation(null)">添加好友 </a>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive">
                                <table id="user-list-table" class="table table-striped table-bordered mt-4 " role="grid"
                                       aria-describedby="user-list-page-info">
                                    <thead>
                                    <tr>
                                        <th scope="col">头像</th>
                                        <th scope="col">用户名</th>
                                        <th scope="col">性别</th>
                                        <th scope="col">签名</th>
                                        <th scope="col">邮箱</th>
                                        <th scope="col">账号年龄</th>
                                        <th scope="col">添加时间</th>
                                        <th scope="col">聊天</th>
                                        <th scope="col">删除</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(item,index) in relationShowData">
                                        <td class="text-center">
                                            <img class="rounded img-fluid avatar-40"
                                                                     :src="item.photo"
                                                                     alt="profile"></td>
                                        <td>{{item.username}}</td>
                                        <td>{{item.sex}}</td>
                                        <td>{{item.describeWord}}</td>
                                        <td class="text-blue" :data="item.email">
                                            [email&#160;protected]
                                        </td>
                                        <td>{{item.accountAge}}</td>
                                        <td>{{item.time}}</td>
                                        <td>
                                            <button  type="button" @click="$router.push('/userChat/'+item.uid)"
                                                    class="btn btn-outline-primary rounded-sm">
                                                <i data-v-3382ecbb="" class="las la-bell iq-arrow-left"></i>
                                                发消息
                                            </button>
                                        </td>
                                        <td>
                                            <button data-v-3382ecbb="" type="button"
                                                    class="btn btn-outline-info rounded-sm" @click="deleteRelation(item.rid)">
                                                <i data-v-3382ecbb="" class="las la-trash-alt iq-arrow-left"/>
                                                删除
                                            </button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
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
    import ConfirmMessage from "../../components/msg/ConfirmMessage";

    export default {
        name: "UserList",
        components: {ConfirmMessage, Loading, AlertMessege},
        data() {
            return {
                relationData: [],
                relationShowData: [],
                searchStr:"",
                alertMsg: {
                    show: false,
                    showTime: -1,
                    type: "error",
                    closeBtn: true,
                    msg: "this is a test msg!"
                },
                addRelationForm: {
                    searchStr: null,
                    show: false
                },
                loading:false
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
            freshData(){
                this.loading = true;
                request({
                    url: "/relation/relations",
                }).then(res => {
                    if (res.status === 200) {
                        this.relationData = [];
                        for (let i = 0; i < res.data.length; i++) {
                            let data = JSON.parse(JSON.stringify(res.data[i][1]));
                            data.rid = res.data[i][0];
                            data.time = res.data[i][2];
                            this.relationData.push(data);
                        }
                        this.loading = false;
                    }
                });
            },
            addRelation(searchStr){
                if (searchStr){
                    request({
                        url:"/relation/relation",
                        params:{
                            searchStr
                        },
                        method:"PUT"
                    }).then(res => {
                        if (res.status === 200){
                            this.showMsg(res.msg,2000,"success");
                            this.freshData();
                        }else {
                            this.showMsg(res.msg,2000,"error")
                        }
                    });
                }else {
                    this.addRelationForm.searchStr = "";
                    this.addRelationForm.show = true;
                }
            },
            deleteRelation(rid){
                let data = [];
                data.push(rid);
                request({
                    url: "/relation/relation",
                    data,
                    method:"DELETE"
                }).then(res => {
                    this.showMsg("删除成功！",2000,"success");
                    this.freshData();
                }).catch(res =>{
                    this.showMsg("删除好友出错！",2000,"error");
                });
            }
        },
        mounted() {
            this.freshData();
        },
        watch:{
            relationData(newVal,oldVal){
                this.relationShowData = newVal;
            },
            searchStr(newVal,oldVal){
                const searchStr = newVal;
                if (searchStr){
                    request({
                        url: "/relation/search",
                        params:{
                            searchStr
                        }
                    }).then(res => {
                        if (res.status === 200) {
                            let temp = [];
                            for (let i = 0; i < res.data.length; i++) {
                                let data = JSON.parse(JSON.stringify(res.data[i][1]));
                                data.rid = res.data[i][0];
                                data.time = res.data[i][2];
                                temp.push(data);
                            }
                            console.log(temp);
                            this.relationShowData = temp;
                        }
                    });
                }else {
                    this.relationShowData = this.relationData;
                }
            }
        }
    }
</script>

<style scoped>

</style>