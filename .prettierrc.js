const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 800, // 800换行
};
