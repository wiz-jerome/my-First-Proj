var arr = [0,1,2,3,4,5,6,7,8,9];
for (var i = 65; i < 122; i ++){
  if (i < 97 && i > 90) {
    continue;
  }
  arr.push(String.fromCharCode(i));
}
console.log(arr)
function stochasticFun () {
  var str = ''
  for (var i = 0; i < 6; i ++) {
    var a = arr[Math.floor(Math.random() * arr.length)]
    str += a + '';
  }
  // 画布
  var myCanvas = document.getElementById("canvas");
  // 画笔
  var tex = myCanvas.getContext("2d");
  tex.fillText(str,150,40);

}
stochasticFun()
