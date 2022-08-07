module.exports = function check(str, bracketsConfig) {

  let b = [];
  let l = str.length;

  bracketsConfig.forEach(el => {
    b.push(el.join(''))
  });

  for (let i = 0; i < l; i++) {
    b.forEach(el => {
      str = str.replace(el, '');
    });
  };
  return str ? false : true;
}
