<template>
    <div id="confirmBox" class="center" v-show="value">
        <div class="card" id="confirmMessage">
            <strong>{{title}}</strong>
            <form @submit.prevent.stop="confirmSubmit">
                <div class="content">
                    <slot>这是主体部分</slot>
                </div>
                <div class="formActionBox">
                    <button type="submit" class="btn btn-primary">{{confirmText}}</button>
                    <button type="button" class="btn btn-success" @click="confirmCancel">{{cancelText}}</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ConfirmMessage",
        methods: {
            confirmSubmit() {
                this.$emit('input', false);
                this.$emit('submit')
            },
            confirmCancel() {
                this.$emit('input', false);
                this.$emit('cancel')
            }
        },
        props: {
            value: {
                type: Boolean,
                default: true
            },
            title: {
                type: String,
                default: '标题'
            },
            confirmText: {
                type: String,
                default: '确认'
            },
            cancelText: {
                type: String,
                default: '取消'
            }
        }
    }
</script>

<style scoped>
    #confirmBox{
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 900;
        top: 0;
        left: 0;
    }
    #confirmMessage {
        width: 30vw;
        min-height: 30vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 30px;
    }

    .white #confirmMessage {
        box-shadow: 0 0 13px 10px #e2e2e2;
    }

    .dark #confirmMessage {
        box-shadow: 0 0 13px 10px #202023;
    }

    #confirmMessage .formActionBox {
        display: flex;
        justify-content: space-around;
    }

    #confirmMessage .formActionBox button {
        padding-left: 30px;
        padding-right: 30px;
    }

    #confirmMessage .content {
        margin-bottom: 20px;
    }
</style>