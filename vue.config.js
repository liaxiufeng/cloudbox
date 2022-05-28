module.exports = {
    devServer: {
        //配置跨域
        proxy: {
            '/local_api': {
                target: 'http://localhost:8181',
                changOrigin: true,
                pathRewrite: {
                    '^/local_api': ''
                }
            },
            '/api': {
                target: 'http://47.117.114.242:8181',
                changOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    configureWebpack: {
        resolve: {
            //配置别名
            alias: {
                'assets': "@/assets",
                'components': "@/components",
                'common': "@/common",
                'views': "@/views",
                'network': "@/axios"
            }
        }
    }
};