<template>
    <div class="content-page">
        <alert-message v-model="alertMsg.show" v-bind="alertMsg"/>
        <confirm-message v-model="confirmTip.show" :title="confirmTip.title" @submit="confirmTip.then">
            <div id="selectsContent">
                <a href="#" v-for="(file,index) in fileData" v-if="select.selects[index]">{{file.name}}</a>
            </div>
        </confirm-message>
        <confirm-message v-model="newFile.show" @submit="finishFileName"
                         :title="newFile.isFolder ? '请输入文件夹名。':'请输入文件名。'">
            <div class="row">
                <div class="col-lg-12">
                    <div class="floating-label form-group">
                        <input class="floating-input form-control" id="fileNameInput"
                               type="text" :placeholder="newFile.isFolder ? '请输入文件夹名':'请输入文件名'"
                               v-model="newFile.name" required>
                    </div>
                </div>
            </div>
        </confirm-message>
        <div id="menu" v-show="menu.menuVisible" x-placement="bottom-end"
             class="dropdown-menu dropdown-menu-right show menuBox" aria-labelledby="dropdownMenuButton2"
             style="position: absolute; will-change: transform; top: 0; left: 300px; transform: translate3d(-140px, 24px, 0px);">
            <a class="dropdown-item" href="#" v-show="select.selectSome" @click="downloadFiles(null)">
                <i class="fas fa-cloud-download-alt mr-2"></i>下载
            </a>
            <a class="dropdown-item" href="#" v-show="select.selectOne" @click="openFile(null)">
                <i class="ri-eye-fill mr-2"></i>打开
            </a>
            <a class="dropdown-item" href="#" v-show="select.selectOne" @click="editFile(null)">
                <i class="ri-pencil-fill mr-2"></i>编辑
            </a>
            <a class="dropdown-item" href="#" v-show="select.selectOne" @click="reNameFile(null)">
                <i class="las la-brush mr-2"></i>重命名
            </a>
            <a class="dropdown-item" href="#" v-show="select.selectSome" @click="deleteFiles(null)">
                <i class="ri-delete-bin-6-fill mr-2"></i>删除
            </a>
            <a class="dropdown-item" href="#">
                <i class="las la-spinner mr-2"></i>刷新
            </a>
            <a class="dropdown-item" href="#" @click.stop.prevent="initFileName(false)">
                <i class="la-plus las mr-2"></i>新建文件
            </a>
            <a class="dropdown-item" href="#" @click.stop.prevent="initFileName(true)">
                <i class="ri-folder-add-line mr-2"></i>新建文件夹
            </a>
            <a class="dropdown-item" href="#">
                <i class="fas fa-cloud-upload-alt mr-2"></i>上传文件
            </a>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="d-flex align-items-center justify-content-between welcome-content mb-3">
                        <div class="navbar-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="#">
                                            <i class="ri-home-4-line mr-1 float-left"></i>
                                            Home
                                        </a>
                                    </li>
                                    <li class="breadcrumb-item" v-for="(path,index) in locationPath"
                                        v-if="(index < locationPath.length - 1) && path.length">
                                        <a href="#">{{path}}</a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        {{locationPath[locationPath.length - 1]}}
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div class="d-flex align-items-center topActionBox">
                            <div class="addActionBox">
                                <button type="button" class="btn btn-secondary mt-2 addFolder"
                                        @click="initFileName(false)">
                                    <i class="las la-plus"></i>文件
                                </button>
                                <button type="button" class="btn btn-secondary mt-2 addFile"
                                        @click="initFileName(true)">
                                    <i class="las la-plus"></i>文件夹
                                </button>
                            </div>
                            <div class="list-grid-toggle mr-4" v-if="false">
                                <div class="card-body">
                                    <button type="button" class="mt-2 btn btn-primary">
                                        <i class="ri-eye-fill mr-1"></i>打开
                                    </button>
                                    <button type="button" class="mt-2 btn btn-success"><i
                                            class="ri-pencil-fill mr-1"></i>编辑
                                    </button>
                                    <button type="button" class="mt-2 btn btn-warning"><i
                                            class="fa fa-arrow-circle-down mr-1"></i>下载
                                        <!--                                        <span class="badge badge-warning">14</span>-->
                                    </button>
                                    <button type="button" class="mt-2 btn btn-info"><i
                                            class="ri-delete-bin-6-fill mr-1"></i>删除
                                    </button>
                                </div>
                            </div>
                            <button type="button" class="mt-2 btn btn-primary center" @click="showGrid = !showGrid">
                                <i :class="showGrid?'ri-layout-grid-line':'ri-list-check'" class="font-size-20"></i>
                                {{showGrid?'表格视图':'列表视图'}}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="(showGrid?'icon-grid':'')+' icon i-grid'">
                <div class="row card card-block card-stretch card-height"
                     style="flex-direction: row;padding: 50px;min-height: 60vh;"
                     @contextmenu.prevent.stop="menuShow(false)">
                    <div class="col-lg-1 col-md-2 col-sm-2" v-for="(file,index) in fileData">
                        <div :class="{'active':select.selects[index]}" class="fileBox"
                             @click="changeSelect(index)" @contextmenu.prevent.stop="menuShow(true,file,index)">
                            <div>
                                <img :src="require('@/assets/images/layouts/file_type/'+switchIconSuffix(file)+'.png')"
                                     class="img-fluid mb-1" alt="images"/>
                            </div>
                            <input type="text" class="fileName dropdown-toggle search-query text search-input"
                                   v-model="file.name" @click.stop/>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="{'icon-grid':showGrid }" class="icon i-list">
                <div class="row" @contextmenu.prevent.stop="menuShow(false)">
                    <div class="col-lg-12">
                        <div class="card card-block card-stretch card-height">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table mb-0 table-borderless tbl-server-info fileContentBox">
                                        <thead>
                                        <tr>
                                            <th scope="col">
                                                <div>
                                                    <button type="button" @click="selectAllClickFn"
                                                            class="mt-2 btn btn-link selectAllBtn"
                                                            :class="select.selectAll?'selectAll':'selectSome'">
                                                        <i class="las la-list-alt"></i>
                                                    </button>
                                                </div>
                                            </th>
                                            <th scope="col">缩略图</th>
                                            <th scope="col">文件名</th>
                                            <th scope="col">最近修改时间</th>
                                            <th scope="col">大小</th>
                                            <th scope="col">操作</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="(file,index) in fileData"
                                            :class="{'active':select.selects[index]}"
                                            @click="changeSelect(index)"
                                            @contextmenu.prevent.stop="menuShow(true,file,index)">
                                            <td>
                                                <input type="checkbox" v-model="select.selects[index]"/>
                                            </td>
                                            <td>
                                                <div class="file_type_box">
                                                    <img class="img-fluid small_img"
                                                         :src="require('@/assets/images/layouts/file_type/'+switchIconSuffix(file)+'.png')">
                                                </div>
                                            </td>
                                            <td>
                                                <input type="text" class="fileName" v-model="file.name" @click.stop>
                                            </td>
                                            <td>{{file.lastUpdateDate}}</td>
                                            <td>{{file.size}}</td>
                                            <td>
                                                <div class="actionBox">
                                                    <button type="button"
                                                            class="btn btn-outline-primary rounded-small mt-2"
                                                            @click="openFile(file)">
                                                        <i class="ri-eye-fill mr-1"></i>
                                                    </button>

                                                    <button type="button"
                                                            class="btn btn-outline-success rounded-small mt-2"
                                                            @click="editFile(file)">
                                                        <i class="ri-pencil-fill mr-1"></i>
                                                    </button>
                                                    <button type="button"
                                                            class="btn btn-outline-warning rounded-small mt-2"
                                                            @click="downloadFiles(file)">
                                                        <i class="fa fa-arrow-circle-down mr-1"></i>
                                                    </button>
                                                    <button type="button"
                                                            class="btn btn-outline-danger rounded-small mt-2"
                                                            @click="deleteFiles(file)">
                                                        <i class="ri-delete-bin-6-fill mr-1"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AlertMessage from "../msg/AlertMessage";
    import ConfirmMessage from "../msg/ConfirmMessage";

    export default {
        name: "FileView",
        components: {ConfirmMessage, AlertMessage},
        data() {
            return {
                typeOrderRule: ["pptx", "pdf", "docx", "xlsx", "txt", "gif", "png", "jpg", "jpeg", "webp", "cur", "ico"],
                showGrid: true,
                menu: {
                    menuVisible: false
                },
                select: {
                    selects: [],
                    selectAll: false,
                    selectOne: false,
                    selectSome: false,
                    lastSelect: null,
                },
                address: "",
                locationPath: [],
                fileData: [],
                keyActions: [
                    {
                        isCtrl: true,
                        isShift: false,
                        isAlt: false,
                        // ctrl + a 65
                        code: 65,
                        then: _this => {
                            _this.ChangeEverySelect.call(_this, !_this.select.selectAll);
                        }
                    }, {
                        isCtrl: true,
                        isShift: false,
                        isAlt: false,
                        // ctrl + v 86
                        code: 86,
                        then: _this => {
                            console.log("粘贴上传");
                        }
                    }
                ],
                newFile: {
                    isFolder: null,
                    name: null,
                    show: null
                },
                upLoad: {
                    show: false,
                    files: null,
                    isOne: null
                },
                downLoad: {
                    show: false
                },
                confirmTip: {
                    show: false,
                    title: '标题',
                    then: () => console.log("确认")
                },
                alertMsg: {
                    show: false,
                    showTime: -1,
                    type: "error",
                    closeBtn: true,
                    msg: "this is a test msg!"
                }
            }
        },
        methods: {
            //获取数据
            getFileData() {
                var temp = {
                    address: "/workspace/ssm_crud",
                    fileData: [
                        {
                            fid: '1',
                            name: "src",
                            isFolder: true,
                            isHeart: true,
                            isLock: false,
                            size: "789kb",
                            lastUpdateDate: "2020-9-13 12:23:09"
                        }, {
                            fid: '2',
                            name: "webApp",
                            isFolder: true,
                            isHeart: false,
                            isLock: false,
                            size: "678kb",
                            lastUpdateDate: "2020-9-12 12:23:09"
                        }, {
                            fid: '2',
                            name: "empty",
                            isFolder: true,
                            isHeart: false,
                            size: "0kb",
                            lastUpdateDate: "2020-9-12 12:23:09"
                        }, {
                            fid: '3',
                            name: "readMe.md",
                            isFolder: false,
                            size: "20kb",
                            lastUpdateDate: "2020-9-15 12:23:09"
                        }, {
                            fid: '4',
                            name: "演示文档.pptx",
                            isFolder: false,
                            size: "20kb",
                            lastUpdateDate: "2020-9-15 12:22:09"
                        }, {
                            fid: '5',
                            name: "数据表格.xlsx",
                            isFolder: false,
                            size: "20kb",
                            lastUpdateDate: "2020-9-9 12:23:09"
                        }, {
                            fid: '6',
                            name: "数据结构电子版.pdf",
                            isFolder: false,
                            size: "20kb",
                            lastUpdateDate: "2021-7-10 12:23:09"
                        }, {
                            fid: '7',
                            name: "算法与程序设计实现.docx",
                            isFolder: false,
                            size: "20kb",
                            lastUpdateDate: "2021-7-10 12:12:09"
                        }
                    ]
                };
                var addressTemp = temp.address;
                temp.locationPath = addressTemp.split("/");
                return temp;
            },
            orderFn() {
                return {
                    nameRule(obj) {
                        return obj;
                    },
                    typeRule(obj) {
                        return obj;
                    },
                    dateRule(obj) {
                        return obj;
                    },
                    defaultRule(obj) {
                        return obj;
                    }
                }
            },
            switchIconSuffix(file) {
                //识别文件夹
                if (file.isFolder) {
                    if (file.isLock) return "folder-lock";
                    if (file.isHeart) return "folder-heart";
                    if (file.size === "0kb") return "folder_empty";
                    return "folder";
                }
                //识别文件
                let fileName = file.name;
                let suffix = {
                    type_same_name: ["doc", "eps", "config", "gif", "html", "iso", "java", "jar", "jpg", "js", "json",
                        "md", "mp3", "mp4", "pdf", "png", "ppt", "psd", "svg", "txt", "xlsx", "zip"],
                    type_different_name: [
                        {
                            fn: suffix => {
                                let zip_suffix = ["zip", "rar", "7z", "war"];
                                return zip_suffix.includes(suffix)
                            },
                            res: "zip"
                        }, {
                            fn: suffix => {
                                let zip_suffix = ["ppt", "pptx"];
                                return zip_suffix.includes(suffix)
                            },
                            res: "ppt"
                        }, {
                            fn: suffix => {
                                let zip_suffix = ["doc", "docx"];
                                return zip_suffix.includes(suffix)
                            },
                            res: "doc"
                        }, {
                            fn: suffix => {
                                let zip_suffix = ["xlsx", "xls"];
                                return zip_suffix.includes(suffix)
                            },
                            res: "xlsx"
                        }, {
                            fn: suffix => {
                                let zip_suffix = ["config", "vmoptions", "ini"];
                                return zip_suffix.includes(suffix)
                            },
                            res: "config"
                        }, {
                            fn: suffix => {
                                let zip_suffix = ["ico", "gif", "cur", "png", "jpg", "jpeg", "webp"];
                                return zip_suffix.includes(suffix)
                            },
                            res: "img"
                        }
                    ],
                };
                //没有后缀的文件
                let temp = fileName.split(".");
                if (temp.length === 1) return "file";
                //有后缀的文件
                let fileSuffix = temp[temp.length - 1];
                //后缀和识别后图片名一样
                if (suffix.type_same_name.includes(fileSuffix)) return fileSuffix;
                //后缀和识别后图片名不一样
                let res = "file";
                suffix.type_different_name.forEach(item => {
                    if (item.fn(fileSuffix)) res = item.res;
                });
                return res;
            },
            //选中或取消选中
            selectAllClickFn() {
                this.$set(this.select, "selectAll", !this.select.selectAll)
                this.ChangeEverySelect(this.select.selectAll);
            },
            //改变下标对应文件的选中状态
            changeSelect(index) {
                const _this = this;
                if (event.ctrlKey) {
                    this.$set(this.select.selects, index, !this.select.selects[index])
                } else if (event.shiftKey && this.select.lastSelect != null) {
                    let min = Math.min(this.select.lastSelect, index);
                    let max = Math.max(this.select.lastSelect, index);
                    this.select.selects.forEach((item, ind) => {
                        _this.$set(_this.select.selects, ind, ind >= min && ind <= max)
                    })
                } else {
                    let flag = this.select.selects[index];
                    let count = 0;
                    this.select.selects.forEach((item, i) => {
                        item && count++;
                        this.$set(this.select.selects, i, i === index)
                    });
                    if (count === 1 && flag) {
                        this.$set(this.select.selects, index, false);
                        this.$set(this.select, "lastSelect", null);
                    } else {
                        this.$set(this.select, "lastSelect", index);
                    }
                }
            },
            //改变每一个文件的选中状态为flag
            ChangeEverySelect(flag) {
                for (let i = 0; i < this.select.selects.length; i++) {
                    this.$set(this.select.selects, i, flag);
                }
            },
            //左键菜单显示
            menuShow(isFileClick, file, index) {
                //如果文件或文件夹未选中，改变选中状态
                if (isFileClick) {
                    (!this.select.selects[index]) && this.changeSelect(index);
                } else {
                    this.ChangeEverySelect(false);
                }
                // 显示模态窗口，跳出自定义菜单栏
                this.menu.menuVisible = true;
                //根据菜单和屏幕的大小，元素的位置，进行定位
                var menu = document.querySelector('#menu');

                let width = menu.offsetWidth;
                let height = menu.offsetHeight;

                let onBottom = window.innerHeight - event.clientY >= height + 40;
                menu.style.top = (onBottom ? (event.pageY - 30) : (event.pageY - width - 40)) + 'px';
                let onRight = window.innerWidth - event.clientX >= width + 20;
                menu.style.left = (onRight ? (event.clientX + width - 20) : event.clientX) + 'px';
                // 给整个document添加监听鼠标事件，点击任何位置执行foo方法
                document.addEventListener('click', this.menHideByBlur);
            },
            //左键菜单隐藏
            menHideByBlur() { // 取消鼠标监听事件 菜单栏
                this.menu.menuVisible = false;
                document.removeEventListener('click', this.menHideByBlur);
                // 要及时关掉监听，不关掉的是一个坑，不信你试试，虽然前台显示的时候没有啥毛病，加一个alert你就知道了
            },
            //绑定快捷键函数
            keyActionInit() {
                const _this = this;
                document.onkeydown = e => {
                    const code = e.keyCode;
                    _this.keyActions.forEach(item => {
                        item.code === code &&
                        (!item.isCtrl || e.ctrlKey) &&
                        (!item.isShift || e.shiftKey) &&
                        (!item.isAlt || e.altKey) && item.then(_this);
                    });
                }
            },
            //创建文件时输入文件名
            initFileName(isFolder) {
                this.newFile.show = true;
                this.newFile.isFolder = isFolder;
                this.menu.menuVisible = false;
                document.getElementById("fileNameInput").focus();
            },
            //文件名输入完成
            finishFileName() {
                console.log(this.newFile.isFolder ? "新建文件夹" : "新建文件", this.newFile.name);
                this.newFile.show = false;
            },
            activeFile(fileParam) {
                let file = fileParam || null;
                if (!file) {
                    this.fileData.forEach((item, index) => {
                        if (this.select.selects[index]) file = item;
                    });
                }
                return file;
            },
            activeFiles(fileParam) {
                let files = [];
                if (fileParam) {
                    files.push(fileParam)
                } else {
                    this.fileData.forEach((item, index) => {
                        this.select.selects[index] && files.push(item)
                    });
                }
                return files;
            },
            //删除文件
            deleteFiles(fileParam) {
                console.log("删除", this.activeFiles(fileParam));
            },
            //重命名文件
            reNameFile(fileParam) {
                console.log("重命名", this.activeFile(fileParam));
            },
            //编辑文件
            editFile(fileParam) {
                console.log("编辑", this.activeFile(fileParam));
            },
            //打开文件
            openFile(fileParam) {
                console.log("打开", this.activeFile(fileParam));
            },
            //下载文件
            downloadFiles(fileParam) {
                console.log("下载文件", this.activeFiles(fileParam));
            }
        },
        created() {
            let Data = this.orderFn().defaultRule(this.getFileData());
            this.address = Data.address;
            this.locationPath = Data.locationPath;
            this.fileData = Data.fileData;

            for (let i = 0; i < this.fileData.length; i++) {
                this.select.selects[i] = false;
            }
            //阻止页面被选中
            document.querySelectorAll(":not(input)").forEach((item, index) => {
                item.onselectstart = function () {
                    return false;
                }
            });
        },
        mounted() {
            this.keyActionInit();
        },
        watch: {
            select: {
                handler(val) {
                    let count = 0;
                    val.selects.forEach(item => {
                        item && count++;
                    });
                    this.$set(this.select, "selectAll", count === val.selects.length);
                    this.$set(this.select, "selectOne", count === 1);
                    this.$set(this.select, "selectSome", count > 0);
                }, deep: true
            }
        }
    }
</script>

<style>
    .fileContentBox td, .fileContentBox th {
        text-align: center;
    }

    .dark .fileBox.active, .dark .fileBox:hover,
    .dark .fileContentBox tr.active, .dark .fileContentBox tr:hover {
        box-shadow: 0 0 13px 10px #202023;
        border-radius: 8px;
    }

    .white .fileBox:hover, .white .fileBox.active,
    .white .fileContentBox tr.active, .white .fileContentBox tr:hover {
        box-shadow: 0 0 4px 2px #e2e2e2;
        border-radius: 8px;
    }

    .actionBox {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .actionBox button {
        margin-right: 10px;
        line-height: 100%;
        text-align: center;
    }

    .fileContentBox img.small_img {
        max-height: 50px;
    }

    .fileContentBox .file_type_box {
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }

    .list_grid_body {
        padding: 50px;
        min-height: 60vh;
    }

    .fileBox {
        padding: 10px;
    }

    .fileName {
        border: none;
        background: none;
        padding: 2px 10px;
    }

    .white .fileName {
        color: #6c757d;
    }

    .dark .fileName {
        color: #a6a6a6;
    }

    .white .fileName:focus {
        box-shadow: 0 0 4px 2px #e2e2e2;
        border-radius: 8px;
    }

    .dark .fileName:focus {
        box-shadow: 0 0 13px 10px #202023;
        border-radius: 8px;
    }

    .i-grid .fileName {
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 5em;
    }

    .i-list .fileName {
        margin: 0 auto;
        min-width: 3em;
        max-width: 9em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .table-responsive, .card-body {
        overflow: auto;
    }

    #menu {
        box-shadow: none;
        position: absolute;
    }

    .white button.selectAllBtn i {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .white button.selectAllBtn:not(.selectAll) i {
        color: #6c757d;
    }

    button.selectAllBtn.selectAll i {
        color: #8f93f6;
    }

    button.selectAllBtn i:after {
        width: 3em;
    }

    button.selectAllBtn.selectAll i:after {
        content: "全不选";
    }

    button.selectAllBtn.selectSome i:after {
        content: "全选";
    }


    .topActionBox button {
        margin-right: 20px;
    }

    #selectsContent {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    #selectsContent > a {
        padding: 0 2%;
        max-width: 10em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>