<template>
    <div class="iq-sidebar sidebar-default ">
        <div class="iq-sidebar-logo d-flex align-items-center justify-content-between">
            <div class="header-logo">
                <img src="../../assets/images/logo.png" class="img-fluid rounded-normal light-logo" alt="logo"
                     v-if="!isDark">
                <img src="../../assets/images/logo-white.png" class="img-fluid rounded-normal darkmode-logo"
                     alt="logo" v-if="isDark">
            </div>
            <div class="iq-menu-bt-sidebar">
                <i class="las la-bars wrapper-menu" @click.stop="$store.commit('changeAutoMenuShow')">
                </i>
            </div>
        </div>
        <div class="data-scrollbar" data-scroll="1" data-scrollbar="true" tabindex="-1"
             style="overflow: auto; outline: none;">
            <div class="scroll-content">
                <div class="new-create select-dropdown input-prepend input-append">
                    <div class="btn-group">
                        <label data-toggle="dropdown">
                            <div class="search-query selet-caption">
                                <i class="las la-plus pr-2">
                                </i>Create New
                            </div>
                            <span class="search-replace"></span>
                            <span class="caret"><!--icon--></span>
                        </label>
                        <ul class="dropdown-menu">
                            <li>
                                <div class="item">
                                    <i class="ri-folder-add-line pr-3">
                                    </i>New Folder
                                </div>
                            </li>
                            <li>
                                <div class="item">
                                    <i class="ri-file-upload-line pr-3">
                                    </i>Upload Files
                                </div>
                            </li>
                            <li>
                                <div class="item">
                                    <i class="ri-folder-upload-line pr-3">
                                    </i>Upload Folders
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <nav class="iq-sidebar-menu">
                    <ul id="iq-sidebar-toggle" class="iq-menu">
                        <li :class="{'active':isActive(link)}" v-for="link in menuLinks">
                            <a href="#" class="" @click.stop.prevent="linkClick(link)"
                               :aria-expanded="isOpen(link)">
                                <i :class="link.icon"/>
                                <span>{{link.text}}</span>
                                <i class="las la-angle-right iq-arrow-right arrow-active" v-if="link.hasChild"></i>
                                <i class="las la-angle-down iq-arrow-right arrow-hover" v-if="link.hasChild"></i>
                            </a>
                            <ul v-if="link.hasChild" class="iq-submenu collapse" :class="{'show':isOpen(link)}">
                                <li :class="{'active':isActive(son)}" v-for="son in link.children">
                                    <a href="#" @click.stop.prevent="linkClick(son)">
                                        <i :class="son.icon"/>
                                        <span>{{son.text}}</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div class="sidebar-bottom">
                    <h4 class="mb-3">
                        <i class="las la-cloud mr-2">
                        </i>Storage</h4>
                    <p>17.1 / 20 GB Used</p>
                    <div class="iq-progress-bar mb-3">
              <span class="bg-primary iq-progress progress-1" data-percent="67"
                    style="transition: width 2s ease 0s; width: 67%;">
              </span>
                    </div>
                    <p>75% Full - 3.9 GB Free</p>
                    <a href="#" class="btn btn-outline-primary view-more mt-4">Buy Storage</a>
                </div>
                <div class="p-3">
                </div>
            </div>
            <div class="scrollbar-track scrollbar-track-x" style="display: none;">
                <div class="scrollbar-thumb scrollbar-thumb-x"
                     style="width: 260px; transform: translate3d(0px, 0px, 0px);"></div>
            </div>
            <div class="scrollbar-track scrollbar-track-y" style="display: none;">
                <div class="scrollbar-thumb scrollbar-thumb-y"
                     style="height: 947px; transform: translate3d(0px, 0px, 0px);"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SideBarMenu",
        data() {
            return {
                menuLinks: [
                    {
                        icon: "las la-home iq-arrow-left",
                        text: "首页",
                        path: "/index",
                        hasChild: false,
                        children: []
                    }, {
                        icon: "las la-hdd",
                        text: "我的硬盘",
                        path: {
                            match: /\/myDrive\/\d+/,
                            to: "/myDrive"
                        },
                        hasChild: true,
                        children: [
                            {
                                icon: "las la-stopwatch iq-arrow-left",
                                text: "最近打开",
                                path: "/recentAccess",
                                hasChild: false,
                                children: []
                            }, {
                                icon: "lar la-star",
                                text: "收藏",
                                path: "/favorite",
                                hasChild: false,
                                children: []
                            }
                        ]
                    }, {
                        icon: "las la-id-card",
                        text: "个人中心",
                        path: "/userProfile",
                        hasChild: false,
                        children: []
                    }, {
                        icon: "las la-list-alt",
                        text: "好友列表",
                        path: "/userList",
                        hasChild: false,
                        children: []
                    }, {
                        icon: "las la-bell",
                        text: "消息中心",
                        path: {
                            match: /\/userChat\/\d+/,
                            to: "/userChat"
                        },
                        hasChild: false,
                        children: []
                    }
                ],
                openAble: false
            }
        },
        computed:{
            isDark(){
                return this.$store.state.isDark;
            }
        },
        methods: {
            isActive(link) {
                if (this.isActiveHandler(link)) return true;
                if (link.hasChild) {
                    let flag = false;
                    link.children.forEach((item) => {
                        if (this.isActiveHandler(item)) flag = true;
                    });
                    return flag;
                }
                return false;
            },
            isActiveHandler(link) {
                let routePath = this.$route.path;
                if (link.path instanceof Object) {
                    return link.path.match.test(routePath);
                } else {
                    return link.path === routePath;
                }
            },
            isOpen(link) {
                if (this.isActiveHandler(link)) return this.openAble;
                if (link.hasChild) {
                    let flag = false;
                    link.children.forEach((item) => {
                        if (this.isActiveHandler(item)) {
                            flag = true;
                            this.openAble = true;
                        }
                    });
                    return flag && this.openAble;
                }
                return false;
            },
            linkClick(link) {
                if (!this.isActiveHandler(link)) {
                    let toPath = "";
                    if (link.path instanceof Object) {
                        toPath = link.path.to;
                    } else {
                        toPath = link.path;
                    }
                    this.$router.push(toPath).then(() => {
                        this.openAble = true;
                    });
                } else if (link.hasChild) {
                    this.openAble = !this.openAble;
                }
            }
        }
    }
</script>

<style>

</style>