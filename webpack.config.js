module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      DMD: 'app/components/DMD.jsx',
      ImageBox: 'app/components/ImageBox.jsx',
      InputBox: 'app/components/InputBox.jsx',
      Scroll: 'app/components/Scroll.jsx',
      LSList: 'app/components/LSList.jsx',
      LS: 'app/components/LS.jsx',
      LSButtonsRow: 'app/components/LSButtonsRow.jsx',
      Main: 'app/components/Main.jsx',
      TopTabsFrame: 'app/components/TopTabsFrame.jsx',
      MainPrintFrame:'app/components/MainPrintFrame.jsx',
      Nav: 'app/components/Nav.jsx',
      Control: 'app/components/Control.jsx',
      MainTopTabs: 'app/components/MainTopTabs.jsx',
      PendingJobs:'app/components/PendingJobs.jsx',
      PrintHistory: 'app/components/PrintHistory.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  node: {
    fs: "empty"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
