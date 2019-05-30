var climbStairs = function(n) {
    let result=[1,2]
    if(n===0){
      return 0
    }
    if(n===1){
      return 1
    }
    if(n===2){
      return 2
    }
    for(let i=2;i<=n;i++){
      result[i]=result[i-1]+result[i-2]
    }
    return result[result.length-1]
};