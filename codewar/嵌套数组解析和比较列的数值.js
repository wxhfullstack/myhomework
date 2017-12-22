题目： 统计第一个数值大于55，第二个大于7则显示‘Senior’，否则显示‘Open’
方法一：
function openOrSenior(data){
var results = new Array();
function getArr2ElementNum(arr) {
	for (var i = 0; i < arr.length; i++) {
		if(arr[i][0] >= 55 && arr[i][1] > 7){
			results.push('Senior');
		}else{
			results.push('Open');
		}
	}
}
  getArr2ElementNum(data);
  return results;
}

方法二：//forEach
function openOrSenior(data){
  var result = [];
  data.forEach(function(member) {
    if(member[0] >= 55 && member[1] > 7) {
      result.push('Senior');
    } else {
      result.push('Open');
    }
  })
  return result;
}

要点：
解析嵌套数组
1,第一次用arr[i] 第二次则是arr[i][j]
