<template>
    <div class="home">
        <div id="loading" style="display: none;">
            <div id="loading-center"/>
        </div>
        <div class="wrapper">
            <keep-alive>
                <full-screen-nav-bar/>
            </keep-alive>
            <div class="content-page" id="contentBox">
                <router-view/>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import FullScreenNavBar from "../components/NavBar/FullScreenNavBar";

    export default {
        name: 'FullScreenHome',
        components: { FullScreenNavBar}
    }
</script>

<style>
    .iq-footer {
        margin-left: 0;
        width: 100vw;
    }

    .wrapper > div {
        width: 100%;
        margin-left: 0;
    }
</style>