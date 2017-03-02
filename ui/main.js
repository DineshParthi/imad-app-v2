
 console.log(`Hi`);
var button1=document.getElementById('counter');
//button1.onclick = function(){
    function clickMe(){
    alert("h1");
    var req= new XMLHttpRequest();
    req.onreadystagechange=function(){
        if(req.readyState===XMLHttpRequest.DONE){
            if(req.status===200){
                var counter=req.responseText;
                var span=document.getElementById('cnt');//chg
                span.innerHTML=counter.toString();//chg
            }
        }
        
    };
    
    req.open('GET','http://dineshparthi.imad.hasura-app.io/counter',true);
    req.send(null);
}