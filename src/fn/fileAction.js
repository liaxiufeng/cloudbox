import {request} from "../axios/factory";


export const openFile = (_this, fid) => {
    request({
        url: "file/fileType",
        method: "get",
        params: {
            fid
        }
    }).then(res => {
        if (res.status === 200) {
            if (res.data.isTxt) {
                _this.$router.powerPush('/fn/textView/' + fid);
            } else if (res.data.isImg) {
                _this.$router.powerPush('/fn/ImgView/' + fid);
            } else {
                _this.showMsg("无法打开此文件！", 2000, "error");
            }
        } else {
            _this.showMsg("无法读取该文件！", 2000, "error");
        }
    });
};

export const openFolder = (_this, fid) => {
    _this.$router.powerPush('/myDrive/' + fid);
};

export const openFileOrFolder = (_this, file) => {
    const fid = file.fid;
    if (file.isFolder)
        openFolder(_this, fid);
    else
        openFile(_this, fid);
};



export const removeRecentAll = (_this, isFolder) => {
    request({
        url: "/recentOpen/recent",
        params: {isFolder},
        method: "DELETE"
    }).then(res => {
        _this.showMsg("清空记录成功！", 2000, "success");
        _this.freshData();
    }).catch(e => {
        _this.showMsg("清空记录失败！", 2000, "error");
    });
};

export const removeFavoriteAll = _this => {
    request({
        url: "/file/heart/all",
        method: "DELETE"
    }).then(res => {
        _this.showMsg("清空收藏成功！", 2000, "success");
        _this.freshData();
    }).catch(e => {
        _this.showMsg("清空收藏失败！", 2000, "error");
    });
};


export const addFavorite = (_this, fid) => {
    request({
        url: "/file/heart",
        params: {
            fid
        },
        method: "PUT"
    }).then(res => {
        _this.showMsg("收藏成功！", 2000, "success");
        _this.freshData();
    }).catch(e => {
        _this.showMsg("收藏失败！", 2000, "error");
    });
};

export const removeFavorite = (_this, fid) => {
    request({
        url: "/file/heart",
        params: {
            fid
        },
        method: "DELETE"
    }).then(res => {
        _this.showMsg("移除收藏成功！", 2000, "success");
        _this.freshData();
    }).catch(e => {
        _this.showMsg("移除收藏失败！", 2000, "error");
    });
};

const keyActions = [
    {
        isCtrl: true,
        isShift: false,
        isAlt: false,
        key: "a",
        then: _this => {
            _this.ChangeEverySelect.call(_this, !_this.select.selectAll);
        }
    }, {
        isCtrl: true,
        isShift: false,
        isAlt: false,
        key: "v",
        then: _this => {
            _this.pasteFiles();
        }
    }, {
        isCtrl: true,
        isShift: false,
        isAlt: false,
        key: "x",
        then: _this => {
            _this.cutFiles();
        }
    }, {
        isCtrl: true,
        isShift: false,
        isAlt: false,
        key: "c",
        then: _this => {
            _this.copyFiles();
        }
    }, {
        isCtrl: false,
        isShift: false,
        isAlt: false,
        key: "Delete",
        then: _this => {
            _this.removeFiles(null);
        }
    }, {
        isCtrl: false,
        isShift: true,
        isAlt: false,
        key: "Delete",
        then: _this => {
            _this.removeFiles(null);
        }
    }

];

export const initKeyAction = _this => {
    document.onkeydown = e => {
        const key = e.key;
        keyActions.forEach(item => {
            item.key === key &&
            (!item.isCtrl || e.ctrlKey) &&
            (!item.isShift || e.shiftKey) &&
            (!item.isAlt || e.altKey) &&
            item.then(_this);
        });
    }
};

export const fileIconBySuffix = file => {
    return require('@/assets/images/layouts/file_type/' + switchIconSuffix(file) + '.png');
};

const switchIconSuffix = file => {
    //识别文件夹
    if (file.isFolder) {
        if (file.isLock) return "folder-lock";
        if (file.isHeart) return "folder-heart";
        if (file.size === "0B") return "folder_empty";
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
};