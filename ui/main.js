
 console.log(`Hi`);
var button1=document.getElementById('counter');
//button1.onclick = function(){
    function clickMe(){
    var request= new XMLHttpRequest();
    req.onreadystagechange=function(){
        if(request.readyState === XMLHttpRequest.DONE){
            alert("h2");
            if(request.status===200){
                alert("h1");
                var counter=request.responseText;
                var span=document.getElementById('cnt');//chg
                span.innerHTML=counter.toString();//chg
            }
        }
        
    };
    
    request.open('GET','http://dineshparthi.imad.hasura-app.io/counter',true);
    request.send(null);
}