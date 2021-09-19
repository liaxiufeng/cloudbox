export const mutations = {
    changeDark(state){
        state.isDark = !state.isDark;
    },
    setToken (state, token) {
        state.token = token;
        localStorage.setItem('token', token);
    },
    logOut(state){
        state.token = "";
        localStorage.removeItem('token');
    },
    setCutFiles(state,obj){
        state.moveFiles.files = obj.files;
        state.moveFiles.location = obj.location;
        state.moveFiles.isCopy = false;
    },
    setCopyFiles(state,obj){
        state.moveFiles.files = obj.files;
        state.moveFiles.location = obj.location;
        state.moveFiles.isCopy = true;
    }
};