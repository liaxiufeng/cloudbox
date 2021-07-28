<template>
    <div class="home">
        <div id="loading" style="display: none;">
            <div id="loading-center"/>
        </div>
        <div class="wrapper">
            <SideBarMenu/>
            <keep-alive>
                <NavBar/>
            </keep-alive>
            <router-view/>
        </div>
        <Footer/>
    </div>
</template>

<script>
    export default {
        name: 'Home'
    }
</script>

<style>
</style>