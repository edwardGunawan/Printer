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
      MainPrintFrame:'app/components/TopMain_MainPrintFrame.jsx',
      Control: 'app/components/Control.jsx',
      MainTopTabs: 'app/components/TopMain_MainTopTabs.jsx',
      PendingJobs:'app/components/PendingJobs.jsx',
      PrintHistory: 'app/components/PrintHistory.jsx',
      TopTabs: 'app/components/TopTabs.jsx',
      TopDrawer: 'app/components/TopDrawer.jsx',
      TopHeader: 'app/components/TopHeader.jsx',
      TopMain: 'app/components/TopMain.jsx',
      Card: 'app/components/Cards/Card.jsx'
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
