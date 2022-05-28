<template>
    <div class="iq-search-bar device-search">
        <form>
            <div class="input-prepend input-append">
                <div class="btn-group" :class="{'show':searchListShow}">
                    <label class="dropdown-toggle searchbox" data-toggle="dropdown">
                        <input class="dropdown-toggle search-query text search-input" type="text"
                               placeholder="请在这里输入文件名或类型" @focus="searchListShow = true"
                               @blur="searchListShow = false">
                        <span class="search-replace"></span>
                        <a class="search-link" href="#">
                            <i class="ri-search-line">
                            </i>
                        </a>
                        <span class="caret">
                                        <!--icon-->
                                    </span>
                    </label>
                    <ul class="dropdown-menu" :class="{'show':searchListShow}">
                        <li>
                            <a href="#">
                                <div class="item">
                                    测试一下
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="item">
                                    <i class="far fa-file-pdf bg-info">
                                    </i>PDFs
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="item">
                                    <i class="far fa-file-alt bg-primary">
                                    </i>Documents
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="item">
                                    <i class="far fa-file-excel bg-success">
                                    </i>Spreadsheet
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="item">
                                    <i class="far fa-file-powerpoint bg-danger">
                                    </i>Presentation
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="item">
                                    <i class="far fa-file-image bg-warning">
                                    </i>Photos &amp; Images
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div class="item">
                                    <i class="far fa-file-video bg-info">
                                    </i>Videos
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "searchFileCard",
        data(){
            return{
                searchListShow:false
            }
        },
        props:{
            user:{
                type:Object,
                default:null
            }
        }
    }
</script>

<style scoped>

</style>