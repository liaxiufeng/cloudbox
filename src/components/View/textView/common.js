/**
 * 使用说明：
 *
 */

export const totalThemes = ["3024-day", "3024-night", "abbott", "abcdef", "ambiance", "ayu-dark", "ayu-mirage", "base16-dark",
    "bespin", "base16-light", "blackboard", "cobalt", "colorforth", "dracula", "duotone-dark", "duotone-light", "eclipse",
    "elegant", "erlang-dark", "gruvbox-dark", "hopscotch", "icecoder", "isotope", "juejin", "lesser-dark", "liquibyte",
    "lucario", "material", "material-darker", "material-palenight", "material-ocean", "mbo", "mdn-like", "midnight",
    "monokai", "moxer", "neat", "neo", "night", "nord", "oceanic-next", "panda-syntax", "paraiso-dark", "paraiso-light",
    "pastel-on-dark", "railscasts", "rubyblue", "seti", "shadowfox", "solarized", "the-matrix", "tomorrow-night-bright",
    "tomorrow-night-eighties", "ttcn", "twilight", "vibrant-ink", "xq-dark", "xq-light", "yeti", "idea", "darcula", "yonce",
    "zenburn"];

const totalThemes2 = [];

export const commonDependencies = () =>{
    require ('codemirror/lib/codemirror.css');
    require ("codemirror/theme/ambiance.css");
    require ("codemirror/theme/solarized.css");
    //快捷键文件
    require ("codemirror/keymap/sublime.js");
    //气泡动画js
    require ('./js/code-blast');
};

export const editorTypeDependencies = {
    javascriptType() {
        require("codemirror/mode/javascript/javascript");
        return "application/javascript";
    },
    htmlType() {
        require("codemirror/mode/htmlmixed/htmlmixed");
        require("codemirror/addon/edit/closetag");
        return "htmlmixed";
    },
    cssType() {
        /**
         * highlightNonStandardPropertyKeywords: boolean是否突出显示非标准 CSS 属性关键字，例如margin-inline或zoom（默认值：）true。
         */
        //text/css, text/x-scss , text/x-less.
        require("codemirror/mode/css/css");
        return "text/css";
    },
    lessType() {
        //text/css, text/x-scss , text/x-less.
        require("codemirror/mode/css/css");
        return "text/x-less";
    },
    sqlType() {
        require("codemirror/mode/sql/sql");
        return "text/x-mysql";
    },
    javaType() {
        require("codemirror/mode/clike/clike");
        return "text/x-java";
    },
    cType() {
        require("codemirror/mode/clike/clike");
        return "text/x-csrc";
    },
    cPlusType() {
        require("codemirror/mode/clike/clike");
        return "text/x-c++src";
    },
    jsonType() {
        require("codemirror/mode/javascript/javascript");
        return "application/json";
    },
    yamlType(){
        require("codemirror/mode/yaml/yaml");
        return "text/x-yaml";
    },
    pythonType(){
        require("codemirror/mode/python/python");
        return "text/x-python";
    },
    goType(){
        require("codemirror/mode/go/go");
        return "text/x-go";
    },
    dtdType(){
        require("codemirror/mode/dtd/dtd");
        return "application/xml-dtd";
    },
    nginxType(){
        require("codemirror/mode/nginx/nginx");
        return "text/x-nginx-conf";
    },
    phpType(){
        require("codemirror/mode/php/php");
        return "application/x-httpd-php";
    },
    livescriptType(){
        require("codemirror/mode/livescript/livescript");
        return "text/x-livescript";
    },

};

export const execFn = (obj,fnName) => {
    for (let k in obj){
        if (k === fnName) {
            const fn = obj[k];
            return fn.call();
        }
    }
};

export const getEditorTypeByFileSuffix = (fileSuffix) =>{
    const fileSuffixMapping = {
        javascriptType:["js"],
        htmlType:["html","jsp","vue","xml"],
        cssType:["css"],
        lessType:["less"],
        sqlType:["sql"],
        javaType:["java","class"],
        cType:["c"],
        cPlusType:["cpp"],
        jsonType:["json"],
        yamlType:["yaml","yml"],
        pythonType:["py"],
        goType:["go"],
        dtdType:["dtd"],
        nginxType:["conf"],
        phpType:["php"],
        livescriptType:["mlx"],
    };
    for(const k in fileSuffixMapping){
        if (fileSuffixMapping[k].includes(fileSuffix)){
            return k;
        }
    }
    return "javascriptType";
};

