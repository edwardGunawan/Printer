var webpack = require('webpack');
module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components/LSCard',
      './app/components/Cards',
      './app/components/DMDCard',
      './app/components/ImageCard',
      './app/components/MC',
      './app/components'
    ],
    alias: {
      applicationStyles:'app/Style/app.css',
      DMD: 'app/components/DMDCard/DMD.jsx',
      ImageBox: 'app/components/DMDCard/ImageBox.jsx',
      InputBox: 'app/components/DMDCard/InputBox.jsx',
      ImageRender: 'app/components/DMDCard/ImageRender.jsx',
      Scroll: 'app/components/Scroll.jsx',
      LSList: 'app/components/LSCard/LSList.jsx',
      LS: 'app/components/LSCard/LS.jsx',
      LSButtonsRow: 'app/components/LSCard/LSButtonsRow.jsx',
      Main: 'app/components/Main.jsx',
      MainPrintFrame:'app/components/TopMain_MainPrintFrame.jsx',
      Control: 'app/components/Control.jsx',
      MainTopTabs: 'app/components/TopMain_MainTopTabs.jsx',
      PendingJobs:'app/components/PendingJobs.jsx',
      PrintHistory: 'app/components/PrintHistory.jsx',
      TopTabs: 'app/components/TopTabs.jsx',
      TopDrawer: 'app/components/TopDrawer.jsx',
      TopHeader: 'app/components/TopHeader.jsx',
      TopMain: 'app/components/TopMain.jsx',
      Card: 'app/components/Cards/Card.jsx',
      RadioButton: 'app/components/MC/RadioButton.jsx',
      MCContent:'app/components/MC/MCContent.jsx',
      MCSize: 'app/components/MC/MCSize.jsx',
      MC: 'app/components/MC/MC.jsx',
      MCButton: 'app/components/MC/MCButton.jsx',
      imageSelector: 'public/jqueryPlugins/scripts/jquery.imgareaselect.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  // node: {
  //   fs: "empty"
  // },
  module: {
    loaders:[
      // {test: /\.css$/,loader: "style-loader!css-loader" }, // import css and style-loader
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
