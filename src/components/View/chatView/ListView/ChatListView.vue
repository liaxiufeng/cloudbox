<template>
    <div class="col-lg-4">
        <div class="card card-block card-stretch card-height">
            <div class="card-body" style="min-height: 75vh;">
                <div class="iq-search-bar device-search mb-3">
                    <form>
                        <div class="input-prepend input-append">
                            <div class="btn-group">
                                <label class="dropdown-toggle searchbox" data-toggle="dropdown">
                                    <input class="dropdown-toggle search-query text search-input" type="text"
                                           placeholder="搜索消息记录">
                                    <a class="search-link" href="#">
                                        <i class="ri-search-line"></i>
                                    </a>
                                    <span class="caret"></span>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
                <ul class="list-group userBox" style="height: 60vh;overflow: auto">
                    <li class="list-group-item d-flex justify-content-between align-items-center p-2 pl-4 pr-4"
                        v-for="(item,index) in chatList" :class="isActive(item) ? 'active':''"
                        @click="changeChatView(item.proposer.uid)" @dblclick.prevent>
                        <div class="media mb-0">
                            <img class="align-self-center mr-3 avatar-60 img-fluid rounded"
                                 :src="item.proposer.photo"/>
                            <div class="media-body">
                                <p class="mb-0 mt-1 pt-1 pb-1 font-weight-700">{{item.proposer.username}}</p>
                                <p class="font-size-14"
                                   style="white-space: nowrap;max-width:17em;overflow: hidden;text-overflow: ellipsis;">
                                    {{messageStringify(item.type,item.lastMessage)}}</p>
                            </div>
                        </div>
                        <span class="badge badge-primary badge-pill"
                              v-show="item.notReadNumber > 0">{{item.notReadNumber}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {emojis, messageStringify} from "../../../../fn/chat";
    import {request, timeout} from "../../../../axios/factory";

    export default {
        name: "ChatListView",
        data() {
            return {
                emojis,
                chatList: [],
                chatUserId: null
            }
        },
        methods: {
            messageStringify(type, message) {
                return messageStringify(type, message);
            },
            isActive(item) {
                const isActive = this.chatUserId === item.proposer.uid;
                if (isActive) this.$emit("changeChatUser", item.proposer);
                return isActive;
            },
            changeChatView(uid) {
                if (uid !== parseInt(this.$route.params.uid)){
                    const locationStr = '/userChat/' + uid;
                    this.$router.push(locationStr);
                }
            },
            initData() {
                this.chatUserId = parseInt(this.$route.params.uid);
                request({
                    url: "chat/chatList"
                }).then(res => {
                    if (res.status === 200) {
                        this.chatList = res.data;
                    }
                });
            },
            autoFreshData() {
                clearTimeout(this.autoFreshChatListTimer);
                this.autoFreshChatListTimer = setTimeout(()=>{
                    if (this.chatList.length > 0) {
                        clearInterval(this.freshChatListnterval);
                        this.freshChatListnterval = setInterval(() => {
                            request({
                                url: "chat/chatList/freshData"
                            }).then(res => {
                                if (res.status === 200) {
                                    const data = res.data;
                                    this.chatList.forEach((item1, index) => {
                                        const uid = item1.proposer.uid;
                                        try {
                                            data.forEach((item2, index) => {
                                                if (item2.proposer === uid) {
                                                    item1.lastMessage = item2.lastMessage;
                                                    item1.type = item2.type;
                                                    item1.notReadNumber = item2.notReadNumber;
                                                    throw new Error("结束")
                                                }
                                            })
                                        } catch (e) {}
                                    });
                                }
                            });
                        }, 2000);
                    }
                },timeout);
            }
        },
        mounted() {
            this.initData();
            this.autoFreshData();
        },
        destroyed() {
            clearInterval(this.freshChatListnterval);
            clearTimeout(this.autoFreshChatListTimer);
        },
        watch: {
            '$route'() {
                this.initData();
                this.autoFreshData();
            }
        }
    }
</script>

<style scoped>

</style>