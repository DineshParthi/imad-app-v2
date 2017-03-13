
 console.log(`Hi`);
var button1=document.getElementById('counter');
//button1.onclick = function(){
    function clickMe(){
    var request= new XMLHttpRequest();
    console.log(`Hi5`);
    request.onreadystatechange = function(){
        console.log(`Hi3`);
        if(request.readyState === XMLHttpRequest.DONE){
            console.log(`Hi2`);
            if(request.status === 200){
                console.log(`Hi3`);
                var counter=request.responseText;
                var span=document.getElementById('cnt');//chg
                span.innerHTML=counter.toString();//chg
            }
        }
        console.log(request.readyState);
        
    };
    
    request.open('GET','http://dineshparthi.imad.hasura-app.io/counter',true);
    request.send(null);
}

//submit name
var nameInput= document.getElementById('nameInput');
//var name=nameInput.value;
var submit_btn= document.getElementById('submit_btn');
//submit_btn.onclick= function(){
 
 function listme() {  
    var names=['name1','name2','name3','name4'];
    var list="";
    //for(i=0;i< names.length;i++){
    for(i in names){
        list+='<li>'+names[i]+'</li>';
    }
    alert(list);
    var ol=document.getElementById('namelist');
    ol.innerHTML=list;
};