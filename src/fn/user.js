import baseURL, {request} from "../axios/factory";

export const initUser = _this => {
    request({
        url: "user"
    }).then(res => {
        if (res.status === 200) {
            _this.user = res.data;
        }
    });
};

//注册

export const emailRule = /^([a-zA-Z]|[0-9])(\w|\-)+@\w+\.[a-zA-Z]{2,4}$/;
export const passwordRule = password => {
    return /\d+/g.test(password) && /[a-zA-Z]+/g.test(password) && /^.{6,16}$/g.test(password);
};
/*验证码发送最小间隔*/
const verifierMinTimer = 60;

export const register = _this => {
    if (!emailRule.test(_this.user.email)) {
        _this.showError("邮箱格式不正确！");
    } else if (_this.user.password !== _this.user.rePassword) {
        _this.showError("俩次输入密码不一致！");
    } else if (!passwordRule(_this.user.password)) {
        _this.showError("密码必须是包含数字和字母的6-16位字符！");
    } else if (!_this.user.verifierCode) {
        _this.showError("邮箱未验证！");
    } else {
        const user = _this.user;
        request({
            url: "register",
            method: "post",
            params: user
        }).then(res => {
            if (res.status === 200) {
                _this.showSuccess("注册成功");
                setTimeout(() => {
                    _this.$router.push("login");
                }, 200);
            } else {
                _this.showError(res.msg);
            }
        }).catch(e => {
            console.log(e);
        });
    }
};


export const checkMailAndSendCode = _this => {
    const verifierMail = _this.user.email;
    if (emailRule.test(verifierMail)) {
        request({
            url: "/register/checkEmail",
            params: {
                email: verifierMail
            },
            method: "post"
        }).then(res => {
            if (res.status === 200) {
                sendMailCode(_this, verifierMail);
            } else {
                _this.showError(res.msg);
            }
        });
    } else {
        _this.showError("邮箱格式不正确！");
    }
};


export const sendMailCode = (_this, verifierMail) => {
    if (!verifierMail){
        _this.showMsg("邮箱不能为空")
    }else if (!emailRule.test(verifierMail)){
        _this.showMsg("这不是一个正确的邮箱！");
    }else {
        _this.emailCodeTimeIndex = verifierMinTimer;
        _this.emailCodeInterval = setInterval(()=>{
            _this.emailCodeTimeIndex--;
            if (_this.emailCodeTimeIndex === 0) clearInterval(_this.emailCodeInterval);
        },1000);
        request({
            url: "/mail/sendCode",
            params: {
                verifierMail
            }
        });
    }
};

export const checkUserName = _this =>{
    const username = _this.user.username;
    if (username) {
        request({
            url: "/register/checkUserName",
            method: "post",
            params: {username}
        }).then(res => {
            res.status === 200 ? _this.showSuccess(res.msg) : _this.showError(res.msg);
        }).catch(res => {
            console.log(res);
        });
    } else {
        _this.showError("用户名不能为空！");
    }
};

export const checkEmail = _this =>{
    let email = _this.user.email;
    if (!emailRule.test(email)) {
        _this.showError("邮箱格式不正确！");
    } else if (email) {
        request({
            url: "/register/checkEmail",
            method: "post",
            params: {email}
        }).then(res => {
            res.status === 200 ? _this.showSuccess(res.msg) : _this.showError(res.msg);
        }).catch(res => {
            console.log(res);
        });
    } else {
        _this.showError("邮箱不能为空！");
    }
} ;


//登录
export const login = _this => {
    request({
        url:"/login",
        method: 'post',
        params:{
            email: _this.email,
            password: _this.password
        }
    }).then(res => {
        if (res.status === 200){
            _this.$store.commit('setToken',res.data.token);
            _this.$router.push('/index');
        }else {
            _this.showMsg(res.msg,2000,"error");
        }
    });
};

export const verifierEmail =(_this, verifierMail, verifierCode) =>{
    if (!verifierMail){
        _this.showMsg("邮箱不能为空！");
    }else if (!emailRule.test(verifierMail)){
        _this.showMsg("邮箱格式不正确！");
    }else if (!verifierCode){
        _this.showMsg("验证码不能为空！");
    }else {
        request({
            url:"/mail/verifier",
            params:{verifierMail,verifierCode}
        }).then(res => {
            if (res.status === 200){
                _this.showMsg(res.msg,2000,"success");
            }else {
                _this.showMsg(res.msg,2000,"error");
            }
        });
    }
};

export const loginByEmail =(_this, verifierMail, verifierCode) =>{
    if (!verifierMail){
        _this.showMsg("邮箱不能为空！");
    }else if (!emailRule.test(verifierMail)){
        _this.showMsg("邮箱格式不正确！");
    }else if (!verifierCode){
        _this.showMsg("验证码不能为空！");
    }else {
        request({
            url:"/mail/login",
            params:{verifierMail,verifierCode}
        }).then(res => {
            if (res.status === 200){
                _this.$store.commit('setToken',res.data.token);
                _this.$router.push('/index');
            }else {
                _this.showMsg(res.msg,2000,"error");
            }
        });
    }
};



//资料修改
export const updateUserName = (_this, username) => {
    request({
        url: "/user/username",
        params: {
            username
        },
        method: "PUT"
    }).then(res => {
        if (res.status === 500) {
            _this.user.username = res.data;
            _this.showMsg(res.msg, 2000, "error");
        } else if (res.status === 200) {
            _this.showMsg(res.msg, 2000, "success");
        }
    });
};

export const updateEmail = (_this, email) => {
    request({
        url: "/user/email",
        params: {
            email
        },
        method: "PUT"
    }).then(res => {
        if (res.status === 500) {
            _this.user.email = res.data;
            _this.showMsg(res.msg, 2000, "error");
        } else if (res.status === 200) {
            _this.showMsg(res.msg, 2000, "success");
        }
    });
};

export const updateDescribeWord = (_this, describeWord) => {
    request({
        url: "/user/describeWord",
        params: {
            describeWord
        },
        method: "PUT"
    }).then(res => {
        if (res.status === 500) {
            _this.user.describeWord = res.data;
            _this.showMsg(res.msg, 2000, "error");
        } else if (res.status === 200) {
            _this.showMsg(res.msg, 2000, "success");
        }
    });
};

export const updatePassword = (_this, password) => {
    request({
        url: "/user/password",
        params: {
            password
        },
        method: "PUT"
    }).then(res => {
        if (res.status === 200) {
            _this.showMsg(res.msg, 2000, "success");
        } else if (res.status === 500) {
            _this.showMsg(res.msg, 2000, "error");
        }
    });
};

export const updateSex = (_this, sex) => {
    request({
        url: "/user/sex",
        params: {
            sex
        },
        method: "PUT"
    }).then(res => {
        if (res.status === 500) {
            _this.user.sex = res.data;
            _this.showMsg(res.msg, 2000, "error");
        } else if (res.status === 200) {
            _this.showMsg(res.msg, 2000, "success");
        }
    });
};

export const updateBirthday = (_this, birthday) => {
    request({
        url: "/user/birthday",
        params: {
            birthday
        },
        method: "PUT"
    }).then(res => {
        if (res.status === 500) {
            _this.user.birthday = res.data;
            _this.showMsg(res.msg, 2000, "error");
        } else if (res.status === 200) {
            _this.showMsg(res.msg, 2000, "success");
        }
    });
};

export const beforeUserPhotoUpload = (_this, file) => {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        _this.$message.error('上传头像图片大小不能超过 2MB!');
    }
    return isLt2M;
};

export const photoUploadUrl = () => {
    return baseURL + "user/photo";
};