const path = require("path");
let mode = "development";

if (process.env.NODE_ENV === "production") {
  mode = "production";
  console.log("Production");
}
module.exports = {
  mode: mode,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
};
