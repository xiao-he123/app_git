Page({
  data:[{
    defaultsize: 'default',
    warnsize: 'default',
    primarysize: 'default',
    plain: true,
    disabled: false,
    loading: true
  }],
  setdisabled: function(e){
    this.setData({
      disabled: !this.data.disabled
    })
    console.log('修改后的 disabled 值:', this.data.disabled);
  },
  setloading: function(e){
    this.setData({
      loading: !this.data.loading
    })
    console.log('修改后的 loading 值:', this.data.loading);
  },
  default:function(e){
    var d = this.data.defaultsize = 'mini'?'default':'mini';
    console.log(d);
    this.setData({
      defaultsize:d
    })
  },
  primary:function(e){
    var d = this.data.primarysize = 'default'?'mini':'default';
    console.log(d);
    this.setData({
      primarysize:d
    })
  }
 
})
