// pages/calc2/clac2.js
Page({
  data:{
  result:"0",
  id1:"history",
  id2:"clear",
  id3:"back",
  id4:"div",
  id5:"num_7",
  id6:"num_8",
  id7:"num_9",
  id8:"mul",
  id9:"num_4",
  id10:"num_5",
  id11:"num_6",
  id12:"sub",
  id13:"num_1",
  id14:"num_2",
  id15:"num_3",
  id16:"add",
  id17:"+-",
  id18:"num_0",
  id19:"dot",
  id20:"equ",
  lastopera:"+",
  temp:"0",
  flag:"false",
  },
  clickbutton:function(e){
    var data = this.data.result;
    var temp = this.data.temp;
    var lastopera = this.data.lastopera;
    var nonumberflag = this.data.flag;
    if (e.target.id >= 'num_0' && e.target.id <= 'num_9') {
      // 如果当前显示的是0或者上一个点击的是运算符，则直接替换
      console.log(this.data.result,nonumberflag);
      if (this.data.result == "0" || nonumberflag) {
        data = e.target.id.split("_")[1];
      } else {
        // 否则拼接
        data += e.target.id.split("_")[1];
      }
      nonumberflag = false; // 标记当前点击的是数字
    }
    
    else{//是非数字按钮
      nonumberflag=true;
      console.log(e.target.id);
      if(e.target.id=="dot"){
        data+=".";
        nonumberflag=false;
      }
      else if(e.target.id=="clear"){
        data=0;
        temp=0;
        lastopera='+'
      }
      else if(e.target.id=="back"){
        if(data.toString().length>1){
          data = data.substr(0,data.toString().length-1);
        }
        else{
          data=0;
        }
      }
      else if(e.target.id=="div"){
        data=caculate(data,temp,lastopera)
        temp=data
        lastopera="div"
      }
      else if(e.target.id=="sub"){
        data=caculate(data,temp,lastopera)
        temp=data
        lastopera="-"
      }
      else if(e.target.id=="mul"){
        data=caculate(data,temp,lastopera)
        temp=data
        lastopera="mul"
      }
      else if(e.target.id=="add"){
        data=caculate(data,temp,lastopera)
        temp=data
        lastopera="+"
      }
      else if(e.target.id=="equ"){
        console.log(data,temp,lastopera);
        // 处理等号
        data = caculate(data, temp, lastopera);
        temp = "0"; // 重置临时值
        lastopera = "+"; // 重置上一个运算符
      }
    }
    this.setData({
      result:data,
      temp:temp,
      lastopera:lastopera,
      flag:nonumberflag,
    })
  },
})
var caculate=function(data,temp,lastopera){
  if(lastopera=="+"){
    return data;
  }
  var result;
  data = parseFloat(data);
  temp = parseFloat(temp);
  switch (lastopera) {
    case "+":
      result = temp + data;
      break;
    case "-":
      result = temp - data;
      break;
    case "mul":
      result = temp * data;
      break;
    case "div":
      if (data !== 0) {
        result = temp / data;
      } else {
        result = "Error"; // 除数为0时显示错误
      }
      break;
    default:
      result = data; // 默认情况下直接返回当前值
  }

  return result;
}
