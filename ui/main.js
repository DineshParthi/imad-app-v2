
 console.log(`Hi`);
var button1=document.getElementById('counter');
//button1.onclick = function(){
    function clickMe(){
    var request= new XMLHttpRequest();
    request.onreadystagechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            alert("h2");
            console.log(`Hi2`);
            if(request.status === 200){
                alert("h1");
                console.log(`Hi3`);
                var counter=request.responseText;
                var span=document.getElementById('cnt');//chg
                span.innerHTML=counter.toString();//chg
            }
        }
        
    };
    
    request.open('GET','http://dineshparthi.imad.hasura-app.io/counter',true);
    request.send(null);
}