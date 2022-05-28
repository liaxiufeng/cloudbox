<template>
    <div class="content-page">
        <loading v-show="loading"/>
        <alert-message v-model="alertMsg.show" v-bind="alertMsg"/>
        <confirm-message v-model="newFileForm.show" @submit="finishFileName"
                         :title="newFileForm.isFolder ? '请输入文件夹名。':'请输入文件名。'">
            <div class="row" id="newFileBox">
                <div class="col-lg-12">
                    <div class="floating-label form-group">
                        <input class="floating-input form-control fileNameInput"
                               type="text" :placeholder="newFileForm.isFolder ? '请输入文件夹名':'请输入文件名'"
                               v-model="newFileForm.name" required>
                    </div>
                </div>
            </div>
        </confirm-message>
        <confirm-message v-model="reNameForm.show" @submit="reNameFile(reNameForm.file)"
                         title="更改文件名">
            <div class="row">
                <div class="col-lg-12">
                    <div class="floating-label form-group">
                        <input class="floating-input form-control fileNameInput"
                               type="text" placeholder="请输入新文件名"
                               v-model="reNameForm.file.name" required>
                    </div>
                </div>
            </div>
        </confirm-message>
        <confirm-message v-model="moveFilesForm.show" @submit="pasteFiles(moveFilesForm.files)"
                         :title="moveFilesForm.title">
            <div>
                <div>原路径: <a href="#">{{moveFilesForm.location || 'Home'}}</a></div>
                <div>文件名:</div>
                <div>
                    <div v-for="file in moveFilesForm.files" class="text-green">
                        <a href="#" @click.prevent="loadFile(file,moveFilesForm)">{{file.name}}</a>
                    </div>
                </div>
            </div>
        </confirm-message>
        <confirm-message v-model="moveFilesConflictForm.show" :title="moveFilesConflictForm.title">
            <slot>
                <div>
                    <div v-for="file in moveFilesConflictForm.conflict" class="text-green">
                        <a href="#" @click.prevent="loadFile(file,moveFilesConflictForm)">{{file.name}}</a>
                    </div>
                </div>
            </slot>
            <slot slot="action">
                <button type="button" class="btn btn-primary" @click="pasteFilesConflict(true)">覆盖</button>
                <button type="button" class="btn btn-primary" @click="pasteFilesConflict(false)">忽略</button>
                <button type="button" class="btn btn-success" @click="cancelPaste">取消</button>
            </slot>
        </confirm-message>
        <confirm-message v-model="deleteFilesForm.show"
                         @submit="deleteFiles(deleteFilesForm.files)"
                         :title="deleteFilesForm.title">
            <div v-for="file in deleteFilesForm.files">{{file.name}}</div>
        </confirm-message>
        <confirm-message v-model="resultFilesForm.show"
                         :title="resultFilesForm.title">
            <div>
                <div>
                    <div v-for="file in resultFilesForm.fail">{{file.name}}</div>
                </div>
            </div>
        </confirm-message>
        <confirm-message v-model="upLoadForm.show" :title="upLoadForm.title" confirm-text="上传"
                         @submit="upLoadForm.submitAction=true">
            <upload-tips :fid="fid" @success="uploadFileSuccess" @error="showMsg"
                         :submitAction="upLoadForm.submitAction"/>
        </confirm-message>
        <div id="menu" v-show="menu.show" x-placement="bottom-end"
             class="dropdown-menu dropdown-menu-right show menuBox" aria-labelledby="dropdownMenuButton2"
             style="position: absolute; will-change: transform; top: 0; left: 300px; transform: translate3d(-140px, 24px, 0px);">
            <a class="dropdown-item" href="#" v-show="select.selectOne" @click="openFile(null)">
                <i class="ri-eye-fill mr-2"></i>打开
            </a>
            <!--            <a class="dropdown-item" href="#" v-show="select.selectOne" @click="editFile(null)">-->
            <!--                <i class="ri-pencil-fill mr-2"></i>编辑-->
            <!--            </a>-->
            <a class="dropdown-item" href="#" v-show="select.selectOne" @click="downloadFile">
                <i class="fas fa-cloud-download-alt mr-2"></i>下载
            </a>
            <a class="dropdown-item" href="#" @click="freshData">
                <i class="las la-spinner mr-2"></i>刷新
            </a>
            <a class="dropdown-item" href="#" v-show="select.selectOne" @click="reNameFile(null)">
                <i class="las la-brush mr-2"></i>重命名
            </a>
            <a class="dropdown-item" href="#" v-show="select.selectSome" @click="cutFiles">
                <i class="fas fa-cut mr-2"></i>剪切
            </a>
            <a class="dropdown-item" href="#" v-show="select.selectSome" @click="copyFiles">
                <i class="fas fa-copy mr-2"></i>复制
            </a>
            <a class="dropdown-item" href="#" v-show="haveCopyFiles" @click="pasteFiles">
                <i class="fas fa-paste mr-2"></i>粘贴
            </a>
            <a class="dropdown-item" href="#" v-show="select.selectOne && !activeFile().isHeart" @click="addFavorite">
                <i class="lar la-star mr-2"></i>收藏
            </a>
            <a class="dropdown-item" href="#" v-show="select.selectOne && activeFile().isHeart" @click="removeFavorite">
                <i class="fa fa-star mr-2"></i>取消收藏
            </a>
            <a class="dropdown-item" href="#" v-show="select.selectSome" @click="deleteFiles(null)">
                <i class="ri-delete-bin-6-fill mr-2"></i>删除
            </a>
            <a class="dropdown-item" href="#" @click.stop.prevent="initFileName(false)">
                <i class="la-plus las mr-2"></i>新建文件
            </a>
            <a class="dropdown-item" href="#" @click.stop.prevent="initFileName(true)">
                <i class="ri-folder-add-line mr-2"></i>新建文件夹
            </a>
            <a class="dropdown-item" href="#" @click.stop.prevent="uploadFile">
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
                                        <a href="#"
                                           @click.prevent="$route.path === '/myDrive/0' ? 0 :$router.push('/myDrive/0')">
                                            <i class="ri-home-4-line mr-1 float-left"></i>
                                            Home
                                        </a>
                                    </li>
                                    <li class="breadcrumb-item" v-for="(path,index) in locationFiles"
                                        v-if="(index < locationFiles.length - 1) && path">
                                        <a href="#"
                                           @click.prevent="$router.push('/myDrive/'+path.fid)">{{path.name}}</a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page" v-if="locationFiles.length">
                                        {{locationFiles[locationFiles.length - 1].name}}
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
                                <i :class="showGrid?'ri-list-check':'ri-layout-grid-line'" class="font-size-20"></i>
                                {{showGrid?'列表视图':'表格视图'}}
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
                             @click="changeSelect(index)" @contextmenu.prevent.stop="menuShow(true,file,index)"
                             @dblclick.prevent.stop="openFile(file)"
                        >
                            <div>
                                <img :src="fileIcon(file)"
                                     class="img-fluid mb-1" alt="images"/>
                            </div>
                            <input type="text" class="fileName dropdown-toggle search-query text search-input"
                                   :class="file.isHeart ? 'text-danger' : ''"
                                   v-model="file.name" @change.lazy="reNameFile(file)" @click.stop @dblclick.stop/>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="{'icon-grid':showGrid }" class="icon i-list">
                <div class="row" @contextmenu.prevent.stop="menuShow(false)" style="min-height: 60vh;">
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
                                            <!--                                            <th scope="col">操作</th>-->
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="(file,index) in fileData"
                                            :class="{'active':select.selects[index]}"
                                            @click="changeSelect(index)"
                                            @contextmenu.prevent.stop="menuShow(true,file,index)"
                                            @dblclick.prevent.stop="openFile(file)"
                                        >
                                            <td>
                                                <input type="checkbox" v-model="select.selects[index]"/>
                                            </td>
                                            <td>
                                                <div class="file_type_box">
                                                    <img class="img-fluid small_img"
                                                         :src="fileIcon(file)">
                                                </div>
                                            </td>
                                            <td>
                                                <input type="text" class="fileName" v-model="file.name"
                                                       @change.prevent.lazy="reNameFile(file)"
                                                       @click.stop @dblclick.stop>
                                            </td>
                                            <td>{{file.lastUpdateDate}}</td>
                                            <td>{{file.size}}</td>
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
    import AlertMessage from "../../msg/AlertMessage";
    import ConfirmMessage from "../../msg/ConfirmMessage";
    import Loading from "../../msg/Loading";
    import {request} from "../../../axios/factory";
    import UploadTips from "./fileLoad/uploadTips";
    import {addFavorite, fileIconBySuffix, initKeyAction, removeFavorite,openFileOrFolder} from "../../../fn/fileAction";

    export default {
        name: "FileView",
        components: {UploadTips, Loading, ConfirmMessage, AlertMessage},
        data() {
            return {
                fid: this.$route.params.fid,
                showGrid: true,
                menu: {
                    show: false
                },
                select: {
                    selects: [],
                    selectAll: false,
                    selectOne: false,
                    selectSome: false,
                    lastSelect: null,
                },
                locationSplit: [],
                newFileForm: {
                    isFolder: null,
                    name: null,
                    show: null
                },
                reNameForm: {
                    show: false,
                    file: {
                        name: null
                    }
                },
                moveFilesForm: {
                    show: false,
                    isCopy: true,
                    title: "",
                    location: "",
                    files: []
                },
                moveFilesConflictForm: {
                    show: false,
                    conflict: [],
                    title: ""
                },
                deleteFilesForm: {
                    show: false,
                    title: "",
                    files: []
                },
                resultFilesForm: {
                    show: false,
                    title: "",
                    success: [],
                    fail: []
                },
                upLoadForm: {
                    show: false,
                    title: "",
                    submitAction: false
                },
                downLoadForm: {
                    show: false
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
        computed: {
            haveCopyFiles() {
                const files = this.$store.state.moveFiles.files;
                return files && files.length;
            }
        },
        methods: {
            //根据文件后缀名返回类型
            fileIcon(file) {
                return fileIconBySuffix(file);
            },
            //选中或取消选中
            selectAllClickFn() {
                this.$set(this.select, "selectAll", !this.select.selectAll);
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
            //右键菜单显示
            menuShow(isFileClick, file, index) {
                //如果文件或文件夹未选中，改变选中状态
                if (isFileClick) {
                    (!this.select.selects[index]) && this.changeSelect(index);
                } else {
                    this.ChangeEverySelect(false);
                }
                // 显示模态窗口，跳出自定义菜单栏
                this.menu.show = true;
                //根据菜单和屏幕的大小，元素的位置，进行定位
                const menu = document.querySelector('#menu');

                let width = menu.offsetWidth;
                let height = menu.offsetHeight;

                let onBottom = window.innerHeight - event.clientY >= height + 40;
                menu.style.top = (onBottom ? (event.pageY - 30) : (event.pageY - width - 40)) + 'px';
                let onRight = window.innerWidth - event.clientX >= width + 20;
                menu.style.left = (onRight ? (event.clientX + width - 20) : event.clientX) + 'px';
                // 给整个document添加监听鼠标事件，点击任何位置执行foo方法
                document.addEventListener('click', this.menHideByBlur);
            },
            //右键菜单隐藏
            menHideByBlur() { // 取消鼠标监听事件 菜单栏
                this.menu.show = false;
                document.removeEventListener('click', this.menHideByBlur);
                // 要及时关掉监听，不关掉的是一个坑，不信你试试，虽然前台显示的时候没有啥毛病，加一个alert你就知道了
            },
            //创建文件时输入文件名
            initFileName(isFolder) {
                this.newFileForm.show = true;
                this.newFileForm.isFolder = isFolder;
                this.menu.show = false;
                document.querySelector("#newFileBox .fileNameInput:first-child").focus();
            },
            //文件名输入完成
            finishFileName() {
                console.log(this.newFileForm.isFolder ? "新建文件夹" : "新建文件", this.newFileForm.name);
                const fileName = this.newFileForm.name;
                if (!fileName) return;
                const isFolder = this.newFileForm.isFolder;
                const parent = this.$route.params.fid;
                request({
                    url:"file/createNewFile",
                    params:{
                        isFolder,fileName, parent
                    }
                }).then(res => {
                    this.showMsg("创建文件"+fileName+"成功!",2000,"success");
                    this.freshData();
                }).catch(res => {
                    this.showMsg("创建文件"+fileName+"失败！",2000,"error");
                });
                this.newFileForm.show = false;
            },
            //获取选中的单个文件
            activeFile() {
                let file;
                this.fileData.forEach((item, index) => {
                    if (this.select.selects[index]) file = item;
                });
                return file;
            },
            //获取选中的多个文件
            activeFiles() {
                let files = [];
                this.fileData.forEach((item, index) => {
                    this.select.selects[index] && files.push(item)
                });
                return files;
            },
            //获取选中的多个文件的id
            activeFids() {
                let fids = [];
                this.fileData.forEach((item, index) => {
                    this.select.selects[index] && fids.push(item.fid)
                });
                return fids;
            },
            //file数组转化为fid数组
            filesToFids(fileParam) {
                let fids = [];
                fileParam.forEach(item => {
                    fids.push(item.fid);
                });
                return fids;
            },
            //删除文件
            deleteFiles(files) {
                if (files) {
                    const data = this.filesToFids(files);
                    const url = "file/delete";
                    request({
                        url, data, method: 'delete',
                    }).then(res => {
                        if (res.status === 200) {
                            const success = res.data.success;
                            const fail = res.data.fail;
                            if (fail && fail.length) {
                                this.resultFilesForm.fail = fail;
                                this.resultFilesForm.success = success;
                                this.resultFilesForm.title = "下面这" + fail.length + "文件删除失败！";
                                this.resultFilesForm.show = true;
                            } else {
                                this.showMsg("成功从删除" + success.length + "个文件！", 2000, "success");
                                this.freshData();
                            }
                        } else {
                            this.showMsg("删除文件请求失败!", 2000, "error");
                        }
                    })
                } else {
                    if (this.select.selectSome) {
                        const files = this.activeFiles();
                        this.deleteFilesForm.files = files;
                        this.deleteFilesForm.title = "确认删除这" + files.length + "个文件?";
                        this.deleteFilesForm.show = true;
                    } else {
                        this.showMsg("请先选择任何文件!", 2000, "error");
                    }
                }
            },
            //重命名文件
            reNameFile(fileParam) {
                if (fileParam) {
                    request({
                        url: "file/rename",
                        method: "put",
                        params: {
                            fid: fileParam.fid,
                            newName: fileParam.name
                        }
                    }).then(res => {
                        if (res.status === 200) {
                            this.showMsg(res.msg, 2000, "success");
                        } else {
                            this.showMsg(res.msg, 2000, "error");
                            this.freshData();
                        }
                    });
                } else {
                    if (this.select.selectOne) {
                        this.reNameForm.file = this.activeFile();
                        this.reNameForm.show = true;
                    } else if (this.select.selectSome) {
                        this.showMsg("无法同时给多个文件重命名!", 2000, "error");
                    } else {
                        this.showMsg("还未选中任何文件!", 2000, "error");
                    }
                }
            },
            //打开文件
            openFile(fileParam) {
                if (fileParam) {
                    openFileOrFolder(this, fileParam);
                } else {
                    if (this.select.selectOne) {
                        this.openFile(this.activeFile());
                    } else if (this.select.selectSome) {
                        this.showMsg("不能同时打开多个文件!", 2000, "error");
                    } else {
                        this.showMsg("请先选择一个文件!", 2000, "error");
                    }
                }
            },
            //复制文件
            copyFiles() {
                const files = this.activeFiles();
                this.$store.commit("setCopyFiles", {files, location: this.location});
                this.showMsg(files.length + "个文件已准备复制", 2000, "success");
            },
            //剪切文件
            cutFiles() {
                const files = this.activeFiles();
                this.$store.commit("setCutFiles", {files, location: this.location});
                this.showMsg(files.length + "个文件已准备剪切", 2000, "success");
            },
            //粘贴文件
            pasteFiles(files) {
                if (files && files.length) {
                    const isCopy = this.$store.state.moveFiles.isCopy;
                    const url = "file/move";
                    let data = this.filesToFids(this.$store.state.moveFiles.files);
                    const dest = this.$route.params.fid || 0;
                    request({
                        url,
                        method: "post",
                        params: {
                            dest, isCopy
                        },
                        data
                    }).then(res => {
                        if (res.status === 200) {
                            const fail = res.data.fail;
                            const success = res.data.success;
                            if (fail.length === 0) {
                                this.showMsg("成功" + (isCopy ? "复制" : "剪切") + success.length + "个文件", 4000, "success");
                                this.freshData();
                            } else {
                                this.resultFilesForm.success = success;
                                this.resultFilesForm.fail = fail;
                                this.resultFilesForm.show = true;
                                this.freshData();
                            }
                        } else if (res.status === 300) {
                            const conflict = res.data;
                            this.moveFilesConflictForm.title = "以下" + conflict.length + "个文件已经存在，你希望怎么做？";
                            this.moveFilesConflictForm.conflict = conflict;
                            this.moveFilesConflictForm.show = true;
                        } else {
                            this.showMsg(res.msg, 4000, "error");
                            this.freshData();
                        }
                    });
                } else {
                    const location = this.$store.state.moveFiles.location;
                    const copyFiles = this.$store.state.moveFiles.files;
                    const isCopy = this.$store.state.moveFiles.isCopy;
                    if (copyFiles && copyFiles.length) {
                        if (location === this.location) {
                            this.showMsg("无法在本路径下复制这些文件", 2000, "error");
                            return;
                        }
                        this.moveFilesForm.files = copyFiles;
                        this.moveFilesForm.isCopy = isCopy;
                        this.moveFilesForm.title = (isCopy ? "确认复制" : "确认剪切") + copyFiles.length + "个文件?";
                        this.moveFilesForm.location = location;
                        this.moveFilesForm.show = true;
                    } else {
                        this.showMsg("暂无粘贴文件!", 2000, "error");
                    }
                }
            },
            //当复制存在冲突时，用户选择忽略，覆盖或者取消复制
            pasteFilesConflict(override) {
                const isCopy = this.$store.state.moveFiles.isCopy;
                const dest = this.$route.params.fid || 0;
                let data = this.filesToFids(this.$store.state.moveFiles.files);
                request({
                    url: "file/move/conflict",
                    method: "post",
                    params: {
                        dest, isCopy, override
                    },
                    data
                }).then(res => {
                    this.moveFilesConflictForm.show = false;
                    const success = res.data.success;
                    const fail = res.data.fail;
                    const actionStr = isCopy ? "复制" : "剪切";
                    if (fail.length) {
                        const title = success.length + "个文件" + actionStr + "成功," + "以下" + fail.length + "个文件" + actionStr + "失败";
                        this.resultFilesForm.success = success;
                        this.resultFilesForm.fail = fail;
                        this.resultFilesForm.title = title;
                        this.resultFilesForm.show = true;
                    } else {
                        this.showMsg("成功" + actionStr + success.length + "个文件！", 4000, "success");
                    }
                    if (success.length) {
                        this.freshData();
                    }
                });
            },
            //取消复制
            cancelPaste() {
                this.moveFilesConflictForm.show = false;
            },
            addFavorite(){
                const activeFile = this.activeFile();
                const fid = activeFile.fid;
                addFavorite(this,fid);
            },
            removeFavorite(){
                const activeFile = this.activeFile();
                const fid = activeFile.fid;
                removeFavorite(this,fid);
            },
            //上传文件
            uploadFile() {
                this.upLoadForm.show = true;
                this.menu.show = false;
            },
            //上传文件成功后调用
            uploadFileSuccess(msg) {
                this.freshData();
                this.showMsg(msg, 2000, "success");
            },
            //下载文件
            downloadFile() {
                const file = this.activeFile();
                if (file) {
                    const fileName = file.isFolder ? file.name + ".zip" : file.name;
                    request({
                        url: "file/download",
                        method: "GET",
                        params: {
                            fid: file.fid
                        },
                        responseType: 'blob'
                    }).then(res => {
                        console.log(res);
                        let url = window.URL.createObjectURL(new Blob([res]));
                        let a = document.createElement('a');
                        a.style.display = 'none';
                        a.href = url;
                        a.setAttribute('download', fileName);
                        document.body.appendChild(a);
                        a.click(); //执行下载
                        window.URL.revokeObjectURL(a.href);//释放url
                        document.body.removeChild(a); //释放标签
                    });
                } else {
                    this.showMsg("请先选中一个文件", 2000, "error");
                }
            },
            //初始化路径
            initLocationPath() {
                this.locationSplit = this.location.split("/");
            },
            //初始化文件选中状态
            initSelect() {
                this.select.selects = [];
                for (let i = 0; i < this.fileData.length; i++) {
                    this.select.selects[i] = false;
                }
            },
            //初始化入口
            initFn() {
                this.initLocationPath();
                this.initSelect();
                //绑定快捷键函数
                initKeyAction(this);
            },
            //显示提示消息
            showMsg(msg, showTime, type) {
                this.alertMsg.show = false;
                this.alertMsg.msg = msg;
                this.alertMsg.showTime = showTime;
                this.alertMsg.type = type;
                this.alertMsg.show = true;
            },
            //刷新页面
            freshData() {
                this.$emit("fresh");
            },
            //文件操作时需要确认时，创建对应的确认提示框
            loadFile(file, form) {
                if (file.isFolder) {
                    this.$router.push("/myDrive/" + file.fid);
                }
                form.show = false;
            }
        },
        mounted() {
            //阻止页面被选中
            document.querySelectorAll(":not(input)").forEach(item => {
                item.onselectstart = () => false
            });
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
            },
            loading: {
                handler(val) {
                    if (!val) {
                        this.initFn();
                        this.fid = this.$route.params.fid;
                    }
                }
            }
        },
        props: {
            locationFiles: {
                type: Array,
                default: []
            },
            fileData: {
                type: Array,
                default: []
            },
            location: {
                type: String,
                default: ""
            },
            loading: {
                type: Boolean,
                default: true
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

    .list_grid_body {
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