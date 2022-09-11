const paths = require("./paths");

module.exports = {
  mode: "production", //프로덕션 모드로 설정하여 최적화 옵션 활성화
  entry: paths.ssrIndexJs,
  target: "node",
  output: {
    path: paths.ssrBuild,
    filename: "server.js",
    chunkFilename: "js/[name].chunk.js",
    publicPath: paths.publicUrlOrPath,
  },
};
