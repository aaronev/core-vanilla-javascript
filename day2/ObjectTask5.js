function multiplyNumeric(obj){
  var x = Object.values(obj);
  var y = Object.keys(obj);
  var newArray = [];
  for (var i = 0; i < x.length; i++) {
    if (x[i] % 1 === 0) {
      newArray.push(x[i] * 2);
    }
    obj[y[i]] = newArray[i];
  }
  return obj;
}
