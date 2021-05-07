const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugins = generateHtmlPlugins('./src/html/views')
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
	entry: ['./src/js/index.js', './src/scss/style.scss'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: './js/bundle.js',
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.s[ac]ss$/i,
				include: path.resolve(__dirname, 'src/scss'),
				use: [
					// fallback to style-loader in development
					process.env.NODE_ENV !== 'production'
						? 'style-loader'
						: MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							url: false,
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.html$/,
				include: path.resolve(__dirname, 'src/html/includes'),
				use: ['raw-loader'],
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(ttf|eot|woff|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				include: path.resolve(__dirname, 'src/fonts'),
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: './css/[name].bundle.css',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: './src/img',
					to: './img',
				},
				{
					from: './src/fonts',
					to: './fonts',
				},
			],
		}),
		new ImageminWebpWebpackPlugin(),
	].concat(htmlPlugins),
	optimization: {
		minimizer: [
			// For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
			// `...`,
			new CssMinimizerPlugin(),
		],
	},
}

function generateHtmlPlugins(templateDir) {
	const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir))
	return templateFiles.map((item) => {
		const parts = item.split('.')
		const name = parts[0]
		const extension = parts[1]
		return new HtmlWebpackPlugin({
			filename: `${name}.html`,
			template: path.resolve(
				__dirname,
				`${templateDir}/${name}.${extension}`
			),
			inject: false,
		})
	})
}
