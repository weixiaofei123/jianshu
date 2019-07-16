const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')//导入在内存中自动生成的index页面的插件
//创建一个插件的实例对象
const htmlPlugin=new HtmlWebpackPlugin({
	template:path.join(__dirname,'./src/index.html'),//源文件
	filename:'index.html'//生成的内存中首页的名称
})

//向外暴露一个大包配置对象； 
module.exports={
	mode:'development',//development production

	performance: {
	hints:false   
 },
	plugins:[
		htmlPlugin
	],
	module:{//第三方模块配置
		rules:[
			{test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/},
			//为css样式表启用模块化+modules
			{test:/\.css$/,use:['style-loader','css-loader']},

			{test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/i,use:['url-loader?limit=8192&name=img/[name]-[hash:5].[ext]','image-webpack-loader']}
		]
	},

	resolve:{
		alias:{
			'@':path.join(__dirname,'./src')
		}
	}
}

// loaders: [
//                     //小于8k的图片编译为base64，大于10k的图片使用file-loader            
//                     'url-loader?limit=8192&name=img/[name]-[hash:5].[ext]',
//                     //图片压缩
//                     'image-webpack-loader'
//                 ]
// &localIdentName=[path][name]-[local]-[hash:5]
// ?modules&localIdentName=[path][name]-[local]-[hash:5]

// {test:/\.css$/,use:['style-loader','css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]']},