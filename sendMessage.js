function sendEmail(){
    let params={
        from_name: document.getElementById('name').value,
        number: document.getElementById('number').value,
        message: document.getElementById('message').value
    }

    emailjs.send("service_fadtors","template_ckdn8a4", params).then(()=>{
        alert("Повідомлення відправлено!");
    })

    document.getElementById('name').value="Ім'я";
    number: document.getElementById('number').value="Номер телефону";
    number: document.getElementById('message').value="Ведіть повідомлення";
}