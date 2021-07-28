
module.exports = {
    devServer: {
        //配置跨域
        proxy: {
            '/api': {
                target: 'http://localhost:8181/cloudbox',
                changOrigin: true,  //允许跨域
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/api_net': {
                target: 'http://liujun666.xyz:8181/cloudbox',
                changOrigin: true,
                pathRewrite: {
                    '^/api_net': ''
                }
            },
        }
    },
    configureWebpack: {
        resolve: {
            //配置别名
            alias: {
                'assets':"@/assets",
                'components':"@/components",
                'common':"@/common",
                'views':"@/views",
                'network':"@/network"
            }
        }
    }
};