function myAlert(content, func){
    layer.alert(content,{
        title: false,
        closeBtn: 0,
        btn: ['OK'],
        btn1: func
    });
}