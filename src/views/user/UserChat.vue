<template>
    <div class="content-page">
        <loading v-show="loading"/>
        <div class="row">
            <chat-list-view @changeChatUser="changeChatUser"/>
            <message-view :user="user" :chatUser="chatUser" @loadFinish="loadFinish" @loadStart="loadStart"/>
        </div>
    </div>
</template>

<script>
    import ChatListView from "../../components/View/chatView/ListView/ChatListView";
    import MessageView from "../../components/View/chatView/messageView/MessageView";
    import {request} from "../../axios/factory";
    import Loading from "../../components/msg/Loading";

    export default {
        name: 'UserChat',
        components: {Loading, MessageView, ChatListView},
        data() {
            return {
                loading: true,
                user: null,
                chatUser: null
            }
        },
        methods: {
            initLocation() {
                this.loading = true;
                request({
                    url: "user"
                }).then(res => {
                    if (res.status === 200) {
                        this.user = res.data;
                        const uid = parseInt(this.$route.params.uid);
                        if (uid === 0 && this.user.lastChat) {
                            const locationStr = "/userChat/" + this.user.lastChat;
                            this.$router.push(locationStr).catch(e => {
                                document.location = locationStr;
                            });
                        }
                    }
                });
            },
            changeChatUser(chatUser) {
                this.chatUser = chatUser;
            },
            loadFinish(){
                this.loading = false;
            },
            loadStart(){
                this.loading = true;
            }
        },
        mounted() {
            this.initLocation();
        }
    }
</script>

<style>
    .circle {
        border-radius: 50%;
    }

    .font-size-my {
        font-size: 26px;
    }
</style>