// pages/calc/calc.js
Page({
  data: {
    data1:"",
    data2:"",
    result:"",
  },
  bindadd:function(e){
    var r = Number(this.data.data1) + Number(this.data.data2);   
     this.setData({
      result:r
    });
    console.log(this.data.result);
  },
  bindput1:function(e){
    var n = e.detail.value;
    if(!isNaN(n)){
       this.setData({
          data1:n
        });
    }
    console.log(this.data.data1);
    },
    bindput2:function(e){
      var n=e.detail.value;
      if(!isNaN(n)){
        this.setData({
          data2:n
        });
      }
      console.log(this.data.data2);
      },
})