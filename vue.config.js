module.exports = {
    devServer: {
        proxy: 'https://localhost:8888'
    // proxy: {
    //     '/V1': {
    //         target: 'http://localhost:8888',
    //         changeOrigin: true,
    //         pathRewrite: {
    //             '^/V1': ''
    //         }
    //     },
    //     '/V2': {
    //         target: 'https://loclhost:4437',
    //         changeOrigin: true,
    //         pathRewrite: {
    //             '^/V2': ''
    //         }
    //     }
    // }
    }
}