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
