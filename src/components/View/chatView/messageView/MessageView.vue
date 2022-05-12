<template>
    <div class="col-lg-8" v-if="chatUser">
        <div class="row">
            <div class="col-lg-12">
                <div class="card card-block card-stretch card-height">
                    <div class="card-body" style="min-height: 75vh;">
                        <div class="row justify-content-center mb-4 pl-3 pr-3">
                            <div class="col-12 rounded text-center bg-gradient-primary" style="height: 100%">
                                <p class="text-white">{{chatUser.username}}</p>
                            </div>
                        </div>
                        <div class="container-fluid" id="messageContent" style="height: 45vh;overflow: auto;">
                            <div v-for="(item,index) in messageData">
                                <div class="text-center" v-show="showChatTime(index)">
                                    {{item.proposeTime}}
                                </div>
                                <div class="row mb-3"
                                     :class="messageIsSend(item) ? 'justify-content-end':'justify-content-start'">
                                    <div class="col-1" v-if="!messageIsSend(item)">
                                        <img :src="item.proposer.photo" alt=""
                                             class="rounded img-fluid avatar-40 float-right">
                                    </div>
                                    <div class="col-6">
                                        <div class="breadcrumb p-2 pl-3 pr-3 m-0"
                                             style="white-space: pre-wrap;word-break: break-all;"
                                             :class="messageIsSend(item)? 'right':'left'"
                                             :style="messageIsSend(item)? 'float: right':'float: left'">
                                            {{messageStringify(item.type,item.message)}}
                                        </div>
                                    </div>
                                    <div class="col-1" v-if="messageIsSend(item)">
                                        <img :src="item.proposer.photo" alt=""
                                             class="rounded img-fluid avatar-40">
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>
                            <ul class="nav nav-pills mb-2" id="pills-tab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link"
                                       href="#pills-home"
                                       @click.prevent="iconMessageShow=false"
                                       :class="iconMessageShow ? '':'active'">
                                        消息
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"
                                       @click.prevent="iconMessageShow=true"
                                       :class="iconMessageShow ? 'active':''">
                                        表情
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent-2">
                                <div class="tab-pane fade"
                                     :class="iconMessageShow ? '':'active show'">
                                    <div class="row">
                                        <el-input
                                                type="textarea"
                                                class="col-10 messageBox"
                                                :rows="5"
                                                v-model="message"
                                                placeholder="输入你想发送的消息，ctrl+enter快捷发送！">
                                        </el-input>
                                        <div class="col-2 align-items-center">
                                            <button type="button" class="mt-2 btn btn-primary"
                                                    @click="sendMessage(1,message)">
                                                <i class="ri-bill-fill"></i>
                                                发送
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-home"
                                     aria-labelledby="pills-home-tab"
                                     :class="iconMessageShow ? 'active show':''">
                                    <ul>
                                        <li style="float: left" class="font-size-20 p-2"
                                            v-for="(item, index) in emojis" :key="index"
                                            @click="sendMessage(2,index+'')">
                                            {{item}}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {emojis, messageStringify} from "../../../../fn/chat";
    import {request, timeout} from "../../../../axios/factory";

    export default {
        name: "MessageView",
        data() {
            return {
                emojis,
                iconMessageShow: false,
                messageData: [],
                message: "",
                chatUserId: null,
                needScroll: false
            }
        },
        methods: {
            messageStringify(type, message) {
                return messageStringify(type, message);
            },
            showChatTime(index) {
                if (index === 0) return true;
                const startTime = new Date(this.messageData[index - 1].proposeTime);
                const endTime = new Date(this.messageData[index].proposeTime);
                return endTime - startTime > 5 * 60 * 1000;
            },
            messageIsSend(item) {
                return this.chatUserId === item.verifier.uid;
            },
            sendMessage(type, message) {
                if (message && type) {
                    const proposer = {
                        uid: this.user.uid
                    };
                    const verifier = {
                        uid: this.chatUserId
                    };
                    request({
                        url: "chat/message",
                        data: {
                            type, message, proposer, verifier
                        },
                        method: "PUT"
                    }).then(res => {
                        this.message = "";
                        this.initData();
                    });
                }
            },
            initData() {
                const chatUserId = parseInt(this.$route.params.uid);
                this.chatUserId = chatUserId;
                if (chatUserId !== 0) {
                    request({
                        url: "chat/message",
                        params: {
                            chatUserId
                        }
                    }).then(res => {
                        if (res.status === 200) {
                            this.messageData = res.data;
                            this.needScroll = true;
                        }
                    });
                }
            },
            autoFreshData() {
                clearTimeout(this.autoFreshMessageTimer);
                this.autoFreshMessageTimer = setTimeout(()=> {
                    if (this.chatUserId !== 0) {
                        clearInterval(this.freshMessageInterval);
                        this.freshMessageInterval = setInterval(() => {
                            request({
                                url: "chat/message/freshData",
                                params: {
                                    chatUserId: this.chatUserId
                                }
                            }).then(res => {
                                if (res.status === 200) {
                                    let data = res.data;
                                    if (data.length > this.messageData.length){
                                        data.forEach((item, index) => {
                                            const user = this.user;
                                            const chatUser = this.chatUser;
                                            if (this.user.uid === item.proposer) {
                                                item.proposer = user;
                                                item.verifier = chatUser;
                                            }
                                            if (this.user.uid === item.verifier) {
                                                item.verifier = user;
                                                item.proposer = chatUser;
                                            }
                                        });
                                        this.messageData = data;
                                        this.needScroll = true;
                                    }
                                }
                            });
                        }, 1000);
                    }
                },timeout);
            }
        },
        mounted() {
            this.initData();
            document.onkeydown = e => {
                if (e.keyCode === 13 && e.ctrlKey) this.sendMessage(1, this.message);
            };
            this.autoFreshData();
        },
        updated() {
            this.needScroll && this.$nextTick(() => {
                setTimeout(() => {
                    const messageContent = this.$el.querySelector("#messageContent");
                    messageContent.scrollTop = messageContent.scrollHeight;
                    this.needScroll = false;
                }, 50);
            });
        },
        destroyed() {
            clearInterval(this.freshMessageInterval);
            clearTimeout(this.autoFreshMessageTimer);
        },
        watch: {
            '$route'() {
                this.initData();
                this.autoFreshData();
            }
        },
        props: {
            user: {
                type: Object,
                default: null
            },
            chatUser: {
                type: Object,
                default: null
            }
        }
    }
</script>

<style>
    .breadcrumb:before {
        content: "\00a0";
        display: block;
        height: 16px;
        width: 9px;
        position: absolute;
        top: 10px;
    }

    .left:before {
        content: "";
        left: 11px;
        background: #e9ecef;
        -webkit-transform: rotate(163deg) skew(16deg);
    }

    .right:before {
        content: "";
        right: 11px;
        background: #e9ecef;
        -webkit-transform: rotate(24deg) skew(-5deg);
    }

    .dark .left:before, .dark .right:before {
        background: #1d1d1f;
    }
</style>