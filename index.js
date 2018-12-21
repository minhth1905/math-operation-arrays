function isArray (arr) {
  return arr && arr.constructor === Array;
}

function isFunction(fun) {
  return typeof fun === "function";
}

exports.difference = function(arr1, arr2) {
  var result = [];
  if (!isArray(arr1) || !isArray(arr2)) {
    throw new TypeError("Invalid argument, Please pass proper array argument");
  }
  for(var i = 0; i < arr1.length; i++) {
    var item = arr1[i];
    if(!arr2.includes(item)) {
      result.push(item);
    }
  }
  return result
}

exports.max = function(arr) {
  if(!isArray(arr)) {
    throw new TypeError("Invalid argument, Please pass proper array argument");
  }

  var result = null;
  for(var i = 0; i < arr.length; i++) {
    if(!result || arr[i] > result) result = arr[i];
  }

  return result;
}

exports.min = function(arr) {
  if(!isArray(arr)) {
    throw new TypeError("Invalid argument, Please pass proper array argument");
  }

  var result = null;
  for(var i = 0; i < arr.length; i++) {
    if(!result || arr[i] < result) result = arr[i];
  }

  return result;
}

exports.union = function(arr1, arr2) {
  if(!isArray(arr1) || !isArray(arr2)) {
    throw new TypeError("Invalid argument, Please pass proper array argument");
  }

  var result = [];
  for(var i = 0; i < arr1.length; i++) {
    if(!result.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  for(var i = 0; i < arr2.length; i++) {
    if(!result.includes(arr2[i])) {
      result.push(arr2[i]);
    }
  }

  return result;
}

exports.removeDuplicates = function(arr) {
  if(!isArray(arr)) {
    throw new TypeError("Invalid argument, Please pass proper array argument");
  }

  var result = [];
  for(var i = 0; i < arr.length; i++) {
    if(!result.includes(arr[i])) result.push(arr[i]);
  }

  return result;
}
