
const URL = 'https://api.sheety.co/98765a5118133cb8a9af3f919a14164c/testSpreedsheet/sheet1'
$("#main-form").submit((event) => {
    event.preventDefault();
    var name = event.target.name.value;
    var phone = event.target.phone.value;



    if (event.target.name.checkValidity() && event.target.phone.checkValidity()) {
        //both form true, attempt to submit
        let body = {
            "sheet1": {
                "name": name,
                "phone": phone
            }
        }

        $.ajax(URL, {
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(body)
        }, () => {
            console.log("success")
        })

    }
    else {
        $('#main-form').addClass('was-validated')
    }
})