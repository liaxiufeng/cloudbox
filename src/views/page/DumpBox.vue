<template>
    <div>
        <div style="width:100% ; z-index: inherit;position: relative;margin:0 auto ;" align="center"
             @contextmenu.prevent="rightClick">

            <img src="../../assets/logo.png" style="width: 100%; ">

<!--            <div :style="dialogPos.style" align="center">{{dialogPos.position}}</div>-->

<!--            <div :style="dialogPos.style" align="center"></div>-->

        </div>
        <div v-show="menuVisible">

            <ul id="menu" class="menu">

                <li class="menu__item" style="margin-top: 3px;" @click="">检索1</li>

                <li class="menu__item" @click="">检索2</li>

                <li class="menu__item" @click="">检索3</li>

                <li class="menu__item" @click="">检索4</li>

            </ul>

        </div>
    </div>
</template>

<script>
    export default {
        name: "DumpBox",
        data() {
            return {
                menuVisible: false,
            }
        },

        methods: {
            rightClick(MouseEvent) { // 鼠标右击触发事件

                this.menuVisible = false; // 先把模态框关死，目的是 第二次或者第n次右键鼠标的时候 它默认的是true

                this.menuVisible = true; // 显示模态窗口，跳出自定义菜单栏

                var menu = document.querySelector('#menu');

                menu.style.left = MouseEvent.clientX - 160 + 'px';

                document.addEventListener('click', this.foo); // 给整个document添加监听鼠标事件，点击任何位置执行foo方法

                menu.style.top = MouseEvent.clientY - 100 + 'px'

            }
            ,

            foo() { // 取消鼠标监听事件 菜单栏

                this.menuVisible = false;

                document.removeEventListener('click', this.foo)
                // 要及时关掉监听，不关掉的是一个坑，不信你试试，虽然前台显示的时候没有啥毛病，加一个alert你就知道了

            }
        }
    }
</script>

<style scoped>
    .menu__item {

        display: block;

        line-height: 20px;

        text-align: center;

        /*margin-top: 10px;*/

    }

    .menu {

        height: 85px;

        width: 90px;

        position: absolute;

        border-radius: 10px;

        border: 1px solid #999999;

        background-color: #f4f4f4;

        z-index: 99999;

        padding-inline-start: 0;

    }
</style>