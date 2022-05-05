import {request} from "../axios/factory";

export const openFile = (_this, fid) => {
    request({
        url: "file/fileCheck",
        method: "get",
        params: {
            fid
        }
    }).then(res => {
        if (res.status === 200) {
            if (res.data.isTxt) {
                locationChange(_this,'/fn/textView/' + fid);
            } else if (res.data.isImg) {
                locationChange(_this,'/fn/ImgView/' + fid);
            } else {
                _this.showMsg("无法打开此文件！", 2000, "error");
            }
        } else {
            _this.showMsg("无法读取该文件！", 2000, "error");
        }
    });
};

export const openFolder = (_this, fid) => {
    locationChange(_this,'/myDrive/' + fid);
};

export const openFileOrFolder = (_this, file) => {
    const fid = file.fid;
    if (file.isFolder)
        openFolder(_this, fid);
    else
        openFile(_this, fid);
};

export const locationChange = (_this,locationStr) => {
    _this.$router.push(locationStr).catch(res =>{
        document.location = locationStr;
    });
};
