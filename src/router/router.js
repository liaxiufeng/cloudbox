import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/index/Index.vue'
import {request} from "../axios/factory";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home,
        children: [
            {
                path: "",
                redirect: Index
            }, {
                path: "index",
                name: "Index",
                component: Index
            }, {
                path: "myDrive",
                redirect: "myDrive/0"
            }, {
                path: "myDrive/:fid",
                name: "MyDrive",
                component: () => import("../views/drive/MyDrive")
            }, {
                path: "userChat",
                redirect: "userChat/0"
            }, {
                path: "userChat/:uid",
                name: "UserChat",
                component: () => import("../views/user/UserChat")
            }, {
                path: "recentAccess",
                name: "RecentAccess",
                component: () => import("../views/drive/RecentAccess")
            }, {
                path: "favorite",
                name: "favorite",
                component: () => import("../views/drive/Favorite")
            }, {
                path: "userProfile",
                name: "UserProfile",
                component: () => import("../views/user/UserProfile")
            }, {
                path: "userList",
                name: "UserList",
                component: () => import("../views/user/UserList")
            }
        ]
    },
    {
        path: '/fn',
        component: () => import("../views/FullScreenHome"),
        children: [
            {
                path: "textView/:fid",
                name: "TextView",
                component: () => import("../components/View/textView/TextView")
            },
            {
                path: "imgView/:fid",
                name: "ImgView",
                component: () => import("../components/View/imgView/ImgView")
            }
        ]
    }, {
        path: "/login",
        name: "Login",
        component: () => import("../views/user/Login")
    }, {
        path: "/loginByEmail",
        name: "LoginByEmail",
        component: () => import("../views/user/LoginByEmail")
    }, {
        path: "/register",
        name: "Register",
        component: () => import("../views/user/Register")
    }, {
        path: "/page404",
        name: "Page404",
        component: () => import("../views/error/Page404")
    }, {
        path: "/page500",
        name: "Page500",
        component: () => import("../views/error/Page500")
    }, {
        path: "/500",
        name: "page500",
        component: () => import("../views/error/Page500")
    }, {
        path: "/404",
        name: "page404",
        component: () => import("../views/error/Page404")
    }, {
        path: "*",
        redirect: "/404"
    }
];
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

// ????????????
// ?????? router.beforeEach ??????????????????????????????,????????????????????????
router.beforeEach((to, from, next) => {
    const excludes = ['/login', '/register', '/index', '/projectDetail', '/developer','/loginByEmail'];
    if (excludes.includes(to.path)) {
        next();
    } else {
        request({
            url: '/user'
        }).then(res => {
            res.status === 200 ? next() : next('/login');
        });
    }
});

export default router
