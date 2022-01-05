// ESM 방식 (브라우저)
// import autoprefixer from 'autoprefixer'
// export {
//   plugins: [
//     autoprefixer
//   ]
// }

// CommonJS 방식 (nodejs default)
const autoprefixer = require("autoprefixer");

module.exports = {
  plugins: [autoprefixer],
};
