const proxy = require('http-proxy-middleware')
module.exports=function(app){
  app.use(
    proxy.createProxyMiddleware('/api',{
      target:'http://localhost:4000',//服务器地址
      changeOrigin:true,//ture本地会虚拟一个服务器接口
      pathRewrite:{'^/api':''}
    })
  )
}