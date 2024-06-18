setInterval(function(){
    let ct=new Date().toLocaleTimeString()
    document.getElementsByTagName('span')[0].innerHTML=ct
},1000)