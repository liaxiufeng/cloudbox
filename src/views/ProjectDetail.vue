<template>
    <div class="totalBox">
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-primary">
                    <li class="breadcrumb-item">
                        <a href="#" class="text-white" @click.stop.prevent="$router.push('Index')">
                            <i class="ri-home-4-line mr-1 float-left"></i>
                            首页
                        </a>
                    </li>
                    <li class="breadcrumb-item active text-white" aria-current="page">
                        关于我们
                    </li>
                </ol>
            </nav>
        </div>
        <div class="wrapper">
            <div class="mt-5 iq-maintenance">
                <div class="container-fluid p-0">
                    <div class="row no-gutters">
                        <div class="col-sm-12 text-center">
                            <div class="iq-maintenance"><img src="../assets/images/error/02.png" class="img-fluid"
                                                             alt="">
                                <h3 class="mt-4 mb-1">该产品由刘氏集团做技术支持</h3>
                                <p>最终解释权：刘氏集团</p></div>
                        </div>
                    </div>
                </div>
                <div class="container mt-3">
                    <div class="row">
                        <div class="col-lg-4" @click="$router.push('Developer')">
                            <div class="card text-center">
                                <div class="card-body">
                                    <!--<i class="las la-user-tie ri-window-line ri-4x line-height text-primary"></i>-->
                                    <i class="las la-user-tie  la-4x line-height text-primary"></i>
                                    <h5 class="card-title mt-1">我们是谁?</h5>
                                    <p class="mb-0">我们是一支专研技术的团队，致力于给消费者们带来更好的产品。</p></div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card text-center">
                                <div class="card-body">
                                    <!--                                <i class="ri-time-line ri-4x line-height text-primary"></i>-->
                                    <i class="las la-hands-helping la-4x line-height text-primary"></i>
                                    <h5 class="card-title mt-1">申请加入我们</h5>
                                    <p class="mb-0">如果你对本公司旗下产品感兴趣，也希望在团队共事，可以点此申请职位。</p></div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card text-center">
                                <div class="card-body">
                                    <!--                                <i class="ri-information-line ri-4x line-height text-primary"></i>-->
                                    <i class="las la-coins la-4x line-height text-primary"></i>
                                    <h5 class="card-title mt-1">为我们捐款</h5>
                                    <p class="mb-0">如果你愿意为我们公司捐款，我们将无比的感谢你。</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProjectDetail"
    }
</script>

<style scoped>
    .totalBox{
        padding: 3px 15px;
    }
</style>