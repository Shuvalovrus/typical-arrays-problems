
exports.min = function min (array) {
  if(array === undefined){
    return 0;
  }else if (array.length === 0){
    return 0;
  } else {
    let newArr = array.sort(function (a,b) {
      return a - b;
    })
  return newArr[0];
  }
}

exports.max = function max (array) {
  if(array === undefined){
    return 0;
  }else if (array.length === 0){
    return 0;
  }else {
     let newArr = array.sort(function(a,b){
     return a - b;
})
  return newArr[newArr.length - 1];
  }
}  

exports.avg = function avg (array) {
  if(array === undefined){
    return 0;
  }else if (array.length === 0){
    return 0;
  } else {
    let number = 0;
  for(let i = 0; i < array.length; i++){
    number += array[i];
  }
  return number/array.length;
}
}
