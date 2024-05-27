var reader;
let convertImg2Str=()=>{
    
    let imageFile=document.getElementById('img_file').files[0];
    reader=new FileReader();
    reader.readAsDataURL(imageFile)
    reader.addEventListener("load",()=>{
        document.getElementById('str_tag').innerHTML=reader.result;
        }
    )
}

let str2Image = ()=>{
    console.log(reader.result)
    document.getElementById('img_tag').src=reader.result;
}


/* 
var vs let 
var is global scope 

let is function/block scope. */