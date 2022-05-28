<template>
    <div class="home">
        <div id="loading" style="display: none;">
            <div id="loading-center"/>
        </div>
        <div class="wrapper">
            <SideBarMenu/>
            <keep-alive>
                <full-screen-nav-bar/>
            </keep-alive>
            <router-view/>
        </div>
        <Footer/>
    </div>
</template>

<script>
    import FullScreenNavBar from "../components/NavBar/FullScreenNavBar";

    export default {
        name: 'FullScreenHome',
        components: {FullScreenNavBar}
    }
</script>

<style>

</style>