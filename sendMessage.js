function sendEmail(){
    let params={
        from_name: document.getElementById('name').value,
        number: document.getElementById('number').value,
        message: document.getElementById('message').value
    }
    const pattern=/^[0-9]{10}/;
    if(pattern.test(params.number)){

    emailjs.send("service_fadtors","template_ckdn8a4", params).then(()=>{
        alert("Повідомлення відправлено!");
    });
    document.getElementById('name').value="Ім'я";
    document.getElementById('number').value="Номер телефону";
    document.getElementById('message').value="Введіть повідомлення"
    document.querySelector("#error").remove();
}
else{
    
    let errorMessage=document.createElement('div');
    errorMessage.className="error-message";
    errorMessage.id="error";
    errorMessage.innerHTML="Номер телефону повинен містити 10 цифр!!!"
    let div=document.getElementById('text-feedback');
    div.after(errorMessage);

}
}