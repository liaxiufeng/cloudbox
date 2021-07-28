<template>
    <div id="alertBox" v-show="value">
        <div id="alertContent" class="alert text-white" :class="typeClass">
            <div class="iq-alert-icon" v-show="iconShow">
                <i :class="iconClass"></i>
            </div>
            <div class="iq-alert-text" id="msgBox">
                <slot>{{msg}}</slot>
            </div>
            <button v-show="closeBtn" @click="$emit('input', false)" type="button" class="close">
                <i class="ri-close-line"></i>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AlertMessege",
        data() {
            return {
                iconShow: true,
                timeoutVar: null
            }
        },
        props: {
            value: {
                type: Boolean,
                default: true
            },
            showTime: {
                type: Number,
                default: -1
            },
            icon: {
                type: String,
                default: "circle"
            },
            closeBtn: {
                type: Boolean,
                default: true
            },
            type: {
                type: String,
                default: "error"
            },
            msg: {
                type: String,
                default: "this is msg!"
            }
        },
        computed: {
            alertClass() {

            },
            iconClass() {
                switch (this.icon) {
                    case "circle":
                        return "ri-information-line";
                    case "triangle":
                        return "ri-alert-line";
                }
                this.iconShow = false;
                return "";
            },
            typeClass() {
                switch (this.type) {
                    case "success":
                        this.iconShow = false;
                        return "bg-success";
                    case "error":
                        return "bg-info";
                }
                this.iconShow = false;
                return "bg-secondary";
            }
        },
        watch: {
            value(newVal) {
                if (this.timeoutVar) clearTimeout(this.timeoutVar);
                if (newVal && this.showTime > 0) {
                    this.timeoutVar = setTimeout(() => {
                        this.$emit('input', false);
                    }, this.showTime);
                }
            }
        }
    }
</script>

<style scoped>
    #alertBox {
        width: 100vw;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 10vh;
        display: flex;
        justify-content: center;
    }

    #alertContent {

    }

    #msgBox {
        max-width: 50vw;
        display: flex;
        flex-wrap: wrap;
        margin-right: 20px;
    }
</style>