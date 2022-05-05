<template>
    <div id="textViewBox">
        <alertMessage v-model="alertMsg.show" v-bind="alertMsg"/>
        <LayOut>
            <select v-model="cmOptions.theme" slot="theme">
                <option selected>default</option>
                <option>solarized dark</option>
                <option>solarized light</option>
                <option v-for="themeTemp in totalThemes">{{themeTemp}}</option>
            </select>
            <select slot="type" v-model="editorType" @change="EditorTypeChange">
                <option v-for="(value,fieldName) in editorTypeDependencies"
                        :value="fieldName">
                    {{fieldName | typeSlice}}
                </option>
            </select>
            <codemirror
                    slot="textEditor"
                    ref="mycode"
                    v-model="curCode"
                    :options="cmOptions"
                    class="code"/>
        </LayOut>
        <div class="center">
            <button type="button" class="btn btn-success mt-2" @click="saveFile" style="padding:10px 20px">保存(ctrl+s)</button>
        </div>
    </div>
</template>

<script>
    import LayOut from "./layout/LayOut";
    import {codemirror} from 'vue-codemirror'
    import {totalThemes, editorTypeDependencies,commonDependencies,execFn,getEditorTypeByFileSuffix} from "./common";
    import {request} from "../../../axios/factory";
    import AlertMessage from "../../msg/AlertMessage";
    commonDependencies();
    //这个值为common.js文件中dependenciesHandler中的函数名
    const fileSuffix = "html";
    const theme = "darcula";
    const curCode= "如果你看到这条消息，说明文件打开失败了！";
    export default {
        name: "TextView",
        data() {
            return {
                curCode,
                editorType:"",
                cmOptions: {
                    mode: "das",
                    theme,
                    readOnly: false,
                    keyMap: "sublime",
                    tabSize: 2,
                    lineWrapping: true,
                    autofocus: true,
                    autoCloseTags: true,
                    //动画参数
                    blastCode: {effect: 2},
                    styleActiveLine: true, // 高亮选中行
                    lineNumbers: true, // 显示行号
                    styleSelectedText: true
                },
                themeImported: ["default", "solarized"],
                editorTypeDependencies,
                totalThemes,
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
            saveFile() {
                const fid = this.$route.params.fid;
                const content = this.curCode;
                const _this = this;
                request({
                    url: "file/txt",
                    params: { fid,content},
                    method: "put"
                }).then(res => {
                    if (res.status === 200){
                        _this.showMsg("保存成功！",2000,"success");
                    }else {
                        _this.showMsg("保存失败！",2000,"error");
                    }
                });
            },
            importThemeDependencies(name) {
                if (!(this.themeImported.includes(name) || name.indexOf(" ") !== -1)) {
                    import ("codemirror/theme/" + name + ".css");
                    this.themeImported.push(name);
                }
            },
            EditorTypeChange(){
                for (let k in editorTypeDependencies){
                    this.$set(this.cmOptions,"mode",execFn(editorTypeDependencies,this.editorType));
                }
            },
            showMsg(msg, showTime, type) {
                this.alertMsg.show = false;
                this.alertMsg.msg = msg;
                this.alertMsg.showTime = showTime;
                this.alertMsg.type = type;
                this.alertMsg.show = true;
            }
        },
        created() {
            const fid = this.$route.params.fid;
            request({
                url: "file/txt",
                params: {fid}
            }).then(res => {
                this.curCode = res;
            });
        },
        mounted() {
            this.importThemeDependencies(this.cmOptions.theme);
            // 设置编辑器语言类型
            this.editorType = getEditorTypeByFileSuffix(fileSuffix);
            this.$set(this.cmOptions,"mode",execFn(editorTypeDependencies,this.editorType));
            document.onkeydown = e => {
                if (e.keyCode === 83 && e.ctrlKey) {
                    e.stopPropagation();
                    e.preventDefault();
                    this.saveFile();
                }
            };
            // let lineCount = this.$refs.mycode.codemirror.lineCount();
            //显示提示
        }, components: {
            AlertMessage,
            codemirror,
            LayOut
        },
        watch: {
            cmOptions: {
                handler(newVal) {
                    this.importThemeDependencies(newVal.theme);
                }, deep: true
            }
        },
        filters: {
            typeSlice(value) {
                return value.slice(0,-4).replace("Plus","++");
            }
        }
    }
</script>

<style>
    #textViewBox{
        width: 100vw;
    }
    .CodeMirror{
        height: 70vh;
        min-height: 30vh;
    }
</style>