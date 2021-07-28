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
    }
};