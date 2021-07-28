<template>
    <div id="app" :class="darkClass">
        <router-view/>
    </div>
</template>
<script>
    export default {
        computed: {
            darkClass() {
                return this.$store.state.isDark ? 'dark' : 'white';
            }
        }
    }
</script>
<style>
    @import "assets/css/backend.min.css";
    @import "assets/fonts/fontawesome-free/all.min.css";
    @import "assets/fonts/line-awesome/line-awesome.min.css";
    @import "assets/fonts/remixicon/remixicon.css";
    @import "assets/fonts/remixicon/remixicon.css";

    #app {
        min-height: 100vh;
        position: relative;
        z-index: 10;
    }

    .iq-sidebar {
        z-index: 900;
    }

    .content-page {
        min-height: calc(100vh - 55px);
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    .flex {
        display: flex;
    }

    .between {
        display: flex;
        justify-content: space-between;
    }

    .around {
        display: flex;
        justify-content: space-around;
    }

    .center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .viewHide {
        opacity: 0;
    }
</style>
