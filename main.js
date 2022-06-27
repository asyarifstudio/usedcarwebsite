
const URL = 'https://api.sheety.co/98765a5118133cb8a9af3f919a14164c/testSpreedsheet/sheet1'
$('#thank-form').hide();
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

        $.ajax(URL, 
            {
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(body),
                success:()=>{
                    $("#main-form").hide();
                    $('#thank-form').show();
                }
            }
        )



    }
    else {
        $('#main-form').addClass('was-validated')
    }
})