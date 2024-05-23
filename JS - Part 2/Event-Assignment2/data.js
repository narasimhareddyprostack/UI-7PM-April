function change_Color(){
    //alert('Test Case 123')
    document.getElementById('abc').style.backgroundColor='red'
}

function change_Case(){
    //alert('Test Case 123')
    /* let tag_ref=document.getElementById('xyz')
    console.log(tag_ref)
    let name = tag_ref.value;
    console.log(name) */

    let name = document.getElementById('xyz').value 
    console.log(name)
    //alert(name.toUpperCase())
    document.getElementById('xyz').value = name.toUpperCase()

}