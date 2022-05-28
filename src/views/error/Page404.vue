<template>
    <div class="wrapper">
        <div class="container">
            <div class="row no-gutters height-self-center">
                <div class="col-sm-12 text-center align-self-center">
                    <div class="iq-error position-relative">
                        <img src="~assets/images/error/404.png" class="img-fluid iq-error-img" alt="">
                        <h2 class="mb-0 mt-4">糟糕!页面没有找到.</h2>
                        <p>请求的页面不存在.</p>
                        <a class="btn btn-primary d-inline-flex align-items-center mt-3" href="index">
                            <i class="ri-home-4-line"></i>
                            返回首页
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Page404"
    }
</script>

<style scoped>

</style>