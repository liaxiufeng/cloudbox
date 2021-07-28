import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/index/Index.vue'
import {request} from "../network/netWork";

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
                name: "MyDrive",
                component: () => import("../views/drive/MyDrive")
            }, {
                path: "recentAccess",
                name: "RecentAccess",
                component: () => import("../views/drive/RecentAccess")
            }, {
                path: "favorite",
                name: "favorite",
                component: () => import("../views/drive/Favorite")
            }, {
                path: "dumpBox",
                name: "DumpBox",
                component: () => import("../views/DumpBox/DumpBox")
            }, {
                path: "userSettings",
                name: "UserSettings",
                component: () => import("../views/user/UserSettings")
            }, {
                path: "userProfile",
                name: "UserProfile",
                component: () => import("../views/user/UserProfile")
            }, {
                path: "userAdd",
                name: "UserAdd",
                component: () => import("../views/user/UserAdd")
            }, {
                path: "userList",
                name: "UserList",
                component: () => import("../views/user/UserList")
            }
        ]
    }, {
        path: "/projectDetail",
        name: "ProjectDetail",
        component: () => import("../views/about/ProjectDetail")
    }, {
        path: "/page404",
        name: "Page404",
        component: () => import("../views/error/Page404")
    }, {
        path: "/page500",
        name: "Page500",
        component: () => import("../views/error/Page500")
    }, {
        path: "/developer",
        name: "Developer",
        component: () => import("../views/about/Developer")
    }, {
        path: "/login",
        name: "Login",
        component: () => import("../views/user/Login")
    }, {
        path: "/register",
        name: "Register",
        component: () => import("../views/user/Register")
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

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
    const excludes = ['/login', '/register', '/index', '/projectDetail', '/developer'];
    if (excludes.includes(to.path)) {
        next();
    } else {
        let token = localStorage.getItem('token');
        request({
            url: '/user'
        }).then(res => {
            res.status === 200 ? next() : next('/login');
        });
    }
});

export default router
