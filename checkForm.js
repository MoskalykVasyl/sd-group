

function disableBtn(){
    let btn = document.getElementById('btn-send-message');
let name = document.getElementById('name').value;
let number = document.getElementById('number').value;
let text = document.getElementById('message').value;
    let textForm= new Array(name,number,text);
    
    let empty= textForm.find((value)=>{return value=="";});

    if(empty==undefined){
    btn.className="btn-send-message"};

}