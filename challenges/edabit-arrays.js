
function countPosSumNeg(nums) {
  var positive = 0;
  var negative = 0;
  if(nums.length < 1){
    return nums
  }
  for(var i = 0; i < nums.length; i++){
    if(nums[i] > 0) {
      positive += 1;
    } else if( nums[i] < 0){
      negative += nums[i];
    }
  }
  return [positive, negative];
}

function getLastItem(arr) {
  return arr[arr.length - 1]
}

function mergeArrays(a, b) {
  let j = 1, i = 0
  while (i < b.length) {
    a.splice(j, 0, b[i])
    j += 2
    i++
  }
  return a
}

function removeSmallest(arr) {
  if (arr === undefined) return []
  let min = Math.min.apply(null, arr)
  var index = arr.indexOf(min)
  arr.splice(index, 1)
  return arr
  }

function sumTwoSmallestNums(arr) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
        newArr.push(arr[i])
    }
    let min = Math.min.apply(null, arr)
  }
  min = Math.min.apply(null, newArr)
  var index = newArr.indexOf(min)
  newArr.splice(index, 1)
  min2 = Math.min.apply(null, newArr)
  return min + min2
}

function formatPhoneNumber(numbers) {
  var form = [
    '(',
    numbers[0],
    numbers[1],
    numbers[2],
    ')',' ',
    numbers[3],
    numbers[4],
    numbers[5],
    '-',
    numbers[6],
    numbers[7],
    numbers[8],
    numbers[9]
  ];
  var str = form.join();
  return str.replace(/,/g, '');
}

function capMe(arr) {
  var newArray = [];
  var capLet = "";
  var done = []
  var str = arr.join();
  for (var i = 0, j = 0; i < arr.length; i++, j++) {
    newArray.push(arr[i].toLowerCase());
    capLet += (arr[i][0].toUpperCase());
    done.push(newArray[i].replace(newArray[i][0], capLet[i]));
  }
  return done;
}

function minMaxLengthAverage(arr) {
  function add(a,b) {return a+b}
  var ave = (arr.reduce(add, 0)) / arr.length
  var min = Math.min.apply(null, arr)
  var max = Math.max.apply(null, arr)
  return [min, max, arr.length, ave];
}

function findLargestNums(arr) {
  var newArray = []
  for (var i = 0; i < arr.length; i++) {
    newArray.push(Math.max.apply(null, arr[i]))
  }
  return newArray
}

function keysAndValues(obj) {
  var keys = Object.keys(obj)
  var values = Object.values(obj)
  return [keys, values]
}
